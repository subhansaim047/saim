"use client";

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
  Edit3
} from "lucide-react";
import { FoodSafetyTemplate, FOOD_SAFETY_TEMPLATES } from "@/data/saim_templates";
import { RecipeCalculatorTool } from "./tools/RecipeCalculatorTool";
import { FoodCostCalculatorTool } from "./tools/FoodCostCalculatorTool";
import { HaccpPlanBuilderTool } from "./tools/HaccpPlanBuilderTool";
import { FoodSafetyQuizTool } from "./tools/FoodSafetyQuizTool";
import { AllergenMatrixTool } from "./tools/AllergenMatrixTool";
import { DigitalChecklistTool } from "./tools/DigitalChecklistTool";

interface Props {
  template: FoodSafetyTemplate;
}

export const TemplateDetailPage: React.FC<Props> = ({ template }) => {
  const [premisesName, setPremisesName] = useState("Artisan Kitchen & Takeaway Ltd");
  const [managerSignoff, setManagerSignoff] = useState("Head Chef / Safety Lead");
  const [complianceDate, setComplianceDate] = useState(() => new Date().toISOString().split("T")[0]);

  // Related templates (same type or category)
  const related = FOOD_SAFETY_TEMPLATES.filter(
    (t) => t.id !== template.id && (t.type === template.type || t.catSlug === template.catSlug)
  ).slice(0, 4);

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
        <Link href="/food-safety-templates" className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Templates Hub</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/447473962953?text=Hi%20Saim,%20I'm%20inquiring%20about%20the%20takeaway%20web%20solutions"
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

        {/* Template Hero / Intro */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8 no-print">
          {/* Preview Image */}
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl bg-amber-50/60 border border-amber-200/60 p-6 flex items-center justify-center relative overflow-hidden shrink-0">
            <img
              src={template.imgUrl}
              alt={template.title}
              className="max-h-full max-w-full object-contain drop-shadow"
            />
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 text-amber-900 border border-amber-200 shadow-sm">
              {template.preheader || template.type.toUpperCase()}
            </span>
          </div>

          {/* Details & Actions */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Free Compliance Resource</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] leading-tight">
              {template.title}
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {template.desc}
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

            <div className="text-[11px] text-gray-400 font-mono pt-1">
              • Compliant with UK Food Standards Agency (FSA) and Natasha&apos;s Law
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            DEDICATED INTERACTIVE TOOLS MATCHING FOODDOCS FUNCTIONALITY
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

        {/* 5. Official 14 Food Allergen Matrix & Natasha's Law Chart */}
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
                <div className="hidden print:block font-bold text-sm text-gray-950">{premisesName}</div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Manager Sign-Off / Responsible Person</label>
                <input
                  type="text"
                  value={managerSignoff}
                  onChange={e => setManagerSignoff(e.target.value)}
                  className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden shadow-2xs"
                />
                <div className="hidden print:block font-semibold text-xs text-gray-900">{managerSignoff}</div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Active Compliance Date</label>
                <input
                  type="date"
                  value={complianceDate}
                  onChange={e => setComplianceDate(e.target.value)}
                  className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden shadow-2xs"
                />
                <div className="hidden print:block font-semibold text-xs text-gray-900">{complianceDate}</div>
              </div>
            </div>

            {/* Poster Graphic Container - optimized for high-res print without clipping */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <img
                src={template.imgUrl}
                alt={template.title}
                className="max-h-[600px] w-auto object-contain drop-shadow-sm rounded-lg"
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
              <span>• Approved Kitchen Wall Display • FSA &amp; Natasha&apos;s Law Compliant</span>
              <span>Signed: {managerSignoff}</span>
            </div>
          </div>
        )}

        {/* Guidance / Compliance Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-4 no-print">
          <h3 className="text-xl font-bold text-[#1D1D1F]">
            How to use this {template.type} for UK &amp; EU Food Safety Compliance
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Local authority Environmental Health Officers (EHOs) inspect commercial food operations for evidence of 
            effective Hazard Analysis Critical Control Point (HACCP) principles. Using verified documents like the{" "}
            <strong>{template.title}</strong> ensures your kitchen maintains thorough records, trains food handling staff, 
            and eliminates hazards before they reach customers.
          </p>
          <ul className="text-xs sm:text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Display prominently at food preparation, cooking, or storage stations.</li>
            <li>Train kitchen and front-of-house staff on these guidelines during onboarding.</li>
            <li>Audit records periodically to ensure signatures and temperatures are maintained.</li>
          </ul>
        </div>

        {/* Related Templates */}
        {related.length > 0 && (
          <div className="space-y-4 related-section no-print">
            <h3 className="text-lg font-bold text-[#1D1D1F]">
              Related {template.preheader || "Food Safety"} Resources
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
            Need an online ordering site with automated Natasha&apos;s Law allergen filtering?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            Saim Dev builds custom websites for UK takeaways &amp; restaurants with 0% commission, 
            instant Google Maps SEO, and built-in allergen filters.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/447473962953?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20takeaway%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </main>
    </div>
  );
};
