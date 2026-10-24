"use client";
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

        {/* ACCORDION FAQ LIST - Native details / summary with CSS-only collapse */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeUp key={faq.question} delay={0.08 * index}>
              <details
                className="group liquid-glass rounded-2xl border border-white/10 open:border-primary/40 open:bg-white/[0.04] transition-all duration-300 overflow-hidden"
                open={index === 0}
              >
                <summary className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 list-none select-none">
                  <h3 className="text-white text-base sm:text-lg font-medium leading-snug">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:text-primary group-open:border-primary/30 text-white/60">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </summary>

                <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-foreground/70 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
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
