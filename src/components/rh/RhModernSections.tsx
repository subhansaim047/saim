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
    tag: "PageSpeed",
    tagValue: "99 / 100",
    summary: "Sub-second edge-rendered React & Next.js builds with zero plugin bloat.",
    href: "/case-studies",
  },
  {
    label: "Apex Dental",
    tag: "Bookings",
    tagValue: "+185%",
    summary: "Rebuilt a 4.8s legacy WordPress site into a 0.6s patient booking engine.",
    href: "/case-studies",
  },
  {
    label: "HQ Leathercon",
    tag: "Scale",
    tagValue: "1,500+ Pages",
    summary: "Bespoke luxury leather e-commerce architecture with custom jacket builder.",
    href: "/demos",
  },
  {
    label: "SpeedTech Auto",
    tag: "Lead Velocity",
    tagValue: "2.2x Revenue",
    summary: "Mobile-first emergency recovery site achieving 100/100 performance score.",
    href: "/case-studies",
  },
  {
    label: "0% Commission",
    tag: "Direct Orders",
    tagValue: "£250 Fixed",
    summary: "Commission-free takeaway & restaurant menus with Natasha's Law filters.",
    href: "/services/takeaway-web-design",
  },
  {
    label: "Lumina Aesthetics",
    tag: "Conversion",
    tagValue: "+240% Leads",
    summary: "Editorial Harley Street clinic flagship with seamless WhatsApp consults.",
    href: "/case-studies",
  },
  {
    label: "100% IP Owned",
    tag: "Retainers",
    tagValue: "£0 / month",
    summary: "Full GitHub repository handover on completion with zero agency lock-in.",
    href: "/pricing",
  },
  {
    label: "TypeScript Strict",
    tag: "LCP Time",
    tagValue: "0.6s Avg",
    summary: "Production-hardened App Router architecture engineered for UK & global scale.",
    href: "/technologies",
  },
];

/* ============================================================================
   1. RhHeroPinned — Hero with Curtain Parallax, 3D Video & Laser-Draw Strip
   ============================================================================ */

