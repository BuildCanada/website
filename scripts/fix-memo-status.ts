/**
 * Fix memo status and publishedAt dates using Webflow export data.
 *
 * - Sets _status to "draft" for items that were drafts in Webflow
 * - Sets _status to "published" for items that were published in Webflow
 * - Updates publishedAt to use Webflow's lastPublished date (correct ordering)
 *
 * Requires Payload dev server running on PAYLOAD_URL (default http://localhost:3000)
 *
 * Usage: npx tsx scripts/fix-memo-status.ts
 */

import "dotenv/config";
import fs from "fs";

const PAYLOAD_URL = process.env.PAYLOAD_URL || "http://localhost:3333";

interface WebflowItem {
	id: string;
	createdOn: string;
	lastPublished: string | null;
	isDraft: boolean;
	isArchived: boolean;
	fieldData: Record<string, unknown>;
}

let payloadToken = "";

async function payloadLogin(): Promise<void> {
	const res = await fetch(`${PAYLOAD_URL}/api/users/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: "admin@buildcanada.com",
			password: "admin",
		}),
	});
	if (!res.ok) {
		// Try migration user
		const res2 = await fetch(`${PAYLOAD_URL}/api/users/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: "migration@buildcanada.com",
				password: "migration-temp-pw-2024!",
			}),
		});
		if (!res2.ok) throw new Error(`Payload login failed: ${res2.status}`);
		const data = (await res2.json()) as { token: string };
		payloadToken = data.token;
	} else {
		const data = (await res.json()) as { token: string };
		payloadToken = data.token;
	}
	console.log("Logged into Payload");
}

async function main() {
	const exportPath = "./scripts/webflow-export.json";
	if (!fs.existsSync(exportPath)) {
		console.error("webflow-export.json not found. Run migrate-webflow.ts first.");
		process.exit(1);
	}

	const data = JSON.parse(fs.readFileSync(exportPath, "utf-8")) as Record<string, WebflowItem[]>;
	const webflowMemos = data.memos;

	// Build a map of slug → webflow data
	const webflowBySlug = new Map<string, WebflowItem>();
	for (const item of webflowMemos) {
		const slug = item.fieldData.slug as string;
		if (slug) webflowBySlug.set(slug, item);
	}

	await payloadLogin();

	// Fetch all memos from Payload (including drafts)
	let allMemos: Array<{ id: string; slug: string; title: string }> = [];
	let page = 1;
	while (true) {
		const res = await fetch(
			`${PAYLOAD_URL}/api/memos?limit=100&page=${page}`,
			{ headers: { Authorization: `JWT ${payloadToken}` } },
		);
		const body = (await res.json()) as {
			docs: Array<{ id: string; slug: string; title: string }>;
			hasNextPage: boolean;
		};
		allMemos.push(...body.docs);
		if (!body.hasNextPage) break;
		page++;
	}

	console.log(`Found ${allMemos.length} memos in Payload`);
	console.log(`Found ${webflowMemos.length} memos in Webflow export\n`);

	let updated = 0;
	let markedDraft = 0;
	let markedPublished = 0;

	for (const doc of allMemos) {
		const wf = webflowBySlug.get(doc.slug);

		if (!wf) {
			console.log(`  ? No Webflow match for "${doc.title}" (slug: ${doc.slug})`);
			continue;
		}

		// Published = has been published at least once (lastPublished is set)
		// isDraft in Webflow means "has unpublished edits", not "never published"
		const shouldBePublished = !!wf.lastPublished;
		const newStatus = shouldBePublished ? "published" : "draft";
		// Use createdOn for ordering (matches live Webflow site sort order)
		// lastPublished changes on every re-publish, breaking the order
		const newPublishedAt = wf.createdOn;

		const res = await fetch(`${PAYLOAD_URL}/api/memos/${doc.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `JWT ${payloadToken}`,
			},
			body: JSON.stringify({
				_status: newStatus,
				publishedAt: newPublishedAt,
			}),
		});

		if (!res.ok) {
			const text = await res.text();
			console.error(`  ✗ Failed to update "${doc.title}": ${text.slice(0, 200)}`);
			continue;
		}

		if (newStatus === "draft") {
			markedDraft++;
			console.log(`  ✗ DRAFT: ${doc.title}`);
		} else {
			markedPublished++;
			console.log(`  ✓ ${doc.title}`);
		}
		updated++;
	}

	console.log(`\n=== Done ===`);
	console.log(`  Updated: ${updated}`);
	console.log(`  Published: ${markedPublished}`);
	console.log(`  Drafts: ${markedDraft}`);
}

main().catch((err) => {
	console.error("Failed:", err);
	process.exit(1);
});
