"use client";

import React from "react";
import { Zap, ShieldCheck, DollarSign, Layers } from "lucide-react";

const PILLARS = [
  {
    icon: Zap,
    metric: "<400ms",
    title: "Sub-Second Next.js Speed",
    desc: "100/100 Core Web Vitals. Static edge generation eliminating bloated WordPress database calls."
  },
  {
    icon: DollarSign,
    metric: "$0 / £0",
    title: "Upfront Deposit",
    desc: "We build and show you the working platform first. If you love it, you buy it; if not, walk away risk-free."
  },
  {
    icon: ShieldCheck,
    metric: "100%",
    title: "Direct Senior Engineering",
    desc: "Direct communication with digital architect Saim. No junior trainees or bloated agency layers."
  },
  {
    icon: Layers,
    metric: "Zero",
    title: "Monthly Agency Retainers",
    desc: "100% source code ownership. Deploy to Vercel, Netlify, or your cloud with zero hostage retainers."
  }
];

export const RhWhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#f4f5f6] text-[#09090b] border-t border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Eyebrow & Dual-tone Headline - rh.design exact signature rhythm */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 mb-4 font-semibold">
              W H Y &nbsp; U S
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#09090b] max-w-3xl leading-[1.12]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Founder-led design &amp; build focused on speed, growth{" "}
              <span className="text-[#9ca3af]">and real results.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-sm font-normal leading-relaxed">
            Direct collaboration with senior engineers. No junior trainees, no bloated agency account managers, and zero recurring retainers.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-3xl bg-white p-7 border border-black/5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center text-[#09090b] group-hover:bg-[#b5f900] transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                      {p.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#09090b] mb-2.5 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
