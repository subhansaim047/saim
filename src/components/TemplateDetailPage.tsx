"use client";
import { SiteFooter } from "./SiteFooter";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Thermometer,
  Clock,
  Award,
  Sparkles,
  Edit3,
  HelpCircle,
  ChevronDown,
  FileText,
  BookOpen,
  Calendar,
  AlertTriangle
} from "lucide-react";
import { FoodSafetyTemplate, FOOD_SAFETY_TEMPLATES } from "@/data/saim_templates";
import { CORE_PAGES_METADATA } from "@/data/core_metadata";
import pagePlanData from "@/data/page_plan.json";
import { RecipeCalculatorTool } from "./tools/RecipeCalculatorTool";
import { FoodCostCalculatorTool } from "./tools/FoodCostCalculatorTool";
import { HaccpPlanBuilderTool } from "./tools/HaccpPlanBuilderTool";
import { FoodSafetyQuizTool } from "./tools/FoodSafetyQuizTool";
import { AllergenMatrixTool } from "./tools/AllergenMatrixTool";
import { DigitalChecklistTool } from "./tools/DigitalChecklistTool";
import { FoodSafetyDisclaimer } from "./FoodSafetyDisclaimer";
import { TOOL_DEEP_CONTENT } from "@/data/tool_deep_content";

interface Props {
  template: FoodSafetyTemplate;
}

