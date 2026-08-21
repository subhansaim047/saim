import { motion } from "framer-motion";

export const PerformanceSection = () => (
  <section className="bg-black text-[#E1E0CC] px-4 sm:px-10 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* LEFT: Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6"
      >
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#E1E0CC",
          }}
        >
          Performance as a<br />key to success
        </h2>
        <p className="text-[#E1E0CC]/60 text-sm sm:text-base leading-relaxed max-w-md">
          Good performance is crucial for the success of your website. Fast loading times increase
          session durations, boost conversion rates and improve search engine ranking. Optimized
          code, compressed data and the right server configuration provide you with a decisive
          competitive edge in the digital world.
        </p>
        <div className="flex flex-col gap-3 mt-2">
          {[
            { label: "Page Speed", value: "99/100" },
            { label: "Core Web Vitals", value: "All Green" },
            { label: "SEO Score", value: "100/100" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-xs font-mono text-[#E1E0CC]/40 uppercase tracking-widest">{stat.label}</span>
              <span className="text-sm font-bold text-primary">{stat.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT: Screenshot */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full"
      >
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <img
            src="/section-performance.png"
            alt="Performance chart showing Views and Clicks growth"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>

    </div>
  </section>
);
