import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Build Canada",
	description:
		"We believe Canada should be the most prosperous country in the world",
	openGraph: {
		title: "Build Canada",
		description:
			"We believe Canada should be the most prosperous country in the world",
		images: [
			"/images/f68e253b635e812ee58c7a680780c745_seo-image.png",
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Build Canada",
		description:
			"We believe Canada should be the most prosperous country in the world",
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
			</head>
			<body className="body">{children}</body>
		</html>
	);
}
