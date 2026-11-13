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
  <section className="bg-white text-[#020612] px-4 sm:px-8 md:px-14 lg:px-20 py-20 sm:py-28 md:py-36 overflow-hidden border-t border-[#020612]/[0.07] relative">
    <div className="max-w-7xl mx-auto relative z-10">

      {/* Eyebrow & Heading */}
      <div className="mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF5FF] border border-[#2F6CE1]/20 mb-6">
          <span className="section-dot" />
          <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#020612]">
            Stack &amp; Frameworks
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#020612] leading-tight"
          style={{ maxWidth: "20ch", letterSpacing: "-0.03em" }}
        >
          Tools and technologies <br />
          <span className="text-[#2F6CE1]">we love to use.</span>
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
            className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-6 py-6 border-t border-[#020612]/[0.08] items-baseline group hover:bg-[#F8FAFC] px-3 rounded-2xl transition-all"
          >
            <span className="sm:col-span-2 text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.18em] text-[#020612]/60 group-hover:text-[#1D4ED8] transition-colors">
              {row.category}
            </span>
            <div className="sm:col-span-3 flex flex-wrap gap-2.5 sm:gap-3">
              {row.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs sm:text-sm font-semibold text-[#020612]/85 group-hover:text-[#020612] transition-all px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#020612]/10 hover:border-[#2F6CE1]/50 hover:bg-[#EFF5FF] hover:text-[#1D4ED8] cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[#020612]/[0.08]" />
      </div>
    </div>
  </section>
);
