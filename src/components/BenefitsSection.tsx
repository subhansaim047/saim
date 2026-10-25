"use client";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="w-full bg-[#0A0A0A] py-20 sm:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4A1C]/[0.03] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Heading & Eyebrow */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
            <span className="section-dot" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
              Core Architecture
            </span>
          </div>
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight"
            style={{ letterSpacing: "-0.04em" }}
          >
            Key Benefits <span className="text-white/40">for Growth.</span>
          </h2>
        </div>

        {/* Three-Column Bento Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Text Card (Left) */}
          <div className="bento-card-sybiosme relative h-[380px] sm:h-[460px] p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-2xl group">
            {/* Ambient Radial Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4A1C]/[0.07] rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF4A1C]/[0.12] transition-colors duration-500" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 block mb-4">
                01 / CONVERSION
              </span>
              <h3 className="text-white text-2xl sm:text-3xl font-medium tracking-tight leading-snug">
                Business Growth &amp;
                <br />
                <span className="text-white/60">Lead Conversion</span>
              </h3>
            </div>
            
            <p className="relative z-10 text-[14px] sm:text-[15px] leading-relaxed text-white/70 font-light max-w-[300px]">
              High-converting websites engineered to turn visitors into leads and bookings with 24/7 online presence, fast loading speed, and modern custom design.
            </p>
          </div>

          {/* Card 2: Video Card (Center) */}
          <div className="bento-card-sybiosme relative h-[380px] sm:h-[460px] overflow-hidden flex flex-col shadow-2xl group">
            <div className="relative w-full overflow-hidden h-[52%]">
              <video
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover block opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              >
                <source
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#121212]" />
            </div>
            <div className="flex-1 flex flex-col justify-center p-7 sm:p-9 pt-2">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 block mb-2">
                02 / ARCHITECTURE
              </span>
              <h3 className="text-white text-xl sm:text-2xl font-medium tracking-tight leading-snug">
                Performance, Speed &amp;
                <br />
                <span className="text-white/60">SEO Optimization</span>
              </h3>
              <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
                Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
              </p>
            </div>
          </div>

          {/* Card 3: Text Card (Right) */}
          <div className="bento-card-sybiosme relative h-[380px] sm:h-[460px] p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-2xl group">
            {/* Ambient Radial Gradient */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.07] transition-colors duration-500" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 block mb-4">
                03 / INFRASTRUCTURE
              </span>
              <h3 className="text-white text-2xl sm:text-3xl font-medium tracking-tight leading-snug">
                Marketing Integration &amp;
                <br />
                <span className="text-white/60">Technical Security</span>
              </h3>
            </div>
            
            <p className="relative z-10 text-[14px] sm:text-[15px] leading-relaxed text-white/70 font-light max-w-[320px]">
              Complete Google indexing, local SEO, SSL security, Instagram and social integration, with clean, scalable code built for reliable business growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
