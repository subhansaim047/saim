"use client";
import { SiteFooter } from "./SiteFooter";

import React, { useState } from "react";
import Link from "next/link";
import { ToolIconRenderer } from "./icons/ToolIcons";
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
  Info,
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
import { FreezerTemperatureChartTool } from "./tools/FreezerTemperatureChartTool";
import { HandWashingPosterTool } from "./tools/HandWashingPosterTool";
import { ChoppingBoardColourChartTool } from "./tools/ChoppingBoardColourChartTool";
import { SafeFoodPrepRulesTool } from "./tools/SafeFoodPrepRulesTool";
import { FoodCoolingPosterTool } from "./tools/FoodCoolingPosterTool";
import { WalkInCoolerStorageChartTool } from "./tools/WalkInCoolerStorageChartTool";
import { FridgeTemperatureRecordTool } from "./tools/FridgeTemperatureRecordTool";
import { FoodTraceabilityLogTool } from "./tools/FoodTraceabilityLogTool";
import { HamCookingTemperatureTool } from "./tools/HamCookingTemperatureTool";
import { FreezeDryingChartTool } from "./tools/FreezeDryingChartTool";
import { MeatCookingTemperatureChartTool, MeatCategory } from "./tools/MeatCookingTemperatureChartTool";
import { MasterFoodTemperatureChartTool } from "./tools/MasterFoodTemperatureChartTool";
import { ConsumerAdvisoryNoticeTool } from "./tools/ConsumerAdvisoryNoticeTool";
import { FoodFlowChartTool } from "./tools/FoodFlowChartTool";
import { ProductSpecificationTool } from "./tools/ProductSpecificationTool";
import KitchenUtensilsTool from "./tools/KitchenUtensilsTool";
import { AllergenMatrixTool } from "./tools/AllergenMatrixTool";
import { DigitalChecklistTool } from "./tools/DigitalChecklistTool";
import { FoodSafetyDisclaimer } from "./FoodSafetyDisclaimer";
import { TOOL_DEEP_CONTENT } from "@/data/tool_deep_content";
import {
  getTemplateDomain,
  getBlogCalloutMeta,
  DOMAIN_GUIDANCE,
  selectRelatedTemplates,
} from "@/data/template_domain_guidance";

interface Props {
  template: FoodSafetyTemplate;
}


