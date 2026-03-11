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
		collection: "builders",
		where: { slug: { equals: slug } },
		limit: 1,
	});

	const builder = docs[0];
	if (!builder) return { title: "Builder Not Found" };

	return {
		title: builder.title,
		description: (builder.byline as string) || "",
		alternates: { canonical: `/great-canadian-builders/${slug}` },
		openGraph: {
			title: builder.title,
			description: (builder.byline as string) || "",
			url: `/great-canadian-builders/${slug}`,
			images: builder.image ? [getMediaUrl(builder.image)!] : undefined,
		},
	};
}

export default async function BuilderPage({ params }: Args) {
	const { slug } = await params;
	const payload = await getPayloadClient();
	const { docs } = await payload.find({
		collection: "builders",
		where: { slug: { equals: slug } },
		limit: 1,
	});

	const builder = docs[0];
	if (!builder) notFound();

	const imageUrl = getMediaUrl(builder.image);

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
							<h1 className="hero-title">{builder.title}</h1>
						</div>

						{builder.byline && (
							<p className="hero-paragraph">{builder.byline as string}</p>
						)}

						{imageUrl && (
							<div style={{ margin: "2rem 0" }}>
								<img
									src={imageUrl}
									alt={builder.title}
									style={{ maxWidth: "100%", borderRadius: "8px" }}
								/>
							</div>
						)}

						{builder.quote && (
							<blockquote
								style={{
									borderLeft: "4px solid #c8102e",
									paddingLeft: "1.5rem",
									margin: "2rem 0",
									fontStyle: "italic",
									fontSize: "1.25rem",
								}}
							>
								{builder.quote as string}
							</blockquote>
						)}

						{builder.body && (
							<div className="builder-body" style={{ margin: "2rem 0" }}>
								<RichText data={builder.body} />
							</div>
						)}

						{builder.author && (
							<div className="builder-author" style={{ margin: "2rem 0" }}>
								<RichText data={builder.author} />
							</div>
						)}
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
}
