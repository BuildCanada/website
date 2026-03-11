import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";

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

function getMediaUrl(media: unknown): string {
	if (!media || typeof media !== "object") return "/images/Logo-Box.png";
	const m = media as { url?: string };
	return m.url || "/images/Logo-Box.png";
}

export default async function Home() {
	const payload = await getPayloadClient();

	const [memosResult, toolsResult, postsResult] = await Promise.all([
		payload.find({
			collection: "memos",
			limit: 2,
			sort: "-publishedAt",
			where: { _status: { equals: "published" } },
		}),
		payload.find({ collection: "tools", limit: 2, sort: "createdAt" }),
		payload.find({
			collection: "posts",
			where: { hidden: { not_equals: true } },
			limit: 2,
			sort: "-createdAt",
		}),
	]);

	return (
		<>
			<div className="wrapper">
				<Navbar />

				{/* === Hero Section === */}
				<section className="section hero hero-alt" style={{ opacity: 0 }}>
					<div className="ellipses-top">
						<svg
							width="90"
							height="180"
							viewBox="0 0 90 180"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-1.86607e-05 1C49.1533 0.999997 89 40.8467 89 90C89 139.153 49.1533 179 -3.09944e-06 179"
								stroke="#272727"
								strokeOpacity="0.2"
							/>
							<path
								d="M-1.61652e-05 11C44.1828 11 80 46.5934 80 90.5C80 134.407 44.1828 170 -2.26498e-06 170"
								stroke="#272727"
								strokeOpacity="0.2"
							/>
						</svg>
					</div>
					<div className="ellipses-bottom">
						<svg
							width="90"
							height="180"
							viewBox="0 0 90 180"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M90 179C40.8467 179 1 139.153 1 90C1 40.8467 40.8467 1 90 1"
								stroke="#272727"
								strokeOpacity="0.2"
							/>
							<path
								d="M90 169C45.8172 169 10 133.407 10 89.5C10 45.5934 45.8172 10 90 10"
								stroke="#272727"
								strokeOpacity="0.2"
							/>
						</svg>
					</div>
					<div className="container hero hero-alt">
						<div className="hero-container alt">
							<h1 className="hero-title-1">
								Building a<br />
							</h1>
							<div className="line-container">
								<div className="line-horizontal-top line-dark" />
								<div className="line-horizontal-bottom line-dark" />
								<div className="line-vertical-left line-dark" />
								<div className="line-vertical-right line-dark" />
								<h1 className="hero-title accent">
									Better Canada<br />
								</h1>
							</div>
						</div>
						<div className="get-involved-wrapper">
							<div className="w-form">
								<form
									name="Get Involved Form"
									method="get"
									className="get-involved-form"
								>
									<div>
										<label htmlFor="First-Name" className="meta">
											First Name*
										</label>
										<input
											className="w-input"
											maxLength={256}
											name="First-Name"
											placeholder=""
											type="text"
											id="First-Name"
											required
										/>
									</div>
									<div>
										<label htmlFor="Last-Name" className="meta">
											Last Name*
										</label>
										<input
											className="w-input"
											maxLength={256}
											name="Last-Name"
											placeholder=""
											type="text"
											id="Last-Name"
											required
										/>
									</div>
									<div>
										<label htmlFor="email" className="meta">
											Email Address*
										</label>
										<input
											className="w-input"
											maxLength={256}
											name="email"
											placeholder=""
											type="email"
											id="email"
											required
										/>
									</div>
									<div>
										<label htmlFor="Postal-Code" className="meta">
											Postal Code*
										</label>
										<input
											className="w-input"
											maxLength={256}
											name="Postal-Code"
											placeholder=""
											type="text"
											id="Postal-Code"
											required
										/>
									</div>
									<div className="get-involved-input-2-col">
										<label className="w-checkbox checkbox-field">
											<input
												type="checkbox"
												name="Organize-Chapter"
												id="Organize-Chapter"
												className="w-checkbox-input"
											/>
											<span className="w-form-label">
												I&apos;d like to help organize my local chapter
											</span>
										</label>
										<label className="w-checkbox checkbox-field-2">
											<input
												type="checkbox"
												name="Current-Student"
												id="Current-Student"
												className="w-checkbox-input"
											/>
											<span className="w-form-label">
												I&apos;m a student at a Canadian university
											</span>
										</label>
									</div>
									<input
										type="submit"
										className="primary-button w-button"
										value="Join the Movement"
									/>
								</form>
								<div className="get-involved-privacy-text">
									By signing up you agree to our{" "}
									<Link
										href="/privacy-notice"
										className="get-involved-privacy-anchor"
									>
										Community Guidelines and Privacy Notice
									</Link>
									.
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* === Builders / Grid Section === */}
				<section className="section column">
					<div className="container memo-intro">
						<div className="grid">
							<div className="line-vertical-left" />
							<div className="spacer spacer-image" style={{ gridColumn: "span 5" }}>
								<div className="meta light image-caption">
									Mike Lazaridis, Blackberry Founder
								</div>
							</div>
							<div
								className="line-container-grid"
								style={{ gridColumn: "span 7" }}
							>
								<div className="line-horizontal-top" />
								<div className="line-horizontal-bottom" />
								<div className="line-vertical-right" />
								<div className="line-vertical-left-3" />
								<h1
									className="hero-title left-align"
									style={{ gridColumn: "1 / -1" }}
								>
									We work with builders like you
								</h1>
							</div>
							<div className="line-vertical-right-2" />
							<div className="line-horizontal-bottom" />
							<div
								className="hero-paragraph-container"
								style={{ gridColumn: "span 7" }}
							>
								<p className="hero-paragraph left-align">
									Build Canada is made up of entrepreneurs, leaders, and
									motivated citizens, committed to driving Canada&apos;s
									growth.
									<br />
								</p>
								<p className="hero-paragraph left-align">
									We work with this community to build{" "}
									<Link href="/projects">tools for civic engagement</Link>, publish{" "}
									<Link href="/memos">bold policy ideas</Link>, and{" "}
									<a
										href="https://x.com/build_canada"
										target="_blank"
										rel="noopener noreferrer"
									>
										connect
									</a>{" "}
									ambitious people.
									<br />
								</p>
								<div className="hero-button-container">
									<Link href="/about" className="primary-button w-button">
										Learn More
									</Link>
									<a
										href="https://buildcanada.substack.com/subscribe"
										target="_blank"
										rel="noopener noreferrer"
										className="primary-button secondary w-button"
									>
										Get Updates
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* === Tools Section === */}
					<div
						className="container"
						data-animate=""
						style={{ opacity: 0 }}
					>
						<div className="heading-container">
							<h2 className="center-align">Tools to drive civic action</h2>
							<p className="center-align">
								We create tools to better understand our government and push
								for change
							</p>
						</div>
						<div className="memo-grid" role="list">
							{toolsResult.docs.map((tool) => {
								const imageUrl = tool.image ? getMediaUrl(tool.image) : undefined;
								return (
									<div key={tool.id} className="memo-item" role="listitem">
										<a
											href={(tool.url as string) || "/projects"}
											className="memo-card"
										>
											{imageUrl && (
												<div className="project-image-container">
													<img
														src={imageUrl}
														loading="lazy"
														alt={tool.title}
														srcSet={(tool.srcSet as string) || undefined}
														sizes="100vw"
														className="project-image"
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
						<Link href="/projects" className="primary-button w-button">
							See more Projects
						</Link>
					</div>

					{/* === Policy Ideas Section === */}
					<div
						className="container"
						data-animate=""
						style={{ opacity: 0 }}
					>
						<div className="heading-container">
							<h2 className="center-align">Policy ideas to grow Canada</h2>
							<p className="center-align">
								We help Canadian entrepreneurs share their bold ideas to grow
								our country
							</p>
						</div>
						<div className="memo-grid" role="list">
							{memosResult.docs.map((memo) => {
								const builder =
									memo.builder && typeof memo.builder === "object"
										? memo.builder
										: null;
								const authorAvatar = builder?.profilePhoto
									? getMediaUrl(builder.profilePhoto)
									: (memo.builderAvatar as string) || "/images/Logo-Box.png";
								const authorName =
									builder?.name || (memo.builderName as string) || "Build Canada";
								const authorTitle =
									builder?.title || (memo.builderTitle as string) || "Memo";

								const keyMessages = memo.keyMessages as Array<{ message: string }> | undefined;
								const blurb = keyMessages?.[0]?.message || (memo.description as string) || "";

								return (
									<div key={memo.id} className="memo-item" role="listitem">
										<Link href={`/memos/${memo.slug}`} className="memo-card">
											<div className="card-text">
												<div className="memo-details">
													<h3>{memo.title}</h3>
													<p>{blurb}</p>
												</div>
												<div className="builder">
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
											</div>
											<ReadMoreCta />
										</Link>
									</div>
								);
							})}
						</div>
						<Link href="/memos" className="primary-button w-button">
							See more memos
						</Link>
					</div>

					{/* === Posts Section === */}
					<div
						className="container"
						data-animate=""
						style={{ opacity: 0 }}
					>
						<div className="heading-container">
							<h2 className="center-align">Posts from Build Canada</h2>
							<p className="center-align">
								Ideas, research, and reports to grow Canada
							</p>
						</div>
						<div className="memo-grid" role="list">
							{postsResult.docs.map((post) => (
								<div key={post.id} className="memo-item" role="listitem">
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
						<Link href="/projects" className="primary-button w-button">
							See more posts
						</Link>
					</div>
				</section>

				{/* === Newsletter CTA === */}
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
