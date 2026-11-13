"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import {
  SoapBubbleMaterial,
  SoapBubbleSurface,
} from "./reactdrops/soap-bubble";
import { ReactDropButton, LOGO_MATERIAL_DEFAULTS } from "./ReactDropButton";

const TYPING_PHRASES = [
  "bespoke Next.js flagships.",
  "zero-fee headless stores.",
  "sub-second web software.",
  "high-converting UX systems.",
];

function HeroTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(TYPING_PHRASES[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const phrase = TYPING_PHRASES[phraseIndex];
    let delay = deleting ? 32 : 62;
    if (!deleting && charCount === phrase.length) delay = 1800;
    else if (deleting && charCount === 0) delay = 220;

    const timer = window.setTimeout(() => {
      if (!deleting) {
        if (charCount < phrase.length) setCharCount((c) => c + 1);
        else setDeleting(true);
      } else if (charCount > 0) {
        setCharCount((c) => c - 1);
      } else {
        setDeleting(false);
        setPhraseIndex((idx) => (idx + 1) % TYPING_PHRASES.length);
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [phraseIndex, charCount, deleting]);

  return (
    <div className="saim-fluid-typing inline-flex items-center justify-center gap-2.5 text-base sm:text-lg font-medium text-[#020612]/70 py-0.5">
      <span className="h-2 w-2 rounded-full bg-[#2F6CE1] shrink-0" />
      <span>
        Engineering{" "}
        <span className="text-[#1D4ED8] font-bold">
          {TYPING_PHRASES[phraseIndex].slice(0, charCount)}
        </span>
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-[1.05em] w-[2px] align-[-0.14em] bg-[#2F6CE1] animate-pulse"
        />
      </span>
    </div>
  );
}

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Live Demos", href: "#demos" },
  { label: "Estimator", href: "#estimator" },
  { label: "Compare", href: "#comparison" },
  { label: "Pricing", href: "#pricing" },
  { label: "160 Tools", href: "/tools" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const HeroSection = () => {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [bubbleCtaActive, setBubbleCtaActive] = useState(false);

  // Scroll-spy: highlight the nav item for the section currently in view
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const anchors = navItems.filter((n) => n.href.startsWith("#"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    anchors.forEach((a) => {
      const el = document.querySelector(a.href);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const lenis = (window as unknown as {
      __lenis?: {
        scrollTo: (
          el: HTMLElement,
          opts?: { offset?: number; duration?: number; easing?: (t: number) => number }
        ) => void;
      };
    }).__lenis;
    if (lenis) {
      lenis.scrollTo(target, {
        offset: -85,
        duration: 1.15,
        easing: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
      });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <SoapBubbleMaterial
      {...LOGO_MATERIAL_DEFAULTS}
      surface={bubbleCtaActive ? "bubble-liquid" : "liquid-glass"}
      iridescence={0.34}
      oilOpacity={0.2}
      bevel={12}
      tint="rgba(255, 255, 255, 0.86)"
      soapColor="rgba(47, 108, 225, 0.14)"
      wobble={0.36}
    >
      {/* ==============================================
          NAVBAR — Iridescent Liquid Bubble Pill Island
      =============================================== */}
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-[90] flex justify-center px-2 sm:px-6 transition-all duration-500 ease-spring-expo ${
          scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-5"
        }`}
      >
        {/* Mobile Floating Bubble Bar */}
        <SoapBubbleSurface
          as="div"
          surface="liquid-glass"
          interactive={0.18}
          radius={9999}
          className="flex sm:hidden saim-bubble-nav items-center justify-start gap-1 p-1.5 max-w-[94vw] overflow-hidden border border-[#020612]/10 bg-white/92 backdrop-blur-md shadow-[0_8px_24px_-10px_rgba(2,6,18,0.12)]"
        >
          <span className="section-dot ml-2 mr-0.5 animate-pulse shrink-0" />
          <div
            className="flex items-center gap-1 overflow-x-auto scrollbar-hide pr-5"
            style={{
              maskImage: "linear-gradient(to right, #000 86%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, #000 86%, transparent 100%)",
            }}
          >
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[10.5px] font-semibold tracking-tight text-[#020612]/85 hover:text-[#1D4ED8] bg-[#EFF5FF] hover:bg-[#DBEAFE] px-2.5 py-1 rounded-full whitespace-nowrap transition-all shrink-0"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10.5px] font-semibold tracking-tight text-[#020612]/85 hover:text-[#1D4ED8] bg-[#EFF5FF] hover:bg-[#DBEAFE] px-2.5 py-1 rounded-full whitespace-nowrap transition-all shrink-0"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </SoapBubbleSurface>

        {/* Desktop Floating Bubble Pill Island */}
        <SoapBubbleSurface
          as="div"
          surface="liquid-glass"
          interactive={0.25}
          radius={9999}
          className="hidden sm:flex saim-bubble-nav px-4 py-1.5 items-center justify-center gap-1 border border-[#020612]/10 bg-white/92 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,6,18,0.14)]"
        >
          <div className="flex items-center gap-1.5 mr-2 pl-1.5">
            <span className="section-dot animate-pulse" />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#020612]/60">
              UK/EU
            </span>
          </div>
          {navItems.map((item, index) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
                className="text-xs lg:text-[13px] font-semibold tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer px-3 py-1.5 rounded-full hover:bg-[#EFF5FF]"
                style={{
                  color:
                    hoveredNav === index || activeHref === item.href
                      ? "#1D4ED8"
                      : "#020612",
                  background:
                    activeHref === item.href ? "rgba(47, 108, 225, 0.14)" : undefined,
                }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
                className="text-xs lg:text-[13px] font-semibold tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer px-3 py-1.5 rounded-full hover:bg-[#EFF5FF]"
                style={{
                  color:
                    hoveredNav === index || activeHref === item.href
                      ? "#1D4ED8"
                      : "#020612",
                  background:
                    activeHref === item.href ? "rgba(47, 108, 225, 0.14)" : undefined,
                }}
              >
                {item.label}
              </a>
            )
          )}
        </SoapBubbleSurface>
      </nav>

      <section className="min-h-[100dvh] flex w-full p-2 sm:p-4 md:p-6 bg-white relative box-border overflow-hidden">
        <div className="relative flex-1 flex flex-col justify-between w-full rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-white border border-[#020612]/10 shadow-[0_24px_70px_-30px_rgba(2,6,18,0.12)]">
          {/* Top border hairline highlight */}
          <div
            className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(47,108,225,0.45) 30%, rgba(2,6,18,0.10) 70%, transparent)",
            }}
          />

          {/* ==============================================
              HERO BODY — EXPANSIVE TYPOGRAPHY CENTERPIECE
          =============================================== */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-10 md:px-16 pt-24 sm:pt-28 lg:pt-28 pb-10 sm:pb-12">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-6 sm:gap-7 lg:gap-8">
              {/* Top Agency Status Pill */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-full"
              >
                <SoapBubbleSurface
                  as="div"
                  surface="liquid-glass"
                  interactive={0.22}
                  radius={9999}
                  className="saim-bubble-pill inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 max-w-full border border-[#2F6CE1]/20 bg-[#EFF5FF]"
                >
                  <span className="section-dot animate-pulse shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#020612] whitespace-normal sm:whitespace-nowrap leading-snug">
                    UK REGISTERED AGENCY • GLOBAL STUDIO
                  </span>
                </SoapBubbleSurface>
              </motion.div>

              {/* Monumental Geometric Wordmark (Outfit Black 900) */}
              <div className="w-full max-w-full">
                <div
                  className="saim-brand-display uppercase font-black text-[clamp(46px,8.2vw,118px)] leading-[0.92] tracking-[-0.045em] whitespace-nowrap select-none"
                  style={{ fontWeight: 900 }}
                >
                  <span className="text-[#020612]">SAIM </span>
                  <span className="text-[#2F6CE1]">DEV</span>
                </div>
              </div>

              <h1 className="font-heading text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px] font-extrabold tracking-[-0.03em] text-[#020612] leading-[1.15] max-w-[30ch] mx-auto">
                Custom Web Development Agency UK &amp; Digital Engineering Studio
              </h1>

              {/* Centered Interactive Typewriter Line */}
              <div className="w-full flex justify-center">
                <HeroTypewriter />
              </div>

              {/* Clean Sub-headline + USPs */}
              <motion.div
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-6 sm:gap-7 w-full"
              >
                <div className="space-y-2.5 max-w-2xl mx-auto">
                  <h2 className="font-heading text-[#020612] text-base sm:text-xl font-bold tracking-tight">
                    Bespoke Websites, E-Commerce{" "}
                    <span className="text-[#020612]/55 font-semibold">&amp; Custom Web Apps</span>
                  </h2>
                  <p className="text-[#020612]/60 text-xs sm:text-sm font-medium tracking-wide">
                    Fixed-price builds from £250 · 100% clean code ownership · Zero monthly retainers
                  </p>
                </div>

                {/* ReactDrops Liquid-Bubble Action Cluster */}
                <div
                  onPointerEnter={() => setBubbleCtaActive(true)}
                  onFocus={() => setBubbleCtaActive(true)}
                  className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
                >
                  <ReactDropButton
                    variant="primary"
                    href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20starting%20a%20website%20project"
                    className="h-[50px] min-w-[208px]"
                    innerClassName="px-7 text-xs sm:text-sm font-bold text-white gap-2"
                  >
                    <span>Start on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </ReactDropButton>

                  <ReactDropButton
                    variant="glass"
                    onClick={() => scrollToSection("estimator")}
                    className="h-[50px] px-6 !text-xs sm:!text-sm font-bold"
                  >
                    <Calculator className="w-4 h-4 text-[#2F6CE1]" />
                    <span>Estimate Project Cost</span>
                  </ReactDropButton>

                  <ReactDropButton
                    variant="dark"
                    onClick={() => scrollToSection("demos")}
                    className="h-[50px] px-6 !text-xs sm:!text-sm font-bold"
                  >
                    <span>Live Demos</span>
                  </ReactDropButton>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Architectural Bottom Studio Spec Bar */}
          <div className="relative z-10 w-full border-t border-[#020612]/8 bg-[#F8FAFC]/80 px-5 sm:px-10 md:px-14 py-5 sm:py-6">
            <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-left">
              {[
                { label: "Engineering Stack", value: "Next.js 15 · React 19" },
                { label: "Fixed Investment", value: "Starting from £250" },
                { label: "Delivery Promise", value: "100% Code Ownership" },
                { label: "Studio Reach", value: "UK, EU & Global" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#020612]/45 font-medium">
                    {item.label}
                  </div>
                  <div className="font-heading text-xs sm:text-sm font-bold text-[#020612] tracking-tight">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom border hairline highlight */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(2,6,18,0.08) 50%, transparent)",
            }}
          />
        </div>
      </section>
    </SoapBubbleMaterial>
  );
};
