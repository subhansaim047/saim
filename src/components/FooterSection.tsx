import { useNavigate } from "react-router-dom";

export const FooterSection = () => {
  const navigate = useNavigate();
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
            <a href="/services">Services</a>
            <a href="/technologies">Tech Stack</a>
            <a href="/case-studies">Case Studies</a>
          </nav>

          <nav className="site-footer__nav" aria-label="Explore navigation">
            <a href="#benefits">Key Benefits</a>
            <a href="#process">My Process</a>
            <a href="#pricing">Pricing Plans</a>
            <a href="#faq">FAQ</a>
            <a href="/blogs">Blogs</a>
            <a href="/contact">Contact Page</a>
          </nav>

          <nav className="site-footer__nav" aria-label="Contact navigation">
            <a href="https://wa.me/12498984111" target="_blank" rel="nofollow noreferrer">
              WhatsApp Direct
            </a>
            <a href="https://wa.me/12498984111" target="_blank" rel="nofollow noreferrer">
              +1 (249) 898-4111
            </a>
          </nav>
        </div>

        {/* BRAND ROW */}
        <div className="site-footer__brand-row">
          <a href="/" className="site-footer__brand" aria-label="Saim Dev home">
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
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
