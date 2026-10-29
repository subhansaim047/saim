"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, 
  FileText, ChevronDown, ChevronUp, Scale, Clock, Award, Star,
  Info, AlertOctagon, HelpCircle, ExternalLink, Flame, ShieldAlert,
  Sparkles, XCircle, TrendingUp, Smartphone, Utensils
} from "lucide-react";
import { SiteFooter } from "../SiteFooter";

const FAQS = [
  {
    q: "What are the three main areas checked during a food hygiene inspection?",
    a: "Environmental Health Officers (EHOs) evaluate three statutory pillars: (1) Hygienic food handling (prep, cooking, chilling, storage), (2) Physical cleanliness and condition of the premises (lighting, ventilation, handwash basins, pest proofing), and (3) Confidence in management (documented SFBB/HACCP records, opening/closing checks, and staff training)."
  },
  {
    q: "How many penalty points can a kitchen have to get a 5-star rating?",
    a: "Under the Food Hygiene Rating Scheme (FHRS), ratings are determined by penalty scores where lower is better. To achieve a 5-star rating, a food business must score 0 to 5 penalty points across each of the three inspection categories, with a total score not exceeding 15 to 20 points across all areas."
  },
  {
    q: "How does a Food Hygiene Rating affect Just Eat and Uber Eats listings?",
    a: "Major UK delivery apps (Just Eat, Deliveroo, Uber Eats) prominently display council hygiene ratings on restaurant profiles. Venues with 1 or 2 stars are often filtered out by diners or risk automatic suspension from delivery platforms until a compliant rating is restored."
  },
  {
    q: "What records should a restaurant or takeaway keep on-site?",
    a: "Operators should maintain a documented Food Safety Management System (such as the FSA's Safer Food, Better Business pack), daily opening and closing check sheets, fridge/freezer temperature logs, core cooking and cooling records, staff hygiene training records, pest control reports, and an up-to-date 14 allergen matrix."
  },
  {
    q: "What can a business do if it receives an unfair or low rating?",
    a: "A lower rating does not automatically mean permanent closure. Operators should immediately rectify identified non-compliances, record corrective actions in their diary, and submit an appeal within 21 days or request a formal paid re-rating inspection from their local council once improvements are completed."
  },
  {
    q: "Is the Scottish food hygiene system the same as England and Wales?",
    a: "No. England, Wales, and Northern Ireland use the 0 to 5 Food Hygiene Rating Scheme (FHRS). Scotland operates the Food Hygiene Information Scheme (FHIS), which awards either a 'Pass' or 'Improvement Required' outcome inspected with Food Standards Scotland."
  }
];

