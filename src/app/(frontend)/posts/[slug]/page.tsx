import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayloadClient } from "@/lib/payload";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { RichText } from "@payloadcms/richtext-lexical/react";

function getMediaUrl(media: unknown): string | undefined {
	if (!media || typeof media !== "object") return undefined;
	const m = media as { url?: string };
	return m.url || undefined;
}

type Args = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Args): Promise<Metadata> {
	const { slug } = await params;
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "posts",
		where: { slug: { equals: slug } },
		limit: 1,
	});

	const post = docs[0];
	if (!post) return { title: "Post Not Found" };

	return {
		title: post.title,
		description: (post.summary as string) || "",
		alternates: { canonical: `/posts/${slug}` },
		openGraph: {
			title: post.title,
			description: (post.summary as string) || "",
			url: `/posts/${slug}`,
			images: post.seoImage ? [getMediaUrl(post.seoImage)!] : undefined,
		},
	};
}

export default async function PostPage({ params }: Args) {
	const { slug } = await params;
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "posts",
		where: { slug: { equals: slug } },
		limit: 1,
	});

	const post = docs[0];
	if (!post) notFound();

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
							<h1 className="hero-title">{post.title}</h1>
						</div>

						{post.summary && (
							<p className="hero-paragraph">{post.summary as string}</p>
						)}

						{post.body && (
							<div className="post-body" style={{ margin: "2rem 0" }}>
								<RichText data={post.body} />
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
