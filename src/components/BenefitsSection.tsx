"use client";

import { TrendingUp, ShieldCheck, Zap, Check } from "lucide-react";
import { FadeUp } from "./FadeUp";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative w-full bg-transparent py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4A1C]/[0.025] rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* SECTION HEADER — Sybiosme Eyebrow & Two-Tone Title */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                Engineered For Results
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4" style={{ letterSpacing: "-0.04em" }}>
              Key Benefits <span className="text-white/40">Built For Growth.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light">
              Every website is engineered from the ground up for measurable commercial impact, instant edge performance, and long-term security.
            </p>
          </FadeUp>
        </div>

        {/* THREE-COLUMN BENTO GRID — Sybiosme Squircle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Card 1: Business Growth & Lead Conversion */}
          <FadeUp delay={0}>
            <div className="bento-card-sybiosme p-7 sm:p-8 flex flex-col justify-between h-full group relative overflow-hidden shadow-xl min-h-[440px]">
              {/* Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/[0.06] rounded-full blur-2xl group-hover:bg-blue-500/[0.14] transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Top Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span>Lead Conversion</span>
                  </span>

                  <div className="w-11 h-11 rounded-2xl bg-[#111113] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300 shadow-md">
                    <TrendingUp className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-3 group-hover:text-white transition-colors" style={{ letterSpacing: "-0.03em" }}>
                  Business Growth &amp; Lead Conversion
                </h3>

                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-light mb-6">
                  High-converting websites engineered to turn visitors into leads and bookings with 24/7 online presence, fast loading speed, and modern custom design.
                </p>

                {/* Feature Highlights Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["WhatsApp Direct Leads", "24/7 Lead Capture", "Mobile-First UX", "Zero Commission"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-medium text-white/60 group-hover:text-white transition-colors">
                <span className="flex items-center gap-1.5 text-white/50 text-[11px]">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Conversion Engine</span>
                </span>
                <span className="text-[11px] text-blue-400 font-semibold font-mono">
                  High ROI
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Card 2: Performance, Speed & SEO Optimization */}
          <FadeUp delay={0.1}>
            <div className="bento-card-sybiosme p-7 sm:p-8 flex flex-col justify-between h-full group relative overflow-hidden shadow-xl min-h-[440px]">
              {/* Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF4A1C]/[0.06] rounded-full blur-2xl group-hover:bg-[#FF4A1C]/[0.14] transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Top Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full border border-[#FF4A1C]/25 bg-[#FF4A1C]/10 text-[#FF4A1C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C] animate-pulse" />
                    <span>Speed &amp; SEO</span>
                  </span>

                  <div className="w-11 h-11 rounded-2xl bg-[#111113] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#FF4A1C]/50 transition-all duration-300 shadow-md">
                    <Zap className="w-5 h-5 text-[#FF4A1C]" />
                  </div>
                </div>

                {/* Fluid 3D Speed Video Box */}
                <div className="relative w-full rounded-2xl overflow-hidden bg-black/80 border border-white/5 h-28 sm:h-32 mb-4 flex items-center justify-center">
                  <video
                    ref={(el) => {
                      if (el) {
                        el.muted = true;
                        el.defaultMuted = true;
                        el.play().catch(() => {});
                      }
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster="/videos/benefits-poster.webp"
                    className="w-full h-full object-contain block"
                  >
                    <source src="/videos/benefits-speed-animation.mp4" type="video/mp4" />
                    <source
                      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-black/80" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-2.5 group-hover:text-white transition-colors" style={{ letterSpacing: "-0.03em" }}>
                  Performance, Speed &amp; SEO Optimization
                </h3>

                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-light mb-5">
                  Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
                </p>

                {/* Feature Highlights Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["< 0.8s Sub-Second LCP", "98+ Lighthouse", "JSON-LD Schema"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-medium text-white/60 group-hover:text-white transition-colors">
                <span className="flex items-center gap-1.5 text-white/50 text-[11px]">
                  <Check className="w-3.5 h-3.5 text-[#FF4A1C]" />
                  <span>Edge Infrastructure</span>
                </span>
                <span className="text-[11px] text-[#FF4A1C] font-semibold font-mono">
                  Sub-Second
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Card 3: Marketing Integration & Technical Security */}
          <FadeUp delay={0.2}>
            <div className="bento-card-sybiosme p-7 sm:p-8 flex flex-col justify-between h-full group relative overflow-hidden shadow-xl min-h-[440px]">
              {/* Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/[0.06] rounded-full blur-2xl group-hover:bg-purple-500/[0.14] transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Top Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span>Security &amp; Stack</span>
                  </span>

                  <div className="w-11 h-11 rounded-2xl bg-[#111113] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300 shadow-md">
                    <ShieldCheck className="w-5 h-5 text-purple-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-3 group-hover:text-white transition-colors" style={{ letterSpacing: "-0.03em" }}>
                  Marketing Integration &amp; Technical Security
                </h3>

                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-light mb-6">
                  Complete Google indexing, local SEO, SSL security, Instagram and social integration, with clean, scalable code built for reliable business growth.
                </p>

                {/* Feature Highlights Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Google Sitemaps", "SSL & Encryption", "Social Integration", "100% Code Ownership"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-medium text-white/60 group-hover:text-white transition-colors">
                <span className="flex items-center gap-1.5 text-white/50 text-[11px]">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Zero Retainers</span>
                </span>
                <span className="text-[11px] text-purple-400 font-semibold font-mono">
                  Full Ownership
                </span>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
};
