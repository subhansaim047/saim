"use client";
import { FadeUp } from "./FadeUp";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqGroup {
  category: string;
  items: FaqItem[];
}

const faqGroups: FaqGroup[] = [
  {
    category: "Custom Web Development & Architecture",
    items: [
      {
        question: "What is custom web development and why choose it over website builders?",
        answer:
          "Custom web development involves engineering a website or application from scratch using clean, modern code (such as Next.js, React, and TypeScript) tailored directly to your business goals. Unlike DIY builders (Wix, Squarespace) or bloated WordPress themes that suffer from slow mobile speeds, rigid templates, and permanent monthly rent, custom web development gives you 100% code ownership, sub-second speeds, bespoke UX, and zero forced retainers.",
      },
      {
        question: "Why choose Next.js instead of a standard WordPress theme?",
        answer:
          "Standard WordPress themes load dozens of third-party plugins, databases, and unoptimized CSS/JS files that drag mobile Google PageSpeed scores down into the 30–60 range. Next.js delivers static site generation (SSG) and server-side rendering (SSR) directly from the edge, achieving 95+ Core Web Vitals, impervious security (no database vulnerabilities to hack), and instant page transitions that convert more visitors.",
      },
      {
        question: "How much does a commercial website cost in the UK?",
        answer:
          "In the UK, traditional agencies charge £3,000 to £15,000+ for standard small business websites, plus £100–£500/month retainers. At Saim Dev, we offer transparent fixed milestone pricing: Landing Pages at £250, Starter Websites at £390, Full Business Platforms at £790, and Bespoke Web Applications or E-Commerce Stores from £1,250+, with 100% code ownership and zero monthly lock-in.",
      },
      {
        question: "Do you build custom e-commerce stores and Shopify websites?",
        answer:
          "Yes. We build high-converting e-commerce experiences on Shopify, WooCommerce, and custom headless Next.js Commerce. Our stores feature sub-second faceted catalog search, seamless Stripe and Apple Pay checkouts, automated tax and inventory syncing, and mobile-first cart optimization to eliminate checkout drop-off.",
      },
      {
        question: "Can you build custom SaaS MVPs and interactive web applications?",
        answer:
          "Yes. We engineer authenticated client portals, SaaS MVP web applications, dynamic multi-tenant dashboards, and custom business tools. Built on Next.js App Router, Node.js, TypeScript, and serverless databases (PostgreSQL, Supabase), our web apps are fast, secure, and ready to scale.",
      },
    ],
  },
  {
    category: "Delivery & Process",
    items: [
      {
        question: "How long does a website take?",
        answer:
          "Starter websites are typically completed within 5–7 business days. Full Business Plan websites take 7–10 days from initial discovery to final deployment.",
      },
      {
        question: "How does the design and development process work?",
        answer:
          "Our process is structured in four clear steps: (1) Discovery & Brief where we establish your business goals, target clients, and project scope; (2) Strategy & Architecture where we map wireframes and customer journeys; (3) Design & Development where we engineer pixel-perfect Next.js pages on a live staging preview; and (4) Launch & Support with Google Search Console indexing and 14–30 days of dedicated post-launch care.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We specialize in modernizing outdated WordPress, Wix, or legacy websites into high-speed Next.js architectures, preserving your existing URLs and SEO authority while multiplying loading speed and conversion rates.",
      },
    ],
  },
  {
    category: "Hosting & Technical Setup",
    items: [
      {
        question: "Do you provide hosting?",
        answer:
          "Yes! We guide you through selecting and setting up ultra-fast cloud hosting, custom domain configuration, and free SSL security setup for sub-second page loads.",
      },
      {
        question: "Can I keep my existing domain name?",
        answer:
          "Yes, absolutely. Your domain always remains 100% under your ownership. We provide seamless DNS records configuration to connect your domain with zero interruption to your business email or existing services.",
      },
      {
        question: "Who owns the website and code after launch?",
        answer:
          "You own 100% of your website, assets, and source code upon final payment. There are no proprietary lock-ins, licenses, or hostage fees. Full repository access is transferred to you.",
      },
    ],
  },
  {
    category: "Content & Maintenance",
    items: [
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
        question: "What counts as post-launch support?",
        answer:
          "Post-launch support covers technical maintenance, browser compatibility checks, minor copy or imagery revisions, search engine submission verification, and prompt resolution of any operational queries.",
      },
    ],
  },
  {
    category: "SEO & Performance",
    items: [
      {
        question: "What's included in SEO?",
        answer:
          "On-page SEO includes optimized title tags, meta descriptions, structured schema markup, sub-second page speed optimization, mobile responsiveness, and Google Search Console indexing setup.",
      },
      {
        question: "How do you achieve sub-second speeds and 90+ Core Web Vitals?",
        answer:
          "We build with Next.js 16, React 19, and Tailwind CSS. Assets are served in modern AVIF/WebP formats, JavaScript bundles are strictly code-split, and HTML is statically pre-rendered so pages render instantaneously on any mobile network.",
      },
      {
        question: "Will my website be indexed on Google Search?",
        answer:
          "Yes. We configure automated sitemaps, robots.txt, canonical URLs, and connect your verified domain directly to Google Search Console for accelerated indexation.",
      },
    ],
  },
  {
    category: "Pricing & Invoicing",
    items: [
      {
        question: "How does payment work?",
        answer:
          "We operate on a transparent 50/50 milestone basis: 50% deposit to initiate architecture and UI staging, and the final 50% only after your complete approval of the staging site prior to production launch.",
      },
      {
        question: "Are there any hidden monthly retainers or ongoing fees?",
        answer:
          "Zero. Saim Dev charges transparent fixed project fees. You only pay standard domain and cloud hosting costs (often £0–£10/month) directly to your providers without agency markups.",
      },
    ],
  },
];

export const FaqSection = () => {
  return (
    <section
      id="faq"
      className="relative w-full bg-transparent py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF4A1C]/[0.025] rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 relative z-10">
        {/* HEADER — Sybiosme Step Indicator & Dual-Tone Title */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                FAQ <span className="text-white/40">Knowledge Base</span>
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              Your questions. <span className="text-white/40">Our answers.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light">
              Everything you need to know about delivery timelines, hosting, code ownership, and Google indexation.
            </p>
          </FadeUp>
        </div>

        {/* ACCORDION FAQ GROUPS — Sybiosme Categorized Panels */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqGroups.map((group, gIdx) => (
            <FadeUp key={group.category} delay={0.07 * gIdx}>
              <div className="rounded-[2.25rem] bg-[#121212] border border-white/10 p-6 sm:p-9 shadow-xl hover:border-white/15 transition-colors">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF4A1C] block mb-5">
                  {group.category}
                </span>

                <div className="divide-y divide-white/5">
                  {group.items.map((item, idx) => (
                    <details
                      key={item.question}
                      className="group py-4 first:pt-0 last:pb-0 cursor-pointer"
                      open={gIdx === 0 && idx === 0}
                    >
                      <summary className="w-full text-left flex items-center justify-between gap-4 cursor-pointer select-none list-none focus:outline-none">
                        <span className="text-white text-base sm:text-lg font-medium leading-snug group-hover:text-white/90 transition-colors">
                          {item.question}
                        </span>
                        <div className="sybiosme-disclosure-icon">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </summary>

                      <div className="pt-3.5 pb-2 text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
