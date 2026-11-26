"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FazierBadge } from "./FazierBadge";

export function SiteFooter(props?: { theme?: "dark" | "light"; className?: string }) {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname() || "";
  const isHospitalitySilo =
    !pathname.includes("website-cost-calculator") &&
    /takeaway|commission|hygiene|natasha|allergen|ppds|food-cost|recipe|cooling|sfbb|haccp|^\/tools$/i.test(
      pathname
    );

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("agency@saimdev.site");
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
              <span className="w-12 h-12 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center relative overflow-hidden isolate transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  className="w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-8 group-hover:-translate-y-8"
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
                  className="w-3.5 h-3.5 absolute -translate-x-8 translate-y-8 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0"
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
              <span>agency@saimdev.site</span>
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
            <a href="/" className="inline-flex items-center gap-3.5 group">
              <span className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white flex items-center justify-center">
                <img
                  src="/saim-dev-logo.png"
                  alt="Saim Dev Bespoke Next.js 16 Web Engineering & Headless Shopify Studio Logo"
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
            </a>
            <p className="text-[14px] text-[#939393] leading-relaxed max-w-sm">
              Senior-led Next.js 16, React 19, Shopify, and bespoke web
              application engineering for ambitious UK, US, and European
              brands. Fixed GBP &amp; USD pricing and 100% source code
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
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/demos"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Live Demos
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/overview"
                  prefetch={false}
                  className="hover:text-[#BAFF00] text-white transition-colors"
                >
                  Studio Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  4-Stage Process
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  About Saim
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  prefetch={false}
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
                  prefetch={false}
                  className="text-white hover:text-[#BAFF00] transition-colors"
                >
                  All 13 Services →
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-development"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Next.js Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-websites"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Business Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-development"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  E-Commerce Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-shopify"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Shopify Store Builds
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-web-apps"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Custom Web Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landing-pages-cro"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Landing Pages &amp; CRO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-redesign"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-clone"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  1:1 Website Clone
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-services"
                  prefetch={false}
                  className="hover:text-white transition-colors"
                >
                  Technical SEO &amp; Speed
                </Link>
              </li>
            </ul>
          </div>

          {/* Context-Isolated Silo Column (Prevents Cross-Silo Contextual Dilution) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[12px] uppercase tracking-[0.88px] text-[#939393]">
              {isHospitalitySilo
                ? "UK Takeaway Hubs & Kitchen Tools"
                : "UK & US Engineering Hubs & Tools"}
            </div>
            {isHospitalitySilo ? (
              <ul className="space-y-2.5 text-[15px] text-[#CBCBCB]">
                <li>
                  <Link
                    href="/services/takeaway-web-design"
                    prefetch={false}
                    className="text-white hover:text-[#BAFF00] transition-colors"
                  >
                    Takeaway Web Design UK →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/takeaway-web-design-london"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Takeaway Websites London
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/takeaway-web-design-manchester"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Takeaway Websites Manchester
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/takeaway-web-design-birmingham"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Takeaway Websites Birmingham
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools"
                    prefetch={false}
                    className="text-white hover:text-[#BAFF00] transition-colors"
                  >
                    Free UK Kitchen Tools Hub →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/commission-savings-calculator"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Takeaway Commission Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/allergen-matrix-generator"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    14-Allergen Matrix Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/ppds-label-generator"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Natasha&apos;s Law PPDS Label Maker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/food-cost-calculator"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Kitchen Food Cost &amp; GP% Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/recipe-batch-calculator"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Commercial Recipe Batch Scaler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/zero-commission-takeaway-online-ordering-system-uk-guide"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    0% Commission Ordering Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/uk-food-hygiene-rating-scheme-5-star-checklist"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    5-Star Hygiene Checklist UK
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2.5 text-[15px] text-[#CBCBCB]">
                <li>
                  <Link
                    href="/nextjs-developer-uk"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Next.js Developer UK
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/website-cost-calculator"
                    prefetch={false}
                    className="text-white hover:text-[#BAFF00] transition-colors"
                  >
                    Website Cost Calculator UK →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/wordpress-headless-cms"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Headless WordPress &amp; Sanity CMS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/website-speed-optimization"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Core Web Vitals Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/takeaway-web-design"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Direct Ordering Web Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Interactive Calculators Hub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Next.js &amp; SEO Engineering Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/nextjs-website-development-cost-uk-us"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Next.js Cost Guide UK &amp; US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/nextjs-app-router-vs-wordpress-uk-seo"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Next.js vs WordPress SEO Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/migrate-wordpress-webflow-to-nextjs-seo-guide"
                    prefetch={false}
                    className="hover:text-white transition-colors"
                  >
                    Zero-Loss CMS Migration Guide
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#939393]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span>© {new Date().getFullYear()} Saim Dev. All rights reserved.</span>
            <FazierBadge />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/privacy" prefetch={false} className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              prefetch={false}
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/disclaimer"
              prefetch={false}
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </Link>
            <Link href="/terms" prefetch={false} className="hover:text-white transition-colors">
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
