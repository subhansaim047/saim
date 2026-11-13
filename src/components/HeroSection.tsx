"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import { ViewportMount } from "./reactdrops/ViewportMount";
import {
  SoapBubbleMaterial,
  SoapBubbleSurface,
  SoapBubbleButton,
} from "./reactdrops/soap-bubble";

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
    <div className="saim-fluid-typing relative overflow-hidden rounded-2xl border border-black/[0.09] bg-[#FAFAFA] px-4 py-3.5 text-sm sm:text-base font-medium text-[#111115] shadow-[0_8px_24px_-12px_rgba(17,17,21,0.08)]">
      <span>Engineering </span>
      <span className="text-[#D9380E] font-semibold">{TYPING_PHRASES[phraseIndex].slice(0, charCount)}</span>
      <span aria-hidden="true" className="ml-0.5 inline-block h-[1em] w-[2px] align-[-0.12em] bg-[#FF4A1C] animate-pulse" />
    </div>
  );
}

const LazyRefractedText = dynamic(
  () => import("./reactdrops/refracted-text/refracted-text").then((m) => m.RefractedText),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="select-none uppercase whitespace-nowrap leading-[1.05] tracking-[-0.02em]"
        style={{
          color: "#111115",
          fontSize: "clamp(36px, 4.9vw, 72px)",
          fontFamily: "var(--font-inter-orig), Inter, system-ui, -apple-system, sans-serif",
          fontWeight: 900,
        }}
      >
        SAIM DEV
      </div>
    ),
  }
);

const LazyChromaticSurface = dynamic(
  () => import("./reactdrops/chromatic-button/chromatic-surface").then((m) => m.ChromaticSurface),
  { ssr: false }
);

