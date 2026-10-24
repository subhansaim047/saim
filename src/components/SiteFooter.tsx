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
      <p>© 2026 Saim Dev. High-performance Next.js web architecture &amp; digital kitchen resources.</p>
      <nav
        aria-label="Footer Navigation"
        className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-2.5 ${
          isDark ? "text-white/70" : "text-gray-600"
        }`}
      >
        <Link href="/" className={isDark ? "hover:text-white transition-colors" : "hover:text-black transition-colors"}>Home</Link>
        <span aria-hidden="true">·</span>
        <Link href="/services" className={isDark ? "hover:text-white transition-colors" : "hover:text-black transition-colors"}>Services</Link>
        <span aria-hidden="true">·</span>
        <Link href="/demos" className={isDark ? "hover:text-white transition-colors" : "hover:text-black transition-colors"}>Demos</Link>
        <span aria-hidden="true">·</span>
        <Link href="/about" className={isDark ? "hover:text-white transition-colors" : "hover:text-black transition-colors"}>About</Link>
        <span aria-hidden="true">·</span>
        <Link href="/contact" className={isDark ? "hover:text-white transition-colors" : "hover:text-black transition-colors"}>Contact</Link>
        <span aria-hidden="true">·</span>
        <Link href="/privacy" className={isDark ? "hover:text-white transition-colors" : "hover:text-black transition-colors"}>Privacy Policy</Link>
        <span aria-hidden="true">·</span>
        <Link href="/cookie-policy" className={isDark ? "hover:text-white transition-colors" : "hover:text-black transition-colors"}>Cookie Policy</Link>
        <span aria-hidden="true">·</span>
        <Link href="/disclaimer" className={isDark ? "hover:text-white transition-colors" : "hover:text-black transition-colors"}>Disclaimer</Link>
        <span aria-hidden="true">·</span>
        <Link href="/terms" className={isDark ? "hover:text-white transition-colors" : "hover:text-black transition-colors"}>Terms</Link>
      </nav>
    </footer>
  );
};
