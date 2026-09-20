"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, CheckCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Is there really no cost at all?",
    a: "The website design and development are free. You may still need to pay for your own domain and hosting. These accounts will remain in your business's name, and I'll help you set them up.",
  },
  {
    q: "How long does it take to build the website?",
    a: "A complete website typically takes 5–10 business days from the point we agree on what you need. I'll send you a clear timeline at the start so you know exactly what to expect and when.",
  },
  {
    q: "What do I need to provide?",
    a: "Your business name, logo (if you have one), a short description of what you do, your contact details, and any photos you'd like to use. If you don't have photos, I'll advise you on free options. I'll guide you through everything step by step.",
  },
  {
    q: "What if I already have a website but it's outdated?",
    a: "That still qualifies. If your current site is slow, doesn't look professional on mobile, or isn't generating any enquiries, a rebuild is exactly what this offer covers. Most of the businesses I help already have something — it just isn't working.",
  },
  {
    q: "How do I know this is legitimate?",
    a: "You can view my portfolio and previous work at saimdev.site. I've been building websites since 2020. There is no payment for the included design and development work. Before starting, I'll provide a simple written project summary covering the pages, timeline, revisions, domain, hosting, and ownership.",
  },
  {
    q: "What happens after the free website is delivered?",
    a: "Nothing, unless you want something. If you'd like additional pages, SEO work, or ongoing maintenance in the future, we can discuss that — but there is zero obligation. The free website is yours, complete, with no strings attached.",
  },
];

const included = [
  { item: "Custom design", detail: "Built specifically for your business — not a generic template" },
  { item: "Mobile-first responsive layout", detail: "Looks and works perfectly on every screen size" },
  { item: "Fast load speed", detail: "Performance-focused build with optimized images, clean code, and mobile testing." },
  { item: "Contact form", detail: "Enquiries go directly to your email inbox" },
  { item: "SEO basics setup", detail: "Title tags, meta descriptions, and local keywords configured from day one" },
  { item: "Google Maps integration", detail: "So customers can find your location instantly" },
  { item: "SSL certificate (HTTPS)", detail: "Secure and trusted — Google flags non-HTTPS sites as 'Not Secure'" },
  { item: "Hosting setup guidance", detail: "I'll walk you through getting it live, start to finish" },
];

const businessTypes = [
  "Restaurants, cafés, and takeaways",
  "Plumbers, electricians, builders, and cleaners",
  "Hair salons, barbers, and beauty therapists",
  "Solicitors, accountants, and financial advisers",
  "Personal trainers, physios, and coaches",
  "Shops, boutiques, and local retailers",
  "Any service business operating in a local area",
];

const sections = [
  "Why I'm Doing This",
  "What You'll Actually Get",
  "Who This Is For",
  "Why Online Presence Matters",
  "What I Ask In Return",
  "Why Only 5 Slots",
  "Frequently Asked Questions",
  "How to Claim One of the 5 Slots",
];

