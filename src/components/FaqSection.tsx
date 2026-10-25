"use client";
import { FadeUp } from "./FadeUp";
import { ChevronDown } from "lucide-react";

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
      "Yes! We guide you through selecting and setting up ultra-fast cloud hosting, custom domain configuration, and free SSL security setup for sub-second page loads.",
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
  return (
    <section id="faq" className="relative w-full bg-[#0A0A0A] py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4A1C]/[0.025] rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                FAQ &amp; Knowledge Base
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4" style={{ letterSpacing: "-0.04em" }}>
              Got Questions? <span className="text-white/40">Clear answers.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light">
              Everything you need to know about timeline, hosting, content management, and post-launch support.
            </p>
          </FadeUp>
        </div>

        {/* ACCORDION FAQ LIST — Sybiosme Minimalist Squircle Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeUp key={faq.question} delay={0.08 * index}>
              <details
                className="group rounded-[1.75rem] bg-[#121212] border border-white/10 open:border-white/20 open:bg-[#151515] transition-all duration-300 overflow-hidden shadow-lg"
                open={index === 0}
              >
                <summary className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 list-none select-none">
                  <h3 className="text-white text-base sm:text-lg font-medium leading-snug">
                    {faq.question}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:text-[#FF4A1C] group-open:border-[#FF4A1C]/30 text-white/60">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </summary>

                <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4 font-light">
                  {faq.answer}
                </div>
              </details>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
