"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BlogSiloNav } from "@/components/blog/BlogSiloNav";
import { ArrowLeft, ArrowRight, Share2, ChevronDown, ChevronUp, CheckCircle, Smartphone, Zap, Search, Layout } from "lucide-react";
import { ArchitecturalDiagram, EngineeringMediaFigure, EngineeringVerificationBadge } from "@/components/ui/EditorialVisualPack";

const faqs = [
  {
    q: "Is a fixed-price website package a one-time fee or monthly contract?",
    a: "Our website packages operate on clear one-off fixed fees (£250 to £790 GBP / $300 to $999 USD) split into 50/50 milestone payments. There are zero mandatory monthly agency retainers or recurring maintenance traps.",
  },
  {
    q: "Will the website be fully custom or a bloated WordPress template?",
    a: "100% custom. We do not re-skin cheap templates or pile up fragile plugins. We engineer the UI layout, responsive structure, and technical SEO schema directly in Next.js 16 to fit your business goals.",
  },
  {
    q: "How long will the project take?",
    a: "Landing pages ship in 3 to 5 business days, and standard 5-to-15-page small business websites launch within 5 to 10 business days.",
  },
  {
    q: "Do we keep full control of our domain, hosting, and code?",
    a: "Yes. Your domain registrar, Vercel or Cloudflare hosting plan, and complete GitHub source code remain in your business's own name from launch day onward.",
  }
];

