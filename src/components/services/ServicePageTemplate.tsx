"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  HelpCircle, 
  Zap, 
  Award, 
  Check, 
  X,
  Smartphone,
  Search,
  Lock,
  Building,
  Utensils,
  Stethoscope,
  Scissors,
  Briefcase,
  Laptop
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface FeatureBenefit {
  feature: string;
  benefit: string;
  description: string;
}

export interface IndustryApplication {
  industry: string;
  description: string;
  exampleProject?: string;
  demoUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration?: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics?: string;
  demoUrl: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  badge?: string;
  features: string[];
  popular?: boolean;
}

export interface TestimonialItem {
  quote: string;
  client: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  serviceName: string;
  mainKeyword: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  badge: string;
  h1: string;
  subheading: string;
  painPoints: { problem: string; solution: string }[];
  deliverables: ServiceDeliverable[];
  featuresAndBenefits: FeatureBenefit[];
  industries: IndustryApplication[];
  process: ProcessStep[];
  techStack: { name: string; role: string }[];
  caseStudies: CaseStudy[];
  pricing: PricingTier[];
  whyChooseUs: { title: string; desc: string }[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  finalCta: {
    headline: string;
    description: string;
    primaryButtonText: string;
    whatsappText: string;
  };
  relatedServices: { name: string; href: string; desc: string }[];
}

const getIndustryIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("restaurant") || lower.includes("takeaway") || lower.includes("food")) return <Utensils className="w-5 h-5 text-[#FF4A1C]" />;
  if (lower.includes("health") || lower.includes("clinic") || lower.includes("doctor")) return <Stethoscope className="w-5 h-5 text-[#FF4A1C]" />;
  if (lower.includes("beauty") || lower.includes("salon") || lower.includes("spa")) return <Scissors className="w-5 h-5 text-[#FF4A1C]" />;
  if (lower.includes("architecture") || lower.includes("construction") || lower.includes("estate")) return <Building className="w-5 h-5 text-[#FF4A1C]" />;
  if (lower.includes("corporate") || lower.includes("b2b")) return <Briefcase className="w-5 h-5 text-[#FF4A1C]" />;
  return <Laptop className="w-5 h-5 text-[#FF4A1C]" />;
};

