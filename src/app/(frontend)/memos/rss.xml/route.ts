import { getPayloadClient } from "@/lib/payload";

const baseUrl = "https://buildcanada.com";

function escapeXml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

export async function GET() {
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "memos",
		limit: 200,
		sort: "-createdAt",
	});

	const items = docs
		.map((memo) => {
			const builder =
				memo.builder && typeof memo.builder === "object" ? memo.builder : null;
			const authorName =
				builder?.name || (memo.builderName as string) || "Build Canada";

			return `    <item>
      <title>${escapeXml(memo.title)}</title>
      <link>${baseUrl}/memos/${memo.slug}</link>
      <guid isPermaLink="true">${baseUrl}/memos/${memo.slug}</guid>
      <description>${escapeXml((memo.description as string) || "")}</description>
      <dc:creator>${escapeXml(authorName)}</dc:creator>
    </item>`;
		})
		.join("\n");

	const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Build Canada</title>
    <link>${baseUrl}/memos</link>
    <description>Plans for a more prosperous Canada</description>
    <language>en-ca</language>
    <atom:link href="${baseUrl}/memos/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

	return new Response(feed, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=3600",
		},
	});
}
