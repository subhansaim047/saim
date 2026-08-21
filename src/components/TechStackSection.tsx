import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Commerce Platforms",
    tools: ["WooCommerce", "Shopify", "Stripe"],
  },
  {
    category: "Headless CMS",
    tools: ["Contentful", "Sanity"],
  },
  {
    category: "Frameworks & Languages",
    tools: ["TypeScript", "Next.js", "React", "JavaScript", "PHP", "NestJS", "Node.js"],
  },
  {
    category: "Deployment",
    tools: ["Vercel", "AWS", "MS Azure"],
  },
  {
    category: "LLM",
    tools: ["ChatGPT", "MS Azure AI"],
  },
  {
    category: "CDN",
    tools: ["Cloudflare", "IMGIX"],
  },
];

export const TechStackSection = () => (
  <section className="bg-black text-[#E1E0CC] px-4 sm:px-10 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden border-t border-white/5">
    <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
          fontWeight: 700,
          lineHeight: 1.15,
          color: "#E1E0CC",
          maxWidth: "16ch",
          marginBottom: "3rem",
        }}
      >
        Tools and technologies<br />we love to use
      </motion.h2>

      {/* Table */}
      <div className="flex flex-col divide-y divide-white/8">
        {techCategories.map((row, i) => (
          <motion.div
            key={row.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 py-4 sm:py-5 items-start"
          >
            <span className="text-[#E1E0CC]/40 text-xs sm:text-sm font-mono tracking-wide uppercase col-span-1">
              {row.category}
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 col-span-1 sm:col-span-2 lg:col-span-3">
              {row.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-sm sm:text-base text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
