"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: "How does your $0 upfront guarantee work?",
    answer: "For every project, we build the live staging website or web application first. You test it on your laptop and phone, inspect responsiveness, animations, speed, and lead forms. If you are 100% thrilled with the outcome, you purchase the build. If you are not satisfied, you owe nothing. There is zero financial risk for your business."
  },
  {
    question: "Are there any monthly charges or recurring retainers?",
    answer: "Zero. We do not charge monthly retainers, plugin subscriptions, or agency locks. You pay a one-time transparent fee and receive 100% source code ownership. We configure your hosting on modern edge platforms like Vercel where standard web traffic is completely free."
  },
  {
    question: "Why do you engineer in Next.js instead of WordPress or Shopify?",
    answer: "WordPress relies on bloated PHP plugins that constantly break, slow down your site, and expose security vulnerabilities. Shopify locks you into slow Liquid templates and charges compounding monthly app subscriptions ($30–$300/mo) for basic features. Next.js produces unhackable, sub-second static edge websites that achieve 100/100 Core Web Vitals with zero monthly app fees."
  },
  {
    question: "How does the $1,900 flat Website & Web App Clone service work?",
    answer: "Send us the URL of any website or web application you want duplicated. We reconstruct it down to the exact pixel in clean Next.js 15 and Tailwind CSS with silky 60fps micro-animations and upgraded Retina HD assets. Delivered in 7 to 10 days with a $0 upfront deposit."
  },
  {
    question: "Do I get full ownership of the source code and assets?",
    answer: "Yes, 100%. Upon final approval, we transfer the complete GitHub repository, components, styling, and media assets directly to you. You maintain complete control and freedom with zero agency lock-in."
  },
  {
    question: "How do we communicate throughout the build?",
    answer: "You communicate directly with our senior full-stack software engineer via WhatsApp and private staging links. No junior account managers, no ticket queues, and no communication delays."
  }
];

export const RhFaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-black/5 bg-white text-[#09090b] relative overflow-hidden">
      <div className="max-w-[920px] mx-auto px-4 sm:px-6">
        {/* Header - rh.design exact dual-tone headline */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 mb-3 font-semibold">
            F A Q
          </div>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#09090b] leading-[1.12] mb-4"
            style={{ letterSpacing: "-0.035em" }}
          >
            Frequently asked questions{" "}
            <span className="text-[#9ca3af]">Everything you need to know.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our engineering process, guarantee, and handover.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-2xl bg-[#f4f5f6] border border-black/5 hover:border-black/15 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#09090b] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 shadow-2xs ${
                      isOpen
                        ? "rotate-180 bg-[#09090b] text-[#b5f900]"
                        : "bg-white text-gray-600 border border-black/10"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2]" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed border-t border-black/5 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};