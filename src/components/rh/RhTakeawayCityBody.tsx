import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin, Percent, Plus, ShieldCheck, Zap } from "lucide-react";
import { CommissionSavingsCalculator } from "@/components/CommissionSavingsCalculator";
import { RhOdometerNumber } from "@/components/rh/RhModernSections";

export interface TakeawayCityStat {
  value: string;
  label: string;
  detail: string;
}

export interface TakeawayCityMarketCard {
  icon: "percent" | "shield" | "zap";
  title: string;
  description: string;
}

export interface TakeawayCityFaq {
  q: string;
  a: string;
}

export interface TakeawaySiblingLink {
  href: string;
  tag: string;
  title: string;
  description: string;
}

export interface TakeawayCityLocalRow {
  topic: string;
  detail: string;
}

export interface RhTakeawayCityBodyProps {
  stats: TakeawayCityStat[];
  aeoQuestion: string;
  aeoAnswer: string;
  marketEyebrow: string;
  marketHeading: string;
  marketSubtitle: string;
  marketCards: TakeawayCityMarketCard[];
  localBenchmark?: {
    eyebrow: string;
    heading: string;
    intro: string;
    rows: TakeawayCityLocalRow[];
  };
  coverageEyebrow: string;
  coverageHeading: string;
  coverageSubtitle: string;
  coverageAreas: string[];
  toolsHeading?: string;
  toolsDescription?: string;
  toolsCtaLabel?: string;
  faqEyebrow: string;
  faqHeading?: string;
  faqs: TakeawayCityFaq[];
  networkHeading?: string;
  networkSubtitle?: string;
  siblings: TakeawaySiblingLink[];
  ctaHeading: string;
  ctaSubtitle: string;
  whatsappHref: string;
  architectureSection?: ReactNode;
  processSection?: ReactNode;
}

const MARKET_ICONS = {
  percent: Percent,
  shield: ShieldCheck,
  zap: Zap,
} as const;

const LIVE_TAKEAWAY_DEMOS = [
  {
    tag: "Direct Ordering",
    title: "HotBite — Takeaway Ordering Storefront",
    metric: "0% Commission",
    desc: "Fast burger & wing basket with instant collection/delivery toggle and formatted kitchen WhatsApp docket.",
    href: "/hotbite/index.html",
  },
  {
    tag: "Indian & Grill",
    title: "Anzaar — Mixed Grill & Platter Menu",
    metric: "Spice + Allergy Tiers",
    desc: "Set-meal box builders, allergen badges beside dishes, and crisp mobile category jump bar.",
    href: "/anzaar/index.html",
  },
  {
    tag: "QSR Late-Night",
    title: "Burger Garage — High-Contrast Night UI",
    metric: "<0.8s Load Time",
    desc: "Built for mobile late-night reorders with combo upsells and instant loyalty flyer QR landing.",
    href: "/burger-garage/index.html",
  },
] as const;

/**
 * Shared architectural body for UK takeaway city landing pages (London,
 * Birmingham, Manchester). Orders sections cleanly along the 9-step funnel:
 * Stats & AEO -> Problem & Market -> Deliverables Architecture -> Live Proof
 * Showcase -> Delivery Process -> ROI Calculator & Investment -> FAQs & Hubs
 * -> Conversion CTA.
 */
