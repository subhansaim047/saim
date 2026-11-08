"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";

export const RhHeroSection = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#0d0d0d]">
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#b5f900]/[0.035] rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-[1130px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Top Pill / Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#2c2c2c] text-[#a1a1a1] text-xs font-mono uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#b5f900] animate-pulse" />
            <span>No account managers. No juniors. Just senior engineers who ship.</span>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            We design and build digital products that grow revenue for{" "}
            <span className="inline-block relative px-3 py-1 mx-1 rounded-2xl bg-[#181818] border border-[#3a3a3a] text-[#b5f900] text-3xl sm:text-5xl md:text-6xl font-mono font-medium tracking-normal align-middle">
              startups
            </span>{" "}
            &amp; growing businesses.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-[#a1a1a1] font-light max-w-2xl leading-relaxed mb-8"
          >
            Founder-led full-stack Next.js engineering focused on sub-second speed, 100% code ownership, and real commercial outcomes. We build your live staging preview first under our <strong className="text-white font-medium">$0 Upfront Guarantee</strong>.
          </motion.p>

          {/* Authority Banner — UK Registered & Based in PK */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full sm:w-auto mb-10 p-4 rounded-2xl bg-[#141414] border border-[#2c2c2c] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#cbcbcb]"
          >
            <div className="flex items-center gap-2 text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-[#b5f900] shrink-0" />
              <span>Our Agency Registered in UK • Based in Pakistan</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#2c2c2c]" />
            <div className="flex items-center gap-2">
              <span className="text-[#b5f900] font-mono font-semibold">$0 Upfront Deposit</span>
              <span>• Pay only if satisfied</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#2c2c2c]" />
            <div className="text-[#a1a1a1]">Zero monthly retainers</div>
          </motion.div>

          {/* Dual CTAs & Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20with%20the%20$0%20upfront%20offer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#b5f900] transition-all duration-300 active:scale-95 shadow-[0_4px_24px_rgba(255,255,255,0.15)] group"
            >
              <span>Get Free Consultation ($0 Upfront)</span>
              <ArrowUpRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2c2c2c] text-white font-medium text-sm transition-all"
            >
              <span>Explore Live Work</span>
              <ArrowRight className="w-4 h-4 text-[#a1a1a1]" />
            </a>

            {/* Rating Pill */}
            <div className="flex items-center gap-2 pl-2">
              <div className="flex text-[#b5f900]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#b5f900]" />
                ))}
              </div>
              <span className="text-xs text-[#a1a1a1] font-mono">5.0 Client Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};