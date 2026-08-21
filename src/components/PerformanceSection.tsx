import { motion } from "framer-motion";

export const PerformanceSection = () => {
  return (
    <section className="bg-black text-[#E1E0CC] px-6 sm:px-12 md:px-20 lg:px-28 py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* LEFT: Heading (Same font as My Process) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight"
            style={{ maxWidth: "12ch" }}
          >
            Performance as a key to success
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
          <p style={{ color: "rgba(225,224,204,0.65)", fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)", lineHeight: 1.75 }}>
            Good performance is crucial for the success of your website. Fast loading times
            increase session durations, boost conversion rates and improve search engine
            ranking. Optimized code, compressed data and the right server configuration
            provide you with a decisive competitive edge in the digital world.
          </p>

          {/* 4K Vector Chart Component (Zero blur, infinite crispness) */}
          <div className="relative w-full bg-[#050505] rounded-2xl p-4 sm:p-6 border border-white/5 shadow-2xl">
            {/* SVG Chart Area */}
            <div className="relative w-full aspect-[16/9]">
              <svg
                viewBox="0 0 700 380"
                className="w-full h-full overflow-visible"
                style={{ shapeRendering: "geometricPrecision" }}
              >
                {/* Horizontal Grid Lines & Labels */}
                {[
                  { val: "5.000", y: 40 },
                  { val: "4.000", y: 110 },
                  { val: "3.000", y: 180 },
                  { val: "2.000", y: 250 },
                  { val: "1.000", y: 320 },
                ].map((grid) => (
                  <g key={grid.val}>
                    <text
                      x="0"
                      y={grid.y + 4}
                      fill="rgba(255,255,255,0.25)"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      {grid.val}
                    </text>
                    <line
                      x1="50"
                      y1={grid.y}
                      x2="690"
                      y2={grid.y}
                      stroke="rgba(255,255,255,0.06)"
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
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.5"
                />

                {/* Top Purple Line Path */}
                <path
                  d="M 50 300 L 90 250 L 135 250 L 175 230 L 215 250 L 255 210 L 295 140 L 330 115 L 375 115 L 415 80 L 460 80 L 515 20 L 690 20"
                  fill="none"
                  stroke="#9353d3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Bottom Cyan Line Path */}
                <path
                  d="M 50 320 L 90 300 L 135 300 L 175 285 L 215 270 L 255 285 L 295 270 L 330 250 L 375 210 L 415 240 L 460 205 L 515 240 L 565 190 L 610 190 L 650 150 L 690 150"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points on Vertical Line */}
                {/* Purple Point */}
                <circle cx="330" cy="115" r="5" fill="#9353d3" stroke="#050505" strokeWidth="2" />
                <circle cx="330" cy="115" r="8" fill="none" stroke="#9353d3" strokeOpacity="0.4" strokeWidth="2" />

                {/* Cyan Point */}
                <circle cx="330" cy="250" r="5" fill="#2dd4bf" stroke="#050505" strokeWidth="2" />
                <circle cx="330" cy="250" r="8" fill="none" stroke="#2dd4bf" strokeOpacity="0.4" strokeWidth="2" />
              </svg>

              {/* Floating Tooltip Box (Pixel-perfect recreation) */}
              <div
                className="absolute bg-[#0f0f11] border border-white/15 rounded-xl px-3.5 py-2.5 shadow-2xl flex flex-col gap-2 pointer-events-none"
                style={{
                  top: "20%",
                  left: "48%",
                  transform: "translate(-10%, 0)",
                  minWidth: "150px",
                }}
              >
                {/* Views Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-white/50 font-medium">Views</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">3.024</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#3b185f] text-[#c084fc]">
                      +47%
                    </span>
                  </div>
                </div>

                {/* Clicks Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-white/50 font-medium">Clicks</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">1.274</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#064e3b] text-[#34d399]">
                      +53%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
