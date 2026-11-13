"use client";

import { TrendingUp, ShieldCheck } from "lucide-react";
import { LazyAutoplayVideo } from "./LazyAutoplayVideo";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="w-full bg-white border-t border-black/[0.06] relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="relative w-full bg-white px-4 sm:px-6 md:px-10 py-16 sm:py-24">
          
          {/* Eyebrow & Section Heading matching Pricing Section */}
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.03] border border-black/[0.08] mb-4">
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-black/75">
                Core Advantages
              </span>
            </div>
            <h2
              className="text-[#111115] text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-center"
              style={{ letterSpacing: "-0.04em" }}
            >
              Key Benefits
            </h2>
          </div>

          {/* Three-Column Card Grid */}
          <div data-gsap-stagger className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Card 1: Text Card (Left) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-[#FAFAFA] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-[0_14px_40px_-24px_rgba(17,17,21,0.12)] border border-black/[0.08] hover:border-[#FF4A1C]/45 transition-all duration-300">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Icon Container matching Pricing Section styling & Brand Orange */}
                  <div className="mb-6">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="relative w-12 h-12 rounded-2xl bg-white border border-black/[0.08] group-hover:border-[#FF4A1C]/50 flex items-center justify-center transition-all duration-300 shadow-sm">
                        <TrendingUp className="w-5 h-5 text-[#FF4A1C] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Title matching Pricing Section typography */}
                  <h3
                    className="text-[#111115] text-xl sm:text-2xl font-medium tracking-tight leading-tight"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    Business Growth &amp;
                    <br />
                    Lead Conversion
                  </h3>
                </div>

                {/* Description matching Pricing Section font style */}
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-black/65 font-light max-w-[280px]">
                  High-converting websites engineered to turn visitors into leads and bookings with 24/7 online presence, fast loading speed, and modern custom design.
                </p>
              </div>
            </div>

            {/* Card 2: Video Card (Center) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-[#FAFAFA] overflow-hidden flex flex-col shadow-[0_14px_40px_-24px_rgba(17,17,21,0.12)] border border-black/[0.08] hover:border-[#FF4A1C]/45 transition-all duration-300 group">
              <div className="relative mx-4 mt-4 sm:mx-5 sm:mt-5 rounded-xl overflow-hidden h-[50%] sm:h-[52%] flex items-center justify-center bg-[#F1F2F4] border border-black/[0.08]">
                <LazyAutoplayVideo
                  poster="/videos/benefits-poster.webp"
                  className="w-full h-full object-cover block"
                  sources={[
                    { src: "/videos/benefits-speed-animation.mp4", type: "video/mp4" },
                    {
                      src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4",
                      type: "video/mp4",
                    },
                  ]}
                />
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-center p-6 sm:p-8 pt-4">
                <h3
                  className="text-[#111115] text-xl sm:text-2xl font-medium tracking-tight leading-tight text-left"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Performance, Speed &amp;
                  <br />
                  SEO Optimization
                </h3>
                <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-black/65 font-light max-w-[320px]">
                  Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
                </p>
              </div>
            </div>

            {/* Card 3: Text Card (Right) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-[#FAFAFA] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-[0_14px_40px_-24px_rgba(17,17,21,0.12)] border border-black/[0.08] hover:border-[#FF4A1C]/45 transition-all duration-300">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Icon Container matching Pricing Section styling & Brand Orange */}
                  <div className="mb-6">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="relative w-12 h-12 rounded-2xl bg-white border border-black/[0.08] group-hover:border-[#FF4A1C]/50 flex items-center justify-center transition-all duration-300 shadow-sm">
                        <ShieldCheck className="w-5 h-5 text-[#FF4A1C] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  <h3
                    className="text-[#111115] text-xl sm:text-2xl font-medium tracking-tight leading-tight"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    Marketing Integration &amp;
                    <br />
                    Technical Security
                  </h3>
                </div>

                <p className="text-[13px] sm:text-[14px] leading-relaxed text-black/65 font-light max-w-[320px]">
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
