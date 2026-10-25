"use client";
import { useState } from "react";
import { Check, X, ChevronUp, ChevronDown, ShieldCheck, Sparkles } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { cn } from "../lib/utils";
import { PLANS, type Currency, type Plan } from "../../content/plans";

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
    <div
      className={cn(
        "bento-card-sybiosme relative flex h-full flex-col p-7 sm:p-8 transition-all duration-300 shadow-2xl group",
        plan.featured
          ? "border-[#FF4A1C]/50 hover:border-[#FF4A1C] shadow-[0_12px_48px_rgba(255,74,28,0.12)] bg-[#141414]"
          : "border-white/10 hover:border-white/20 bg-[#121212]"
      )}
    >
      {/* Featured Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FF4A1C] px-4 py-1 text-xs font-semibold text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>{plan.badge}</span>
        </div>
      )}

      {/* Plan Header */}
      <FadeUp delay={0}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-white/50">
            {plan.name}
          </span>
          {plan.featured && (
            <span className="section-dot" />
          )}
        </div>
      </FadeUp>
      
      <div className="border-t border-white/5 my-2" />

      {/* Price */}
      <FadeUp delay={0.1}>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl sm:text-[2.75rem] leading-none font-bold tracking-tight text-white">
            {price}
          </span>
          <span className="text-xs text-white/50 uppercase font-mono tracking-wider">
            / one-time
          </span>
        </div>
      </FadeUp>

      {/* Description */}
      <FadeUp delay={0.2}>
        <p className="mt-3.5 text-sm leading-relaxed text-white/65 min-h-[44px] font-light">
          {plan.description}
        </p>
      </FadeUp>

      {/* CTA Button */}
      <FadeUp delay={0.3}>
        <div className="mt-6">
          {plan.featured ? (
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-neutral-100 text-black font-semibold rounded-full py-3 px-6 flex items-center justify-center gap-2 transition-all duration-300 shadow-xl active:scale-[0.98] text-sm tracking-tight cursor-pointer"
            >
              <span>Order on WhatsApp</span>
            </a>
          ) : (
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/[0.06] hover:bg-white/15 text-white border border-white/10 hover:border-white/25 rounded-full py-3 px-6 flex items-center justify-center gap-2 transition-all duration-300 text-sm tracking-tight cursor-pointer"
            >
              <span>Get Started</span>
            </a>
          )}
        </div>
      </FadeUp>

      {/* Feature List */}
      <FadeUp delay={0.4}>
        <ul className="mt-8 flex flex-1 flex-col gap-1">
          {visibleFeatures.map((f, i) => (
            <li
              key={f.text}
              className={cn(
                "flex items-center gap-3 py-2.5 text-xs sm:text-sm transition-all duration-300",
                i !== 0 && "border-t border-white/5",
                f.included ? "text-white/85" : "text-white/35"
              )}
            >
              <span
                className={cn(
                  "flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 items-center justify-center rounded-full border",
                  f.included
                    ? "border-[#FF4A1C]/40 bg-[#FF4A1C]/15 text-[#FF4A1C]"
                    : "border-white/10 bg-transparent text-white/30"
                )}
              >
                {f.included ? (
                  <Check className="w-3 h-3 text-[#FF4A1C]" />
                ) : (
                  <X className="w-3 h-3 text-white/30" />
                )}
              </span>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>

        {remainingCount > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center justify-center gap-1.5 text-xs text-white/70 hover:text-white font-medium transition-colors cursor-pointer py-2.5 w-full border-t border-white/10"
          >
            <span>
              {expanded ? "Show Less" : `View More (+${remainingCount} features)`}
            </span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-[#FF4A1C]" />}
          </button>
        )}
      </FadeUp>
    </div>
  );
};

export const PricingSection = () => {
  const [currency, setCurrency] = useState<Currency>("GBP");

  return (
    <section id="pricing" className="relative w-full bg-[#0A0A0A] py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#FF4A1C]/[0.03] rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="mb-12 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
                <span className="section-dot" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                  Subscriptions • Fixed Pricing
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.08] text-white" style={{ letterSpacing: "-0.04em" }}>
                Choose. <span className="text-white/40">Your plan.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/65 font-light">
                No monthly retainers. No hidden fees. 100% custom engineering.
              </p>
            </FadeUp>
          </div>

          {/* CURRENCY TOGGLE */}
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
        <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-[1.5rem] bg-[#121212] border border-white/10 text-xs text-white/80 shadow-xl">
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

        {/* CARDS */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {PLANS.map((p) => (
            <PricingCard key={p.name} plan={p} currency={currency} />
          ))}
        </div>

        {/* PAYMENT TERMS & PEACE OF MIND — Double-Bezel Frame */}
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
