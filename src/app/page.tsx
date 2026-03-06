import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function ArrowIcon() {
	return (
		<img
			src="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/679d23fc682f2bf860558cb9_arrow.svg"
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
			src="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/679d23fc682f2bf860558cb9_arrow.svg"
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

export default function Home() {
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
									<a
										href="/privacy-notice"
										className="get-involved-privacy-anchor"
									>
										Community Guidelines and Privacy Notice
									</a>
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
									<a href="/projects">tools for civic engagement</a>, publish{" "}
									<a href="/memos">bold policy ideas</a>, and{" "}
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
									<a href="/about" className="primary-button w-button">
										Learn More
									</a>
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
							<div className="memo-item" role="listitem">
								<a
									href="https://buildcanada.com/trade-barriers"
									className="memo-card"
								>
									<div className="project-image-container">
										<img
											src="https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710.png"
											loading="lazy"
											alt="Trade Barriers Tracker"
											srcSet="https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710-p-1080.png 1080w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710.png 1200w"
											sizes="100vw"
											className="project-image"
										/>
									</div>
									<div className="card-text project-card-text">
										<div className="memo-details">
											<h3>Trade Barriers Tracker</h3>
											<p>
												Tracking progress of interprovincial trade agreements
												across Canada
											</p>
										</div>
									</div>
								</a>
							</div>
							<div className="memo-item" role="listitem">
								<a
									href="https://buildcanada.com/bills"
									className="memo-card"
								>
									<div className="project-image-container">
										<img
											src="https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp.png"
											loading="lazy"
											alt="Builder MP"
											srcSet="https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp-p-1080.png 1080w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp.png 1200w"
											sizes="100vw"
											className="project-image"
										/>
									</div>
									<div className="card-text project-card-text">
										<div className="memo-details">
											<h3>Builder MP</h3>
											<p>
												What would a Builder think of these parliament bills?
											</p>
										</div>
									</div>
								</a>
							</div>
						</div>
						<a href="/projects" className="primary-button w-button">
							See more Projects
						</a>
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
							<div className="memo-item" role="listitem">
								<a href="/memos/canada-superpower" className="memo-card">
									<div className="card-text">
										<div className="memo-details">
											<h3>Canada Can Be a Superpower</h3>
											<p>
												Canada has every raw ingredient to be a top-5 global
												power — massive land, critical mineral wealth, abundant
												energy, an educated population, and geographic security
												— but has squandered these advantages through decades
												of bad choices.
											</p>
										</div>
										<div className="builder">
											<img
												src="https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/697b7ef8474af24d980829e0_Logo%20Box.png"
												loading="lazy"
												width={60}
												height={60}
												alt=""
												className="avatar-small"
											/>
											<div className="memo-card-name">
												<p className="p2 sans">Build Canada</p>
												<div className="meta">Memo</div>
											</div>
										</div>
									</div>
									<ReadMoreCta />
								</a>
							</div>
							<div className="memo-item" role="listitem">
								<a href="/memos/digital-sovereignty" className="memo-card">
									<div className="card-text">
										<div className="memo-details">
											<h3>
												A Blueprint for Canada&apos;s Digital Sovereignty
											</h3>
											<p>
												Canada needs to stop renting its digital backbone from
												foreign powers. 60% of our cloud runs on American
												servers under American law. This is a surrender of
												sovereignty.
											</p>
										</div>
										<div className="builder">
											<img
												src="https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/6996299ae9a47c55bd5ab9f2_joh%20ruffolo.jpeg"
												loading="lazy"
												width={60}
												height={60}
												alt=""
												className="avatar-small"
											/>
											<div className="memo-card-name">
												<p className="p2 sans">John Ruffolo</p>
												<div className="meta">
													Founder Maverix Private Equity
												</div>
											</div>
										</div>
									</div>
									<ReadMoreCta />
								</a>
							</div>
						</div>
						<a href="/memos" className="primary-button w-button">
							See more memos
						</a>
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
							<div className="memo-item" role="listitem">
								<a href="/posts/budget-scorecards" className="memo-card">
									<div className="card-text">
										<div className="memo-details">
											<h3>Budget Scorecards</h3>
											<p>
												How does the budget score on Build Canada memo ideas?
											</p>
										</div>
									</div>
									<ReadMoreCta />
								</a>
							</div>
							<div className="memo-item" role="listitem">
								<a href="/posts/budget-2025" className="memo-card">
									<div className="card-text">
										<div className="memo-details">
											<h3>Budget 2025</h3>
											<p>
												This budget is a step in the right direction towards
												growth, but needs boldness and urgency to truly
												deliver.
											</p>
										</div>
									</div>
									<ReadMoreCta />
								</a>
							</div>
						</div>
						<a href="/projects" className="primary-button w-button">
							See more posts
						</a>
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
