"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

/* ============================================================================
   Types
   ============================================================================ */

export interface StripProofItem {
  label: string;
  tag: string;
  tagValue: string;
  summary: string;
  href: string;
}

export interface RhHeroPinnedProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  breadcrumb?: { label: string; href?: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  videoType?: "cube" | "mobile";
  stripLabel?: string;
  stripItems?: StripProofItem[];
}

export interface BottleneckCard {
  source: string;
  time: string;
  title: string;
  detail: string;
  severity?: "critical" | "warning";
}

export interface RetentionBar {
  value: string;
  label: string;
  heightPx: number;
  isHighlight?: boolean;
}

export interface RhProblemSolutionProps {
  overline?: string;
  titleBefore: string;
  titleStrike: string;
  titleOwned: string;
  subtitle: string;
  cards?: BottleneckCard[];
  solutionTag?: string;
  solutionTitle: string;
  solutionDesc: string;
  solutionMetrics?: { value: string; label: string }[];
  chartTitle?: string;
  chartBadge?: string;
  chartYAxis?: string;
  chartXAxis?: string;
  chartCaption?: string;
  bars?: RetentionBar[];
}

export interface SystemRowItem {
  num: string;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
}

export interface RhSystemRowsProps {
  overline?: string;
  title: string;
  titleMuted: string;
  subtitle?: string;
  rows: SystemRowItem[];
}

