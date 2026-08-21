import { motion } from "framer-motion";

export const PerformanceSection = () => (
  <section className="bg-black text-[#E1E0CC] px-6 sm:px-12 md:px-20 lg:px-28 py-24 md:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

      {/* LEFT: Big heading - same font as My Process */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight" style={{ maxWidth: "12ch" }}>
          Performance as a key to success
        </h2>
      </motion.div>

      {/* RIGHT: Description + Chart visual */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-8"
      >
        <p style={{ color: "rgba(225,224,204,0.65)", fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)", lineHeight: 1.75 }}>
          Good performance is crucial for the success of your website. Fast loading times
          increase session durations, boost conversion rates and improve search engine
          ranking. Optimized code, compressed data and the right server configuration
          provide you with a decisive competitive edge in the digital world.
        </p>

        {/* Chart - max quality, no blur */}
        <div className="relative w-full overflow-hidden rounded-lg">
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          <img
            src="/section-perf-chart.png"
            alt="Analytics chart: Views 3,024 (+47%) and Clicks 1,274 (+53%)"
            className="w-full h-auto block"
            style={{
              mixBlendMode: "screen",
              imageRendering: "high-quality",
              WebkitFontSmoothing: "antialiased",
            }}
            loading="eager"
            decoding="sync"
          />
        </div>
      </motion.div>
    </div>
  </section>
);
