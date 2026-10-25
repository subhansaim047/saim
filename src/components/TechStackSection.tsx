"use client";
import { motion } from "framer-motion";

const techCategories = [
  { category: "Commerce Platforms", tools: ["WooCommerce", "Shopify", "Stripe"] },
  { category: "Headless CMS",       tools: ["Contentful", "Sanity"] },
  { category: "Frameworks & Languages", tools: ["TypeScript", "Next.js", "React", "JavaScript", "PHP", "NestJS", "Node.js"] },
  { category: "Deployment",         tools: ["Vercel", "AWS", "MS Azure"] },
  { category: "LLM",                tools: ["ChatGPT", "MS Azure AI"] },
  { category: "CDN",                tools: ["Cloudflare", "IMGIX"] },
];

export const TechStackSection = () => (
  <section className="bg-[#0A0A0A] text-white px-4 sm:px-8 md:px-14 lg:px-20 py-20 sm:py-28 md:py-36 overflow-hidden border-t border-white/[0.06] relative">
    {/* Background Ambient Glow */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4A1C]/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />

    <div className="max-w-7xl mx-auto relative z-10">

      {/* Sybiosme Eyebrow & Heading */}
      <div className="mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
          <span className="section-dot" />
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
            Stack &amp; Frameworks
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight"
          style={{ maxWidth: "20ch", letterSpacing: "-0.04em" }}
        >
          Tools and technologies <br />
          <span className="text-white/40">we love to use.</span>
        </motion.h2>
      </div>

      {/* Structured Category Rows */}
      <div className="flex flex-col">
        {techCategories.map((row, i) => (
          <motion.div
            key={row.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-6 py-6 border-t border-white/10 items-baseline group hover:bg-white/[0.015] px-3 rounded-2xl transition-all"
          >
            <span className="sm:col-span-2 text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-white/45 group-hover:text-white/70 transition-colors">
              {row.category}
            </span>
            <div className="sm:col-span-3 flex flex-wrap gap-2.5 sm:gap-3">
              {row.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-all px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.08] cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        <div className="border-t border-white/10" />
      </div>
    </div>
  </section>
);
