/**
 * Image migration: Downloads images from Webflow CDN and uploads to Payload media,
 * then links them to existing Payload records.
 *
 * Run AFTER migrate-webflow.ts has created the text content.
 * Requires the dev server running on localhost:3333.
 *
 * Usage: npx tsx scripts/migrate-images.ts
 */

import "dotenv/config";
import fs from "fs";
import path from "path";

const PAYLOAD_URL = process.env.PAYLOAD_URL || "http://localhost:3333";
let payloadToken = "";

async function payloadLogin(): Promise<void> {
	const res = await fetch(`${PAYLOAD_URL}/api/users/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: "migration@buildcanada.com",
			password: "migration-temp-pw-2024!",
		}),
	});
	if (!res.ok) throw new Error(`Login failed: ${res.status}`);
	const data = (await res.json()) as { token: string };
	payloadToken = data.token;
}

async function uploadImage(imageUrl: string, altText?: string): Promise<string | null> {
	try {
		const imgRes = await fetch(imageUrl);
		if (!imgRes.ok) {
			console.error(`  Download failed ${imgRes.status}: ${imageUrl}`);
			return null;
		}
		const buffer = Buffer.from(await imgRes.arrayBuffer());
		const contentType = imgRes.headers.get("content-type") || "image/png";

		let filename = decodeURIComponent(path.basename(new URL(imageUrl).pathname));
		if (!filename.includes(".")) {
			const ext = contentType.includes("webp") ? ".webp" : contentType.includes("png") ? ".png" : contentType.includes("gif") ? ".gif" : ".jpg";
			filename += ext;
		}

		const form = new FormData();
		form.append("file", new File([buffer], filename, { type: contentType }));
		if (altText) form.append("alt", altText);

		const res = await fetch(`${PAYLOAD_URL}/api/media`, {
			method: "POST",
			headers: { Authorization: `JWT ${payloadToken}` },
			body: form,
		});
		const data = (await res.json()) as { doc?: { id: string }; errors?: unknown[] };
		if (!res.ok || !data.doc) {
			console.error(`  Upload failed for ${filename}:`, JSON.stringify(data.errors || data).slice(0, 200));
			return null;
		}
		return data.doc.id;
	} catch (err) {
		console.error(`  Error: ${(err as Error).message}`);
		return null;
	}
}

async function payloadFind(collection: string, slug: string): Promise<string | null> {
	const res = await fetch(
		`${PAYLOAD_URL}/api/${collection}?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
		{ headers: { Authorization: `JWT ${payloadToken}` } },
	);
	const data = (await res.json()) as { docs: Array<{ id: string }> };
	return data.docs?.[0]?.id || null;
}

async function payloadUpdate(collection: string, id: string, data: Record<string, unknown>): Promise<void> {
	await fetch(`${PAYLOAD_URL}/api/${collection}/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			Authorization: `JWT ${payloadToken}`,
		},
		body: JSON.stringify(data),
	});
}

interface WebflowItem {
	id: string;
	fieldData: Record<string, unknown>;
}

async function main() {
	// Load the exported Webflow data
	const exportPath = "./scripts/webflow-export.json";
	if (!fs.existsSync(exportPath)) {
		console.error("Run migrate-webflow.ts first to create webflow-export.json");
		process.exit(1);
	}
	const data = JSON.parse(fs.readFileSync(exportPath, "utf-8")) as Record<string, WebflowItem[]>;

	await payloadLogin();
	console.log("Logged into Payload\n");

	// === Teams: upload profile photos ===
	console.log(`Uploading team profile photos (${data.team.length})...`);
	let uploaded = 0;
	for (const item of data.team) {
		const fd = item.fieldData;
		const photo = fd["profile-photo"] as { url?: string } | undefined;
		if (!photo?.url) continue;

		const slug = fd.slug as string;
		const payloadId = await payloadFind("teams", slug);
		if (!payloadId) {
			console.log(`  Skip ${fd.name} (not found in Payload)`);
			continue;
		}

		const mediaId = await uploadImage(photo.url, fd.name as string);
		if (mediaId) {
			await payloadUpdate("teams", payloadId, { profilePhoto: mediaId });
			uploaded++;
			process.stdout.write(`  ✓ ${fd.name}\n`);
		}
	}
	console.log(`  Uploaded ${uploaded} team photos\n`);

	// === Tools: upload images ===
	console.log(`Uploading tool images (${data.tools.length})...`);
	uploaded = 0;
	for (const item of data.tools) {
		const fd = item.fieldData;
		const img = fd.image as { url?: string } | undefined;
		if (!img?.url) continue;

		const slug = fd.slug as string;
		const payloadId = await payloadFind("tools", slug);
		if (!payloadId) {
			console.log(`  Skip ${fd.name} (not found in Payload)`);
			continue;
		}

		const mediaId = await uploadImage(img.url, fd.name as string);
		if (mediaId) {
			await payloadUpdate("tools", payloadId, { image: mediaId });
			uploaded++;
			process.stdout.write(`  ✓ ${fd.name}\n`);
		}
	}
	console.log(`  Uploaded ${uploaded} tool images\n`);

	// === Builders: upload images ===
	console.log(`Uploading builder images (${data.builders.length})...`);
	uploaded = 0;
	for (const item of data.builders) {
		const fd = item.fieldData;
		const img = fd.image as { url?: string } | undefined;
		if (!img?.url) continue;

		const slug = fd.slug as string;
		const payloadId = await payloadFind("builders", slug);
		if (!payloadId) {
			console.log(`  Skip ${fd.name} (not found in Payload)`);
			continue;
		}

		const mediaId = await uploadImage(img.url, fd.name as string);
		if (mediaId) {
			await payloadUpdate("builders", payloadId, { image: mediaId });
			uploaded++;
			process.stdout.write(`  ✓ ${fd.name}\n`);
		}
	}
	console.log(`  Uploaded ${uploaded} builder images\n`);

	console.log("=== Image migration complete ===");
}

main().catch((err) => {
	console.error("Failed:", err);
	process.exit(1);
});
