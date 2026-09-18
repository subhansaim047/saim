import { Link } from "react-router-dom";
import { IconX, IconQuora, IconContra, IconInstagram, IconTikTok, IconThreads } from "./SocialIcons";
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

          <nav className="site-footer__nav" aria-label="Social navigation">
            <a href="https://x.com/saimwebdev" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <IconX className="w-4 h-4" /> X (Twitter)
            </a>
            <a href="https://saimswebagency.quora.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <IconQuora className="w-4 h-4" /> Quora
            </a>
            <a href="https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <IconContra className="w-4 h-4" /> Contra
            </a>
            <a href="https://www.instagram.com/saim_agency/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <IconInstagram className="w-4 h-4" /> Instagram
            </a>
            <a href="https://www.tiktok.com/@saimdev.site" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <IconTikTok className="w-4 h-4" /> TikTok
            </a>
            <a href="https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <IconThreads className="w-4 h-4" /> Threads
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

