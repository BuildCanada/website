import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getPayloadClient } from "@/lib/payload";
import MemoList from "./memo-list";
import type { MemoItem } from "./memo-list";

export const metadata: Metadata = {
	title: "Memos",
	description:
		"Bold ideas to grow Canada, turned into actionable plans, backed by builders who've done it before",
	alternates: { canonical: "/memos" },
	openGraph: {
		title: "Memos",
		description:
			"Bold ideas to grow Canada, turned into actionable plans, backed by builders who've done it before",
		url: "/memos",
	},
};

function getMediaUrl(media: unknown): string {
	if (!media || typeof media !== "object") return "/images/Logo-Box.png";
	const m = media as { url?: string };
	return m.url || "/images/Logo-Box.png";
}

export default async function MemosPage() {
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "memos",
		limit: 100,
		sort: "-publishedAt",
		where: {
			_status: { equals: "published" },
		},
	});

	const memos: MemoItem[] = docs.map((memo) => {
		const builder = memo.builder && typeof memo.builder === "object" ? memo.builder : null;
		const keyMessages = memo.keyMessages as Array<{ message: string }> | undefined;
		const blurb = keyMessages?.[0]?.message || (memo.description as string) || "";
		return {
			category: (memo.category as string) || "nation-building",
			href: `/memos/${memo.slug}`,
			title: memo.title,
			description: blurb,
			avatar: builder?.profilePhoto
				? getMediaUrl(builder.profilePhoto)
				: (memo.builderAvatar as string) || "/images/Logo-Box.png",
			author: builder?.name || (memo.builderName as string) || "Build Canada",
			role: builder?.title || (memo.builderTitle as string) || "Memo",
		};
	});

	return (
		<>
			<div className="wrapper">
				<Navbar />

				<section className="section">
					<div className="container">
						<div className="line-container">
							<div className="line-horizontal-top" />
							<div className="line-horizontal-bottom" />
							<div className="line-vertical-right" />
							<div className="line-vertical-left-3" />
							<h1 className="hero-title">
								Plans for a More Prosperous Canada
							</h1>
						</div>
						<p className="hero-paragraph">
							Bold ideas to grow Canada, turned into actionable plans, backed by
							builders who&apos;ve done it before
						</p>

						<MemoList memos={memos} />
					</div>
				</section>

				<section className="memo-section">
					<div className="container subscription-cta">
						<div className="line-container">
							<h2 className="newsletter-title">
								Be first to know what&apos;s possible
							</h2>
						</div>
						<p className="newsletter-paragraph">
							Get weekly recaps of current events, updates from our team, and
							ideas to help Canada grow
						</p>
						<a
							href="https://buildcanada.substack.com/subscribe"
							target="_blank"
							rel="noopener noreferrer"
							className="primary-button w-button"
						>
							Subscribe
						</a>
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
}
