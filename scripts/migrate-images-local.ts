/**
 * Image migration using Payload Local API (no HTTP).
 * Downloads images from Webflow CDN, saves to disk, uploads to Payload media.
 *
 * Usage: npx tsx scripts/migrate-images-local.ts
 */

import "dotenv/config";
import fs from "fs";
import path from "path";
import { getPayload } from "payload";

interface WebflowItem {
	id: string;
	fieldData: Record<string, unknown>;
}

async function downloadImage(url: string): Promise<{ buffer: Buffer; filename: string; mimeType: string } | null> {
	try {
		const res = await fetch(url);
		if (!res.ok) return null;
		const buffer = Buffer.from(await res.arrayBuffer());
		const contentType = res.headers.get("content-type") || "image/png";
		let filename = decodeURIComponent(path.basename(new URL(url).pathname));
		// Clean filename
		filename = filename.replace(/[^a-zA-Z0-9._-]/g, "-");
		if (!filename.includes(".")) {
			const ext = contentType.includes("webp") ? ".webp" : contentType.includes("png") ? ".png" : contentType.includes("gif") ? ".gif" : ".jpg";
			filename += ext;
		}
		return { buffer, filename, mimeType: contentType };
	} catch (err) {
		console.error(`  Download error: ${(err as Error).message}`);
		return null;
	}
}

async function main() {
	const exportPath = "./scripts/webflow-export.json";
	if (!fs.existsSync(exportPath)) {
		console.error("Run migrate-webflow.ts first");
		process.exit(1);
	}
	const data = JSON.parse(fs.readFileSync(exportPath, "utf-8")) as Record<string, WebflowItem[]>;

	console.log("Initializing Payload...");
	const config = await (await import("../src/payload.config")).default;
	const payload = await getPayload({ config });
	console.log("Payload initialized\n");

	// Helper: upload image and return media doc ID
	async function uploadImage(url: string, alt?: string): Promise<number | null> {
		const img = await downloadImage(url);
		if (!img) return null;

		// Save temp file (Payload needs a file path)
		const tmpDir = "/tmp/payload-migration";
		if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
		const tmpPath = path.join(tmpDir, img.filename);
		fs.writeFileSync(tmpPath, img.buffer);

		try {
			const doc = await payload.create({
				collection: "media",
				data: { alt: alt || "" },
				file: {
					data: img.buffer,
					name: img.filename,
					mimetype: img.mimeType,
					size: img.buffer.length,
				},
			});
			return doc.id as number;
		} catch (err) {
			console.error(`  Upload error for ${img.filename}: ${(err as Error).message}`);
			return null;
		} finally {
			if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
		}
	}

	// Helper: find by slug
	async function findBySlug(collection: string, slug: string): Promise<number | null> {
		const result = await payload.find({
			collection: collection as "teams",
			where: { slug: { equals: slug } },
			limit: 1,
		});
		return (result.docs[0]?.id as number) || null;
	}

	// === Teams ===
	console.log(`Uploading team photos (${data.team.length})...`);
	let count = 0;
	for (const item of data.team) {
		const fd = item.fieldData;
		const photo = fd["profile-photo"] as { url?: string } | undefined;
		if (!photo?.url) continue;

		const id = await findBySlug("teams", fd.slug as string);
		if (!id) continue;

		const mediaId = await uploadImage(photo.url, fd.name as string);
		if (mediaId) {
			await payload.update({ collection: "teams", id, data: { profilePhoto: mediaId } });
			count++;
			console.log(`  ✓ ${fd.name}`);
		}
	}
	console.log(`  → ${count} team photos uploaded\n`);

	// === Tools ===
	console.log(`Uploading tool images (${data.tools.length})...`);
	count = 0;
	for (const item of data.tools) {
		const fd = item.fieldData;
		const img = fd.image as { url?: string } | undefined;
		if (!img?.url) continue;

		const id = await findBySlug("tools", fd.slug as string);
		if (!id) continue;

		const mediaId = await uploadImage(img.url, fd.name as string);
		if (mediaId) {
			await payload.update({ collection: "tools", id, data: { image: mediaId } });
			count++;
			console.log(`  ✓ ${fd.name}`);
		}
	}
	console.log(`  → ${count} tool images uploaded\n`);

	// === Builders ===
	console.log(`Uploading builder images (${data.builders.length})...`);
	count = 0;
	for (const item of data.builders) {
		const fd = item.fieldData;
		const img = fd.image as { url?: string } | undefined;
		if (!img?.url) continue;

		const id = await findBySlug("builders", fd.slug as string);
		if (!id) continue;

		const mediaId = await uploadImage(img.url, fd.name as string);
		if (mediaId) {
			await payload.update({ collection: "builders", id, data: { image: mediaId } });
			count++;
			console.log(`  ✓ ${fd.name}`);
		}
	}
	console.log(`  → ${count} builder images uploaded\n`);

	console.log("=== Image migration complete ===");
	process.exit(0);
}

main().catch((err) => {
	console.error("Failed:", err);
	process.exit(1);
});
