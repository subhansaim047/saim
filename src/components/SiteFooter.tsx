"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FazierBadge } from "./FazierBadge";

export function SiteFooter(props?: { theme?: "dark" | "light"; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("contact@saimdev.site");
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <footer
      className={`rh-page relative bg-[#0D0D0D] text-white overflow-hidden border-t border-[#202020] ${props?.className ?? ""}`}
      style={{
        backgroundImage: "url(/rh-exact/footer/map-3072.webp)",
        backgroundPosition: "50% 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1168px] mx-auto px-5 pt-24 pb-12 sm:pt-32 sm:pb-16">
        {/* Top CTA Block (Exact rh.design Footer Hero) */}
        <div className="flex flex-col items-center text-center pb-20 sm:pb-28 border-b border-white/[0.1]">
          <h2 className="text-[clamp(38px,5.4vw,72px)] font-medium leading-[1.08] tracking-[-0.035em] max-w-[780px]">
            <span className="text-white">Let’s build something </span>
            <span className="text-[#939393]">great together</span>
          </h2>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 focus:outline-none"
            >
              <span className="text-[18px] font-medium text-white relative pb-1">
                Start your project
                <span className="absolute left-0 bottom-0 h-[1px] w-full bg-white origin-right scale-x-100 transition-transform duration-300 group-hover:scale-x-0" />
              </span>
              <span className="w-12 h-12 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center relative overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  className="w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-5 group-hover:-translate-y-5"
                >
                  <path
                    d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  className="w-3.5 h-3.5 absolute -translate-x-5 translate-y-5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0"
                >
                  <path
                    d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/overview"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] hover:border-[#BAFF00]/50 text-[14px] text-[#CBCBCB] hover:text-white transition-all"
            >
              <span>View Full Studio Overview &amp; Cost Calculator</span>
              <span className="text-[#BAFF00]">↗</span>
            </Link>
          </div>

          {/* Copy Email Pill */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="text-[14px] text-[#939393]">
              Or reach out directly at
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2.5 text-[clamp(20px,2.5vw,28px)] font-medium text-white hover:text-[#BAFF00] transition-colors cursor-pointer"
            >
              <span>contact@saimdev.site</span>
              <span className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.05] group-hover:border-[#BAFF00] flex items-center justify-center">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-3.5 h-3.5 text-current"
                >
                  <rect
                    x="5.5"
                    y="5.5"
                    width="8"
                    height="8"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M10.5 5.5V3.5C10.5 2.67157 9.82843 2 9 2H3.5C2.67157 2 2 2.67157 2 3.5V9C2 9.82843 2.67157 10.5 3.5 10.5H5.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </span>
            </button>
            {copied && (
              <span className="mt-1 px-3.5 py-1 rounded-full bg-[#BAFF00] text-[#0D0D0D] text-[12px] font-medium">
                E-mail copied to clipboard
              </span>
            )}
          </div>
        </div>

        {/* Middle Multi-Column Directory */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <span className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white flex items-center justify-center">
                <img
                  src="/saim-dev-logo.png"
                  alt="Saim Dev"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </span>
              <div>
                <span className="block text-[18px] font-medium text-white tracking-[-0.02em]">
                  Saim Dev
                </span>
                <span className="block text-[12px] text-[#939393]">
                  Custom Web Development Studio
                </span>
              </div>
            </Link>
            <p className="text-[14px] text-[#939393] leading-relaxed max-w-sm">
              Senior-led Next.js 15, React 19, Shopify, and bespoke web
              application engineering for ambitious UK, European, and global
              brands. Fixed pricing, sub-second speed, and 100% source code
              ownership.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://wa.me/923196526604"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-[#BAFF00] hover:text-[#0D0D0D] text-white transition-colors"
              >
                WhatsApp Studio ↗
              </a>
              <a
                href="https://x.com/saimwebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/15 text-[#CBCBCB] hover:text-white transition-colors"
              >
                X / Twitter ↗
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-[12px] uppercase tracking-[0.88px] text-[#939393]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-[15px] text-[#CBCBCB]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/demos"
                  className="hover:text-white transition-colors"
                >
                  Live Demos
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/overview"
                  className="hover:text-[#BAFF00] text-white transition-colors"
                >
                  Studio Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="hover:text-white transition-colors"
                >
                  4-Stage Process
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies"
                  className="hover:text-white transition-colors"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Saim
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[12px] uppercase tracking-[0.88px] text-[#939393]">
              Services
            </div>
            <ul className="space-y-2.5 text-[15px] text-[#CBCBCB]">
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-[#BAFF00] transition-colors"
                >
                  All 13 Services →
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-development"
                  className="hover:text-white transition-colors"
                >
                  Custom Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-websites"
                  className="hover:text-white transition-colors"
                >
                  Business Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-development"
                  className="hover:text-white transition-colors"
                >
                  E-Commerce Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-shopify"
                  className="hover:text-white transition-colors"
                >
                  Shopify Store Builds
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-web-apps"
                  className="hover:text-white transition-colors"
                >
                  Custom Web Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landing-pages-cro"
                  className="hover:text-white transition-colors"
                >
                  Landing Pages &amp; CRO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-redesign"
                  className="hover:text-white transition-colors"
                >
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-clone"
                  className="hover:text-white transition-colors"
                >
                  1:1 Website Clone
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-services"
                  className="hover:text-white transition-colors"
                >
                  Technical SEO &amp; Speed
                </Link>
              </li>
            </ul>
          </div>

          {/* UK Hubs, Tools & Resources Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[12px] uppercase tracking-[0.88px] text-[#939393]">
              UK Hubs &amp; Free Tools
            </div>
            <ul className="space-y-2.5 text-[15px] text-[#CBCBCB]">
              <li>
                <Link
                  href="/nextjs-developer-uk"
                  className="hover:text-white transition-colors"
                >
                  Next.js Developer UK
                </Link>
              </li>
              <li>
                <Link
                  href="/services/takeaway-web-design"
                  className="hover:text-white transition-colors"
                >
                  Takeaway Web Design UK
                </Link>
              </li>
              <li>
                <Link
                  href="/services/takeaway-web-design-london"
                  className="hover:text-white transition-colors"
                >
                  Takeaway Websites London
                </Link>
              </li>
              <li>
                <Link
                  href="/services/takeaway-web-design-manchester"
                  className="hover:text-white transition-colors"
                >
                  Takeaway Websites Manchester
                </Link>
              </li>
              <li>
                <Link
                  href="/services/takeaway-web-design-birmingham"
                  className="hover:text-white transition-colors"
                >
                  Takeaway Websites Birmingham
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-white transition-colors"
                >
                  Engineering &amp; UK Hospitality Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="hover:text-white transition-colors"
                >
                  160+ Free UK Kitchen Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/food-safety-templates"
                  className="hover:text-white transition-colors"
                >
                  Food Safety Templates Hub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#939393]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span>© {new Date().getFullYear()} Saim Dev. All rights reserved.</span>
            <FazierBadge />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open_cookie_settings"))
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
