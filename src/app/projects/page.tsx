import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Projects",
	description: "Tools and posts from the Build Canada team",
};

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

const projects = [
	{
		title: "Trade Barriers Tracker",
		description:
			"Tracking progress of interprovincial trade agreements across Canada",
		href: "https://buildcanada.com/trade-barriers",
		image:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710.png",
		srcSet:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710-p-1080.png 1080w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68de96320072e35aac7ba24d_Frame%20710.png 1200w",
	},
	{
		title: "Builder MP",
		description: "What would a Builder think of these parliament bills?",
		href: "https://buildcanada.com/bills",
		image:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp.png",
		srcSet:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp-p-1080.png 1080w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68d578161964a746107aded3_builder-mp.png 1200w",
	},
	{
		title: "Great Canadian Builders",
		description: "Stories of Canadians who have transformed our world",
		href: "/great-canadian-builders",
		image:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/6894b93c6d8f07928f78282c_Frame%2050.png",
		srcSet:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/6894b93c6d8f07928f78282c_Frame%2050-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/6894b93c6d8f07928f78282c_Frame%2050-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/6894b93c6d8f07928f78282c_Frame%2050-p-1080.png 1080w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/6894b93c6d8f07928f78282c_Frame%2050.png 1200w",
	},
	{
		title: "Exit Tax Calculator",
		description:
			"Compare exit scenarios for founders and investors in Canada vs. US",
		href: "https://buildcanada.com/exit-tax-calculator",
		image:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/687ea8a5008a84eeca7c4299_Frame%2049.png",
		srcSet:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/687ea8a5008a84eeca7c4299_Frame%2049-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/687ea8a5008a84eeca7c4299_Frame%2049-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/687ea8a5008a84eeca7c4299_Frame%2049.png 1015w",
	},
	{
		title: "Where Your Tax Dollars Go",
		description:
			"A personalized breakdown of how much you contribute to different government services",
		href: "https://canadaspends.com/tax-visualizer",
		image:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/687811a65d256d72ec4df014_tax-viz.png",
		srcSet:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/687811a65d256d72ec4df014_tax-viz-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/687811a65d256d72ec4df014_tax-viz-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/687811a65d256d72ec4df014_tax-viz.png 1015w",
	},
	{
		title: "Outcomes Tracker",
		description:
			"Tracking progress of key government commitments and their impact",
		href: "/tracker",
		image:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68543628388dc1c0bcaf945b_Frame%2045.png",
		srcSet:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68543628388dc1c0bcaf945b_Frame%2045-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68543628388dc1c0bcaf945b_Frame%2045-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68543628388dc1c0bcaf945b_Frame%2045.png 1015w",
	},
	{
		title: "Canada Spends",
		description:
			"Breaking down government finances to understand how your money is being spent",
		href: "https://canadaspends.com",
		image:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685336d35879963049f0cc96_Frame%2044.png",
		srcSet:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685336d35879963049f0cc96_Frame%2044-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685336d35879963049f0cc96_Frame%2044-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685336d35879963049f0cc96_Frame%2044.png 1015w",
	},
	{
		title: "Election Tracker",
		description:
			"Tracking campaign promises made during the 2025 Federal Election with real-time updates and comprehensive analysis",
		href: "https://2025.buildcanada.com",
		image:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685449eb6c158bd701ea1455_Frame%2046.png",
		srcSet:
			"https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685449eb6c158bd701ea1455_Frame%2046-p-500.png 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685449eb6c158bd701ea1455_Frame%2046-p-800.png 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685449eb6c158bd701ea1455_Frame%2046.png 1015w",
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
