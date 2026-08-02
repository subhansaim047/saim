export const BenefitsSection = () => {
  return (
    <section id="benefits" className="w-full bg-black">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="relative w-full bg-black px-4 sm:px-6 md:px-10 py-12 sm:py-20">
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
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden p-6 sm:p-8">
              <div className="absolute top-1/2 -translate-y-1/2 -left-[420px] h-[460px] w-[460px] rounded-full bg-[#1e3a8a] blur-3xl opacity-40 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-white text-xl sm:text-2xl font-light leading-tight">
                  Business Growth &
                  <br />
                  Lead Conversion
                </h3>
                <p className="mt-12 sm:mt-20 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[280px]">
                  High-converting websites engineered to turn visitors into leads and bookings with 24/7 online presence, fast loading speed, and modern custom design.
                </p>
              </div>
            </div>

            {/* Card 2: Video Card (Center) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden flex flex-col">
              <div className="relative w-full overflow-hidden" style={{ height: "75%" }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                >
                  <source
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950" />
              </div>
              <div className="flex-1 flex items-center justify-start p-6 sm:p-8">
                <h3 className="text-white text-xl sm:text-2xl font-light leading-tight text-left">
                  Performance, Speed &
                  <br />
                  SEO Optimization
                </h3>
              </div>
            </div>

            {/* Card 3: Text Card (Right) */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden p-6 sm:p-8">
              <div className="absolute -top-28 -right-28 h-56 w-56 rounded-full bg-[#1e3a8a] blur-3xl opacity-40 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-white text-xl sm:text-2xl font-light leading-tight">
                  Marketing Integration &
                  <br />
                  Technical Security
                </h3>
                <p className="mt-auto text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
                  Complete Google indexing, local SEO, SSL security, WhatsApp and social integration, with clean, scalable code built for reliable business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
