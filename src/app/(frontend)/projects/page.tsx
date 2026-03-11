import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";

export const metadata: Metadata = {
	title: "Projects",
	description: "Tools and posts from the Build Canada team",
	alternates: { canonical: "/projects" },
	openGraph: {
		title: "Projects",
		description: "Tools and posts from the Build Canada team",
		url: "/projects",
	},
};

function ArrowIcon() {
	return (
		<img
			src="/images/arrow.svg"
			loading="lazy"
			width={14}
			height={14}
			alt=""
			className="arrow-right"
			style={{ transform: "rotate(-90deg)" }}
		/>
	);
}

function ArrowIcon2() {
	return (
		<img
			src="/images/arrow.svg"
			loading="lazy"
			width={14}
			height={14}
			alt=""
			className="arrow-right-2"
			style={{ transform: "rotate(-90deg)" }}
		/>
	);
}

function ReadMoreCta() {
	return (
		<div className="card-meta">
			<div className="cta">
				<div className="meta">Read more</div>
				<div className="read-icon">
					<ArrowIcon />
					<ArrowIcon2 />
				</div>
			</div>
		</div>
	);
}

function getMediaUrl(media: unknown): string | undefined {
	if (!media || typeof media !== "object") return undefined;
	const m = media as { url?: string };
	return m.url || undefined;
}

export default async function ProjectsPage() {
	const payload = await getPayloadClient();

	const [toolsResult, postsResult] = await Promise.all([
		payload.find({ collection: "tools", limit: 50, sort: "createdAt" }),
		payload.find({
			collection: "posts",
			where: { hidden: { not_equals: true } },
			limit: 50,
			sort: "-createdAt",
		}),
	]);

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
							<div className="div-block-2">
								<h2>Projects</h2>
								<p>
									Helping Canadians understand where we&apos;ve been and how
									we&apos;re doing &ndash; built with our community
								</p>
							</div>
						</div>

						<div className="memo-wrapper">
							<div className="memo-grid" role="list">
								{toolsResult.docs.map((tool) => {
									const imageUrl = getMediaUrl(tool.image);
									return (
										<div
											key={tool.id}
											className="memo-item"
											role="listitem"
										>
											<a
												href={(tool.url as string) || "#"}
												target="_blank"
												rel="noopener noreferrer"
												className="memo-card"
											>
												{imageUrl && (
													<div className="project-image">
														<img
															src={imageUrl}
															loading="lazy"
															alt={tool.title}
															srcSet={(tool.srcSet as string) || undefined}
															sizes="100vw"
														/>
													</div>
												)}
												<div className="card-text project-card-text">
													<div className="memo-details">
														<h3>{tool.title}</h3>
														<p>{(tool.description as string) || ""}</p>
													</div>
												</div>
											</a>
										</div>
									);
								})}
							</div>
						</div>

						<div className="div-block-2">
							<h2>Posts</h2>
							<p>
								Ideas, research, and reports from the Build Canada team
							</p>
						</div>

						<div className="memo-wrapper">
							<div className="memo-grid" role="list">
								{postsResult.docs.map((post) => (
									<div
										key={post.id}
										className="memo-item"
										role="listitem"
									>
										<Link href={`/posts/${post.slug}`} className="memo-card">
											<div className="card-text">
												<div className="memo-details">
													<h3>{post.title}</h3>
													<p>{(post.summary as string) || ""}</p>
												</div>
											</div>
											<ReadMoreCta />
										</Link>
									</div>
								))}
							</div>
						</div>
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
							Get weekly recaps of current events, updates from our team,
							and ideas to help Canada grow
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
