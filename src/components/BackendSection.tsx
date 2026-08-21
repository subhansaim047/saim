import { motion } from "framer-motion";

export const BackendSection = () => (
  <section className="bg-black text-[#E1E0CC] px-4 sm:px-10 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* LEFT: Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 order-2 lg:order-1"
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
          Efficient backend<br />development
        </h2>
        <p className="text-[#E1E0CC]/60 text-sm sm:text-base leading-relaxed max-w-md">
          Whether it&apos;s multilingual support, fast page building, easy asset management or
          interface integration — we take care of the heart of your website: The Backend.
        </p>
        <div className="flex flex-col gap-2 mt-2">
          {[
            "Multilingual & multi-region support",
            "Headless CMS integration (Sanity, Contentful)",
            "API-first architecture & REST/GraphQL",
            "Scalable infrastructure on Vercel & AWS",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-sm text-[#E1E0CC]/70">{item}</span>
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
        className="relative w-full order-1 lg:order-2"
      >
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <img
            src="/section-backend.png"
            alt="Backend CMS dashboard showing content management interface"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>

    </div>
  </section>
);
