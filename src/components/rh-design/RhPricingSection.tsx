"use client";

import React, { useState } from "react";
import { Check, ArrowUpRight, ShieldCheck, Globe, Smartphone, Layers, Sparkles } from "lucide-react";

type Currency = "GBP" | "EUR" | "USD";

const SPRINT_TIERS = [
  {
    id: "landing",
    name: "Takeaway / CRO",
    prices: { GBP: "£250", EUR: "€295", USD: "$320" },
    timeline: "3–5 days",
    desc: "1-Page sub-400ms conversion engine with WhatsApp dispatch."
  },
  {
    id: "business",
    name: "Bespoke Website",
    prices: { GBP: "£450", EUR: "€530", USD: "$580" },
    timeline: "5–8 days",
    desc: "Up to 8 custom Next.js 16 pages replacing bloated WordPress."
  },
  {
    id: "ecommerce",
    name: "Headless Store",
    prices: { GBP: "£750", EUR: "€880", USD: "$980" },
    timeline: "7–12 days",
    desc: "Sub-second product catalog with zero monthly app fees."
  }
];

export const RhPricingSection: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>("GBP");
  const [selectedSprint, setSelectedSprint] = useState<number>(1); // Default to Bespoke Website

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#f4f5f6] text-[#09090b] border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header - rh.design exact pricing typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 mb-3 font-semibold">
              P R I C I N G
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#09090b] max-w-2xl leading-[1.12]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Transparent pricing{" "}
              <span className="text-[#9ca3af]">No surprises.</span>
            </h2>
          </div>

          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-black/10 shadow-xs">
            {(["GBP", "EUR", "USD"] as Currency[]).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  currency === curr
                    ? "bg-[#09090b] text-white shadow-sm"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {curr === "GBP" ? "£ GBP" : curr === "EUR" ? "€ EUR" : "$ USD"}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Tone Pricing Cards - rh.design exact side-by-side black & white cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Obsidian Dark Card (Fixed-Scope Sprint) */}
          <div className="rounded-3xl bg-[#09090b] text-white p-8 sm:p-12 border border-white/10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Fixed-Scope Sprint
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#b5f900] text-black text-[11px] font-mono font-bold">
                  $0 Upfront Guarantee
                </span>
              </div>

              <p className="text-sm text-gray-400 font-light mb-8">
                One senior digital engineering team. Design and build in one. Zero handoff.
              </p>

              {/* Sprint Tier Selector Switch */}
              <div className="grid grid-cols-3 gap-2 p-1 rounded-2xl bg-white/5 border border-white/10 mb-8">
                {SPRINT_TIERS.map((tier, idx) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedSprint(idx)}
                    className={`py-2 px-2 text-center rounded-xl text-xs font-mono transition-all cursor-pointer ${
                      selectedSprint === idx
                        ? "bg-[#b5f900] text-black font-bold shadow-sm"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tier.name}
                  </button>
                ))}
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl sm:text-6xl font-medium tracking-tight font-mono text-white">
                  {SPRINT_TIERS[selectedSprint].prices[currency]}
                </span>
                <span className="text-sm text-gray-400 font-mono">
                  fixed • {SPRINT_TIERS[selectedSprint].timeline}
                </span>
              </div>

              {/* Feature Checklist */}
              <div className="flex flex-col gap-3.5 mb-10 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 stroke-[2.5]" />
                  <span><strong>$0 Upfront Deposit:</strong> Pay only when 100% satisfied</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 stroke-[2.5]" />
                  <span>Bespoke Next.js 16 App Router architecture</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 stroke-[2.5]" />
                  <span>Sub-400ms speed guaranteed (100/100 Core Web Vitals)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 stroke-[2.5]" />
                  <span>Full source code ownership (GitHub transfer)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 stroke-[2.5]" />
                  <span>Zero monthly retainers or platform fees</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={`https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20the%20${SPRINT_TIERS[selectedSprint].name}%20sprint%20with%20the%20$0%20upfront%20offer`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#b5f900] hover:bg-white text-black font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 shadow-lg active:scale-95"
              >
                <span>Start With $0 Upfront Deposit</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Clean White Card (1:1 Pixel-Perfect Clone) */}
          <div className="rounded-3xl bg-white text-[#09090b] p-8 sm:p-12 border border-black/10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#09090b]">
                  1:1 Website Clone
                </h3>
                <span className="px-3 py-1 rounded-full bg-black/5 text-gray-700 text-[11px] font-mono font-medium">
                  Shopify &bull; Webflow &bull; WP
                </span>
              </div>

              <p className="text-sm text-gray-600 font-light mb-8">
                Exact pixel-perfect reconstruction of any existing website or store into clean Next.js 16.
              </p>

              {/* Price Display */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl sm:text-6xl font-medium tracking-tight font-mono text-[#09090b]">
                  {currency === "GBP" ? "£1,450" : currency === "EUR" ? "€1,690" : "$1,900"}
                </span>
                <span className="text-sm text-gray-500 font-mono">
                  flat fee &bull; starts from
                </span>
              </div>

              {/* Feature Checklist with Minimal Icons */}
              <div className="flex flex-col gap-4 mb-10 pt-6 border-t border-black/10">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Globe className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>100% 1:1 layout, responsive typography, and animation match</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Layers className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>Zero monthly Shopify app fees ($30&ndash;$300/mo saved)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Smartphone className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>Sub-second mobile speed ranking higher on Google</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <ShieldCheck className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>Complete source code delivered with clean documentation</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20a%201:1%20website%20clone%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#09090b] hover:bg-black text-white font-medium text-sm transition-all text-center flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
