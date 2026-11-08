"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, Zap, ShieldCheck, Award, ArrowUpRight } from "lucide-react";

const VITALS = [
  { metric: "100/100", label: "Performance Score", desc: "Mobile & Desktop Google Lighthouse" },
  { metric: "<0.8s", label: "Largest Contentful Paint (LCP)", desc: "Instant hero element paint" },
  { metric: "<50ms", label: "Interaction to Next Paint (INP)", desc: "Flawless tactile touch response" },
  { metric: "0.00", label: "Cumulative Layout Shift (CLS)", desc: "Zero visual jump or jarring layout" }
];

export const RhPerformanceSection: React.FC = () => {
  return (
    <section id="performance" className="py-20 sm:py-28 border-t border-[#242424] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
              PERFORMANCE &amp; SPEED
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]"
              style={{ letterSpacing: "-0.03em" }}
            >
              100/100 Core Web Vitals. <br />
              <span className="text-[#a1a1a1]">Engineered for Google rankings &amp; conversions.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#a1a1a1] max-w-sm font-light leading-relaxed">
            Every website we engineer passes Google's strictest Core Web Vitals benchmarks. Sub-second speed turns clicks into revenue.
          </p>
        </div>

        {/* 4 Performance Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VITALS.map((vital, idx) => (
            <motion.div
              key={vital.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4, borderColor: "#3a3a3a" }}
              className="p-6 sm:p-7 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-2">
                  {vital.metric}
                </div>
                <div className="text-sm font-medium text-[#b5f900] mb-2">
                  {vital.label}
                </div>
              </div>
              <p className="text-xs text-[#a1a1a1] font-light leading-relaxed">
                {vital.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Speed Comparison Banner */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1c1c1c] border border-[#2e2e2e] flex items-center justify-center text-[#b5f900] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                Next.js Edge CDN Delivery vs Slow WordPress Hosting
              </h4>
              <p className="text-xs text-[#a1a1a1] max-w-xl">
                Global edge nodes deliver pre-rendered static HTML in under 90ms. No database queries, no server bottlenecks.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-mono text-[#b5f900]">Global Edge Network</span>
            <div className="w-2 h-2 rounded-full bg-[#b5f900] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