export const TemplateDetailPage: React.FC<Props> = ({ template }) => {
  const deepContent = TOOL_DEEP_CONTENT[template.slug];
  const [premisesName, setPremisesName] = useState("");
  const [managerSignoff, setManagerSignoff] = useState("");
  const [complianceDate, setComplianceDate] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  // Determine specific tool type
  const isRecipeTool =
    template.slug.includes("recipe") ||
    template.title.toLowerCase().includes("recipe");

  const isCostTool =
    !isRecipeTool &&
    (template.slug.includes("cost") ||
      template.slug.includes("margin") ||
      template.title.toLowerCase().includes("cost") ||
      template.title.toLowerCase().includes("margin"));

  const isHaccpTool =
    template.slug.includes("haccp") ||
    template.slug.includes("flow-chart") ||
    template.slug.includes("hazard-analysis") ||
    template.slug.includes("food-safety-plan") ||
    template.slug.includes("critical-control-point");

  const isQuizTool =
    template.slug.includes("quiz") ||
    template.title.toLowerCase().includes("quiz");

  const isAllergenTool =
    !isRecipeTool &&
    !isCostTool &&
    !isHaccpTool &&
    !isQuizTool &&
    (template.slug.includes("allergen") ||
      template.slug.includes("allergy") ||
      template.title.toLowerCase().includes("allergen") ||
      template.title.toLowerCase().includes("allergy") ||
      template.slug.includes("natasha"));

  const isChecklistOrLog =
    !isRecipeTool &&
    !isCostTool &&
    !isHaccpTool &&
    !isQuizTool &&
    !isAllergenTool &&
    (template.type === "checklist" ||
      template.type === "log" ||
      template.slug.includes("checklist") ||
      template.slug.includes("log") ||
      template.slug.includes("schedule") ||
      template.slug.includes("sheet") ||
      template.slug.includes("opening") ||
      template.slug.includes("closing") ||
      template.slug.includes("sop") ||
      template.slug.includes("audit") ||
      template.slug.includes("delivery") ||
      template.slug.includes("inspection"));

  // Related templates: only link to indexed KEEP and IMPROVE pages (no NOINDEX or duplicates)
  const isIndexableSlug = (slug: string) => {
    const bucket = (pagePlanData as any)[slug]?.bucket;
    return bucket === "KEEP" || bucket === "IMPROVE";
  };

  const related = isAllergenTool
    ? FOOD_SAFETY_TEMPLATES.filter(
        (t) =>
          t.id !== template.id &&
          isIndexableSlug(t.slug) &&
          (t.slug.includes("allergen") ||
            t.slug.includes("allergy") ||
            t.title.toLowerCase().includes("allergen") ||
            t.title.toLowerCase().includes("allergy"))
      ).slice(0, 4)
    : FOOD_SAFETY_TEMPLATES.filter(
        (t) => t.id !== template.id && isIndexableSlug(t.slug)
      ).slice(0, 4);

  const activeFaqs = deepContent?.faqs || [
    {
      q: `Is the ${template.title} suitable for UK Environmental Health Officer (EHO) inspections?`,
      a: `Yes. This template and digital logging workflow are developed in line with UK Food Standards Agency (FSA) Safer Food, Better Business (SFBB) standards and HACCP Article 5 of Regulation (EC) No 852/2004. When maintained with genuine operating data and supervisor sign-offs, it fulfills statutory record-keeping and due diligence requirements under the Food Safety Act 1990.`
    },
    {
      q: "How frequently should kitchen staff complete and sign off this record?",
      a: "Critical checks (such as fridge, chiller, and hot-holding temperatures) must be completed at least twice daily—once during morning prep before opening, and once during evening service. Daily opening, closing, and hygiene checklists must be completed throughout each shift, with a designated supervisor or Head Chef signing off the log before premises shutdown."
    },
    {
      q: "What is the recommended corrective action if a critical limit is breached?",
      a: "Immediate containment is mandatory. For cold storage exceeding 8°C, probe the internal core temperature: if food has remained between 8°C and 63°C for under 4 hours, rapidly chill or cook it immediately; otherwise, safely discard it. For hot holding dropping below 63°C, reheat above 75°C (allowed once only) or serve within 2 hours, or condemn. Always record the issue, affected batch, and corrective action taken directly on the log."
    },
    {
      q: "How long must commercial kitchens retain completed safety records?",
      a: "Under UK due diligence legal defense (Section 21 of the Food Safety Act 1990), completed temperature sheets, cleaning logs, and monitoring records should be archived for a minimum of 6 to 12 months, or at least 3 months after the shelf-life of products served. Having organized monthly binders or digital PDF exports ready is vital for unannounced council audits."
    },
    {
      q: "Can I customize, edit, and print this sheet without watermarks?",
      a: "Yes. You can enter your establishment name, manager sign-off, and inspection date directly into the input fields above. Then click 'Print / Save as PDF' to generate an optimized, clean A4 layout. All web buttons, navigation links, and screen-only elements are automatically excluded from the printed output."
    }
  ];
  const faqs = activeFaqs;

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1D1D1F] font-sans">
      {/* ── PRINT STYLES ── */}
      <style jsx global>{`
        @media print {
          header, nav, .no-print, .related-section, .conversion-banner, footer {
            display: none !important;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          .printable-doc {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] px-4 sm:px-8 py-3.5 flex items-center justify-between no-print">
        <Link href="/tools" className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Kitchen Tools Hub</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20inquiring%20about%20the%20takeaway%20web%20solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 transition-all shadow"
          >
            <span>WhatsApp Saim</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-10">

        {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="no-print">
          <ol className="flex items-center gap-1.5 text-xs text-gray-500 font-medium flex-wrap">
            <li>
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li>
              <Link href="/tools" className="hover:text-black transition-colors">Free Tools</Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li className="text-gray-900 font-semibold truncate max-w-[240px] sm:max-w-md" aria-current="page">
              {template.title}
            </li>
          </ol>
        </nav>

        {/* Editorial Trust & Verification Meta Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs no-print">
          <div className="flex flex-wrap items-center gap-3 text-gray-600">
            <div className="inline-flex items-center gap-1.5 font-medium">
              <FileText className="w-3.5 h-3.5 text-gray-700" />
              <span>Byline: <strong className="text-gray-900 font-semibold">Saim Dev Kitchen Compliance Team</strong></span>
            </div>
            <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Last Updated: <strong className="text-gray-900 font-semibold">October 2026</strong></span>
            </div>
            <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-blue-700" />
              <span>Review: <strong className="text-gray-900 font-semibold">Monthly Due Diligence Audit</strong></span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Aligned with UK Food Standards Agency (FSA) Guidance</span>
          </div>
        </div>

        {/* Template Hero / Intro */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8 no-print">
          {/* Preview Image */}
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl bg-amber-50/60 border border-amber-200/60 p-6 flex items-center justify-center relative overflow-hidden shrink-0">
            <img
              src={template.thumbUrl || template.imgUrl}
              alt={template.title}
              className="max-h-full max-w-full object-contain drop-shadow"
              loading="eager"
              decoding="async"
            />
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 text-amber-900 border border-amber-200 shadow-sm">
              {template.preheader || template.type.toUpperCase()}
            </span>
          </div>

          {/* Details & Actions */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full w-fit">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isAllergenTool ? "Covers the 14 UK/EU allergens" : "Resource • Printable & Digital"}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] leading-tight">
              {isAllergenTool ? "Free UK Takeaway Allergen Chart Generator (14 Allergens)" : template.title}
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {isAllergenTool
                ? "Build and print a UK allergen chart for your takeaway in minutes. Covers all 14 allergens, a customer filter and PDF print. Free, no sign-up."
                : template.desc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => window.print()}
                className="bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.01]"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* 40-60 Word Direct Answer Box (GEO / LLMO Grounding) */}
        {deepContent?.directAnswer && (
          <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-2 no-print">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Direct Operational Answer &amp; UK Legal Context</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              {deepContent.directAnswer}
            </p>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            DEDICATED INTERACTIVE COMPLIANCE AND KITCHEN TOOLS
        ════════════════════════════════════════════════════════════════ */}

        {/* 1. Recipe Yield & Resizing Calculator */}
        {isRecipeTool && (
          <RecipeCalculatorTool templateId={template.id} pdfUrl={template.pdfUrl} />
        )}

        {/* 2. Commercial Kitchen Food Cost & Margin Calculator */}
        {isCostTool && (
          <FoodCostCalculatorTool templateId={template.id} />
        )}

        {/* 3. 7-Principle HACCP Plan Builder & CCP Matrix */}
        {isHaccpTool && (
          <HaccpPlanBuilderTool templateId={template.id} />
        )}

        {/* 4. Food Safety Level 2 Hygiene Exam */}
        {isQuizTool && (
          <FoodSafetyQuizTool templateId={template.id} />
        )}

        {/* 5. 14 Food Allergen Matrix & Kitchen Chart Tool */}
        {isAllergenTool && (
          <AllergenMatrixTool templateId={template.id} />
        )}

        {/* 6. Digital Verification Checklist & Temperature Log */}
        {isChecklistOrLog && (
          <DigitalChecklistTool templateTitle={template.title} templateId={template.id} />
        )}

        {/* 7. Standard Poster / Reference Chart View (Fully Printable & Editable) */}
        {!isRecipeTool && !isCostTool && !isHaccpTool && !isQuizTool && !isAllergenTool && !isChecklistOrLog && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-6 printable-doc shadow-sm">
            {/* Printable & Editable Sign-Off Header */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Establishment / Premises Name</label>
                <input
                  type="text"
                  value={premisesName}
                  onChange={e => setPremisesName(e.target.value)}
                  className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden shadow-2xs"
                />
                {premisesName ? <div className="hidden print:block font-bold text-sm text-gray-950">{premisesName}</div> : null}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Checked By / Responsible Person</label>
                <input
                  type="text"
                  value={managerSignoff}
                  onChange={e => setManagerSignoff(e.target.value)}
                  className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden shadow-2xs"
                />
                {managerSignoff ? <div className="hidden print:block font-semibold text-xs text-gray-900">{managerSignoff}</div> : null}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Date of Record</label>
                <input
                  type="date"
                  value={complianceDate}
                  onChange={e => setComplianceDate(e.target.value)}
                  className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden shadow-2xs"
                />
                {complianceDate ? <div className="hidden print:block font-semibold text-xs text-gray-900">{complianceDate}</div> : null}
              </div>
            </div>

            {/* Poster / Chart Graphic Container */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 print:bg-white print:border-none print:p-0">
              <img
                src={template.imgUrl}
                alt={template.title}
                loading="eager"
                decoding="async"
                className="max-h-[600px] print:max-h-none print:w-full w-auto object-contain drop-shadow-sm rounded-lg"
              />
            </div>

            {/* Temperature Table Reference */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-red-500" />
                <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
                  UK &amp; EU Food Safety Temperature Reference Limits
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                  <span className="font-mono text-[10px] uppercase font-bold text-blue-700">Commercial Freezing</span>
                  <div className="text-xl font-black text-blue-950 mt-1">&le; -18&deg;C</div>
                  <p className="text-[10px] text-blue-800 mt-1">Stops bacterial growth</p>
                </div>
                <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-200">
                  <span className="font-mono text-[10px] uppercase font-bold text-cyan-700">Chilled Cold Holding</span>
                  <div className="text-xl font-black text-cyan-950 mt-1">1&deg;C to 4&deg;C</div>
                  <p className="text-[10px] text-cyan-800 mt-1">Legal maximum 8&deg;C</p>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <span className="font-mono text-[10px] uppercase font-bold text-amber-700">Hot Holding Display</span>
                  <div className="text-xl font-black text-amber-950 mt-1">&ge; 63&deg;C</div>
                  <p className="text-[10px] text-amber-800 mt-1">Max 2 hrs if below 63&deg;C</p>
                </div>
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200">
                  <span className="font-mono text-[10px] uppercase font-bold text-red-700">Safe Cooking Core</span>
                  <div className="text-xl font-black text-red-950 mt-1">&ge; 75&deg;C (30s)</div>
                  <p className="text-[10px] text-red-800 mt-1">Destroys pathogens</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-gray-400 font-mono flex items-center justify-between border-t border-gray-100">
              <span>Kitchen record display</span>
              {managerSignoff ? <span>Checked by: {managerSignoff}</span> : null}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            IN-DEPTH KITCHEN OPERATIONAL GUIDANCE & DUE DILIGENCE
        ════════════════════════════════════════════════════════════════ */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-8 no-print shadow-sm">
          {/* Section Header */}
          <div className="border-b border-gray-100 pb-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full mb-3">
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>Standard Operating Guidance (SOP)</span>
            </div>
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              How to Implement the {template.title} in Your Commercial Kitchen
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
              Practical due diligence procedures, regulatory compliance steps, and EHO audit verification guidelines for UK hospitality businesses.
            </p>
          </div>

          {/* Core Explanation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <FileText className="w-4 h-4 text-blue-600" />
                <h3>UK Statutory Due Diligence Framework</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Under Section 21 of the <strong>Food Safety Act 1990</strong>, a food business operator has a defense of due diligence if they prove that all reasonable precautions were taken and all due diligence was exercised to prevent food safety offenses.
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Documented logs like the <strong>{template.title}</strong> provide contemporaneous proof of monitoring required by <strong>Regulation (EC) No 852/2004</strong> (retained UK law). Local council Environmental Health Officers (EHO) evaluate these records when scoring the <em>"Confidence in Management"</em> category of the Food Hygiene Rating Scheme (FHRS).
              </p>
            </div>

            <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h3>EHO Audit Expectations &amp; Common Pitfalls</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                During an unannounced inspection, Environmental Health Officers verify whether records represent real-time measurements rather than retrospective guessing.
              </p>
              <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                <li><strong>Ink uniformity check:</strong> EHOs verify that different pen strokes, handwriting styles, and timestamps appear across daily logs.</li>
                <li><strong>Realistic variations:</strong> Thermometers naturally fluctuate between 1.5°C and 4.5°C during active kitchen shifts; identical numbers trigger scrutiny.</li>
                <li><strong>Calibration records:</strong> Probes must be calibrated monthly in crushed ice (0°C ±1°C) and boiling water (100°C ±1°C).</li>
              </ul>
            </div>
          </div>

          {/* Step-by-Step SOP */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Step-by-Step Operational Routine</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                  01
                </div>
                <h4 className="text-xs font-bold text-gray-900">Pre-Shift Calibration</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Sanitize digital probe needles using antibacterial probe wipes before and after every reading. Verify display readout.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                  02
                </div>
                <h4 className="text-xs font-bold text-gray-900">Live Shift Logging</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Take actual core temperatures and complete checklist items during prep and service. Record exact time and staff initials.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                  03
                </div>
                <h4 className="text-xs font-bold text-gray-900">Corrective Actions</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  If limits deviate (e.g. fridge &gt;8°C), immediately quarantine, re-chill, reheat &ge;75°C, or discard, and write down the action.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                  04
                </div>
                <h4 className="text-xs font-bold text-gray-900">Manager Sign-Off</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Head Chef or supervisor reviews the day's record, signs the sign-off box, and files it in the HACCP due diligence binder.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Reference Box */}
          <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/70 text-xs text-amber-900 space-y-1">
            <span className="font-bold">Official Guidance Reference:</span>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Procedures align with UK Food Standards Agency (FSA) <em>Safer Food, Better Business (SFBB)</em> catering guidance and the Food Information Regulations 2014. Review official advice at{" "}
              <a href="https://www.food.gov.uk" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-black">
                food.gov.uk
              </a>.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            INTERACTIVE FAQS SECTION
        ════════════════════════════════════════════════════════════════ */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-6 no-print shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-gray-500">
                Common questions about UK kitchen compliance, record keeping, and EHO audits.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200/90 bg-white overflow-hidden transition-all duration-200 hover:border-gray-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-amber-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Shared Regulatory Disclaimer on all resource pages */}
        <div className="no-print">
          <FoodSafetyDisclaimer />
        </div>

        {/* Related Compliance Blog Guide */}
        {deepContent?.relatedBlog && (
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md no-print">
            <div className="space-y-1 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                Recommended UK Hospitality Inspection Guide
              </span>
              <h4 className="text-base sm:text-lg font-bold">
                {deepContent.relatedBlog.title}
              </h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Read our in-depth guidance on UK Food Standards Agency inspection procedures, staff training, and compliance routines.
              </p>
            </div>
            <Link
              href={`/blog/${deepContent.relatedBlog.slug}`}
              className="bg-white text-gray-950 hover:bg-gray-100 font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow shrink-0"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Related Templates */}
        {related.length > 0 && (
          <div className="space-y-4 related-section no-print">
            <h3 className="text-lg font-bold text-[#1D1D1F]">
              Related {isAllergenTool ? "Allergen" : (template.preheader || "Food Safety")} Resources
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map(item => (
                <Link
                  key={item.id}
                  href={`/food-safety-templates/${item.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-gray-400 transition-colors flex flex-col justify-between shadow-sm group"
                >
                  <div className="aspect-[4/3] rounded-xl bg-gray-50 p-2 flex items-center justify-center mb-2">
                    <img src={item.imgUrl} alt={item.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="text-xs font-bold text-gray-900 group-hover:text-amber-800 line-clamp-2">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Conversion Banner */}
        <div className="rounded-3xl bg-[#1D1D1F] text-white p-8 sm:p-10 space-y-3 shadow-xl conversion-banner no-print">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
            Bespoke Takeaway Web Development
          </span>
          <h3 className="text-xl sm:text-2xl font-bold">
            Need an online menu with an allergen filter?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            Saim Dev builds fast, mobile-friendly websites for UK takeaways and restaurants, including allergen filters on menus.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20website%20with%20allergen%20filtering"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("cta_click", {
                      detail: { location: "template_footer", target: "whatsapp" }
                    })
                  );
                  console.log("CTA Click Event:", { location: "template_footer", target: "whatsapp" });
                }
              }}
              className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </main>

      {/* ── FOOTER ── */}
      <SiteFooter theme="light" className="mt-12" />
    </div>
  );
};
