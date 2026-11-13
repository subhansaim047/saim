"use client";

import { TrendingUp, ShieldCheck, Gauge } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="w-full bg-white border-t border-[#020612]/[0.07] relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="relative w-full bg-white px-4 sm:px-6 md:px-10 py-16 sm:py-24">
          
          {/* Eyebrow & Section Heading */}
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF5FF] border border-[#2F6CE1]/20 mb-4">
              <span className="section-dot" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#020612]">
                Core Advantages
              </span>
            </div>
            <h2
              className="font-heading text-[#020612] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center"
              style={{ letterSpacing: "-0.03em" }}
            >
              Key Benefits
            </h2>
          </div>

          {/* Three-Column Card Grid */}
          <div data-gsap-stagger className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Card 1: Text Card (Left) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-[#F8FAFC] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-[0_14px_40px_-24px_rgba(2,6,18,0.12)] border border-[#020612]/[0.08] hover:border-[#2F6CE1]/45 transition-all duration-300">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-6">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="relative w-12 h-12 rounded-2xl bg-white border border-[#020612]/[0.08] group-hover:border-[#2F6CE1]/50 group-hover:bg-[#EFF5FF] flex items-center justify-center transition-all duration-300 shadow-sm">
                        <TrendingUp className="w-5 h-5 text-[#2F6CE1] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  <h3
                    className="font-heading text-[#020612] text-xl sm:text-2xl font-bold tracking-tight leading-tight"
                    style={{ letterSpacing: "-0.025em" }}
                  >
                    Business Growth &amp;
                    <br />
                    Lead Conversion
                  </h3>
                </div>

                <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#020612]/70 font-normal max-w-[280px]">
                  High-converting websites engineered to turn visitors into leads and bookings with 24/7 online presence, fast loading speed, and modern custom design.
                </p>
              </div>
            </div>

            {/* Card 2: Royal Blue + Obsidian Speed & Core Web Vitals Card (Center) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-[#F8FAFC] overflow-hidden flex flex-col shadow-[0_14px_40px_-24px_rgba(2,6,18,0.12)] border border-[#020612]/[0.08] hover:border-[#2F6CE1]/45 transition-all duration-300 group">
              <div className="relative mx-4 mt-4 sm:mx-5 sm:mt-5 rounded-xl overflow-hidden h-[50%] sm:h-[52%] flex flex-col justify-between p-5 bg-[linear-gradient(145deg,#020612_0%,#0B193C_58%,#1E4EC4_100%)] border border-[#2F6CE1]/30">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,#5B92F5_0%,rgba(47,108,225,0.28)_45%,transparent_72%)] blur-xl"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-[#DBEAFE]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5B92F5] animate-pulse" />
                    Edge Vitals
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F6CE1] text-white shadow-[0_6px_18px_rgba(47,108,225,0.45)]">
                    <Gauge className="h-4.5 w-4.5" strokeWidth={2} />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                      100
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#93C5FD]">
                      / 100 LIGHTHOUSE
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-white/[0.08] border border-white/10 px-2.5 py-1.5">
                      <div className="text-[9px] font-mono uppercase tracking-wider text-white/60">LCP</div>
                      <div className="text-xs font-bold text-white">&lt; 0.8s</div>
                    </div>
                    <div className="rounded-lg bg-white/[0.08] border border-white/10 px-2.5 py-1.5">
                      <div className="text-[9px] font-mono uppercase tracking-wider text-white/60">CLS</div>
                      <div className="text-xs font-bold text-white">0.01</div>
                    </div>
                    <div className="rounded-lg bg-[#2F6CE1]/35 border border-[#5B92F5]/40 px-2.5 py-1.5">
                      <div className="text-[9px] font-mono uppercase tracking-wider text-[#DBEAFE]">CDN</div>
                      <div className="text-xs font-bold text-white">Edge</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-center p-6 sm:p-8 pt-4">
                <h3
                  className="font-heading text-[#020612] text-xl sm:text-2xl font-bold tracking-tight leading-tight text-left"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  Performance, Speed &amp;
                  <br />
                  SEO Optimization
                </h3>
                <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-[#020612]/70 font-normal max-w-[320px]">
                  Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
                </p>
              </div>
            </div>

            {/* Card 3: Text Card (Right) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-[#F8FAFC] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-[0_14px_40px_-24px_rgba(2,6,18,0.12)] border border-[#020612]/[0.08] hover:border-[#2F6CE1]/45 transition-all duration-300">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-6">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="relative w-12 h-12 rounded-2xl bg-white border border-[#020612]/[0.08] group-hover:border-[#2F6CE1]/50 group-hover:bg-[#EFF5FF] flex items-center justify-center transition-all duration-300 shadow-sm">
                        <ShieldCheck className="w-5 h-5 text-[#2F6CE1] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  <h3
                    className="font-heading text-[#020612] text-xl sm:text-2xl font-bold tracking-tight leading-tight"
                    style={{ letterSpacing: "-0.025em" }}
                  >
                    Marketing Integration &amp;
                    <br />
                    Technical Security
                  </h3>
                </div>

                <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#020612]/70 font-normal max-w-[320px]">
                  Complete Google indexing, local SEO, SSL security, Instagram and social integration, with clean, scalable code built for reliable business growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
