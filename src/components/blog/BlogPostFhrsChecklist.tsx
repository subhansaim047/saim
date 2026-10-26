"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, 
  Printer, FileText, ChevronDown, ChevronUp, Scale, Clock, Award, Star,
  Info, AlertOctagon, HelpCircle, ExternalLink
} from "lucide-react";
import { SiteFooter } from "../SiteFooter";

const FAQS = [
  {
    q: "What are the main areas checked during a food hygiene inspection?",
    a: "Environmental Health Officers evaluate three main areas: hygienic food handling practices, structural cleanliness and condition of facilities, and confidence in management (including written HACCP or SFBB records and staff training)."
  },
  {
    q: "How can a takeaway prepare for a food hygiene inspection?",
    a: "Takeaways should ensure daily temperature logs and cleaning schedules are filled in truthfully, train staff on allergen management, practice strict separation of raw and ready-to-eat foods, and keep an up-to-date SFBB pack on-site."
  },
  {
    q: "Does a 5-star rating guarantee future inspections will have the same result?",
    a: "No. A rating reflects the standards observed on the specific day of inspection. Food businesses must maintain consistent daily due diligence standards, as subsequent unannounced visits evaluate ongoing operational compliance."
  },
  {
    q: "What records should a restaurant keep for an inspection?",
    a: "Restaurants should maintain a documented Food Safety Management System (such as SFBB), daily opening and closing checks, fridge and freezer temperature logs, cooking/cooling records, staff hygiene training certificates, pest control reports, and an allergen matrix."
  },
  {
    q: "How can a business respond if it receives a low rating?",
    a: "A low rating does not automatically mean permanent closure. Operators should address all non-compliances identified by the officer, record corrective actions taken, and either submit an appeal within 21 days or request a paid re-rating visit from their local authority."
  },
  {
    q: "Is the Scottish scheme the same as the Food Hygiene Rating Scheme?",
    a: "No. Scotland operates the Food Hygiene Information Scheme (FHIS), which awards either a 'Pass' or 'Improvement Required' outcome, unlike the numerical 0-to-5 rating scheme used in England, Wales, and Northern Ireland."
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
            A practical preparation guide for independent restaurants, takeaways, and commercial kitchens to evaluate food handling, physical premises, and documented due diligence management.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-3">
            <span>By Saim Dev Food Safety Technical Team</span>
            <span>•</span>
            <span>Updated: October 2026</span>
            <span>•</span>
            <span>Reading time: 8 mins</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="space-y-10 text-sm sm:text-base text-white/80 leading-relaxed">

          {/* ── AEO DIRECT ANSWER HIGHLIGHT BOX ── */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-primary/30 relative space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-primary tracking-wider">
              <Info className="w-4 h-4 text-primary shrink-0" />
              <span>Direct Answer: Preparing for a 5-Star Food Hygiene Rating</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              To prepare for a top rating under the Food Hygiene Rating Scheme (FHRS), UK restaurants and takeaways must maintain verifiable standards across hygienic food handling, clean structural premises, and documented food safety management (such as SFBB or HACCP). The final rating is determined exclusively by the inspecting Environmental Health Officer (EHO) representing your local authority. A structured preparation checklist helps ensure daily practices match what officers evaluate during unannounced audits.
            </p>
          </div>

          {/* ── SECTION 1: What Does a Rating Measure? ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What Does a Food Hygiene Rating Measure?
            </h2>
            <p>
              The Food Hygiene Rating Scheme provides consumers with transparent information regarding hygiene standards at the time of inspection. Run by the Food Standards Agency (FSA) with local councils, the scheme assesses food handling, cleanliness, and food safety management.
            </p>
            <p>
              Ratings range from 0 (&lsquo;Urgent Improvement Necessary&rsquo;) to 5 (&lsquo;Very Good&rsquo;). The audit evaluates compliance with UK food safety law, including the Food Safety Act 1990 and the Food Hygiene Regulations, rather than food quality or customer service.
            </p>
          </section>

          {/* ── SECTION 2: The Three Main Rating Areas ── */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              The Three Main Food Hygiene Rating Areas
            </h2>
            <p>
              Environmental Health Officers inspect commercial kitchens across three distinct pillars. A serious failure in any single pillar caps the maximum attainable rating:
            </p>

            <div className="space-y-4">
              {/* Pillar 1 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-white">1. Food Hygiene and Handling</h3>
                  <span className="text-xs font-mono text-primary font-semibold">Operational Handling</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70">
                  Inspectors examine operational routines during storage, prep, cooking, chilling, and hot-holding:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Temperature Control:</strong> Chilled stock below 8°C (ideally 0°C–5°C); hot-holding above 63°C.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Cross-Contamination:</strong> Strict raw and ready-to-eat separation with colour-coded boards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Allergens:</strong> Clear communication of the 14 statutory allergens under Natasha&apos;s Law.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Personal Hygiene:</strong> Clean chef clothing, hairnets, bare below elbows, and hand hygiene.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Traceability:</strong> Supplier invoices ensuring one-up, one-down ingredient tracing.</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-white">2. Structural and Environmental Conditions</h3>
                  <span className="text-xs font-mono text-primary font-semibold">Facilities &amp; Cleanliness</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70">
                  Inspectors review physical condition, layout, repair, lighting, and ventilation:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Surfaces:</strong> Smooth, impervious, easy-to-clean walls, floors, and food contact areas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Hand Basins:</strong> Dedicated wash basins with warm water, soap, and paper towels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Equipment:</strong> Clean fridges with intact seals, sound boards, and degreased extractors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Pest Control:</strong> Fly screens, proofed doors (&lt;5mm gaps), and zero pest evidence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Waste:</strong> Covered external bins on clean, hard standing with tight lids.</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-white">3. Confidence in Management and Food-Safety Systems</h3>
                  <span className="text-xs font-mono text-primary font-semibold">Governance &amp; Records</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70">
                  The decisive pillar evaluates written safety management and staff compliance:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Documented FSMS:</strong> Complete SFBB pack or bespoke HACCP plan available on-site.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Daily Logs:</strong> Up-to-date opening checks, fridge logs, and hot-holding sheets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Training:</strong> Documented Level 2 hygiene and allergen training for all handlers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Practical Compliance:</strong> Staff actively follow documented procedures during service.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: 5-Star Checklist ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              5-Star Food Hygiene Rating Checklist
            </h2>
            <p>
              Use this operational checklist to organise daily shift routines across prep, cooking, and shutdown:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {/* Box A */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-primary flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Opening &amp; Delivery Checks</span>
                </h3>
                <ul className="space-y-1 text-xs text-white/70">
                  <li>&bull; Delivery temps (frozen &le; -18°C, chilled &le; 8°C).</li>
                  <li>&bull; Check packaging integrity and use-by dates.</li>
                  <li>&bull; Stock hand basins with soap and towels.</li>
                  <li>&bull; Check fridge and freezer temperatures.</li>
                </ul>
              </div>

              {/* Box B */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-primary flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Cooking &amp; Temperature Checks</span>
                </h3>
                <ul className="space-y-1 text-xs text-white/70">
                  <li>&bull; Probe core cooking to &ge; 75°C (82°C in Scotland).</li>
                  <li>&bull; Confirm hot holding stays above 63°C.</li>
                  <li>&bull; Rapid chilling below 8°C within safe limits.</li>
                  <li>&bull; Disinfect probe wipes before and after use.</li>
                </ul>
              </div>

              {/* Box C */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-primary flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Cleaning &amp; Allergen Controls</span>
                </h3>
                <ul className="space-y-1 text-xs text-white/70">
                  <li>&bull; Clean with BS EN 1276 certified sanitiser.</li>
                  <li>&bull; Ensure allergen chart matches current recipes.</li>
                  <li>&bull; Use designated colour-coded cutting boards.</li>
                  <li>&bull; Separate utensils for raw and cooked items.</li>
                </ul>
              </div>

              {/* Box D */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-primary flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Closing &amp; Management Sign-Off</span>
                </h3>
                <ul className="space-y-1 text-xs text-white/70">
                  <li>&bull; Clean surfaces, fryers, and cooking ranges.</li>
                  <li>&bull; Bag waste and close external bin lids.</li>
                  <li>&bull; Label, cover, and chill all perishable foods.</li>
                  <li>&bull; Complete and sign off daily SFBB closing log.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: What Inspectors Look For ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What Inspectors May Look For During a Visit
            </h2>
            <p>
              Environmental Health Officers evaluate practices, premises, and management records. During an audit, an inspector may observe food handlers at work, check probe calibration in iced water, question staff on allergens, and review past safety records. Inspection priorities may vary between local authorities based on local risk profiles.
            </p>
          </section>

          {/* ── SECTION 5: How to Prepare ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              How to Prepare Before an Inspection
            </h2>
            <p>
              Follow these 7 steps to review your kitchen before an unannounced visit:
            </p>

            <ol className="space-y-2 pt-1">
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">1</span>
                <div>
                  <strong>Review safety management:</strong> Confirm all safe methods and diary pages in your SFBB or HACCP pack are complete.
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">2</span>
                <div>
                  <strong>Verify daily records:</strong> Ensure temperature logs and cleaning records are completed in real time.
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">3</span>
                <div>
                  <strong>Rectify past issues:</strong> Address any non-compliances highlighted in previous council inspections.
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">4</span>
                <div>
                  <strong>Train kitchen staff:</strong> Ensure handlers can explain cooking temperatures, allergen controls, and hygiene rules.
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">5</span>
                <div>
                  <strong>Inspect the premises:</strong> Check behind cookers, under fridges, and around drains for dirt or pest ingress.
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">6</span>
                <div>
                  <strong>Check allergens and traceability:</strong> Keep allergen matrices up to date and file supplier invoices.
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">7</span>
                <div>
                  <strong>Record corrective actions:</strong> Document corrective steps taken whenever temperatures or procedures fall out of spec.
                </div>
              </li>
            </ol>
          </section>

          {/* ── SECTION 6: Low Ratings ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What Happens If a Business Receives a Low Rating?
            </h2>
            <p>
              Receiving a lower rating (0 to 2) indicates non-compliance that requires prompt remediation. It does not automatically mean closure unless an imminent health risk triggers an emergency prohibition order.
            </p>
            <p>
              Operators should address officer recommendations, rectify physical defects, and document improvements. Businesses may appeal the rating within 21 days or request a paid re-rating inspection once issues are resolved.
            </p>
          </section>

          {/* ── SECTION 7: Regional Differences ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              England, Wales, Northern Ireland and Scotland
            </h2>
            <p>
              Food hygiene schemes differ across the UK home nations:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 text-xs sm:text-sm text-white/80">
              <p>
                <strong>England, Wales, and Northern Ireland:</strong> Use the Food Hygiene Rating Scheme (FHRS), awarding scores from 0 to 5. Sticker display is mandatory in Wales and Northern Ireland, and voluntary in England (ratings appear online on the FSA register).
              </p>
              <p>
                <strong>Scotland:</strong> Operates the Food Hygiene Information Scheme (FHIS), awarding &lsquo;Pass&rsquo; or &lsquo;Improvement Required&rsquo; ratings inspected with Food Standards Scotland (FSS).
              </p>
            </div>
            <p className="text-xs text-white/60">
              *Procedures and fees for re-rating visits vary by local authority. Always consult your council and national regulator for local rules.
            </p>
          </section>

          {/* ── SECTION 8: Contextual Internal Links ── */}
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Related Food Hygiene Documentation &amp; Record Sheets</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Access free printable templates and tools:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              <Link
                href="/food-safety-templates/opening-and-closing-checklist-template"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">opening &amp; closing checklist</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/cleaning-schedule"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">daily cleaning schedule</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/fridge-temperature-record-sheet-pdf"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">fridge temperature sheet</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/hot-holding-food-temperature-log"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">hot holding temperature log</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/food-traceability"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">food traceability log</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/haccp-plan-builder"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">HACCP plan builder</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs px-4 py-2 rounded-full transition-all"
              >
                <span>return to all kitchen tools</span>
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs px-4 py-2 rounded-full transition-all"
              >
                <span>all food safety blog articles</span>
              </Link>
            </div>
          </section>

          {/* ── SECTION 9: FAQs ── */}
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

          {/* ── SECTION 10: Official Sources & Disclaimer ── */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/60 space-y-1.5">
            <span className="font-bold text-white block">Official Guidance Sources:</span>
            <p>&bull; <a href="https://www.food.gov.uk/safety-hygiene/food-hygiene-rating-scheme" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Food Standards Agency (FSA): Food Hygiene Rating Scheme guidance</a></p>
            <p>&bull; <a href="https://www.foodstandards.gov.scot/business-and-industry/safety-and-regulation/food-hygiene-information-scheme" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Food Standards Scotland (FSS): Food Hygiene Information Scheme</a></p>
            <p>&bull; <a href="https://www.gov.uk/food-hygiene-rating" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GOV.UK: Food hygiene ratings for businesses</a></p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-[11px] text-white/50 leading-relaxed">
            <p>
              <strong>Food Safety Information Disclaimer:</strong> This article provides general information and does not replace a site-specific Food Safety Management System, official council guidance or an Environmental Health Officer inspection.
            </p>
          </div>

          {/* ── AGENCY CONVERSION BRIDGE ── */}
          <section className="mt-12 p-8 rounded-3xl bg-[#111113] border border-primary/30 relative overflow-hidden">
            <span className="text-primary text-xs font-mono uppercase tracking-widest block mb-2">
              Transform Your Food Business Online
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Proud of your hygiene standards? Showcase them on a fast, modern website.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl mb-6">
              Saim Dev builds custom Next.js websites for independent UK takeaways and restaurants with allergen filters, commission-free ordering, and sub-second page speeds.
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
