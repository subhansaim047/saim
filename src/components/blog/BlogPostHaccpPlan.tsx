"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, 
  FileSpreadsheet, ClipboardList, ChevronDown, ChevronUp, Clock, MessageSquare 
} from "lucide-react";

const SEVEN_PRINCIPLES = [
  {
    num: "1",
    title: "Conduct a Hazard Analysis",
    desc: "Map every process step (Delivery → Chilled Storage → Prep → Cooking → Cooling → Reheating → Service) and identify Biological (pathogens), Chemical (cleaning agents), Physical (glass, metal), and Allergenic hazards."
  },
  {
    num: "2",
    title: "Determine Critical Control Points (CCPs)",
    desc: "Identify the exact points where a hazard can be prevented, eliminated, or reduced to an acceptable level using the Codex CCP Decision Tree. Not every step is a CCP; only steps where subsequent processes cannot fix a failure."
  },
  {
    num: "3",
    title: "Establish Critical Limits",
    desc: "Set quantifiable, measurable boundaries separating safe food from unsafe food (e.g. Cooking core temp: minimum 75°C for 30s; Chilled storage: maximum 8°C)."
  },
  {
    num: "4",
    title: "Establish Monitoring Procedures",
    desc: "Define who monitors the CCP, how it is measured (calibrated digital probe thermometer), and how frequently readings are recorded."
  },
  {
    num: "5",
    title: "Establish Corrective Actions",
    desc: "Pre-determine the mandatory actions taken when a critical limit is breached (e.g. 'If burger core temp is 68°C, continue cooking until 75°C is reached; if hot holding drops below 63°C for over 2 hours, dispose of food immediately')."
  },
  {
    num: "6",
    title: "Establish Verification Procedures",
    desc: "Regular audits confirming that your HACCP plan is operating effectively (monthly probe ice/boiling calibration, periodic microbiological surface swabs, management reviews)."
  },
  {
    num: "7",
    title: "Establish Record-Keeping & Documentation",
    desc: "Maintain verifiable written or digital proof of all checks, temperature logs, supplier specs, and corrective action histories for EHO inspection."
  }
];

const FAQS = [
  {
    q: "Is a full HACCP plan legally required for a small UK takeaway or cafe?",
    a: "Under Regulation (EC) No 852/2004 on the hygiene of foodstuffs, all food businesses must put in place, implement, and maintain a permanent procedure based on HACCP principles. For small caterers, following the Food Standards Agency's 'Safer Food, Better Business' (SFBB) pack satisfies this requirement. However, businesses handling complex processes (sous-vide, sushi/raw fish, vacuum packing, or high-volume central production) must produce a bespoke documented HACCP plan."
  },
  {
    q: "What is the difference between a CCP and a Prerequisite Programme (PRP)?",
    a: "Prerequisite Programmes (PRPs) are basic environmental and operational conditions necessary across the entire kitchen (pest control, staff handwashing, structural hygiene, supplier approval). A Critical Control Point (CCP) is a specific operational step where a hazard is actively eliminated or controlled (such as cooking poultry to 75°C)."
  },
  {
    q: "How often must a commercial kitchen review its HACCP plan?",
    a: "A HACCP plan must be reviewed at least annually, AND immediately whenever there is a change to your menu recipes, cooking equipment, supplier sources, kitchen layout, or if an audit identifies a systemic food safety breakdown."
  },
  {
    q: "Can I be prosecuted if my HACCP records are incomplete?",
    a: "Yes. In the UK, Environmental Health Officers can issue Hygiene Improvement Notices (HINs) requiring documentation within 14 to 28 days. Continued failure to comply is a criminal offense subject to unlimited fines in the Magistrates' Court."
  }
];

