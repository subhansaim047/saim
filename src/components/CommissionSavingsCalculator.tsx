"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

interface CommissionSavingsCalculatorProps {
  className?: string;
}

const PRESETS = [
  { label: "Fish & Chips", amount: 6000 },
  { label: "Pizza & Kebab", amount: 10000 },
  { label: "Curry House", amount: 16000 },
  { label: "High Volume", amount: 25000 },
];

export const CommissionSavingsCalculator: React.FC<CommissionSavingsCalculatorProps> = ({
  className = "",
}) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(10000);
  const [commissionRate, setCommissionRate] = useState<number>(30);

  const minRevenue = 2000;
  const maxRevenue = 35000;
  const sliderPercentage = Math.min(
    100,
    Math.max(0, ((monthlyRevenue - minRevenue) / (maxRevenue - minRevenue)) * 100)
  );

  const stats = useMemo(() => {
    const monthlyLoss = (monthlyRevenue * commissionRate) / 100;
    const annualLoss = monthlyLoss * 12;
    const threeYearLoss = monthlyLoss * 36;
    const dailyLoss = monthlyLoss / 30;
    const daysToPayback = dailyLoss > 0 ? Math.ceil(250 / dailyLoss) : 1;
    const threeYearNetSavings = threeYearLoss - 250;

    return {
      monthlyLoss: Math.round(monthlyLoss),
      annualLoss: Math.round(annualLoss),
      threeYearLoss: Math.round(threeYearLoss),
      daysToPayback,
      threeYearNetSavings: Math.round(threeYearNetSavings),
    };
  }, [monthlyRevenue, commissionRate]);

  const whatsappMessage = encodeURIComponent(
    `Hi Saim, I ran your savings simulator with £${monthlyRevenue.toLocaleString()}/mo orders. At ${commissionRate}%, I am losing ~£${stats.annualLoss.toLocaleString()} every year to Just Eat/Deliveroo. I'd like to get started with your £250 direct takeaway ordering website.`
  );

  return (
    <div
      id="commission-calculator"
      data-gsap-reveal=""
      className={cn(
        "relative max-w-[1168px] mx-auto bg-[#0D0D0D] border border-[#222222] text-white",
        className
      )}
    >
      <div className="p-6 sm:p-10 lg:p-12">
        {/* HEADER BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-8 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.05] border border-white/10 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#BAFF00] animate-pulse" />
              <span className="text-[11px] font-mono-tech tracking-[0.2em] uppercase text-[#BAFF00]">
                UK Takeaway ROI Simulator
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.04em] leading-[1.06] text-white">
              Stop Bleeding 30% Commission.{" "}
              <span className="text-[#939393]">Keep 100% Direct.</span>
            </h2>
            <p className="mt-2.5 text-[14px] text-[#939393] leading-[1.6] max-w-2xl">
              See how much revenue your takeaway forfeits to third-party delivery apps every month, and how fast a bespoke £250 Next.js direct ordering website pays for itself.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start lg:self-center px-4 py-2 bg-[#BAFF00] text-[#0D0D0D] text-xs font-mono-tech font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#0D0D0D]" />
            <span>SAIM DEV · 0% COMMISSION</span>
          </div>
        </div>

        {/* MAIN INTERACTIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: CONTROLS & SLIDERS (Col 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#939393]">
                  Quick Select Typical Venue
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setMonthlyRevenue(p.amount)}
                    className={cn(
                      "px-3 py-2.5 text-xs font-medium transition-all cursor-pointer border text-center truncate",
                      monthlyRevenue === p.amount
                        ? "bg-[#BAFF00] text-[#0D0D0D] border-[#BAFF00] font-semibold"
                        : "bg-[#141414] border-white/10 text-white/75 hover:text-white hover:border-white/30"
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Tile */}
            <div className="p-6 bg-[#141414] border border-white/10 flex flex-col justify-between gap-4">
              <div className="flex items-baseline justify-between gap-3">
                <label
                  htmlFor="revenue-range-input"
                  className="text-xs font-mono-tech uppercase tracking-wider text-[#939393]"
                >
                  Monthly Delivery Orders
                </label>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] text-white font-mono-tech">
                    £{monthlyRevenue.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#939393] font-mono-tech">/ mo</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <input
                  id="revenue-range-input"
                  type="range"
                  min={minRevenue}
                  max={maxRevenue}
                  step={500}
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  aria-label="Monthly Delivery Revenue"
                  className="sybiosme-slider"
                  style={{
                    background: `linear-gradient(to right, #BAFF00 ${sliderPercentage}%, #262626 ${sliderPercentage}%)`,
                  }}
                />
                <div className="flex justify-between text-[11px] text-[#939393] font-mono-tech">
                  <span>£2,000 / mo</span>
                  <span>£18,000 / mo</span>
                  <span>£35,000+ / mo</span>
                </div>
              </div>
            </div>

            {/* Commission Rate Selector */}
            <div className="p-6 bg-[#141414] border border-white/10 flex flex-col justify-between gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#939393]">
                  Aggregator Fee Structure
                </span>
                <span className="shrink-0 whitespace-nowrap text-xs font-mono-tech font-semibold text-[#BAFF00] bg-white/[0.06] border border-white/15 px-2.5 py-0.5">
                  {commissionRate}% Platform Cut
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 bg-black p-1 border border-white/10">
                {[
                  { label: "Just Eat (28%)", rate: 28 },
                  { label: "Deliveroo (30%)", rate: 30 },
                  { label: "Uber Eats (34%)", rate: 34 },
                ].map((tier) => (
                  <button
                    key={tier.rate}
                    type="button"
                    onClick={() => setCommissionRate(tier.rate)}
                    className={cn(
                      "py-2 px-2 text-xs font-medium transition-all cursor-pointer text-center whitespace-nowrap",
                      commissionRate === tier.rate
                        ? "bg-white text-[#0D0D0D] font-semibold"
                        : "text-[#939393] hover:text-white"
                    )}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              <p className="text-[12px] text-[#939393] leading-relaxed">
                UK food businesses pay 28% to 34% per order plus delivery surcharge markups and VAT.
              </p>
            </div>

            {/* Included Checklist */}
            <div className="p-6 bg-[#111111] border border-white/10">
              <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#939393] block mb-3">
                Included with Saim Dev £250 System
              </span>
              <ul className="flex flex-col gap-2.5">
                {[
                  "100% direct customer database ownership (SMS & phone numbers)",
                  "Interactive Natasha's Law 14-allergen filter matrix",
                  "Direct kitchen order dispatch to WhatsApp & optional receipt printer",
                  "Sub-second Next.js speed with zero monthly percentage cuts",
                ].map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-2.5 text-[13px] text-white/80 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: RESULTS TILES (Col 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-[#141414] border border-white/10 flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#939393]">
                    Aggregators Cut
                  </span>
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] text-red-400 font-mono-tech leading-none">
                    -£{stats.monthlyLoss.toLocaleString()}
                  </div>
                  <div className="text-xs text-[#939393] mt-1.5">
                    lost to commission every month
                  </div>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3 text-xs text-[#939393] flex justify-between font-mono-tech">
                  <span>Yearly Loss:</span>
                  <span className="text-red-400 font-semibold">-£{stats.annualLoss.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-6 bg-[#141414] border border-[#BAFF00]/40 flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00]">
                    Saim Dev Direct
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#BAFF00] animate-pulse" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] text-[#BAFF00] font-mono-tech leading-none">
                    £0 / mo
                  </div>
                  <div className="text-xs text-[#939393] mt-1.5">
                    zero monthly commission cuts
                  </div>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3 text-xs text-[#939393] flex justify-between font-mono-tech">
                  <span>Build Investment:</span>
                  <span className="text-white font-semibold">£250 one-off</span>
                </div>
              </div>
            </div>

            <div className="rh-edge-orbit-card is-lime p-8 sm:p-9 bg-black border border-white/15 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#BAFF00] text-[#0D0D0D] px-3 py-1 text-[11px] font-mono-tech font-semibold uppercase tracking-wider">
                    Payback Horizon
                  </span>
                  <span className="text-xs font-mono-tech text-[#BAFF00] border border-[#BAFF00]/30 px-3 py-1">
                    Pays for itself in ~{stats.daysToPayback} days
                  </span>
                </div>

                <div className="space-y-1.5 mt-4">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-[#939393] block">
                    Projected 3-Year Retained Capital
                  </span>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.05em] text-white leading-none font-mono-tech">
                    +£{stats.threeYearNetSavings.toLocaleString()}
                  </div>
                </div>

                <p className="mt-4 text-[13px] text-[#939393] leading-relaxed">
                  At £{monthlyRevenue.toLocaleString()}/month in orders, launching your independent ordering website returns{" "}
                  <strong className="text-white font-medium">£{stats.annualLoss.toLocaleString()}</strong> directly back into your kitchen every year.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <a
                  href={`https://wa.me/923196526604?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rh-btn-pill w-full bg-[#BAFF00] text-[#0D0D0D] px-6 py-4 text-[14px] font-semibold tracking-[-0.02em] flex items-center justify-between group"
                >
                  <span>
                    Switch to Direct Ordering — Save £{stats.annualLoss.toLocaleString()}/yr
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="text-center mt-3 text-[11px] text-[#939393] font-mono-tech">
                  Fixed £250 one-off fee · 100% code ownership · Zero monthly lock-in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
