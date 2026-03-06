"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	return (
		<div className="navbar" role="banner">
			{/* Mobile brand logo (visible < 992px) */}
			<a href="/" className="navigation-button brand responsive">
				<img
					src="/images/build_canada-wordmark.svg"
					loading="lazy"
					width={104}
					alt="Build Canada"
					className="wordmark-logo"
				/>
				<img
					src="/images/build_canada-emoji_logo.png"
					loading="lazy"
					width={119}
					alt="Build Canada"
					srcSet="/images/emoji-logo-p-500.png 500w, /images/emoji-logo-p-800.png 800w, /images/build_canada-emoji_logo.png 1520w"
					className="emoji-logo"
				/>
			</a>

			{/* Desktop nav (visible >= 992px) */}
			<nav role="navigation" className="nav-menu">
				<a href="/" className="navigation-button brand">
					<img
						src="/images/build_canada-wordmark.svg"
						loading="lazy"
						width={119}
						alt="Build Canada"
						className="wordmark-logo"
					/>
					<img
						src="/images/build_canada-emoji_logo.png"
						loading="lazy"
						width={119}
						alt="Build Canada"
						srcSet="/images/emoji-logo-p-500.png 500w, /images/emoji-logo-p-800.png 800w, /images/build_canada-emoji_logo.png 1520w"
						className="emoji-logo"
					/>
				</a>
				<a href="/memos" className="navigation-button">
					Memos
				</a>
				<a href="/projects" className="navigation-button">
					Projects
				</a>
				<a href="/get-involved" className="navigation-button">
					Get Involved
				</a>
				<a href="/about" className="navigation-button">
					About
				</a>
				<a
					href="https://shop.buildcanada.com"
					target="_blank"
					rel="noopener noreferrer"
					className="navigation-button"
				>
					Shop
				</a>
			</nav>

			{/* Mobile hamburger button */}
			<button
				className="menu-button"
				aria-label="Toggle menu"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<div className="menu-icon-container">
					<div className="menu-line top" />
					<div className="menu-line middle" />
					<div className="menu-line bottom" />
				</div>
			</button>

			{/* Mobile menu overlay */}
			<div className={`mobile-menu-overlay${menuOpen ? " is-open" : ""}`}>
				<div>
					<a
						href="/memos"
						className="navigation-button"
						onClick={() => setMenuOpen(false)}
					>
						Memos
					</a>
					<a
						href="/projects"
						className="navigation-button"
						onClick={() => setMenuOpen(false)}
					>
						Projects
					</a>
					<a
						href="/get-involved"
						className="navigation-button"
						onClick={() => setMenuOpen(false)}
					>
						Get Involved
					</a>
					<a
						href="/about"
						className="navigation-button"
						onClick={() => setMenuOpen(false)}
					>
						About
					</a>
					<a
						href="https://shop.buildcanada.com"
						target="_blank"
						rel="noopener noreferrer"
						className="navigation-button"
						onClick={() => setMenuOpen(false)}
					>
						Shop
					</a>
				</div>
			</div>
		</div>
	);
}
