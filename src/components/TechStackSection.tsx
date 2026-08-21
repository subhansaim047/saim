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
  <section className="bg-black text-[#E1E0CC] px-6 sm:px-12 md:px-20 lg:px-28 py-24 md:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto">

      {/* Heading - same font as My Process */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight"
        style={{ maxWidth: "18ch", marginBottom: "3.5rem" }}
      >
        Tools and technologies we love to use
      </motion.h2>

      {/* Table rows */}
      <div className="flex flex-col">
        {techCategories.map((row, i) => (
          <motion.div
            key={row.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-5 gap-6 py-5 border-t border-white/10 items-center"
          >
            <span
              className="col-span-2 text-xs sm:text-sm font-mono uppercase tracking-widest"
              style={{ color: "rgba(225,224,204,0.4)" }}
            >
              {row.category}
            </span>
            <div className="col-span-3 flex flex-wrap gap-x-8 gap-y-1.5">
              {row.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-sm sm:text-base hover:text-white transition-colors duration-200 cursor-default"
                  style={{ color: "rgba(225,224,204,0.8)" }}
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
