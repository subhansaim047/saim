import { Link } from "react-router-dom";

export const FooterSection = () => {
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
            <Link to="/services">Services</Link>
            <Link to="/technologies">Tech Stack</Link>
            <Link to="/demos">Demo Sites</Link>
          </nav>

          <nav className="site-footer__nav" aria-label="Explore navigation">
            <a href="#benefits">Key Benefits</a>
            <a href="#process">My Process</a>
            <a href="#pricing">Pricing Plans</a>
            <a href="#faq">FAQ</a>
            <Link to="/blogs">Blogs</Link>
            <a href="#contact">Contact</a>
          </nav>

          <nav className="site-footer__nav" aria-label="Contact navigation">
            <a href="https://wa.me/12498984111" target="_blank" rel="nofollow noreferrer">
              WhatsApp Direct
            </a>
            <a href="https://wa.me/12498984111" target="_blank" rel="noreferrer">
              +1 (249) 898-4111
            </a>
          </nav>
        </div>

        {/* BRAND ROW */}
        <div className="site-footer__brand-row">
          <Link to="/" className="site-footer__brand" aria-label="Saim Dev home">
            <span className="site-footer__mark" aria-hidden="true">
              <img
                src="/saim-dev-logo.jpg"
                alt="Saim Dev Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </span>
            <span className="site-footer__wordmark">Saim Dev</span>
          </Link>
        </div>

        {/* LEGAL LINE */}
        <div className="site-footer__legal">
          <p>Â© 2026 Saim Dev. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

