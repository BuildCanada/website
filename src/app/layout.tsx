import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://buildcanada.com"),
	title: {
		default: "Build Canada",
		template: "%s | Build Canada",
	},
	description:
		"We believe Canada should be the most prosperous country in the world",
	openGraph: {
		title: "Build Canada",
		description:
			"We believe Canada should be the most prosperous country in the world",
		url: "https://buildcanada.com",
		siteName: "Build Canada",
		images: ["/images/f68e253b635e812ee58c7a680780c745_seo-image.png"],
		type: "website",
		locale: "en_CA",
	},
	twitter: {
		card: "summary_large_image",
		site: "@build_canada",
		title: "Build Canada",
		description:
			"We believe Canada should be the most prosperous country in the world",
	},
	alternates: {
		canonical: "https://buildcanada.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="shortcut icon"
					href="/images/Favicon.png"
					type="image/x-icon"
				/>
				<link
					rel="apple-touch-icon"
					href="/images/webclip.png"
				/>
				<link
					rel="alternate"
					type="application/rss+xml"
					title="Build Canada Memos"
					href="/memos/rss.xml"
				/>
			</head>
			<body className="body">{children}</body>
		</html>
	);
}
