"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown, ShieldCheck, Flame, Check, BadgeCheck } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { cn } from "../lib/utils";
import { PLANS, type Currency, type Plan } from "../../content/plans";
import { SoapBubbleMaterial, SoapBubbleSurface } from "./reactdrops/soap-bubble";
import { ReactDropButton, LOGO_MATERIAL_DEFAULTS } from "./ReactDropButton";

const SybiosmeCheckIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-[#2F6CE1] flex-shrink-0"
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
          ? "border-[#2F6CE1]/55 hover:border-[#2F6CE1] shadow-[0_18px_50px_-20px_rgba(47,108,225,0.24)]"
          : "border-[#020612]/[0.09] hover:border-[#2F6CE1]/35 shadow-[0_14px_40px_-24px_rgba(2,6,18,0.10)]"
      )}
    >
      {/* Featured Pill Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#2F6CE1] px-4 py-1 text-xs font-bold text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap z-20">
          <Flame className="w-3.5 h-3.5 text-white animate-pulse" />
          <span>{plan.badge}</span>
        </div>
      )}

      {/* Top Tile */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] border",
          plan.featured
            ? "bg-gradient-to-br from-[#EFF5FF] via-[#DCEAFE] to-[#F8FAFF] border-[#2F6CE1]/25"
            : plan.id === "starter"
            ? "bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#FFFFFF] border-[#020612]/[0.07]"
            : "bg-gradient-to-br from-[#F8FAFC] via-[#F4F7FC] to-[#FFFFFF] border-[#020612]/[0.07]"
        )}
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#020612]">
              {plan.name}
            </h3>
            {plan.featured && <span className="section-dot" />}
          </div>
          <p className="text-xs sm:text-sm text-[#020612]/70 font-normal leading-relaxed min-h-[40px]">
            {plan.description}
          </p>
        </div>

        {/* Price Row */}
        <div className="relative z-10 mt-6 flex items-baseline gap-2">
          <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#020612] leading-none">
            {price}
          </span>
          <span className="text-xs text-[#020612]/55 uppercase font-mono tracking-wider">
            / one-off
          </span>
        </div>
      </div>

      {/* Plan Details & Included Features */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#020612]/55 block mb-4">
            Included:
          </span>

          <ul className="flex flex-col gap-3">
            {visibleFeatures.map((f) => (
              <li
                key={f.text}
                className={cn(
                  "flex items-start gap-3 text-xs sm:text-sm font-normal leading-relaxed transition-all duration-300",
                  f.included ? "text-[#020612]/85" : "text-[#020612]/40"
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
            <div className="mt-4 pt-3 border-t border-[#020612]/[0.08]">
              <ReactDropButton
                variant="glass"
                radius={12}
                onClick={() => setExpanded(!expanded)}
                className="w-full h-[38px] !rounded-xl !text-xs font-bold"
                innerClassName="gap-1.5"
              >
                <span>
                  {expanded ? "Show Less" : `View More (+${remainingCount} features)`}
                </span>
                {expanded ? (
                  <ChevronUp className="w-4 h-4 text-[#2F6CE1]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#2F6CE1]" />
                )}
              </ReactDropButton>
            </div>
          )}
        </div>

        {/* CTA Button — ReactDrops Liquid-Bubble Primary / Obsidian */}
        <div className="mt-8 pt-4 border-t border-[#020612]/[0.07]">
          {plan.featured ? (
            <ReactDropButton
              variant="primary"
              href={orderUrl}
              external
              ariaLabel="Order on WhatsApp"
              className="w-full h-[52px]"
              innerClassName="w-full justify-between px-2 pl-5 text-sm font-bold text-white"
            >
              <span>Order on WhatsApp</span>
              <span className="w-9 h-9 rounded-full bg-white text-[#2F6CE1] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                <svg viewBox="0 0 17 15" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
                </svg>
              </span>
            </ReactDropButton>
          ) : (
            <ReactDropButton
              variant="dark"
              href={orderUrl}
              external
              ariaLabel={`Get Started — ${plan.name}`}
              className="w-full h-[52px]"
              innerClassName="w-full justify-between px-2 pl-5 text-sm font-semibold text-white"
            >
              <span className="tracking-tight truncate">
                {`Get Started — ${plan.name}`}
              </span>
              <span className="w-9 h-9 rounded-full bg-[#2F6CE1] text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                <svg
                  viewBox="0 0 17 15"
                  className="w-3.5 h-3.5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
                </svg>
              </span>
            </ReactDropButton>
          )}
        </div>
      </div>
    </article>
  );
};

export const PricingSection = () => {
  const [currency, setCurrency] = useState<Currency>("GBP");

  return (
    <SoapBubbleMaterial {...LOGO_MATERIAL_DEFAULTS}>
      <section
        id="pricing"
        className="relative w-full bg-white py-20 sm:py-28 md:py-36 border-t border-[#020612]/[0.07] overflow-hidden"
      >
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8 relative z-10">
          {/* HEADER */}
          <div className="mb-14 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <FadeUp>
                <SoapBubbleSurface
                  as="div"
                  interactive={0.2}
                  radius={9999}
                  className="saim-bubble-pill inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 border border-[#2F6CE1]/20 bg-[#EFF5FF]"
                >
                  <span className="section-dot" />
                  <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#020612]">
                    Transparent Fixed Packages
                  </span>
                </SoapBubbleSurface>
              </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#020612]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Choose. <span className="text-[#2F6CE1]">Your plan.</span>
              </h2>
              <p className="mt-3.5 text-sm sm:text-base text-[#020612]/70 font-normal leading-relaxed">
                No monthly retainers. No hidden fees. 100% custom Next.js engineering.
              </p>
            </FadeUp>
          </div>

          {/* CURRENCY TOGGLE — ReactDrops Interactive Pills */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto">
              <span className="text-[11px] font-mono font-semibold text-[#020612]/60 uppercase tracking-wider">
                Select Currency:
              </span>
              <SoapBubbleSurface
                as="div"
                interactive={0.22}
                radius={9999}
                className="saim-bubble-nav inline-flex p-1.5 gap-1.5 shadow-sm border border-[#020612]/10 bg-[#F8FAFC] max-w-full overflow-x-auto scrollbar-hide"
              >
                <ReactDropButton
                  variant="pill"
                  active={currency === "GBP"}
                  onClick={() => setCurrency("GBP")}
                  className="h-[34px] !min-h-[34px] !px-3.5 !text-[11px] sm:!text-xs whitespace-nowrap"
                >
                  £ GBP · UK
                </ReactDropButton>
                <ReactDropButton
                  variant="pill"
                  active={currency === "EUR"}
                  onClick={() => setCurrency("EUR")}
                  className="h-[34px] !min-h-[34px] !px-3.5 !text-[11px] sm:!text-xs whitespace-nowrap"
                >
                  € EUR · EU
                </ReactDropButton>
                <ReactDropButton
                  variant="pill"
                  active={currency === "USD"}
                  onClick={() => setCurrency("USD")}
                  className="h-[34px] !min-h-[34px] !px-3.5 !text-[11px] sm:!text-xs whitespace-nowrap"
                >
                  $ USD · Global
                </ReactDropButton>
              </SoapBubbleSurface>
            </div>
          </FadeUp>
        </div>

        {/* TRUST BANNER */}
        <div className="mb-14 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-[1.75rem] bg-[#F8FAFC] border border-[#020612]/[0.08] text-xs font-medium text-[#020612] shadow-sm">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
            <span>UK &amp; EU Invoicing Ready</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
            <span>Zero Monthly Retainers</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
            <span>Optimised Core Web Vitals</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
            <span>Fast 5–10 Day Delivery</span>
          </div>
        </div>

        {/* 4 PLAN CARDS GRID */}
        <div data-gsap-stagger className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PLANS.map((p) => (
            <PricingCard key={p.name} plan={p} currency={currency} />
          ))}
        </div>

        {/* PAYMENT TERMS & PEACE OF MIND */}
        <div className="mt-14 max-w-6xl mx-auto rounded-[2rem] bg-[#F8FAFC] border border-[#020612]/[0.08] p-7 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 font-heading text-[#020612] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
                <span>50/50 Milestone Protection</span>
              </div>
              <p className="text-[#020612]/70 text-xs sm:text-[13px] leading-relaxed font-normal">
                50% deposit to initiate architecture &amp; design. The remaining 50% is only payable after full private staging preview and your final approval prior to live deployment.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 font-heading text-[#020612] font-bold text-sm">
                <Check className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
                <span>UK &amp; EU Invoicing &amp; Rails</span>
              </div>
              <p className="text-[#020612]/70 text-xs sm:text-[13px] leading-relaxed font-normal">
                Itemised commercial invoices. Payments processed seamlessly via Stripe Secure Card, Wise Multi-Currency, UK Faster Payments, and SEPA Bank Wire.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 font-heading text-[#020612] font-bold text-sm">
                <BadgeCheck className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
                <span>Dedicated Revision Support</span>
              </div>
              <p className="text-[#020612]/70 text-xs sm:text-[13px] leading-relaxed font-normal">
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
