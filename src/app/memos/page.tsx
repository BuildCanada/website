"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

const categories = [
	{ label: "All", value: "all" },
	{ label: "Finance", value: "finance" },
	{ label: "Nation Building", value: "nation-building" },
	{ label: "Housing", value: "housing" },
	{ label: "Defence", value: "defence" },
	{ label: "Immigration", value: "immigration" },
	{ label: "Government Transformation", value: "government-transformation" },
	{ label: "Energy", value: "energy" },
	{ label: "Industry", value: "industry" },
	{ label: "Digital Innovation", value: "digital-innovation" },
];

const memos = [
	{
		category: "nation-building",
		href: "/memos/canada-superpower",
		title: "Canada Can Be a Superpower",
		description:
			"Canada has every raw ingredient to be a top-5 global power \u2014 massive land, critical mineral wealth, abundant energy, an educated population, and geographic security \u2014 but has squandered these advantages through decades of bad choices.",
		avatar:
			"/images/Logo-Box.png",
		author: "Build Canada",
		role: "Memo",
	},
	{
		category: "digital-innovation",
		href: "/memos/digital-sovereignty",
		title: "A Blueprint for Canada\u2019s Digital Sovereignty",
		description:
			"Canada needs to stop renting its digital backbone from foreign powers. 60% of our cloud runs on American servers under American law. This is a surrender of sovereignty.",
		avatar:
			"/images/joh-ruffolo.jpeg",
		author: "John Ruffolo",
		role: "Founder Maverix Private Equity",
	},
	{
		category: "nation-building",
		href: "/memos/go",
		title: "Go!",
		description:
			"Canada is in a productivity and execution crisis while the world is moving faster and becoming less forgiving. In this environment, delay weakens our economy and our ability to protect our interests.",
		avatar:
			"/images/Logo-Box.png",
		author: "Build Canada",
		role: "Memo",
	},
	{
		category: "immigration",
		href: "/memos/canada-can-attract-the-worlds-best-entrepreneurs",
		title: "Canada Can Attract the World\u2019s Best Entrepreneurs",
		description:
			"A loophole in Canada\u2019s Start-Up Visa program created a path for fraud and abuse. \u201cConsultants\u201d brought in thousands of unqualified people to the country and pocketed millions of dollars.",
		avatar:
			"/images/boris-wertz.jpg",
		author: "Boris Wertz",
		role: "Founder Version One Ventures",
	},
	{
		category: "finance",
		href: "/memos/corporate-tax",
		title: "Build Canada\u2019s Business Future",
		description:
			"Economic growth is driven by the creation of new companies and investments by existing companies. But in the last decade company formation and investment in Canada has collapsed.",
		avatar:
			"/images/image0-1.png",
		author: "Kim G C Moody",
		role: "Founder Moodys tax",
	},
	{
		category: "digital-innovation",
		href: "/memos/champions",
		title: "Scaling Canadian Global Champions",
		description:
			"Canada excels at research and early startup formation but fails to grow companies past $100M in revenue\u2014this is a critical gap to fix.",
		avatar:
			"/images/Michael-Serbinis,-CEO,-League---Executive-Photo-1-2.jpg",
		author: "Michael Serbinis",
		role: "CEO and Founder of League",
	},
	{
		category: "digital-innovation",
		href: "/memos/moonshots",
		title: "Five AI Moonshots for Canada",
		description:
			"AI is a tool, not a goal. It only matters when applied to real problems with measurable outcomes like faster healthcare or better education.",
		avatar:
			"/images/row2.Ajay-Agrawal-scaled-e1693577110626.jpg",
		author: "Ajay Agrawal",
		role: "Professor, Univ. of Toronto",
	},
	{
		category: "digital-innovation",
		href: "/memos/ai-strategy",
		title: "An AI Strategy to Build Canadian Prosperity",
		description:
			"Productivity is the path to prosperity. AI is a general purpose technology that could help deliver productivity gains across every sector\u2014but only if Canada acts with urgency.",
		avatar:
			"/images/dan_debow.jpg",
		author: "Daniel Debow",
		role: "3x Founder",
	},
	{
		category: "nation-building",
		href: "/memos/build-canadas-literacy-foundation",
		title: "Build Canada\u2019s Literacy Foundation",
		description:
			"A fifth of Canadians are functionally illiterate. This has massive social impacts and costs Canada $67 billion in productivity.",
		avatar:
			"/images/heather-reisman.png",
		author: "Heather Reisman",
		role: "Founder & CEO Indigo",
	},
	{
		category: "nation-building",
		href: "/memos/mining",
		title: "Unlock Canada\u2019s Mining Potential",
		description:
			"Canada is the undisputed mining capital of the world. But that leadership is slipping at the exact time that the world needs Canadian minerals the most.",
		avatar:
			"/images/Macleans_headshot_square.jpeg",
		author: "Chris Doornbos",
		role: "CEO of E3 Lithium",
	},
	{
		category: "industry",
		href: "/memos/rebuild-canadian-steel",
		title: "Rebuild Canadian Steel",
		description:
			"Steel is as essential to a modern nation\u2019s prosperity as food. But over the last several decades Canada has allowed its steel output to wither.",
		avatar:
			"/images/barry-zekelman.png",
		author: "Barry Zekelman",
		role: "CEO Zekelman Industries",
	},
	{
		category: "industry",
		href: "/memos/semiconductor",
		title: "Seize Canada\u2019s Semiconductor Opportunity",
		description:
			"Canada has a world-class, compound semiconductor fab that could be a key part of advanced technology supply chains but it has been underinvested in for two decades.",
		avatar:
			"/images/1677271969811.jpeg",
		author: "Ivan Zhang",
		role: "Co-Founder Cohere",
	},
	{
		category: "immigration",
		href: "/memos/h-1b",
		title: "Turn America\u2019s H-1B Shift into Canada\u2019s Advantage",
		description:
			"The U.S. decision to impose a $100,000 H-1B fee creates both risks and opportunities. Canada needs to move fast.",
		avatar:
			"/images/1683657097819.jpeg",
		author: "Martin Basiri",
		role: "Founder & CEO Passage",
	},
	{
		category: "defence",
		href: "/memos/reform-itb",
		title: "Reform Canada\u2019s Defence Spending Obligations",
		description:
			"The ITB program requires defence contractors to invest in the Canadian ecosystem. But restrictions limit the program\u2019s benefits and prevent support for Canadian sovereign capabilities.",
		avatar:
			"/images/Eliot-Pence.jpeg",
		author: "Eliot Pence",
		role: "Founder Tofino Capital",
	},
	{
		category: "industry",
		href: "/memos/streamline-irap",
		title: "Streamline IRAP to Drive Canadian Innovation",
		description:
			"IRAP could be one of Canada\u2019s most impactful industrial policies but suffers from high operating costs, low quality capital allocation, and significant administrative burden.",
		avatar:
			"/images/1592964980753.jpeg",
		author: "Jeff Adamson",
		role: "Co-Founder Neo Financial",
	},
	{
		category: "industry",
		href: "/memos/fix-sred",
		title: "Fix Canada\u2019s Primary R&D Program",
		description:
			"SR&ED credits are the largest federal support for R&D. But the process is complex, often rewards the wrong companies, and doesn\u2019t support business value.",
		avatar:
			"/images/harley.jpeg",
		author: "Harley Finkelstein",
		role: "President Shopify",
	},
	{
		category: "government-transformation",
		href: "/memos/identity",
		title: "Secure Canada\u2019s Digital Identity to Combat Fraud",
		description:
			"Identity verification is a key part of daily life allowing Canadians to access banking, healthcare, and other services online.",
		avatar:
			"/images/Peter-Carrescia.png",
		author: "Peter Carrescia",
		role: "Co-Founder goConfirm",
	},
	{
		category: "nation-building",
		href: "/memos/create-more-regional-hubs-to-build-canada",
		title: "Create More Regional Hubs to Build Canada",
		description:
			"Canada has some of the world\u2019s most spectacular natural beauty. But most parts of the country are too hard to get to.",
		avatar:
			"/images/Social-Embedds-Image-1.png",
		author: "Zita Cobb",
		role: "Co-Founder and CEO Shorefast",
	},
	{
		category: "defence",
		href: "/memos/military-procurement",
		title: "Transform Canada\u2019s Military with Smart Procurement",
		description:
			"It takes 16 years to acquire military equipment. We need to reform our defence procurement system.",
		avatar:
			"/images/Eliot-Pence.jpeg",
		author: "Eliot Pence",
		role: "Founder Tofino Capital",
	},
	{
		category: "industry",
		href: "/memos/claim-space",
		title: "Use Industrial Policy to Claim Canada\u2019s Place in Space",
		description:
			"Canada was the 3rd country in space, but now ranks 12th in spending. This $5B industry is stagnant while other countries are experiencing massive growth.",
		avatar:
			"/images/mina-mitry.png",
		author: "Mina Mitry",
		role: "Co-founder & CEO at Kepler",
	},
	{
		category: "government-transformation",
		href: "/memos/deploy-private-sector-experts",
		title: "Deploy Private Sector Experts to Support Government",
		description:
			"Government and private sector need to work together in this moment of economic transformation",
		avatar:
			"/images/andrew-graham.jpeg",
		author: "Andrew Graham",
		role: "Co-founder & CEO at Borrowell",
	},
	{
		category: "finance",
		href: "/memos/reward-the-risk-takers",
		title: "Reward the Risk Takers who Build Canada",
		description:
			"Canada\u2019s outdated capital gains policies are driving entrepreneurs and investors away. We need competitive tax reform to keep talent and investment here.",
		avatar:
			"/images/Screenshot-2025-07-09-at-1.46.27 PM.png",
		author: "Matt Cohen",
		role: "Founder Ripple Ventures",
	},
	{
		category: "digital-innovation",
		href: "/memos/ai-basic-right",
		title: "Make AI a Basic Right for Canadians",
		description:
			"Canada will become the world\u2019s most AI\u2011literate nation by guaranteeing every citizen a path to mastering the technology.",
		avatar:
			"/images/1687108358492.jpeg",
		author: "Mike Murchison",
		role: "Co-Founder & CEO Ada",
	},
	{
		category: "immigration",
		href: "/memos/attract-innovation",
		title: "A Discovery Visa to Attract the World\u2019s Best Innovators",
		description:
			"Let\u2019s make it easy for the world\u2019s top scientists, innovators and engineers to come to Canada, and give them every reason to commercialize their findings here.",
		avatar:
			"/images/Michael-Serbinis,-CEO,-League---Executive-Photo-1-2.jpg",
		author: "Michael Serbinis",
		role: "CEO and Founder of League",
	},
	{
		category: "immigration",
		href: "/memos/recognize-commitment-immigration",
		title: "Recognize Commitment to Canada in Immigration",
		description:
			"A new points-based system will recognize and reward immigrant contributions, not just check their qualifications prior to arrival.",
		avatar:
			"/images/tobi.jpg",
		author: "Tobi Lutke",
		role: "Co-Founder & CEO Shopify",
	},
	{
		category: "nation-building",
		href: "/memos/civic-service-year",
		title: "Unite Canada Through A Year of National Service",
		description:
			"Canada has seen an alarming decline in national pride, community engagement, and unity. A mandatory one-year civic engagement program will reconnect Canadians with each other and their country.",
		avatar:
			"/images/dan_debow.jpg",
		author: "Daniel Debow",
		role: "3x Founder",
	},
	{
		category: "digital-innovation",
		href: "/memos/creative-future",
		title: "Reimagine Canada\u2019s Creative Future",
		description:
			"AI is transforming creative industries. Let\u2019s supercharge our world-class film, TV, advertising, gaming, and music sectors and turn this disruption into a competitive advantage.",
		avatar:
			"/images/WhatsApp-Image-2025-04-11-at-10.27.04-AM.jpeg",
		author: "Aidan Tracey",
		role: "CEO Tracxtion",
	},
	{
		category: "energy",
		href: "/memos/electrical-energy",
		title: "Canada Needs an Abundance of Electrical Energy",
		description:
			"Prosperity does not come without an abundance of energy. But today it is exceptionally difficult to build new generation, transmission, and storage infrastructure.",
		avatar:
			"/images/george-babu.jpeg",
		author: "George Babu",
		role: "Founder Aire Labs",
	},
	{
		category: "industry",
		href: "/memos/prioritize-proven-innovation",
		title: "Prioritize Proven Innovation",
		description:
			"Canada\u2019s current innovation strategy has failed. We pay for promises, not results. We must reward proven successes instead.",
		avatar:
			"/images/jamie.jpeg",
		author: "Jamie McDonald",
		role: "CEO A2X",
	},
	{
		category: "government-transformation",
		href: "/memos/productive-government-analysis",
		title: "Create A More Productive Government",
		description:
			"It\u2019s time to refocus. Here is a line-by-line analysis of Canada\u2019s spend today, with suggestions to re-allocate spend from programs that are no longer serving the public interest.",
		avatar:
			"/images/lucy_hargreaves.jpeg",
		author: "Lucy Hargreaves",
		role: "Founder Canada Spends",
	},
	{
		category: "energy",
		href: "/memos/sovereign-wealth-fund",
		title: "Turn Canada\u2019s Resources into Lasting Wealth",
		description:
			"Canada\u2019s natural resource wealth is finite. A Sovereign Wealth Fund transforms today\u2019s temporary resource profits into lasting, shared prosperity for all Canadians.",
		avatar:
			"/images/1680527374946.jpeg",
		author: "Shane Parrish",
		role: "Founder Farnam Street",
	},
	{
		category: "defence",
		href: "/memos/modern-military",
		title: "A Modern Military That Can Defend Canada",
		description:
			"Canada\u2019s military has fallen behind. We need to modernize fast or risk losing our ability to protect ourselves and support our allies.",
		avatar:
			"/images/shaun-francis.jpeg",
		author: "Shaun Francis",
		role: "Chair & CEO Medcan",
	},
	{
		category: "housing",
		href: "/memos/student-housing",
		title: "Solve the Student Housing Crisis",
		description:
			"Our world-class higher education system is being undermined by a critical shortage of student housing. Let\u2019s build more homes to house some of our brightest minds.",
		avatar:
			"/images/richard-abboud.jpeg",
		author: "Richard Abboud",
		role: "Founder & CEO Forum Asset Mgmt",
	},
	{
		category: "housing",
		href: "/memos/housing-zoning",
		title: "Free Zoning to Build More Homes",
		description:
			"Outdated zoning rules and slow approval processes prevent homes from being built. Let\u2019s transform this system currently designed to block development and preserve the status quo.",
		avatar:
			"/images/julie.jpeg",
		author: "Julie Di Lorenzo",
		role: "Pres. Mirabella Development",
	},
	{
		category: "housing",
		href: "/memos/invest-in-building-homes",
		title: "Let People Invest in Building Canadian Homes",
		description:
			"Well-meaning efforts to curb foreign speculation have made it difficult for anyone to invest in building new homes. Let\u2019s make it easier for people to get the financing they need to build.",
		avatar:
			"/images/julie.jpeg",
		author: "Julie Di Lorenzo",
		role: "Pres. Mirabella Development",
	},
	{
		category: "housing",
		href: "/memos/rental-housing",
		title: "Build Rental Housing Again",
		description:
			"Canada stopped building purpose-built rentals in the 1980s. Through targeted tax incentives, we can have the very people who serve our communities \u2013 nurses, teachers, police officers \u2013 afford to live in them again.",
		avatar:
			"/images/maz.jpeg",
		author: "Mazyar Mortazavi",
		role: "CEO TAS",
	},
	{
		category: "housing",
		href: "/memos/housing-taxes",
		title: "Stop Taxing Homes Out of Existence",
		description:
			"We tax cigarettes to reduce smoking \u2013 why are we taxing housing to death during a housing crisis? When taxes can make up 36% of a new home, it\u2019s no wonder Canadians can\u2019t afford them.",
		avatar:
			"/images/brad-carr.jpeg",
		author: "Brad Carr",
		role: "CEO Mattamy Homes Canada",
	},
	{
		category: "government-transformation",
		href: "/memos/banking-data",
		title: "Give Canadians Control of Their Data, Starting with Banking",
		description:
			"Canadians don\u2019t control their own financial data, making it painful to change providers or access new services. It\u2019s time for Canadians to take control of their own data.",
		avatar:
			"/images/andrew-graham.jpeg",
		author: "Andrew Graham",
		role: "Co-founder & CEO at Borrowell",
	},
	{
		category: "finance",
		href: "/memos/stablecoins",
		title: "Canada Cannot Afford to Miss Out on Stablecoins",
		description:
			"Stablecoins backed by the Canadian dollar will make transactions faster, cheaper, and more efficient, modernizing our digital payment infrastructure.",
		avatar:
			"/images/1570026127463.jpeg",
		author: "Som Seif",
		role: "Founder Purpose Unlimited",
	},
	{
		category: "finance",
		href: "/memos/children-head-start-fund",
		title: "Brighter Futures: Giving Every Child a Head-Start Fund",
		description:
			"With modest changes to Old Age Security, we can create a wealth fund that gives every child $10,000 at birth, available for use towards things like education starting at 18.",
		avatar:
			"/images/joe-canavan.jpeg",
		author: "Joe Canavan",
		role: "Ex-Chairman Children\u2019s Aid Fnd",
	},
	{
		category: "industry",
		href: "/memos/skilled-trades",
		title: "Let\u2019s Build Canada by Recognising Talent in Skilled Trades",
		description:
			"Skilled tradespeople are the backbone of Canada\u2019s future. Let\u2019s get them building by reforming licensing to be based on a person\u2019s skills rather than the hours they\u2019ve trained.",
		avatar:
			"/images/toby-shannon.jpg",
		author: "Toby Shannan",
		role: "Former COO Shopify",
	},
	{
		category: "industry",
		href: "/memos/affordable-telecom",
		title: "Affordable Mobile Everywhere in Canada \u2013 For Good",
		description:
			"Despite past efforts, Canadians still have some of the highest phone bills in the world. Drastic measures are needed to create affordable wireless that is actually long-lasting.",
		avatar:
			"/images/Brice_Scheschuk.jpg",
		author: "Brice Scheschuk",
		role: "Globalive, Ex-Wind Mobile",
	},
	{
		category: "industry",
		href: "/memos/food-independence",
		title: "Let\u2019s Produce Much More of Our Own Food",
		description:
			"Canada imports $65 billion worth of food annually. But technology is rapidly making it possible for Canada to produce a lot of the foods we eat here at home.",
		avatar:
			"/images/jon-lomow.jpeg",
		author: "Jon Lomow",
		role: "Co-Founder Fieldless Farms",
	},
	{
		category: "nation-building",
		href: "/memos/how-canada-builds",
		title: "Let\u2019s Show the World How Canada Builds",
		description:
			"Canadians have rightly grown skeptical of whether our government can do anything big. Let\u2019s prove this isn\u2019t true. Let\u2019s build like a world leader.",
		avatar:
			"/images/harley.jpeg",
		author: "Harley Finkelstein",
		role: "President Shopify",
	},
	{
		category: "energy",
		href: "/memos/energy-independence",
		title: "Building to Secure Canadian Energy Independence",
		description:
			"Canada cannot afford to be held hostage to changing geopolitics. Let\u2019s fast-track critical infrastructure so that we can easily access and sell Canadian energy.",
		avatar:
			"/images/adam-waterous.jpeg",
		author: "Adam Waterous",
		role: "CEO at Waterous Energy Fund",
	},
	{
		category: "government-transformation",
		href: "/memos/public-service-reform",
		title: "A Public Service That Works for Better Government Services",
		description:
			"The federal workforce has grown to an all-time high while delivering diminishing results. Let\u2019s reform the system to deliver better services at lower costs.",
		avatar:
			"/images/1598795500173.jpeg",
		author: "Daniel Eberhard",
		role: "Founder & CEO Koho",
	},
	{
		category: "government-transformation",
		href: "/memos/ai-first-government-services",
		title: "Make Canadian Government Services AI-First",
		description:
			"AI is the key technology to unlock Canadian prosperity. We can wait and be forced to buy this technology from other global providers or become a world-leading creator of AI solutions ourselves.",
		avatar:
			"/images/1730812435216.jpeg",
		author: "Benjamin Alarie",
		role: "Founder & CEO Blue J",
	},
	{
		category: "industry",
		href: "/memos/interprovincial-trade",
		title: "Good in One Province, Good in All",
		description:
			"Your credentials should work everywhere in Canada. Your business should sell everywhere in Canada. We are one country, let\u2019s have one market.",
		avatar:
			"/images/1544638578871.jpeg",
		author: "Wayne Pommen",
		role: "CRO Affirm, Ex-CEO PayBright",
	},
	{
		category: "digital-innovation",
		href: "/memos/unlock-health-records-save-canadian-lives",
		title: "Unlock Health Records, Save Canadian Lives",
		description:
			"Your medical history should be available instantly to you and any doctor that needs it, anywhere in Canada.",
		avatar:
			"/images/Michael-Serbinis,-CEO,-League---Executive-Photo-1-2.jpg",
		author: "Michael Serbinis",
		role: "CEO and Founder of League",
	},
	{
		category: "nation-building",
		href: "/memos/canadian-pride",
		title:
			"A Great Nation Celebrates Its Achievements and Its Builders\u2014So Should Canada",
		description:
			"Creators should be rewarded for creating content that celebrates Canada and Canadian achievements",
		avatar:
			"/images/1721412427252.jpeg",
		author: "Michael Litt",
		role: "Co-Founder & CEO Vidyard",
	},
	{
		category: "industry",
		href: "/memos/transportation-permitting",
		title: "Build Here, Not There: Winning the Transportation Race",
		description:
			"Canada could be the friendliest place in the world to build new transportation technologies by rapidly and safely permitting new modes of transportation",
		avatar:
			"/images/1731429223135.jpeg",
		author: "Stewart Lyons",
		role: "CEO Bird",
	},
	{
		category: "immigration",
		href: "/memos/talent-first-immigration",
		title:
			"Great People, Greater Canada: A Talent First Immigration Strategy for Canada",
		description:
			"The world\u2019s most innovative companies compete for top talent. It\u2019s time Canada competed the same way for immigrants.",
		avatar:
			"/images/1683657097819.jpeg",
		author: "Martin Basiri",
		role: "Founder & CEO Passage",
	},
];

