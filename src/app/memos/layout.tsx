import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Memos",
	description:
		"Bold ideas to grow Canada, turned into actionable plans, backed by builders who've done it before",
	alternates: { canonical: "/memos" },
	openGraph: {
		title: "Memos",
		description:
			"Bold ideas to grow Canada, turned into actionable plans, backed by builders who've done it before",
		url: "/memos",
	},
};

export default function MemosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