const sections = [
  "Why Fixed-Scope Packages Matter",
  "What Traditional Agencies Hide",
  "What a Complete Package Includes",
  "Who Fixed Packages Fit Best",
  "Frequently Asked Questions",
  "How to Lock Your Fixed Scope",
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
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to the Saim Dev Blog</span>
        </Link>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full cursor-pointer">
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        </div>
      </header>

      {/* ── Hero Article Header ── */}
      <main>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-10">
                {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium truncate" aria-current="page">Small Business Website Packages Guide</li>
          </ol>
        </nav>

<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary/20 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              Buyer&apos;s Scope Guide
            </span>
            <span className="text-white/40 text-sm font-medium">6 Min Read</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
            Small Business Website Packages Guide: <span className="text-primary">What Fixed Scopes Actually Include</span>
          </h1>
          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            <strong>Direct Answer:</strong> A reliable fixed-price small business website package delivers bespoke Next.js code, mobile-first clarity, and Schema.org local SEO setup upfront. It also enforces transparent 50/50 milestone protection and full GitHub repository ownership with zero monthly retainers. Compare all <Link href="/pricing" className="underline text-primary font-semibold">published package tiers here</Link>.
          </div>

          <EngineeringMediaFigure
            src="/images/guides/nextjs-tco-comparison.webp"
            alt="Fixed-scope Next.js package structure compared against bloated agency retainers"
            caption="Fixed-scope engineering eliminates monthly CMS tax and plugin bloat while handing full source ownership to UK, US, and European business owners."
            tag="Package Scope Comparison"
            theme="dark"
            priority={true}
          />

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-9 h-9 rounded-full border border-white/20 object-cover" width={36} height={36} />
              <div>
                <Link href="/about" className="font-semibold text-white hover:text-primary transition-colors">
                  Saim Dev
                </Link>
                <span className="block text-white/50 text-[11px]">Lead Next.js Architect & Full-Stack Specialist</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <span className="flex items-center gap-1.5">Sep 20, 2026 (Updated: Oct 31, 2026)</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Key Takeaways for UK, US &amp; European Business Owners
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Fixed Milestone Pricing:</strong> Eliminates open-ended agency hourly billing with transparent deliverable commitments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Custom Next.js Engineering:</strong> 100% custom-coded architecture delivering sub-second load times and 95+ Core Web Vitals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Built-In Technical SEO:</strong> Complete JSON-LD schema markup, self-canonical tags, and local search optimization.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Complete Asset Ownership:</strong> You own the Git repository, domain, and assets with zero ongoing maintenance retainers.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ── Content Body ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          
          {/* Table of Contents */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 mb-12">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Inside This Guide</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Why Fixed-Scope Packages Matter</h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Most small businesses hesitate to invest in a bespoke website because traditional agency quotes feel open-ended: vague hourly estimates, unexpected change-order invoices, and multi-month waits just to see a first working draft.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Our engineering studio structures every engagement around clear fixed deliverables (£250 to £790 UK / $300 to $999 US), transparent 50/50 milestone sign-offs, and direct WhatsApp communication with the engineer building your codebase. You can inspect all <Link href="/services/business-websites" className="text-primary hover:underline">business website specs</Link> before starting.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">What Traditional Agencies &amp; DIY Builders Hide</h2>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Lower upfront pricing on rental platforms almost always hides higher multi-year costs. Watch for recurring builder lock-in vs 100% owned code.
            </p>
            <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5 mb-6">
              <p className="text-white font-medium italic text-lg leading-relaxed">
                &ldquo;True value comes from speed, clean search architecture, and owning your production codebase outright — never from hidden monthly plugin subscriptions.&rdquo;
              </p>
            </div>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              If you are still weighing cheap DIY builders against custom starter packages, read our comparison on{" "}
              <Link href="/blog/free-website-for-local-business" className="text-primary hover:underline">
                free small business websites and hidden platform fees
              </Link>{" "}
              alongside our full{" "}
              <Link href="/blog/nextjs-website-development-cost-uk-us" className="text-primary hover:underline">
                Next.js UK &amp; US pricing breakdown
              </Link>.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">What a Complete Package Includes</h2>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Every fixed-price build includes core engineering deliverables built for fast load speed and search discoverability:
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
          
            {/* Package Scope & Deliverables Table */}
            <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 overflow-x-auto">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Bespoke Website Package Scope & Deliverables</h3>
              <p className="text-white/50 text-xs mb-5">Everything included in our fixed-price Next.js development sprint:</p>
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/15 text-white/70">
                    <th className="py-2.5 pr-4 font-semibold">Sprint Phase</th>
                    <th className="py-2.5 px-3 font-semibold text-primary">Core Deliverables</th>
                    <th className="py-2.5 pl-3 font-semibold text-white/90">Standard Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/75">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">1. Discovery & Strategy</td>
                    <td className="py-3 px-3">Information architecture, competitor audit, primary keyword mapping</td>
                    <td className="py-3 pl-3">Days 1 – 2</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">2. Custom UI Engineering</td>
                    <td className="py-3 px-3">Mobile-first Next.js frontend, interactive components, responsive layout</td>
                    <td className="py-3 pl-3">Days 3 – 5</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">3. Technical SEO & Schema</td>
                    <td className="py-3 px-3">LocalBusiness, Organization, BreadcrumbList, WebP image compression</td>
                    <td className="py-3 pl-3">Days 6 – 7</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">4. Testing & Deployment</td>
                    <td className="py-3 px-3">Core Web Vitals validation, contact form verification, live launch</td>
                    <td className="py-3 pl-3">Days 8 – 10</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Who Fixed Packages Fit Best</h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              We build specifically for independent founders and service operators who value direct technical quality over bloated agency retainers:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Local UK & US service providers (clinics, trades, restaurants, hospitality) needing direct enquiries.",
                "Startups & SaaS founders shipping fast validation sites without locking equity into monthly retainers.",
                "E-commerce brands replacing slow liquid or plugin-heavy storefronts with smooth Next.js checkouts.",
                "Established companies migrating away from dated WordPress builds via 301-safe architecture."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/70 text-base leading-relaxed">
              Explore our full <Link href="/pricing" className="text-primary hover:underline">transparent pricing packages</Link> or <Link href="/services/website-development" className="text-primary hover:underline">Next.js website development specifications</Link> to see the exact deliverables per tier.
            </p>
            <ArchitecturalDiagram kind="tco" theme="dark" />
            <EngineeringVerificationBadge
              contextLabel="Published fixed-milestone terms aligned with active GBP & USD studio tiers"
              theme="dark"
            />
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
            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">How to Lock Your Fixed Scope</h2>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto relative z-10">
              Share your target website goals or reference URLs on WhatsApp. We review the scope, provide a fixed GBP/USD milestone quote, and can prepare a focused concept preview before production kickoff.
            </p>
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim%20Dev,%20we%27d%20like%20a%20fixed-price%20website%20package%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-primary/25 cursor-pointer relative z-10"
            >
              Request Fixed Quote on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>

        </motion.article>

        <BlogSiloNav currentSlug="small-business-website-packages-guide" category="growth" />

        {/* ── Related resources ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-primary/80 mb-2">Related resources</p>
          <p className="text-white/60 text-xs sm:text-sm mb-5 font-light">
            Learn more about our web development services, bespoke architecture, and direct quotes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <Link
              href="/services"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>fixed-price website development</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/services/website-development"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>Next.js website development UK &amp; US</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/contact"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>discuss your website project</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* ── Author Card ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.35 }} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-10">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={56} height={56} decoding="async" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Saim Dev</p>
            <p className="text-white/40 text-xs mb-3">Full Stack Web Developer • Building business websites since 2020</p>
            <p className="text-white/55 text-sm leading-relaxed">
              We build high-performance, conversion-focused websites for growing businesses. Every site our studio delivers is fast, mobile-optimised, and built to generate real leads — not just look good.
            </p>
          </div>
        </motion.div>

        {/* ── Back ── */}
        <div className="text-center mt-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to the Saim Dev Blog</span>
          </Link>
        </div>
      </div>
      </main>
    </div>
  );
};
