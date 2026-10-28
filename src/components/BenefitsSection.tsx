"use client";

import React from "react";
import { TrendingUp, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { FadeUp } from "./FadeUp";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="w-full bg-black py-20 sm:py-28 md:py-36 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF4A1C]/[0.025] rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                Engineered For Results
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              Built To Convert. <span className="text-white/40">Engineered To Scale.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-white/65 font-light leading-relaxed max-w-xl mx-auto">
              Custom Next.js engineering that prioritizes lightning load speeds, search engine authority, and frictionless client conversion.
            </p>
          </FadeUp>
        </div>

        {/* DOUBLE-BEZEL CONCENTRIC SQUIRCLE CONTAINER */}
        <div className="relative rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-2 sm:p-3 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
          <div className="relative rounded-[calc(2.5rem-0.75rem)] bg-[#121212] p-6 sm:p-8 lg:p-10 border border-white/5 overflow-hidden">
            
            {/* Ambient Radial Highlights */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF4A1C]/[0.06] rounded-full blur-[140px] pointer-events-none" />

            {/* THREE-COLUMN LUXURY CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 relative z-10 items-stretch">
              
              {/* CARD 1: Business Growth & Lead Conversion */}
              <div className="relative rounded-[2rem] bg-gradient-to-br from-[#141a24] via-[#0f131a] to-[#0a0d12] border border-blue-500/25 p-7 sm:p-8 flex flex-col justify-between group shadow-xl hover:border-blue-400/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden min-h-[460px]">
                {/* Hairline top glow */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent pointer-events-none" />
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/0 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none" />
                      <div className="relative w-12 h-12 rounded-2xl bg-[#111113] border border-white/10 group-hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 shadow-md">
                        <TrendingUp className="w-5 h-5 text-blue-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-300/80 bg-blue-500/10 border border-blue-500/25 px-3 py-1 rounded-full">
                      Conversion
                    </span>
                  </div>

                  <h3 className="text-white text-xl sm:text-2xl font-medium leading-tight mb-3 tracking-tight">
                    Business Growth &amp;
                    <br />
                    Lead Conversion
                  </h3>

                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-white/65 font-light">
                    Websites engineered to turn traffic into paying clients with clear calls-to-action, mobile-first user flows, and instant direct WhatsApp communication.
                  </p>
                </div>

                {/* Bottom Feature Badges */}
                <div className="pt-6 border-t border-white/10 space-y-2 text-xs font-mono text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Frictionless Mobile Inquiries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Direct WhatsApp Lead Routing</span>
                  </div>
                </div>
              </div>

              {/* CARD 2: Performance, Speed & SEO (Centerpiece) */}
              <div className="relative rounded-[2rem] bg-gradient-to-br from-[#1a1416] via-[#130f11] to-[#0d0a0c] border-2 border-[#FF4A1C]/40 p-7 sm:p-8 flex flex-col justify-between group shadow-[0_16px_56px_rgba(255,74,28,0.12)] hover:border-[#FF4A1C] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden min-h-[460px]">
                {/* Hairline top glow */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF4A1C]/80 to-transparent pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF4A1C]/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-[#FF4A1C]/30 to-amber-500/0 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none" />
                      <div className="relative w-12 h-12 rounded-2xl bg-[#111113] border border-white/10 group-hover:border-[#FF4A1C]/50 flex items-center justify-center transition-all duration-300 shadow-md">
                        <Zap className="w-5 h-5 text-[#FF4A1C] group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF4A1C] bg-[#FF4A1C]/10 border border-[#FF4A1C]/30 px-3 py-1 rounded-full font-semibold">
                      Performance
                    </span>
                  </div>

                  {/* Video Mask Preview */}
                  <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-black/60 border border-white/10 my-3 flex items-center justify-center">
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
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-[#130f11]" />
                  </div>

                  <h3 className="text-white text-xl sm:text-2xl font-medium leading-tight mb-2 tracking-tight">
                    Speed &amp; SEO Architecture
                  </h3>

                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-white/65 font-light">
                    Sub-second Next.js architecture, optimized Core Web Vitals, and structured schema markup engineered to rank on Google.
                  </p>
                </div>

                {/* Bottom Feature Badges */}
                <div className="pt-5 border-t border-white/10 space-y-2 text-xs font-mono text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C] animate-pulse" />
                    <span>&lt; 0.8s Sub-Second Load Speeds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C]" />
                    <span>Rich JSON-LD Schema Graphs</span>
                  </div>
                </div>
              </div>

              {/* CARD 3: Marketing & Security */}
              <div className="relative rounded-[2rem] bg-gradient-to-br from-[#1a1424] via-[#120d1a] to-[#0e0a14] border border-purple-500/25 p-7 sm:p-8 flex flex-col justify-between group shadow-xl hover:border-purple-400/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden min-h-[460px]">
                {/* Hairline top glow */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none" />
                      <div className="relative w-12 h-12 rounded-2xl bg-[#111113] border border-white/10 group-hover:border-indigo-500/40 flex items-center justify-center transition-all duration-300 shadow-md">
                        <ShieldCheck className="w-5 h-5 text-indigo-400 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-300/80 bg-purple-500/10 border border-purple-500/25 px-3 py-1 rounded-full">
                      Security &amp; SEO
                    </span>
                  </div>

                  <h3 className="text-white text-xl sm:text-2xl font-medium leading-tight mb-3 tracking-tight">
                    Marketing Integration &amp;
                    <br />
                    Technical Security
                  </h3>

                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-white/65 font-light">
                    Complete Google indexing, local SEO, SSL security, Instagram and social integration, with clean, scalable code built for reliable business growth.
                  </p>
                </div>

                {/* Bottom Feature Badges */}
                <div className="pt-6 border-t border-white/10 space-y-2 text-xs font-mono text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Automated Sitemaps &amp; Indexing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Free Cloud SSL &amp; Clean Code Ownership</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
