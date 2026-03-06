import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://buildcanada.com";

	const staticPages = [
		{ url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
		{ url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
		{ url: `${baseUrl}/memos`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
		{ url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
		{ url: `${baseUrl}/get-involved`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
	];

	const memoSlugs = [
		"canada-superpower",
		"digital-sovereignty",
		"go",
		"canada-can-attract-the-worlds-best-entrepreneurs",
		"corporate-tax",
		"champions",
		"moonshots",
		"ai-strategy",
		"build-canadas-literacy-foundation",
		"mining",
		"rebuild-canadian-steel",
		"semiconductor",
		"h-1b",
		"reform-itb",
		"streamline-irap",
		"fix-sred",
		"identity",
		"create-more-regional-hubs-to-build-canada",
		"military-procurement",
		"claim-space",
		"deploy-private-sector-experts",
		"reward-the-risk-takers",
		"ai-basic-right",
		"attract-innovation",
		"recognize-commitment-immigration",
		"civic-service-year",
		"creative-future",
		"electrical-energy",
		"prioritize-proven-innovation",
		"productive-government-analysis",
		"sovereign-wealth-fund",
		"modern-military",
		"student-housing",
		"housing-zoning",
		"invest-in-building-homes",
		"rental-housing",
		"housing-taxes",
		"banking-data",
		"stablecoins",
		"children-head-start-fund",
		"skilled-trades",
		"affordable-telecom",
		"food-independence",
		"how-canada-builds",
		"energy-independence",
		"public-service-reform",
		"ai-first-government-services",
		"interprovincial-trade",
		"unlock-health-records-save-canadian-lives",
		"canadian-pride",
		"transportation-permitting",
		"talent-first-immigration",
	];

	const memoPages = memoSlugs.map((slug) => ({
		url: `${baseUrl}/memos/${slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticPages, ...memoPages];
}
