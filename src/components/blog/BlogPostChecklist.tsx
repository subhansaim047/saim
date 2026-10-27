"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, CheckSquare, ShieldCheck, AlertCircle, 
  Thermometer, CheckCircle2, ChevronDown, ChevronUp, Clock, MessageSquare 
} from "lucide-react";

const FOUR_CS = [
  {
    title: "Cleaning",
    desc: "Two-stage cleaning process (clean with detergent to remove grease, then disinfect with BS EN 1276 compliant sanitiser with correct contact time)."
  },
  {
    title: "Cooking",
    desc: "Ensuring high-risk foods reach a core temperature of 75°C for at least 30 seconds (or 70°C for 2 minutes). Probes must be calibrated monthly."
  },
  {
    title: "Chilling",
    desc: "Refrigerated high-risk food must legally stay below 8°C (best practice is 1°C to 5°C). Hot food must be cooled to chilled temperatures within 90 minutes."
  },
  {
    title: "Cross-Contamination",
    desc: "Strict separation of raw meats and ready-to-eat (RTE) foods. Dedicated chopping boards, knives, and vacuum packers (under the E. coli O157 guidance)."
  }
];

const FAQS = [
  {
    q: "How long must a UK food business keep SFBB diary sheets on file?",
    a: "Environmental Health Officers expect to inspect at least 3 to 6 months of completed daily opening and closing diary sheets during an unannounced inspection. For HACCP temperature records, keeping 12 months on file is standard industry best practice."
  },
  {
    q: "What causes a restaurant to lose its 5-star Food Hygiene Rating immediately?",
    a: "The most common reasons for a rating downgrade are: incomplete or missing SFBB daily diary sheets, fridges running above 8°C with no corrective action logged, evidence of pest activity, lack of hot running water at handwash basins, and failure to provide an up-to-date allergen matrix."
  },
  {
    q: "Can I use digital checklists instead of the paper SFBB binder?",
    a: "Yes. The Food Standards Agency (FSA) permits digital records provided they are readily accessible during an inspection, accurately reflect daily kitchen checks, and include timestamps and corrective action notes."
  },
  {
    q: "What is the legal difference between an opening check and a closing check?",
    a: "Opening checks ensure equipment is functioning and food is safe before service begins (e.g. fridge temps, hot water, clean surfaces). Closing checks ensure food is protected overnight (e.g. date labeling, bin removal, pest checks, equipment shutdown)."
  }
];

