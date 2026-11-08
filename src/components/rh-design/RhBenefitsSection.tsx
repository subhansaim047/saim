"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldAlert, ShoppingBag, Layers, CheckCircle2 } from "lucide-react";

export const RhBenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 sm:py-28 border-t border-[#242424] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
            ARCHITECTURAL ADVANTAGE
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Why Next.js 15 Decimates <br />
            <span className="text-[#a1a1a1]">Legacy WordPress &amp; Templated Shopify.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4] font-light leading-relaxed">
            We don't build on vulnerable WordPress plugins or pay compounding monthly Shopify app subscriptions. Whatever you want on those platforms, we engineer 10x faster in modern Next.js.
          </p>
        </div>

        {/* 3-Column Architectural Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: WordPress vs Next.js */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: "#3a3a3a" }}
            className="p-7 sm:p-8 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#1c1c1c] border border-[#2e2e2e] flex items-center justify-center text-[#b5f900] mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">We Don't Do WordPress</h3>
              <p className="text-xs sm:text-sm text-[#a1a1a1] leading-relaxed mb-6 font-light">
                WordPress sites suffer from heavy PHP execution, dozens of conflicting plugins, and constant malware exploits.
              </p>
              <div className="space-y-2.5 text-xs text-white">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span>Sub-400ms Edge rendering instead of slow PHP</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span>Zero vulnerable plugins to patch or break</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span>100/100 Core Web Vitals for Google rankings</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-[#222] mt-8 text-[11px] font-mono text-[#b5f900]">
              10x Faster • Zero Plugin Bloat
            </div>
          </motion.div>

          {/* Card 2: Shopify vs Headless eCommerce */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, borderColor: "#3a3a3a" }}
            className="p-7 sm:p-8 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#1c1c1c] border border-[#2e2e2e] flex items-center justify-center text-[#b5f900] mb-5">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">We Don't Do Shopify</h3>
              <p className="text-xs sm:text-sm text-[#a1a1a1] leading-relaxed mb-6 font-light">
                Shopify nickel-and-dimes store owners with $30–$300/mo recurring app fees for basic filtering and swatches.
              </p>
              <div className="space-y-2.5 text-xs text-white">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span>Zero monthly app subscription bills</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span>Instant faceted search and catalog filtering</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span>1-click Stripe & Apple Pay friction-free cart</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-[#222] mt-8 text-[11px] font-mono text-[#b5f900]">
              Headless Next.js • $0 App Fees
            </div>
          </motion.div>

          {/* Card 3: Scope Boundary & 1:1 Clones */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, borderColor: "#3a3a3a" }}
            className="p-7 sm:p-8 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#1c1c1c] border border-[#2e2e2e] flex items-center justify-center text-[#b5f900] mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strict Scope Boundary</h3>
              <p className="text-xs sm:text-sm text-[#a1a1a1] leading-relaxed mb-6 font-light">
                We do NOT build SaaS or heavy web apps. We specialize strictly in commercial websites, e-commerce stores, and 1:1 clones.
              </p>
              <div className="space-y-2.5 text-xs text-white">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span>1:1 Website & App Clone ($1,900 Flat)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span>18-19 ka bhi farq nahi hoga precision</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0 mt-0.5" />
                  <span>Turnkey UK Takeaway Platforms (£250 Fixed)</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-[#222] mt-8 text-[11px] font-mono text-[#b5f900]">
              Laser-Focused Expertise
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
