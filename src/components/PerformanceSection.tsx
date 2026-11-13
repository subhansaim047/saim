"use client";
import { motion } from "framer-motion";

export const PerformanceSection = () => {
  return (
    <section id="performance" className="bg-white text-[#111115] px-4 sm:px-8 md:px-14 lg:px-20 py-20 sm:py-28 md:py-36 overflow-hidden border-t border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">

        {/* LEFT: Heading & Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          {/* Sybiosme Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.03] border border-black/[0.08] mb-6">
            <span className="section-dot" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-black/75">
              Benchmark Engine
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111115] leading-[1.08]"
            style={{ maxWidth: "14ch", letterSpacing: "-0.04em" }}
          >
            Performance <br />
            <span className="text-black/45">as a key to success.</span>
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
          <p className="text-black/70 text-sm sm:text-base leading-relaxed font-light">
            Fast page speeds directly increase user session length, raise enquiry conversion rates,
            and boost Google search visibility. We engineer lightweight Next.js code, modern AVIF
            image compression, and edge cloud caching to give your UK business a distinct competitive
            advantage across desktop and mobile devices.
          </p>

          {/* 4K Vector Chart Component — Crisp Studio White Container */}
          <div className="relative w-full bg-[#FAFAFA] rounded-2xl p-4 sm:p-6 border border-black/[0.08] shadow-[0_14px_40px_-20px_rgba(17,17,21,0.12)]">
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
                      fill="rgba(17,17,21,0.45)"
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
                      stroke="rgba(17,17,21,0.08)"
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
                  stroke="rgba(17,17,21,0.18)"
                  strokeWidth="1.5"
                />

                {/* Top Accent Line Path */}
                <path
                  d="M 50 300 L 90 250 L 135 250 L 175 230 L 215 250 L 255 210 L 295 140 L 330 115 L 375 115 L 415 80 L 460 80 L 515 20 L 690 20"
                  fill="none"
                  stroke="#FF4A1C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Bottom Blue Line Path */}
                <path
                  d="M 50 320 L 90 300 L 135 300 L 175 285 L 215 270 L 255 285 L 295 270 L 330 250 L 375 210 L 415 240 L 460 205 L 515 240 L 565 190 L 610 190 L 650 150 L 690 150"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points on Vertical Line */}
                <circle cx="330" cy="115" r="5" fill="#FF4A1C" stroke="#ffffff" strokeWidth="2" />
                <circle cx="330" cy="115" r="8" fill="none" stroke="#FF4A1C" strokeOpacity="0.35" strokeWidth="2" />

                <circle cx="330" cy="250" r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                <circle cx="330" cy="250" r="8" fill="none" stroke="#0284c7" strokeOpacity="0.35" strokeWidth="2" />
              </svg>

              {/* Core Web Vitals Benchmark Box */}
              <div
                className="absolute bg-white/95 border border-black/[0.10] rounded-xl px-3.5 py-2.5 shadow-[0_12px_32px_rgba(17,17,21,0.12)] flex flex-col gap-2 pointer-events-none"
                style={{
                  top: "16%",
                  left: "48%",
                  transform: "translate(-10%, 0)",
                  minWidth: "190px",
                }}
              >
                {/* LCP Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-black/60 font-medium">Largest Contentful Paint</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#111115]">&lt; 0.8s</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Good
                    </span>
                  </div>
                </div>

                {/* CLS Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-black/60 font-medium">Cumulative Layout Shift</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#111115]">0.01</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Good
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Context Benchmark Caption */}
            <div className="mt-2 pt-3 border-t border-black/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-black/55">
              <span className="font-mono">Technical Core Web Vitals target benchmarks for Next.js production builds</span>
              <span className="text-[#111115] font-medium">Optimised Core Web Vitals</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
