import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

const projects = [
	{
		title: "Trade Barriers Tracker",
		description:
			"Tracking progress of interprovincial trade agreements across Canada",
		href: "https://buildcanada.com/trade-barriers",
		image:
			"/images/Frame-710.png",
		srcSet:
			"/images/Frame-710-p-500.png 500w, /images/Frame-710-p-800.png 800w, /images/Frame-710-p-1080.png 1080w, /images/Frame-710.png 1200w",
	},
	{
		title: "Builder MP",
		description: "What would a Builder think of these parliament bills?",
		href: "https://buildcanada.com/bills",
		image:
			"/images/builder-mp.png",
		srcSet:
			"/images/builder-mp-p-500.png 500w, /images/builder-mp-p-800.png 800w, /images/builder-mp-p-1080.png 1080w, /images/builder-mp.png 1200w",
	},
	{
		title: "Great Canadian Builders",
		description: "Stories of Canadians who have transformed our world",
		href: "/great-canadian-builders",
		image:
			"/images/Frame-50.png",
		srcSet:
			"/images/Frame-50-p-500.png 500w, /images/Frame-50-p-800.png 800w, /images/Frame-50-p-1080.png 1080w, /images/Frame-50.png 1200w",
	},
	{
		title: "Exit Tax Calculator",
		description:
			"Compare exit scenarios for founders and investors in Canada vs. US",
		href: "https://buildcanada.com/exit-tax-calculator",
		image:
			"/images/Frame-49.png",
		srcSet:
			"/images/Frame-49-p-500.png 500w, /images/Frame-49-p-800.png 800w, /images/Frame-49.png 1015w",
	},
	{
		title: "Where Your Tax Dollars Go",
		description:
			"A personalized breakdown of how much you contribute to different government services",
		href: "https://canadaspends.com/tax-visualizer",
		image:
			"/images/tax-viz.png",
		srcSet:
			"/images/tax-viz-p-500.png 500w, /images/tax-viz-p-800.png 800w, /images/tax-viz.png 1015w",
	},
	{
		title: "Outcomes Tracker",
		description:
			"Tracking progress of key government commitments and their impact",
		href: "/tracker",
		image:
			"/images/Frame-45.png",
		srcSet:
			"/images/Frame-45-p-500.png 500w, /images/Frame-45-p-800.png 800w, /images/Frame-45.png 1015w",
	},
	{
		title: "Canada Spends",
		description:
			"Breaking down government finances to understand how your money is being spent",
		href: "https://canadaspends.com",
		image:
			"/images/Frame-44.png",
		srcSet:
			"/images/Frame-44-p-500.png 500w, /images/Frame-44-p-800.png 800w, /images/Frame-44.png 1015w",
	},
	{
		title: "Election Tracker",
		description:
			"Tracking campaign promises made during the 2025 Federal Election with real-time updates and comprehensive analysis",
		href: "https://2025.buildcanada.com",
		image:
			"/images/Frame-46.png",
		srcSet:
			"/images/Frame-46-p-500.png 500w, /images/Frame-46-p-800.png 800w, /images/Frame-46.png 1015w",
	},
];

const posts = [
	{
		title: "Budget Scorecards",
		description: "How does the budget score on Build Canada memo ideas?",
		href: "/posts/budget-scorecards",
	},
	{
		title: "Budget 2025",
		description:
			"This budget is a step in the right direction towards growth, but needs boldness and urgency to truly deliver.",
		href: "/posts/budget-2025",
	},
	{
		title: "Canadians are Ready to Build",
		description:
			"A new survey shows Canadians are ready to build. 70% want to prioritize long-term economic growth over short-term spending",
		href: "/posts/ready-to-build",
	},
	{
		title: "Mission-Focused Mandate Letters",
		description:
			"We've taken the Liberal Party's platform and transformed them into practical plans – concise, direct, measurable and entirely mission-focused.",
		href: "/posts/mandate-letters",
	},
];

export default function ProjectsPage() {
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
									we&apos;re doing – built with our community
								</p>
							</div>
						</div>

						<div className="memo-wrapper">
							<div className="memo-grid" role="list">
								{projects.map((project) => (
									<div
										key={project.title}
										className="memo-item"
										role="listitem"
									>
										<a
											href={project.href}
											target="_blank"
											rel="noopener noreferrer"
											className="memo-card"
										>
											<div className="project-image">
												<img
													src={project.image}
													loading="lazy"
													alt={project.title}
													srcSet={project.srcSet}
													sizes="100vw"
												/>
											</div>
											<div className="card-text project-card-text">
												<div className="memo-details">
													<h3>{project.title}</h3>
													<p>{project.description}</p>
												</div>
											</div>
										</a>
									</div>
								))}
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
								{posts.map((post) => (
									<div
										key={post.title}
										className="memo-item"
										role="listitem"
									>
										<a href={post.href} className="memo-card">
											<div className="card-text">
												<div className="memo-details">
													<h3>{post.title}</h3>
													<p>{post.description}</p>
												</div>
											</div>
											<ReadMoreCta />
										</a>
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
