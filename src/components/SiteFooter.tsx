"use client";

import React from "react";
import Link from "next/link";

interface SiteFooterProps {
  theme?: "dark" | "light";
  className?: string;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ theme = "light", className = "" }) => {
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t py-8 px-4 sm:px-8 text-center text-xs no-print ${
        isDark
          ? "border-white/10 bg-black text-white/60"
          : "border-[#E5E5EA] bg-white text-gray-500"
      } ${className}`}
    >
      <p>© 2026 Saim Dev. High-performance Next.js web architecture. Email: <a href="mailto:contact@saimdev.site" className="underline hover:text-primary">contact@saimdev.site</a></p>
      
      <div className={`mt-2 text-[11px] ${isDark ? "text-white/40" : "text-gray-400"}`}>
        Saim Dev — Independent Web Architecture Studio for UK &amp; Europe · WhatsApp: <a href="https://wa.me/923196526604" className="hover:underline text-primary">+92 319 6526604</a>
      </div>

      <nav
        aria-label="Footer Navigation"
        className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 ${
          isDark ? "text-white/70" : "text-gray-600"
        }`}
      >
        <Link href="/" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/services" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Services</Link>
        <span aria-hidden="true">·</span>
        <Link href="/services/takeaway-web-design" className={isDark ? "hover:text-white transition-colors py-1 px-1 text-amber-400" : "hover:text-black transition-colors py-1 px-1 text-amber-700 font-semibold"}>Takeaway Websites</Link>
        <span aria-hidden="true">·</span>
        <Link href="/nextjs-developer-uk" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Next.js UK</Link>
        <span aria-hidden="true">·</span>
        <Link href="/case-studies" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Case Studies</Link>
        <span aria-hidden="true">·</span>
        <Link href="/technologies" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Tech Stack</Link>
        <span aria-hidden="true">·</span>
        <Link href="/blogs" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Blog Guides</Link>
        <span aria-hidden="true">·</span>
        <Link href="/tools/ppds-label-generator" className={isDark ? "hover:text-white transition-colors py-1 px-1 text-amber-300" : "hover:text-black transition-colors py-1 px-1 text-amber-800"}>PPDS Label Maker</Link>
        <span aria-hidden="true">·</span>
        <Link href="/tools" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Free Tools</Link>
        <span aria-hidden="true">·</span>
        <Link href="/demos" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Demos</Link>
        <span aria-hidden="true">·</span>
        <Link href="/about" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>About</Link>
        <span aria-hidden="true">·</span>
        <Link href="/contact" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Contact</Link>
        <span aria-hidden="true">·</span>
        <Link href="/privacy" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Privacy Policy</Link>
        <span aria-hidden="true">·</span>
        <Link href="/cookie-policy" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Cookie Policy</Link>
        <span aria-hidden="true">·</span>
        <Link href="/disclaimer" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Disclaimer</Link>
        <span aria-hidden="true">·</span>
        <Link href="/terms" className={isDark ? "hover:text-white transition-colors py-1 px-1" : "hover:text-black transition-colors py-1 px-1"}>Terms</Link>
        <span aria-hidden="true">·</span>
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("open_cookie_settings"));
            }
          }}
          className={isDark ? "hover:text-white transition-colors py-1 px-1 cursor-pointer" : "hover:text-black transition-colors py-1 px-1 cursor-pointer"}
        >
          Cookie Settings
        </button>
      </nav>
    </footer>
  );
};
