"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Code, CheckCircle, Rocket } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Scope & Align",
    timeline: "Day 1",
    desc: "Share your reference website URL, branding assets, or requirements via WhatsApp. We define fixed deliverables and guaranteed timeline.",
    icon: MessageSquare
  },
  {
    step: "02",
    title: "Prototype First ($0 Upfront)",
    timeline: "Days 2 – 5",
    desc: "We engineer your live Next.js platform and host it on an interactive staging link. You pay $0 deposit before seeing the build.",
    icon: Code
  },
  {
    step: "03",
    title: "Review & Test Live",
    timeline: "Days 6 – 7",
    desc: "Test the live build on your own smartphone and computer. If you love it, you purchase it. If not, walk away with zero obligations.",
    icon: CheckCircle
  },
  {
    step: "04",
    title: "Launch & 100% Handover",
    timeline: "Launch Day",
    desc: "We connect your custom domain, configure SSL, transfer full GitHub source code, and deliver dedicated warranty support.",
    icon: Rocket
  }
];

export const RhProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 border-t border-[#242424] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
            HOW WE WORK
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            The $0 Upfront Sprint. <br />
            <span className="text-[#a1a1a1]">From concept to production launch.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4] font-light leading-relaxed">
            A transparent 4-stage engineering sprint designed to eliminate client risk. You only pay when you have tested and approved the working build.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4, borderColor: "#3a3a3a" }}
                className="p-7 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-bold text-[#b5f900]">
                      {s.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#1c1c1c] border border-[#2e2e2e] flex items-center justify-center text-white">
                      <IconComponent className="w-4 h-4 text-[#b5f900]" />
                    </div>
                  </div>
                  <div className="text-xs font-mono text-[#a1a1a1] uppercase tracking-wider mb-1">
                    {s.timeline}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#a1a1a1] leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
