"use client";

import React, { useState, useMemo } from "react";
import { Flame, ShieldCheck, Check } from "lucide-react";
import { cn } from "../lib/utils";

interface CommissionSavingsCalculatorProps {
  className?: string;
}

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

const SybiosmeArrowSvg = () => (
  <svg
    viewBox="0 0 17 15"
    className="w-3.5 h-3.5 fill-current"
    aria-hidden="true"
  >
    <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
  </svg>
);

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
      className={cn(
        "relative max-w-6xl mx-auto rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-2 sm:p-3 shadow-[0_24px_80px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {/* Inner Sybiosme Frame */}
      <div className="relative rounded-[calc(2.5rem-0.75rem)] bg-[#121212] p-6 sm:p-10 lg:p-12 border border-white/5 overflow-hidden">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF4A1C]/[0.08] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

        {/* HEADER BAR */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-8 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-3">
              <span className="section-dot animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                UK Takeaway ROI Simulator
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white"
              style={{ letterSpacing: "-0.04em" }}
            >
              Stop Bleeding 30% Commission.{" "}
              <span className="text-white/40">Keep 100% Direct.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-white/65 font-light leading-relaxed max-w-2xl">
              See how much revenue your takeaway forfeits to third-party delivery apps every month, and how fast a bespoke £250 Next.js direct ordering website pays for itself.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start lg:self-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono shadow-lg shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Saim Dev: <strong>0% Commission</strong></span>
          </div>
        </div>

        {/* MAIN INTERACTIVE GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: CONTROLS & SLIDERS (Col 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Quick Presets Strip */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">
                  Quick Select Typical Venue:
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setMonthlyRevenue(p.amount)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer border text-center truncate",
                      monthlyRevenue === p.amount
                        ? "bg-white text-black border-white shadow-md font-semibold"
                        : "bg-white/[0.04] border-white/10 text-white/70 hover:text-white hover:bg-white/[0.08]"
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Tile */}
            <div className="p-6 rounded-[1.75rem] bg-[#161616] border border-white/10 flex flex-col justify-between gap-4">
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="revenue-range-input"
                  className="text-xs font-mono uppercase tracking-wider text-white/70"
                >
                  Monthly Delivery Orders
                </label>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-medium tracking-tight text-white font-mono">
                    £{monthlyRevenue.toLocaleString()}
                  </span>
                  <span className="text-xs text-white/45 font-mono">/ mo</span>
                </div>
              </div>

              {/* Range Input with Filled Gradient */}
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
                    background: `linear-gradient(to right, #FF4A1C ${sliderPercentage}%, #232323 ${sliderPercentage}%)`,
                  }}
                />
                <div className="flex justify-between text-[11px] text-white/40 font-mono">
                  <span>£2,000 / mo</span>
                  <span>£18,000 / mo</span>
                  <span>£35,000+ / mo</span>
                </div>
              </div>
            </div>

            {/* Commission Rate Selector */}
            <div className="p-6 rounded-[1.75rem] bg-[#161616] border border-white/10 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-white/70">
                  Aggregator Fee Structure
                </span>
                <span className="text-xs font-mono font-bold text-rose-300 bg-rose-500/20 border border-rose-500/30 px-2.5 py-0.5 rounded-full">
                  {commissionRate}% Platform Cut
                </span>
              </div>

              {/* Floating Pill Island */}
              <div className="inline-flex p-1 bg-[#101010] border border-white/10 rounded-full backdrop-blur-md">
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
                      "flex-1 py-1.5 px-3 text-xs font-medium rounded-full transition-all cursor-pointer text-center whitespace-nowrap",
                      commissionRate === tier.rate
                        ? "bg-white text-black font-semibold shadow-md"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-white/45 font-light leading-relaxed">
                UK food businesses pay an average of 28% to 34% per order plus customer delivery surcharge markups and VAT.
              </p>
            </div>

            {/* Direct Features Checklist (Exact Pricing Section Styling) */}
            <div className="p-6 rounded-[1.75rem] bg-white/[0.02] border border-white/5">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50 block mb-3">
                Included with Saim Dev £250 System:
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
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-white/80 leading-relaxed"
                  >
                    <span className="mt-0.5">
                      <SybiosmeCheckIcon />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: LUXURY RESULTS TILES (Col 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Split Top Comparison Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Aggregator Leakage Tile */}
              <div className="relative overflow-hidden rounded-[1.75rem] p-6 bg-gradient-to-br from-[#241215] via-[#1a0e10] to-[#120a0c] border border-rose-500/35 shadow-xl flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-rose-300">
                    Aggregators
                  </span>
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-medium tracking-tight text-rose-400 font-mono leading-none">
                    -£{stats.monthlyLoss.toLocaleString()}
                  </div>
                  <div className="text-xs text-rose-200/70 mt-1 font-light">
                    lost to commission every month
                  </div>
                </div>
                <div className="border-t border-rose-500/20 pt-2.5 mt-3 text-xs text-white/60 flex justify-between font-mono">
                  <span>Yearly Loss:</span>
                  <span className="text-rose-300 font-bold">-£{stats.annualLoss.toLocaleString()}</span>
                </div>
              </div>

              {/* Saim Dev Direct Tile */}
              <div className="relative overflow-hidden rounded-[1.75rem] p-6 bg-gradient-to-br from-[#0e2218] via-[#0a1811] to-[#08120d] border border-emerald-500/35 shadow-xl flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300">
                    Saim Dev Direct
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-medium tracking-tight text-emerald-400 font-mono leading-none">
                    £0 / mo
                  </div>
                  <div className="text-xs text-emerald-200/70 mt-1 font-light">
                    zero monthly commission cuts
                  </div>
                </div>
                <div className="border-t border-emerald-500/20 pt-2.5 mt-3 text-xs text-white/60 flex justify-between font-mono">
                  <span>Build Investment:</span>
                  <span className="text-emerald-300 font-bold">£250 one-off</span>
                </div>
              </div>
            </div>

            {/* Showstopper 3-Year Extra Profit Card (Exact Featured Pricing Style) */}
            <div className="relative overflow-hidden rounded-[2rem] p-7 sm:p-9 bg-gradient-to-br from-[#241712] via-[#1a1210] to-[#12100f] border-2 border-[#FF4A1C]/50 shadow-[0_16px_56px_rgba(255,74,28,0.20)] flex flex-col justify-between">
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#FF4A1C]/25 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FF4A1C] px-3.5 py-1 text-xs font-semibold text-white shadow-lg">
                    <Flame className="w-3.5 h-3.5 text-white animate-pulse" />
                    <span>Calculated Payback Horizon</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full">
                    Pays for itself in ~{stats.daysToPayback} days
                  </span>
                </div>

                <div className="space-y-1.5 mt-4">
                  <span className="text-xs sm:text-sm text-white/70 font-light block">
                    Projected 3-Year Extra Cash In Your Bank:
                  </span>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-none font-mono">
                    +£{stats.threeYearNetSavings.toLocaleString()}
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-[13px] text-white/60 font-light leading-relaxed">
                  At £{monthlyRevenue.toLocaleString()}/month in orders, launching your independent ordering website returns{" "}
                  <strong className="text-white font-medium">£{stats.annualLoss.toLocaleString()}</strong> back into your business every single year.
                </p>
              </div>

              {/* Sybiosme Magnetic Action Button */}
              <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/923196526604?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sybiosme-action-btn w-full bg-white hover:bg-neutral-100 text-black shadow-2xl group active:scale-[0.99]"
                >
                  <span className="text-sm font-semibold tracking-tight">
                    Switch to Direct Ordering — Save £{stats.annualLoss.toLocaleString()}/yr
                  </span>
                  <div className="btn-arrow bg-black text-white group-hover:scale-110">
                    <SybiosmeArrowSvg />
                  </div>
                </a>
                <div className="text-center mt-3 text-[11px] text-white/45 font-mono">
                  Fixed £250 one-off fee · 100% code ownership · No monthly agency lock-in
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
