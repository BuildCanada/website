import type { MetadataRoute } from "next";
import { getPayloadClient } from "@/lib/payload";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://buildcanada.com";

	const payload = await getPayloadClient();

	const [memosResult, postsResult, buildersResult] = await Promise.all([
		payload.find({ collection: "memos", limit: 300, sort: "-createdAt" }),
		payload.find({
			collection: "posts",
			where: { hidden: { not_equals: true } },
			limit: 100,
		}),
		payload.find({ collection: "builders", limit: 100 }),
	]);

	const staticPages: MetadataRoute.Sitemap = [
		{ url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
		{ url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${baseUrl}/memos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
		{ url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
		{ url: `${baseUrl}/get-involved`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
	];

	const memoPages: MetadataRoute.Sitemap = memosResult.docs.map((memo) => ({
		url: `${baseUrl}/memos/${memo.slug}`,
		lastModified: new Date(memo.updatedAt),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	const postPages: MetadataRoute.Sitemap = postsResult.docs.map((post) => ({
		url: `${baseUrl}/posts/${post.slug}`,
		lastModified: new Date(post.updatedAt),
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	const builderPages: MetadataRoute.Sitemap = buildersResult.docs.map((builder) => ({
		url: `${baseUrl}/great-canadian-builders/${builder.slug}`,
		lastModified: new Date(builder.updatedAt),
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	return [...staticPages, ...memoPages, ...postPages, ...builderPages];
}