export const BlogPostChecklist: React.FC = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* ── Top Header ── */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover border border-white/15" />
          <span className="text-sm font-semibold text-white">Saim Dev Hospitality Systems</span>
        </Link>
      </header>

      {/* ── Hero / Article Header ── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        <header className="mb-12 border-b border-white/10 pb-10">
                  {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium truncate" aria-current="page">SFBB Opening & Closing Checklists Guide</li>
          </ol>
        </nav>

<div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              SFBB &amp; 5-Star Food Hygiene
            </span>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 8 Min Read
            </span>
            <span className="text-white/40 text-xs">Updated October 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            SFBB Opening &amp; Closing Checklists: The Daily Kitchen Routine That Helps You Prepare for a 5-Star Food Hygiene Rating
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
            A practical guide to the critical opening and closing checks Environmental Health Officers demand in UK kitchens. 
            Includes temperature thresholds, corrective actions, and our free digital SFBB checklist tool.
          </p>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12 rounded-full border border-primary/30 object-cover" />
            <div>
              <div className="text-sm font-bold text-white">Saim Dev Food Safety Architecture</div>
              <div className="text-xs text-white/50">Lead Commercial Kitchen Systems &amp; Web Architect</div>
            </div>
          </div>
        </header>

        {/* ── Key Takeaway Alert Box ── */}
        <div className="p-6 rounded-2xl bg-blue-950/30 border border-blue-600/40 text-blue-200 mb-12 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
          <div className="text-sm leading-relaxed">
            <strong className="block text-white font-semibold mb-1 text-base">The EHO Rating Reality:</strong>
            Under the Food Standards Agency (FSA) scoring framework, a kitchen can be spotless, but if your 
            <strong> &apos;Confidence in Management&apos;</strong> score is marked down due to missing daily diary entries or unlogged fridge temps, 
            the highest hygiene rating you can possibly receive is a 1 or 2 star.
          </div>
        </div>

        {/* ── Key Regulatory Definition ── */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white/90 mb-12">
          <dl className="space-y-2 text-sm leading-relaxed">
            <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold">What is SFBB (Safer Food, Better Business)?</dt>
            <dd className="text-white/80">
              Safer Food, Better Business (SFBB) is an established food safety management pack developed by the UK Food Standards Agency (FSA). It helps small catering and retail businesses comply with food hygiene regulations through documented procedures across cooking, cleaning, chilling, cross-contamination, and daily opening and closing checks.
            </dd>
          </dl>
        </div>

        {/* ── Table of Contents ── */}
        <nav className="p-6 rounded-2xl bg-[#0d0d10] border border-white/10 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 font-bold">Table of Contents</h2>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="#what-eho-inspects" className="hover:text-primary hover:underline">&rarr; 1. What EHOs Inspect in the First 15 Minutes</a></li>
            <li><a href="#four-cs" className="hover:text-primary hover:underline">&rarr; 2. The 4 C&apos;s of UK Food Safety</a></li>
            <li><a href="#morning-opening" className="hover:text-primary hover:underline">&rarr; 3. The Morning Opening Checklist (Crucial Temperatures)</a></li>
            <li><a href="#evening-closing" className="hover:text-primary hover:underline">&rarr; 4. The Night Closing Checklist (Pest &amp; Spoilage Defense)</a></li>
            <li><a href="#paper-vs-digital" className="hover:text-primary hover:underline">&rarr; 5. Why Paper SFBB Binders Fail Modern Audits</a></li>
            <li><a href="#interactive-tool" className="hover:text-primary hover:underline">&rarr; 6. Free Digital SFBB Opening &amp; Closing Checklist Tool</a></li>
            <li><a href="#frequently-asked-questions" className="hover:text-primary hover:underline">&rarr; 7. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ── SECTION 1 ── */}
        <section id="what-eho-inspects" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            1. What EHOs Inspect in the First 15 Minutes
          </h2>
          <p>
            When an Environmental Health Officer arrives unannounced, their inspection focuses on three distinct pillars:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <strong className="block text-white text-sm mb-1">1. Food Hygiene Practices</strong>
              <span className="text-xs text-white/60">Cross-contamination, cooking core temps, handwashing discipline, allergen control.</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <strong className="block text-white text-sm mb-1">2. Structure &amp; Cleanliness</strong>
              <span className="text-xs text-white/60">Ventilation, pest proofing, tile condition, lighting, drainage, wash facilities.</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <strong className="block text-white text-sm mb-1">3. Management Confidence</strong>
              <span className="text-xs text-white/60">SFBB diary sheets, staff training records, probe calibration logs, HACCP proof.</span>
            </div>
          </div>
          <p>
            Many owners don&apos;t realize that Category 3 holds equal weight. Missing diary entries over the past 3 weeks will instantly cost you your 5-star green window sticker.
          </p>
        </section>

        {/* ── SECTION 2 ── */}
        <section id="four-cs" className="space-y-6 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            2. The 4 C&apos;s of UK Food Safety
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {FOUR_CS.map((c, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <strong className="text-white text-sm font-semibold">{c.title}</strong>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3 ── */}
        <section id="morning-opening" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            3. The Morning Opening Checklist (Crucial Temperatures)
          </h2>
          <p>
            Before the first prep pan is touched or the fryer turned on, the opening supervisor must execute and log:
          </p>
          <ul className="space-y-3 list-disc pl-5 text-sm text-white/70">
            <li><strong>Chilled Storage Verification:</strong> All walk-ins, reach-ins, and under-counter fridges must be below 8°C (ideally 1°C–5°C). Freezers must be below -18°C.</li>
            <li><strong>Handwash Stations:</strong> Basins must be fully stocked with anti-bacterial liquid soap, hygienic warm running water, and disposable paper towels. A sink without soap is an immediate non-compliance.</li>
            <li><strong>Food Contact Sanitisation:</strong> All prep counters and meat slicers disinfected with chemical sanitiser meeting BS EN 1276 standard.</li>
            <li><strong>Hot Water Boiler Check:</strong> Sinks must have water hot enough to dissolve kitchen grease effectively.</li>
          </ul>
        </section>

        {/* ── SECTION 4 ── */}
        <section id="evening-closing" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            4. The Night Closing Checklist (Pest &amp; Spoilage Defense)
          </h2>
          <p>
            At the end of service, kitchen fatigue sets in. This is when food is left uncovered or bins are left inside overnight, attracting rodents and cockroaches.
          </p>
          <ul className="space-y-3 list-disc pl-5 text-sm text-white/70">
            <li><strong>Day Dot &amp; Date Coding:</strong> All opened sauces, prepped proteins, and dairy must be tightly covered, dated, and logged for shelf-life (maximum 2–3 days for chilled cooked proteins).</li>
            <li><strong>Internal Waste Evacuation:</strong> All food bins emptied, washed, and liners removed to external locked commercial wheelie bins.</li>
            <li><strong>Equipment Deep Sweep:</strong> Clean underneath fryers, griddles, and line fridges to eliminate grease crumbs that attract pests.</li>
            <li><strong>Appliance Isolation:</strong> Gas mains turned off, non-essential fryers disconnected, and fridge doors verified shut.</li>
          </ul>
        </section>

        {/* ── SECTION 5 ── */}
        <section id="paper-vs-digital" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            5. Why Paper SFBB Binders Fail Modern Audits
          </h2>
          <p>
            The physical blue FSA SFBB binder has served UK kitchens for 15 years, but it has severe liabilities: 
            pages get soaked with fryer grease, pencil ticks are filled out in advance for the whole week (which EHOs spot instantly), 
            and physical sheets are easily lost when staff changes occur.
          </p>
          <p>
            Digital checklists ensure honest, real-time accountability with timestamps, notes for corrective action 
            (e.g., <em>&apos;Fridge 2 was 9.5°C; seals cleaned and re-checked at 4.2°C after 45 mins&apos;</em>), and instant printable records.
          </p>
        </section>

        {/* ── SECTION 6: LIVE INTERACTIVE TOOL ── */}
        <section id="interactive-tool" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121215] to-[#1c1c24] border border-primary/30 text-white space-y-6 shadow-2xl mb-16">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider">
              Free Kitchen Tool
            </span>
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">Daily Hygiene Log &amp; Audit Ready</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Use the Free Digital SFBB Opening &amp; Closing Checklist Tool
          </h3>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Run your daily kitchen opening and closing audits on your tablet or phone. 
            Toggle tasks with pass/fail badges, record corrective action notes, and print a clean, professional inspection log with zero paywall.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <Link
              href="/food-safety-templates/opening-and-closing-checklist-template"
              className="p-3.5 rounded-xl bg-primary text-black font-bold text-xs sm:text-sm flex items-center justify-between shadow-xl hover:brightness-110 transition-all"
            >
              <span>opening and closing checklist</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            <Link
              href="/food-safety-templates/cleaning-schedule"
              className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-between border border-white/15 transition-all"
            >
              <span>cleaning schedule</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
            </Link>

            <Link
              href="/food-safety-templates/fridge-temperature-record-sheet-pdf"
              className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-between border border-white/15 transition-all"
            >
              <span>kitchen temperature log</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>
        </section>

        {/* ── SECTION 7: FAQS ── */}
        <section id="frequently-asked-questions" className="space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            7. Frequently Asked Questions (SFBB &amp; Hygiene Audits)
          </h2>

          <div className="space-y-3 pt-2">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-primary" /> : <ChevronDown className="w-4 h-4 shrink-0 text-white/40" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Bottom Navigation ── */}
        <div className="text-center mb-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Need a Commercial Kitchen Web Ordering System Built to 5-Star Hygiene Standards?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            We engineer custom Next.js takeaway websites for UK food businesses. 
            Automated allergen declarations, direct WhatsApp kitchen orders, and zero monthly commission fees.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%205-star%20compliant%20takeaway%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Kitchen Project on WhatsApp (+92 319 6526604)</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