export const BlogPostHaccpPlan: React.FC = () => {
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
            <li className="text-white font-medium truncate" aria-current="page">How to Write a UK HACCP Plan Step-by-Step</li>
          </ol>
        </nav>

<div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              HACCP Principles &amp; Legal Food Law
            </span>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 10 Min Read
            </span>
            <span className="text-white/40 text-xs">Updated October 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            How to Write a HACCP Plan for Your UK Food Business (7 Principles + Free Digital Plan Builder)
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
            A comprehensive, plain-English blueprint for commercial food business operators, head chefs, and catering managers. 
            Demystifying hazard analysis, critical limits, and corrective actions under Regulation (EC) 852/2004.
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
        <div className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-600/40 text-indigo-200 mb-12 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
          <div className="text-sm leading-relaxed">
            <strong className="block text-white font-semibold mb-1 text-base">The Core Goal of HACCP:</strong>
            HACCP (Hazard Analysis and Critical Control Point) is not an academic paper-pushing exercise. 
            It is a preventative management system designed to catch bacterial, chemical, physical, and allergenic hazards 
            <em>before</em> food reaches a customer&apos;s plate.
          </div>
        </div>

        {/* ── Key Regulatory Definition ── */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white/90 mb-12">
          <dl className="space-y-2 text-sm leading-relaxed">
            <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold">What is HACCP (Hazard Analysis and Critical Control Point)?</dt>
            <dd className="text-white/80">
              Hazard Analysis and Critical Control Point (HACCP) is an internationally recognised, systematic food safety management system codified into UK law under Regulation (EC) No 852/2004. It identifies, evaluates, and controls biological, chemical, physical, and allergenic hazards at specific operational stages called Critical Control Points (CCPs).
            </dd>
          </dl>
        </div>

        {/* ── Table of Contents ── */}
        <nav className="p-6 rounded-2xl bg-[#0d0d10] border border-white/10 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 font-bold">Table of Contents</h2>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="#what-is-haccp" className="hover:text-primary hover:underline">&rarr; 1. What is HACCP &amp; Why is It Legally Enforced?</a></li>
            <li><a href="#seven-principles" className="hover:text-primary hover:underline">&rarr; 2. The 7 Principles of HACCP Broken Down</a></li>
            <li><a href="#identifying-ccps" className="hover:text-primary hover:underline">&rarr; 3. Identifying Real Critical Control Points (The Decision Tree)</a></li>
            <li><a href="#critical-limits" className="hover:text-primary hover:underline">&rarr; 4. Critical Limits &amp; Measurable Thresholds</a></li>
            <li><a href="#corrective-actions" className="hover:text-primary hover:underline">&rarr; 5. Designing Defensible Corrective Action Protocols</a></li>
            <li><a href="#interactive-tool" className="hover:text-primary hover:underline">&rarr; 6. Free Interactive HACCP Plan Builder Tool</a></li>
            <li><a href="#frequently-asked-questions" className="hover:text-primary hover:underline">&rarr; 7. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ── SECTION 1 ── */}
        <section id="what-is-haccp" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            1. What is HACCP &amp; Why is It Legally Enforced?
          </h2>
          <p>
            Developed originally by NASA in the 1960s to maximize food safety for astronauts, HACCP was adopted globally 
            by the Codex Alimentarius Commission and codified into UK and European law under <strong>Regulation (EC) 852/2004</strong>.
          </p>
          <p>
            Traditional kitchen management relied on <em>&quot;end-product testing&quot;</em> — tasting a soup or inspecting a finished steak. 
            HACCP recognizes that bacterial toxins (like <em>Bacillus cereus</em> in cooked rice or <em>Salmonella</em> in poultry) 
            cannot be smelled, tasted, or seen with the naked eye. Safety is achieved by strictly controlling process parameters 
            (time, temperature, separation).
          </p>
        </section>

        {/* ── SECTION 2 ── */}
        <section id="seven-principles" className="space-y-6 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            2. The 7 Principles of HACCP Broken Down
          </h2>
          <div className="space-y-4 pt-2">
            {SEVEN_PRINCIPLES.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {p.num}
                  </span>
                  <strong className="text-white text-base font-semibold">{p.title}</strong>
                </div>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed pl-9">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3 ── */}
        <section id="identifying-ccps" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            3. Identifying Real Critical Control Points (The Decision Tree)
          </h2>
          <p>
            A common mistake made by chefs building their first HACCP plan is designating <em>every single kitchen step</em> as a CCP. 
            If you have 25 CCPs on a single burger, your kitchen staff will drown in paperwork and stop logging accurately.
          </p>
          <div className="p-5 rounded-2xl bg-[#0c0c10] border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-primary uppercase font-mono tracking-wider">The Codex CCP Question Test:</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li><strong>Q1:</strong> Do preventive control measures exist at this step? (If no, modify process).</li>
              <li><strong>Q2:</strong> Is the step specifically designed to eliminate or reduce the hazard to an acceptable level? (e.g. Cooking is designed to kill pathogens → <strong>YES = CCP</strong>).</li>
              <li><strong>Q3:</strong> Could contamination occur at unacceptable levels?</li>
              <li><strong>Q4:</strong> Will a subsequent step eliminate or reduce the hazard? (e.g. Raw meat prep has high bacteria, but subsequent cooking kills it → Raw prep is a PRP, Cooking is the CCP).</li>
            </ul>
          </div>
        </section>

        {/* ── SECTION 4 ── */}
        <section id="critical-limits" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            4. Critical Limits &amp; Measurable Thresholds
          </h2>
          <p>
            Critical limits must never be vague guidelines like <em>&apos;cook until piping hot&apos;</em>. Environmental Health Officers demand concrete numbers:
          </p>
          <div className="overflow-x-auto border border-white/10 rounded-2xl my-4">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1D1D1F] text-white font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Process Step</th>
                  <th className="p-3">Critical Limit (UK Benchmark)</th>
                  <th className="p-3">Monitoring Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-white/80">
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">Chilled Delivery Reception</td>
                  <td className="p-3 text-primary">≤ 8°C (ideally ≤ 5°C)</td>
                  <td className="p-3">Infrared or probe delivery pack surface</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">Cooking Poultry / Meat</td>
                  <td className="p-3 text-emerald-400">≥ 75°C for 30s (or 70°C for 2 min)</td>
                  <td className="p-3">Disinfected digital probe in thickest part</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">Hot Holding (Bain-Marie)</td>
                  <td className="p-3 text-amber-400">≥ 63°C continuously</td>
                  <td className="p-3">Probe core every 2 hours</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">Cooling Cooked Food</td>
                  <td className="p-3 text-blue-400">Cool to &lt; 8°C within 90 minutes</td>
                  <td className="p-3">Shallow trays, blast chiller, ice water bath</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 5 ── */}
        <section id="corrective-actions" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            5. Designing Defensible Corrective Action Protocols
          </h2>
          <p>
            EHOs do not fail restaurants because a temperature reading was out of range once. 
            They fail restaurants because when the reading was out of range, <strong>nobody took action, or nobody logged the action</strong>.
          </p>
          <p>
            Your HACCP plan must give line cooks immediate, binary instructions: 
            <em>&quot;If core temp &lt; 75°C, return to oven for 5 minutes and re-test. If fridge temp &gt; 8°C for over 4 hours, condemn and dispose of all high-risk items.&quot;</em>
          </p>
        </section>

        {/* ── SECTION 6: LIVE INTERACTIVE TOOL ── */}
        <section id="interactive-tool" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121215] to-[#1c1c24] border border-primary/30 text-white space-y-6 shadow-2xl mb-16">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider">
              Free Kitchen Tool
            </span>
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">HACCP Workflow &amp; CCP Matrix</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Use the Free Interactive HACCP Plan Builder Tool
          </h3>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Generate an EHO-ready HACCP workflow with pre-configured hazards, CCP designations, critical limits, 
            and corrective action protocols. Edit every field directly in your browser and export a clean PDF with zero paywalls.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/haccp-plan-builder"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>HACCP plan builder</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>
        </section>

        {/* ── SECTION 7: FAQS ── */}
        <section id="frequently-asked-questions" className="space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            7. Frequently Asked Questions (HACCP Law &amp; Auditing)
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
            Need a Bespoke Online Ordering Website for Your Restaurant?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            We engineer high-performance web ordering apps for UK food businesses. 
            Integrated allergen management, local Google Maps ranking, and zero third-party commission fees.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20custom%20restaurant%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Restaurant Project on WhatsApp (+92 319 6526604)</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
