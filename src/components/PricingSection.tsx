"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown, ShieldCheck, Sparkles, Check } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { cn } from "../lib/utils";
import { PLANS, type Currency, type Plan } from "../../content/plans";

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
        "relative flex h-full flex-col justify-between rounded-[2.25rem] bg-[#121212] border p-2.5 sm:p-3 transition-all duration-300 shadow-2xl group",
        plan.featured
          ? "border-[#FF4A1C]/50 hover:border-[#FF4A1C] shadow-[0_12px_48px_rgba(255,74,28,0.12)]"
          : "border-white/10 hover:border-white/20"
      )}
    >
      {/* Featured Pill Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FF4A1C] px-4 py-1 text-xs font-semibold text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap z-20">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>{plan.badge}</span>
        </div>
      )}

      {/* Top Tile — Sybiosme Mesh Tile */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] border",
          plan.id === "starter"
            ? "bg-gradient-to-br from-[#241712] via-[#1a1210] to-[#12100f] border-[#FF4A1C]/35"
            : plan.id === "business"
            ? "bg-gradient-to-br from-[#1b1c20] via-[#131417] to-[#0e0f12] border-white/10"
            : "bg-gradient-to-br from-[#1d1d1d] via-[#151515] to-[#101010] border-white/5"
        )}
      >
        {/* Subtle Ambient Radial Glow */}
        {plan.featured && (
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FF4A1C]/20 rounded-full blur-3xl pointer-events-none" />
        )}

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              {plan.name}
            </h3>
            {plan.featured && <span className="section-dot" />}
          </div>
          <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed min-h-[40px]">
            {plan.description}
          </p>
        </div>

        {/* Price Row */}
        <div className="relative z-10 mt-6 flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-medium tracking-tight text-white leading-none">
            {price}
          </span>
          <span className="text-xs text-white/50 uppercase font-mono tracking-wider">
            / one-off
          </span>
        </div>
      </div>

      {/* Plan Details & Included Features */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50 block mb-4">
            Included:
          </span>

          <ul className="flex flex-col gap-3">
            {visibleFeatures.map((f, i) => (
              <li
                key={f.text}
                className={cn(
                  "flex items-start gap-3 text-xs sm:text-sm font-light leading-relaxed transition-all duration-300",
                  f.included ? "text-white/85" : "text-white/35"
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
              className="mt-4 flex items-center justify-center gap-1.5 text-xs text-white/70 hover:text-white font-medium transition-colors cursor-pointer py-2.5 w-full border-t border-white/10"
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

        {/* CTA Button — Sybiosme Magnetic Action Button */}
        <div className="mt-8 pt-4 border-t border-white/5">
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "sybiosme-action-btn w-full",
              plan.featured
                ? "bg-white hover:bg-neutral-100 text-black shadow-xl"
                : "bg-white/[0.06] hover:bg-white/15 text-white border border-white/10 hover:border-white/20"
            )}
          >
            <span className="text-sm font-medium tracking-tight">
              {plan.featured ? "Order on WhatsApp" : "Get Started"}
            </span>
            <div
              className={cn(
                "btn-arrow",
                plan.featured ? "bg-black text-white" : "bg-[#FF4A1C] text-white"
              )}
            >
              <svg
                viewBox="0 0 17 15"
                className="w-3.5 h-3.5 fill-current"
                aria-hidden="true"
              >
                <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </article>
  );
};

export const PricingSection = () => {
  const [currency, setCurrency] = useState<Currency>("GBP");

  return (
    <section
      id="pricing"
      className="relative w-full bg-[#0A0A0A] py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#FF4A1C]/[0.03] rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8 relative z-10">
        {/* HEADER — Sybiosme Step Indicator & Title */}
        <div className="mb-14 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
                <span className="section-dot" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                  Packages <span className="text-white/40">01/03</span>
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] text-white"
                style={{ letterSpacing: "-0.04em" }}
              >
                Choose. <span className="text-white/40">Your plan.</span>
              </h2>
              <p className="mt-3.5 text-sm sm:text-base text-white/65 font-light leading-relaxed">
                No monthly retainers. No hidden fees. 100% custom Next.js engineering.
              </p>
            </FadeUp>
          </div>

          {/* CURRENCY TOGGLE — Sybiosme Pill Island */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto">
              <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                Select Currency:
              </span>
              <div className="inline-flex p-1.5 bg-[#141414] border border-white/10 rounded-full backdrop-blur-md shadow-lg">
                <button
                  type="button"
                  onClick={() => setCurrency("GBP")}
                  className={cn(
                    "px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer",
                    currency === "GBP"
                      ? "bg-white text-black shadow-md font-semibold"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  🇬🇧 £ GBP (UK)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("EUR")}
                  className={cn(
                    "px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer",
                    currency === "EUR"
                      ? "bg-white text-black shadow-md font-semibold"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  🇪🇺 € EUR (Europe)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={cn(
                    "px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer",
                    currency === "USD"
                      ? "bg-white text-black shadow-md font-semibold"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  🌐 $ USD (Global)
                </button>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* TRUST BANNER — Sybiosme Squircle Strip */}
        <div className="mb-14 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-[1.75rem] bg-[#121212] border border-white/10 text-xs text-white/80 shadow-xl">
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
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p) => (
            <PricingCard key={p.name} plan={p} currency={currency} />
          ))}
        </div>

        {/* PAYMENT TERMS & PEACE OF MIND — Sybiosme Double-Bezel Frame */}
        <div className="mt-14 max-w-6xl mx-auto rounded-[2rem] bg-[#121212] border border-white/10 p-7 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <ShieldCheck className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
                <span>50/50 Milestone Protection</span>
              </div>
              <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed font-light">
                50% deposit to initiate architecture &amp; design. The remaining 50% is only payable after full private staging preview and your final approval prior to live deployment.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Check className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
                <span>UK &amp; EU Invoicing &amp; Rails</span>
              </div>
              <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed font-light">
                Itemised commercial invoices. Payments processed seamlessly via Stripe Secure Card, Wise Multi-Currency, UK Faster Payments, and SEPA Bank Wire.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Sparkles className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
                <span>Dedicated Revision Support</span>
              </div>
              <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed font-light">
                We iterate on staging with you until you approve performance, UX, and conversion flow. Zero monthly retainers or hidden lock-ins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
