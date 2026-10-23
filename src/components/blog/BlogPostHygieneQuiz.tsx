"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, Award, CheckCircle2, AlertTriangle, 
  HelpCircle, Sparkles, ChevronDown, ChevronUp, Clock, MessageSquare 
} from "lucide-react";

const SAMPLE_QUESTIONS = [
  {
    q: "What is the legal maximum temperature for storing chilled high-risk food in the UK?",
    a: "8°C. (Food Safety and Hygiene (England) Regulations 2013). While 8°C is the legal ceiling, industry best practice recommends setting commercial fridges between 1°C and 5°C to retard bacterial multiplication.",
    why: "Pathogenic bacteria (like Listeria and Salmonella) double in population every 20 minutes between 8°C and 63°C."
  },
  {
    q: "What is the required core temperature and time combination when cooking poultry in the UK?",
    a: "75°C for at least 30 seconds (or equivalent time/temperature combinations such as 70°C for 2 minutes).",
    why: "This heat profile delivers a mandatory 6-log (99.9999%) reduction in Campylobacter and Salmonella populations."
  },
  {
    q: "How long must a food handler stay away from work after suffering from vomiting or diarrhea?",
    a: "48 hours after symptoms have completely stopped.",
    why: "Viral particles (especially Norovirus) continue shedding in stool and vomitus for up to 48 hours after clinical recovery, representing a massive outbreak vector."
  },
  {
    q: "What is the primary food safety reason for using color-coded chopping boards?",
    a: "To prevent cross-contamination between raw foods (especially raw poultry and red meat) and ready-to-eat (RTE) foods like salads, cooked meats, and bread.",
    why: "Raw meat naturally harbours bacterial flora that is destroyed only by cooking; if transferred to salad via a shared board, it will be consumed directly by the customer."
  }
];

const FAQS = [
  {
    q: "Is a Level 2 Food Hygiene certificate legally required for all kitchen staff in the UK?",
    a: "Under Regulation (EC) 852/2004, food business operators must ensure that food handlers are 'supervised and instructed and/or trained in food hygiene matters commensurate with their work activity'. While having a physical Level 2 certificate is not explicitly mandated by name in the text of the act, it is the universal benchmark used by Environmental Health Officers (EHO) to verify compliance."
  },
  {
    q: "How long is a Level 2 Food Hygiene certificate valid?",
    a: "Level 2 certificates do not have a statutory expiration date, but industry bodies and the Food Standards Agency strongly recommend refreshing training every 3 years. EHOs will question staff competence if certificates are older than 3 years."
  },
  {
    q: "Can I train kitchen staff in-house instead of paying for external courses?",
    a: "Yes, provided the in-house trainer is qualified (holding at least Level 3 or 4 Award in Food Safety Supervising) and accurate records of training modules, test results, and practical assessments are kept on site in the personnel file."
  },
  {
    q: "What happens if an EHO discovers an untrained cook working on the line?",
    a: "The EHO can issue an immediate Hygiene Improvement Notice requiring documented training within a set timeframe. If cross-contamination practices are observed, the business's Food Hygiene Rating will be downgraded, and severe breaches can result in prohibition notices."
  }
];

