"use client";
import Link from "next/link";
import { IconX, IconQuora, IconContra, IconInstagram, IconTikTok, IconThreads } from "./SocialIcons";
import { getClaim } from "../lib/claims";

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
          <p className="site-footer__heading">
            High-Performance Web Architecture for Growing Businesses.
          </p>

          <nav className="site-footer__nav" aria-label="Page sections navigation">
            <a href="/#our-story">Our Story</a>
            <Link href="/services">Services</Link>
            <Link href="/services/takeaway-web-design" className="text-primary hover:underline">Takeaway Web Design</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/technologies">Tech Stack</Link>
            <Link href="/nextjs-developer-uk" className="text-primary hover:underline">Next.js UK & EU</Link>
            <Link href="/tools" className="text-primary hover:underline">Free Tools</Link>
            <Link href="/tools/ppds-label-generator">PPDS Label Maker</Link>
            <Link href="/tools/allergen-matrix-generator">Allergen Matrix</Link>
            <Link href="/tools/food-cost-calculator">Food Cost Tool</Link>
            <Link href="/demos">Demo Sites</Link>
          </nav>

          <nav className="site-footer__nav" aria-label="Explore navigation">
            <a href="/#benefits">Key Benefits</a>
            <a href="/#process">Our Process</a>
            <a href="/#pricing">Pricing Plans</a>
            <a href="/#faq">FAQ &amp; Help</a>
            <Link href="/blogs">Blogs</Link>
            <a href="/#contact">Get in Touch</a>
            <a href="mailto:contact@saimdev.site" className="text-primary hover:underline">
              contact@saimdev.site
            </a>
          </nav>

          <nav className="site-footer__nav" aria-label={getClaim("demos-preview")}>
            <span style={{ color: '#a3a3a3', fontSize: '10px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px', display: 'block' }}>
              {getClaim("demos-preview")}
            </span>
            <a href="/hotbite/index.html" rel="nofollow">O&apos;Resto Street Food</a>
            <a href="/burger-garage/index.html" rel="nofollow">Burger Garage</a>
            <a href="/frenchyse/index.html" rel="nofollow">Frenchyse Luxury</a>
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
          <Link href="/" className="site-footer__brand" aria-label="Saim Dev home">
            <span className="site-footer__mark" aria-hidden="true">
              <img
                src="/saim-dev-logo.jpg"
                alt="Saim Dev - Next.js Development Studio"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-full"
              />
            </span>
            <span className="site-footer__wordmark">Saim Dev</span>
          </Link>
        </div>

        {/* VISIBLE BUSINESS DETAILS */}
        <div className="border-t border-white/10 pt-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50 text-center sm:text-left">
          <span>Saim Dev — Independent Next.js Engineering Studio for UK &amp; European businesses.</span>
          <span>Contact: <a href="mailto:contact@saimdev.site" className="text-primary hover:underline">contact@saimdev.site</a> · WhatsApp: <a href="https://wa.me/923196526604" className="text-primary hover:underline">+92 319 6526604</a></span>
        </div>

        {/* LEGAL & TRUST LINE */}
        <div className="site-footer__legal border-t border-white/10 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© 2026 Saim Dev. All rights reserved. Email: <a href="mailto:contact@saimdev.site" className="text-white/80 hover:text-white underline">contact@saimdev.site</a></p>
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-white/70">
            <Link href="/" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Home</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-white transition-colors py-2 px-1.5 inline-block">All Services</Link>
            <span>•</span>
            <Link href="/demos" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Demo Showcase</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors py-2 px-1.5 inline-block">About</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Contact Us</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Privacy Policy</Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Cookie Policy</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Disclaimer</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors py-2 px-1.5 inline-block">Terms</Link>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open_cookie_settings"));
                }
              }}
              className="hover:text-white transition-colors py-2 px-1.5 inline-block text-left cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
