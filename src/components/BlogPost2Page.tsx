"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BlogSiloNav } from "@/components/blog/BlogSiloNav";
import { ArrowLeft, Calendar, Clock, Share2, CheckCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { ArchitecturalDiagram, EngineeringMediaFigure, EngineeringVerificationBadge } from "@/components/ui/EditorialVisualPack";

const faqs = [
  {
    q: "Is there really no cost at all?",
    a: "The website design and development are free under our 5 starter slots. You still cover your own third-party domain and hosting accounts directly so those accounts remain in your business's name, and our studio helps you set them up cleanly.",
  },
  {
    q: "How long does it take to build the website?",
    a: "A complete website typically takes 5–10 business days from the point we agree on what you need. We send you a clear timeline at the start so you know exactly what to expect and when.",
  },
  {
    q: "What do I need to provide?",
    a: "Your business name, logo (if you have one), a short description of what you do, your contact details, and any photos you'd like to use. If you don't have photos, we'll advise you on licensed free options and guide you step by step.",
  },
  {
    q: "What if I already have a website but it's outdated?",
    a: "That still qualifies. If your current site is slow, doesn't look professional on mobile, or isn't generating any enquiries, a rebuild is exactly what this offer covers. Most of the businesses we help already have something — it just isn't converting.",
  },
  {
    q: "How do I know this is legitimate?",
    a: "You can view our live portfolio and case studies at www.saimdev.site. Our team has been building business websites since 2020. There is no payment for the included design and development work, and before starting we provide a written project summary covering pages, timeline, domain, hosting, and ownership.",
  },
  {
    q: "What happens after we launch the free starter website?",
    a: "Nothing changes unless your business asks for new features. If you want additional service pages, SEO sprints, or CMS workflows later, explore our fixed pricing with zero ongoing obligations. You own your starter website and full Git code cleanly from launch day.",
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
  { item: "Hosting setup guidance", detail: "We'll walk you through getting it live on your own account, start to finish" },
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
  "Why We Offer 5 Free Starter Builds",
  "What You'll Actually Get",
  "Who This Is For",
  "Why Online Presence Matters",
  "What We Ask In Return",
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
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to the Saim Dev Blog</span>
        </Link>
        <button onClick={() => router.push('/')} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer text-left" title="Go to Homepage">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev — Free Website for Small Business & Fixed-Price Next.js Starter Slots UK & US" width={28} height={28} decoding="async" className="w-7 h-7 rounded-full object-cover border border-white/15" />
          <span className="text-sm font-semibold text-white hidden sm:block">Saim Dev</span>
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* ── Article Header ── */}
                {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium truncate" aria-current="page">Free Website for Small Business: Pros, Cons & Starter Guide</li>
          </ol>
        </nav>

<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-widest uppercase text-primary mb-5">
            Special Offer
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Free Website for Small Business: Pros, Cons & What You Actually Get
          </h1>
          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            <strong>Direct Answer:</strong> Free website builders allow small businesses to launch online without upfront capital, but they frequently impose restrictive subdomains, unwanted third-party advertisements, slow load times, and expensive monthly feature gates. Understanding the true trade-offs between proprietary DIY builders and bespoke developer-built starter websites ensures you retain full ownership of your domain, code, and customer enquiries.
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <img src="/saim-dev-logo.jpg" alt="Saim Dev — Custom Next.js Website Engineer for Local Businesses" className="w-9 h-9 rounded-full border border-white/20 object-cover" width={36} height={36} />
              <div>
                <Link href="/about" className="font-semibold text-white hover:text-primary transition-colors">
                  Saim Dev
                </Link>
                <span className="block text-white/50 text-[11px]">Lead Next.js Architect & Full-Stack Specialist</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />Sep 20, 2026 (Updated: Oct 31, 2026)</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />8 min read</span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Key Takeaways for Local &amp; Growth Business Owners
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Branding & Ads:</strong> Generic free builders place their own logos, cookie banners, and ads across your header and footer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>The Subdomain Trap:</strong> Running on a subdomain (e.g. yourshop.wixsite.com) builds domain authority for the builder, not your business.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Hidden Escalating Costs:</strong> Connecting a custom domain or removing ads usually costs £15–£35 per month, totaling £180–£420/year.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>The Bespoke Starter Alternative:</strong> Saim Dev builds 5 free custom Next.js websites with zero labour fees, complete code ownership, and no monthly platform subscriptions.</span>
              </li>
            </ul>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Why We Offer 5 Free Starter Builds</h2>
            <p className="text-white/65 text-base mb-4">
              Many local businesses we speak with already want a stronger online presence. Owners agree their older site feels dated and costs them enquiries. Still, unclear pricing and confusing timelines delay action.
            </p>
            <p className="text-white/65 text-base mb-4">
              So we decided to remove all three barriers at once for qualified starter builds — alongside our{" "}
              <Link href="/pricing" className="text-primary underline hover:text-white transition-colors">
                fixed-price website packages
              </Link>{" "}
              for expanding teams.
            </p>
            <p className="text-white/65 text-base mb-4">
              Saim Dev allocates five starter project slots to engineer complete, clean websites for local businesses at £0 labour cost. There are no hidden upgrades or mandatory monthly retainers. All we ask in return is honest feedback once your website goes live.
            </p>
            <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6">
              <p className="text-white/80 text-sm font-medium italic leading-relaxed">
                "This is how our studio builds verifiable case studies. Honest feedback helps us grow. Your business gets a real website you own outright — one of the lowest-risk upgrades a local business owner can claim."
              </p>
            </div>
          </section>

          {/* Section 2 — What You Get */}
          <section id="section-2" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">What You'll Actually Get</h2>
            <p className="text-white/65 text-base mb-4">
              This is not a cookie-cutter template dropped onto ad-supported free hosting. Every starter site we engineer is custom-coded — designed, developed, and tested to the same production standard as our paid{" "}
              <Link href="/services/business-websites" className="text-primary underline hover:text-white transition-colors">
                custom business website builds
              </Link>
              .
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
            {/* Comparison Matrix: Free Builders vs Bespoke Starter vs Agency */}
            <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 overflow-x-auto">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Free Website Builder vs Bespoke Starter Comparison</h3>
              <p className="text-white/50 text-xs mb-5">How generic free builders compare against Saim Dev free starter builds and traditional digital agencies:</p>
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/15 text-white/70">
                    <th className="py-2.5 pr-4 font-semibold">Evaluation Criteria</th>
                    <th className="py-2.5 px-3 font-semibold text-rose-400">DIY Free Builder (Wix/Weebly)</th>
                    <th className="py-2.5 px-3 font-semibold text-primary">Saim Dev Starter Offer</th>
                    <th className="py-2.5 pl-3 font-semibold text-white/90">Traditional Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/75">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Upfront Build Fee</td>
                    <td className="py-3 px-3">£0</td>
                    <td className="py-3 px-3 font-semibold text-primary">£0 (Labour Free)</td>
                    <td className="py-3 pl-3">£1,200 – £3,500+</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Monthly Platform Subscriptions</td>
                    <td className="py-3 px-3 text-rose-400">£15 – £35 / month</td>
                    <td className="py-3 px-3 font-semibold text-primary">£0 (Zero Platform Fees)</td>
                    <td className="py-3 pl-3">£50 – £150 / month maintenance</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Custom Domain & Branding</td>
                    <td className="py-3 px-3 text-rose-400">Locked / Forced Subdomain</td>
                    <td className="py-3 px-3 text-primary">100% Client Owned (.co.uk)</td>
                    <td className="py-3 pl-3">100% Client Owned</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Third-Party Advertisements</td>
                    <td className="py-3 px-3 text-rose-400">Yes (Builder Watermark)</td>
                    <td className="py-3 px-3 font-semibold text-primary">None (Pure Business Identity)</td>
                    <td className="py-3 pl-3">None</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Mobile Page Speed (CWV)</td>
                    <td className="py-3 px-3 text-amber-400">Slow (3.5s – 6.0s LCP)</td>
                    <td className="py-3 px-3 font-semibold text-primary">Ultra-Fast (&lt; 1.2s LCP)</td>
                    <td className="py-3 pl-3">Varies (1.8s – 3.0s)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Code & Data Ownership</td>
                    <td className="py-3 px-3 text-rose-400">Proprietary (Cannot Export)</td>
                    <td className="py-3 px-3 font-semibold text-primary">Full Git Repository Access</td>
                    <td className="py-3 pl-3">Full Ownership</td>
                  </tr>
                </tbody>
              </table>
            </div>

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

          {/* Section 5 — What We Ask */}
          <section id="section-5" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">What We Ask In Return</h2>
            <p className="text-white/65 text-base mb-6">
              Just one thing: <strong className="text-white">honest feedback</strong>.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-6 space-y-4">
              {[
                { n: "01", t: "After delivery", d: "Once your website is live, we'll ask you to share a short written review covering how the delivery process felt and what you think of the result." },
                { n: "02", t: "Completely voluntary", d: "You are never required to leave a glowing review. We want candid feedback so we know what worked and where we can keep improving." },
                { n: "03", t: "No other requirements", d: "No referral requirement. No obligation to hire us again. No monthly retainer, no ad spend, and full code ownership from day one." },
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
              That's the entire arrangement. A professionally engineered starter site delivered at zero build fee, in exchange for an honest note on your experience. If you need custom integrations, multi-service SEO pages, or ongoing features later, see our{" "}
              <Link href="/blog/small-business-website-packages-guide" className="text-primary underline hover:text-white transition-colors">
                small business website packages guide
              </Link>
              .
            </p>
          </section>

          {/* Section 6 — Why Only 5 */}
          <section id="section-6" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Why Only 5 Slots</h2>
            <p className="text-white/65 text-base mb-4">
              Our lead engineers build every website in-house without outsourcing or generic page-builder shortcuts. That keeps code clean and Core Web Vitals fast.
            </p>
            <p className="text-white/65 text-base mb-4">
              Five is the capacity our studio can allocate alongside paid client builds without compromising turnaround speed or quality. Each starter build receives the same care as a full-fee engagement.
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
              To apply via our project brief form, share:
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
              We review suitable applications and confirm five local businesses based on project fit and schedule availability.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-14 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-xl font-bold text-white mb-4">The Bottom Line</h2>
            <p className="text-white/65 text-base mb-4">
              There's no reason not to claim this. You get a professionally built website at no cost. The only thing at stake is your time — a few messages and some basic business information.
            </p>
            <p className="text-white/65 text-base">
              In return, your business owns a 24/7 digital asset that builds instant credibility. Visitors choose you over competitors who rely purely on generic social pages.
            </p>
          </section>

        </motion.article>

        <EngineeringMediaFigure
          src="/images/guides/nextjs-tco-comparison.webp"
          alt="Bespoke starter Next.js site compared visually against bloated subscription builders"
          caption="Avoid locked subdomains and recurring builder upgrades — build equity directly on your own custom domain from day one."
          tag="Starter Ownership Model"
          theme="dark"
        />

        <ArchitecturalDiagram kind="tco" theme="dark" />

        <EngineeringVerificationBadge
          contextLabel="Starter slots follow the exact same TypeScript quality, schema hygiene, and Git custody standards as our flagship builds"
          theme="dark"
        />

        {/* ── CTA — Claim Your Slot ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }} className="rounded-2xl border border-primary/20 bg-primary/5 p-7 mb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Five free website projects available</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-base cursor-pointer"
          >
            Apply for a Starter Slot
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <BlogSiloNav currentSlug="free-website-for-local-business" category="growth" />

        {/* ── Related resources ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-primary/80 mb-2">Related resources</p>
          <p className="text-white/60 text-xs sm:text-sm mb-5 font-light">
            Looking to grow your business online? Explore our development services, verified results, and quotes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link
              href="/pricing"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>fixed-price website packages</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/services/business-websites"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>custom small business websites</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/blog/small-business-website-packages-guide"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>website packages &amp; milestones guide</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/blog/why-small-business-needs-website"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>why UK small businesses need a website</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* ── Author Card ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.35 }} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-10">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev — Free Website for Small Business & Fixed-Price Next.js Starter Slots UK & US" width={56} height={56} decoding="async" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Saim Dev</p>
            <p className="text-white/40 text-xs mb-3">Full Stack Web Developer · Building business websites since 2020</p>
            <p className="text-white/55 text-sm leading-relaxed">
              We build high-performance, conversion-focused websites for growing businesses. Every site our studio delivers is fast, mobile-optimised, and built to generate real leads — not just look good.
            </p>
          </div>
        </motion.div>

        {/* ── Back ── */}
        <div className="text-center">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to the Saim Dev Blog</span>
          </Link>
        </div>
      </main>
    </div>
  );
};