export function RhTakeawayCityBody({
  stats,
  aeoQuestion,
  aeoAnswer,
  marketEyebrow,
  marketHeading,
  marketSubtitle,
  marketCards,
  localBenchmark,
  coverageEyebrow,
  coverageHeading,
  coverageSubtitle,
  coverageAreas,
  toolsHeading = "Commission-Free Menu Compliance & Cost Utilities",
  toolsDescription = "Explore our live UK commission savings calculator and food hygiene compliance resources.",
  toolsCtaLabel = "Open Free Kitchen Tools",
  faqEyebrow,
  faqHeading = "Frequently Asked Questions",
  faqs,
  networkHeading = "UK Regional & National Takeaway Web Design Network",
  networkSubtitle = "Explore our national takeaway ordering service hub or neighbouring city ordering guides.",
  siblings,
  ctaHeading,
  ctaSubtitle,
  whatsappHref,
  architectureSection,
  processSection,
}: RhTakeawayCityBodyProps) {
  return (
    <div className="saim-city-body">
      {/* 02 & 03 — PROBLEM & SOLUTION SNAPSHOT: Dark #000000 KPI Row & AEO Direct Answer */}
      <section className="relative z-10 bg-black text-white border-t border-[#1D1D1D] py-16 md:py-24">
        <div className="max-w-[1168px] mx-auto px-5 space-y-12 md:space-y-14">
          <div
            data-gsap-stagger=""
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rh-edge-orbit-card is-lime rounded-2xl border border-[#222222] bg-[#0D0D0D] p-5 transition-colors hover:border-[#BAFF00]/60"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono-tech text-[#BAFF00] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-medium text-white">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[11px] font-mono-tech text-[#8E8E93]">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

          <div
            data-gsap-reveal=""
            className="rounded-3xl border border-[#222222] bg-[#0D0D0D] p-6 sm:p-8"
          >
            <dl className="space-y-2.5 text-xs sm:text-sm text-[#D1D1D6]">
              <dt className="font-mono-tech text-[11px] uppercase tracking-wider font-semibold text-[#BAFF00]">
                {aeoQuestion}
              </dt>
              <dd className="text-[#B8B8C0] leading-relaxed font-light text-sm sm:text-base">
                {aeoAnswer}
              </dd>
            </dl>
          </div>
        </div>
      </section>

      {/* 02B & 04 — PROBLEM / MARKET LANDSCAPE + LOCAL BOROUGH VALUE (Light #F5F5F7) */}
      <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 md:py-28 border-y border-[#E6E6E6]">
        <div className="max-w-[1168px] mx-auto px-5 space-y-14">
          <div
            data-gsap-reveal=""
            className="max-w-2xl mx-auto text-center space-y-3"
          >
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#666666] font-semibold">
              {marketEyebrow}
            </div>
            <h2 className="font-display-rh text-3xl sm:text-4xl font-semibold tracking-tight text-[#0D0D0D]">
              {marketHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
              {marketSubtitle}
            </p>
          </div>

          <div
            data-gsap-stagger=""
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {marketCards.map((card) => {
              const Icon = MARKET_ICONS[card.icon];
              return (
                <div
                  key={card.title}
                  className="rh-edge-orbit-card rounded-3xl border border-[#E6E6E6] bg-white p-7 space-y-3.5 transition-all hover:border-[#0D0D0D] hover:-translate-y-0.5"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D0D0D] text-[#BAFF00]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D0D0D]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            data-gsap-reveal=""
            className="rounded-3xl border border-[#E6E6E6] bg-white p-6 sm:p-9 space-y-6"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#666666] font-semibold">
                {coverageEyebrow}
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0D0D0D]">
                {coverageHeading}
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                {coverageSubtitle}
              </p>
            </div>

            <div
              data-gsap-stagger=""
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium text-[#0D0D0D]"
            >
              {coverageAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-[#E6E6E6] bg-[#F8F8FA] px-4 py-3 flex items-center gap-2 transition-colors hover:border-[#0D0D0D]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#0D0D0D] flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {localBenchmark && (
            <div
              data-gsap-reveal=""
              className="rounded-3xl border border-[#E6E6E6] bg-white p-6 sm:p-9 space-y-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#666666] font-semibold">
                  {localBenchmark.eyebrow}
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0D0D0D]">
                  {localBenchmark.heading}
                </h2>
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                  {localBenchmark.intro}
                </p>
              </div>
              <div className="divide-y divide-[#EBEBEB] border-t border-b border-[#EBEBEB]">
                {localBenchmark.rows.map((r) => (
                  <div
                    key={r.topic}
                    className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start"
                  >
                    <div className="md:col-span-4 text-xs sm:text-sm font-semibold text-[#0D0D0D]">
                      {r.topic}
                    </div>
                    <div className="md:col-span-8 text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                      {r.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div
            data-gsap-reveal=""
            className="rounded-3xl border border-[#222222] bg-[#0D0D0D] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white"
          >
            <div>
              <h3 className="text-white text-base font-semibold mb-1">
                {toolsHeading}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] font-light">
                {toolsDescription}
              </p>
            </div>
            <Link
              href="/tools/commission-savings-calculator"
              className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] text-xs font-semibold px-5 py-2.5 inline-flex items-center gap-2 flex-shrink-0 hover:bg-white transition-colors"
            >
              <span>{toolsCtaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 04B — VALUE ARCHITECTURE SLOT (RhSystemRows from city page) */}
      {architectureSection}

      {/* 05 — TRUST: LIVE HOSPITALITY CONCEPT DEMOS (Dark #0D0D0D Showcase) */}
      <section data-nav="dark" className="relative z-10 bg-[#0D0D0D] text-white py-20 md:py-24 border-t border-[#202020]">
        <div className="max-w-[1168px] mx-auto px-5 space-y-12">
          <div data-gsap-reveal="" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00]">
                05 / INTERACTIVE TAKEAWAY PROOF
              </div>
              <h2 className="font-display-rh text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Test live hospitality ordering menus{" "}
                <span className="text-[#939393]">right in your browser.</span>
              </h2>
            </div>
            <Link
              href="/demos"
              className="text-xs sm:text-sm font-medium text-[#BAFF00] hover:underline shrink-0 inline-flex items-center gap-1.5"
            >
              <span>Explore All Interactive Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {LIVE_TAKEAWAY_DEMOS.map((demo) => (
              <a
                key={demo.href}
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rh-edge-orbit-card is-lime rounded-3xl border border-[#242424] bg-[#141414] p-7 flex flex-col justify-between gap-6 hover:border-[#BAFF00]/60 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#939393]">
                      {demo.tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#BAFF00] text-[#0D0D0D] text-[10px] font-mono-tech font-semibold uppercase">
                      {demo.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#BAFF00] transition-colors mb-2">
                    {demo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#939393] leading-relaxed font-light">
                    {demo.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#222222] inline-flex items-center gap-2 text-xs font-medium text-white group-hover:text-[#BAFF00]">
                  <span>Test Live Menu Concept</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — PROCESS SLOT (RhProcessCarousel from city page) */}
      {processSection}

      {/* 07 — INVESTMENT: COMMISSION SAVINGS ROI CALCULATOR & FIXED PACKAGES (Light #F5F5F7) */}
      <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 md:py-28 border-t border-[#E6E6E6]">
        <div className="max-w-[1168px] mx-auto px-5 space-y-16">
          <CommissionSavingsCalculator />

          <div>
            <div data-gsap-reveal="" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#595959] mb-2">
                  07 / TRANSPARENT DIRECT ORDERING INVESTMENT
                </div>
                <h2 className="font-display-rh text-3xl sm:text-4xl font-semibold tracking-tight text-[#0D0D0D]">
                  One-time takeaway build,{" "}
                  <span className="text-[#939393]">zero order cuts forever.</span>
                </h2>
              </div>
              <Link
                href="/pricing"
                className="text-xs sm:text-sm font-medium text-[#0D0D0D] underline underline-offset-4 hover:opacity-70 shrink-0"
              >
                Inspect full £/$ package comparison →
              </Link>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rh-edge-orbit-card rounded-3xl bg-white border border-[#E6E6E6] p-8 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono-tech uppercase tracking-wider text-[#595959] mb-2">
                    Tier 01 · WhatsApp Kitchen Docket
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D0D0D] mb-2">
                    Commission-Free Direct Menu
                  </h3>
                  <div className="text-[38px] font-medium tracking-[-0.04em] text-[#0D0D0D] font-display-rh pb-5 mb-5 border-b border-[#E6E6E6]">
                    <RhOdometerNumber prefix="£" value={250} />{" "}
                    <span className="text-xs font-normal text-[#595959]">fixed one-time</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#555555] mb-7">
                    <li>• Full digitised menu uploaded from flyer photo</li>
                    <li>• Collection &amp; cash/pay-at-door WhatsApp ticket routing</li>
                    <li>• 14-Allergen filter tags + print bag-flyer QR code</li>
                  </ul>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rh-btn-pill justify-center bg-[#0D0D0D] text-white text-xs sm:text-sm font-medium py-3.5 px-6 hover:bg-[#222222] transition-colors"
                >
                  <span>Lock £250 Scope on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="rh-edge-orbit-card is-lime rounded-3xl bg-[#0D0D0D] text-white border border-[#222222] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#BAFF00]">
                      Tier 02 · Stripe Apple Pay / Card Checkout
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#BAFF00] text-[#0D0D0D] text-[10px] font-mono-tech font-semibold uppercase">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Full Direct Card &amp; Postcode Ordering
                  </h3>
                  <div className="text-[38px] font-medium tracking-[-0.04em] text-[#BAFF00] font-display-rh pb-5 mb-5 border-b border-white/10">
                    <RhOdometerNumber prefix="£" value={390} />{" "}
                    <span className="text-xs font-normal text-[#939393]">fixed one-time</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#CBCBCB] mb-7">
                    <li>• Direct Stripe Apple Pay / Google Pay / card settlements to your bank</li>
                    <li>• Automated radius &amp; postcode delivery minimums</li>
                    <li>• 100% domain &amp; GitHub source ownership with 0% portal cut</li>
                  </ul>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rh-btn-pill justify-center bg-[#BAFF00] text-[#0D0D0D] text-xs sm:text-sm font-bold py-3.5 px-6 hover:bg-white transition-colors"
                >
                  <span>Start £390 Card Storefront</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — OBJECTIONS: Dark #000000 FAQs & UK Regional Network */}
      <section className="relative z-10 bg-black text-white py-20 md:py-28 border-t border-[#1D1D1D]">
        <div className="max-w-[1168px] mx-auto px-5 space-y-16">
          <div data-gsap-reveal="" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#BAFF00]">
                {faqEyebrow}
              </div>
              <h2 className="font-display-rh text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {faqHeading}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-[#222222] bg-[#0D0D0D] px-6 py-4 cursor-pointer transition-colors hover:border-[#3A3A3C] open:border-[#BAFF00]/50"
                >
                  <summary className="flex items-center justify-between gap-4 list-none select-none focus:outline-none">
                    <span className="text-white text-sm sm:text-base font-semibold">
                      {faq.q}
                    </span>
                    <Plus className="w-4 h-4 text-[#BAFF00] flex-shrink-0 transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="pt-3 pb-1 text-[#A1A1AA] text-xs sm:text-sm leading-relaxed font-light">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div
            data-gsap-reveal=""
            className="rounded-3xl border border-[#222222] bg-[#0D0D0D] p-6 sm:p-9 space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-[#222222] pb-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black border border-[#222222] text-[#BAFF00]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  {networkHeading}
                </h2>
                <p className="text-xs sm:text-sm text-[#8E8E93] font-light">
                  {networkSubtitle}
                </p>
              </div>
            </div>

            <div
              data-gsap-stagger=""
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {siblings.map((hub) => (
                <Link
                  key={hub.href}
                  href={hub.href}
                  className="rh-edge-orbit-card is-lime rounded-2xl border border-[#222222] bg-black p-5 transition-colors hover:border-[#BAFF00]/60 group block"
                >
                  <span className="text-[11px] font-mono-tech uppercase text-[#BAFF00] block mb-1.5">
                    {hub.tag}
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#BAFF00] transition-colors block mb-1.5">
                    {hub.title}
                  </span>
                  <p className="text-xs text-[#8E8E93] leading-relaxed font-light">
                    {hub.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09 — CONVERSION: Final CTA Card (Light #F5F5F7 Framing Dark Conversion Card) */}
      <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 md:py-24 px-5 border-t border-[#E6E6E6]">
        <div
          data-gsap-reveal=""
          className="max-w-[1168px] mx-auto text-center p-8 sm:p-14 rounded-3xl border border-[#222222] bg-black space-y-6 text-white"
        >
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00]">
            09 / KEEP 100% DIRECT ORDERS
          </div>
          <h2 className="font-display-rh text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            {ctaHeading}
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-xl mx-auto font-light leading-relaxed">
            {ctaSubtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] font-bold text-xs sm:text-sm px-8 py-3.5 inline-flex items-center gap-2 hover:bg-white transition-colors"
            >
              <span>Chat on WhatsApp (+92 319 6526604)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="rh-btn-pill bg-[#0D0D0D] text-white font-medium text-xs sm:text-sm px-6 py-3.5 border border-[#333333] hover:border-[#BAFF00] transition-colors"
            >
              Submit Project Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
