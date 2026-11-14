"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { RhHeader } from "@/components/rh/RhHeader";
import {
  RhHeroPinned,
  RhOdometerNumber,
  RhProcessCarousel,
  RhSystemRows,
} from "@/components/rh/RhModernSections";

interface FaqItem {
  name: string;
  acceptedAnswer: { text: string };
}

export function RhPricingInteractive({ faqs }: { faqs: FaqItem[] }) {
  const [currency, setCurrency] = useState<"GBP" | "USD">("GBP");
  const [speedMode, setSpeedMode] = useState<"standard" | "rush">("standard");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const calc = (baseGbp: number) => {
    const rushMultiplier = speedMode === "rush" ? 1.25 : 1;
    const gbpVal = Math.round(baseGbp * rushMultiplier);
    if (currency === "USD") {
      return { prefix: "$", amount: Math.round(gbpVal * 1.27) };
    }
    return { prefix: "£", amount: gbpVal };
  };

  const pLanding = calc(250);
  const pStarter = calc(390);
  const pFlagship = calc(790);
  const pApp = calc(1490);

  return (
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      {/* 1. EXACT rh.design PAGE-OPEN HERO (3D Wireframe Video + Laser-Draw Strip) */}
      <RhHeroPinned
        badge="Clear Fixed Investment · $0 Upfront Prototype"
        title={
          <>
            Transparent pricing.{" "}
            <span className="text-[#939393]">Zero monthly lock-in.</span>
          </>
        }
        subtitle="Fixed-fee website engineering for UK and international businesses. 100% source code ownership, zero mandatory agency retainers, and safe milestone invoicing only after you test your interactive staging prototype."
        primaryCta={{ label: "Start Project ($0 Upfront)", href: "/contact" }}
        secondaryCta={{
          label: "Open Interactive Cost Calculator",
          href: "/overview",
        }}
        videoType="cube"
        stripLabel="Transparent fixed fees · Zero retainers"
      />

      {/* 2. LIGHT PRICING BOARD WITH ODOMETER DIGIT-ROLL (.pr-odo) */}
      <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-28 px-5">
        <div className="max-w-[1168px] mx-auto">
          {/* Interactive Switcher Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 mb-12 border-b border-[#E6E6E6]">
            <div>
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#595959] mb-3">
                FIXED PACKAGES &amp; SPRINT MODES
              </div>
              <h2 className="text-[clamp(32px,4.2vw,52px)] font-medium tracking-[-0.035em] leading-[1.06]">
                Pick your scope.{" "}
                <span className="text-[#939393]">Watch the fee lock in.</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Currency Switcher */}
              <div className="inline-flex items-center p-1 bg-white border border-[#E6E6E6]">
                {(["GBP", "USD"] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCurrency(c)}
                    className={`px-4 py-2 text-[12px] font-mono-tech transition-colors ${
                      currency === c
                        ? "bg-[#0D0D0D] text-[#BAFF00]"
                        : "text-[#595959] hover:text-[#0D0D0D]"
                    }`}
                  >
                    {c === "GBP" ? "GBP (£)" : "USD ($)"}
                  </button>
                ))}
              </div>

              {/* Delivery Speed Switcher */}
              <div className="inline-flex items-center p-1 bg-white border border-[#E6E6E6]">
                <button
                  type="button"
                  onClick={() => setSpeedMode("standard")}
                  className={`px-4 py-2 text-[12px] font-mono-tech transition-colors ${
                    speedMode === "standard"
                      ? "bg-[#0D0D0D] text-white"
                      : "text-[#595959] hover:text-[#0D0D0D]"
                  }`}
                >
                  Standard Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setSpeedMode("rush")}
                  className={`px-4 py-2 text-[12px] font-mono-tech transition-colors inline-flex items-center gap-1.5 ${
                    speedMode === "rush"
                      ? "bg-[#BAFF00] text-[#0D0D0D] font-medium"
                      : "text-[#595959] hover:text-[#0D0D0D]"
                  }`}
                >
                  <span>Express Priority (2x Speed)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Split Pricing Architecture: Left Stacked White Cards + Right Dark Flagship Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
            {/* Left Column: Landing (£250) + Starter (£390) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Card 1 */}
              <div className="rh-edge-orbit-card p-8 sm:p-10 bg-white border border-[#E6E6E6] flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#595959]">
                      Campaign &amp; Local Ordering
                    </span>
                    <span className="px-3 py-1 bg-[#F5F5F7] border border-[#E6E6E6] text-[12px] font-mono-tech text-[#0D0D0D]">
                      {speedMode === "rush" ? "72 Hours Delivery" : "5–7 Days Delivery"}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-4 pb-6 mb-6 border-b border-[#E6E6E6]">
                    <div>
                      <h3 className="text-[26px] font-medium text-[#0D0D0D] tracking-[-0.025em]">
                        Landing Page / Takeaway
                      </h3>
                      <p className="text-[14px] text-[#595959] mt-1">
                        High-converting 1-page presence or direct takeaway ordering system.
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[42px] font-medium text-[#0D0D0D] tracking-[-0.035em] leading-none">
                        <RhOdometerNumber prefix={pLanding.prefix} value={pLanding.amount} />
                      </div>
                      <span className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#939393] mt-1">
                        One-off fixed
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                    {[
                      "1 High-converting custom page",
                      "Mobile-first responsive design",
                      "Direct WhatsApp & lead forms",
                      "Google Maps & business schema",
                      "Sub-second Lighthouse score",
                      "14 days post-launch warranty",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-[14px] text-[#202020]">
                        <span className="w-5 h-5 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center text-[11px] font-bold shrink-0">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E6E6E6]">
                  <Link
                    href="/services/landing-pages-cro"
                    className="text-[14px] text-[#595959] hover:text-[#0D0D0D] underline underline-offset-4"
                  >
                    View Landing Page scope
                  </Link>
                  <a
                    href={`https://wa.me/923196526604?text=${encodeURIComponent(
                      `Hi Saim, I'd like to start the Landing Page / Takeaway plan (${pLanding.prefix}${pLanding.amount}, ${speedMode}) with $0 upfront.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#0D0D0D] hover:bg-[#222222] text-white font-medium text-[14px] inline-flex items-center gap-2 transition-colors"
                  >
                    <span>
                      Start — {pLanding.prefix}
                      {pLanding.amount}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rh-edge-orbit-card p-8 sm:p-10 bg-white border border-[#E6E6E6] flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#0D0D0D] font-medium">
                      Most Popular For Local Businesses
                    </span>
                    <span className="px-3 py-1 bg-[#BAFF00] text-[#0D0D0D] text-[12px] font-mono-tech font-medium">
                      {speedMode === "rush" ? "4 Days Delivery" : "7 Days Delivery"}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-4 pb-6 mb-6 border-b border-[#E6E6E6]">
                    <div>
                      <h3 className="text-[26px] font-medium text-[#0D0D0D] tracking-[-0.025em]">
                        Starter Multi-Page Plan
                      </h3>
                      <p className="text-[14px] text-[#595959] mt-1">
                        Complete multi-page presence for clinics, salons, and service firms.
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[42px] font-medium text-[#0D0D0D] tracking-[-0.035em] leading-none">
                        <RhOdometerNumber prefix={pStarter.prefix} value={pStarter.amount} />
                      </div>
                      <span className="block text-[11px] font-mono-tech uppercase tracking-wider text-[#939393] mt-1">
                        One-off fixed
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                    {[
                      "Up to 5 custom Next.js pages",
                      "Sub-second page speeds (99+ CWV)",
                      "Interactive quote or booking flow",
                      "Local SEO metadata & JSON-LD",
                      "100% GitHub repo ownership",
                      "30 days post-launch warranty",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-[14px] text-[#202020]">
                        <span className="w-5 h-5 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center text-[11px] font-bold shrink-0">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E6E6E6]">
                  <Link
                    href="/services/business-websites"
                    className="text-[14px] text-[#595959] hover:text-[#0D0D0D] underline underline-offset-4"
                  >
                    View Business Website scope
                  </Link>
                  <a
                    href={`https://wa.me/923196526604?text=${encodeURIComponent(
                      `Hi Saim, I'd like to start the Starter Multi-Page Plan (${pStarter.prefix}${pStarter.amount}, ${speedMode}) with $0 upfront.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#0D0D0D] hover:bg-[#222222] text-white font-medium text-[14px] inline-flex items-center gap-2 transition-colors"
                  >
                    <span>
                      Start — {pStarter.prefix}
                      {pStarter.amount}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Dark #0D0D0D Flagship Card */}
            <div className="lg:col-span-6 rh-edge-orbit-card is-lime p-8 sm:p-12 bg-[#0D0D0D] text-white border border-[#202020] flex flex-col justify-between relative overflow-hidden">
              <img
                src="/rh-exact/pd/pd-case-glow.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 w-72 h-72 opacity-60"
              />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="px-3.5 py-1 bg-[#BAFF00] text-[#0D0D0D] text-[11px] font-mono-tech font-medium uppercase tracking-wider">
                    Recommended Flagship
                  </span>
                  <span className="text-[12px] font-mono-tech text-[#939393]">
                    $0 Upfront Prototype Guarantee
                  </span>
                </div>

                <h3 className="text-[32px] sm:text-[38px] font-medium text-white tracking-[-0.03em] leading-[1.1]">
                  Business Flagship &amp; Custom E-Commerce
                </h3>
                <p className="text-[16px] text-[#939393] mt-3 leading-[1.6]">
                  Bespoke Next.js architecture engineered for competitive UK &amp; global markets,
                  high lead volumes, GSAP motion choreography, or custom headless storefronts.
                </p>

                {/* Two Odometer Price Display inside Dark Card */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-[#161616] border border-[#262626]">
                  <div>
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#939393] block">
                      Business Flagship (Up to 15 Pages)
                    </span>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="text-[40px] font-medium text-white tracking-[-0.03em]">
                        <RhOdometerNumber prefix={pFlagship.prefix} value={pFlagship.amount} />
                      </span>
                      <span className="text-[12px] font-mono-tech text-[#BAFF00]">Fixed</span>
                    </div>
                  </div>
                  <div className="sm:border-l sm:border-[#262626] sm:pl-5">
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#939393] block">
                      Custom E-Commerce / Web App
                    </span>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="text-[40px] font-medium text-[#BAFF00] tracking-[-0.03em]">
                        <RhOdometerNumber prefix={pApp.prefix} value={pApp.amount} />
                      </span>
                      <span className="text-[12px] font-mono-tech text-[#939393]">From</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3.5 pt-6 border-t border-[#222222] mb-10">
                  {[
                    "Up to 15 custom pages & bespoke interactive sections",
                    "Senior Next.js 16, React 19, GSAP & Tailwind engineering",
                    "Comprehensive technical SEO architecture & silo linking",
                    "Shopify Plus, Stripe checkout, or custom ordering flows",
                    "CRM, WhatsApp API & automated email notifications",
                    "100% GitHub repository & full source code ownership",
                    speedMode === "rush"
                      ? "Priority 5–7 business days rush delivery + 30d support"
                      : "10–14 business days delivery + 30 days priority support",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-[15px] text-[#CBCBCB]">
                      <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <a
                  href={`https://wa.me/923196526604?text=${encodeURIComponent(
                    `Hi Saim, I'd like to start the Flagship Business Plan (${pFlagship.prefix}${pFlagship.amount}) with $0 upfront prototype.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rh-btn-pill w-full py-4 px-7 bg-white text-[#0D0D0D] font-medium text-[16px] text-center"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <span>Start Project ($0 Upfront Prototype)</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>

                <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-[#939393] pt-2">
                  <Link
                    href="/services/ecommerce-development"
                    className="hover:text-white underline underline-offset-4"
                  >
                    Explore E-Commerce builds
                  </Link>
                  <Link
                    href="/services/custom-web-apps"
                    className="hover:text-white underline underline-offset-4"
                  >
                    Explore Custom Web Apps
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bespoke Software & 1:1 Reference Rebuilds Callout */}
          <div className="rh-edge-orbit-card p-8 sm:p-12 bg-white border border-[#E6E6E6] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#595959] block mb-2">
                Bespoke Software &amp; 1:1 Reference Rebuilds
              </span>
              <h3 className="text-[24px] sm:text-[32px] font-medium text-[#0D0D0D] tracking-[-0.025em] mb-2">
                Custom Web Applications, Portals &amp; 1:1 Clones
              </h3>
              <p className="text-[15px] text-[#595959] leading-[1.6]">
                Have a reference website you love or need user authentication, Stripe recurring
                billing, and custom dashboards? We engineer pixel-accurate 1:1 rebuilds and
                full-stack Next.js applications from{" "}
                <strong className="text-[#0D0D0D]">
                  <RhOdometerNumber
                    prefix={currency === "USD" ? "$" : "£"}
                    value={currency === "USD" ? 1900 : 1495}
                  />
                </strong>
                .
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/services/website-clone"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0D0D0D] text-white font-medium text-[14px] hover:bg-[#222222] transition-colors"
              >
                <span>1:1 Website Clone</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F5F5F7] border border-[#E6E6E6] text-[#0D0D0D] font-medium text-[14px] hover:border-[#0D0D0D] transition-colors"
              >
                <span>Inspect Live Demos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SVG LINE-DRAW INCLUDED STANDARDS */}
      <RhSystemRows
        overline="EVERY PACKAGE INCLUDES"
        title="Studio-grade foundations"
        titleMuted="built into every tier"
        rows={[
          {
            num: "01",
            title: "Zero Monthly Agency Retainers",
            description:
              "Every website is billed as one clear fixed fee. No recurring WordPress maintenance charges or hidden SaaS markups.",
            tags: ["£0 / mo Retainer", "Direct Hosting"],
          },
          {
            num: "02",
            title: "$0 Upfront Staging Guarantee",
            description:
              "We build and host your live interactive staging URL first so you verify every breakpoint and speed score before committing.",
            tags: ["Preview First", "Zero Risk"],
          },
          {
            num: "03",
            title: "100% Source Code & Repo Ownership",
            description:
              "Receive full GitHub repository transfer, production build scripts, and Cloudflare/Vercel deployment configuration on day one.",
            tags: ["GitHub Transfer", "Zero Lock-In"],
          },
          {
            num: "04",
            title: "Sub-Second Next.js 16 Edge Performance",
            description:
              "Strict Core Web Vitals engineering targeting 95–100 Lighthouse scores with structured JSON-LD schema baked in.",
            tags: ["99+ CWV", "Schema.org SEO"],
          },
        ]}
      />

      {/* 4. DARK HORIZONTAL DRAG MILESTONE WORKFLOW */}
      <RhProcessCarousel
        title="Simple 4-stage milestone"
        titleMuted="billing & launch"
        stages={[
          {
            stage: "STAGE 01",
            duration: "Day 1",
            title: "Scope Lock & Fixed Fee Quote",
            description:
              "We confirm exact page count, integrations, and timeline in writing with zero hidden hourly estimates.",
            deliverables: ["Written Fixed Quote", "Architecture Checklist"],
          },
          {
            stage: "STAGE 02",
            duration: "Days 2 – 5",
            title: "Interactive Staging Preview ($0 Down)",
            description:
              "Review your bespoke Next.js staging build live on mobile and desktop before final invoice approval.",
            deliverables: ["Private Staging URL", "Live Speed Audit"],
          },
          {
            stage: "STAGE 03",
            duration: "Review",
            title: "Unlimited Visual Refinements",
            description:
              "Fine-tune copy, colors, animations, and responsive spacing until every detail meets your standard.",
            deliverables: ["Pixel QA Sign-Off", "Form & WhatsApp Check"],
          },
          {
            stage: "STAGE 04",
            duration: "Launch",
            title: "Production Switch & Full IP Handover",
            description:
              "Instant DNS deployment, SSL setup, GitHub repo transfer, and post-launch engineering warranty.",
            deliverables: ["GitHub Repo Access", "30-Day Warranty"],
          },
        ]}
      />

      {/* 5. LIGHT FAQ ACCORDION (.faq-cs-item style) */}
      <section className="bg-white text-[#0D0D0D] py-20 sm:py-28 px-5 border-t border-[#E6E6E6]">
        <div className="max-w-[1168px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#595959] block mb-3">
              Common Questions
            </span>
            <h2 className="text-[clamp(30px,4vw,46px)] font-medium text-[#0D0D0D] tracking-[-0.03em] leading-[1.1]">
              Frequently Asked{" "}
              <span className="text-[#939393]">Pricing Questions</span>
            </h2>
            <p className="mt-4 text-[15px] text-[#595959] leading-[1.6]">
              UK CAP Code &amp; ASA compliant fixed pricing with zero hidden retainers.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-b border-[#E6E6E6] divide-y divide-[#E6E6E6]">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.name} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-medium text-[17px] text-[#0D0D0D]">
                      {item.name}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#0D0D0D] border-[#0D0D0D] text-[#BAFF00] rotate-45"
                          : "border-[#E6E6E6] text-[#0D0D0D]"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-[15px] text-[#595959] leading-[1.65] pr-8">
                      {item.acceptedAnswer.text}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter theme="dark" />
    </div>
  );
}
