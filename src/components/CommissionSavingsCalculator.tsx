"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, Calculator, Sparkles, TrendingUp, ShieldAlert, Check } from "lucide-react";

interface CommissionSavingsCalculatorProps {
  className?: string;
  theme?: "dark" | "amber";
}

export const CommissionSavingsCalculator: React.FC<CommissionSavingsCalculatorProps> = ({
  className = "",
  theme = "amber",
}) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(10000);
  const [commissionRate, setCommissionRate] = useState<number>(30); // 30% Just Eat / Deliveroo average

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
    `Hi Saim, I used your calculator with £${monthlyRevenue.toLocaleString()} monthly orders. At ${commissionRate}%, I am losing ~£${stats.annualLoss.toLocaleString()} every year to Just Eat/Deliveroo. I'd like to get started with your £250 direct takeaway website.`
  );

  return (
    <div
      id="commission-calculator"
      className={`rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/90 to-neutral-950 p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden ${className}`}
    >
      {/* Subtle Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase font-bold tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Just Eat &amp; Deliveroo Commission Loss Calculator
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-1">
            See exactly how much revenue your takeaway forfeits to third-party portals every single month.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl text-xs text-white/80">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Saim Dev: <strong>0% Commission</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Revenue Slider */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="revenue-range" className="text-xs font-mono text-white/70 uppercase tracking-wider font-semibold">
                Your Monthly Online Orders Revenue
              </label>
              <span className="text-lg sm:text-xl font-mono font-extrabold text-amber-400">
                £{monthlyRevenue.toLocaleString()}
              </span>
            </div>

            <input
              id="revenue-range"
              type="range"
              min={2000}
              max={30000}
              step={500}
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              aria-label="Monthly Delivery Revenue Slider"
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />

            <div className="flex justify-between text-[11px] text-white/40 font-mono">
              <span>£2,000 / mo</span>
              <span>£15,000 / mo</span>
              <span>£30,000+ / mo</span>
            </div>
          </div>

          {/* Commission Rate Selector */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-white/70 uppercase tracking-wider font-semibold">
                Aggregator Commission Rate
              </span>
              <span className="text-sm font-mono font-bold text-white bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full">
                {commissionRate}% per order
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "25% (Base)", rate: 25 },
                { label: "30% (Standard)", rate: 30 },
                { label: "34% (Uber/Deliv)", rate: 34 },
              ].map((tier) => (
                <button
                  key={tier.rate}
                  type="button"
                  onClick={() => setCommissionRate(tier.rate)}
                  className={`py-2 px-3 rounded-xl text-xs font-mono transition-all border ${
                    commissionRate === tier.rate
                      ? "bg-rose-500/20 border-rose-500/60 text-white font-bold"
                      : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed">
              * Most UK takeaways on Just Eat, Deliveroo, and Uber Eats pay 28% to 34% plus VAT and delivery service markups.
            </p>
          </div>

          {/* Quick Takeaway Features Checklist */}
          <div className="p-5 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-2.5 text-xs text-white/75">
            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold mb-1">
              Included With Saim Dev £250 System:
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Full code ownership with zero recurring percentage fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Interactive Natasha&apos;s Law 14-allergen filter matrix</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Instant order dispatch to kitchen WhatsApp &amp; SMS</span>
            </div>
          </div>
        </div>

        {/* Results Live Display Column */}
        <div className="lg:col-span-6 space-y-4">
          {/* Comparison Split Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Aggregator Loss Card */}
            <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/40 space-y-2">
              <div className="text-[11px] font-mono uppercase text-rose-300 font-bold tracking-wider">
                Third-Party Portals
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-black text-rose-400">
                -£{stats.monthlyLoss.toLocaleString()}
              </div>
              <div className="text-[11px] text-rose-300/80 font-medium">
                lost every month to commissions
              </div>
              <div className="pt-2 border-t border-rose-500/20 text-xs text-white/70">
                Annual Leakage: <strong className="text-rose-300 font-mono">-£{stats.annualLoss.toLocaleString()}</strong>
              </div>
            </div>

            {/* Saim Dev Direct Card */}
            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-2 relative overflow-hidden">
              <div className="text-[11px] font-mono uppercase text-emerald-300 font-bold tracking-wider">
                Saim Dev Direct
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">
                £0 / mo
              </div>
              <div className="text-[11px] text-emerald-300/80 font-medium">
                zero commission on every order
              </div>
              <div className="pt-2 border-t border-emerald-500/20 text-xs text-white/70">
                Setup Cost: <strong className="text-emerald-300 font-mono">£250 (one-off)</strong>
              </div>
            </div>
          </div>

          {/* Highlight ROI Summary Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/15 via-neutral-900 to-neutral-950 border border-amber-400/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
                Investment Payback Horizon
              </span>
              <span className="text-xs font-mono text-emerald-400 font-extrabold bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                Pays for itself in ~{stats.daysToPayback} days
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-white/70">
                Projected 3-Year Extra Profit In Your Bank:
              </div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-amber-400">
                +£{stats.threeYearNetSavings.toLocaleString()}
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed pt-1">
                Based on maintaining direct orders without sacrificing customer details, phone numbers, or recurring commission cuts.
              </p>
            </div>

            <a
              href={`https://wa.me/923196526604?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <span>Switch to Direct Ordering — Save £{stats.annualLoss.toLocaleString()}/yr</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
