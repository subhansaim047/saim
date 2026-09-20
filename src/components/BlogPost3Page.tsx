"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Share2, ChevronDown, ChevronUp, CheckCircle, Smartphone, Zap, Search, Layout } from "lucide-react";

const faqs = [
  {
    q: "Is this a recurring discount or a one-time fee?",
    a: "This is a one-time flat 50% discount on the entire project development cost. There are no hidden monthly retainer fees or mandatory ongoing contracts.",
  },
  {
    q: "Will the website be fully custom or a template?",
    a: "100% custom. Even at half price, I do not use cheap, bloated templates. I engineer the layout, structure, and design from the ground up to fit your exact brand and business goals.",
  },
  {
    q: "How long will the project take?",
    a: "Depending on the scope, most standard business websites are launched within 5 to 10 days.",
  },
  {
    q: "Do I need to pay for hosting and domain?",
    a: "Yes, you are responsible for your own domain name and hosting plan. I will guide you on the best and most affordable platforms to use.",
  }
];

const sections = [
  "The Announcement",
  "Why Am I Cutting Prices in Half?",
  "What You Actually Get",
  "Who I Want to Work With",
  "Frequently Asked Questions",
  "How to Claim This Offer",
];

export const BlogPost3Page = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full cursor-pointer">
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        </div>
      </header>

      {/* ── Hero Article Header ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary/20 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              Launch Special
            </span>
            <span className="text-white/40 text-sm font-medium">5 Min Read</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
            I Just Launched My Web Agency — And I'm Offering <span className="text-primary">50% Off</span> to My First Clients
          </h1>
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">
            Premium web development at half the price. Find out why I am offering this massive discount and how it can act as the ultimate growth engine for your business.
          </p>

          <div className="flex items-center justify-between py-5 border-y border-white/10">
            <div className="flex items-center gap-3">
              <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-10 h-10 rounded-full border border-white/20" />
              <div>
                <p className="text-white font-semibold text-sm">Saim Dev</p>
                <p className="text-white/40 text-xs">Founder, Web Developer</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-xs font-medium">Published</p>
              <p className="text-white font-semibold text-sm">Sep 20, 2026</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Content Body ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          
          {/* Table of Contents */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 mb-12">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Inside This Post</h3>
            <ul className="space-y-3">
              {sections.map((sec, idx) => (
                <li key={idx}>
                  <button onClick={() => scrollTo(`section-${idx + 1}`)} className="text-primary/80 hover:text-primary text-sm font-medium transition-colors text-left cursor-pointer flex items-center gap-2">
                    <span className="text-white/20 text-xs">{idx + 1}.</span> {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 1 */}
          <section id="section-1" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">The Announcement</h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              It is official. After months of intense preparation, late-night coding sessions, and refining my process, I have launched my own web development agency.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              My core mission? To help businesses dominate their local markets with high-performance, custom-built websites that don't just look pretty, but actually convert visitors into paying customers. And to celebrate this milestone, I am doing something crazy: I am offering a flat <strong>50% discount</strong> on new website projects.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Why Am I Cutting Prices in Half?</h2>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              When people see a 50% discount, they instantly assume the quality is being cut in half too. Let me be clear: <strong>That is NOT the case here.</strong> 
            </p>
            <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5 mb-6">
              <p className="text-white font-medium italic text-lg leading-relaxed">
                "As a newly launched agency, my most valuable asset right now isn't short-term profit—it is trust."
              </p>
            </div>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              I want to build a powerhouse portfolio of incredible case studies. I am willing to sacrifice my profit margins today in exchange for a glowing testimonial and a lifelong client relationship tomorrow. 
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              You get an enterprise-grade website at half the price, and I get to showcase your success story to the world. It is a perfect win-win.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">What You Actually Get</h2>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Even with the discount, you are getting the full, uncompromised premium package. A website that works like your best 24/7 salesperson:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl">
                <Zap className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-white font-semibold mb-2">Blazing Fast Speed</h3>
                <p className="text-sm text-white/50">Built with modern tech so your pages load in under 2 seconds, preventing visitors from bouncing.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl">
                <Smartphone className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-white font-semibold mb-2">Mobile-First UI</h3>
                <p className="text-sm text-white/50">80% of traffic is on mobile. We build specifically for smartphone screens first, ensuring a flawless experience.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl">
                <Search className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-white font-semibold mb-2">SEO Foundation</h3>
                <p className="text-sm text-white/50">Structured perfectly so Google can crawl, understand, and rank your website in local search results.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl">
                <Layout className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-white font-semibold mb-2">Bespoke Design</h3>
                <p className="text-sm text-white/50">No cheap templates. Everything is hand-crafted and tailored to fit your specific brand identity.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Who I Want to Work With</h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              I am looking for serious, visionary business owners who understand the value of a strong digital presence.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Local service providers (plumbers, electricians, salons) looking to dominate their area.",
                "Startups & Entrepreneurs who need a professional look to secure funding or clients.",
                "E-commerce brands wanting a smooth, high-converting checkout experience.",
                "Established businesses looking to replace an outdated, slow website."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/70 text-base leading-relaxed">
              If you fall into any of these categories and are ready to scale, I am ready to build your digital foundation.
            </p>
          </section>

          {/* Section 5 - FAQ */}
          <section id="section-5" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="text-white font-medium text-sm">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-1 border-t border-white/[0.06]">
                      <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 - CTA */}
          <section id="section-6" className="mb-14 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 blur-xl">
              <Zap className="w-32 h-32 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">How to Claim This Offer</h2>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto relative z-10">
              Because I am offering premium engineering at half the rate, I can only take on a very limited number of projects before my schedule fills up and prices return to normal. If you need a website, do not wait.
            </p>
            <a
              href="sms:+447473962953"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-primary/25 cursor-pointer relative z-10"
            >
              Claim 50% Off — SMS Me Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>

        </motion.article>

        {/* ── Author Card ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.35 }} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-10">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Saim Dev</p>
            <p className="text-white/40 text-xs mb-3">Full Stack Web Developer • Building business websites since 2020</p>
            <p className="text-white/55 text-sm leading-relaxed">
              I build high-performance, conversion-focused websites for small and local businesses. Every site I deliver is fast, mobile-optimised, and built to generate real leads — not just look good.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
