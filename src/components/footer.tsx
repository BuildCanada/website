import ScrollAnimations from "@/components/scroll-animations";

export default function Footer() {
	return (
		<>
			<ScrollAnimations />
			<footer className="footer section">
				<div className="footer-cta-container">
					<div className="footer-container">
						<div className="line-horizontal-top-footer" />
						<div className="line-horizontal-bottom-footer" />
						<div className="line-vertical-left-footer" />
						<div className="line-vertical-right-footer" />
						<h1 className="footer-title">Build Canada</h1>
					</div>
					<div className="footprint">
						<div className="copyright">
							<div className="social-set bottom">
								<a
									href="mailto:hello@buildcanada.com"
									className="social-icon-footer"
								>
									<img
										src="/images/email-1.png"
										loading="lazy"
										alt="Email"
										className="image invert"
									/>
								</a>
								<a
									href="http://x.com/build_canada"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon-footer"
								>
									<img
										src="/images/x.svg"
										loading="lazy"
										alt="X"
										className="image invert"
									/>
								</a>
								<a
									href="https://www.linkedin.com/company/buildcanada/"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon-footer"
								>
									<img
										src="/images/linkedin.svg"
										loading="lazy"
										alt="LinkedIn"
										className="image invert"
									/>
								</a>
								<a
									href="https://instagram.com/build_canada"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon-footer"
								>
									<img
										src="/images/instagram.svg"
										loading="lazy"
										alt="Instagram"
										className="image"
									/>
								</a>
								<a
									href="https://bsky.app/profile/buildcanada.com"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon-footer"
								>
									<img
										src="/images/bluesky.svg"
										loading="lazy"
										alt="Bluesky"
										className="image invert"
									/>
								</a>
								<a
									href="https://github.com/BuildCanada"
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon-footer"
								>
									<img
										src="/images/github.svg"
										loading="lazy"
										alt="GitHub"
										className="image invert"
									/>
								</a>
							</div>
							<div className="meta light">Copyright Build Canada 2026</div>
						</div>
						<div className="footer-right">
							<div className="hero-button-container">
								<a
									href="https://buildcanada.substack.com/subscribe"
									target="_blank"
									rel="noopener noreferrer"
									className="primary-button secondary w-button"
								>
									Get Updates
								</a>
								<a
									href="https://buy.stripe.com/3cI5kCdi8a2K2xY2bgdZ600"
									target="_blank"
									rel="noopener noreferrer"
									className="primary-button w-button"
								>
									Donate
								</a>
							</div>
							<div className="quote">
								<div className="p2 light">
									Whatever our errors are otherwise, we shall not err for
									want of boldness... Canada shall be the star towards which
									all men who love progress and freedom shall come.
								</div>
								<div className="caption sans light">— Laurier</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
