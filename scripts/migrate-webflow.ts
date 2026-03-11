/**
 * Migration script: Webflow CMS → Payload CMS
 *
 * Fetches all content from Webflow API and imports into Payload via REST API.
 * The Payload dev server must be running on PAYLOAD_URL (default http://localhost:3333).
 *
 * Usage: npx tsx scripts/migrate-webflow.ts
 */

import "dotenv/config";
import fs from "fs";
import path from "path";

const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_KEY || process.env.WEBFLOW_API_TOKEN || "";
const WEBFLOW_BASE = "https://api.webflow.com/v2";
const SITE_ID = "679d23fc682f2bf860558c9a";
const PAYLOAD_URL = process.env.PAYLOAD_URL || "http://localhost:3333";

// Webflow collection IDs
const COLLECTIONS = {
	team: "679d23fc682f2bf860558cdc",
	memos: "679d23fc682f2bf860558cbe",
	posts: "684867541456a61e3e1bee47",
	tools: "6852f12a87c79118b6e0fafb",
	builders: "6887ed9d9b83c3d68c8119d2",
};

// Webflow role hash → Payload role value
const ROLE_MAP: Record<string, string> = {
	c5ce55e9374acb9562bb43aaaf69770d: "board",
	"944812afca5b56a3cd9c34898e384517": "team",
	"20ca1242b5afbfc6d502e24b42052210": "volunteer",
};

// Webflow category hash → Payload category value
const CATEGORY_MAP: Record<string, string> = {
	"0fe9e9965e36fb950b3aba560b333550": "housing",
	eaa280191195bdaf636392c584783eb2: "industry",
	"455e48223a385017de9dfc47886a6bc8": "government-transformation",
	"0e69a7ae596c2271c5d587fef1c9b476": "digital-innovation",
	"97cd702c4cb08d4e69ec7c47c112cca5": "nation-building",
	"00d3874c9fe83b07882574ee96600deb": "immigration",
	b0d18b2b2f3955ca24414b0ff7745c95: "energy",
	fb551c04c199ab7dd0d7aef0a211764c: "finance",
	f927f68ffa12d7053acac7f765ebc039: "defence",
};

if (!WEBFLOW_API_TOKEN) {
	console.error("WEBFLOW_API_KEY is required in .env");
	process.exit(1);
}

// ─── Webflow API helpers ────────────────────────────────────────────

interface WebflowItem {
	id: string;
	createdOn: string;
	fieldData: Record<string, unknown>;
}

async function webflowGet(urlPath: string): Promise<unknown> {
	const res = await fetch(`${WEBFLOW_BASE}${urlPath}`, {
		headers: { Authorization: `Bearer ${WEBFLOW_API_TOKEN}` },
	});
	if (!res.ok) throw new Error(`Webflow ${res.status}: ${await res.text()}`);
	return res.json();
}

async function fetchAllItems(collectionId: string): Promise<WebflowItem[]> {
	const items: WebflowItem[] = [];
	let offset = 0;
	while (true) {
		const data = (await webflowGet(
			`/collections/${collectionId}/items?limit=100&offset=${offset}`,
		)) as { items: WebflowItem[]; pagination: { total: number } };
		items.push(...data.items);
		offset += 100;
		if (items.length >= data.pagination.total) break;
	}
	return items;
}

// ─── Payload API helpers ────────────────────────────────────────────

let payloadToken = "";

async function payloadLogin(): Promise<void> {
	// Try to create a migration admin user first, ignore if exists
	try {
		const createRes = await fetch(`${PAYLOAD_URL}/api/users`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: "migration@buildcanada.com",
				password: "migration-temp-pw-2024!",
			}),
		});
		if (createRes.ok) {
			console.log("Created migration admin user");
		}
	} catch {
		// ignore
	}

	const res = await fetch(`${PAYLOAD_URL}/api/users/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: "migration@buildcanada.com",
			password: "migration-temp-pw-2024!",
		}),
	});
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Payload login failed: ${res.status} ${text}`);
	}
	const data = (await res.json()) as { token: string };
	payloadToken = data.token;
	console.log("Logged into Payload");
}