const LazyFractalGlass = dynamic(
  () => import("./reactdrops/fractal-glass/fractal-glass").then((m) => m.FractalGlass),
  {
    ssr: false,
    loading: () => (
      <img
        src="/hero-shots/shot-3.webp"
        alt="GAZU High-Conversion Fashion E-Commerce"
        className="w-full h-full object-cover opacity-90"
        loading="eager"
        fetchPriority="high"
        width={1080}
        height={1350}
        decoding="async"
      />
    ),
  }
);

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
  const [ctaGlowActive, setCtaGlowActive] = useState(false);
  const [bubbleCtaActive, setBubbleCtaActive] = useState(false);
  const [glassCardActive, setGlassCardActive] = useState(false);

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
      surface={bubbleCtaActive ? "bubble-liquid" : "liquid-glass"}
      environment="studio"
      liquidLens={false}
      iridescence={1.25}
      clearCenter={0.78}
      filmScale={5.2}
      bevel={12}
      tint="rgba(255, 255, 255, 0.72)"
      soapColor="rgba(255, 74, 28, 0.08)"
      wobble={0.38}
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
          className="flex sm:hidden saim-bubble-nav items-center justify-start gap-1 p-1.5 max-w-[94vw] overflow-hidden border border-black/[0.09] bg-white/88 backdrop-blur-md shadow-[0_8px_24px_-10px_rgba(17,17,21,0.12)]"
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
                  className="text-[10.5px] font-medium tracking-tight text-[#111115]/85 hover:text-[#111115] bg-black/[0.04] hover:bg-black/[0.09] px-2.5 py-1 rounded-full whitespace-nowrap transition-all shrink-0"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10.5px] font-medium tracking-tight text-[#111115]/85 hover:text-[#111115] bg-black/[0.04] hover:bg-black/[0.09] px-2.5 py-1 rounded-full whitespace-nowrap transition-all shrink-0"
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
          className="hidden sm:flex saim-bubble-nav px-4 py-1.5 items-center justify-center gap-1 border border-black/[0.10] bg-white/88 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(17,17,21,0.12)]"
        >
          <div className="flex items-center gap-1.5 mr-2 pl-1.5">
            <span className="section-dot animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/55">
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
                className="text-xs lg:text-[13px] font-medium tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer px-3 py-1.5 rounded-full hover:bg-black/[0.05]"
                style={{
                  color:
                    hoveredNav === index || activeHref === item.href
                      ? "#111115"
                      : "rgba(17, 17, 21, 0.72)",
                  background:
                    activeHref === item.href ? "rgba(255, 74, 28, 0.14)" : undefined,
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
                className="text-xs lg:text-[13px] font-medium tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer px-3 py-1.5 rounded-full hover:bg-black/[0.05]"
                style={{
                  color:
                    hoveredNav === index || activeHref === item.href
                      ? "#111115"
                      : "rgba(17, 17, 21, 0.72)",
                  background:
                    activeHref === item.href ? "rgba(255, 74, 28, 0.14)" : undefined,
                }}
              >
                {item.label}
              </a>
            )
          )}
        </SoapBubbleSurface>
      </nav>

      <section className="min-h-[100dvh] lg:min-h-[100dvh] w-full p-2 sm:p-4 md:p-6 bg-white relative box-border overflow-hidden">
        <div className="relative h-full w-full rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-white border border-black/[0.08] shadow-[0_24px_70px_-30px_rgba(17,17,21,0.12)]">
          {/* Top border hairline highlight */}
          <div
            className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,74,28,0.35) 30%, rgba(17,17,21,0.08) 70%, transparent)",
            }}
          />

          {/* ==============================================
              HERO BODY
          =============================================== */}
          <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-14 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 gap-6 lg:gap-10 pointer-events-none">
            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-center gap-3.5 sm:gap-4 w-full lg:w-[50%] xl:w-[49%] flex-shrink-0 pointer-events-auto">
              {/* Status Badge & Stack Strip */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2.5 self-start max-w-full"
              >
                <SoapBubbleSurface
                  as="div"
                  surface="liquid-glass"
                  interactive={0.22}
                  radius={9999}
                  className="saim-bubble-pill inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 max-w-full border border-black/[0.08] bg-[#FAFAFA]"
                >
                  <span className="section-dot animate-pulse shrink-0" />
                  <span className="text-[9.5px] sm:text-[11px] font-mono tracking-[0.12em] sm:tracking-[0.16em] uppercase text-[#111115] whitespace-normal sm:whitespace-nowrap leading-snug">
                    UK REGISTERED AGENCY • GLOBAL STUDIO
                  </span>
                </SoapBubbleSurface>

                <div className="flex items-center gap-0 pl-1 flex-wrap">
                  {[
                    "Next.js 15",
                    "React 19",
                    "TypeScript",
                    "Tailwind CSS",
                    "WebGL Shaders",
                    "Node.js",
                  ].map((tech, i, arr) => (
                    <span key={tech} className="flex items-center">
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-black/55">
                        {tech}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="text-black/25 mx-2 text-[8px]">&#x2022;</span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Optical Refracted Glass Wordmark */}
              <div className="w-full max-w-full overflow-hidden min-h-[44px] sm:min-h-[60px] lg:min-h-[78px]">
                <span className="sr-only">Saim Dev</span>
                <ViewportMount eager unmountWhenFar rootMargin="400px 0px" className="w-full max-w-full">
                  <LazyRefractedText
                    text="SAIM DEV"
                    theme="light"
                    topColor="#111115"
                    bottomColor="#3f3f46"
                    beamColor="#FF4A1C"
                    spectrumWarmColor="#FF4A1C"
                    spectrumMiddleColor="#27272a"
                    spectrumCoolColor="#64748b"
                    intensity={1.08}
                    dispersion={0.75}
                    colorIntensity={0.8}
                    reveal={true}
                    stagger={0.055}
                    liftDuration={0.48}
                    cursorMovesBeam={true}
                    fontSize="clamp(36px, 4.9vw, 72px)"
                    extraBold={1.8}
                    cornerRounding={0}
                    className="saim-refracted-hero select-none"
                  />
                </ViewportMount>
              </div>

              <h1 className="text-[24px] sm:text-2xl md:text-3xl font-bold tracking-tight text-[#111115] leading-[1.2]">
                Custom Web Development Agency UK &amp; Digital Engineering Studio
              </h1>

              {/* Interactive Liquid Typing Showcase Bar */}
              <div className="w-full max-w-xl">
                <HeroTypewriter />
              </div>

              {/* Sub-headline + USPs + Chromatic / Bubble CTAs */}
              <motion.div
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3.5 pt-0.5"
              >
                <div className="border-l-2 border-[#FF4A1C] pl-4 sm:pl-5 py-1">
                  <h2 className="text-[#111115] text-base sm:text-lg md:text-xl font-medium tracking-tight">
                    Bespoke Websites, E-Commerce{" "}
                    <span className="text-black/55">&amp; Custom Web Apps</span>
                  </h2>
                  <p className="text-black/60 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-1">
                    SUB-SECOND SPEED • 100% CODE OWNERSHIP • ZERO MONTHLY RETAINERS
                  </p>
                </div>

                {/* Chromatic Primary CTA + Bubble Secondary CTAs */}
                <div
                  onPointerEnter={() => setBubbleCtaActive(true)}
                  onFocus={() => setBubbleCtaActive(true)}
                  className="flex flex-wrap items-center gap-3 pt-1 [&_.saim-bubble-btn]:border [&_.saim-bubble-btn]:border-black/[0.12] [&_.saim-bubble-btn]:bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(255,74,28,0.08)_50%,rgba(17,17,21,0.04)_100%)] [&_.saim-bubble-btn]:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_22px_-8px_rgba(17,17,21,0.14)] [&_.saim-bubble-btn]:text-[#111115]"
                >
                  <a
                    href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20starting%20a%20website%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    onPointerEnter={() => setCtaGlowActive(true)}
                    onFocus={() => setCtaGlowActive(true)}
                    className="chromatic-button saim-hero-chromatic rounded-full bg-[radial-gradient(125%_160%_at_18%_20%,#ff8a5b_0%,#FF4A1C_48%,#e0360a_100%)] shadow-[0_12px_36px_rgba(255,74,28,0.28)]"
                  >
                    {ctaGlowActive && (
                      <div className="absolute inset-0 pointer-events-none">
                        <LazyChromaticSurface
                          color="#FF4A1C"
                          color2="#ff8a5b"
                          color3="#e0360a"
                          colorMode="gradient-3"
                          hoverEffect="spotlight"
                          borderRadius={50}
                          speed={0.85}
                          feather={18}
                          intensity={1.5}
                          grain={0.055}
                        />
                      </div>
                    )}
                    <span className="chromatic-button-content text-xs sm:text-sm font-semibold text-white">
                      <span>Start on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>

                  <SoapBubbleButton
                    type="button"
                    onClick={() => scrollToSection("estimator")}
                    iridescence={1.85}
                    wobble={0.55}
                    className="saim-bubble-btn !text-xs sm:!text-sm"
                  >
                    <Calculator className="w-3.5 h-3.5 text-[#FF4A1C]" />
                    <span>Estimate Project Cost</span>
                  </SoapBubbleButton>

                  <SoapBubbleButton
                    type="button"
                    onClick={() => scrollToSection("demos")}
                    iridescence={1.6}
                    wobble={0.48}
                    className="saim-bubble-btn !text-xs sm:!text-sm hidden sm:inline-flex"
                  >
                    <span>Live Demos</span>
                  </SoapBubbleButton>
                </div>
              </motion.div>
            </div>

            {/* Mobile Showcase Strip (< lg): Compact Horizontal Infinite Scroll */}
            <div className="lg:hidden w-full overflow-hidden relative mt-2 -mx-2 px-2 pointer-events-auto">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 24, ease: "linear", repeat: Infinity }}
                className="flex gap-3 w-max"
              >
                {[...Array(2)].map((_, loopIdx) => (
                  <div key={loopIdx} className="flex gap-3">
                    {[
                      {
                        src: "/hero-shots/shot-4.webp",
                        alt: "Saim Dev - Custom Web Development & Next.js Websites for UK Small Businesses",
                      },
                      {
                        src: "/hero-shots/shot-1.webp",
                        alt: "Fresh and Reddy Dark Web Architecture",
                      },
                      {
                        src: "/hero-shots/shot-2.webp",
                        alt: "Evora Luxury Real Estate Web Platform",
                      },
                      {
                        src: "/hero-shots/shot-3.webp",
                        alt: "GAZU High-Conversion Fashion E-Commerce",
                      },
                    ].map((shot) => (
                      <a
                        key={shot.src}
                        href="#demos"
                        className="relative w-36 sm:w-44 aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4F4F6] border border-black/[0.08] shadow-[0_12px_28px_-14px_rgba(17,17,21,0.18)] shrink-0 block"
                      >
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          className="w-full h-full object-cover"
                          loading={loopIdx === 0 && shot.src.includes("shot-4") ? "eager" : "lazy"}
                          fetchPriority={
                            loopIdx === 0 && shot.src.includes("shot-4") ? "high" : "low"
                          }
                          width={360}
                          height={450}
                          decoding="async"
                        />
                      </a>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Animated Marquee Grid with Interactive Fractal Glass Card — Desktop */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex w-full lg:w-[49%] xl:w-[50%] h-[580px] xl:h-[75vh] relative overflow-hidden rounded-2xl flex-shrink-0 pointer-events-auto"
            >
              {/* Fade Masks */}
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

              <div className="flex gap-4 w-full h-full relative z-10 pt-6">
                {/* Column 1 - Scrolling UP (shot-4 kept pure eager for instant LCP) */}
                <div className="w-1/2 h-full flex flex-col relative">
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                    className="flex flex-col gap-4 w-full"
                  >
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="flex flex-col gap-4 w-full">
                        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#F4F4F6] border border-black/[0.08] shadow-[0_18px_40px_-20px_rgba(17,17,21,0.18)]">
                          <img
                            src="/hero-shots/shot-4.webp"
                            alt="Saim Dev - Custom Web Development & Next.js Websites for UK Small Businesses"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading={i === 0 ? "eager" : "lazy"}
                            fetchPriority={i === 0 ? "high" : "low"}
                            width={1080}
                            height={1350}
                            decoding="async"
                          />
                        </div>
                        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#F4F4F6] border border-black/[0.08] shadow-[0_18px_40px_-20px_rgba(17,17,21,0.18)]">
                          <img
                            src="/hero-shots/shot-2.webp"
                            alt="Evora Luxury Real Estate Web Platform"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            width={1080}
                            height={1350}
                            decoding="async"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Column 2 - Anchored Interactive Optical FractalGlass Stack */}
                <div className="w-1/2 h-full flex flex-col gap-4 relative pt-12">
                  <div
                    onPointerEnter={() => setGlassCardActive(true)}
                    onFocus={() => setGlassCardActive(true)}
                    className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#F4F4F6] border border-black/[0.08] shadow-[0_18px_40px_-20px_rgba(17,17,21,0.18)] shrink-0"
                  >
                    {glassCardActive ? (
                      <LazyFractalGlass
                        src="/hero-shots/shot-3.webp"
                        alt="GAZU High-Conversion Fashion E-Commerce"
                        animateEntrance={false}
                        hoverPreset="glass-on-hover"
                        stripes={26}
                        distortion={0.38}
                        dispersion={0.35}
                        caustics={0.22}
                        hoverRadius={0.44}
                        className="saim-fractal-card"
                      />
                    ) : (
                      <img
                        src="/hero-shots/shot-3.webp"
                        alt="GAZU High-Conversion Fashion E-Commerce"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                        width={1080}
                        height={1350}
                        decoding="async"
                      />
                    )}
                  </div>
                  <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#F4F4F6] border border-black/[0.08] shadow-[0_18px_40px_-20px_rgba(17,17,21,0.18)] shrink-0">
                    <img
                      src="/hero-shots/shot-1.webp"
                      alt="Fresh and Reddy Dark Web Architecture"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      width={1080}
                      height={1350}
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom border hairline highlight */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(17,17,21,0.08) 50%, transparent)",
            }}
          />
        </div>
      </section>
    </SoapBubbleMaterial>
  );
};
