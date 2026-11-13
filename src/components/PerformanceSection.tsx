"use client";
import { motion } from "framer-motion";

export const PerformanceSection = () => {
  return (
    <section id="performance" className="bg-white text-[#020612] px-4 sm:px-8 md:px-14 lg:px-20 py-20 sm:py-28 md:py-36 overflow-hidden border-t border-[#020612]/[0.07] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">

        {/* LEFT: Heading & Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF5FF] border border-[#2F6CE1]/20 mb-6">
            <span className="section-dot" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#020612]">
              Benchmark Engine
            </span>
          </div>

          <h2
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#020612] leading-[1.06]"
            style={{ maxWidth: "14ch", letterSpacing: "-0.03em" }}
          >
            Performance <br />
            <span className="text-[#2F6CE1]">as a key to success.</span>
          </h2>
        </motion.div>

        {/* RIGHT: Description + Crisp 4K Vector SVG Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 w-full"
        >
          <p className="text-[#020612]/75 text-sm sm:text-base leading-relaxed font-normal">
            Fast page speeds directly increase user session length, raise enquiry conversion rates,
            and boost Google search visibility. We engineer lightweight Next.js code, modern AVIF
            image compression, and edge cloud caching to give your UK business a distinct competitive
            advantage across desktop and mobile devices.
          </p>

          {/* 4K Vector Chart Component — Crisp White Container */}
          <div className="relative w-full bg-[#F8FAFC] rounded-2xl p-4 sm:p-6 border border-[#020612]/[0.09] shadow-[0_14px_40px_-20px_rgba(2,6,18,0.12)]">
            {/* SVG Chart Area */}
            <div className="relative w-full aspect-[16/9]">
              <svg
                viewBox="0 0 700 380"
                className="w-full h-full overflow-visible"
                style={{ shapeRendering: "geometricPrecision" }}
              >
                {/* Horizontal Grid Lines & Labels */}
                {[
                  { val: "100%", y: 40 },
                  { val: "80%", y: 110 },
                  { val: "60%", y: 180 },
                  { val: "40%", y: 250 },
                  { val: "20%", y: 320 },
                ].map((grid) => (
                  <g key={grid.val}>
                    <text
                      x="0"
                      y={grid.y + 4}
                      fill="rgba(2,6,18,0.48)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      {grid.val}
                    </text>
                    <line
                      x1="45"
                      y1={grid.y}
                      x2="690"
                      y2={grid.y}
                      stroke="rgba(2,6,18,0.08)"
                      strokeWidth="1"
                    />
                  </g>
                ))}

                {/* Vertical Intersect Line */}
                <line
                  x1="330"
                  y1="20"
                  x2="330"
                  y2="350"
                  stroke="rgba(2,6,18,0.22)"
                  strokeWidth="1.5"
                />

                {/* Top Accent Line Path — Logo Royal Blue */}
                <path
                  d="M 50 300 L 90 250 L 135 250 L 175 230 L 215 250 L 255 210 L 295 140 L 330 115 L 375 115 L 415 80 L 460 80 L 515 20 L 690 20"
                  fill="none"
                  stroke="#2F6CE1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Bottom Baseline Line Path — Logo Obsidian Black */}
                <path
                  d="M 50 320 L 90 300 L 135 300 L 175 285 L 215 270 L 255 285 L 295 270 L 330 250 L 375 210 L 415 240 L 460 205 L 515 240 L 565 190 L 610 190 L 650 150 L 690 150"
                  fill="none"
                  stroke="#020612"
                  strokeOpacity="0.45"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points on Vertical Line */}
                <circle cx="330" cy="115" r="5" fill="#2F6CE1" stroke="#ffffff" strokeWidth="2" />
                <circle cx="330" cy="115" r="9" fill="none" stroke="#2F6CE1" strokeOpacity="0.35" strokeWidth="2" />

                <circle cx="330" cy="250" r="5" fill="#020612" stroke="#ffffff" strokeWidth="2" />
                <circle cx="330" cy="250" r="9" fill="none" stroke="#020612" strokeOpacity="0.25" strokeWidth="2" />
              </svg>

              {/* Core Web Vitals Benchmark Box */}
              <div
                className="absolute bg-white/95 border border-[#020612]/[0.10] rounded-xl px-3.5 py-2.5 shadow-[0_12px_32px_rgba(2,6,18,0.12)] flex flex-col gap-2 pointer-events-none"
                style={{
                  top: "16%",
                  left: "48%",
                  transform: "translate(-10%, 0)",
                  minWidth: "190px",
                }}
              >
                {/* LCP Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-[#020612]/65 font-medium">Largest Contentful Paint</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#020612]">&lt; 0.8s</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#EFF5FF] text-[#1D4ED8] border border-[#2F6CE1]/30">
                      Good
                    </span>
                  </div>
                </div>

                {/* CLS Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-[#020612]/65 font-medium">Cumulative Layout Shift</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#020612]">0.01</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#EFF5FF] text-[#1D4ED8] border border-[#2F6CE1]/30">
                      Good
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Context Benchmark Caption */}
            <div className="mt-2 pt-3 border-t border-[#020612]/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#020612]/60">
              <span className="font-mono">Technical Core Web Vitals target benchmarks for Next.js production builds</span>
              <span className="text-[#1D4ED8] font-bold">Optimised Core Web Vitals</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
