"use client";
import { useState } from "react";
import { Check, X, ChevronUp, ChevronDown, ShieldCheck, Sparkles } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { SpotlightBorder } from "./SpotlightBorder";
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
    <SpotlightBorder
      radius="2xl"
      size={460}
      intensity={0.5}
      className="relative h-full p-2 sm:p-3"
    >
      <div
        className="relative flex h-full flex-col rounded-2xl border border-white/10 p-7 sm:p-8"
        style={{ backgroundColor: plan.bg }}
      >
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/30 bg-primary px-3.5 py-1 text-xs font-bold text-black shadow-lg flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-black" />
            <span>{plan.badge}</span>
          </div>
        )}

        <FadeUp delay={0}>
          <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">
            {plan.name}
          </div>
        </FadeUp>
        <div className="mt-3 border-t border-white/10" />

        <FadeUp delay={0.1}>
          <div className="mt-8 flex items-baseline gap-2">
            <span className="text-3xl sm:text-[2.5rem] leading-none font-bold tracking-tight text-foreground text-white">
              {price}
            </span>
            <span className="text-xs text-foreground/50 uppercase font-mono">
              / one-time
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-3 text-sm leading-relaxed text-foreground/60 min-h-[42px]">
            {plan.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-6">
            {plan.featured ? (
              <PrimaryButton
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="w-full justify-center"
              >
                Order on WhatsApp
              </PrimaryButton>
            ) : (
              <SecondaryButton
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="w-full justify-center hover:bg-white hover:text-black"
              >
                Get Started
              </SecondaryButton>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <ul className="mt-6 flex flex-1 flex-col gap-1">
            {visibleFeatures.map((f, i) => (
              <li
                key={f.text}
                className={cn(
                  "flex items-center gap-3 py-2.5 text-xs sm:text-sm transition-all duration-300",
                  i !== 0 && "border-t border-white/10",
                  f.included ? "text-foreground/85" : "text-foreground/40"
                )}
              >
                <span
                  className={cn(
                    "flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 items-center justify-center rounded-full border",
                    f.included
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-white/10 bg-transparent text-foreground/40"
                  )}
                >
                  {f.included ? (
                    <Check className="w-3 h-3 text-primary" />
                  ) : (
                    <X className="w-3 h-3 text-foreground/50" />
                  )}
                </span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>

          {remainingCount > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center justify-center gap-1.5 text-xs text-foreground/70 hover:text-white font-medium transition-colors cursor-pointer py-2.5 w-full border-t border-white/10"
            >
              <span>
                {expanded ? "Show Less" : `View More (+${remainingCount} features)`}
              </span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </FadeUp>
      </div>
    </SpotlightBorder>
  );
};

export const PricingSection = () => {
  const [currency, setCurrency] = useState<Currency>("GBP");

  return (
    <section id="pricing" className="relative w-full bg-background py-16 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-10 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3.5 py-1 text-xs text-foreground/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>TRANSPARENT VALUE PRICING</span>
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.02em] leading-[1.05] text-white">
                Clear pricing plans.
                <br />
                <span className="text-white/60">No retainers. No surprises.</span>
              </h2>
            </FadeUp>
          </div>

          {/* CURRENCY TOGGLE */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto">
              <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                Select Currency (UK / EU / Global):
              </span>
              <div className="inline-flex p-1 bg-white/5 border border-white/15 rounded-full backdrop-blur">
                <button
                  type="button"
                  onClick={() => setCurrency("GBP")}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer",
                    currency === "GBP"
                      ? "bg-primary text-black shadow-md"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  🇬🇧 £ GBP (UK)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("EUR")}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer",
                    currency === "EUR"
                      ? "bg-primary text-black shadow-md"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  🇪🇺 € EUR (Europe)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer",
                    currency === "USD"
                      ? "bg-primary text-black shadow-md"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  🌐 $ USD (Global)
                </button>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* TRUST BANNER */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/75">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span>UK & EU Invoicing Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Zero Monthly Retainers</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Optimised Core Web Vitals</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Fast 5–10 Day Delivery</span>
          </div>
        </div>

        {/* CARDS */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 items-start">
          {PLANS.map((p) => (
            <PricingCard key={p.name} plan={p} currency={currency} />
          ))}
        </div>

        {/* PAYMENT TERMS & PEACE OF MIND */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                <span>50/50 Milestone Protection</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                50% deposit to initiate architecture & design. The remaining 50% is only payable after full private staging preview and your final approval prior to live deployment.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>UK & EU Invoicing & Rails</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Itemised commercial invoices. Payments processed seamlessly via Stripe Secure Card, Wise Multi-Currency, UK Faster Payments, and SEPA Bank Wire.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Dedicated Revision Support</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                We iterate on staging with you until you approve performance, UX, and conversion flow. Zero monthly retainers or hidden lock-ins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
