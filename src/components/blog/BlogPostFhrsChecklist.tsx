"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, 
  Printer, FileText, ChevronDown, ChevronUp, Scale, Clock, Award, Star
} from "lucide-react";
import { SiteFooter } from "../SiteFooter";

const FHRS_PILLARS = [
  {
    title: "1. Food Hygiene & Safety Procedures",
    desc: "How food is prepared, cooked, re-heated, cooled, and stored. Cross-contamination prevention and personal hygiene compliance.",
    weight: "Critical (0-25 score penalty)",
    checks: [
      "Separation of raw meats from ready-to-eat (RTE) foods across prep, storage, and utensils.",
      "Strict compliance with cooking core temperatures (75°C for 30s or 70°C for 2 min).",
      "Proper chilling protocol: food cooled below 8°C within 90 minutes.",
      "Effective personal hygiene: handwashing stations stocked with warm water, soap, and paper towels."
    ]
  },
  {
    title: "2. Structural Cleanliness & Condition of Facilities",
    desc: "Cleanliness, layout, lighting, ventilation, pest-proofing, and equipment condition across the entire premises.",
    weight: "Critical (0-25 score penalty)",
    checks: [
      "Surfaces, walls, and floors clean, non-absorbent, and easily disinfectable.",
      "Commercial extraction hoods grease-free with active TR19 compliance records.",
      "Pest control measures in place: fly screens, sealed doors, bait box monitoring.",
      "Waste storage: bins clean, lidded, and waste collected by an authorized contractor."
    ]
  },
  {
    title: "3. Confidence in Management & HACCP Documentation",
    desc: "The track record of the business, staff training records, and evidence that procedures are systematically followed.",
    weight: "Decisive for 5-Star Rating",
    checks: [
      "Safer Food, Better Business (SFBB) pack or bespoke HACCP fully completed and kept on-site.",
      "Daily opening and closing checks completed and signed off every single trading day.",
      "Staff allergen training records and Level 2 Food Hygiene certificates available for all food handlers.",
      "Clear, verified allergen matrix available for all menu items under Natasha's Law."
    ]
  }
];

const FAQS = [
  {
    q: "How does the Food Hygiene Rating Scheme (FHRS) score 0 to 5?",
    a: "Ratings are awarded by local council Environmental Health Officers (EHOs) after an inspection. Scores range from 5 ('Very Good'), 4 ('Good'), 3 ('Generally Satisfactory'), 2 ('Improvement Necessary'), 1 ('Major Improvement Necessary'), to 0 ('Urgent Improvement Necessary'). To achieve a 5, a business must score top marks across all three pillars: hygienic food handling, physical facilities, and food safety management."
  },
  {
    q: "Do I have to display my Food Hygiene Rating sticker by law?",
    a: "In Wales and Northern Ireland, displaying your green and black FHRS sticker at all customer entrances is legally mandatory. In England, physical display is voluntary, but ratings are published publicly on the Food Standards Agency website (food.gov.uk), and third-party delivery apps (Just Eat, Deliveroo, UberEats) require verified ratings to trade."
  },
  {
    q: "How can I appeal or request a re-inspection if I score below 5?",
    a: "You have 21 days from receiving your inspection report to submit an appeal to your local authority lead officer. Once you have rectified the identified non-compliances, you can apply for a paid re-rating visit, which local councils typically conduct within 3 months."
  },
  {
    q: "What is the single most common reason UK restaurants fail to get 5 stars?",
    a: "Incomplete daily paperwork. Even if your kitchen is spotless, an EHO cannot give you a 5-star rating if your temperature logs, cleaning schedules, or opening/closing checklists are missing or filled out retrospectively."
  }
];

export const BlogPostFhrsChecklist: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
        <Link
          href="/tools"
          className="text-xs bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full font-mono hover:bg-primary/20 transition-all"
        >
          Explore Free Kitchen Tools
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium truncate" aria-current="page">5-Star Food Hygiene Checklist</li>
          </ol>
        </nav>

        {/* Hero Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>UK Hospitality Compliance Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            How to Get a 5-Star Food Hygiene Rating in the UK: Complete EHO Inspection Checklist
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            A comprehensive, step-by-step masterclass for independent restaurants, takeaways, cafes, and caterers on passing your local council Environmental Health inspection with a top 5-star score.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-3">
            <span>By Saim Dev Engineering Studio</span>
            <span>•</span>
            <span>Updated: 25 October 2026</span>
            <span>•</span>
            <span>Reading time: 8 mins</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="space-y-10 text-sm sm:text-base text-white/80 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Why a 5-Star Food Hygiene Rating Is Crucial for Commercial Revenue
            </h2>
            <p>
              In the modern UK hospitality industry, your <strong>Food Hygiene Rating Scheme (FHRS)</strong> score is not merely a legal health sticker — it is one of your most valuable commercial marketing assets. According to consumer surveys conducted by the Food Standards Agency (FSA), over <strong>84% of UK diners</strong> actively check a takeaway or restaurant's hygiene score before ordering.
            </p>
            <p>
              Furthermore, major online food delivery aggregators like Deliveroo, UberEats, and Just Eat display your official rating prominently beside your menu. A drop from a 5 to a 3 or 2 rating results in immediate ranking penalties, reduced click-through rates, and lost delivery revenue.
            </p>
          </section>

          {/* Section 2: The Three Pillars */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              The Three Inspection Pillars: How EHO Officers Calculate Your Rating
            </h2>
            <p>
              During an unannounced inspection, the Environmental Health Officer evaluates your business against three distinct categories. To receive 5 stars, you must achieve high compliance across <em>all three</em> areas. A failure in even one pillar caps your maximum attainable rating.
            </p>

            <div className="space-y-4">
              {FHRS_PILLARS.map((pillar, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                    <span className="text-xs font-mono font-semibold text-primary">{pillar.weight}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70">{pillar.desc}</p>
                  <ul className="space-y-2 pt-2 border-t border-white/5 text-xs sm:text-sm text-white/80">
                    {pillar.checks.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Essential Free Tools */}
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Free Documentation Tools for Your Kitchen</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Never get caught without up-to-date paperwork. Use our free, client-side digital kitchen tools to generate and print compliant documentation in seconds:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link
                href="/food-safety-templates/food-allergen-chart"
                className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">14-Allergen Matrix Generator</div>
                  <div className="text-xs text-white/50">Natasha's Law compliant PDF</div>
                </div>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/freezer-temperature-chart"
                className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">Freezer &amp; Chiller Logs</div>
                  <div className="text-xs text-white/50">Daily temperature record sheet</div>
                </div>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            </div>
          </section>

          {/* Section 4: FAQs */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Frequently Asked Questions About UK Food Hygiene Inspections
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-semibold text-white">{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 border-t border-white/5 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Agency Conversion Bridge */}
          <section className="mt-12 p-8 rounded-3xl bg-[#111113] border border-primary/30 relative overflow-hidden">
            <span className="text-primary text-xs font-mono uppercase tracking-widest block mb-2">
              Transform Your Food Business Online
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Proud of your 5-star hygiene rating? Showcase it on a high-speed website.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl mb-6">
              Saim Dev builds custom Next.js websites for independent UK takeaways and restaurants with interactive allergen filters, commission-free menu ordering, and sub-second page speeds.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20saw%20your%205-star%20hygiene%20checklist%20and%20want%20to%20discuss%20a%20website%20for%20my%20restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:brightness-110 text-black text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Discuss Your Project on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full transition-all"
              >
                View Web Development Services
              </Link>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