export function RhHeroPinned({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  videoType = "cube",
  stripLabel = "Engineered for speed & ownership",
  stripItems = DEFAULT_SAIM_STRIP_ITEMS,
}: RhHeroPinnedProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

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
  const videoBlend = videoType === "mobile" ? "lighten" : "screen";

  return (
    <div ref={pinRef} data-nav="dark" className="hero-pin-pd bg-[#0D0D0D] text-white">
      <div ref={innerRef} className="hero-pin-inner-pd bg-[#0D0D0D]">
        <section className="relative pt-[132px] md:pt-[156px] pb-12 md:pb-16">
          {/* Ambient radial subtle highlight matching rh.design hero depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-[-10%] w-[640px] h-[640px] rounded-full opacity-25 blur-[130px]"
            style={{
              background:
                videoType === "mobile"
                  ? "radial-gradient(circle, rgba(186,255,0,0.22) 0%, rgba(13,13,13,0) 70%)"
                  : "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(13,13,13,0) 70%)",
            }}
          />

          <div className="max-w-[1168px] mx-auto px-5 relative z-10">
            <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-16 items-center">
              {/* Left Copy Column */}
              <div className="flex flex-col gap-7">
                <div className="rh-hero-enter-badge inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10">
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

                <div className="rh-hero-enter-cta flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href={primaryCta.href}
                    className="rh-btn-pill bg-white text-[#0D0D0D] px-7 py-3.5 text-[15px] font-medium tracking-[-0.02em]"
                  >
                    <span className="inline-flex items-center gap-2">
                      {primaryCta.label}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#333333] text-white hover:border-[#BAFF00] hover:text-[#BAFF00] text-[15px] font-medium tracking-[-0.02em] transition-colors"
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              </div>

              {/* Right 3D Wireframe Video Column */}
              <div
                className="rh-hero-enter-video relative flex items-center justify-center"
                style={{ mixBlendMode: videoBlend }}
              >
                <div
                  className="w-full max-w-[490px] aspect-square relative flex items-center justify-center"
                  style={{
                    WebkitMaskImage: "radial-gradient(closest-side, black 72%, transparent 100%)",
                    maskImage: "radial-gradient(closest-side, black 72%, transparent 100%)",
                  }}
                >
                  <video
                    key={videoSrc}
                    className="hero-cube-video w-full h-auto block select-none pointer-events-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="Animated 3D engineering wireframe"
                  >
                    <source
                      src={videoSrc}
                      type={videoType === "mobile" ? "video/webm" : "video/mp4"}
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom 5-Cell Laser-Draw Strip (.strip-logos-pd) */}
        <div className="strip-logos-pd">
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
    { value: "99+", label: "PageSpeed Score" },
    { value: "0.6s", label: "Sub-Second LCP" },
    { value: "£0", label: "Monthly Retainer" },
  ],
  chartTitle = "Performance & Speed Retention Benchmark",
  chartYAxis = "Lighthouse Score",
  chartXAxis = "Architecture Tier",
  chartCaption = "Custom Next.js 16 edge engineering eliminates bloat and retains mobile visitors from first tap.",
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
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative z-10 bg-white text-[#0D0D0D] py-20 md:py-28 border-b border-[#E6E6E6]">
      <div className="max-w-[1168px] mx-auto px-5">
        {/* Top split heading with struck-through problem & lime-backed solution */}
        <div className="max-w-[820px] mb-14 md:mb-20">
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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
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
                    className={`w-full text-left p-5 border transition-all duration-300 ${
                      isSelected
                        ? "bg-[#F5F5F7] border-[#0D0D0D] translate-x-1 shadow-[0_12px_30px_rgba(13,13,13,0.08)]"
                        : "bg-white border-[#E6E6E6] opacity-75 hover:opacity-100"
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
            <div className="relative overflow-hidden bg-[#0D0D0D] text-white p-7 md:p-8 border border-[#202020]">
              <img
                src="/rh-exact/pd/pd-case-glow.svg"
                alt=""
                aria-hidden="true"
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
                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10">
                  {solutionMetrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-[22px] md:text-[26px] font-medium tracking-[-0.03em] text-[#BAFF00] font-mono-tech">
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
          <div className="lg:col-span-6 bg-[#FAFAFA] border border-[#E6E6E6] p-7 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-[20px] font-medium tracking-[-0.02em] text-[#0D0D0D]">
                  {chartTitle}
                </h3>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider px-2.5 py-1 bg-[#E6E6E6] text-[#0D0D0D] rounded-sm">
                  Verified Audit
                </span>
              </div>
              <p className="text-[14px] text-[#595959] leading-[1.55] mb-8">{chartCaption}</p>
            </div>

            <div
              ref={chartRef}
              className={`chart-retention-mad relative pt-8 pb-10 pl-10 pr-2 border-l border-b border-dashed border-[#CBCBCB] ${
                chartInView ? "" : "is-pre-mad"
              }`}
              style={{ width: "100%", height: "auto" }}
            >
              {/* Y-Axis Label */}
              <div className="absolute left-[-28px] top-1/2 -translate-y-1/2 -rotate-90 text-[11px] font-mono-tech uppercase tracking-widest text-[#939393] whitespace-nowrap">
                {chartYAxis}
              </div>

              <div className="grid grid-cols-3 gap-4 items-end h-[360px]">
                {bars.map((bar, idx) => (
                  <div key={bar.label} className="flex flex-col items-center justify-end h-full">
                    <div
                      className={`bar-num-mad text-[26px] md:text-[32px] font-medium tracking-[-0.03em] mb-3 font-mono-tech ${
                        bar.isHighlight ? "text-[#0D0D0D]" : "text-[#939393]"
                      }`}
                      style={{ transitionDelay: `${500 + idx * 220}ms` }}
                    >
                      {bar.value}
                    </div>
                    <div
                      className={`bar-mad w-full flex items-end justify-center pb-4 transition-all ${
                        bar.isHighlight
                          ? "bg-[#0D0D0D] text-[#BAFF00] border border-[#0D0D0D]"
                          : "bg-[#E6E6E6] text-[#0D0D0D]"
                      }`}
                      style={{
                        height: `${bar.heightPx}px`,
                        transitionDelay: `${idx * 220}ms`,
                      }}
                    >
                      <span
                        className={`bar-label-mad text-[12px] md:text-[13px] font-medium px-2 text-center ${
                          bar.isHighlight ? "text-[#BAFF00]" : "text-[#0D0D0D]"
                        }`}
                        style={{ transitionDelay: `${500 + idx * 220}ms` }}
                      >
                        {bar.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center text-[11px] font-mono-tech uppercase tracking-widest text-[#939393]">
                {chartXAxis}
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
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

        <div className="list-system-pd">
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
  quote = "Saim Dev shipped in days what our previous agency quoted three months for — cleaner architecture, 99 PageSpeed, zero monthly retainers.",
  author = "Dr. Marcus Vance",
  role = "Practice Director, Apex Dental Care",
  ctaLabel = "Start a Project",
  ctaHref = "/contact",
}: RhProcessCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, active: false, dragging: false });

  const scrollByCard = (dir: -1 | 1) => {
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
        onMouseEnter={() => setCursorPos((p) => ({ ...p, active: true }))}
        onMouseLeave={() => {
          draggingRef.current.active = false;
          setCursorPos((p) => ({ ...p, active: false, dragging: false }));
        }}
        onMouseMove={(e) => {
          setCursorPos((p) => ({ ...p, x: e.clientX, y: e.clientY }));
          if (!draggingRef.current.active || !trackRef.current) return;
          e.preventDefault();
          const dx = e.clientX - draggingRef.current.startX;
          trackRef.current.scrollLeft = draggingRef.current.scrollLeft - dx;
        }}
        onMouseDown={(e) => {
          if (!trackRef.current) return;
          draggingRef.current = {
            active: true,
            startX: e.clientX,
            scrollLeft: trackRef.current.scrollLeft,
          };
          setCursorPos((p) => ({ ...p, dragging: true }));
        }}
        onMouseUp={() => {
          draggingRef.current.active = false;
          setCursorPos((p) => ({ ...p, dragging: false }));
        }}
        className="relative z-10 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex gap-5 px-5 lg:pl-[max(20px,calc((100vw-1168px)/2+20px))] pr-10 min-w-max">
          {/* Lime Summary Card (matching .card-stages-pd on rh.design) */}
          <div className="w-[300px] sm:w-[340px] shrink-0 bg-[#BAFF00] text-[#0D0D0D] p-8 md:p-10 flex flex-col justify-between min-h-[390px]">
            <div>
              <div className="text-[72px] font-medium tracking-[-0.05em] leading-none">
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
              className="rh-edge-orbit-card w-[320px] sm:w-[380px] shrink-0 bg-[#141414] border border-[#242424] p-8 flex flex-col justify-between min-h-[390px]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00]">
                    {s.stage}
                  </span>
                  <span className="text-[12px] font-mono-tech text-[#939393] px-2.5 py-0.5 border border-[#2B2B2B]">
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

      {/* Custom Floating "Drag me" Cursor (desktop mouse only) */}
      <div
        aria-hidden="true"
        className={`hidden lg:flex fixed z-40 pointer-events-none w-[96px] h-[96px] rounded-full bg-[#BAFF00] text-[#0D0D0D] items-center justify-center text-[13px] font-medium tracking-[-0.02em] transition-transform duration-150 ${
          cursorPos.active ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } ${cursorPos.dragging ? "scale-90" : ""}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
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
            <div className="mt-8 inline-flex items-center gap-4 border border-[#414141] px-5 py-3">
              <div className="w-10 h-10 bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center font-medium text-[15px]">
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
              alt=""
              aria-hidden="true"
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
    quote: "Our new patient bookings nearly tripled within the first 30 days of launch.",
    author: "Dr. Marcus Vance",
    role: "Practice Director",
    company: "Apex Dental Care",
  },
  {
    quote: "Zero commission bleed and a 0.5s mobile load time changed our nightly takeaway margin.",
    author: "James Miller",
    role: "Operations Lead",
    company: "SpeedTech & Partners",
  },
  {
    quote: "Clean React & Next.js code handed straight into our GitHub repo — zero agency lock-in.",
    author: "Elena Rostova",
    role: "Clinic Founder",
    company: "Lumina Aesthetics",
  },
];