function getFallbackRelatedBlog(slug: string, title: string) {
  const s = slug.toLowerCase();
  const t = title.toLowerCase();
  if (s.includes("allergen") || s.includes("allergy") || t.includes("allergen") || t.includes("allergy") || s.includes("natasha")) {
    return {
      title: "How to Create a Compliant 14-Allergen Matrix for UK Restaurants",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    };
  }
  if (s.includes("haccp") || s.includes("hazard") || s.includes("critical-control") || s.includes("ccp")) {
    return {
      title: "How to Write a HACCP Plan for UK Food Businesses Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    };
  }
  if (s.includes("cost") || s.includes("margin") || t.includes("cost") || t.includes("margin")) {
    return {
      title: "Mastering Food Cost Percentage: Commercial Kitchen Recipe Pricing Guide",
      slug: "mastering-food-cost-percentage-commercial-kitchen-calculator"
    };
  }
  if (s.includes("recipe") || t.includes("recipe") || s.includes("batch")) {
    return {
      title: "How to Scale Recipes for Commercial Catering: Batch Calculator Guide",
      slug: "how-to-scale-recipes-commercial-catering-batch-calculator"
    };
  }
  if (s.includes("cooling") || s.includes("temp") || s.includes("fridge") || s.includes("freezer") || s.includes("chill")) {
    return {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    };
  }
  if (s.includes("quiz") || t.includes("quiz") || s.includes("hygiene")) {
    return {
      title: "Level 2 Food Hygiene Practice Test & Kitchen Staff Training Guide",
      slug: "level-2-food-hygiene-practice-test-kitchen-staff-guide"
    };
  }
  return {
    title: "SFBB Daily Kitchen Opening & Closing Checklist Guide",
    slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
  };
}

export const TemplateDetailPage: React.FC<Props> = ({ template }) => {
  const deepContent = TOOL_DEEP_CONTENT[template.slug];
  const activeRelatedBlog = deepContent?.relatedBlog || getFallbackRelatedBlog(template.slug, template.title);
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

  const isFoodFlowChartTool =
    template.slug === "food-flow-chart" ||
    template.slug.includes("food-flow") ||
    template.slug.includes("flow-chart");

  const isConsumerAdvisoryTool =
    template.slug === "consumer-advisory" ||
    template.slug.includes("consumer-advisory");

  const isProductSpecTool =
    template.slug === "product-specification-template" ||
    template.slug.includes("product-specification");

  const isUtensilsTool =
    template.slug === "kitchen-utensils-list" ||
    template.slug.includes("utensil") ||
    template.slug.includes("equipment-list");

  const isHaccpTool =
    !isFoodFlowChartTool &&
    (template.slug.includes("haccp") ||
      template.slug.includes("hazard-analysis") ||
      template.slug.includes("food-safety-plan") ||
      template.slug.includes("critical-control") ||
      template.slug.includes("critical-control-point"));

  const isQuizTool =
    template.slug.includes("quiz") ||
    template.title.toLowerCase().includes("quiz");

  const isFreezerTool =
    template.slug === "freezer-temperature-chart" ||
    template.slug.includes("freezer-temperature") ||
    template.slug.includes("freezer-burn");

  const isHandWashingTool =
    template.slug === "hand-washing-poster" ||
    template.slug.includes("wash-your-hands") ||
    template.slug.includes("hand-washing");

  const isChoppingBoardTool =
    template.slug === "chopping-board-colour-chart" ||
    template.slug.includes("chopping-board") ||
    template.slug.includes("cutting-board");

  const isSafeFoodPrepTool =
    template.slug === "basic-food-preparation-rules" ||
    template.slug.includes("safe-food-prep") ||
    template.slug.includes("food-preparation-rules") ||
    template.slug.includes("five-food-safety") ||
    template.slug.includes("fat-tom") ||
    template.slug === "five-food-safety-rules";

  const isFoodCoolingTool =
    template.slug === "food-cooling-poster" ||
    template.slug.includes("food-cooling") ||
    template.slug.includes("cooling-poster");

  const isFreezeDryingTool =
    template.slug === "freeze-drying-time-chart" ||
    template.slug.includes("freeze-drying");

  const isWalkInStorageTool =
    template.slug === "walk-in-cooler-food-storage-chart" ||
    template.slug.includes("fridge-layout") ||
    template.slug.includes("fridge-org") ||
    template.slug.includes("walk-in-cooler") ||
    template.slug.includes("food-storage") ||
    template.slug.includes("storage-chart") ||
    template.slug.includes("shelf-life") ||
    template.slug.includes("sell-by") ||
    template.slug.includes("expiration") ||
    template.slug.includes("canned") ||
    template.slug.includes("leftover") ||
    template.slug.includes("butter");

  const isFridgeRecordTool =
    template.slug === "fridge-temperature-record-sheet-pdf" ||
    template.slug === "fridge-temperature-chart" ||
    template.slug.includes("fridge-temperature");

  const isTraceabilityTool =
    template.slug === "food-traceability" ||
    template.slug.includes("traceability");

  const isMasterFoodTempTool =
    template.slug === "food-temperature-chart" ||
    template.slug === "food-temperature" ||
    template.slug === "food-temperature-log" ||
    template.slug === "food-temperatures-poster" ||
    template.slug.includes("food-temperatures-poster") ||
    template.slug === "danger-zone-for-food" ||
    template.slug.includes("danger-zone") ||
    template.slug.includes("hot-holding") ||
    template.slug.includes("cold-holding") ||
    template.slug.includes("reheating") ||
    template.slug.includes("milk-pasteurization") ||
    template.slug.includes("juice-pasteurization");

  const isMeatCookingTool =
    !isMasterFoodTempTool &&
    (template.slug.includes("temperature-chart") ||
      template.slug.includes("temp-chart") ||
      template.slug.includes("cooking-chart") ||
      template.slug.includes("pasteurization-chart") ||
      template.slug.includes("pasteurisation-chart")) &&
    (template.slug.includes("meat") ||
      template.slug.includes("steak") ||
      template.slug.includes("venison") ||
      template.slug.includes("chicken") ||
      template.slug.includes("duck") ||
      template.slug.includes("beef") ||
      template.slug.includes("lamb") ||
      template.slug.includes("pork") ||
      template.slug.includes("ham") ||
      template.slug.includes("turkey") ||
      template.slug.includes("poultry") ||
      template.slug.includes("fish") ||
      template.slug.includes("burger"));

  const initialMeat: MeatCategory =
    template.slug.includes("turkey") ? "turkey" :
    template.slug.includes("poultry") ? "poultry" :
    (template.slug.includes("steak") || template.slug.includes("beef") || template.slug.includes("meat")) ? "beef" :
    template.slug.includes("burger") ? "burger" :
    template.slug.includes("venison") ? "venison" :
    template.slug.includes("chicken") ? "chicken" :
    template.slug.includes("duck") ? "duck" :
    template.slug.includes("lamb") ? "lamb" :
    template.slug.includes("ham") ? "ham" :
    template.slug.includes("pork") ? "pork" :
    template.slug.includes("fish") ? "fish" : "chicken";

  const isHamCookingTool =
    template.slug === "ham-cooking-temperature-chart" ||
    template.slug.includes("ham-cooking");

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
    !isProductSpecTool &&
    !isUtensilsTool &&
    !isMeatCookingTool &&
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
      template.slug.includes("thermometer") ||
      template.slug.includes("sink") ||
      template.slug.includes("defrost") ||
      template.slug.includes("manager") ||
      template.slug.includes("steps-of-service") ||
      template.slug.includes("delivery") ||
      template.slug.includes("inspection") ||
      template.slug.includes("cleaning") ||
      template.slug.includes("slicer") ||
      template.slug.includes("waste") ||
      template.slug.includes("pest") ||
      template.slug.includes("sanitation") ||
      template.slug.includes("procedure") ||
      template.slug.includes("utensil") ||
      template.slug.includes("5-whys") ||
      template.slug.includes("root-cause") ||
      template.slug.includes("brc") ||
      template.slug.includes("kosher"));

  const domain = getTemplateDomain(template);
  const domainConfig = DOMAIN_GUIDANCE[domain];
  const blogMeta = getBlogCalloutMeta(activeRelatedBlog.slug);

  // Related templates: honour curated relatedTools first, then deterministic same-domain fill (keeps indexed KEEP/IMPROVE links only)
  const isIndexableSlug = (slug: string) => {
    const bucket = (pagePlanData as any)[slug]?.bucket;
    return bucket === "KEEP" || bucket === "IMPROVE";
  };

  const related = selectRelatedTemplates(
    template,
    FOOD_SAFETY_TEMPLATES,
    deepContent?.relatedTools,
    isIndexableSlug
  );

  const activeFaqs = deepContent?.faqs || domainConfig.fallbackFaqs(template.title);
  const faqs = activeFaqs;

  return (
    <div className="min-h-screen overflow-x-clip bg-[#FBFBFA] text-[#1D1D1F] font-sans">
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
          <span>Return to All Kitchen Tools</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20enquiring%20about%20the%20takeaway%20web%20solutions"
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

        {/* Contextual Regulatory Definition */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs sm:text-sm text-slate-700 no-print">
          <dl className="space-y-1">
            <dt className="font-bold text-slate-900 text-xs sm:text-sm">{domainConfig.definitionTerm}</dt>
            <dd className="leading-relaxed text-slate-600">
              {domainConfig.definitionBody}
            </dd>
          </dl>
        </div>

        {/* Editorial Trust & Verification Meta Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs no-print">
          <div className="flex flex-wrap items-center gap-3 text-gray-600">
            <div className="inline-flex items-center gap-1.5 font-medium">
              <FileText className="w-3.5 h-3.5 text-gray-700" />
              <span>Byline: <strong className="text-gray-900 font-semibold">Saim Dev</strong></span>
            </div>
            <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>{domainConfig.sourcesReviewedLabel}</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{domainConfig.badgeLabel}</span>
          </div>
        </div>

        {/* Template Hero / Intro */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8 no-print">
          {/* Preview Image */}
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl bg-amber-50/60 border border-amber-200/60 p-6 flex items-center justify-center relative overflow-hidden shrink-0">
            <img
              src={template.thumbUrl || template.imgUrl}
              alt={`${template.title} - Free UK Kitchen Compliance Template (PDF Download)`}
              width={400}
              height={566}
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
            <div className="flex items-center gap-3">
              <ToolIconRenderer slug={template.slug} size="sm" />
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full w-fit">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{domainConfig.badgeLabel}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] leading-tight">
              {(CORE_PAGES_METADATA[template.slug]?.title || template.title).replace(/\s*\|\s*Saim Dev$/i, "")}
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {CORE_PAGES_METADATA[template.slug]?.desc || template.desc}
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
              <Info className="w-4 h-4 text-amber-700" />
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

        {/* 4b. Commercial Freezer Temperature Chart & EHO Log */}
        {isFreezerTool && (
          <FreezerTemperatureChartTool templateId={template.id} />
        )}

        {/* 4c. Commercial Handwashing Poster & 20s Trainer */}
        {isHandWashingTool && (
          <HandWashingPosterTool templateId={template.id} />
        )}

        {/* 4d. UK Chopping Board Colour Chart & Classifier */}
        {isChoppingBoardTool && (
          <ChoppingBoardColourChartTool templateId={template.id} />
        )}

        {/* 4e. Commercial Safe Food Preparation Rules & Station SOP */}
        {isSafeFoodPrepTool && (
          <SafeFoodPrepRulesTool templateId={template.id} />
        )}

        {/* 4f. Commercial Food Cooling Standard & 90-Minute Log */}
        {isFoodCoolingTool && (
          <FoodCoolingPosterTool templateId={template.id} />
        )}

        {/* 4g. Walk-In Cooler Food Storage Shelf Hierarchy Chart */}
        {isWalkInStorageTool && (
          <WalkInCoolerStorageChartTool templateId={template.id} />
        )}

        {/* 4h. Commercial Fridge Temperature Record Sheet & Calibration Log */}
        {isFridgeRecordTool && (
          <FridgeTemperatureRecordTool templateId={template.id} />
        )}

        {/* 4i. Commercial Food Traceability & Supplier Intake Log */}
        {isTraceabilityTool && (
          <FoodTraceabilityLogTool templateId={template.id} />
        )}

        {/* 4j. Commercial Meat & Poultry Cooking Temperature Chart */}
        {(isMeatCookingTool || isHamCookingTool) && (
          <MeatCookingTemperatureChartTool templateId={template.id} initialMeat={initialMeat} />
        )}

        {/* 4k. UK Commercial Kitchen Master Food Temperature Danger Zone Chart */}
        {isMasterFoodTempTool && (
          <MasterFoodTemperatureChartTool templateId={template.id} />
        )}

        {/* 4l. Consumer Advisory Notice & Signage Tool */}
        {isConsumerAdvisoryTool && (
          <ConsumerAdvisoryNoticeTool templateId={template.id} />
        )}

        {/* 4m. Commercial Kitchen HACCP Food Flow Chart Process Map */}
        {isFoodFlowChartTool && (
          <FoodFlowChartTool templateId={template.id} />
        )}

        {/* 4n. Commercial Food Product Technical Specification Builder */}
        {isProductSpecTool && (
          <ProductSpecificationTool templateId={template.id} />
        )}

        {/* 4o. Commercial Kitchen Utensils & Equipment Inventory Auditor */}
        {isUtensilsTool && (
          <KitchenUtensilsTool templateId={template.id} />
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
        {!isRecipeTool && !isCostTool && !isHaccpTool && !isQuizTool && !isAllergenTool && !isChecklistOrLog && !isFreezerTool && !isHandWashingTool && !isChoppingBoardTool && !isSafeFoodPrepTool && !isFoodCoolingTool && !isWalkInStorageTool && !isFridgeRecordTool && !isTraceabilityTool && !isHamCookingTool && !isMeatCookingTool && !isMasterFoodTempTool && !isConsumerAdvisoryTool && !isFoodFlowChartTool && !isProductSpecTool && !isUtensilsTool && (
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
                alt={`${template.title} - Printable UK Food Hygiene Standard Document (FSA Aligned)`}
                width={600}
                height={848}
                loading="eager"
                decoding="async"
                className="max-h-[600px] print:max-h-none print:w-full w-auto object-contain drop-shadow-sm rounded-lg"
              />
            </div>

            {/* Quick Operational Reference */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-2">
                {domain === "temperature" ? (
                  <Thermometer className="w-5 h-5 text-red-500" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                )}
                <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
                  {domainConfig.quickHeading}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {domainConfig.quickCards.map((card, i) => {
                  const toneClasses =
                    card.tone === "blue"
                      ? { wrap: "bg-blue-50 border-blue-200", k: "text-blue-700", v: "text-blue-950", p: "text-blue-800" }
                      : card.tone === "cyan"
                      ? { wrap: "bg-cyan-50 border-cyan-200", k: "text-cyan-700", v: "text-cyan-950", p: "text-cyan-800" }
                      : card.tone === "amber"
                      ? { wrap: "bg-amber-50 border-amber-200", k: "text-amber-700", v: "text-amber-950", p: "text-amber-800" }
                      : { wrap: "bg-red-50 border-red-200", k: "text-red-700", v: "text-red-950", p: "text-red-800" };
                  return (
                    <div key={i} className={`p-3.5 rounded-xl border ${toneClasses.wrap}`}>
                      <span className={`font-mono text-[10px] uppercase font-bold ${toneClasses.k}`}>{card.label}</span>
                      <div className={`text-lg sm:text-xl font-black mt-1 ${toneClasses.v}`}>{card.value}</div>
                      <p className={`text-[10px] mt-1 ${toneClasses.p}`}>{card.note}</p>
                    </div>
                  );
                })}
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
              <span>{domainConfig.badgeLabel}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              How to Implement the {template.title} in Your Commercial Kitchen
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
              {domainConfig.sopSubtitle}
            </p>
          </div>

          {/* Core Explanation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <FileText className="w-4 h-4 text-blue-600" />
                <h3>{domainConfig.leftCardTitle}</h3>
              </div>
              {domainConfig.leftCardParagraphs(template.title).map((para, i) => (
                <p key={i} className="text-xs text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <h3>{domainConfig.rightCardTitle}</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {domainConfig.rightCardIntro}
              </p>
              <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                {domainConfig.rightCardBullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              {domainConfig.rightCardLink && (
                domainConfig.rightCardLink.href.startsWith("/") ? (
                  <Link href={domainConfig.rightCardLink.href} className="inline-flex items-center gap-1 text-xs underline font-semibold text-emerald-700 hover:text-black">
                    {domainConfig.rightCardLink.label}
                  </Link>
                ) : (
                  <a href={domainConfig.rightCardLink.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs underline font-semibold text-emerald-700 hover:text-black">
                    {domainConfig.rightCardLink.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Step-by-Step SOP */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Step-by-Step Operational Routine</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(deepContent?.howTo || []).map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xs font-bold text-gray-900">Operational Step {idx + 1}</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Reference Box */}
          <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/70 text-xs text-amber-900 space-y-1">
            <span className="font-bold">Official Guidance Reference:</span>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              {domainConfig.referenceText}{" "}
              {domainConfig.referenceLink.href.startsWith("/") ? (
                <Link href={domainConfig.referenceLink.href} className="underline font-semibold hover:text-black">
                  {domainConfig.referenceLink.label}
                </Link>
              ) : (
                <a href={domainConfig.referenceLink.href} target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-black">
                  {domainConfig.referenceLink.label}
                </a>
              )}.
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
                  <div
                    className={`px-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50 ${
                      isOpen ? "block py-3.5" : "hidden print:block"
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verified Statutory Standards & Source Register */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-700 space-y-3 no-print">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-extrabold text-slate-900 uppercase tracking-wide">
                Statutory References · {domainConfig.badgeLabel}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
              {domainConfig.sourcesReviewedLabel}
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            {domainConfig.sourcesSummary}
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] pt-1">
            {domainConfig.sourcesLinks.map((src, i) =>
              src.href.startsWith("/") ? (
                <Link
                  key={i}
                  href={src.href}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  {src.label}
                </Link>
              ) : (
                <a
                  key={i}
                  href={src.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition"
                >
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                  {src.label}
                </a>
              )
            )}
          </div>
        </div>

        {/* Shared Regulatory Disclaimer on all resource pages */}
        <div className="no-print">
          <FoodSafetyDisclaimer />
        </div>

        {/* Related Compliance Blog Guide */}
        {activeRelatedBlog && (
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md no-print">
            <div className="space-y-1 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                {blogMeta.eyebrow}
              </span>
              <h4 className="text-base sm:text-lg font-bold">
                {activeRelatedBlog.title}
              </h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                {blogMeta.summary}
              </p>
            </div>
            <Link
              href={`/blog/${activeRelatedBlog.slug}`}
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
              Related {template.category || template.preheader || "Food Safety"} Resources
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map(item => (
                <Link
                  key={item.id}
                  href={`/food-safety-templates/${item.slug}`}
                  className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-gray-400 transition-colors flex flex-col justify-between shadow-sm group"
                >
                  <div className="aspect-[4/3] rounded-xl bg-gray-50 p-2 flex items-center justify-center mb-2">
                    <img src={item.thumbUrl || item.imgUrl} alt={`${item.title} - Free UK Food Hygiene Template`} width={300} height={424} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="text-xs font-bold text-gray-900 group-hover:text-amber-800 line-clamp-2">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom return link to Kitchen Tools Hub */}
        <div className="text-center pt-2 pb-2 no-print">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Kitchen Tools</span>
          </Link>
        </div>

        {/* Conversion Banner: Context-Matched Commercial Bridge */}
        <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-10 space-y-4 shadow-2xl conversion-banner no-print border border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                  {domainConfig.bannerEyebrow}
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-full font-mono uppercase">
                  {domainConfig.bannerTag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                {domainConfig.bannerHeadline}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {domainConfig.bannerCopy}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20commission-free%20takeaway%20website%20from%20%C2%A3250"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(
                      new CustomEvent("cta_click", {
                        detail: { location: "template_footer", target: "whatsapp" }
                      })
                    );
                  }
                }}
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href={domainConfig.bannerPrimaryHref}
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-5 py-3.5 rounded-full inline-flex items-center justify-center gap-1.5 transition-all border border-white/15"
              >
                <span>{domainConfig.bannerPrimaryLabel}</span>
              </Link>
            </div>
          </div>
        </div>

      </main>

      {/* ── FOOTER ── */}
      <SiteFooter theme="light" className="mt-12" />
    </div>
  );
};
