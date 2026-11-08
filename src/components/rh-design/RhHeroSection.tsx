"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { HeroCanvas3D } from "@/components/hero/HeroCanvas3D";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const RhHeroSection = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#09090b]">
      {/* 3D Geometric Interactive Canvas (Desktop Only with static fallback) */}
      <HeroCanvas3D />

      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#b5f900]/[0.035] rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Top Pill / Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-[#d4d4d8] text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#b5f900] animate-pulse" />
            <span>$0 UPFRONT GUARANTEE • ZERO MONTHLY FEES • 100% CODE OWNERSHIP</span>
          </div>

          {/* Main H1 Headline - Instant Paint (No JS Opacity Delay) */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-6 font-display"
            style={{ letterSpacing: "-0.04em" }}
          >
            Our Agency Registered in UK{" "}
            <span className="inline-block relative px-3 py-1 mx-1 rounded-2xl bg-[#111113] border border-[#27272a] text-[#b5f900] text-3xl sm:text-5xl md:text-6xl font-mono font-medium tracking-normal align-middle">
              &amp; Based in Pakistan
            </span>
          </h1>

          {/* Subheading - Instant Paint for Sub-Second LCP */}
          <p className="text-base sm:text-xl text-[#e4e4e7] font-light max-w-3xl leading-relaxed mb-8">
            <strong className="text-white font-medium">$0 Upfront Charges for Any Project:</strong> Share your project details with us — we build and show you the working platform first. If you love it, you buy it. If not, walk away with zero obligations. Zero monthly charges. 100% code ownership.
          </p>

          {/* Authority Banner — UK Registered & Based in PK */}
          <div className="w-full sm:w-auto mb-10 p-4 rounded-2xl bg-[#111113] border border-[#27272a] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#e4e4e7]">
            <div className="flex items-center gap-2 text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-[#b5f900] shrink-0" />
              <span>Registered in UK (London, WC2H 9JQ) • Engineering Hub in Pakistan</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#27272a]" />
            <div className="flex items-center gap-2">
              <span className="text-[#b5f900] font-mono font-semibold">$0 Upfront Deposit</span>
              <span>• Test working prototype first</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#27272a]" />
            <div className="text-[#d4d4d8]">Zero monthly retainers • Full source code delivered</div>
          </div>

          {/* Dual CTAs & Social Proof */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20with%20the%20$0%20upfront%20offer"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Get Free Consultation ($0 Upfront)
            </MagneticButton>

            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] text-white font-medium text-sm transition-all"
            >
              <span>Explore Live Work</span>
              <ArrowRight className="w-4 h-4 text-[#d4d4d8]" />
            </a>

            {/* Rating Pill */}
            <div className="flex items-center gap-2 pl-2">
              <div className="flex text-[#b5f900]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#b5f900]" />
                ))}
              </div>
              <span className="text-xs text-[#e4e4e7] font-mono">5.0 Client Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
