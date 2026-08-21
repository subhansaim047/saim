import { motion } from "framer-motion";

export const BackendSection = () => (
  <section className="bg-black text-[#E1E0CC] px-6 sm:px-12 md:px-20 lg:px-28 py-24 md:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

      {/* LEFT: Big heading only */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#E1E0CC",
            maxWidth: "12ch",
          }}
        >
          Efficient backend development
        </h2>
      </motion.div>

      {/* RIGHT: Description + CMS UI visual */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-8"
      >
        <p style={{ color: "rgba(225,224,204,0.65)", fontSize: "clamp(0.88rem, 1.1vw, 1.05rem)", lineHeight: 1.75 }}>
          Whether it&apos;s multilingual support, fast page building, easy asset management
          or interface integration — we take care of the heart of your website: The Backend.
        </p>

        {/* CMS UI image — mix-blend-mode:screen removes the dark bg */}
        <div className="relative w-full overflow-hidden" style={{ borderRadius: "0.5rem" }}>
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          <img
            src="/section-backend-ui.png"
            alt="CMS backend interface showing content management dashboard"
            className="w-full h-auto"
            style={{ mixBlendMode: "screen", opacity: 0.9 }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>

    </div>
  </section>
);