export const BlogPostHygieneQuiz: React.FC = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* ── Top Header ── */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </button>
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-white/15" />
          <span className="text-sm font-semibold text-white">Saim Dev Hospitality Systems</span>
        </Link>
      </header>

      {/* ── Hero / Article Header ── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        <header className="mb-12 border-b border-white/10 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Staff Training &amp; Food Hygiene Exam
            </span>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 7 Min Read
            </span>
            <span className="text-white/40 text-xs">Updated October 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            Level 2 Food Hygiene Practice Test: 10 Critical Questions Every Kitchen Worker &amp; Chef Must Pass
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
            How to evaluate your kitchen team&apos;s food safety knowledge before an EHO inspection. 
            Review temperature danger zones, cross-contamination rules, and UK food hygiene standards with our free interactive quiz.
          </p>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-12 h-12 rounded-full border border-primary/30 object-cover" />
            <div>
              <div className="text-sm font-bold text-white">Saim Dev Food Safety Architecture</div>
              <div className="text-xs text-white/50">Lead Commercial Kitchen Systems &amp; Web Architect</div>
            </div>
          </div>
        </header>

        {/* ── Key Takeaway Alert Box ── */}
        <div className="p-6 rounded-2xl bg-purple-950/30 border border-purple-600/40 text-purple-200 mb-12 flex items-start gap-4">
          <Award className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
          <div className="text-sm leading-relaxed">
            <strong className="block text-white font-semibold mb-1 text-base">The Inspection Test:</strong>
            Environmental Health Officers regularly conduct spot-check verbal interviews with junior kitchen staff. 
            If a kitchen porter or line cook cannot state the maximum legal fridge temperature (8°C) or describe the proper 
            two-stage cleaning procedure, the officer will log a lack of staff supervision on your official inspection report.
          </div>
        </div>

        {/* ── Table of Contents ── */}
        <nav className="p-6 rounded-2xl bg-[#0d0d10] border border-white/10 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 font-bold">Table of Contents</h2>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="#why-training-matters" className="hover:text-primary hover:underline">&rarr; 1. Why Verbal Staff Testing Decides Your Hygiene Rating</a></li>
            <li><a href="#critical-numbers" className="hover:text-primary hover:underline">&rarr; 2. The 3 Numbers Every Food Handler Must Memorize</a></li>
            <li><a href="#high-risk-foods" className="hover:text-primary hover:underline">&rarr; 3. High-Risk Foods &amp; Cross-Contamination Defenses</a></li>
            <li><a href="#personal-hygiene" className="hover:text-primary hover:underline">&rarr; 4. Sickness Reporting: The 48-Hour Exclusion Rule</a></li>
            <li><a href="#sample-questions" className="hover:text-primary hover:underline">&rarr; 5. High-Yield Practice Exam Questions &amp; Rationale</a></li>
            <li><a href="#interactive-tool" className="hover:text-primary hover:underline">&rarr; 6. Free Interactive Level 2 Food Hygiene Quiz</a></li>
            <li><a href="#frequently-asked-questions" className="hover:text-primary hover:underline">&rarr; 7. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ── SECTION 1 ── */}
        <section id="why-training-matters" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            1. Why Verbal Staff Testing Decides Your Hygiene Rating
          </h2>
          <p>
            You can spend £50,000 fitting out your commercial kitchen with top-tier stainless steel, extraction hoods, and rational combi ovens. 
            However, if an EHO observes a prep cook using a red raw meat board to slice cucumbers for a burger garnish, 
            your kitchen is immediately cited for catastrophic cross-contamination risk.
          </p>
          <p>
            Level 2 Food Hygiene (often called Basic Food Hygiene) provides the minimum foundation required for anyone preparing, cooking, or handling open food in the UK.
          </p>
        </section>

        {/* ── SECTION 2 ── */}
        <section id="critical-numbers" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            2. The 3 Numbers Every Food Handler Must Memorize
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
            <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/10 space-y-1 text-center">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase">Chilled Storage</span>
              <div className="text-3xl font-black text-white font-mono">8°C</div>
              <p className="text-[11px] text-white/50">Legal ceiling in the UK (best practice 1°C–5°C).</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/10 space-y-1 text-center">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">Hot Holding</span>
              <div className="text-3xl font-black text-white font-mono">63°C</div>
              <p className="text-[11px] text-white/50">Minimum safe hot display temperature.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/10 space-y-1 text-center">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Cooking Core</span>
              <div className="text-3xl font-black text-white font-mono">75°C</div>
              <p className="text-[11px] text-white/50">Held for 30s in core of poultry/mince.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 ── */}
        <section id="high-risk-foods" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            3. High-Risk Foods &amp; Cross-Contamination Defenses
          </h2>
          <p>
            High-risk foods are ready-to-eat foods that support the growth of pathogenic bacteria under optimal conditions (moist, protein-rich, neutral pH). 
            Examples include cooked meats, dairy products, cooked rice, shellfish, and prepared gravies.
          </p>
          <p>
            Low-risk foods (dried pasta, sugar, vinegars, unopened canned goods) rarely support microbial growth unless rehydrated or opened. 
            Cross-contamination occurs when bacteria travel from raw sources (unwashed root vegetables, raw chicken) to ready-to-eat foods via shared equipment, dirty aprons, or unwashed hands.
          </p>
        </section>

        {/* ── SECTION 4 ── */}
        <section id="personal-hygiene" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            4. Sickness Reporting: The 48-Hour Exclusion Rule
          </h2>
          <p>
            Food handlers are legally obligated to report gastrointestinal illness (diarrhea, vomiting, severe stomach cramps) to their manager immediately. 
            Under UK public health guidelines, <strong>staff must be excluded from all food handling duties for a full 48 hours after symptoms have naturally ceased</strong>.
          </p>
          <p>
            Allowing a staff member who was vomiting yesterday to work the fry station today is an active criminal hazard that has caused multi-thousand-pound fines in UK magistrates&apos; courts.
          </p>
        </section>

        {/* ── SECTION 5 ── */}
        <section id="sample-questions" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            5. High-Yield Practice Exam Questions &amp; Rationale
          </h2>

          <div className="space-y-4 pt-2">
            {SAMPLE_QUESTIONS.map((q, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <span className="text-xs font-mono text-purple-400 font-bold uppercase">Question {idx + 1}</span>
                <h4 className="text-white text-sm sm:text-base font-semibold">{q.q}</h4>
                <div className="text-xs sm:text-sm text-emerald-400 font-mono pt-1">
                  <strong>Correct Answer:</strong> {q.a}
                </div>
                <div className="text-xs text-white/60 leading-relaxed pt-1">
                  <em>Why:</em> {q.why}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: LIVE INTERACTIVE TOOL ── */}
        <section id="interactive-tool" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121215] to-[#1c1c24] border border-primary/30 text-white space-y-6 shadow-2xl mb-16">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider">
              Free Kitchen Tool
            </span>
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">10-Question Knowledge Exam</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Take the Free Level 2 Food Hygiene Practice Test
          </h3>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Test yourself or audit your kitchen crew before an EHO inspection. 
            10 interactive multiple-choice questions covering legal temperatures, cross-contamination, allergens, 
            and hygiene protocols with instant answer explanations and scoring.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/food-safety-quiz"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Launch Food Hygiene Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>Explore All Commercial Kitchen Tools</span>
            </Link>
          </div>
        </section>

        {/* ── SECTION 7: FAQS ── */}
        <section id="frequently-asked-questions" className="space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            7. Frequently Asked Questions (Certification &amp; Law)
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

        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Running a Food Brand and Need an EHO-Compliant Digital Ordering Platform?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            We develop bespoke, ultra-fast online ordering web apps for UK takeaways and restaurants. 
            Automated allergen disclosures, direct WhatsApp orders, and 0% monthly commission fees.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20compliant%20takeaway%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Food Business on WhatsApp (+92 319 6526604)</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
