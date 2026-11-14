"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface RhHeaderProps {
  theme?: "dark" | "light";
}

export function RhHeader({ theme = "dark" }: RhHeaderProps) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openMega = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 140);
  };

  const isDark = theme === "dark" || megaOpen;

  return (
    <>
      <header
        className={`rh-page fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
          scrolled && !megaOpen
            ? isDark
              ? "bg-[#0D0D0D]/85 backdrop-blur-xl border-b border-white/[0.08]"
              : "bg-[#F5F5F7]/85 backdrop-blur-xl border-b border-black/[0.07]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1168px] mx-auto px-5 h-[96px] flex items-center justify-between relative z-[102]">
          {/* Left: Saim Dev Real PNG Logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 group focus:outline-none"
            aria-label="Saim Dev Home"
          >
            <span
              className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${
                isDark
                  ? "border border-white/20 shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
                  : "border border-black/15 shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
              } bg-white`}
            >
              <img
                src="/saim-dev-logo.png"
                alt="Saim Dev"
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-full"
              />
            </span>
          </Link>

          {/* Center: 4 Exact Nav Links between c1 & c2 */}
          <nav
            className="hidden min-[921px]:flex items-center gap-2"
            aria-label="Primary Navigation"
          >
            <Link
              href="/demos"
              className={`px-3 py-2.5 text-[15px] leading-none rounded-full transition-colors duration-200 relative group ${
                isDark
                  ? "text-[#B3B3B3] hover:text-white"
                  : "text-[#595959] hover:text-[#0D0D0D]"
              }`}
            >
              <span className="relative">
                Live Demos
                <span className="absolute left-0 -bottom-[5px] h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>

            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={scheduleCloseMega}
            >
              <button
                type="button"
                aria-expanded={megaOpen}
                onClick={() => setMegaOpen((v) => !v)}
                className={`px-3 py-2.5 text-[15px] leading-none rounded-full inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer ${
                  megaOpen
                    ? "text-white"
                    : isDark
                    ? "text-[#B3B3B3] hover:text-white"
                    : "text-[#595959] hover:text-[#0D0D0D]"
                }`}
              >
                <span className="relative">
                  Services
                  <span
                    className={`absolute left-0 -bottom-[5px] h-[1px] bg-current transition-all duration-300 ${
                      megaOpen ? "w-full" : "w-0"
                    }`}
                  />
                </span>
                <svg
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                  className={`w-2.5 h-2.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    megaOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <Link
              href="/pricing"
              className={`px-3 py-2.5 text-[15px] leading-none rounded-full transition-colors duration-200 relative group ${
                isDark
                  ? "text-[#B3B3B3] hover:text-white"
                  : "text-[#595959] hover:text-[#0D0D0D]"
              }`}
            >
              <span className="relative">
                Pricing
                <span className="absolute left-0 -bottom-[5px] h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2.5 text-[15px] leading-none rounded-full transition-colors duration-200 relative group ${
                isDark
                  ? "text-[#B3B3B3] hover:text-white"
                  : "text-[#595959] hover:text-[#0D0D0D]"
              }`}
            >
              <span className="relative">
                About
                <span className="absolute left-0 -bottom-[5px] h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          </nav>

          {/* Right: Get in touch + Lime Circle Arrow */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3.5 text-decoration-none focus:outline-none"
            >
              <span
                className={`text-[15px] font-medium leading-none relative pb-1 transition-colors duration-300 ${
                  isDark ? "text-white" : "text-[#0D0D0D]"
                }`}
              >
                Get in touch
                <span
                  className={`absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-100 transition-transform duration-300 group-hover:scale-x-0 ${
                    isDark ? "bg-white" : "bg-[#0D0D0D]"
                  }`}
                />
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

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={`min-[921px]:hidden w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
                isDark
                  ? "border-white/20 text-white"
                  : "border-black/20 text-[#0D0D0D]"
              }`}
            >
              <span className="w-4 h-2.5 relative block">
                <span
                  className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ${
                    mobileOpen ? "top-[4px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ${
                    mobileOpen ? "top-[4px] -rotate-45" : "top-[8px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Full-Width Services Mega-Menu Curtain (100% Same-to-Same as rh.design) */}
        <div
          onMouseEnter={openMega}
          onMouseLeave={scheduleCloseMega}
          className={`hidden min-[921px]:block fixed top-0 left-0 right-0 z-[101] bg-[#0D0D0D] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
            megaOpen
              ? "opacity-100 visible pointer-events-auto [clip-path:inset(0_0_0%_0)]"
              : "opacity-0 invisible pointer-events-none [clip-path:inset(0_0_100%_0)]"
          }`}
        >
          {/* Architectural Grid Lines */}
          <div className="h-[96px] border-b border-[#202020]" />
          <div className="max-w-[1128px] mx-auto grid grid-cols-[357fr_398fr_373fr] min-h-[423px] border-x border-b border-[#202020] divide-x divide-[#202020]">
            {/* Column 1: WHAT WE BUILD */}
            <div className="p-10 flex flex-col justify-between">
              <div>
                <div className="text-[12px] leading-[16.5px] tracking-[0.88px] uppercase text-[#939393]">
                  What we build
                </div>
                <div className="mt-5 flex flex-col gap-6">
                  <Link
                    href="/services/website-development"
                    className="group text-white hover:text-[#BAFF00] text-[clamp(30px,2.6vw,40px)] font-medium leading-[1.16] tracking-[-1.6px] whitespace-nowrap transition-colors"
                  >
                    <span className="rh-roll-wrap">
                      <span>Web Design</span>
                      <span>Web Design</span>
                    </span>
                  </Link>
                  <Link
                    href="/services/ecommerce-development"
                    className="group text-white hover:text-[#BAFF00] text-[clamp(30px,2.6vw,40px)] font-medium leading-[1.16] tracking-[-1.6px] whitespace-nowrap transition-colors"
                  >
                    <span className="rh-roll-wrap">
                      <span>E-Commerce</span>
                      <span>E-Commerce</span>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="pt-8 border-t border-[#202020] flex flex-col gap-2.5">
                <Link
                  href="/services"
                  className="text-[14px] text-[#939393] hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore all 13 services</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/overview"
                  className="text-[14px] text-[#BAFF00] hover:underline transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Interactive Cost Estimator &amp; Overview</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            {/* Column 2: CAPABILITIES */}
            <div className="p-10">
              <div className="text-[12px] leading-[16.5px] tracking-[0.88px] uppercase text-[#939393]">
                Capabilities
              </div>
              <div className="mt-[27px] grid grid-cols-2 gap-x-10 gap-y-5">
                <ul className="flex flex-col gap-1 list-none p-0 m-0">
                  <li className="text-white font-medium text-[16px] leading-[20px] mb-2">
                    Websites &amp; UI
                  </li>
                  <li>
                    <Link
                      href="/services/business-websites"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      Business Websites
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/landing-pages-cro"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      Landing Pages &amp; CRO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/website-clone"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      1:1 Website Clone
                    </Link>
                  </li>
                </ul>

                <ul className="flex flex-col gap-1 list-none p-0 m-0">
                  <li className="text-white font-medium text-[16px] leading-[20px] mb-2">
                    E-Commerce &amp; CMS
                  </li>
                  <li>
                    <Link
                      href="/services/ecommerce-shopify"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      Shopify Stores
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/wordpress-headless-cms"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      Headless &amp; WordPress
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/takeaway-web-design"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      Takeaway Ordering
                    </Link>
                  </li>
                </ul>

                <ul className="flex flex-col gap-1 list-none p-0 m-0">
                  <li className="text-white font-medium text-[16px] leading-[20px] mb-2">
                    Apps &amp; Redesign
                  </li>
                  <li>
                    <Link
                      href="/services/custom-web-apps"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      Custom Web Apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/website-redesign"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      Website Redesign
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nextjs-developer-uk"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      Full-Stack Next.js
                    </Link>
                  </li>
                </ul>

                <ul className="flex flex-col gap-1 list-none p-0 m-0">
                  <li className="text-white font-medium text-[16px] leading-[20px] mb-2">
                    Speed, SEO &amp; Tools
                  </li>
                  <li>
                    <Link
                      href="/services/seo-services"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      Technical SEO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/website-speed-optimization"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      99+ Speed Audit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools"
                      className="text-[#CBCBCB] hover:text-white text-[15px] leading-[24px] tracking-[-0.3px] transition-colors"
                    >
                      160+ Free UK Tools
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Featured Squire iPad Showcase Card */}
            <Link
              href="/demos"
              className="group relative overflow-hidden p-10 flex flex-col justify-between items-start isolate bg-[#0D0D0D]"
            >
              <img
                src="/rh-exact/nav/squire-logo.svg"
                alt="Featured Work"
                className="w-[68.58px] h-6 relative z-10"
              />
              <img
                src="/rh-exact/nav/squire-ipad.webp"
                alt="Interactive Live Demos Preview"
                className="w-[135.7%] max-w-none h-auto absolute -top-[9px] left-[15.44%] -z-10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-3 group-hover:-translate-y-2.5 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-x-0 bottom-0 h-[67.4%] bg-gradient-to-b from-transparent via-black/40 to-black/85 -z-[5]" />
              <span className="relative z-10 inline-flex items-center gap-1.5 text-white text-[16px] leading-[20px]">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className="w-[11.2px] h-[11.2px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M1 11L11 1M11 1H2.25M11 1V9.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="rh-roll-wrap">
                  <span>Explore Live Demos</span>
                  <span>Explore Live Demos</span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Drawer */}
      <div
        className={`rh-page min-[921px]:hidden fixed inset-0 z-[200] bg-[#0D0D0D] text-white p-5 flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between h-12">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white flex items-center justify-center"
          >
            <img
              src="/saim-dev-logo.png"
              alt="Saim Dev"
              className="w-full h-full object-cover"
            />
          </Link>
          <button
            type="button"
            aria-label="Close Menu"
            onClick={() => setMobileOpen(false)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white"
          >
            <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="my-8 flex-1 overflow-y-auto flex flex-col gap-3">
          <Link
            href="/demos"
            onClick={() => setMobileOpen(false)}
            className="text-[30px] font-medium tracking-[-0.8px] py-1.5 text-white"
          >
            Live Demos
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="text-[30px] font-medium tracking-[-0.8px] py-1.5 text-white inline-flex items-center gap-3"
            >
              <span>Services</span>
              <svg
                viewBox="0 0 10 6"
                fill="none"
                className={`w-4 h-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 py-2 flex flex-col gap-2 border-l border-white/15 mt-1">
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="text-[18px] text-[#BAFF00]"
                >
                  All 13 Services Hub
                </Link>
                <Link
                  href="/services/website-development"
                  onClick={() => setMobileOpen(false)}
                  className="text-[18px] text-[#B3B3B3]"
                >
                  Web Design &amp; Next.js
                </Link>
                <Link
                  href="/services/ecommerce-development"
                  onClick={() => setMobileOpen(false)}
                  className="text-[18px] text-[#B3B3B3]"
                >
                  E-Commerce &amp; Shopify
                </Link>
                <Link
                  href="/services/custom-web-apps"
                  onClick={() => setMobileOpen(false)}
                  className="text-[18px] text-[#B3B3B3]"
                >
                  Custom Web Apps
                </Link>
                <Link
                  href="/services/takeaway-web-design"
                  onClick={() => setMobileOpen(false)}
                  className="text-[18px] text-[#B3B3B3]"
                >
                  Takeaway Web Design
                </Link>
                <Link
                  href="/services/seo-services"
                  onClick={() => setMobileOpen(false)}
                  className="text-[18px] text-[#B3B3B3]"
                >
                  Technical SEO &amp; Speed
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/case-studies"
            onClick={() => setMobileOpen(false)}
            className="text-[30px] font-medium tracking-[-0.8px] py-1.5 text-white"
          >
            Case Studies
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="text-[30px] font-medium tracking-[-0.8px] py-1.5 text-white"
          >
            Pricing
          </Link>
          <Link
            href="/overview"
            onClick={() => setMobileOpen(false)}
            className="text-[30px] font-medium tracking-[-0.8px] py-1.5 text-white"
          >
            Cost Estimator
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="text-[30px] font-medium tracking-[-0.8px] py-1.5 text-white"
          >
            About
          </Link>
          <Link
            href="/blogs"
            onClick={() => setMobileOpen(false)}
            className="text-[30px] font-medium tracking-[-0.8px] py-1.5 text-white"
          >
            Insights &amp; Blog
          </Link>
          <Link
            href="/tools"
            onClick={() => setMobileOpen(false)}
            className="text-[30px] font-medium tracking-[-0.8px] py-1.5 text-white"
          >
            Free UK Tools
          </Link>
        </div>

        <div className="pt-5 border-t border-white/15 flex items-center justify-between">
          <a
            href="mailto:contact@saimdev.site"
            className="text-[15px] text-[#939393]"
          >
            contact@saimdev.site
          </a>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-3 text-white font-medium text-[17px]"
          >
            <span className="underline underline-offset-4">Get in touch</span>
            <span className="w-12 h-12 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
