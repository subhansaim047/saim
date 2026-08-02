interface FooterSectionProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenContact?: () => void;
  onOpenServices?: () => void;
  onOpenTech?: () => void;
  onOpenCaseStudies?: () => void;
}

export const FooterSection = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenContact,
  onOpenServices,
  onOpenTech,
  onOpenCaseStudies,
}: FooterSectionProps) => {
  return (
    <footer className="site-footer">
      {/* ANIMATED DOTS STRIP */}
      <div className="footer-dots" aria-hidden="true">
        <div className="footer-dots__line" />
      </div>

      {/* FOOTER INNER */}
      <div className="site-footer__inner">
        {/* TOP GRID */}
        <div className="site-footer__top">
          <h2 className="site-footer__heading">
            High-Performance Web Architecture for Growing Businesses.
          </h2>

          <nav className="site-footer__nav" aria-label="Page sections navigation">
            <a href="#our-story">Our Story</a>
            {onOpenServices ? (
              <button onClick={onOpenServices} className="hover:text-white transition-colors cursor-pointer text-left">
                Services
              </button>
            ) : (
              <a href="#services">Services</a>
            )}
            {onOpenTech ? (
              <button onClick={onOpenTech} className="hover:text-white transition-colors cursor-pointer text-left">
                Tech Stack
              </button>
            ) : (
              <a href="#technologies">Tech Stack</a>
            )}
            {onOpenCaseStudies ? (
              <button onClick={onOpenCaseStudies} className="hover:text-white transition-colors cursor-pointer text-left">
                Case Studies
              </button>
            ) : (
              <a href="#case-studies">Case Studies</a>
            )}
          </nav>

          <nav className="site-footer__nav" aria-label="Explore navigation">
            <a href="#benefits">Key Benefits</a>
            <a href="#process">My Process</a>
            <a href="#pricing">Pricing Plans</a>
            <a href="#faq">FAQ</a>
            {onOpenContact ? (
              <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer text-left">
                Contact Page
              </button>
            ) : (
              <a href="#contact">Contact Page</a>
            )}
          </nav>

          <nav className="site-footer__nav" aria-label="Contact navigation">
            <a
              href="https://wa.me/12498984111"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Direct
            </a>
            <a
              href="https://wa.me/12498984111"
              target="_blank"
              rel="noreferrer"
            >
              +1 (249) 898-4111
            </a>
          </nav>
        </div>

        {/* BRAND ROW */}
        <div className="site-footer__brand-row">
          <a
            href="/"
            className="site-footer__brand"
            aria-label="Saim Dev home"
          >
            <span className="site-footer__mark" aria-hidden="true">
              <img
                src="/saim-dev-logo.jpg"
                alt="Saim Dev Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </span>
            <span className="site-footer__wordmark">Saim Dev</span>
          </a>
        </div>

        {/* LEGAL LINE */}
        <div className="site-footer__legal">
          <p>© 2026 Saim Dev. All rights reserved.</p>
          {onOpenPrivacy && (
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          )}
          {onOpenTerms && (
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