export function RhBentoWorkGrid({
  overline = "VERIFIED OUTCOMES",
  title,
  titleMuted,
  proofStat = "99+",
  proofLabel = "Average Lighthouse Score across deployed Next.js builds",
  quotes = DEFAULT_QUOTES,
  highlightMetric = "+185%",
  highlightTitle = "Online Conversion Uplift in 30 Days",
  highlightHref = "/case-studies",
  cursorLabel = "Inspect Project",
  items,
}: RhBentoWorkGridProps) {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0, on: false });

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
        <div className="max-w-[760px] mb-12 md:mb-16">
          <div className="text-[11px] font-mono-tech tracking-[0.35em] uppercase text-[#595959] mb-4">
            {overline}
          </div>
          <h2 className="text-[36px] sm:text-[48px] md:text-[52px] font-medium tracking-[-0.04em] leading-[1.06] text-[#0D0D0D]">
            {title} <span className="text-[#939393]">{titleMuted}</span>
          </h2>
        </div>

        {/* 3-Column Proof Bento Row */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-8 bg-[#FAFAFA] border border-[#E6E6E6] flex flex-col justify-between min-h-[240px]">
            <div className="text-[56px] md:text-[68px] font-medium tracking-[-0.05em] leading-none text-[#0D0D0D] font-mono-tech">
              {proofStat}
            </div>
            <p className="text-[15px] text-[#595959] leading-[1.5] mt-6">{proofLabel}</p>
          </div>

          <div className="p-8 bg-[#FAFAFA] border border-[#E6E6E6] flex flex-col justify-between min-h-[240px]">
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
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === quoteIdx ? "bg-[#0D0D0D]" : "bg-[#D4D4D4]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <Link
            href={highlightHref}
            className="rh-edge-orbit-card is-lime p-8 bg-[#0D0D0D] text-white border border-[#202020] flex flex-col justify-between min-h-[240px] group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00]">
                FEATURED PROOF
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#BAFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div>
              <div className="text-[44px] font-medium tracking-[-0.04em] text-[#BAFF00] leading-none font-mono-tech">
                {highlightMetric}
              </div>
              <div className="text-[16px] text-white/90 mt-2">{highlightTitle}</div>
            </div>
          </Link>
        </div>

        {/* 2-Half + 1-Full Repeating Showcase Grid with Floating #BAFF00 Cursor */}
        <div
          className="grid md:grid-cols-2 gap-4"
          onMouseMove={(e) => setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }))}
          onMouseLeave={() => setCursor((c) => ({ ...c, on: false }))}
        >
          {items.map((item, idx) => {
            const isFullWidth = idx % 3 === 2;
            const CardTag = item.external ? "a" : Link;
            const cardProps = item.external
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: item.href };

            return (
              <CardTag
                key={item.id}
                {...cardProps}
                onMouseEnter={() => setCursor((c) => ({ ...c, on: true }))}
                onMouseLeave={() => setCursor((c) => ({ ...c, on: false }))}
                className={`rh-edge-orbit-card group relative overflow-hidden border border-[#E6E6E6] bg-[#FAFAFA] hover:border-[#0D0D0D] transition-colors flex flex-col justify-between ${
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
                      alt={item.title}
                      loading="lazy"
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
        aria-hidden="true"
        className={`hidden lg:flex proof-cursor-pd ${cursor.on ? "is-on" : ""}`}
        style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }}
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
