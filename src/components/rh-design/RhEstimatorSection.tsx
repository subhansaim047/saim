"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, ArrowUpRight, ShieldCheck, Clock } from "lucide-react";

interface ProjectType {
  id: string;
  name: string;
  price: number;
  currency: string;
  days: string;
  description: string;
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: "takeaway",
    name: "Takeaway Ordering Platform",
    price: 250,
    currency: "£",
    days: "3 – 5 Days",
    description: "Online ordering for UK restaurants. 0% commission, Natasha's Law compliant, direct WhatsApp kitchen orders."
  },
  {
    id: "business",
    name: "Bespoke Business Website",
    price: 450,
    currency: "£",
    days: "5 – 7 Days",
    description: "Replacing WordPress. Sub-400ms speed, 100/100 Core Web Vitals, enterprise SEO, and custom design."
  },
  {
    id: "ecommerce",
    name: "Headless Next.js eCommerce",
    price: 750,
    currency: "£",
    days: "7 – 10 Days",
    description: "Zero monthly Shopify app fees. Sub-second product filtering, custom cart drawer, and Stripe checkout."
  },
  {
    id: "clone",
    name: "1:1 Website & App Clone",
    price: 1900,
    currency: "$",
    days: "7 – 10 Days",
    description: "Duniya ki koi bhi website ya web app clone karwana chahein — 18-19 ka bhi farq nahi hoga, same bana kar dunga."
  }
];

const INCLUDED_FEATURES = [
  "100% Mobile & 4K Responsive Design",
  "Sub-400ms Next.js Edge Performance",
  "Google Search Console & Structured SEO",
  "Direct WhatsApp Lead / Order Dispatch",
  "100% Full Source Code Ownership",
  "$0 Upfront Deposit (Pay Only When Happy)"
];

export const RhEstimatorSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("business");
  const current = PROJECT_TYPES.find(p => p.id === selectedId) || PROJECT_TYPES[1];

  return (
    <section id="estimator" className="py-24 sm:py-32 border-t border-white/10 bg-[#050505] text-[#fafafa] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header - rh.design dual-tone style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#b5f900] mb-3 font-semibold">
              P R O J E C T &nbsp; E S T I M A T O R
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-3xl leading-[1.12]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Calculate your project investment{" "}
              <span className="text-gray-400">100% transparent. $0 upfront.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm font-normal leading-relaxed">
            Select your platform architecture to see guaranteed fixed delivery milestones. No hidden fees or compounding monthly subscriptions.
          </p>
        </div>

        {/* Interactive Estimator Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Project Type Selector (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">
              Select Platform Architecture:
            </div>
            {PROJECT_TYPES.map((type) => {
              const isSelected = type.id === selectedId;
              return (
                <div
                  key={type.id}
                  onClick={() => setSelectedId(type.id)}
                  className={`p-6 rounded-2xl cursor-pointer border transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-[#141418] border-[#b5f900] shadow-[0_0_24px_rgba(181,249,0,0.12)]"
                      : "bg-[#0c0c0e] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "border-[#b5f900] bg-[#b5f900]" : "border-zinc-600 bg-transparent"
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-black" />}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-white mb-1">
                        {type.name}
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed max-w-md font-light">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right shrink-0 pl-9 sm:pl-0">
                    <div className="text-xl font-bold font-mono text-white">
                      {type.currency}{type.price.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-mono text-gray-400">
                      {type.days}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Calculated Quote Breakdown (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#0c0c0e] border border-white/15 shadow-2xl relative">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#b5f900] text-black text-[10px] font-mono font-bold uppercase tracking-wider">
              $0 Upfront Guarantee
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                Guaranteed Fixed Investment:
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                  {current.currency}{current.price.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-[#b5f900] uppercase font-semibold">
                  Fixed Rate
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16161b] border border-white/10 text-xs font-mono text-zinc-300 mb-6">
                <Clock className="w-3.5 h-3.5 text-[#b5f900]" />
                <span>Estimated Delivery: {current.days}</span>
              </div>

              <div className="pt-4 border-t border-white/10 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                  Included In Every Build:
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-200">
                  {INCLUDED_FEATURES.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#b5f900] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href={`https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20the%20${encodeURIComponent(current.name)}%20(${current.currency}${current.price})%20with%20the%20$0%20upfront%20offer`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#b5f900] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-[0_4px_24px_rgba(181,249,0,0.25)] active:scale-95"
              >
                <span>Start on WhatsApp ($0 Upfront)</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </a>
              <p className="text-[11px] text-center text-zinc-500 font-mono mt-3">
                Pay only after you review and approve the live staging build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
