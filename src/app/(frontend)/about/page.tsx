import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";

export const metadata: Metadata = {
	title: "About",
	description:
		"Build Canada is a movement for people who are done waiting. It\u2019s for those who want to make Canada better\u2014not by talking, but by building.",
	alternates: { canonical: "/about" },
	openGraph: {
		title: "About Build Canada",
		description:
			"A movement for people who are done waiting\u2014for those who want to make Canada better by building.",
		url: "/about",
	},
};

function getMediaUrl(media: unknown): string {
	if (!media || typeof media !== "object") return "/images/Logo-Box.png";
	const m = media as { url?: string };
	return m.url || "/images/Logo-Box.png";
}

interface TeamMemberView {
	name: string;
	role: string;
	image: string;
	linkedin: string;
	x?: string;
}

function TeamCard({ member }: { member: TeamMemberView }) {
	return (
		<div className="team-item">
			<div className="team-card">
				<img
					src={member.image}
					loading="lazy"
					width={60}
					height={60}
					alt=""
					className="avatar-large"
				/>
				<div className="team-card-name">
					<h3>{member.name}</h3>
					<div className="meta">{member.role}</div>
				</div>
				<div className="team-card-socials">
					<a
						href={member.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon"
					>
						<img
							src="/images/linkedin.svg"
							loading="lazy"
							alt="LinkedIn"
							className="social-icon"
						/>
					</a>
					{member.x && (
						<a
							href={member.x}
							target="_blank"
							rel="noopener noreferrer"
							className="social-icon"
						>
							<img
								src="/images/x.svg"
								loading="lazy"
								alt="X"
								className="social-icon"
							/>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

function mapTeamMember(doc: Record<string, unknown>): TeamMemberView {
	return {
		name: doc.name as string,
		role: doc.title as string || "",
		image: getMediaUrl(doc.profilePhoto),
		linkedin: (doc.linkedin as string) || "#",
		x: (doc.twitter as string) || undefined,
	};
}

export default async function AboutPage() {
	const payload = await getPayloadClient();

	const [teamResult, boardResult, advisorResult, faqResult] = await Promise.all([
		payload.find({
			collection: "teams",
			where: { role: { equals: "team" } },
			sort: "teamOrder",
			limit: 50,
		}),
		payload.find({
			collection: "teams",
			where: { role: { equals: "board" } },
			sort: "teamOrder",
			limit: 50,
		}),
		payload.find({
			collection: "teams",
			where: { role: { equals: "advisor" } },
			sort: "teamOrder",
			limit: 50,
		}),
		payload.find({
			collection: "faqs",
			sort: "order",
			limit: 50,
		}),
	]);

	const team = teamResult.docs.map((d) => mapTeamMember(d as unknown as Record<string, unknown>));
	const board = boardResult.docs.map((d) => mapTeamMember(d as unknown as Record<string, unknown>));
	const advisors = advisorResult.docs.map((d) => mapTeamMember(d as unknown as Record<string, unknown>));

	return (
		<>
			<div className="wrapper">
				<Navbar />

				{/* Open Letter */}
				<section className="section">
					<div className="container">
						<div className="container page-hero-container">
							<div className="line-horizontal-top" />
							<div className="line-horizontal-bottom" />
							<div className="line-vertical-right-2" />
							<div className="line-vertical-left" />
							<h1 className="hero-title">
								It&apos;s time to build Canada
							</h1>
						</div>
						<div className="open-letter">
							<p>
								Canada isn&apos;t something we found. Nor was it something
								we were given. It was something that was built, by
								successive waves and generations of people with ideas,
								energy, and ambition for what this country could be. But in
								recent years that energy has been lost. At some point, we
								started to take Canada and our standard of living for
								granted. And now we are starting to feel the effects of
								lowered expectations.
							</p>
							<p>
								We love this country. We believe we have the talent,
								resources, and potential to become the most prosperous
								country in the world. But we are not content to stand by and
								watch our nation&apos;s decline. We believe Canada can grow
								&ndash; fast and fearlessly. That is why we are committed to the
								following principles:
							</p>
							<ul role="list">
								<li>
									<strong>Growth is good.</strong> It&apos;s not
									abstract&mdash;growth means better jobs, higher wages, more
									opportunity, and more money for healthcare, education, and
									national security.
								</li>
								<li>
									<strong>Bold beats safe.</strong> We reject
									incrementalism. Canadians want nation-building solutions.
									This requires courage and conviction.
								</li>
								<li>
									<strong>Identity matters.</strong> How we see ourselves
									determines the scope of what we think is possible.
									We&apos;re telling a new story about Canada&mdash;not just
									caring and kind, but strong, ambitious, and capable of
									hard things.
								</li>
								<li>
									<strong>Success should be celebrated.</strong> The best
									outcomes come from the best people doing their best work.
									We are proud to support all of Canada&apos;s builders and
									entrepreneurs and applaud their achievements. We want to
									give them confidence to speak up&mdash;for productivity, for
									freedom, for growth.
								</li>
								<li>
									<strong>Building is the best way to help.</strong> We
									don&apos;t want to just complain about the status quo or
									contribute more vibes, papers, and essays. We believe in
									creating real change and we are empowering Canada&apos;s
									builders to start right now.
								</li>
								<li>
									<strong>Our future is bright.</strong> Canada&apos;s best
									days lie ahead. We have the land, the talent, the
									know-how, and the energy to be the most abundant nation
									on earth. We can do this together. If we organize
									ourselves properly, there is nothing that can stop us from
									achieving our goals.
								</li>
							</ul>
							<p>
								Build Canada is a movement for people who are done waiting.
								It&apos;s for those who want to make Canada better&mdash;not by
								talking, but by building.
							</p>
							<p>
								Let&apos;s build the Canada you know is possible.
								<br />
							</p>
							<Link
								href="/get-involved"
								className="primary-button w-button"
							>
								Get Involved
							</Link>
						</div>
					</div>
				</section>

				{/* Team */}
				<section className="section">
					<div className="container">
						<div className="heading-container center-align">
							<h2 className="h2">Our Team</h2>
						</div>
						<div className="team-wrapper">
							<div className="team-grid" role="list">
								{team.map((m) => (
									<TeamCard key={m.name} member={m} />
								))}
							</div>
						</div>

						<div className="heading-container center-align">
							<h2 className="h2">Our Board</h2>
						</div>
						<div className="team-wrapper">
							<div className="team-grid" role="list">
								{board.map((m) => (
									<TeamCard key={m.name} member={m} />
								))}
							</div>
						</div>

						<div className="heading-container center-align">
							<h2 className="h2">Advisors &amp; Members</h2>
						</div>
						<div className="team-wrapper">
							<div className="team-grid" role="list">
								{advisors.map((m) => (
									<TeamCard key={m.name} member={m} />
								))}
							</div>
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="section">
					<div className="container">
						<div className="line-container">
							<h2 className="center-align">
								Frequently Asked Questions
							</h2>
						</div>
						{faqResult.docs.map((faq) => {
							const linkGroup = faq.link as { text?: string; href?: string } | undefined;
							return (
								<div key={faq.id} className="faq-item-v2">
									<h3 className="faq-question">{faq.question}</h3>
									<p>
										{(faq.answerText as string) || ""}
										{linkGroup?.href && (
											<>
												{" "}
												<a
													href={linkGroup.href}
													target="_blank"
													rel="noopener noreferrer"
												>
													{linkGroup.text || "Learn more"}
												</a>
											</>
										)}
									</p>
								</div>
							);
						})}
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
}
