"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    number: "100%",
    label: "Exact 1:1 Precision Guarantee",
    desc: "Every typography scale, responsive margin, and interaction mirrored without deviation."
  },
  {
    number: "£0 / $0",
    label: "Upfront Deposit",
    desc: "We build and deploy the live staging preview first. Pay only if you are 100% satisfied."
  },
  {
    number: "<400ms",
    label: "Next.js Static Edge Speed",
    desc: "100/100 Core Web Vitals passing Google's strictest ranking benchmarks."
  },
  {
    number: "15+",
    label: "Interactive Live Production Demos",
    desc: "Tested across actual iPhone, Android, and 4K viewports with zero broken links."
  }
];

export const RhWhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 border-t border-[#2c2c2c] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
              WHY US
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white max-w-2xl leading-[1.15]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Founder-led engineering focused on speed, growth{" "}
              <span className="text-[#a1a1a1]">and commercial results.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#a1a1a1] max-w-sm font-light leading-relaxed">
            Direct collaboration with senior engineers. No junior trainees, no bloated agency account managers, and zero recurring retainers.
          </p>
        </div>

        {/* 4-Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, borderColor: "#3a3a3a", transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
            >
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-white tracking-tight mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-[#b5f900]">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-[#a1a1a1] font-light leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};