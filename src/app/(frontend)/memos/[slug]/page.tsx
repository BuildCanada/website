import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayloadClient } from "@/lib/payload";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { RichText } from "@payloadcms/richtext-lexical/react";

function getMediaUrl(media: unknown): string {
	if (!media || typeof media !== "object") return "/images/Logo-Box.png";
	const m = media as { url?: string };
	return m.url || "/images/Logo-Box.png";
}

type Args = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Args): Promise<Metadata> {
	const { slug } = await params;
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "memos",
		where: { slug: { equals: slug } },
		limit: 1,
	});

	const memo = docs[0];
	if (!memo) return { title: "Memo Not Found" };

	const builder =
		memo.builder && typeof memo.builder === "object" ? memo.builder : null;
	const authorName =
		builder?.name || (memo.builderName as string) || "Build Canada";

	return {
		title: memo.title,
		description: (memo.description as string) || "",
		alternates: { canonical: `/memos/${slug}` },
		openGraph: {
			title: memo.title,
			description: (memo.description as string) || "",
			url: `/memos/${slug}`,
			images: memo.seoImage ? [getMediaUrl(memo.seoImage)] : undefined,
		},
		authors: [{ name: authorName }],
	};
}

export default async function MemoPage({ params }: Args) {
	const { slug } = await params;
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "memos",
		where: { slug: { equals: slug } },
		limit: 1,
	});

	const memo = docs[0];
	if (!memo) notFound();

	const builder =
		memo.builder && typeof memo.builder === "object" ? memo.builder : null;
	const authorName =
		builder?.name || (memo.builderName as string) || "Build Canada";
	const authorTitle =
		builder?.title || (memo.builderTitle as string) || "Memo";
	const authorAvatar = builder?.profilePhoto
		? getMediaUrl(builder.profilePhoto)
		: (memo.builderAvatar as string) || "/images/Logo-Box.png";

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
							<h1 className="hero-title">{memo.title}</h1>
						</div>

						<div className="builder" style={{ marginTop: "2rem" }}>
							<img
								src={authorAvatar}
								loading="lazy"
								width={60}
								height={60}
								alt=""
								className="avatar-small"
							/>
							<div className="memo-card-name">
								<p className="p2 sans">{authorName}</p>
								<div className="meta">{authorTitle}</div>
							</div>
						</div>

						{memo.keyMessages && (memo.keyMessages as Array<{ message: string }>).length > 0 && (
							<div className="key-messages" style={{ margin: "2rem 0" }}>
								<h3>Key Messages</h3>
								<ul>
									{(memo.keyMessages as Array<{ message: string }>).map(
										(km, i) => (
											<li key={i}>{km.message}</li>
										),
									)}
								</ul>
							</div>
						)}

						{memo.body && (
							<div className="memo-body" style={{ margin: "2rem 0" }}>
								<RichText data={memo.body} />
							</div>
						)}

						{memo.appendix && (
							<div className="memo-appendix" style={{ margin: "2rem 0" }}>
								<h3>Appendix</h3>
								<RichText data={memo.appendix} />
							</div>
						)}

						{memo.supporters && (
							<div className="memo-supporters" style={{ margin: "2rem 0" }}>
								<h3>Supporters</h3>
								<RichText data={memo.supporters} />
							</div>
						)}
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