export const BlogPost2Page = () => {
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
          onClick={() => router.push('/blogs')}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Blogs
        </button>
        <button onClick={() => router.push('/')} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer text-left" title="Go to Homepage">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-white/15" />
          <span className="text-sm font-semibold text-white hidden sm:block">Saim Dev</span>
        </button>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* ── Article Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-widest uppercase text-primary mb-5">
            Special Offer
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            I'm Building 5 Free Websites for Local Businesses — Here's Why (and How to Claim One)
          </h1>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-7">
            Hello local business owners! I’m offering free websites to 5 selected local businesses that want to improve their online presence and attract more customers.<br/><br/>
            The website design and development are free. You may only need to pay for your own domain and hosting. In return, I’ll ask for honest feedback after the project. You will never be required to leave a positive review.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/40 pb-7 border-b border-white/10">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />Sep 20, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />7 min read</span>
            <button
              onClick={() => { if (navigator.share) { navigator.share({ title: document.title, url: window.location.href }); } else { navigator.clipboard.writeText(window.location.href); } }}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer ml-auto"
            >
              <Share2 className="w-4 h-4" />Share
            </button>
          </div>
        </motion.div>

        {/* ── Table of Contents ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">In this article</p>
          <ol className="space-y-2">
            {sections.map((s, i) => (
              <li key={i}>
                <button onClick={() => scrollTo(`section-${i + 1}`)} className="text-sm text-white/60 hover:text-primary transition-colors text-left cursor-pointer flex items-center gap-2.5">
                  <span className="text-primary/40 font-mono text-[10px] flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </button>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* ── Article Body ── */}
        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} style={{ lineHeight: 1.85 }}>

          {/* Section 1 */}
          <section id="section-1" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Why I'm Doing This</h2>
            <p className="text-white/65 text-base mb-4">
              Most local businesses I talk to already know they need a better website. The conversation usually goes the same way: they agree the site is outdated, they know it's costing them customers, but they've been putting it off because they're unsure about the cost, the process, or whether it'll actually make a difference.
            </p>
            <p className="text-white/65 text-base mb-4">
              So I decided to remove all three of those barriers at once.
            </p>
            <p className="text-white/65 text-base mb-4">
              I'm allocating five project slots to build complete, professional websites for local businesses — at no cost. There are no hidden upgrades or mandatory monthly contracts. The only thing I ask in return is honest feedback after the project is done.
            </p>
            <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6">
              <p className="text-white/80 text-sm font-medium italic leading-relaxed">
                "This is how I build proof. Feedback helps me grow. Your business gets a real website. It's a straightforward exchange — and genuinely one of the most risk-free opportunities a local business owner will come across."
              </p>
            </div>
          </section>

          {/* Section 2 — What You Get */}
          <section id="section-2" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">What You'll Actually Get</h2>
            <p className="text-white/65 text-base mb-4">
              This is not a template dropped onto a free hosting plan. Every free website I build is custom — designed, developed, and delivered with the same standard as a paid project.
            </p>
            <p className="text-white/65 text-base mb-7">
              <strong className="text-white">This offer includes a simple business website of up to 5 pages, such as Home, About, Services, Contact, and FAQ.</strong> Here's exactly what's included:
            </p>
            <div className="space-y-3">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{item.item}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/55 text-sm mt-5 leading-relaxed">
              Most paid websites at this specification cost between £500 and £1,500. You're getting the same result at zero cost.
            </p>
          </section>

          {/* Section 3 — Who This Is For */}
          <section id="section-3" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Who This Is For</h2>
            <p className="text-white/65 text-base mb-6">
              This offer is specifically for <strong className="text-white">local businesses</strong> — businesses that serve a specific town, city, or area. That includes:
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-3">
              {businessTypes.map((type, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {type}
                </div>
              ))}
            </div>
            <p className="text-white/65 text-base mt-6">
              If you currently have no website, an outdated site, or one that isn't generating enquiries — this is for you.
            </p>
          </section>

          {/* Section 4 — Online Presence */}
          <section id="section-4" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Why Online Presence Matters</h2>
            <p className="text-white/65 text-base mb-4">
              Many customers now check a business online before calling, booking, or visiting. A clear, mobile-friendly website helps them understand your services, trust your business, and contact you more easily.
            </p>
          </section>

          {/* Section 5 — What I Ask */}
          <section id="section-5" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">What I Ask In Return</h2>
            <p className="text-white/65 text-base mb-6">
              Just one thing: <strong className="text-white">honest feedback</strong>.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-6 space-y-4">
              {[
                { n: "01", t: "After delivery", d: "Once your website is live, I'll ask you to share a short written review — what the process was like and what you think of the result." },
                { n: "02", t: "Completely voluntary", d: "You will never be required to leave a positive review. I want genuine feedback so I know what worked and what I can improve." },
                { n: "03", t: "No other requirements", d: "No referral requirement. No obligation to hire me again. No monthly payment. No ad spend. Nothing else." },
              ].map((item) => (
                <div key={item.n} className="flex gap-4">
                  <span className="text-primary font-mono font-bold text-sm flex-shrink-0 mt-0.5">{item.n}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.t}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/65 text-base">
              That's the entire deal. A professional website delivered at no cost, in exchange for a few sentences about your experience.
            </p>
          </section>

          {/* Section 6 — Why Only 5 */}
          <section id="section-6" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Why Only 5 Slots</h2>
            <p className="text-white/65 text-base mb-4">
              I build every website myself. That means every site gets proper attention — not outsourced, not automated, not templated.
            </p>
            <p className="text-white/65 text-base mb-4">
              Five is the number of projects I can take on alongside existing client work without letting quality slip. Each slot gets the same focus and care as a fully paid project.
            </p>
            <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
              <p className="text-orange-400 text-sm font-semibold mb-1">⚠️ When these five slots are filled, the offer closes.</p>
              <p className="text-white/55 text-sm">There is no waiting list. Slots are confirmed on a first-come, first-served basis after a short conversation about your business.</p>
            </div>
          </section>

          {/* Section 7 — FAQ */}
          <section id="section-7" className="mb-14">
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

          {/* Section 8 — How to Claim */}
          <section id="section-8" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">How to Claim One of the 5 Slots</h2>
            <p className="text-white/65 text-base mb-6">
              To apply, send me:
            </p>
            <div className="space-y-4 mb-7">
              {[
                { n: "01", t: "Your business name and industry" },
                { n: "02", t: "Your current website, if you have one" },
                { n: "03", t: "What you want the new website to achieve" },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 items-center">
                  <span className="text-primary font-mono font-bold text-sm flex-shrink-0">{item.n}</span>
                  <p className="text-white font-semibold text-sm m-0">{item.t}</p>
                </div>
              ))}
            </div>
            <p className="text-white/65 text-base">
              I’ll review suitable applications and select five businesses based on project fit and availability.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-14 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-xl font-bold text-white mb-4">The Bottom Line</h2>
            <p className="text-white/65 text-base mb-4">
              There's no reason not to claim this. You get a professionally built website at no cost. The only thing at stake is your time — a few messages and some basic business information.
            </p>
            <p className="text-white/65 text-base">
              In return, you get an online presence that works for your business 24 hours a day, positions you professionally, and gives customers a reason to choose you over a competitor who offers no better service — just a better first impression.
            </p>
          </section>

        </motion.article>

        {/* ── CTA — Claim Your Slot ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }} className="rounded-2xl border border-primary/20 bg-primary/5 p-7 mb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Five free website projects available</span>
          </div>
          <a
            href="https://saimdev.site/"
            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-base cursor-pointer"
          >
            Apply here
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* ── Author Card ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.35 }} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-10">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Saim Dev</p>
            <p className="text-white/40 text-xs mb-3">Full Stack Web Developer · Building business websites since 2020</p>
            <p className="text-white/55 text-sm leading-relaxed">
              I build high-performance, conversion-focused websites for small and local businesses. Every site I deliver is fast, mobile-optimised, and built to generate real leads — not just look good.
            </p>
          </div>
        </motion.div>

        {/* ── Back ── */}
        <div className="text-center">
          <button onClick={() => router.push('/blogs')} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />Back to all blogs
          </button>
        </div>
      </div>
    </div>
  );
};
