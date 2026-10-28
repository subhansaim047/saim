"use client";

import { TrendingUp, ShieldCheck } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="w-full bg-transparent">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="relative w-full bg-transparent px-4 sm:px-6 md:px-10 py-12 sm:py-20">
          {/* Section Heading */}
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 sm:mb-24"
            style={{ letterSpacing: "-0.04em" }}
          >
            Key Benefits
          </h2>

          {/* Three-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Card 1: Text Card (Left) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-xl border border-white/5">
              <div className="absolute top-1/2 -translate-y-1/2 -left-[420px] h-[460px] w-[460px] rounded-full bg-[#1e3a8a] blur-3xl opacity-40 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Animated Luxury Icon Badge */}
                  <div className="mb-6">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/0 opacity-60 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none" />
                      <div className="relative w-12 h-12 rounded-2xl bg-[#111113] border border-white/10 group-hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 shadow-lg">
                        <TrendingUp className="w-5 h-5 text-blue-400 group-hover:scale-115 group-hover:text-cyan-300 transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white text-xl sm:text-2xl font-light leading-tight">
                    Business Growth &amp;
                    <br />
                    Lead Conversion
                  </h3>
                </div>

                <p className="text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[280px]">
                  High-converting websites engineered to turn visitors into leads and bookings with 24/7 online presence, fast loading speed, and modern custom design.
                </p>
              </div>
            </div>

            {/* Card 2: Video Card (Center) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden flex flex-col shadow-xl border border-white/5">
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
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-neutral-950" />
              </div>
              <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 pt-2">
                <h3 className="text-white text-xl sm:text-2xl font-light leading-tight text-left">
                  Performance, Speed &amp;
                  <br />
                  SEO Optimization
                </h3>
                <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
                  Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
                </p>
              </div>
            </div>

            {/* Card 3: Text Card (Right) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-xl border border-white/5">
              <div className="absolute -top-28 -right-28 h-56 w-56 rounded-full bg-[#1e3a8a] blur-3xl opacity-40 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Animated Luxury Icon Badge */}
                  <div className="mb-6">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/0 opacity-60 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none" />
                      <div className="relative w-12 h-12 rounded-2xl bg-[#111113] border border-white/10 group-hover:border-indigo-500/40 flex items-center justify-center transition-all duration-300 shadow-lg">
                        <ShieldCheck className="w-5 h-5 text-indigo-400 group-hover:scale-115 group-hover:text-purple-300 transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white text-xl sm:text-2xl font-light leading-tight">
                    Marketing Integration &amp;
                    <br />
                    Technical Security
                  </h3>
                </div>

                <p className="text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
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
