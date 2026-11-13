"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronUp, ChevronDown, ShieldCheck, Flame, Check, BadgeCheck } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { cn } from "../lib/utils";
import { PLANS, type Currency, type Plan } from "../../content/plans";
import { ViewportMount } from "./reactdrops/ViewportMount";
import { SoapBubbleMaterial, SoapBubbleSurface } from "./reactdrops/soap-bubble";

const LazyChromaticSurface = dynamic(
  () => import("./reactdrops/chromatic-button/chromatic-surface").then((m) => m.ChromaticSurface),
  { ssr: false }
);

const SybiosmeCheckIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-[#FF4A1C] flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M14 4.5L6.5 12L2.5 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PricingCard = ({ plan, currency }: { plan: Plan; currency: Currency }) => {
  const [expanded, setExpanded] = useState(false);

  const price = plan.prices[currency];
  const INITIAL_COUNT = 5;
  const visibleFeatures = expanded
    ? plan.features
    : plan.features.slice(0, INITIAL_COUNT);
  const remainingCount = plan.features.length - INITIAL_COUNT;

  const orderUrl = `https://wa.me/923196526604?text=${encodeURIComponent(
    `Hi Saim, I'd like to get started with the ${plan.name} (${price}).`
  )}`;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col justify-between rounded-[2.25rem] bg-white border p-2.5 sm:p-3 transition-all duration-300 group",
        plan.featured
          ? "border-[#FF4A1C]/50 hover:border-[#FF4A1C] shadow-[0_18px_50px_-20px_rgba(255,74,28,0.22)]"
          : "border-black/[0.08] hover:border-black/20 shadow-[0_14px_40px_-24px_rgba(17,17,21,0.10)]"
      )}
    >
      {/* Featured Pill Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FF4A1C] px-4 py-1 text-xs font-semibold text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap z-20">
          <Flame className="w-3.5 h-3.5 text-white animate-pulse" />
          <span>{plan.badge}</span>
        </div>
      )}

      {/* Top Tile — Crisp Studio Editorial Tile */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] border",
          plan.featured
            ? "bg-gradient-to-br from-[#FFF4EF] via-[#FFEBE3] to-[#FFF9F7] border-[#FF4A1C]/25"
            : plan.id === "starter"
            ? "bg-gradient-to-br from-[#F7F7FA] via-[#F2F3F6] to-[#FAFAFA] border-black/[0.06]"
            : "bg-gradient-to-br from-[#FAFAFA] via-[#F4F4F6] to-[#FFFFFF] border-black/[0.06]"
        )}
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111115]">
              {plan.name}
            </p>
            {plan.featured && <span className="section-dot" />}
          </div>
          <p className="text-xs sm:text-sm text-black/65 font-light leading-relaxed min-h-[40px]">
            {plan.description}
          </p>
        </div>

        {/* Price Row */}
        <div className="relative z-10 mt-6 flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-medium tracking-tight text-[#111115] leading-none">
            {price}
          </span>
          <span className="text-xs text-black/50 uppercase font-mono tracking-wider">
            / one-off
          </span>
        </div>
      </div>

      {/* Plan Details & Included Features */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/50 block mb-4">
            Included:
          </span>

          <ul className="flex flex-col gap-3">
            {visibleFeatures.map((f) => (
              <li
                key={f.text}
                className={cn(
                  "flex items-start gap-3 text-xs sm:text-sm font-light leading-relaxed transition-all duration-300",
                  f.included ? "text-[#111115]/85" : "text-black/35"
                )}
              >
                <span className="mt-0.5">
                  <SybiosmeCheckIcon />
                </span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>

          {remainingCount > 0 && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center justify-center gap-1.5 text-xs text-black/65 hover:text-[#111115] font-medium transition-colors cursor-pointer py-2.5 w-full border-t border-black/[0.08]"
            >
              <span>
                {expanded ? "Show Less" : `View More (+${remainingCount} features)`}
              </span>
              {expanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#FF4A1C]" />
              )}
            </button>
          )}
        </div>

        {/* CTA Button — Chromatic WebGL Primary / Sybiosme Action Button */}
        <div className="mt-8 pt-4 border-t border-black/[0.06]">
          {plan.featured ? (
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              className="chromatic-button saim-hero-chromatic w-full rounded-full bg-[radial-gradient(125%_160%_at_18%_20%,#ff8a5b_0%,#FF4A1C_48%,#e0360a_100%)] shadow-[0_12px_36px_rgba(255,74,28,0.28)]"
            >
              <ViewportMount unmountWhenFar rootMargin="0px 0px" className="absolute inset-0 pointer-events-none">
                <LazyChromaticSurface
                  color="#FF4A1C"
                  color2="#ff8a5b"
                  color3="#e0360a"
                  colorMode="gradient-3"
                  hoverEffect="spotlight"
                  borderRadius={50}
                  speed={0.85}
                  feather={18}
                  intensity={1.45}
                  grain={0.055}
                />
              </ViewportMount>
              <span className="chromatic-button-content w-full justify-between px-1 text-sm font-semibold text-white">
                <span>Order on WhatsApp</span>
                <span className="btn-arrow bg-white text-black">
                  <svg viewBox="0 0 17 15" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
                  </svg>
                </span>
              </span>
            </a>
          ) : (
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get Started — ${plan.name}`}
              className="sybiosme-action-btn w-full bg-[#F4F4F6] hover:bg-[#111115] text-[#111115] hover:text-white border border-black/[0.10] hover:border-[#111115]"
            >
              <span className="text-sm font-medium tracking-tight">
                {`Get Started — ${plan.name}`}
              </span>
              <div className="btn-arrow bg-[#FF4A1C] text-white">
                <svg
                  viewBox="0 0 17 15"
                  className="w-3.5 h-3.5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
                </svg>
              </div>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const PricingSection = () => {
  const [currency, setCurrency] = useState<Currency>("GBP");

  return (
    <SoapBubbleMaterial
      surface="bubble-liquid"
      environment="studio"
      liquidLens={false}
      iridescence={1.2}
      clearCenter={0.78}
      filmScale={5}
      bevel={10}
      tint="rgba(255, 255, 255, 0.72)"
      soapColor="rgba(255, 74, 28, 0.08)"
      wobble={0.35}
    >
      <section
        id="pricing"
        className="relative w-full bg-white py-20 sm:py-28 md:py-36 border-t border-black/[0.06] overflow-hidden"
      >
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8 relative z-10">
          {/* HEADER — Sybiosme Step Indicator & Title */}
          <div className="mb-14 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <FadeUp>
                <SoapBubbleSurface
                  as="div"
                  interactive={0.2}
                  radius={9999}
                  className="saim-bubble-pill inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 border border-black/[0.08] bg-[#FAFAFA]"
                >
                  <span className="section-dot" />
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-black/80">
                    Transparent Fixed Packages
                  </span>
                </SoapBubbleSurface>
              </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] text-[#111115]"
                style={{ letterSpacing: "-0.04em" }}
              >
                Choose. <span className="text-black/45">Your plan.</span>
              </h2>
              <p className="mt-3.5 text-sm sm:text-base text-black/65 font-light leading-relaxed">
                No monthly retainers. No hidden fees. 100% custom Next.js engineering.
              </p>
            </FadeUp>
          </div>

          {/* CURRENCY TOGGLE — Sybiosme Pill Island */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto">
              <span className="text-[11px] font-mono text-black/55 uppercase tracking-wider">
                Select Currency:
              </span>
              <SoapBubbleSurface
                as="div"
                interactive={0.22}
                radius={9999}
                className="saim-bubble-nav inline-flex p-1.5 shadow-sm border border-black/[0.09] bg-[#FAFAFA] max-w-full overflow-x-auto scrollbar-hide"
              >
                <button
                  type="button"
                  onClick={() => setCurrency("GBP")}
                  className={cn(
                    "px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap",
                    currency === "GBP"
                      ? "bg-[#111115] text-white shadow-sm font-semibold"
                      : "text-black/70 hover:text-[#111115]"
                  )}
                >
                  £ GBP · UK
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("EUR")}
                  className={cn(
                    "px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap",
                    currency === "EUR"
                      ? "bg-[#111115] text-white shadow-sm font-semibold"
                      : "text-black/70 hover:text-[#111115]"
                  )}
                >
                  € EUR · EU
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={cn(
                    "px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap",
                    currency === "USD"
                      ? "bg-[#111115] text-white shadow-sm font-semibold"
                      : "text-black/70 hover:text-[#111115]"
                  )}
                >
                  $ USD · Global
                </button>
              </SoapBubbleSurface>
            </div>
          </FadeUp>
        </div>

        {/* TRUST BANNER — Sybiosme Squircle Strip */}
        <div className="mb-14 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-[1.75rem] bg-[#FAFAFA] border border-black/[0.08] text-xs text-[#111115]/85 shadow-sm">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
            <span>UK &amp; EU Invoicing Ready</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
            <span>Zero Monthly Retainers</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
            <span>Optimised Core Web Vitals</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
            <span>Fast 5–10 Day Delivery</span>
          </div>
        </div>

        {/* 3 PLAN CARDS GRID */}
        <div data-gsap-stagger className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PLANS.map((p) => (
            <PricingCard key={p.name} plan={p} currency={currency} />
          ))}
        </div>

        {/* PAYMENT TERMS & PEACE OF MIND — Sybiosme Double-Bezel Frame */}
        <div className="mt-14 max-w-6xl mx-auto rounded-[2rem] bg-[#FAFAFA] border border-black/[0.08] p-7 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-[#111115] font-medium text-sm">
                <ShieldCheck className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
                <span>50/50 Milestone Protection</span>
              </div>
              <p className="text-black/65 text-xs sm:text-[13px] leading-relaxed font-light">
                50% deposit to initiate architecture &amp; design. The remaining 50% is only payable after full private staging preview and your final approval prior to live deployment.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-[#111115] font-medium text-sm">
                <Check className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
                <span>UK &amp; EU Invoicing &amp; Rails</span>
              </div>
              <p className="text-black/65 text-xs sm:text-[13px] leading-relaxed font-light">
                Itemised commercial invoices. Payments processed seamlessly via Stripe Secure Card, Wise Multi-Currency, UK Faster Payments, and SEPA Bank Wire.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-[#111115] font-medium text-sm">
                <BadgeCheck className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
                <span>Dedicated Revision Support</span>
              </div>
              <p className="text-black/65 text-xs sm:text-[13px] leading-relaxed font-light">
                We iterate on staging with you until you approve performance, UX, and conversion flow. Zero monthly retainers or hidden lock-ins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </SoapBubbleMaterial>
  );
};