export interface ProcessStageCard {
  stage: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface RhProcessCarouselProps {
  overline?: string;
  title: string;
  titleMuted: string;
  stagesSummaryCount?: string;
  stagesSummaryTitle?: string;
  stagesSummaryText?: string;
  stages: ProcessStageCard[];
  quote?: string;
  author?: string;
  role?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BentoWorkItem {
  id: string;
  title: string;
  category: string;
  metric?: string;
  description: string;
  href: string;
  external?: boolean;
  previewImage?: string;
  previewAlt?: string;
  previewWidth?: number;
  previewHeight?: number;
  tags: string[];
}

export interface ProofQuoteItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface RhBentoWorkGridProps {
  overline?: string;
  title: string;
  titleMuted: string;
  proofStat?: string;
  proofLabel?: string;
  quotes?: ProofQuoteItem[];
  highlightMetric?: string;
  highlightTitle?: string;
  highlightHref?: string;
  cursorLabel?: string;
  items: BentoWorkItem[];
}

/* ============================================================================
   Default Saim Dev Strip Proof Pool (cycles with rh.design lswap animation)
   ============================================================================ */

export const DEFAULT_SAIM_STRIP_ITEMS: StripProofItem[] = [
  {
    label: "Next.js 16 SSR",
    tag: "Target Score",
    tagValue: "95+ CWV",
    summary: "Sub-second edge-rendered React & Next.js builds with zero plugin bloat.",
    href: "/case-studies",
  },
  {
    label: "Clean Architecture",
    tag: "Stack",
    tagValue: "TypeScript",
    summary: "Strictly typed App Router components built without bloated page-builder themes.",
    href: "/technologies",
  },
  {
    label: "Interactive Demos",
    tag: "Preview",
    tagValue: "Free Concept",
    summary: "Explore live interactive demo builds before committing to a milestone scope.",
    href: "/demos",
  },
  {
    label: "Direct Booking UX",
    tag: "Integration",
    tagValue: "WhatsApp + Cal",
    summary: "Mobile-first enquiry flows routed straight to your calendar or WhatsApp inbox.",
    href: "/contact",
  },
  {
    label: "0% Commission",
    tag: "Direct Orders",
    tagValue: "£250 Fixed",
    summary: "Commission-free takeaway & restaurant menus with allergen filter patterns.",
    href: "/services/takeaway-web-design",
  },
  {
    label: "50/50 Milestones",
    tag: "Billing",
    tagValue: "Fixed Quote",
    summary: "Written scope agreed upfront: 50% deposit to start, 50% only on staging approval.",
    href: "/pricing",
  },
  {
    label: "100% IP Owned",
    tag: "Retainers",
    tagValue: "£0 / month",
    summary: "Full GitHub repository handover on completion with zero agency lock-in.",
    href: "/pricing",
  },
  {
    label: "Technical SEO",
    tag: "Schema",
    tagValue: "JSON-LD",
    summary: "Semantic HTML5 landmarks, clean metadata, and structured data from day one.",
    href: "/services/seo-services",
  },
];

/* ============================================================================
   1. RhHeroPinned — Hero with Curtain Parallax, 3D Video & Laser-Draw Strip
   ============================================================================ */

export function RhHeroPinned({
  badge,
  title,
  subtitle,
  breadcrumb,
  primaryCta,
  secondaryCta,
  videoType = "cube",
  stripLabel = "Engineered for speed & ownership",
  stripItems = DEFAULT_SAIM_STRIP_ITEMS,
}: RhHeroPinnedProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const pool = stripItems.length >= 5 ? stripItems : DEFAULT_SAIM_STRIP_ITEMS;

  // 5 visible cells + smooth vertical blur-swap cycle every 2600ms (matching rh.design)
  const [cellIndices, setCellIndices] = useState<number[]>([0, 1, 2, 3, 4]);
  const [swappingCell, setSwappingCell] = useState<number | null>(null);
  const [swapPhase, setSwapPhase] = useState<"idle" | "out" | "in">("idle");
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  // Hero curtain parallax (matches rh.design's translate3d(0, y * 0.92px, 0) behavior)
  useEffect(() => {
    const inner = innerRef.current;
    const pin = pinRef.current;
    if (!inner || !pin) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        if (!inner || !pin) return;
        if (window.innerWidth < 992) {
          inner.style.transform = "translate3d(0px, 0px, 0px)";
          return;
        }
        const rect = pin.getBoundingClientRect();
        const scrolledPastTop = Math.max(0, -rect.top);
        const maxShift = Math.min(scrolledPastTop * 0.42, pin.offsetHeight * 0.55);
        inner.style.transform = `translate3d(0px, ${maxShift.toFixed(1)}px, 0px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Periodic cell swap every 2600ms unless user is inspecting a cell
  useEffect(() => {
    if (pool.length <= 5) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let slotCursor = 0;
    let nextPoolCursor = 5;
    let outTimer: number | undefined;
    let inTimer: number | undefined;

    const interval = window.setInterval(() => {
      if (hoveredCell !== null) return;
      const targetSlot = slotCursor % 5;
      slotCursor += 1;

      setSwappingCell(targetSlot);
      setSwapPhase("out");

      outTimer = window.setTimeout(() => {
        setCellIndices((prev) => {
          const next = [...prev];
          // Pick an item from pool not currently displayed
          let candidate = nextPoolCursor % pool.length;
          let guard = 0;
          while (next.includes(candidate) && guard < pool.length) {
            nextPoolCursor += 1;
            candidate = nextPoolCursor % pool.length;
            guard += 1;
          }
          nextPoolCursor += 1;
          next[targetSlot] = candidate;
          return next;
        });
        setSwapPhase("in");

        inTimer = window.setTimeout(() => {
          setSwappingCell(null);
          setSwapPhase("idle");
        }, 550);
      }, 360);
    }, 2600);

    return () => {
      window.clearInterval(interval);
      if (outTimer) window.clearTimeout(outTimer);
      if (inTimer) window.clearTimeout(inTimer);
    };
  }, [pool.length, hoveredCell]);

  const videoSrc =
    videoType === "mobile"
      ? "/rh-exact/pd/hero-mobile-apps.webm"
      : "/rh-exact/pd/hero-cube.mp4";
  const videoPoster =
    videoType === "mobile"
      ? "/rh-exact/pd/hero-mobile-apps-poster.webp"
      : "/rh-exact/pd/hero-cube-poster.webp";
  const isMobileVideo = videoType === "mobile";
  const heroBg = isMobileVideo ? "#0D0D0D" : "#000000";
  const heroBgClass = isMobileVideo ? "bg-[#0D0D0D]" : "bg-black";

  const handleHeroPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      ref={pinRef}
      data-nav="dark"
      className={`hero-pin-pd ${heroBgClass} text-white`}
      style={{ backgroundColor: heroBg }}
    >
      <div
        ref={innerRef}
        className={`hero-pin-inner-pd ${heroBgClass}`}
        style={{ backgroundColor: heroBg }}
      >
        <section
          onPointerMove={handleHeroPointerMove}
          className="relative pt-[132px] md:pt-[156px] pb-12 md:pb-16 overflow-hidden"
        >
          {/* Architectural grid & spotlight confined behind left copy column so 3D video blend stays pure */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute inset-y-0 left-0 w-[60%] rh-blueprint-grid opacity-70"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 70% at 32% 48%, #000 18%, transparent 74%)",
              maskImage:
                "radial-gradient(ellipse 75% 70% at 32% 48%, #000 18%, transparent 74%)",
            }}
          />
          <div
            ref={spotlightRef}
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute inset-y-0 left-0 w-[62%] rh-spotlight-hero opacity-85 transition-opacity duration-500"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 75% at 30% 45%, #000 10%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 80% 75% at 30% 45%, #000 10%, transparent 75%)",
            }}
          />
          {isMobileVideo && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full opacity-20 blur-[120px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(186,255,0,0.22) 0%, rgba(13,13,13,0) 70%)",
              }}
            />
          )}

          <div className="max-w-[1168px] mx-auto px-5 relative z-10">
            <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-16 items-center">
              {/* Left Copy Column */}
              <div className="flex flex-col gap-7">
                {breadcrumb && breadcrumb.length > 0 && (
                  <nav aria-label="Breadcrumb">
                    <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-[#939393]">
                      {breadcrumb.map((item, idx) => (
                        <React.Fragment key={`${item.label}-${idx}`}>
                          {idx > 0 && <li aria-hidden="true">/</li>}
                          <li>
                            {item.href ? (
                              <Link href={item.href} prefetch={false} className="hover:text-white transition-colors">
                                {item.label}
                              </Link>
                            ) : (
                              <span className="text-white font-medium" aria-current="page">
                                {item.label}
                              </span>
                            )}
                          </li>
                        </React.Fragment>
                      ))}
                    </ol>
                  </nav>
                )}
                <div className="rh-hero-enter-badge inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <span className="w-2 h-2 rounded-full bg-[#BAFF00] animate-pulse" />
                  <span className="text-[11px] font-mono-tech tracking-[0.2em] uppercase text-[#BAFF00]">
                    {badge}
                  </span>
                </div>

                <h1 className="rh-hero-enter-title text-[38px] sm:text-[50px] lg:text-[62px] font-medium tracking-[-0.04em] leading-[1.04] text-white">
                  {title}
                </h1>

                <p className="rh-hero-enter-sub text-[17px] md:text-[18px] leading-[1.6] text-[#939393] max-w-[560px]">
                  {subtitle}
                </p>

                <div className="rh-hero-enter-cta flex flex-wrap items-center gap-3.5 pt-1">
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex items-center gap-3.5 rounded-full bg-white text-[#0D0D0D] pl-6 pr-2 py-2 text-[15px] font-medium tracking-[-0.02em] shadow-[0_14px_34px_-12px_rgba(255,255,255,0.28)] hover:bg-[#BAFF00] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]"
                  >
                    <span>{primaryCta.label}</span>
                    <span className="w-9 h-9 rounded-full bg-[#0D0D0D] text-[#BAFF00] flex items-center justify-center relative overflow-hidden isolate transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-7 group-hover:-translate-y-7" />
                      <ArrowUpRight className="w-4 h-4 absolute -translate-x-7 translate-y-7 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
                    </span>
                  </Link>
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.03] border border-white/15 text-white hover:border-[#BAFF00] hover:text-[#BAFF00] text-[15px] font-medium tracking-[-0.02em] transition-colors duration-250 active:scale-[0.98]"
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              </div>

              {/* Right 3D Wireframe Video Column */}
              <div
                className={`rh-hero-enter-video relative flex items-center justify-center ${heroBgClass}`}
                style={{
                  backgroundColor: heroBg,
                  mixBlendMode: isMobileVideo ? "lighten" : "screen",
                }}
              >
                <div className="w-full max-w-[490px] aspect-square relative flex items-center justify-center">
                  <video
                    key={videoSrc}
                    className={`hero-cube-video w-full h-auto block select-none pointer-events-none ${
                      isMobileVideo ? "" : "contrast-110"
                    }`}
                    style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={videoPoster}
                    aria-label="Animated 3D Next.js web engineering wireframe architecture"
                  >
                    <source
                      src={videoSrc}
                      type={isMobileVideo ? "video/webm" : "video/mp4"}
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom 5-Cell Laser-Draw Strip (.strip-logos-pd) */}
        <div className="strip-logos-pd" style={{ backgroundColor: heroBg }}>
          <div className="strip-label-pd">{stripLabel}</div>
          <div className="strip-grid-pd">
            {cellIndices.map((poolIdx, slotIdx) => {
              const item = pool[poolIdx % pool.length];
              const isOpen = hoveredCell === slotIdx;
              const swapClass =
                swappingCell === slotIdx
                  ? swapPhase === "out"
                    ? "lswap-out"
                    : swapPhase === "in"
                      ? "lswap-in"
                      : ""
                  : "";

              return (
                <Link
                  key={`strip-slot-${slotIdx}`}
                  href={item.href}
                  style={{ "--slot": slotIdx } as React.CSSProperties}
                  onMouseEnter={() => setHoveredCell(slotIdx)}
                  onMouseLeave={() => setHoveredCell((cur) => (cur === slotIdx ? null : cur))}
                  className={`strip-cell-pd has-info-pd ${isOpen ? "is-open-pd" : ""}`}
                >
                  <div className={`logo-strip-pd flex flex-col items-center text-center ${swapClass}`}>
                    <span className="text-[15px] md:text-[16px] font-medium tracking-[-0.02em] text-white/90">
                      {item.label}
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#BAFF00] mt-0.5">
                      {item.tagValue}
                    </span>
                  </div>

                  {/* Hover inline action reveal */}
                  <div className="strip-cta-pd" aria-hidden="true">
                    <span>Explore Proof</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#BAFF00]" />
                  </div>

                  {/* Pop-up white case-study hover card (.strip-card-pd) */}
                  <div className="strip-card-pd" aria-hidden={!isOpen}>
                    <div className="text-[18px] font-medium tracking-[-0.03em] text-[#0D0D0D]">
                      {item.label}
                    </div>
                    <div className="strip-card-body-pd">
                      <p className="text-[14px] leading-[1.45] text-[#595959] m-0">
                        {item.summary}
                      </p>
                      <div className="px-2.5 py-1 rounded-md bg-[#F2F2F2] text-[12px] font-mono-tech text-[#595959]">
                        <span className="text-[#0D0D0D] font-medium mr-1.5">{item.tag}</span>
                        {item.tagValue}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   2. RhProblemSolutionDeck — Bottleneck Cards + Growing Benchmark Bar Chart
   ============================================================================ */

export function RhProblemSolutionDeck({
  overline = "THE BOTTLENECK",
  titleBefore,
  titleStrike,
  titleOwned,
  subtitle,
  cards = [
    {
      source: "Core Web Vitals Alert",
      time: "2m ago",
      title: "Mobile LCP at 4.8s failing Google rankings",
      detail: "Heavy WordPress builders and render-blocking scripts push high-intent buyers to competitors.",
      severity: "critical",
    },
    {
      source: "Agency Retainer Invoice",
      time: "Monthly",
      title: "£1,200/mo billed for routine template tweaks",
      detail: "Locked into closed CMS themes with zero source-code ownership and slow turnaround.",
      severity: "warning",
    },
    {
      source: "Third-Party Marketplace",
      time: "Per Order",
      title: "30% commission deducted on every customer checkout",
      detail: "Your brand acquires the customer while third-party aggregators keep the margin and data.",
      severity: "critical",
    },
  ],
  solutionTag = "THE SAIM DEV STANDARD",
  solutionTitle,
  solutionDesc,
  solutionMetrics = [
    { value: "95+", label: "Target CWV" },
    { value: "<1s", label: "Target LCP" },
    { value: "£0", label: "Monthly Retainer" },
  ],
  chartTitle = "Architecture Speed & Retention Benchmark",
  chartBadge = "Architecture Model",
  chartYAxis = "Lighthouse Score",
  chartXAxis = "Architecture Tier",
  chartCaption = "Custom Next.js 16 edge engineering eliminates bloat and keeps mobile journeys fast from first tap.",
  bars = [
    { value: "38", label: "Legacy Theme", heightPx: 140 },
    { value: "61", label: "No-Code Builder", heightPx: 220 },
    { value: "99", label: "Saim Dev Next.js", heightPx: 340, isHighlight: true },
  ],
}: RhProblemSolutionProps) {
  const [activeCard, setActiveCard] = useState(0);
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartInView, setChartInView] = useState(false);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setChartInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const maxBarHeightPx = Math.max(...bars.map((b) => b.heightPx), 1);
  const colCount = Math.max(bars.length, 1);

  return (
    <section className="relative z-10 bg-white text-[#0D0D0D] py-20 md:py-28 border-b border-[#E6E6E6]">
      <div className="max-w-[1168px] mx-auto px-5">
        {/* Top split heading with struck-through problem & lime-backed solution */}
        <div data-gsap-reveal="" className="max-w-[820px] mb-14 md:mb-20">
          <div className="text-[11px] font-mono-tech tracking-[0.35em] uppercase text-[#595959] mb-5">
            {overline}
          </div>
          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-medium tracking-[-0.04em] leading-[1.06] text-[#0D0D0D]">
            {titleBefore}{" "}
            <span className="relative inline-block text-[#939393] mx-1">
              <span>{titleStrike}</span>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-1/2 h-[3px] bg-[#0D0D0D] -rotate-2"
              />
            </span>{" "}
            <span className="inline-block bg-[#BAFF00] text-[#0D0D0D] px-3 py-0.5 rounded-sm">
              {titleOwned}
            </span>
          </h2>
          <p className="text-[17px] md:text-[19px] leading-[1.6] text-[#595959] mt-6 max-w-[660px]">
            {subtitle}
          </p>
        </div>

        {/* Two-column interactive deck + animated bar chart */}
        <div data-gsap-stagger="" className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Interactive Bottleneck Notification Stack + Dark Solution Card */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              {cards.map((card, i) => {
                const isSelected = activeCard === i;
                return (
                  <button
                    key={card.title}
                    type="button"
                    onClick={() => setActiveCard(i)}
                    onMouseEnter={() => setActiveCard(i)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-[#F5F5F7] border-[#0D0D0D] translate-x-1 shadow-[0_14px_32px_-12px_rgba(13,13,13,0.12)]"
                        : "bg-white border-[#E6E6E6] opacity-80 hover:opacity-100 hover:border-[#CBCBCB]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider text-[#595959]">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            card.severity === "warning" ? "bg-amber-500" : "bg-red-500"
                          }`}
                        />
                        {card.source}
                      </span>
                      <span className="text-[11px] font-mono-tech text-[#939393]">{card.time}</span>
                    </div>
                    <div className="text-[17px] font-medium tracking-[-0.02em] text-[#0D0D0D]">
                      {card.title}
                    </div>
                    <p
                      className={`text-[14px] text-[#595959] leading-[1.5] overflow-hidden transition-all duration-300 ${
                        isSelected ? "max-h-24 mt-2 opacity-100" : "max-h-0 mt-0 opacity-0"
                      }`}
                    >
                      {card.detail}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Dark Resolution Card with rh.design pd-case-glow.svg */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0D0D0D] text-white p-7 md:p-8 border border-[#222222] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
              <img
                src="/rh-exact/pd/pd-case-glow.svg"
                alt="Next.js 16 Core Web Vitals speed and performance architecture accent"
                aria-hidden="true"
                width={256}
                height={256}
                className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 opacity-70"
              />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  {solutionTag}
                </div>
                <h3 className="text-[22px] md:text-[26px] font-medium tracking-[-0.03em] leading-[1.2] mb-3">
                  {solutionTitle}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#939393] leading-[1.6] mb-6">
                  {solutionDesc}
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-5 border-t border-white/10">
                  {solutionMetrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-[19px] sm:text-[22px] md:text-[26px] font-medium tracking-[-0.03em] text-[#BAFF00] font-mono-tech">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[#939393] mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Animated Scroll-Triggered Benchmark Bar Chart (.chart-retention-mad) */}
          <div className="lg:col-span-6 rh-bezel-shell-light flex flex-col">
            <div className="rh-bezel-core-light p-4 sm:p-7 md:p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2">
                  <h3 className="text-[18px] sm:text-[20px] font-medium tracking-[-0.02em] text-[#0D0D0D]">
                    {chartTitle}
                  </h3>
                  <span className="shrink-0 whitespace-nowrap text-[11px] font-mono-tech uppercase tracking-wider px-2.5 py-1 bg-[#F5F5F7] border border-[#E6E6E6] text-[#0D0D0D] rounded-full">
                    {chartBadge}
                  </span>
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#595959] leading-[1.55] mb-6 sm:mb-8">
                  {chartCaption}
                </p>
              </div>

              <div
                ref={chartRef}
                className={`chart-retention-mad relative flex flex-col ${
                  chartInView ? "" : "is-pre-mad"
                }`}
              >
                <div className="flex items-stretch gap-2 sm:gap-3">
                  {/* Dedicated Y-axis strip so rotated label never collides with bar #1 or values */}
                  <div className="w-4 sm:w-5 shrink-0 flex items-center justify-center select-none">
                    <span
                      className="text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#737373] whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {chartYAxis}
                    </span>
                  </div>

                  {/* Bounded plot canvas scaling cleanly for 3, 4, or N bars without wrapping */}
                  <div className="flex-1 min-w-0 pt-6 sm:pt-8 pb-3 sm:pb-4 pl-2.5 sm:pl-4 pr-1 border-l border-b border-dashed border-[#CBCBCB]">
                    <div
                      className="grid gap-1.5 sm:gap-3 md:gap-4 items-end min-h-[268px] sm:min-h-[308px]"
                      style={{
                        gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
                      }}
                    >
                      {bars.map((bar, idx) => {
                        const normalizedHeight = Math.round(
                          Math.max(82, (bar.heightPx / maxBarHeightPx) * 244)
                        );
                        return (
                          <div
                            key={bar.label}
                            className="flex flex-col items-center justify-end min-w-0"
                          >
                            <div
                              className={`bar-num-mad font-medium tracking-[-0.03em] mb-2 sm:mb-3 font-mono-tech tabular-nums whitespace-nowrap ${
                                colCount >= 4
                                  ? "text-[16px] sm:text-[24px] md:text-[28px]"
                                  : "text-[22px] sm:text-[26px] md:text-[32px]"
                              } ${bar.isHighlight ? "text-[#0D0D0D]" : "text-[#737373]"}`}
                              style={{ transitionDelay: `${180 + idx * 90}ms` }}
                            >
                              {bar.value}
                            </div>
                            <div
                              className={`bar-mad w-full rounded-t-xl sm:rounded-t-2xl flex items-end justify-center pb-2.5 sm:pb-4 transition-all ${
                                bar.isHighlight
                                  ? "bg-[#0D0D0D] text-[#BAFF00] border border-[#0D0D0D] shadow-[0_-8px_30px_-8px_rgba(186,255,0,0.28)]"
                                  : "bg-[#E6E6E6] text-[#0D0D0D]"
                              }`}
                              style={{
                                height: `${normalizedHeight}px`,
                                transitionDelay: `${idx * 90}ms`,
                              }}
                            >
                              <span
                                className={`bar-label-mad font-medium text-center leading-[1.2] ${
                                  colCount >= 4
                                    ? "text-[9.5px] sm:text-[12px] md:text-[13px] px-1 sm:px-2"
                                    : "text-[11px] sm:text-[12px] md:text-[13px] px-1.5 sm:px-2"
                                } ${bar.isHighlight ? "text-[#BAFF00]" : "text-[#0D0D0D]"}`}
                                style={{ transitionDelay: `${180 + idx * 90}ms` }}
                              >
                                {bar.label}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pl-6 sm:pl-8 text-center text-[10px] sm:text-[11px] font-mono-tech uppercase tracking-[0.16em] text-[#737373]">
                  {chartXAxis}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   3. RhSystemRows — Interactive Architectural Rows with SVG Line-Draw on Hover
   ============================================================================ */

export function RhSystemRows({
  overline = "ARCHITECTURE & DELIVERABLES",
  title,
  titleMuted,
  subtitle,
  rows,
}: RhSystemRowsProps) {
  return (
    <section className="relative z-10 bg-white text-[#0D0D0D] py-20 md:py-28">
      <div className="max-w-[1168px] mx-auto px-5">
        <div data-gsap-reveal="" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-[700px]">
            <div className="text-[11px] font-mono-tech tracking-[0.35em] uppercase text-[#595959] mb-4">
              {overline}
            </div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[52px] font-medium tracking-[-0.04em] leading-[1.06] text-[#0D0D0D]">
              {title} <span className="text-[#939393] block sm:inline">{titleMuted}</span>
            </h2>
          </div>
          {subtitle && (
            <p className="text-[16px] text-[#595959] max-w-[380px] leading-[1.6]">{subtitle}</p>
          )}
        </div>

        <div data-gsap-stagger="" className="list-system-pd">
          {rows.map((row) => {
            const inner = (
              <div className="row-system-pd py-9 md:py-11 px-5 md:px-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
                {/* Exact rh.design geometric crosshair & triple-circle SVG that draws strokes on hover */}
                <svg
                  className="lines-system-pd hidden md:block"
                  viewBox="0 0 755 444"
                  fill="none"
                  aria-hidden="true"
                >
                  <g className="l">
                    <line x1="0" y1="222" x2="755" y2="222" style={{ "--i": 0 } as React.CSSProperties} />
                    <line x1="533" y1="0" x2="533" y2="444" style={{ "--i": 1 } as React.CSSProperties} />
                    <circle cx="533" cy="222" r="221.5" style={{ "--i": 2 } as React.CSSProperties} />
                    <circle cx="422" cy="222" r="110.5" style={{ "--i": 3 } as React.CSSProperties} />
                    <circle cx="644" cy="222" r="110.5" style={{ "--i": 4 } as React.CSSProperties} />
                  </g>
                </svg>

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 flex-1 min-w-0">
                  <span className="font-mono-tech text-[26px] md:text-[32px] font-light tracking-[-0.03em] text-[#939393] w-12 shrink-0">
                    {row.num}
                  </span>
                  <h3 className="text-[24px] md:text-[30px] font-medium tracking-[-0.03em] leading-[1.15] text-[#0D0D0D]">
                    {row.title}
                  </h3>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5 lg:w-[460px] shrink-0">
                  <div className="flex-1">
                    <p className="text-[15px] text-[#595959] leading-[1.6]">{row.description}</p>
                    {row.tags && row.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {row.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-[11px] font-mono-tech bg-white border border-[#E6E6E6] text-[#595959]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {row.href && (
                    <ArrowUpRight className="w-5 h-5 text-[#0D0D0D] shrink-0 hidden sm:block" />
                  )}
                </div>
              </div>
            );

            return row.href ? (
              <Link key={row.num + row.title} href={row.href} className="block">
                {inner}
              </Link>
            ) : (
              <div key={row.num + row.title}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   4. RhProcessCarousel — Dark Draggable Horizontal Carousel + Conic Circle Divider
   ============================================================================ */

export function RhProcessCarousel({
  overline = "PROCESS",
  title,
  titleMuted,
  stagesSummaryCount = "4",
  stagesSummaryTitle = "Stages",
  stagesSummaryText = "Fixed scope & milestones agreed before engineering starts.",
  stages,
  quote = "Every build is delivered to agreed scope with clean TypeScript source, mobile verification, and direct GitHub ownership — no recurring agency lock-in.",
  author = "Saim Dev Engineering Standard",
  role = "Direct-to-Founder Delivery Model",
  ctaLabel = "Start a Project",
  ctaHref = "/contact",
}: RhProcessCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorBubbleRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    momentumRaf: 0,
  });
  const [cursorState, setCursorState] = useState({ active: false, dragging: false });

  useEffect(() => {
    const state = draggingRef.current;
    return () => {
      if (state.momentumRaf) window.cancelAnimationFrame(state.momentumRaf);
    };
  }, []);

  const stopMomentum = () => {
    if (draggingRef.current.momentumRaf) {
      window.cancelAnimationFrame(draggingRef.current.momentumRaf);
      draggingRef.current.momentumRaf = 0;
    }
  };

  const startMomentum = () => {
    stopMomentum();
    const el = trackRef.current;
    if (!el) return;
    const step = () => {
      if (!trackRef.current) return;
      if (Math.abs(draggingRef.current.velocity) > 0.04) {
        trackRef.current.scrollLeft -= draggingRef.current.velocity * 16;
        draggingRef.current.velocity *= 0.93;
        draggingRef.current.momentumRaf = window.requestAnimationFrame(step);
      } else {
        draggingRef.current.velocity = 0;
        draggingRef.current.momentumRaf = 0;
      }
    };
    if (Math.abs(draggingRef.current.velocity) > 0.04) {
      draggingRef.current.momentumRaf = window.requestAnimationFrame(step);
    }
  };

  const updateCursorPosition = (x: number, y: number) => {
    const bubble = cursorBubbleRef.current;
    if (!bubble) return;
    bubble.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };

  const scrollByCard = (dir: -1 | 1) => {
    stopMomentum();
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section
      data-nav="dark"
      className="section-process-pd py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1168px] mx-auto px-5 relative z-10">
        {/* Header + Prev/Next Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="flex flex-col gap-6 max-w-[700px]">
            <div className="text-[11px] font-mono-tech tracking-[0.5em] uppercase text-[#BAFF00]">
              {overline}
            </div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[54px] font-medium tracking-[-0.04em] leading-[1.06] text-white">
              {title} <span className="text-[#939393] block">{titleMuted}</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous stage"
              className="w-14 h-14 rounded-full border border-[#414141] hover:border-[#BAFF00] hover:text-[#BAFF00] flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next stage"
              className="w-14 h-14 rounded-full border border-[#414141] hover:border-[#BAFF00] hover:text-[#BAFF00] flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Draggable Slider Track */}
      <div
        ref={trackRef}
        style={{ touchAction: "pan-y" }}
        onMouseEnter={(e) => {
          updateCursorPosition(e.clientX, e.clientY);
          setCursorState((p) => ({ ...p, active: true }));
        }}
        onMouseLeave={() => {
          if (draggingRef.current.active) {
            draggingRef.current.active = false;
            startMomentum();
          }
          setCursorState({ active: false, dragging: false });
        }}
        onMouseMove={(e) => {
          updateCursorPosition(e.clientX, e.clientY);
          if (!draggingRef.current.active || !trackRef.current) return;
          e.preventDefault();
          const now = performance.now();
          const dt = now - draggingRef.current.lastTime;
          if (dt > 1) {
            const instVel = (e.clientX - draggingRef.current.lastX) / dt;
            draggingRef.current.velocity = draggingRef.current.velocity * 0.35 + instVel * 0.65;
            draggingRef.current.lastX = e.clientX;
            draggingRef.current.lastTime = now;
          }
          const dx = e.clientX - draggingRef.current.startX;
          trackRef.current.scrollLeft = draggingRef.current.scrollLeft - dx;
        }}
        onMouseDown={(e) => {
          if (!trackRef.current || e.button !== 0) return;
          stopMomentum();
          draggingRef.current = {
            ...draggingRef.current,
            active: true,
            startX: e.clientX,
            scrollLeft: trackRef.current.scrollLeft,
            lastX: e.clientX,
            lastTime: performance.now(),
            velocity: 0,
          };
          setCursorState((p) => ({ ...p, dragging: true }));
        }}
        onMouseUp={() => {
          if (draggingRef.current.active) {
            draggingRef.current.active = false;
            if (performance.now() - draggingRef.current.lastTime > 90) {
              draggingRef.current.velocity = 0;
            }
            startMomentum();
          }
          setCursorState((p) => ({ ...p, dragging: false }));
        }}
        className="relative z-10 overflow-x-auto overflow-y-hidden no-scrollbar cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex gap-5 px-5 lg:pl-[max(20px,calc((100vw-1168px)/2+20px))] pr-10 min-w-max">
          {/* Lime Summary Card (matching .card-stages-pd on rh.design) */}
          <div className="w-[300px] sm:w-[340px] shrink-0 rounded-3xl bg-[#BAFF00] text-[#0D0D0D] p-8 md:p-10 flex flex-col justify-between min-h-[390px] shadow-[0_24px_60px_-20px_rgba(186,255,0,0.28)]">
            <div>
              <div className="text-[72px] font-medium tracking-[-0.05em] leading-none tabular-nums">
                {stagesSummaryCount}
              </div>
              <h3 className="text-[32px] font-medium tracking-[-0.03em] mt-2">
                {stagesSummaryTitle}
              </h3>
            </div>
            <p className="text-[16px] leading-[1.5] text-[#0D0D0D]/80 font-medium">
              {stagesSummaryText}
            </p>
          </div>

          {/* Individual Stage Cards */}
          {stages.map((s) => (
            <div
              key={s.stage + s.title}
              className="rh-edge-orbit-card w-[320px] sm:w-[380px] shrink-0 rounded-3xl bg-[#141414] border border-[#242424] p-8 flex flex-col justify-between min-h-[390px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00]">
                    {s.stage}
                  </span>
                  <span className="text-[12px] font-mono-tech text-[#939393] px-2.5 py-0.5 rounded-full border border-[#2B2B2B] tabular-nums">
                    {s.duration}
                  </span>
                </div>
                <h3 className="text-[26px] font-medium tracking-[-0.03em] text-white leading-[1.2] mb-4">
                  {s.title}
                </h3>
                <p className="text-[15px] text-[#939393] leading-[1.6]">{s.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="text-[11px] font-mono-tech uppercase tracking-widest text-[#939393] mb-3">
                  Deliverables
                </div>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-[14px] text-white/85">
                      <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Floating "Drag me" Cursor (desktop mouse only, ref-driven for zero React re-renders) */}
      <div
        ref={cursorBubbleRef}
        aria-hidden="true"
        className={`hidden lg:flex fixed top-0 left-0 z-40 pointer-events-none w-[96px] h-[96px] rounded-full bg-[#BAFF00] text-[#0D0D0D] items-center justify-center text-[13px] font-medium tracking-[-0.02em] transition-[opacity,scale] duration-150 ${
          cursorState.active ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } ${cursorState.dragging ? "scale-90" : ""}`}
        style={{
          transform: "translate3d(-200px, -200px, 0) translate(-50%, -50%)",
          willChange: "transform",
        }}
      >
        Drag me
      </div>

      {/* Pulsing Laser Line & Rotating Conic Circle Divider */}
      <div className="max-w-[1168px] mx-auto px-5 relative z-10">
        <div className="divider-process-pd my-28 md:my-36">
          <div className="circle-process-pd hidden md:block" />
        </div>

        {/* Quote & CTA Block */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-[740px]">
            <p className="text-[26px] sm:text-[34px] md:text-[40px] font-medium tracking-[-0.03em] leading-[1.15] text-white">
              “{quote}”
            </p>
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-[#343434] bg-white/[0.03] px-5 py-3">
              <div className="w-10 h-10 rounded-xl bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center font-medium text-[15px]">
                {author
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div>
                <div className="text-[15px] font-medium text-white">{author}</div>
                <div className="text-[13px] text-[#939393]">{role}</div>
              </div>
            </div>
          </div>

          <div className="relative shrink-0">
            <img
              src="/rh-exact/pd/pd-cta-glow.svg"
              alt="Fixed-price Next.js 16 milestone web development process highlight"
              aria-hidden="true"
              width={288}
              height={288}
              className="pointer-events-none absolute -inset-12 w-72 h-72 opacity-80"
            />
            <Link
              href={ctaHref}
              className="rh-btn-pill relative z-10 bg-white text-[#0D0D0D] px-8 py-4 text-[16px] font-medium tracking-[-0.02em]"
            >
              <span className="inline-flex items-center gap-2.5">
                {ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   5. RhBentoWorkGrid — Proof Bento + Floating #BAFF00 Cursor Showcase Grid
   ============================================================================ */

const DEFAULT_QUOTES: ProofQuoteItem[] = [
  {
    quote: "Fixed milestone pricing agreed before build starts, with a free live prototype preview option before full production commitment.",
    author: "Milestone Protection",
    role: "Scope & Delivery Standard",
    company: "Saim Dev",
  },
  {
    quote: "100% clean React, Next.js 16, and TypeScript handed directly into your own repository with zero proprietary page-builder lock-in.",
    author: "Full Source Ownership",
    role: "Zero Lock-In Standard",
    company: "Saim Dev",
  },
  {
    quote: "Bespoke hospitality and takeaway ordering flows engineered with direct WhatsApp routing and 0% per-order platform commission.",
    author: "Commission-Free Ordering",
    role: "UK & EU Hospitality Builds",
    company: "Saim Dev",
  },
];

export function RhBentoWorkGrid({
  overline = "ENGINEERING BENCHMARKS",
  title,
  titleMuted,
  proofStat = "<0.8s",
  proofLabel = "Target First Contentful Paint across edge-cached Next.js 16 builds",
  quotes = DEFAULT_QUOTES,
  highlightMetric = "100%",
  highlightTitle = "Full GitHub Source Code Ownership",
  highlightHref = "/case-studies",
  cursorLabel = "Inspect Project",
  items,
}: RhBentoWorkGridProps) {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [cursorOn, setCursorOn] = useState(false);
  const bentoCursorRef = useRef<HTMLDivElement>(null);

  const moveBentoCursor = (x: number, y: number) => {
    const el = bentoCursorRef.current;
    if (!el) return;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  };

  useEffect(() => {
    if (quotes.length <= 1) return;
    const t = window.setInterval(() => {
      setQuoteIdx((q) => (q + 1) % quotes.length);
    }, 4500);
    return () => window.clearInterval(t);
  }, [quotes.length]);

  const currentQuote = quotes[quoteIdx % quotes.length];

  return (
    <section className="relative z-10 bg-white text-[#0D0D0D] py-20 md:py-28 border-t border-[#E6E6E6]">
      <div className="max-w-[1168px] mx-auto px-5">
        <div data-gsap-reveal="" className="max-w-[760px] mb-12 md:mb-16">
          <div className="text-[11px] font-mono-tech tracking-[0.35em] uppercase text-[#595959] mb-4">
            {overline}
          </div>
          <h2 className="text-[36px] sm:text-[48px] md:text-[52px] font-medium tracking-[-0.04em] leading-[1.06] text-[#0D0D0D]">
            {title} <span className="text-[#939393]">{titleMuted}</span>
          </h2>
        </div>

        {/* 3-Column Proof Bento Row */}
        <div data-gsap-stagger="" className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-[#E6E6E6] flex flex-col justify-between min-h-[240px]">
            <div className="text-[56px] md:text-[68px] font-medium tracking-[-0.05em] leading-none text-[#0D0D0D] font-mono-tech tabular-nums">
              {proofStat}
            </div>
            <p className="text-[15px] text-[#595959] leading-[1.5] mt-6">{proofLabel}</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-[#E6E6E6] flex flex-col justify-between min-h-[240px]">
            <p className="text-[18px] font-medium tracking-[-0.02em] leading-[1.45] text-[#0D0D0D]">
              “{currentQuote.quote}”
            </p>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-[14px] font-medium text-[#0D0D0D]">{currentQuote.author}</div>
                <div className="text-[12px] text-[#595959]">
                  {currentQuote.role} · {currentQuote.company}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {quotes.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Show quote ${idx + 1}`}
                    onClick={() => setQuoteIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === quoteIdx ? "w-5 bg-[#0D0D0D]" : "w-2 bg-[#D4D4D4] hover:bg-[#939393]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <Link
            href={highlightHref}
            className="rh-edge-orbit-card is-lime rounded-3xl p-8 bg-[#0D0D0D] text-white border border-[#202020] flex flex-col justify-between min-h-[240px] group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00]">
                FEATURED PROOF
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#BAFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div>
              <div className="text-[44px] font-medium tracking-[-0.04em] text-[#BAFF00] leading-none font-mono-tech tabular-nums">
                {highlightMetric}
              </div>
              <div className="text-[16px] text-white/90 mt-2">{highlightTitle}</div>
            </div>
          </Link>
        </div>

        {/* 2-Half + 1-Full Repeating Showcase Grid with Floating #BAFF00 Cursor */}
        <div
          data-gsap-stagger=""
          className="grid md:grid-cols-2 gap-4"
          onMouseMove={(e) => moveBentoCursor(e.clientX, e.clientY)}
          onMouseLeave={() => setCursorOn(false)}
        >
          {items.map((item, idx) => {
            const isFullWidth =
              items.length === 4
                ? false
                : idx % 3 === 2 || (idx === items.length - 1 && idx % 3 === 0);
            const CardTag = item.external ? "a" : Link;
            const cardProps = item.external
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: item.href };

            return (
              <CardTag
                key={item.id}
                {...cardProps}
                onMouseEnter={(e: React.MouseEvent) => {
                  moveBentoCursor(e.clientX, e.clientY);
                  setCursorOn(true);
                }}
                onMouseLeave={() => setCursorOn(false)}
                className={`rh-edge-orbit-card group relative overflow-hidden rounded-3xl border border-[#E6E6E6] bg-[#FAFAFA] hover:border-[#0D0D0D] transition-colors flex flex-col justify-between ${
                  isFullWidth ? "md:col-span-2 min-h-[340px]" : "min-h-[320px]"
                }`}
              >
                {item.previewImage && (
                  <div
                    className={`w-full overflow-hidden bg-[#141414] border-b border-[#E6E6E6] ${
                      isFullWidth ? "h-56 md:h-72" : "h-48"
                    }`}
                  >
                    <img
                      src={item.previewImage}
                      alt={
                        item.previewAlt ||
                        `${item.title} — ${item.category} Next.js 16 custom web development & Core Web Vitals showcase`
                      }
                      width={item.previewWidth || 1200}
                      height={item.previewHeight || 714}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-7 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#595959]">
                        {item.category}
                      </span>
                      {item.metric && (
                        <span className="px-2.5 py-0.5 bg-[#0D0D0D] text-[#BAFF00] text-[11px] font-mono-tech font-medium">
                          {item.metric}
                        </span>
                      )}
                    </div>
                    <h3 className="text-[22px] md:text-[26px] font-medium tracking-[-0.03em] text-[#0D0D0D] leading-[1.2]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-[#595959] leading-[1.55] mt-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E6E6E6]">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 text-[11px] font-mono-tech bg-white border border-[#E6E6E6] text-[#595959]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0D0D0D]">
                      {cursorLabel}
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>

      {/* Global floating #BAFF00 cursor matching .proof-cursor-pd */}
      <div
        ref={bentoCursorRef}
        aria-hidden="true"
        className={`hidden lg:flex proof-cursor-pd ${cursorOn ? "is-on" : ""}`}
        style={{ left: "-200px", top: "-200px" }}
      >
        <span className="text-[13px] font-medium tracking-[-0.02em] text-[#0D0D0D]">
          {cursorLabel}
        </span>
        <ArrowUpRight className="w-4 h-4 text-[#0D0D0D]" />
      </div>
    </section>
  );
}

/* ============================================================================
   6. RhOdometerNumber — Vertical Rolling Digits (.pr-odo / .pr-odo-d)
   ============================================================================ */

export function RhOdometerNumber({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number | string;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const formatted = useMemo(() => {
    if (typeof value === "number") return value.toLocaleString("en-US");
    return String(value);
  }, [value]);

  const chars = formatted.split("");

  return (
    <span className={`pr-odo ${className}`} aria-label={`${prefix}${formatted}${suffix}`}>
      {prefix && <span>{prefix}</span>}
      {chars.map((ch, idx) => {
        if (!/[0-9]/.test(ch)) {
          return (
            <span key={`sep-${idx}-${ch}`} className="inline-block">
              {ch}
            </span>
          );
        }
        const digit = Number(ch);
        return (
          <span key={`d-${idx}`} className="pr-odo-d">
            <span
              style={
                {
                  transform: `translateY(-${digit * 10}%)`,
                  "--od": `${idx * 0.055}s`,
                } as React.CSSProperties
              }
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <i key={n}>{n}</i>
              ))}
            </span>
          </span>
        );
      })}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

/* ============================================================================
   7. RhConversionBanner — Closing 09 / Get Started CTA Strip (Light Framing Dark)
   ============================================================================ */

export function RhConversionBanner({
  overline = "09 / START YOUR PROJECT",
  title = "Ready to ship with",
  titleMuted = "zero agency bloat?",
  description = "Message Saim directly on WhatsApp or submit a brief. Receive a fixed milestone quote, delivery sprint schedule, and optional prototype preview within 24 hours.",
  primaryLabel = "Start on WhatsApp (+92 319 6526604)",
  whatsappHref = "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20web%20development%20project",
  secondaryLabel = "Submit Brief Online",
  secondaryHref = "/contact",
}: {
  overline?: string;
  title?: string;
  titleMuted?: string;
  description?: string;
  primaryLabel?: string;
  whatsappHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-24 px-5 border-t border-[#E6E6E6]">
      <div
        data-gsap-reveal=""
        className="max-w-[1168px] mx-auto rounded-3xl bg-black border border-[#222222] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
      >
        <div className="max-w-2xl">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] mb-3">
            {overline}
          </div>
          <h2 className="text-[clamp(28px,3.8vw,44px)] font-medium tracking-[-0.03em] leading-[1.1] text-white">
            {title} <span className="text-[#939393]">{titleMuted}</span>
          </h2>
          <p className="mt-3 text-[15px] text-[#939393] leading-[1.6]">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] font-semibold text-[15px] px-7 py-4 hover:bg-white transition-colors"
          >
            <span>{primaryLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href={secondaryHref}
            className="px-6 py-4 rounded-full border border-[#333333] text-white hover:border-[#BAFF00] hover:text-[#BAFF00] text-[14px] font-medium transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
