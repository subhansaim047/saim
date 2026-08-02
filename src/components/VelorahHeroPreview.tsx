const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

export const VelorahHeroPreview = () => {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl flex flex-col justify-between"
      style={{ backgroundColor: "hsl(201 100% 13%)" }}
    >
      {/* Background Looping Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Nav Row */}
      <div className="relative z-10 flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        {/* Left Brand */}
        <span
          className="text-white text-sm sm:text-base md:text-lg tracking-tight font-serif"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Saim Dev<sup className="text-[0.5em]">®</sup>
        </span>

        {/* Center Nav Links (Hidden < md) */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 text-[9px] lg:text-[10px] text-white/60">
          <span className="text-white font-medium cursor-pointer">Home</span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Services
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            About
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Growth
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Contact
          </span>
        </div>

        {/* Right Action Button */}
        <button className="liquid-glass rounded-full px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] text-white cursor-pointer">
          Explore Growth
        </button>
      </div>

      {/* Hero Block */}
      <div className="relative z-10 flex flex-col items-center text-center px-3 sm:px-4 pt-3 sm:pt-5 md:pt-7 pb-6 my-auto">
        <h1
          className="animate-fade-rise text-white font-normal leading-[0.95] tracking-[-0.03em] text-lg sm:text-2xl md:text-3xl lg:text-4xl max-w-[90%] font-serif"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-white/55">vision</em> meets{" "}
          <em className="not-italic text-white/55">measurable growth.</em>
        </h1>

        <p className="animate-fade-rise-delay text-white/60 text-[9px] sm:text-[11px] md:text-xs leading-relaxed max-w-[80%] sm:max-w-sm md:max-w-md mt-2 sm:mt-3 md:mt-4">
          Engineered for forward-thinking business leaders, service providers, and growing brands. We build digital spaces designed for maximum lead conversion, speed, and market authority.
        </p>

        <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-[9px] sm:text-[10px] text-white mt-3 sm:mt-4 md:mt-5 cursor-pointer">
          Start Project
        </button>
      </div>
    </div>
  );
};