async function payloadCreate(
	collection: string,
	data: Record<string, unknown>,
): Promise<Record<string, unknown>> {
	const res = await fetch(`${PAYLOAD_URL}/api/${collection}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `JWT ${payloadToken}`,
		},
		body: JSON.stringify(data),
	});
	const body = (await res.json()) as { doc?: Record<string, unknown>; errors?: unknown[] };
	if (!res.ok || body.errors) {
		console.error(`  Failed to create ${collection}:`, JSON.stringify(body.errors || body).slice(0, 300));
		return {};
	}
	return body.doc || {};
}

async function payloadUploadImage(
	imageUrl: string,
	altText?: string,
): Promise<string | null> {
	try {
		// Download image
		const imgRes = await fetch(imageUrl);
		if (!imgRes.ok) return null;
		const buffer = Buffer.from(await imgRes.arrayBuffer());

		// Determine filename and content type
		const urlPath = new URL(imageUrl).pathname;
		let filename = path.basename(urlPath).replace(/%20/g, "-");
		const contentType = imgRes.headers.get("content-type") || "image/png";

		// Ensure filename has an extension
		if (!filename.includes(".")) {
			const ext = contentType.includes("webp") ? ".webp" : contentType.includes("png") ? ".png" : ".jpg";
			filename += ext;
		}

		// Upload to Payload via multipart form
		const FormData = (await import("undici")).FormData;
		const File = (await import("undici")).File;
		const form = new FormData();
		form.append("file", new File([buffer], filename, { type: contentType }));
		if (altText) form.append("alt", altText);

		const res = await fetch(`${PAYLOAD_URL}/api/media`, {
			method: "POST",
			headers: { Authorization: `JWT ${payloadToken}` },
			body: form as unknown as BodyInit,
		});
		const data = (await res.json()) as { doc?: { id: string } };
		if (!res.ok || !data.doc) {
			console.error(`  Failed to upload image ${filename}`);
			return null;
		}
		return data.doc.id;
	} catch (err) {
		console.error(`  Image upload error for ${imageUrl}:`, (err as Error).message);
		return null;
	}
}

// ─── HTML → Lexical conversion ──────────────────────────────────────

function htmlToLexical(html: string): Record<string, unknown> {
	// Store as HTML in a Lexical root with a single HTML block
	// Payload's Lexical editor can handle raw HTML content
	return {
		root: {
			type: "root",
			children: [
				{
					type: "paragraph",
					children: [
						{
							type: "text",
							text: html,
							format: 0,
							detail: 0,
							mode: "normal",
							style: "",
							version: 1,
						},
					],
					direction: "ltr",
					format: "",
					indent: 0,
					version: 1,
					textFormat: 0,
					textStyle: "",
				},
			],
			direction: "ltr",
			format: "",
			indent: 0,
			version: 1,
		},
	};
}

// ─── Migration logic ────────────────────────────────────────────────

// Map Webflow team item ID → Payload team doc ID
const teamIdMap = new Map<string, string>();

async function migrateTeams(items: WebflowItem[]): Promise<void> {
	console.log(`\nMigrating ${items.length} team members...`);
	for (const item of items) {
		const fd = item.fieldData;
		const roleHash = (fd.role as string) || "";
		const role = ROLE_MAP[roleHash] || "team";

		// Upload profile photo
		let profilePhotoId: string | null = null;
		const photo = fd["profile-photo"] as { url?: string } | undefined;
		if (photo?.url) {
			profilePhotoId = await payloadUploadImage(photo.url, fd.name as string);
		}

		const doc = await payloadCreate("teams", {
			name: fd.name as string,
			slug: fd.slug as string,
			title: (fd.title as string) || "",
			role,
			linkedin: (fd.linkedin as string) || "",
			twitter: (fd.twitter as string) || "",
			teamOrder: (fd["team-order"] as number) || 0,
			...(profilePhotoId ? { profilePhoto: profilePhotoId } : {}),
		});

		if (doc.id) {
			teamIdMap.set(item.id, doc.id as string);
			console.log(`  ✓ ${fd.name}`);
		}
	}
}

async function migrateMemos(items: WebflowItem[]): Promise<void> {
	console.log(`\nMigrating ${items.length} memos...`);
	for (const item of items) {
		const fd = item.fieldData;
		const categoryHash = (fd.category as string) || "";
		const category = CATEGORY_MAP[categoryHash] || "";

		// Resolve builder relationship
		const builderId = fd.builder ? teamIdMap.get(fd.builder as string) : undefined;
		const builder2Id = fd["builder-2"] ? teamIdMap.get(fd["builder-2"] as string) : undefined;

		// Key messages
		const keyMessages: Array<{ message: string }> = [];
		for (let i = 1; i <= 4; i++) {
			const msg = fd[`key-message-${i}`] as string | undefined;
			if (msg) keyMessages.push({ message: msg });
		}

		// Upload SEO image if present
		let seoImageId: string | null = null;
		const seoImg = fd["open-graph-image"] as { url?: string } | undefined;
		if (seoImg?.url) {
			seoImageId = await payloadUploadImage(seoImg.url);
		}

		const doc = await payloadCreate("memos", {
			title: fd.name as string,
			slug: fd.slug as string,
			description: (fd.description as string) || "",
			category: category || undefined,
			...(builderId ? { builder: builderId } : {}),
			...(builder2Id ? { builder2: builder2Id } : {}),
			keyMessages: keyMessages.length > 0 ? keyMessages : undefined,
			body: fd.body ? htmlToLexical(fd.body as string) : undefined,
			appendix: fd.appendix ? htmlToLexical(fd.appendix as string) : undefined,
			supporters: fd.supporters ? htmlToLexical(fd.supporters as string) : undefined,
			twitterEmbed: fd["twitter-embed"]
				? htmlToLexical(fd["twitter-embed"] as string)
				: undefined,
			...(seoImageId ? { seoImage: seoImageId } : {}),
			publishedAt: item.createdOn,
			// Fallback builder info
			builderName: (fd["builder-name"] as string) || "",
			builderTitle: (fd["builder-title"] as string) || "",
			builderAvatar: (fd["builder-avatar"] as string) || "",
		});

		if (doc.id) {
			console.log(`  ✓ ${fd.name}`);
		}
	}
}

async function migratePosts(items: WebflowItem[]): Promise<void> {
	console.log(`\nMigrating ${items.length} posts...`);
	for (const item of items) {
		const fd = item.fieldData;

		const doc = await payloadCreate("posts", {
			title: fd.name as string,
			slug: fd.slug as string,
			summary: (fd["post-summary"] as string) || "",
			body: fd["post-body"] ? htmlToLexical(fd["post-body"] as string) : undefined,
			hidden: fd.hidden === true,
		});

		if (doc.id) {
			console.log(`  ✓ ${fd.name}`);
		}
	}
}

async function migrateTools(items: WebflowItem[]): Promise<void> {
	console.log(`\nMigrating ${items.length} tools...`);
	for (const item of items) {
		const fd = item.fieldData;

		// Upload image
		let imageId: string | null = null;
		const img = fd.image as { url?: string } | undefined;
		if (img?.url) {
			imageId = await payloadUploadImage(img.url, fd.name as string);
		}

		const doc = await payloadCreate("tools", {
			title: fd.name as string,
			slug: fd.slug as string,
			description: (fd.description as string) || "",
			url: (fd.url as string) || "",
			...(imageId ? { image: imageId } : {}),
		});

		if (doc.id) {
			console.log(`  ✓ ${fd.name}`);
		}
	}
}

async function migrateBuilders(items: WebflowItem[]): Promise<void> {
	console.log(`\nMigrating ${items.length} builders...`);
	for (const item of items) {
		const fd = item.fieldData;

		// Upload image
		let imageId: string | null = null;
		const img = fd.image as { url?: string } | undefined;
		if (img?.url) {
			imageId = await payloadUploadImage(img.url, fd.name as string);
		}

		const doc = await payloadCreate("builders", {
			title: fd.name as string,
			slug: fd.slug as string,
			byline: (fd["key-message-1"] as string) || "",
			quote: (fd.quote as string) || "",
			body: fd.body ? htmlToLexical(fd.body as string) : undefined,
			author: fd.supporters ? htmlToLexical(fd.supporters as string) : undefined,
			...(imageId ? { image: imageId } : {}),
		});

		if (doc.id) {
			console.log(`  ✓ ${fd.name}`);
		}
	}
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
	console.log("=== Webflow → Payload Migration ===\n");

	// Login to Payload
	await payloadLogin();

	// Fetch all Webflow data
	console.log("Fetching Webflow data...");
	const teamItems = await fetchAllItems(COLLECTIONS.team);
	console.log(`  team: ${teamItems.length} items`);
	const memoItems = await fetchAllItems(COLLECTIONS.memos);
	console.log(`  memos: ${memoItems.length} items`);
	const postItems = await fetchAllItems(COLLECTIONS.posts);
	console.log(`  posts: ${postItems.length} items`);
	const toolItems = await fetchAllItems(COLLECTIONS.tools);
	console.log(`  tools: ${toolItems.length} items`);
	const builderItems = await fetchAllItems(COLLECTIONS.builders);
	console.log(`  builders: ${builderItems.length} items`);

	// Save raw export for reference
	const exportData = { team: teamItems, memos: memoItems, posts: postItems, tools: toolItems, builders: builderItems };
	fs.writeFileSync("./scripts/webflow-export.json", JSON.stringify(exportData, null, 2));
	console.log("Raw export saved to scripts/webflow-export.json");

	// Migrate in order: teams first (memos reference them), then rest
	await migrateTeams(teamItems);
	await migrateMemos(memoItems);
	await migratePosts(postItems);
	await migrateTools(toolItems);
	await migrateBuilders(builderItems);

	console.log("\n=== Migration complete ===");
	console.log(`  Teams: ${teamIdMap.size}/${teamItems.length}`);
}

main().catch((err) => {
	console.error("Migration failed:", err);
	process.exit(1);
});