const RATING_TIERS = [
  {
    stars: "5",
    label: "Very Good",
    score: "0 – 5 points",
    deliveryImpact: "Maximum algorithm boost & featured placement",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    starCount: 5,
    summary: "Highest standard of compliance; fully documented systems, spotless kitchen, and trained team."
  },
  {
    stars: "4",
    label: "Good",
    score: "10 points",
    deliveryImpact: "Standard delivery app listing; trusted by customers",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    starCount: 4,
    summary: "High standards with minor structural or administrative points requiring routine attention."
  },
  {
    stars: "3",
    label: "Generally Satisfactory",
    score: "15 points",
    deliveryImpact: "30-40% lower click-through rate on takeaway apps",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    starCount: 3,
    summary: "Meets basic statutory requirements, but gaps in daily records or surface maintenance exist."
  },
  {
    stars: "2",
    label: "Improvement Necessary",
    score: "20 points",
    deliveryImpact: "Risk of app de-listing; steep drop in customer orders",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    starCount: 2,
    summary: "Systemic hygiene or structural failures. Formal council warnings and follow-up visit scheduled."
  },
  {
    stars: "1",
    label: "Major Improvement Needed",
    score: "25+ points",
    deliveryImpact: "Severe revenue collapse; flagged on public council registers",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    starCount: 1,
    summary: "Critical non-compliance in food handling, structure, or management. Mandated re-inspection within weeks."
  },
  {
    stars: "0",
    label: "Urgent Improvement",
    score: "30+ points",
    deliveryImpact: "Immediate platform ban; risk of Hygiene Emergency Closure",
    badgeColor: "bg-red-600/30 text-red-300 border-red-500/50",
    starCount: 0,
    summary: "Imminent danger to public health (e.g. pest infestation, raw cross-contamination). Closure order risk."
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
            UK Food Hygiene Rating 5-Star Checklist for Restaurants and Takeaways
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            A practical, skimmable preparation checklist for UK restaurants, takeaways, and dark kitchens aiming for a top Food Hygiene Rating. Master the three EHO scoring pillars, avoid common downgrade traps, and access free daily digital record templates.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-3">
            <span>By Saim Dev Food Safety Technical Team</span>
            <span>•</span>
            <span>Updated: October 2026</span>
            <span>•</span>
            <span>Reading time: 7 mins</span>
            <span>•</span>
            <span className="text-primary font-mono font-medium">Scannable Kitchen Guide</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="space-y-12 text-sm sm:text-base text-white/80 leading-relaxed">

          {/* ── AEO DIRECT ANSWER HIGHLIGHT BOX ── */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-primary/40 relative space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-primary tracking-wider">
              <Info className="w-4 h-4 text-primary shrink-0" />
              <span>Direct Answer: How EHOs Score a 5-Star Food Hygiene Rating</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Under the UK Food Hygiene Rating Scheme (FHRS), an unannounced inspection by an Environmental Health Officer (EHO) evaluates three areas: <strong>(1) Food Handling &amp; Temperatures</strong>, <strong>(2) Kitchen Cleanliness &amp; Structure</strong>, and <strong>(3) Confidence in Management (SFBB/HACCP diary logs)</strong>. To achieve a 5-star rating, your business must score between 0 and 5 penalty points in every single pillar. A single failure in management records will instantly cap your rating at 3 or lower, regardless of how clean your kitchen surfaces are.
            </p>
          </div>

          {/* ── SECTION 1: 0 to 5 Rating Breakdown Table (Competitor-Beating Rubric) ── */}
          <section className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                The Official FHRS 0 to 5 Rating System at a Glance
              </h2>
              <span className="text-xs font-mono text-primary font-semibold">Council Scoring Rubric</span>
            </div>

            <p className="text-xs sm:text-sm text-white/70">
              Unlike consumer review sites, council inspection scores are calculated using penalty points (where 0 points is a perfect score). Here is what each star tier represents and how it directly impacts customer orders:
            </p>

            {/* Desktop & Mobile Card/Table Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {RATING_TIERS.map((tier, idx) => (
                <div 
                  key={idx}
                  className={`p-4 rounded-2xl border bg-white/[0.02] flex flex-col justify-between transition-all ${
                    tier.stars === "5" ? "border-emerald-500/40 shadow-lg shadow-emerald-500/5 bg-emerald-500/[0.02]" : "border-white/10"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, sIdx) => (
                          <Star 
                            key={sIdx} 
                            className={`w-3.5 h-3.5 ${
                              sIdx < tier.starCount ? "text-amber-400 fill-amber-400" : "text-white/15"
                            }`} 
                          />
                        ))}
                      </div>
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full border ${tier.badgeColor}`}>
                        Score: {tier.score}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                        <span>{tier.stars} Star: {tier.label}</span>
                      </h3>
                      <p className="text-xs text-white/70 mt-1 leading-snug">
                        {tier.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-white/60 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span><strong>App Impact:</strong> {tier.deliveryImpact}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 2: The Three Core Inspection Pillars ── */}
          <section className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                The 3 Core EHO Inspection Pillars Explained
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                Your final score is calculated across three distinct legal criteria. A major failure in any single pillar acts as a hard ceiling on your maximum score:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Pillar 1 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-mono font-bold text-sm mb-3">
                    01
                  </div>
                  <h3 className="text-base font-bold text-white">Food Hygiene &amp; Handling</h3>
                  <p className="text-xs text-white/60 mb-3">Safe handling, preparation, cooking, chilling, and storage routines.</p>
                  
                  <ul className="space-y-2 text-xs text-white/80">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Chilled storage:</strong> Below 8°C (ideally 0°C to 5°C).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Cooking cores:</strong> Cook core meat to &ge; 75°C.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Cross-contamination:</strong> Color-coded boards &amp; raw meat segregation.</span>
                    </li>
                  </ul>
                </div>
                <div className="text-[11px] font-mono text-primary bg-primary/5 p-2 rounded-lg border border-primary/10">
                  Target: 0 to 5 penalty pts
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-sm mb-3">
                    02
                  </div>
                  <h3 className="text-base font-bold text-white">Structural Condition</h3>
                  <p className="text-xs text-white/60 mb-3">Cleanliness, layout, ventilation, lighting, and pest controls.</p>
                  
                  <ul className="space-y-2 text-xs text-white/80">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Handwash stations:</strong> Warm water, antibacterial soap, paper towels.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Surfaces &amp; Seals:</strong> Intact fridge rubber seals; smooth washable walls.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Pest proofing:</strong> External doors tight with zero gaps &gt; 5mm.</span>
                    </li>
                  </ul>
                </div>
                <div className="text-[11px] font-mono text-primary bg-primary/5 p-2 rounded-lg border border-primary/10">
                  Target: 0 to 5 penalty pts
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-sm mb-3">
                    03
                  </div>
                  <h3 className="text-base font-bold text-white">Confidence in Management</h3>
                  <p className="text-xs text-white/60 mb-3">Written safety systems, daily logs, and verified staff training.</p>
                  
                  <ul className="space-y-2 text-xs text-white/80">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Documented FSMS:</strong> Active Safer Food, Better Business (SFBB) pack.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Daily real-time logs:</strong> Signed opening/closing diary checks.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Allergen matrix:</strong> Complete statutory 14 allergen documentation.</span>
                    </li>
                  </ul>
                </div>
                <div className="text-[11px] font-mono text-primary bg-primary/5 p-2 rounded-lg border border-primary/10">
                  Target: 0 to 5 penalty pts
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: The Skimmable Shift-by-Shift Kitchen Checklist ── */}
          <section className="space-y-5">
            <div className="border-b border-white/10 pb-3">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Daily 5-Star Kitchen Shift Checklist
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                Use this operational checklist to audit your takeaway or restaurant across each daily phase:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Shift 1: Opening */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>1. Morning Opening &amp; Deliveries</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">Shift 1</span>
                </div>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Delivery temperature checks:</strong> Reject chilled stock over 8°C or frozen over -18°C.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Fridge &amp; freezer probe check:</strong> Verify units read below 5°C and -18°C.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Handwash readiness:</strong> Unobstructed basins stocked with soap and blue roll.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Date labels &amp; FIFO:</strong> Verify use-by dates on opened prep containers.</span>
                  </li>
                </ul>
              </div>

              {/* Shift 2: Service & Cooking */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span>2. Prep, Cooking &amp; Hot Holding</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded font-bold">Shift 2</span>
                </div>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span><strong>Core cooking temp:</strong> Probe batch meats to &ge; 75°C (instant safe kill step).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span><strong>Hot holding units:</strong> Ensure carvery/bain-maries stay consistently above 63°C.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span><strong>Two-stage cooling:</strong> Cool batch gravies/curries within 90 mins before chilling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">✓</span>
                    <span><strong>Probe sanitation:</strong> Clean probe with anti-bacterial wipes between every reading.</span>
                  </li>
                </ul>
              </div>

              {/* Shift 3: Cleaning & Allergens */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                    <span>3. Cross-Contamination &amp; Allergens</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded font-bold">Continuous</span>
                </div>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span><strong>Colour-coded boards:</strong> Red for raw meat, green for salad, yellow for cooked poultry.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span><strong>BS EN 1276 sanitiser:</strong> Observe manufacturer contact times (30 to 60 seconds).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span><strong>Allergen separation:</strong> Clean dedicated utensils when preparing gluten/nut-free meals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">✓</span>
                    <span><strong>Packaging compliance:</strong> Accurate ingredient bolding for Natasha&apos;s Law PPDS labels.</span>
                  </li>
                </ul>
              </div>

              {/* Shift 4: Closing */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>4. Night Closing &amp; Diary Sign-Off</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold">Shift 3</span>
                </div>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Deep surface degrease:</strong> Clean cooktops, extraction filters, and waste traps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Food covering:</strong> Lidded containers in walk-in units (raw meats stored on bottom shelf).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>External waste bins:</strong> Double-bag food waste; ensure outdoor bins are locked and closed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>SFBB daily diary signed:</strong> Sign off opening/closing checks before locking up.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: 🚨 Top 5 EHO Red Flags (Instant Downgrade Traps) ── */}
          <section className="p-6 sm:p-7 rounded-3xl bg-red-950/20 border border-red-500/30 space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Critical Inspection Traps: Top 5 EHO Red Flags</span>
            </div>
            
            <h3 className="text-xl font-bold text-white">
              Avoid These 5 Common Errors That Automatically Cap Your Rating
            </h3>

            <p className="text-xs sm:text-sm text-white/70">
              When an Environmental Health Officer enters your premises unannounced, these five immediate red flags result in heavy penalty points regardless of overall cleanliness:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-black/40 border border-red-500/20 space-y-1">
                <span className="text-xs font-bold text-red-300 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  <span>1. Blocked Handwash Sinks</span>
                </span>
                <p className="text-[11px] text-white/60">
                  Using the designated hand basin to soak utensils or store colanders. Basins must be dedicated purely to handwashing.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-red-500/20 space-y-1">
                <span className="text-xs font-bold text-red-300 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  <span>2. Backfilling SFBB Diaries</span>
                </span>
                <p className="text-[11px] text-white/60">
                  Writing identical numbers in advance or using the same pen to fill out weeks of logs at once. EHOs easily spot backfilling.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-red-500/20 space-y-1">
                <span className="text-xs font-bold text-red-300 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  <span>3. Damaged Refrigerator Door Seals</span>
                </span>
                <p className="text-[11px] text-white/60">
                  Cracked, split, or mouldy magnetic seals prevent temperature retention and harbour listeria bacteria.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-red-500/20 space-y-1">
                <span className="text-xs font-bold text-red-300 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  <span>4. Shared Raw &amp; Ready-to-Eat Tongs</span>
                </span>
                <p className="text-[11px] text-white/60">
                  Using the same burger turner or tongs on raw patties and cooked buns is treated as severe cross-contamination.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-red-500/20 space-y-1 sm:col-span-2">
                <span className="text-xs font-bold text-red-300 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  <span>5. Outdated Statutory Allergen Information</span>
                </span>
                <p className="text-[11px] text-white/60">
                  Unable to present an accurate matrix covering all 14 statutory allergens for your live menu items. Under Natasha&apos;s Law, verbal guessing without written records is severely penalised.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 5: Commercial Impact on Delivery Apps ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-primary" />
              <span>How Hygiene Ratings Impact Just Eat, Deliveroo &amp; Uber Eats</span>
            </h2>
            <p>
              A 5-star Food Hygiene Rating is not just a regulatory sticker; it is your strongest digital marketing asset. Delivery aggregators feature council hygiene ratings directly on menu headings:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <span className="text-xs font-bold text-white block">Search Filter Exclusion</span>
                <p className="text-xs text-white/70">
                  Over 60% of diners actively filter results by &quot;4+ Star Hygiene&quot; on Just Eat and Deliveroo, hiding venues with lower ratings.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <span className="text-xs font-bold text-white block">Consumer Trust Drop-Off</span>
                <p className="text-xs text-white/70">
                  FSA consumer research confirms 91% of customers recognise the sticker, with 43% refusing to order from venues rated 3 or lower.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <span className="text-xs font-bold text-white block">Algorithm Ranking Factor</span>
                <p className="text-xs text-white/70">
                  Delivery app algorithms reward compliant 5-star kitchens with higher default placement in local takeaway category listings.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 6: Contextual Kitchen Tools & Digital Record Sheets ── */}
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span>Interactive Tools &amp; Printable Food Safety Sheets</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                Streamline your kitchen compliance with our free digital tools and print-ready record templates:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              <Link
                href="/tools/ppds-label-generator"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-amber-400/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-amber-400 font-bold uppercase">Interactive Tool</div>
                  <span className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">PPDS Label Maker</span>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
              </Link>

              <Link
                href="/tools/allergen-matrix-generator"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-orange-400/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-orange-400 font-bold uppercase">Interactive Tool</div>
                  <span className="text-xs font-semibold text-white group-hover:text-orange-300 transition-colors">14 Allergen Matrix</span>
                </div>
                <ArrowRight className="w-4 h-4 text-orange-400 shrink-0" />
              </Link>

              <Link
                href="/tools/food-cost-calculator"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-emerald-400/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Interactive Tool</div>
                  <span className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">Food Cost Calculator</span>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
              </Link>

              <Link
                href="/food-safety-templates/opening-and-closing-checklist-template"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">Opening &amp; Closing Checklist</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>

              <Link
                href="/food-safety-templates/fridge-temperature-record-sheet-pdf"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">Fridge Temperature Sheet</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>

              <Link
                href="/food-safety-templates/haccp-plan-builder"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">HACCP Plan Builder</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs px-4 py-2 rounded-full transition-all"
              >
                <span>Return to All Kitchen Tools</span>
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs px-4 py-2 rounded-full transition-all"
              >
                <span>All Food Safety Blog Guides</span>
              </Link>
            </div>
          </section>

          {/* ── SECTION 7: Regional Differences ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Regional Regulatory Differences: England vs Wales, NI &amp; Scotland
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 text-xs sm:text-sm text-white/80">
              <p>
                <strong>England:</strong> Sticker display in the window is currently voluntary, but all ratings appear publicly on the online FSA register. Most delivery platforms automatically fetch and display this public data.
              </p>
              <p>
                <strong>Wales &amp; Northern Ireland:</strong> Displaying your physical rating sticker at customer entrances is a mandatory statutory requirement under national legislation.
              </p>
              <p>
                <strong>Scotland:</strong> Operates the Food Hygiene Information Scheme (FHIS), issuing either a &apos;Pass&apos; or &apos;Improvement Required&apos; certificate in partnership with Food Standards Scotland (FSS).
              </p>
            </div>
          </section>

          {/* ── SECTION 8: FAQs ── */}
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

          {/* ── SECTION 9: Official Sources & Disclaimer ── */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/60 space-y-1.5">
            <span className="font-bold text-white block">Official Guidance Sources:</span>
            <p>&bull; <a href="https://www.food.gov.uk/safety-hygiene/food-hygiene-rating-scheme" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Food Standards Agency (FSA): Food Hygiene Rating Scheme guidance</a></p>
            <p>&bull; <a href="https://www.foodstandards.gov.scot/business-and-industry/safety-and-regulation/food-hygiene-information-scheme" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Food Standards Scotland (FSS): Food Hygiene Information Scheme</a></p>
            <p>&bull; <a href="https://www.gov.uk/food-hygiene-rating" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GOV.UK: Food hygiene ratings for businesses</a></p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-[11px] text-white/50 leading-relaxed">
            <p>
              <strong>Food Safety Information Disclaimer:</strong> This article provides general compliance guidance based on published UK food safety regulations. It does not replace an official on-site Environmental Health Officer inspection or legal safety consultation.
            </p>
          </div>

          {/* ── AGENCY CONVERSION BRIDGE ── */}
          <section className="mt-12 p-8 rounded-3xl bg-[#111113] border border-primary/30 relative overflow-hidden">
            <span className="text-primary text-xs font-mono uppercase tracking-widest block mb-2">
              Transform Your Food Business Online
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Proud of your 5-star hygiene standards? Showcase them on a bespoke takeaway website.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl mb-6">
              Saim Dev builds bespoke Next.js web applications for independent UK restaurants and takeaways with built-in allergen filters, 0% commission direct ordering, and ultra-fast page loads.
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
                href="/services/takeaway-web-design"
                className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full transition-all"
              >
                Takeaway Web Design Services
              </Link>
            </div>
          </section>

        </article>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