export const ServicePageTemplate: React.FC<{ data: ServicePageData }> = ({ data }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappHref = `https://wa.me/923196526604?text=${encodeURIComponent(
    `Hi Saim, I'm interested in ${data.serviceName} (${data.finalCta.whatsappText}) with the $0 upfront offer.`
  )}`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF4A1C] selection:text-white relative">
      {/* GLOBAL TRUST BAR */}
      <aside aria-label="Announcement" className="w-full bg-[#141414] border-b border-white/10 py-2.5 px-4 text-center text-xs text-white/70">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-6">
          <span className="inline-flex items-center gap-1.5 font-medium text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Our Agency Registered in UK &amp; Based in Pakistan
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="text-[#FF4A1C] font-medium">$0 Upfront Deposit (Pay Only If 100% Satisfied)</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span>Zero Monthly Charges</span>
        </div>
      </aside>

      {/* TOP NAVIGATION / BREADCRUMB */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-[#FF4A1C] transition-colors">
            <span className="w-7 h-7 rounded-lg bg-[#FF4A1C] flex items-center justify-center text-black font-extrabold text-sm">S</span>
            <span>Saim Dev</span>
          </Link>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="hidden md:flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">{data.serviceName}</span>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/services"
              className="text-xs text-white/70 hover:text-white px-3 py-1.5 rounded-full border border-white/15 hover:border-white/30 transition-all"
            >
              All Services
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4A1C] hover:bg-[#e03d12] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 shadow-[0_2px_12px_rgba(255,74,28,0.3)]"
            >
              <span>$0 Upfront Kickoff</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ==============================================================
            01 — HERO SECTION
        =============================================================== */}
        <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF4A1C]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 mb-6 text-xs font-mono tracking-wider uppercase text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#FF4A1C]" />
              <span>{data.badge}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              {data.h1}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-white/75 font-light max-w-3xl mx-auto leading-relaxed mb-10">
              {data.subheading}
            </p>

            {/* Winning Proposition Highlight Card */}
            <div className="max-w-2xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.04] via-[#FF4A1C]/[0.08] to-white/[0.04] border border-[#FF4A1C]/30 text-left flex items-start gap-3.5 shadow-lg">
              <ShieldCheck className="w-6 h-6 text-[#FF4A1C] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-white">Our 100% Risk-Free Winning Guarantee: </span>
                <span className="text-white/80">
                  Kisi bhi project ke liye koi upfront payment nahi. Details share karein, hum live preview bana kar dikhayenge. Pasand aaya to khareed lena, na pasand aaye to ek rupya bhi mat dena. Aur koi monthly charges nahi — 100% code aapka.
                </span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-neutral-100 text-black font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full flex items-center gap-3 transition-all duration-300 shadow-[0_4px_24px_rgba(255,255,255,0.2)] active:scale-95"
              >
                <span>Get a Free Consultation ($0 Upfront)</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="#case-studies"
                className="bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full transition-all"
              >
                View Live Demos
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-lg sm:text-2xl font-bold font-mono text-white">UK Reg.</p>
                <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Agency in UK &amp; PK</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold font-mono text-[#FF4A1C]">£0 / $0</p>
                <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Upfront Deposit</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold font-mono text-white">&lt;500ms</p>
                <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Next.js Speed</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold font-mono text-emerald-400">0 / mo</p>
                <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Zero Monthly Lock-In</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            02 — PROBLEM & SOLUTION
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0E0E0E]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Problem vs Solution</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Why Your Business Needs Professional {data.serviceName}
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                Outdated templates and bloated systems kill your growth. Here is what is broken today and how our custom Next.js engineering fixes it permanently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {data.painPoints.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-red-400 mb-1">Outdated Problem #{idx + 1}</p>
                        <p className="text-sm sm:text-base font-semibold text-white/90">{item.problem}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-4 border-t border-white/10">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">SaimDev Next.js Solution</p>
                        <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            03 — SERVICE OVERVIEW (What Is Included)
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Scope of Work</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                What Is Included in Our {data.serviceName}?
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                Complete clarity on every deliverable. No vague agency promises, no hidden extras.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {data.deliverables.map((deliv, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF4A1C]/50 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white font-mono font-bold text-sm mb-4 group-hover:bg-[#FF4A1C] group-hover:text-black transition-all">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 tracking-tight">{deliv.title}</h3>
                  <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">{deliv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            04 — FEATURES & BENEFITS
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0E0E0E]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Value Proposition</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                What Makes Our Solution Different?
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                Every technical feature directly produces tangible business and revenue outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.featuresAndBenefits.map((item, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#FF4A1C]/10 border border-[#FF4A1C]/30 text-[#FF4A1C] text-xs font-semibold mb-4">
                      {item.feature}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.benefit}</h3>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            05 — INDUSTRY APPLICATIONS
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Market Fit</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Who Is This Service For?
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                Specialized architectures customized for diverse vertical commercial sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.industries.map((ind, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4">
                      {getIndustryIcon(ind.industry)}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{ind.industry}</h3>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-4">{ind.description}</p>
                  </div>
                  {ind.demoUrl && (
                    <a
                      href={ind.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF4A1C] hover:underline pt-2 border-t border-white/10"
                    >
                      <span>Explore Live Demo ({ind.exampleProject})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            06 — OUR PROCESS
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0E0E0E]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">How We Work</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Our 5-Step Risk-Free Engineering Process
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                From initial scope to live deployment — built first with $0 upfront commitment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {data.process.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 relative">
                  <div className="text-xs font-mono text-[#FF4A1C] mb-2 font-bold">{step.step}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-white/65 font-light leading-relaxed">{step.description}</p>
                  {step.duration && (
                    <span className="mt-4 inline-block text-[10px] font-mono text-white/40 uppercase tracking-wider">
                      {step.duration}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            07 — TECHNOLOGY STACK (No WordPress, No Shopify)
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Technologies We Use</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Why We Build With Next.js &amp; Modern Frameworks
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                Hum bloated WordPress plugins ya restrictive Shopify liquid templates par kaam nahi karte. Hum duniya ki har website aur eCommerce store Next.js mein banate hain jo 10x zyada fast, unhackable aur 0 monthly platform fees ke sath chalti hai.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {data.techStack.map((tech, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-3">
                    <Laptop className="w-5 h-5 text-[#FF4A1C]" />
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{tech.name}</p>
                  <p className="text-[11px] text-white/50">{tech.role}</p>
                </div>
              ))}
            </div>

            {/* WordPress / Shopify Comparison Callout */}
            <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/10 max-w-3xl mx-auto">
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF4A1C]" />
                Next.js Advantage Over WordPress &amp; Shopify
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                WordPress requires constant PHP updates, heavy caching plugins, and leaves you vulnerable to database exploits. Shopify charges monthly app fees for basic functions ($30–$300/mo). With our custom Next.js builds, you get instant edge CDN delivery, 100/100 Core Web Vitals, and <strong>zero monthly recurring platform fees</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ==============================================================
            08 — PORTFOLIO / CASE STUDIES (Live Demos)
        =============================================================== */}
        <section id="case-studies" className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0E0E0E]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Live Proof &amp; Demos</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Our Recent Work &amp; Live Deployments
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                Inspect actual live production demo sites engineered by our studio. Click any project to test real responsiveness and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.caseStudies.map((study, idx) => (
                <div key={idx} className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#FF4A1C]/50 transition-all">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#FF4A1C]">{study.category}</span>
                      {study.metrics && (
                        <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          {study.metrics}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {study.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono bg-white/[0.06] text-white/60 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                    <a
                      href={study.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-white hover:text-[#FF4A1C] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[11px] text-white/40">Tested 100% Responsive</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            09 — PRICING / INVESTMENT (Zero Upfront & No Monthly)
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Transparent Investment</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {data.serviceName} Packages
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                Transparent one-time pricing. 100% source code ownership. Zero recurring monthly lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.pricing.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-7 rounded-3xl border flex flex-col justify-between relative transition-all ${
                    tier.popular
                      ? "bg-gradient-to-b from-[#1C1310] to-[#121212] border-[#FF4A1C]/60 shadow-[0_12px_48px_rgba(255,74,28,0.15)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF4A1C] text-white text-[11px] font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-xs text-white/60 mb-6 font-light">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">{tier.price}</span>
                      <span className="text-xs text-white/40 block mt-1">One-time payment • $0 upfront deposit</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-[#FF4A1C] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/923196526604?text=${encodeURIComponent(
                      `Hi Saim, I'd like to get started with ${tier.name} (${tier.price}) for ${data.serviceName} with $0 upfront.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-full text-xs font-semibold text-center transition-all ${
                      tier.popular
                        ? "bg-[#FF4A1C] hover:bg-[#e03d12] text-white shadow-md"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    Start Project ($0 Upfront)
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            10 — WHY CHOOSE US
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0E0E0E]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Our Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Why Businesses Choose SaimDev
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                What sets our digital architecture apart from traditional freelancers and bloated agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.whyChooseUs.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#FF4A1C]/10 border border-[#FF4A1C]/30 flex items-center justify-center text-[#FF4A1C] font-mono font-bold text-xs mb-4">
                    ✓
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            11 — TESTIMONIALS & TRUST
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Client Feedback</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                Real feedback from business owners who upgraded their digital presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.testimonials.map((t, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-white/80 font-light italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm font-semibold text-white">{t.client}</p>
                    <p className="text-xs text-white/50">{t.role}, {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            12 — FAQS (Interactive Accordion)
        =============================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0E0E0E]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">FAQ &amp; Clarifications</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 font-light">
                Everything you need to know about our {data.serviceName} process, pricing, and guarantee.
              </p>
            </div>

            <div className="space-y-3">
              {data.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/60 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180 text-[#FF4A1C]" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-white/75 font-light leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            13 — FINAL CONVERSION CTA
        =============================================================== */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 border-t border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF4A1C]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-3">Zero Risk • 100% Satisfaction</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              {data.finalCta.headline}
            </h2>
            <p className="text-sm sm:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              {data.finalCta.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4A1C] hover:bg-[#e03d12] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 shadow-[0_4px_24px_rgba(255,74,28,0.4)] active:scale-95"
              >
                <span>{data.finalCta.primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm sm:text-base px-6 py-4 rounded-full transition-all"
              >
                Compare Other Services
              </Link>
            </div>

            <p className="text-[11px] text-white/40 font-mono uppercase tracking-wider mt-6">
              UK REGISTERED • BASED IN PAKISTAN • PAY ONLY IF SATISFIED • ZERO MONTHLY FEES
            </p>
          </div>
        </section>

        {/* RELATED SERVICES INTERNAL LINKS */}
        {data.relatedServices && data.relatedServices.length > 0 && (
          <section className="py-12 px-4 sm:px-8 border-t border-white/10 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto">
              <p className="text-xs font-mono uppercase text-white/40 tracking-wider mb-4">Explore Related Services</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.relatedServices.map((rel, i) => (
                  <Link
                    key={i}
                    href={rel.href}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all block group"
                  >
                    <p className="text-sm font-semibold text-white group-hover:text-[#FF4A1C] transition-colors">{rel.name}</p>
                    <p className="text-xs text-white/50 mt-1 font-light">{rel.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <SiteFooter theme="dark" />
    </div>
  );
};
