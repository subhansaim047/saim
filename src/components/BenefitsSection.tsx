"use client";

import { TrendingUp, ShieldCheck } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="w-full bg-transparent">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="relative w-full bg-transparent px-4 sm:px-6 md:px-10 py-12 sm:py-20">
          {/* Section Heading — Matching Pricing Section Typography */}
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-center mb-12 sm:mb-20"
            style={{ letterSpacing: "-0.04em" }}
          >
            Key Benefits
          </h2>

          {/* Three-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1: Text Card (Left) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-[#121212] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-xl border border-white/10 hover:border-white/20 transition-all">
              {/* Subtle Ambient Brand Glow matching Pricing Section */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#FF4A1C]/[0.06] rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Icon Container & Color matching Pricing Section */}
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-6">
                    <TrendingUp className="w-5 h-5 text-[#FF4A1C]" />
                  </div>

                  {/* Title matching Pricing Section font style */}
                  <h3
                    className="text-white text-xl sm:text-2xl font-medium tracking-tight leading-tight"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    Business Growth &amp;
                    <br />
                    Lead Conversion
                  </h3>
                </div>

                {/* Description matching Pricing Section typography */}
                <p className="text-xs sm:text-sm leading-relaxed text-white/60 font-light max-w-[280px]">
                  High-converting websites engineered to turn visitors into leads and bookings with 24/7 online presence, fast loading speed, and modern custom design.
                </p>
              </div>
            </div>

            {/* Card 2: Video Card (Center) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-[#121212] overflow-hidden flex flex-col justify-between group shadow-xl border border-white/10 hover:border-white/20 transition-all">
              {/* Subtle Ambient Brand Glow matching Pricing Section */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FF4A1C]/[0.04] rounded-full blur-3xl pointer-events-none" />

              <div className="relative w-full overflow-hidden h-[54%] sm:h-[56%] flex items-center justify-center bg-black pt-3 sm:pt-4">
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
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#121212]" />
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-center p-6 sm:p-8 pt-2">
                <h3
                  className="text-white text-xl sm:text-2xl font-medium tracking-tight leading-tight text-left"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Performance, Speed &amp;
                  <br />
                  SEO Optimization
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-white/60 font-light max-w-[320px]">
                  Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
                </p>
              </div>
            </div>

            {/* Card 3: Text Card (Right) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-[#121212] overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-xl border border-white/10 hover:border-white/20 transition-all">
              {/* Subtle Ambient Brand Glow matching Pricing Section */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF4A1C]/[0.06] rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Icon Container & Color matching Pricing Section */}
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-6">
                    <ShieldCheck className="w-5 h-5 text-[#FF4A1C]" />
                  </div>

                  <h3
                    className="text-white text-xl sm:text-2xl font-medium tracking-tight leading-tight"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    Marketing Integration &amp;
                    <br />
                    Technical Security
                  </h3>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-white/60 font-light max-w-[320px]">
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
