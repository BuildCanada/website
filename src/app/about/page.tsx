import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "About | Build Canada",
	description:
		"Build Canada is a movement for people who are done waiting. It's for those who want to make Canada better—not by talking, but by building.",
};

interface TeamMember {
	name: string;
	role: string;
	image: string;
	srcSet?: string;
	linkedin: string;
	x?: string;
}

function TeamCard({ member }: { member: TeamMember }) {
	return (
		<div className="team-item">
			<div className="team-card">
				<img
					src={member.image}
					loading="lazy"
					width={60}
					height={60}
					alt=""
					srcSet={member.srcSet}
					sizes={member.srcSet ? "60px" : undefined}
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
							src="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/679d23fc682f2bf860558ce7_linkedin.svg"
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
								src="https://cdn.prod.website-files.com/679d23fc682f2bf860558c9a/679d23fc682f2bf860558ce9_x.svg"
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

const team: TeamMember[] = [
	{
		name: "Lucy Hargreaves",
		role: "CEO",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685d79603a9d5137886a301e_lucy.jpeg",
		srcSet: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685d79603a9d5137886a301e_lucy-p-500.jpeg 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/685d79603a9d5137886a301e_lucy.jpeg 800w",
		linkedin: "https://www.linkedin.com/in/lucyghargreaves/",
		x: "https://x.com/lucyhargreaves4",
	},
	{
		name: "Brendan Samek",
		role: "Head of Engineering",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/6854329f04b0ae4bfe017233_brendan.jpeg",
		linkedin: "https://www.linkedin.com/in/brendan-samek/",
		x: "https://x.com/brendan_samek",
	},
	{
		name: "Zander Fraser",
		role: "Head of Community",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd90cdbd58fdb41323ca57_zander.webp",
		srcSet: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd90cdbd58fdb41323ca57_zander-p-500.webp 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd90cdbd58fdb41323ca57_zander-p-800.webp 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd90cdbd58fdb41323ca57_zander.webp 1218w",
		linkedin: "https://www.linkedin.com/in/zmfraser/",
		x: "https://x.com/zandertoo",
	},
	{
		name: "Macoy Jackson",
		role: "Head of Operations",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d09546fe2f855ebb8b27_Macoy.webp",
		srcSet: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d09546fe2f855ebb8b27_Macoy-p-500.webp 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d09546fe2f855ebb8b27_Macoy-p-800.webp 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d09546fe2f855ebb8b27_Macoy.webp 1200w",
		linkedin: "https://www.linkedin.com/in/macoyjackson/",
		x: "https://x.com/macoy_jackson",
	},
	{
		name: "Andrew Potter",
		role: "Contract Media",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/67bb722cb76f9faa28d3022e_andrew-potter.jpeg",
		linkedin: "https://www.linkedin.com/in/jandrewpotter/",
	},
	{
		name: "Luke Farag",
		role: "Socials Lead",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d0c7cb6adb66a7c2ef02_Luke.webp",
		srcSet: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d0c7cb6adb66a7c2ef02_Luke-p-500.webp 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d0c7cb6adb66a7c2ef02_Luke-p-800.webp 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d0c7cb6adb66a7c2ef02_Luke.webp 1200w",
		linkedin: "https://www.linkedin.com/in/lukefarag/",
		x: "https://x.com/LukeFarag",
	},
	{
		name: "Clara de Oliveira Borba",
		role: "Co-Op Memos",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d11d0ddf4ca7bccda860_Clara.webp",
		srcSet: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d11d0ddf4ca7bccda860_Clara-p-500.webp 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d11d0ddf4ca7bccda860_Clara-p-800.webp 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/69a9d11d0ddf4ca7bccda860_Clara.webp 1199w",
		linkedin: "https://www.linkedin.com/in/claradeoliveiraborba/",
	},
];

const board: TeamMember[] = [
	{
		name: "Daniel Debow",
		role: "Chair of the Board",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/679d23fc682f2bf860558cdd_dan_debow.jpg",
		linkedin: "https://www.linkedin.com/in/ddebow/",
		x: "https://x.com/ddebow",
	},
	{
		name: "Fiona McKean",
		role: "Board Member",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd8f15c364df9e5e10f19a_1576877829952.jpeg",
		srcSet: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd8f15c364df9e5e10f19a_1576877829952-p-500.jpeg 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd8f15c364df9e5e10f19a_1576877829952.jpeg 800w",
		linkedin: "https://www.linkedin.com/in/fiona-mckean-591937b5/",
		x: "https://x.com/FionaMcK",
	},
	{
		name: "Jeff Adamson",
		role: "Board Member",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/67a12a8681b15052211e6889_1592964980753.jpeg",
		linkedin: "https://www.linkedin.com/in/jeffadamson/",
		x: "https://x.com/jeffcanadamson",
	},
];

const advisors: TeamMember[] = [
	{
		name: "Ana Curic",
		role: "Policy Advisor",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/67a27f6204a441e42c3e6ecf_ana-curic-350x350-1.jpg",
		linkedin: "https://www.linkedin.com/in/ana-curic-a23a08164/",
		x: "https://x.com/anacuric",
	},
	{
		name: "Ryan Manucha",
		role: "Trade Barriers Tracker",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd9350bd58fdb4132473c1_RManucha_Headshot_.webp",
		srcSet: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd9350bd58fdb4132473c1_RManucha_Headshot_-p-500.webp 500w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd9350bd58fdb4132473c1_RManucha_Headshot_-p-800.webp 800w, https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd9350bd58fdb4132473c1_RManucha_Headshot_.webp 1522w",
		linkedin: "https://www.linkedin.com/in/ryan-manucha-a914a7a1/",
		x: "https://x.com/RyanManucha",
	},
	{
		name: "Jen Mazzarolo",
		role: "Communications Advisor",
		image: "https://cdn.prod.website-files.com/679d23fc682f2bf860558cbc/68dd93f737031a4fa4b730ea_Jen_headshot.webp",
		linkedin: "https://www.linkedin.com/in/jennifer-mazzarolo-cpa-ca/",
	},
];

const faqs = [
	{
		q: "What is Build Canada?",
		a: "Build Canada is a non-partisan civic movement that connects, equips, and amplifies high-agency builders—founders, creators, innovators—who believe Canada can and should be the most prosperous country on earth. By leveraging AI, open-source tools, and a nationwide network, Build Canada helps motivated Canadians get involved and build the future they want.",
	},
	{
		q: "Who is involved?",
		a: "Build Canada is a volunteer-driven initiative, supported by a small core team. Daniel Debow is the Chair of the Board and Lucy Hargreaves is the CEO.",
	},
	{
		q: "How is Build Canada funded?",
		a: "Build Canada is funded through donations from our builder network.",
		link: {
			text: "Donate here",
			href: "https://buy.stripe.com/3cI5kCdi8a2K2xY2bgdZ600",
		},
	},
	{
		q: "What sorts of activities are you doing?",
		a: "Our first major project during the recent federal election was to produce and release a series of policy memos proposed by successful Canadian entrepreneurs with deep knowledge from building in the relevant areas. We have also released AI-powered tools to track election promises, visualize federal spending, and measure federal government progress in real-time; and we commissioned a major public opinion poll to better understand Canadian attitudes toward growth and innovation. Now, we are going to scale our activities. Over the next year we'll build more data-driven tools, open-source and expand our projects, amplify bold ideas from our builder network, and grow the Build Canada community and network through events, content creation, hackathons, and other civic experiments.",
	},
	{
		q: "I want to write a memo. What's the process for submission?",
		a: "We work with a team of experienced policy advisors to help Canada's top entrepreneurs craft policy memos based on their deep knowledge from successfully building in relevant areas. If you have ideas that you think would make for a good proposal let us know in Discord. We can't publish submitted pieces but we always want to discuss and there are many ways to promote great pro-growth ideas with our community.",
	},
	{
		q: "Why are you doing this?",
		a: "We love this country. We believe we have the talent, resources, and potential to become the most prosperous country in the world. But in recent years, productivity has declined and Canada's growth has stagnated. We believe Canada can grow – fast and fearlessly. Build Canada is a movement for people who are done waiting. It's for those who want to make Canada better—not by talking, but by building.",
	},
	{
		q: "Are you a partisan group?",
		a: "No, we are a non-partisan, federally incorporated non-profit organization. We work with people who have experience across the political spectrum.",
	},
	{
		q: "Is this a lobby group?",
		a: "No, we are not a lobby group. We are a non-partisan, federally incorporated non-profit organization, founded entirely by volunteers. We do not represent specific industries or special interest groups. We are focused on engaging volunteers to drive positive change for our country.",
	},
	{
		q: "How can I get involved?",
		a: "We welcome motivated, high-agency individuals who want to volunteer to help make a difference. Whether it's by contributing your skills, helping with outreach, hosting an event, or amplifying our work, we'd love to hear from you.",
	},
	{
		q: "How can I stay up to date on your work?",
		a: "Stay connected by signing up for our newsletter. It's the best way to get updates, exclusive insights, and learn about new initiatives as they happen.",
	},
	{
		q: "How can I contact you?",
		a: "We love to hear from the community. Email us at hello@buildcanada.com, or connect with us on X, LinkedIn, Instagram or BlueSky.",
	},
];

export default function AboutPage() {
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
								– fast and fearlessly. That is why we are committed to the
								following principles:
							</p>
							<ul role="list">
								<li>
									<strong>Growth is good.</strong> It&apos;s not
									abstract—growth means better jobs, higher wages, more
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
									We&apos;re telling a new story about Canada—not just
									caring and kind, but strong, ambitious, and capable of
									hard things.
								</li>
								<li>
									<strong>Success should be celebrated.</strong> The best
									outcomes come from the best people doing their best work.
									We are proud to support all of Canada&apos;s builders and
									entrepreneurs and applaud their achievements. We want to
									give them confidence to speak up—for productivity, for
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
								It&apos;s for those who want to make Canada better—not by
								talking, but by building.
							</p>
							<p>
								Let&apos;s build the Canada you know is possible.
								<br />
							</p>
							<a
								href="/get-involved"
								className="primary-button w-button"
							>
								Get Involved
							</a>
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
						{faqs.map((faq) => (
							<div key={faq.q} className="faq-item-v2">
								<h3 className="faq-question">{faq.q}</h3>
								<p>
									{faq.a}
									{faq.link && (
										<>
											{" "}
											<a
												href={faq.link.href}
												target="_blank"
												rel="noopener noreferrer"
											>
												{faq.link.text}
											</a>
										</>
									)}
								</p>
							</div>
						))}
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
}
