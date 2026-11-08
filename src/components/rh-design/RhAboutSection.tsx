"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Code2, Sparkles, Check, ArrowUpRight } from "lucide-react";

export const RhAboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[#242424] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Section Label & Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
            ABOUT SAIM DEV STUDIO
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            UK Registered Entity.{" "}
            <span className="text-[#a1a1a1]">Dedicated Senior Engineering Execution.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4] font-light leading-relaxed">
            Saim Dev is a remote digital engineering studio registered in London, United Kingdom with our dedicated high-output engineering hub in Pakistan. We build high-converting commercial websites, headless eCommerce flagships, and 1:1 website clones on modern Next.js 15 — eliminating traditional agency overhead, junior handoffs, and compounding monthly subscription fees.
          </p>
        </div>

        {/* 4-Bento Authority Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bento 1: UK Registered */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: "#3a3a3a" }}
            className="p-7 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#1c1c1c] border border-[#2e2e2e] flex items-center justify-center text-[#b5f900] mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">UK Registered Entity</h3>
              <p className="text-xs text-[#a1a1a1] leading-relaxed mb-4">
                Registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ. Fully accountable international legal standard.
              </p>
            </div>
            <div className="pt-4 border-t border-[#222] text-[11px] font-mono text-[#b5f900]">
              London, WC2H 9JQ
            </div>
          </motion.div>

          {/* Bento 2: Pakistan Engineering Hub */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            whileHover={{ y: -4, borderColor: "#3a3a3a" }}
            className="p-7 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#1c1c1c] border border-[#2e2e2e] flex items-center justify-center text-[#b5f900] mb-5">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pakistan Engineering Hub</h3>
              <p className="text-xs text-[#a1a1a1] leading-relaxed mb-4">
                Senior engineering talent writing pure Next.js 15, TypeScript, and Tailwind CSS. No juniors, no third-party outsourcing.
              </p>
            </div>
            <div className="pt-4 border-t border-[#222] text-[11px] font-mono text-[#b5f900]">
              Senior Developers Only
            </div>
          </motion.div>

          {/* Bento 3: $0 Upfront Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            whileHover={{ y: -4, borderColor: "#3a3a3a" }}
            className="p-7 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#1c1c1c] border border-[#2e2e2e] flex items-center justify-center text-[#b5f900] mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">$0 Upfront Guarantee</h3>
              <p className="text-xs text-[#a1a1a1] leading-relaxed mb-4">
                Share your details. We build and show you the working platform first. If you love it, you buy it. If not, walk away with zero obligations.
              </p>
            </div>
            <div className="pt-4 border-t border-[#222] text-[11px] font-mono text-[#b5f900]">
              100% Risk-Free Prototype
            </div>
          </motion.div>

          {/* Bento 4: Zero Monthly Retainers */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            whileHover={{ y: -4, borderColor: "#3a3a3a" }}
            className="p-7 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#1c1c1c] border border-[#2e2e2e] flex items-center justify-center text-[#b5f900] mb-5">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zero Monthly Retainers</h3>
              <p className="text-xs text-[#a1a1a1] leading-relaxed mb-4">
                We charge zero monthly retainers. You own 100% of your source code, GitHub repository, and deployed assets forever.
              </p>
            </div>
            <div className="pt-4 border-t border-[#222] text-[11px] font-mono text-[#b5f900]">
              100% Source Code Ownership
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
