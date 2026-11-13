"use client";
import Link from "next/link";
import { IconX, IconQuora, IconContra, IconInstagram, IconTikTok, IconThreads } from "./SocialIcons";
import { getClaim } from "../lib/claims";
import { FazierBadge } from "./FazierBadge";

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
            <Link href="/services">All Services</Link>
            <Link href="/services/website-clone" className="text-[#5B92F5] hover:underline font-semibold">Website Clone ($1,900)</Link>
            <Link href="/services/website-development">Next.js Websites</Link>
            <Link href="/services/ecommerce-shopify">Next.js eCommerce</Link>
            <Link href="/services/takeaway-web-design" className="text-[#5B92F5] hover:underline">Takeaway Web Design</Link>
            <Link href="/services/landing-pages-cro">Landing Pages (CRO)</Link>
            <Link href="/services/website-redesign">Website Redesign</Link>
            <Link href="/services/website-speed-optimization">Speed &amp; Vitals</Link>
            <Link href="/services/seo-services">SEO Services</Link>
            <Link href="/demos">Demo Sites</Link>
          </nav>

          <nav className="site-footer__nav" aria-label="Explore navigation">
            <a href="/#benefits">Key Benefits</a>
            <a href="/#process">Our Process</a>
            <a href="/#pricing">Pricing Plans</a>
            <a href="/#faq">FAQ &amp; Help</a>
            <Link href="/blogs">Blogs</Link>
            <a href="/#contact">Get in Touch</a>
            <a href="mailto:contact@saimdev.site" className="text-[#5B92F5] hover:underline">
              contact@saimdev.site
            </a>
          </nav>

          <nav className="site-footer__nav" aria-label={getClaim("demos-preview")}>
            <span style={{ color: '#a3a3a3', fontSize: '10px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px', display: 'block' }}>
              {getClaim("demos-preview")}
            </span>
            <a href="/hq-leathercon/index.html">HQ Leathercon Store</a>
            <a href="/hotbite/index.html">HotBite Street Food</a>
            <a href="/burger-garage/index.html">Burger Garage</a>
            <a href="/frenchyse/index.html">Frenchyse Luxury</a>
            <a href="/anzaar/index.html">Anzaar Rooftop</a>
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

        {/* VISIBLE BUSINESS DETAILS & FAZIER FEATURED BADGE */}
        <div className="border-t border-white/10 pt-5 mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span>Saim Dev — Our Agency Registered in UK &amp; Based in Pakistan. $0 Upfront Deposit • Zero Monthly Charges.</span>
            <span>Contact: <a href="mailto:contact@saimdev.site" className="text-[#5B92F5] hover:underline">contact@saimdev.site</a> · WhatsApp: <a href="https://wa.me/923196526604" className="text-[#5B92F5] hover:underline">+92 319 6526604</a></span>
            <span>Business Hours: Mon–Fri 09:00–18:00 GMT · Sat 10:00–16:00 GMT (Remote UK &amp; EU Support)</span>
          </div>
          <FazierBadge className="shrink-0" />
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
