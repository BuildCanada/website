import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Get Involved",
	description: "Join the movement to build Canada",
};

export default function GetInvolvedPage() {
	return (
		<>
			<div className="wrapper">
				<Navbar />

				{/* Hero */}
				<section className="section hero hero-alt-2">
					<div className="hero-container">
						<h1 className="header-title">Join 3000+ people</h1>
						<h1 className="header-title accent">
							building a better Canada
						</h1>
					</div>
				</section>

				{/* Steps */}
				<section className="section">
					<div className="container no-padding-top">
						<div className="container page-hero-container">
							<div className="line-horizontal-bottom" />
							<div className="line-vertical-right-2" />
							<div className="line-vertical-left" />
						</div>

						{/* Step 1: Join the Movement */}
						<div className="get-involved-step neg-margin-top">
							<div className="get-involved-step-number">
								<div>1</div>
							</div>
							<h2 className="get-involved-heading">Join the movement</h2>
							<p className="paragraph">
								Stay in touch and hear about ways to get involved.
								<br />
							</p>
							<h5 className="get-involved-sub-heading">
								Want to help build Build Canada in your local community?
							</h5>
							<p className="paragraph margin-bottom">
								Sign-up to help organize your local chapter.
								<br />
							</p>
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
													className="w-checkbox-input"
												/>
												<span className="w-form-label">
													I&apos;d like to help organize my local
													chapter
												</span>
											</label>
											<label className="w-checkbox checkbox-field-2">
												<input
													type="checkbox"
													name="Current-Student"
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

						{/* Step 2: Connect with Others */}
						<div className="get-involved-step flex">
							<img
								src="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/693b2deda81525af5a4b4c29_f6d0b9c9dd2036a97355846a10f1bf4d_discord-snapshot.png"
								loading="lazy"
								alt="Discord"
								srcSet="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/693b2deda81525af5a4b4c29_f6d0b9c9dd2036a97355846a10f1bf4d_discord-snapshot-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/693b2deda81525af5a4b4c29_f6d0b9c9dd2036a97355846a10f1bf4d_discord-snapshot-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/693b2deda81525af5a4b4c29_f6d0b9c9dd2036a97355846a10f1bf4d_discord-snapshot.png 819w"
								sizes="(max-width: 819px) 100vw, 819px"
								className="image-discord-snapshot"
							/>
							<div className="get-involved-step-flex-item">
								<div className="get-involved-step-number">
									<div>2</div>
								</div>
								<h2 className="get-involved-heading">
									Connect with others
								</h2>
								<p className="paragraph">
									Our Discord is the central place for collaboration and
									discussion. Get to know other pro-growth advocates and
									work together on projects to drive change.
									<br />
								</p>
								<a
									href="https://www.discord.gg/wzyTdM6eXf"
									target="_blank"
									rel="noopener noreferrer"
									className="primary-button get-involved-cta w-button"
								>
									Join Discord
								</a>
							</div>
						</div>

						{/* Step 3: Events */}
						<div className="get-involved-step flex">
							<div className="get-involved-step-flex-item">
								<div className="get-involved-step-number">
									<div>3</div>
								</div>
								<h2 className="get-involved-heading">
									Go to an event in your city
								</h2>
								<p className="paragraph">
									Join fireside chats, reading groups, and meetups with
									others who believe in growth.
								</p>
								<img
									src="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/693b230f665b1ceba40a11e4_bb7669365ff529ff99f9d1ea684adb3b_canada-chapters.png"
									loading="lazy"
									alt="Canada chapters"
									className="image-chapters"
								/>
							</div>
							<div className="luma-embed">
								<iframe
									src="https://luma.com/embed/calendar/cal-KUFO2yscrfWr7RV/events"
									width="100%"
									height="500"
									style={{
										border: "1px solid #bfcbda88",
										borderRadius: "4px",
									}}
									allowFullScreen
									aria-hidden="false"
									tabIndex={0}
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Toolkits */}
				<section className="section">
					<div className="container">
						<div>
							<h2 className="hero-title">Toolkits</h2>
							<p className="hero-paragraph">
								Guides and resources to help you become a Build Canada
								leader
							</p>
						</div>
						<div className="row">
							<div className="value-prop">
								<img
									src="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/693b35c21970e3decf20b777_a594c0524c97aa4d5b48c78a5fb36211_pledge-icon.png"
									loading="lazy"
									alt=""
								/>
								<h4>Member Pledge</h4>
								<p className="description">
									All Build Canada members who start their own event,
									project, or campaign are asked to sign this pledge.
								</p>
								<a href="/pledge" className="primary-button w-button">
									Sign Pledge
								</a>
							</div>
							<div className="border-sm light" />
							<div className="value-prop">
								<img
									src="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/693b35c2b627d570c86448a2_lightbulb-icon.png"
									loading="lazy"
									alt=""
								/>
								<h4>How to Show Up</h4>
								<p className="description">
									Want to learn what you can do to help? This document lays
									out what we need to accomplish and the endless activities
									you can do.
								</p>
								<a
									href="https://drive.google.com/file/d/1JDZ6UcchKd-zhM9IHgntZoGbOwvw7Mo4/view"
									target="_blank"
									rel="noopener noreferrer"
									className="primary-button w-button"
								>
									Read Guide
								</a>
							</div>
							<div className="border-sm light" />
							<div className="value-prop">
								<img
									src="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/693b35c2f39122b6c81fe5ac_checklist-icon.png"
									loading="lazy"
									alt=""
								/>
								<h4>Chapter Starter Kit</h4>
								<p className="description">
									Looking to lead a chapter? Check out this starting
									checklist which will help you chart your first six weeks.
								</p>
								<a
									href="https://drive.google.com/file/d/1I0EnIyG8qSGW0ZiIS5_y6eFJV9bQ294z/view"
									target="_blank"
									rel="noopener noreferrer"
									className="primary-button w-button"
								>
									Read Chapter Kit
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
}
