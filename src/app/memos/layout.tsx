import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Memos",
	description:
		"Bold ideas to grow Canada, turned into actionable plans, backed by builders who've done it before",
};

export default function MemosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
