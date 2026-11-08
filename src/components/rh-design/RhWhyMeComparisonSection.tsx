"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Zap } from "lucide-react";

const INDUSTRIES = [
  "E-Commerce Flagships",
  "Takeaway & Restaurants",
  "Luxury & Fashion",
  "Health & Aesthetics",
  "Architecture & Interior",
  "Corporate & B2B",
  "SaaS & Web Applications"
];

export const RhWhyMeComparisonSection = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-[#2c2c2c] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
            THE STUDIO ADVANTAGE
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Built by senior engineers.{" "}
            <span className="text-[#a1a1a1]">Better than bloated agencies.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#a1a1a1] font-light leading-relaxed">
            Eliminating agency bloat, junior handoffs, and billing markups. You get direct access to modern full-stack engineering with zero financial risk.
          </p>
        </div>

        {/* Industry Scrolling Ticker - rh.design style */}
        <div className="mb-12 overflow-hidden py-3 border-y border-[#242424] relative">
          <div className="flex gap-4 w-max animate-marquee">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
              <div
                key={i}
                className="px-4 py-1.5 rounded-full bg-[#141414] border border-[#2c2c2c] text-xs font-mono text-[#cbcbcb] flex items-center gap-2 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5f900]" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Column Comparison Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Saim Dev (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-7 sm:p-8 rounded-3xl bg-[#141414] border-2 border-[#b5f900]/40 flex flex-col justify-between shadow-[0_12px_48px_rgba(181,249,0,0.08)] relative"
          >
            <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#b5f900] text-black text-[10px] font-mono font-bold uppercase tracking-wider">
              Direct Senior Studio
            </div>

            <div>
              <div className="flex items-center gap-2 text-white font-medium text-lg mb-1 mt-1">
                <ShieldCheck className="w-5 h-5 text-[#b5f900]" />
                <span>Saim Dev</span>
              </div>
              <p className="text-xs text-[#a1a1a1] mb-6 font-light">
                UK Registered Agency • Senior Full-Stack Engineering
              </p>

              <ul className="space-y-3.5 mb-8 text-xs sm:text-[13px]">
                <li className="flex items-start gap-2.5 text-white">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span><strong>$0 Upfront Deposit:</strong> Pay only when satisfied</span>
                </li>
                <li className="flex items-start gap-2.5 text-white">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span><strong>5 to 10 Day Delivery:</strong> Direct senior execution</span>
                </li>
                <li className="flex items-start gap-2.5 text-white">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span><strong>Sub-500ms Speed:</strong> 100/100 Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-2.5 text-white">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span><strong>Zero Monthly Retainers:</strong> 100% Code Ownership</span>
                </li>
                <li className="flex items-start gap-2.5 text-white">
                  <Check className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span><strong>Direct Communication:</strong> Talk to the engineer</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#242424] text-[11px] font-mono text-[#b5f900]">
              Fixed rates from £250 • Flat $1,900 Clone
            </div>
          </motion.div>

          {/* Column 2: Traditional Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#121212] border border-[#242424] flex flex-col justify-between"
          >
            <div>
              <div className="text-white font-medium text-lg mb-1">
                Traditional Agencies
              </div>
              <p className="text-xs text-[#a1a1a1] mb-6 font-light">
                High Overhead • Multiple Hand-off Layers
              </p>

              <ul className="space-y-3.5 mb-8 text-xs sm:text-[13px] text-[#8e8e8e]">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>50% deposit required upfront before work begins</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>8 to 16 weeks typical delivery timeline</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Heavy bloat, junior developers assigned to project</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Monthly retainers (£300–£1,000/mo) for minor edits</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Filtered communication through junior account reps</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#242424] text-[11px] font-mono text-[#8e8e8e]">
              Costs £4,000 – £15,000+
            </div>
          </motion.div>

          {/* Column 3: DIY Builders & Cheap Freelancers */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#121212] border border-[#242424] flex flex-col justify-between"
          >
            <div>
              <div className="text-white font-medium text-lg mb-1">
                DIY Builders &amp; Low-Cost Gigs
              </div>
              <p className="text-xs text-[#a1a1a1] mb-6 font-light">
                Shopify / Wix / Fiverr Templates
              </p>

              <ul className="space-y-3.5 mb-8 text-xs sm:text-[13px] text-[#8e8e8e]">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Continuous monthly app and subscription bills</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Sluggish page speeds failing Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Cookie-cutter templates that look amateurish</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Zero source code ownership (locked on platform)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>No architectural warranty or post-launch guarantee</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#242424] text-[11px] font-mono text-[#8e8e8e]">
              Compounding monthly subscription costs
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};