export default function MemosPage() {
	const [activeFilter, setActiveFilter] = useState("all");

	const filteredMemos =
		activeFilter === "all"
			? memos
			: memos.filter((m) => m.category === activeFilter);

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
							<h1 className="hero-title">
								Plans for a More Prosperous Canada
							</h1>
						</div>
						<p className="hero-paragraph">
							Bold ideas to grow Canada, turned into actionable plans, backed by
							builders who&apos;ve done it before
						</p>

						<div id="memo-filters" className="memo-filters">
							{categories.map((cat) => (
								<div
									key={cat.value}
									data-filter={cat.value}
									className={`primary-button filter-button${activeFilter === cat.value ? " is-active" : ""}`}
									onClick={() => setActiveFilter(cat.value)}
								>
									{cat.label}
								</div>
							))}
						</div>

						<div className="memo-wrapper">
							<div className="memo-grid" role="list">
								{filteredMemos.map((memo) => (
									<div
										key={memo.href}
										data-cats={memo.category}
										className="memo-item"
										role="listitem"
									>
										<a href={memo.href} className="memo-card">
											<div className="card-text">
												<div className="memo-details">
													<h3>{memo.title}</h3>
													<p>{memo.description}</p>
												</div>
												<div className="builder">
													<img
														src={memo.avatar}
														loading="lazy"
														width={60}
														height={60}
														alt=""
														className="avatar-small"
													/>
													<div className="memo-card-name">
														<p className="p2 sans">{memo.author}</p>
														<div className="meta">{memo.role}</div>
													</div>
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
