"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
	const pathname = usePathname();
	const ctxRef = useRef<gsap.Context | null>(null);
	const hasRendered = useRef(false);

	useEffect(() => {
		// On first mount: animate everything (initial page load).
		// On subsequent renders (client-side nav): skip sections already in viewport.
		const isClientNav = hasRendered.current;
		hasRendered.current = true;

		const dark = "#000000";
		const white = "#ffffff";
		const lineDuration = 3;
		const lineIntro = "<0.1";
		const titleIntro = "<0.4";
		const easy = "power3.out";

		ctxRef.current = gsap.context(() => {
			const sections = document.querySelectorAll(".section");

			sections.forEach((section) => {
				if (isClientNav) {
					const rect = section.getBoundingClientRect();
					if (rect.top < window.innerHeight * 0.6) return;
				}

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top 60%",
						end: "bottom bottom",
						toggleActions: "play none none none",
					},
				});

				tl.from(
					section.querySelectorAll(".line-horizontal-top"),
					{ scaleX: 0, backgroundColor: dark, duration: lineDuration, ease: easy },
					lineIntro,
				);

				tl.from(
					section.querySelectorAll(".line-horizontal-bottom"),
					{ scaleX: 0, backgroundColor: dark, duration: lineDuration, ease: easy },
					lineIntro,
				);

				tl.from(
					section.querySelectorAll(".line-vertical-right-2"),
					{ scaleY: 0, backgroundColor: dark, duration: 1, ease: easy },
					lineIntro,
				);

				tl.from(
					section.querySelectorAll(".line-vertical-left"),
					{ scaleY: 0, backgroundColor: dark, duration: lineDuration, ease: easy },
					lineIntro,
				);

				tl.from(
					section.querySelectorAll(".line-vertical-right"),
					{ scaleY: 0, backgroundColor: dark, duration: 1, ease: easy },
					lineIntro,
				);

				tl.from(
					section.querySelectorAll(".line-vertical-left-3"),
					{ scaleY: 0, backgroundColor: dark, duration: 1, ease: easy },
					lineIntro,
				);

				tl.from(
					section.querySelectorAll(".hero-title"),
					{ autoAlpha: 0, duration: 1 },
					"<-0.1",
				);

				tl.from(
					section.querySelectorAll(".hero-paragraph"),
					{ autoAlpha: 0, y: "0.2rem", ease: easy },
					titleIntro,
				);

				tl.from(
					section.querySelectorAll(".hero-button-container"),
					{ autoAlpha: 0, y: "0.2rem" },
					titleIntro,
				);

				tl.from(
					section.querySelectorAll(".get-involved-form"),
					{ autoAlpha: 0, y: "0.2rem" },
					lineIntro,
				);

				tl.from(
					section.querySelectorAll(".get-involved-privacy-text"),
					{ autoAlpha: 0, y: "0.2rem" },
					lineIntro,
				);

				tl.from(
					section.querySelectorAll(".spacer-image"),
					{ autoAlpha: 0, y: "0.2rem" },
					titleIntro,
				);
			});

			// Fade-in for containers with style="opacity:0"
			const fadeContainers = document.querySelectorAll(
				".container[data-animate]",
			);
			fadeContainers.forEach((container) => {
				if (isClientNav) {
					const rect = container.getBoundingClientRect();
					if (rect.top < window.innerHeight * 0.7) {
						gsap.set(container, { opacity: 1 });
						return;
					}
				}
				gsap.to(container, {
					opacity: 1,
					duration: 1,
					scrollTrigger: {
						trigger: container,
						start: "top 70%",
						toggleActions: "play none none none",
					},
				});
			});

			// Hero section fade-in
			const heroSection = document.querySelector(".section.hero");
			if (heroSection) {
				gsap.to(heroSection, { opacity: 1, duration: 1 });
			}

			// Footer line animations
			const footer = document.querySelector(".footer");
			const skipFooter = isClientNav && footer &&
				footer.getBoundingClientRect().top < window.innerHeight * 0.5;

			if (footer && !skipFooter) {
				const footerTl = gsap.timeline({
					scrollTrigger: {
						trigger: ".footer",
						start: "top 50%",
						end: "bottom bottom",
						toggleActions: "play none none none",
					},
				});

				footerTl.from(
					".line-horizontal-top-footer",
					{ scaleX: 0, backgroundColor: white, duration: lineDuration, ease: easy },
					"<-0.1",
				);

				footerTl.from(
					".line-horizontal-bottom-footer",
					{ scaleX: 0, backgroundColor: white, duration: lineDuration, ease: easy },
					lineIntro,
				);

				footerTl.from(
					".line-vertical-left-footer",
					{ scaleY: 0, backgroundColor: white, duration: lineDuration, ease: easy },
					lineIntro,
				);

				footerTl.from(
					".line-vertical-right-footer",
					{ scaleY: 0, backgroundColor: white, duration: 1, ease: easy },
					lineIntro,
				);

				footerTl.from(
					".footer-title",
					{ autoAlpha: 0, duration: 1 },
					lineIntro,
				);

				footerTl.from(
					".quote",
					{ autoAlpha: 0, ease: easy },
					">0.5",
				);
			}
		});

		return () => {
			if (ctxRef.current) {
				ctxRef.current.revert();
				ctxRef.current = null;
			}
		};
	}, [pathname]);

	return null;
}
