import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "./FadeUp";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How long does a website take?",
    answer:
      "Starter websites are typically completed within 5–7 business days. Full Business Plan websites take 7–10 days from initial discovery to final deployment.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Yes! I guide you through selecting and setting up ultra-fast cloud hosting, custom domain configuration, and free SSL security setup for sub-second page loads.",
  },
  {
    question: "Can I edit content myself?",
    answer:
      "Absolutely. Your website is engineered with clean content architecture and clear instructions so you can easily update text, images, blog posts, and services whenever needed.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes! Every project includes 14 to 30 days of free dedicated technical support post-launch to handle minor tweaks, bug fixes, backups, and security checks.",
  },
  {
    question: "What's included in SEO?",
    answer:
      "On-page SEO includes optimized title tags, meta descriptions, structured schema markup, sub-second page speed optimization, mobile responsiveness, and Google Search Console indexing setup.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-black py-16 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <FadeUp>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3.5 py-1 text-xs text-foreground/80 backdrop-blur">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
              Got Questions?
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
              Everything you need to know about timeline, hosting, content management, and post-launch support.
            </p>
          </FadeUp>
        </div>

        {/* ACCORDION FAQ LIST */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeUp key={faq.question} delay={0.08 * index}>
                <div
                  onClick={() => toggleFaq(index)}
                  className={`liquid-glass rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen
                      ? "border-primary/40 bg-white/[0.04]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                    <h3 className="text-white text-base sm:text-lg font-medium leading-snug">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary border-primary/30" : "text-white/60"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-foreground/70 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};
