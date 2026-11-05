"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import { WordsPullUp } from "./WordsPullUp";

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

  return (
    <section className="min-h-[100dvh] lg:h-[100dvh] w-full p-2 sm:p-4 md:p-6 bg-transparent relative box-border overflow-hidden">
      <div className="relative h-full w-full rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-black/10 border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.8)]">

        {/* Top border hairline glow */}
        <div
          className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,74,28,0.4) 30%, rgba(255,255,255,0.2) 70%, transparent)",
          }}
        />

        {/* ==============================================
            NAVBAR — Floating Glass Pill Island
        =============================================== */}
        <nav aria-label="Primary" className={`fixed top-0 left-0 right-0 z-[90] flex justify-center px-2 sm:px-6 transition-all duration-500 ease-spring-expo ${scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-5"}`}>
          {/* Mobile Floating Pill Bar */}
          <div className="flex sm:hidden pill-island items-center justify-start gap-1 p-1.5 max-w-[94vw] overflow-x-auto scrollbar-hide">
            <span className="section-dot ml-2 mr-1 animate-pulse shrink-0" />
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium tracking-tight text-white/80 hover:text-white bg-white/[0.06] hover:bg-white/15 px-3 py-1 rounded-full whitespace-nowrap transition-all"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium tracking-tight text-white/80 hover:text-white bg-white/[0.06] hover:bg-white/15 px-3 py-1 rounded-full whitespace-nowrap transition-all"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Desktop Floating Pill Island */}
          <div className="hidden sm:flex pill-island px-5 py-2 items-center justify-center gap-1.5">
            <div className="flex items-center gap-1.5 mr-2 pl-1">
              <span className="section-dot animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">UK/EU</span>
            </div>
            {navItems.map((item, index) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(index)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className="text-xs lg:text-[13px] font-medium tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer px-3 py-1.5 rounded-full hover:bg-white/10"
                  style={{ color: hoveredNav === index || activeHref === item.href ? "#ffffff" : "rgba(255, 255, 255, 0.72)", background: activeHref === item.href ? "rgba(255, 74, 28, 0.18)" : undefined }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(index)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className="text-xs lg:text-[13px] font-medium tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer px-3 py-1.5 rounded-full hover:bg-white/10"
                  style={{ color: hoveredNav === index || activeHref === item.href ? "#ffffff" : "rgba(255, 255, 255, 0.72)", background: activeHref === item.href ? "rgba(255, 74, 28, 0.18)" : undefined }}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </nav>

        {/* ==============================================
            HERO BODY
        =============================================== */}
        <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-14 pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-20 gap-6 lg:gap-10">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center gap-3.5 sm:gap-4.5 lg:gap-5 w-full lg:w-[50%] xl:w-[48%] flex-shrink-0">

            {/* Label group — Sybiosme Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2.5 sm:gap-3 self-start"
            >
              {/* STATUS PILL */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 shadow-md">
                <span className="section-dot animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/90">
                  FULL-STACK DIGITAL STUDIO
                </span>
              </div>

              {/* Tech chips */}
              <div className="flex items-center gap-0 pl-1 flex-wrap">
                {["Next.js 16", "React", "TypeScript", "Node.js", "Shopify", "WordPress"].map((tech, i, arr) => (
                  <span key={tech} className="flex items-center">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50">
                      {tech}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-white/25 mx-2 text-[8px]">&#x2022;</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Tagline */}
              <div className="pl-1 mt-1.5 sm:mt-2">
                <span className="text-xs sm:text-sm font-normal text-white/75 tracking-tight leading-relaxed">
                  High-converting websites &amp; software for{" "}
                  <span className="text-white font-medium underline decoration-[#FF4A1C] decoration-2 underline-offset-4">
                    ambitious businesses
                  </span>
                  .
                </span>
              </div>
            </motion.div>

            {/* Giant Name */}
            <WordsPullUp
              as="div"
              text="Saim Dev"
              className="text-[16vw] sm:text-[13vw] md:text-[11vw] lg:text-[8.5vw] xl:text-[8vw] font-bold leading-[0.85] tracking-[-0.07em] drop-shadow-2xl"
              style={{ color: "#ffffff", fontFamily: "var(--font-fraunces), 'Fraunces', Georgia, serif", fontWeight: 900 }}
            />

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight text-white leading-tight mt-1 mb-2">
              Custom Web Development &amp; Digital Engineering Studio
            </h1>

            {/* Sub-headline + description + CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3.5 sm:gap-4.5 pt-0.5"
            >
              {/* Highlighted sub-headline */}
              <div className="border-l-2 border-[#FF4A1C] pl-4 sm:pl-5 py-1">
                <h2 className="text-white text-base sm:text-lg md:text-xl font-medium tracking-tight">
                  Bespoke Websites, E-Commerce{" "}
                  <span className="text-white/50">
                    &amp; Custom Web Apps
                  </span>
                </h2>
                <p className="text-white/50 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-1.5">
                  SUB-SECOND SPEED • 100% CODE OWNERSHIP • ZERO MONTHLY RETAINERS
                </p>
              </div>

              {/* Dual CTAs — Sybiosme Nested Island Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <motion.a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20starting%20a%20website%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white hover:bg-neutral-100 text-black font-semibold rounded-full pl-5 pr-2 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 flex items-center gap-3 transition-all duration-300 group cursor-pointer self-start shadow-[0_4px_24px_rgba(255,255,255,0.15)] active:scale-[0.98]"
                >
                  <span className="text-black font-semibold text-xs sm:text-sm tracking-tight">Start on WhatsApp</span>
                  <div className="bg-black rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </motion.a>

                <a
                  data-magnetic
                  href="#estimator"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-medium tracking-tight transition-all duration-200"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#FF4A1C]" />
                  <span>Estimate Project Cost</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* MOBILE & TABLET PREVIEW STRIP (<1024px) */}
          <div className="flex lg:hidden w-full overflow-hidden relative rounded-2xl pt-2">
            <div className="absolute top-0 left-0 bottom-0 w-10 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, ease: "linear", repeat: Infinity }}
              className="flex gap-3 w-max"
            >
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex gap-3">
                  {[
                    { src: "/hero-shots/shot-4.webp", alt: "Saim Dev - Custom Web Development & Next.js Websites for UK Small Businesses" },
                    { src: "/hero-shots/shot-1.webp", alt: "Fresh and Reddy Dark Web Architecture" },
                    { src: "/hero-shots/shot-2.webp", alt: "Evora Luxury Real Estate Web Platform" },
                    { src: "/hero-shots/shot-3.webp", alt: "GAZU High-Conversion Fashion E-Commerce" },
                  ].map((shot) => (
                    <a
                      key={shot.src}
                      href="#demos"
                      className="relative w-36 sm:w-44 aspect-[4/5] rounded-2xl overflow-hidden bg-[#111111] border border-white/10 shadow-xl shrink-0 block"
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="w-full h-full object-cover opacity-90"
                        loading="eager"
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

          {/* RIGHT COLUMN: Animated Marquee Grid — Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex w-full lg:w-[50%] xl:w-[52%] h-[600px] xl:h-[75vh] relative overflow-hidden rounded-2xl flex-shrink-0"
          >
            {/* Fade Masks */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

            <div className="flex gap-4 w-full h-full relative z-10 pt-8">
              {/* Column 1 - Scrolling UP */}
              <div className="w-1/2 h-full flex flex-col relative">
                <motion.div 
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                  className="flex flex-col gap-4 w-full"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-4 w-full">
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/5 shadow-2xl">
                        <img src="/hero-shots/shot-4.webp" alt="Saim Dev - Custom Web Development & Next.js Websites for UK Small Businesses" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="eager" fetchPriority="high" width={1080} height={1350} decoding="async" />
                      </div>
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/5 shadow-2xl">
                        <img src="/hero-shots/shot-2.webp" alt="Evora Luxury Real Estate Web Platform" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="eager" fetchPriority="high" width={1080} height={1350} decoding="async" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Column 2 - Scrolling DOWN */}
              <div className="w-1/2 h-full flex flex-col relative pt-16">
                <motion.div 
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                  className="flex flex-col gap-4 w-full"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-4 w-full">
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/5 shadow-2xl">
                        <img src="/hero-shots/shot-3.webp" alt="GAZU High-Conversion Fashion E-Commerce" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="eager" fetchPriority="high" width={1080} height={1350} decoding="async" />
                      </div>
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/5 shadow-2xl">
                        <img src="/hero-shots/shot-1.webp" alt="Fresh and Reddy Dark Web Architecture" className="absolute inset-0 w-full h-full object-cover opacity-90" loading="eager" fetchPriority="high" width={1080} height={1350} decoding="async" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom border hairline glow */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
          style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 50%, transparent)" }}
        />
      </div>
    </section>
  );
};
