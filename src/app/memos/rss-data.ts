export const baseUrl = "https://buildcanada.com";

export interface MemoFeedItem {
	slug: string;
	title: string;
	description: string;
	author: string;
}

export const memoFeedItems: MemoFeedItem[] = [
	{
		slug: "canada-superpower",
		title: "Canada Can Be a Superpower",
		description:
			"Canada has every raw ingredient to be a top-5 global power \u2014 massive land, critical mineral wealth, abundant energy, an educated population, and geographic security \u2014 but has squandered these advantages through decades of bad choices.",
		author: "Build Canada",
	},
	{
		slug: "digital-sovereignty",
		title: "A Blueprint for Canada\u2019s Digital Sovereignty",
		description:
			"Canada needs to stop renting its digital backbone from foreign powers. 60% of our cloud runs on American servers under American law.",
		author: "John Ruffolo",
	},
	{
		slug: "go",
		title: "Go!",
		description:
			"Canada is in a productivity and execution crisis while the world is moving faster and becoming less forgiving.",
		author: "Build Canada",
	},
	{
		slug: "canada-can-attract-the-worlds-best-entrepreneurs",
		title: "Canada Can Attract the World\u2019s Best Entrepreneurs",
		description:
			"A loophole in Canada\u2019s Start-Up Visa program created a path for fraud and abuse.",
		author: "Boris Wertz",
	},
	{
		slug: "corporate-tax",
		title: "Build Canada\u2019s Business Future",
		description:
			"Economic growth is driven by the creation of new companies and investments by existing companies.",
		author: "Kim G C Moody",
	},
	{
		slug: "champions",
		title: "Scaling Canadian Global Champions",
		description:
			"Canada excels at research and early startup formation but fails to grow companies past $100M in revenue.",
		author: "Michael Serbinis",
	},
	{
		slug: "moonshots",
		title: "Five AI Moonshots for Canada",
		description:
			"AI is a tool, not a goal. It only matters when applied to real problems with measurable outcomes.",
		author: "Ajay Agrawal",
	},
	{
		slug: "ai-strategy",
		title: "An AI Strategy to Build Canadian Prosperity",
		description:
			"Productivity is the path to prosperity. AI is a general purpose technology that could help deliver productivity gains across every sector.",
		author: "Daniel Debow",
	},
	{
		slug: "build-canadas-literacy-foundation",
		title: "Build Canada\u2019s Literacy Foundation",
		description:
			"A fifth of Canadians are functionally illiterate. This has massive social impacts and costs Canada $67 billion in productivity.",
		author: "Heather Reisman",
	},
	{
		slug: "mining",
		title: "Unlock Canada\u2019s Mining Potential",
		description:
			"Canada is the undisputed mining capital of the world. But that leadership is slipping.",
		author: "Chris Doornbos",
	},
	{
		slug: "rebuild-canadian-steel",
		title: "Rebuild Canadian Steel",
		description:
			"Steel is as essential to a modern nation\u2019s prosperity as food. But Canada has allowed its steel output to wither.",
		author: "Barry Zekelman",
	},
	{
		slug: "semiconductor",
		title: "Seize Canada\u2019s Semiconductor Opportunity",
		description:
			"Canada has a world-class compound semiconductor fab that has been underinvested in for two decades.",
		author: "Ivan Zhang",
	},
	{
		slug: "h-1b",
		title: "Turn America\u2019s H-1B Shift into Canada\u2019s Advantage",
		description:
			"The U.S. decision to impose a $100,000 H-1B fee creates both risks and opportunities for Canada.",
		author: "Martin Basiri",
	},
	{
		slug: "reform-itb",
		title: "Reform Canada\u2019s Defence Spending Obligations",
		description:
			"The ITB program requires defence contractors to invest in the Canadian ecosystem but restrictions limit the program\u2019s benefits.",
		author: "Eliot Pence",
	},
	{
		slug: "streamline-irap",
		title: "Streamline IRAP to Drive Canadian Innovation",
		description:
			"IRAP could be one of Canada\u2019s most impactful industrial policies but suffers from high operating costs.",
		author: "Jeff Adamson",
	},
	{
		slug: "fix-sred",
		title: "Fix Canada\u2019s Primary R&D Program",
		description:
			"SR&ED credits are the largest federal support for R&D but the process is complex and often rewards the wrong companies.",
		author: "Harley Finkelstein",
	},
	{
		slug: "identity",
		title: "Secure Canada\u2019s Digital Identity to Combat Fraud",
		description:
			"Identity verification is a key part of daily life allowing Canadians to access banking, healthcare, and other services online.",
		author: "Peter Carrescia",
	},
	{
		slug: "create-more-regional-hubs-to-build-canada",
		title: "Create More Regional Hubs to Build Canada",
		description:
			"Canada has some of the world\u2019s most spectacular natural beauty. But most parts of the country are too hard to get to.",
		author: "Zita Cobb",
	},
	{
		slug: "military-procurement",
		title: "Transform Canada\u2019s Military with Smart Procurement",
		description:
			"It takes 16 years to acquire military equipment. We need to reform our defence procurement system.",
		author: "Eliot Pence",
	},
	{
		slug: "claim-space",
		title: "Use Industrial Policy to Claim Canada\u2019s Place in Space",
		description:
			"Canada was the 3rd country in space, but now ranks 12th in spending.",
		author: "Mina Mitry",
	},
	{
		slug: "deploy-private-sector-experts",
		title: "Deploy Private Sector Experts to Support Government",
		description:
			"Government and private sector need to work together in this moment of economic transformation.",
		author: "Andrew Graham",
	},
	{
		slug: "reward-the-risk-takers",
		title: "Reward the Risk Takers who Build Canada",
		description:
			"Canada\u2019s outdated capital gains policies are driving entrepreneurs and investors away.",
		author: "Matt Cohen",
	},
	{
		slug: "ai-basic-right",
		title: "Make AI a Basic Right for Canadians",
		description:
			"Canada will become the world\u2019s most AI-literate nation by guaranteeing every citizen a path to mastering the technology.",
		author: "Mike Murchison",
	},
	{
		slug: "attract-innovation",
		title: "A Discovery Visa to Attract the World\u2019s Best Innovators",
		description:
			"Let\u2019s make it easy for the world\u2019s top scientists, innovators and engineers to come to Canada.",
		author: "Michael Serbinis",
	},
	{
		slug: "recognize-commitment-immigration",
		title: "Recognize Commitment to Canada in Immigration",
		description:
			"A new points-based system will recognize and reward immigrant contributions.",
		author: "Tobi Lutke",
	},
	{
		slug: "civic-service-year",
		title: "Unite Canada Through A Year of National Service",
		description:
			"Canada has seen an alarming decline in national pride, community engagement, and unity.",
		author: "Daniel Debow",
	},
	{
		slug: "creative-future",
		title: "Reimagine Canada\u2019s Creative Future",
		description:
			"AI is transforming creative industries. Let\u2019s supercharge our world-class film, TV, advertising, gaming, and music sectors.",
		author: "Aidan Tracey",
	},
	{
		slug: "electrical-energy",
		title: "Canada Needs an Abundance of Electrical Energy",
		description:
			"Prosperity does not come without an abundance of energy. But today it is exceptionally difficult to build new infrastructure.",
		author: "George Babu",
	},
	{
		slug: "prioritize-proven-innovation",
		title: "Prioritize Proven Innovation",
		description:
			"Canada\u2019s current innovation strategy has failed. We pay for promises, not results.",
		author: "Jamie McDonald",
	},
	{
		slug: "productive-government-analysis",
		title: "Create A More Productive Government",
		description:
			"A line-by-line analysis of Canada\u2019s spend today, with suggestions to re-allocate from programs no longer serving the public interest.",
		author: "Lucy Hargreaves",
	},
	{
		slug: "sovereign-wealth-fund",
		title: "Turn Canada\u2019s Resources into Lasting Wealth",
		description:
			"A Sovereign Wealth Fund transforms today\u2019s temporary resource profits into lasting, shared prosperity for all Canadians.",
		author: "Shane Parrish",
	},
	{
		slug: "modern-military",
		title: "A Modern Military That Can Defend Canada",
		description:
			"Canada\u2019s military has fallen behind. We need to modernize fast.",
		author: "Shaun Francis",
	},
	{
		slug: "student-housing",
		title: "Solve the Student Housing Crisis",
		description:
			"Our world-class higher education system is being undermined by a critical shortage of student housing.",
		author: "Richard Abboud",
	},
	{
		slug: "housing-zoning",
		title: "Free Zoning to Build More Homes",
		description:
			"Outdated zoning rules and slow approval processes prevent homes from being built.",
		author: "Julie Di Lorenzo",
	},
	{
		slug: "invest-in-building-homes",
		title: "Let People Invest in Building Canadian Homes",
		description:
			"Well-meaning efforts to curb foreign speculation have made it difficult for anyone to invest in building new homes.",
		author: "Julie Di Lorenzo",
	},
	{
		slug: "rental-housing",
		title: "Build Rental Housing Again",
		description:
			"Canada stopped building purpose-built rentals in the 1980s.",
		author: "Mazyar Mortazavi",
	},
	{
		slug: "housing-taxes",
		title: "Stop Taxing Homes Out of Existence",
		description:
			"When taxes can make up 36% of a new home, it\u2019s no wonder Canadians can\u2019t afford them.",
		author: "Brad Carr",
	},
	{
		slug: "banking-data",
		title: "Give Canadians Control of Their Data, Starting with Banking",
		description:
			"Canadians don\u2019t control their own financial data, making it painful to change providers.",
		author: "Andrew Graham",
	},
	{
		slug: "stablecoins",
		title: "Canada Cannot Afford to Miss Out on Stablecoins",
		description:
			"Stablecoins backed by the Canadian dollar will make transactions faster, cheaper, and more efficient.",
		author: "Som Seif",
	},
	{
		slug: "children-head-start-fund",
		title: "Brighter Futures: Giving Every Child a Head-Start Fund",
		description:
			"With modest changes to Old Age Security, we can create a wealth fund that gives every child $10,000 at birth.",
		author: "Joe Canavan",
	},
	{
		slug: "skilled-trades",
		title: "Let\u2019s Build Canada by Recognising Talent in Skilled Trades",
		description:
			"Skilled tradespeople are the backbone of Canada\u2019s future.",
		author: "Toby Shannan",
	},
	{
		slug: "affordable-telecom",
		title: "Affordable Mobile Everywhere in Canada \u2013 For Good",
		description:
			"Despite past efforts, Canadians still have some of the highest phone bills in the world.",
		author: "Brice Scheschuk",
	},
	{
		slug: "food-independence",
		title: "Let\u2019s Produce Much More of Our Own Food",
		description:
			"Canada imports $65 billion worth of food annually. But technology is rapidly making it possible to produce food at home.",
		author: "Jon Lomow",
	},
	{
		slug: "how-canada-builds",
		title: "Let\u2019s Show the World How Canada Builds",
		description:
			"Canadians have rightly grown skeptical of whether our government can do anything big. Let\u2019s prove this isn\u2019t true.",
		author: "Harley Finkelstein",
	},
	{
		slug: "energy-independence",
		title: "Building to Secure Canadian Energy Independence",
		description:
			"Canada cannot afford to be held hostage to changing geopolitics.",
		author: "Adam Waterous",
	},
	{
		slug: "public-service-reform",
		title: "A Public Service That Works for Better Government Services",
		description:
			"The federal workforce has grown to an all-time high while delivering diminishing results.",
		author: "Daniel Eberhard",
	},
	{
		slug: "ai-first-government-services",
		title: "Make Canadian Government Services AI-First",
		description:
			"AI is the key technology to unlock Canadian prosperity.",
		author: "Benjamin Alarie",
	},
	{
		slug: "interprovincial-trade",
		title: "Good in One Province, Good in All",
		description:
			"Your credentials should work everywhere in Canada. We are one country, let\u2019s have one market.",
		author: "Wayne Pommen",
	},
	{
		slug: "unlock-health-records-save-canadian-lives",
		title: "Unlock Health Records, Save Canadian Lives",
		description:
			"Your medical history should be available instantly to you and any doctor that needs it.",
		author: "Michael Serbinis",
	},
	{
		slug: "canadian-pride",
		title:
			"A Great Nation Celebrates Its Achievements and Its Builders\u2014So Should Canada",
		description:
			"Creators should be rewarded for creating content that celebrates Canada and Canadian achievements.",
		author: "Michael Litt",
	},
	{
		slug: "transportation-permitting",
		title: "Build Here, Not There: Winning the Transportation Race",
		description:
			"Canada could be the friendliest place in the world to build new transportation technologies.",
		author: "Stewart Lyons",
	},
	{
		slug: "talent-first-immigration",
		title:
			"Great People, Greater Canada: A Talent First Immigration Strategy for Canada",
		description:
			"The world\u2019s most innovative companies compete for top talent. It\u2019s time Canada competed the same way.",
		author: "Martin Basiri",
	},
];

function escapeXml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

export function buildRssFeed(): string {
	const items = memoFeedItems
		.map(
			(memo) => `    <item>
      <title>${escapeXml(memo.title)}</title>
      <link>${baseUrl}/memos/${memo.slug}</link>
      <guid isPermaLink="true">${baseUrl}/memos/${memo.slug}</guid>
      <description>${escapeXml(memo.description)}</description>
      <dc:creator>${escapeXml(memo.author)}</dc:creator>
    </item>`,
		)
		.join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Build Canada \ud83c\udfd7\ufe0f\ud83c\udde8\ud83c\udde6</title>
    <link>${baseUrl}/memos</link>
    <description>Plans for a more prosperous Canada</description>
    <language>en-ca</language>
    <atom:link href="${baseUrl}/memos/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}
