"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechCategory {
  title: string;
  items: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frameworks & Core",
    items: ["Next.js 15", "React 19", "TypeScript", "Node.js"]
  },
  {
    title: "Styling & Motion",
    items: ["Tailwind CSS", "Framer Motion", "Lenis Smooth Scroll", "Retina HD Graphics"]
  },
  {
    title: "Commerce & Payments",
    items: ["Headless Next.js Storefronts", "Stripe Checkout", "Apple Pay & Google Pay", "WhatsApp Direct Order"]
  },
  {
    title: "Infrastructure & SEO",
    items: ["Vercel Global Edge CDN", "JSON-LD Rich Schemas", "Google Search Console", "100% Code Handover"]
  }
];

export const RhTechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 sm:py-28 border-t border-[#242424] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
            TECHNOLOGY STACK
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Modern engineering standards. <br />
            <span className="text-[#a1a1a1]">Zero legacy bloat. Pure performance.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4] font-light leading-relaxed">
            We only deploy modern, production-hardened technologies that give our clients lightning-fast speed, unhackable security, and 100% code independence.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4, borderColor: "#3a3a3a" }}
              className="p-7 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col justify-between shadow-xl transition-all"
            >
              <div>
                <div className="text-sm font-semibold text-white mb-6 flex items-center justify-between">
                  <span>{cat.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b5f900]" />
                </div>
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-2 rounded-xl bg-[#1a1a1a] border border-[#282828] text-xs font-mono text-[#d1d1d1]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
