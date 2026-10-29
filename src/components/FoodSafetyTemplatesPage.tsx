"use client";
import { SiteFooter } from "./SiteFooter";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { IconTile } from "./icons/IconTile";
import {
  Tag,
  ShieldAlert,
  Calculator,
  ChefHat,
  ClipboardCheck,
  Snowflake,
  Droplets,
  Award,
  Search,
  Filter,
  Printer,
  UtensilsCrossed,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileText,
  SlidersHorizontal,
  ChevronDown,
  X,
  Plus,
  RefreshCw,
  Copy,
  Building,
  User,
  Calendar,
  Thermometer,
  DollarSign,
  AlertCircle,
  Sliders,
  Check,
  HelpCircle,
} from "lucide-react";
import { FOOD_SAFETY_TEMPLATES, FoodSafetyTemplate } from "@/data/saim_templates";
import { ALLERGENS, MenuItem, AllergenStatus } from "./ToolsPage";
import { AllergenMatrixTool } from "./tools/AllergenMatrixTool";
import { FoodCostCalculatorTool } from "./tools/FoodCostCalculatorTool";
import { RecipeCalculatorTool } from "./tools/RecipeCalculatorTool";
import { FoodSafetyDisclaimer } from "./FoodSafetyDisclaimer";
import { isOffAudience } from "@/lib/off-audience";
import { getCanonicalTemplateSlug } from "@/lib/canonical-slugs";

export const FoodSafetyTemplatesPage: React.FC = () => {
  // ── FILTER STATES (INTERNAL SAIM DEV FILTERS) ──
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedActivity, setSelectedActivity] = useState<string>("all");
  const [selectedPurpose, setSelectedPurpose] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeInteractiveTool, setActiveInteractiveTool] = useState<string | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(true);

  const handleWhatsAppClick = (location: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cta_click", {
          detail: { location, target: "whatsapp" }
        })
      );
      console.log("CTA Click Event:", { location, target: "whatsapp" });
    }
  };

  // ── DYNAMIC FILTERING ──
  const filteredTemplates = useMemo(() => {
    return FOOD_SAFETY_TEMPLATES.filter(item => {
      // Type filter
      if (selectedType !== "all") {
        if (selectedType === "smart_tool" && item.type !== "smart_tool") return false;
        if (selectedType === "poster" && item.type !== "poster") return false;
        if (selectedType === "checklist" && item.type !== "checklist") return false;
        if (selectedType === "chart" && item.type !== "chart") return false;
        if (selectedType === "log" && item.type !== "log") return false;
      }

      // Business Activity filter
      if (selectedActivity !== "all") {
        if (!item.activity?.includes(selectedActivity)) return false;
      }

      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesType = item.type.toLowerCase().includes(query);
        const matchesPre = item.preheader ? item.preheader.toLowerCase().includes(query) : false;
        if (!matchesTitle && !matchesType && !matchesPre) return false;
      }

      return true;
    });
  }, [selectedType, selectedActivity, selectedPurpose, searchTerm]);

  const { coreTemplates, offAudienceTemplates } = useMemo(() => {
    const core: FoodSafetyTemplate[] = [];
    const off: FoodSafetyTemplate[] = [];
    filteredTemplates.forEach(item => {
      if (isOffAudience(item.slug)) {
        off.push(item);
      } else {
        core.push(item);
      }
    });
    return { coreTemplates: core, offAudienceTemplates: off };
  }, [filteredTemplates]);

  // Card background styling based on data-type
  const getCardBg = (type: string) => {
    switch (type) {
      case "poster":
        return "bg-[#fff1e3] border-[#fedcb7]";
      case "checklist":
        return "bg-[#e6f9f0] border-[#b8f0d5]";
      case "chart":
        return "bg-[#e6f7fd] border-[#bfeafd]";
      case "log":
        return "bg-[#edf0ff] border-[#cdd6ff]";
      case "smart_tool":
        return "bg-[#fef9e7] border-[#fbeab2]";
      default:
        return "bg-[#f8f9fa] border-gray-200";
    }
  };

  const getPillColor = (type: string) => {
    switch (type) {
      case "poster":
        return "text-[#b45309] bg-[#ffedd5]";
      case "checklist":
        return "text-[#047857] bg-[#d1fae5]";
      case "chart":
        return "text-[#0369a1] bg-[#e0f2fe]";
      case "log":
        return "text-[#4338ca] bg-[#e0e7ff]";
      case "smart_tool":
        return "text-[#92400e] bg-[#fef3c7]";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1D1D1F] font-sans">
      {/* ── PRINT STYLES ── */}
      <style jsx global>{`
        @media print {
          header, nav, .filter-sidebar, .top-banner, .editorial-section, .no-print, .close-modal-btn {
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
          .printable-doc table {
            border-collapse: collapse !important;
            width: 100% !important;
          }
          .printable-doc th, .printable-doc td {
            border: 1px solid #333333 !important;
            padding: 4px 6px !important;
            color: #000000 !important;
            font-size: 10pt !important;
          }
        }
      `}</style>

      {/* ── TOP HEADER / NAVBAR ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] px-4 sm:px-8 py-3.5 flex items-center justify-between no-print shadow-sm">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
              <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={40} height={40} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-[#1D1D1F] text-base tracking-tight">Saim Dev</span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
            Food Safety Templates Hub
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/tools/allergen-matrix-generator"
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#C8E6C9] px-3.5 py-1.5 rounded-full transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Interactive Allergen Matrix</span>
          </Link>

          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20using%20the%20Food%20Safety%20Templates%20Hub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 transition-all shadow"
          >
            <span>WhatsApp Saim</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <section className="bg-white border-b border-[#E5E5EA] px-4 sm:px-8 py-10 sm:py-14 no-print">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 max-w-4xl">
            {/* Visible Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-2">
              <ol className="flex items-center gap-1.5 text-xs text-gray-500 font-medium flex-wrap">
                <li>
                  <Link href="/" className="hover:text-black transition-colors">Home</Link>
                </li>
                <li aria-hidden="true" className="text-gray-300">/</li>
                <li className="text-gray-900 font-semibold" aria-current="page">
                  Free Food Safety Tools &amp; Templates
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>UK Food Safety &amp; Kitchen Management</span>
              <span className="text-slate-300">•</span>
              <span>Free Printable Logs &amp; Interactive Tools</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1]">
              Free Food Safety Templates UK: Kitchen Checklists, Logs &amp; Allergen Matrices
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-1">
          Download free food safety templates for UK commercial kitchens. Access instant kitchen checklists, temperature logs, allergen matrices, and interactive compliance tools built specifically for independent UK takeaways, restaurants, and caterers.
        </p>

            {/* ── 40-50 WORD DIRECT ANSWER BOX FOR AEO & AI EXTRACTION ── */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-sm text-neutral-900 leading-relaxed space-y-1.5 mt-2">
              <div className="font-bold text-amber-950 flex items-center gap-1.5 uppercase font-mono text-[11px] tracking-wide">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Direct Compliance Summary</span>
              </div>
              <p>
                Saim Dev provides 160 free, statutory UK food safety templates, SFBB temperature logs, 14-allergen matrices, and interactive calculators designed around Food Standards Agency (FSA) guidelines and Natasha&apos;s Law regulations for commercial catering and takeaway businesses.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-semibold text-gray-500 uppercase font-mono tracking-wider">Quick Launch Tools:</span>
              <Link
                href="/tools/allergen-matrix-generator"
                className="text-xs font-medium text-gray-700 hover:text-black bg-white hover:bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Allergen Matrix</span>
              </Link>
              <Link
                href="/tools/food-cost-calculator"
                className="text-xs font-medium text-gray-700 hover:text-black bg-white hover:bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <Calculator className="w-4 h-4 shrink-0" />
                <span>Interactive Food Cost Calculator</span>
              </Link>
              <Link
                href="/tools/recipe-batch-calculator"
                className="text-xs font-medium text-gray-700 hover:text-black bg-white hover:bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <ChefHat className="w-4 h-4 shrink-0" />
                <span>Recipe Scaler</span>
              </Link>
              <Link
                href="/tools/ppds-label-generator"
                className="text-xs font-medium text-gray-700 hover:text-black bg-white hover:bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <Tag className="w-4 h-4 shrink-0" />
                <span>PPDS Label Generator</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* ── TOPICAL CATEGORY NAVIGATOR (6 CLUSTERS) ── */}
      <section className="bg-[#F8F9FA] border-b border-[#E5E5EA] px-4 sm:px-8 py-8 no-print">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
              Topical Safety Architecture
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
              Browse by Regulatory Food Safety Category
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Navigate structured tool suites and practical operational guides designed for UK food hygiene compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cluster 1 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md inline-block">
                    Cluster 1
                  </span>
                  <IconTile color="vermilion" size="sm">
                    <ShieldAlert className="w-4 h-4" />
                  </IconTile>
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Allergens &amp; Natasha&apos;s Law</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Regulatory tools for declaring 14 statutory allergens and generating Prepacked for Direct Sale (PPDS) adhesive labels.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/tools/allergen-matrix-generator" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; 14 Allergen Matrix Template
                </Link>
                <Link href="/tools/ppds-label-generator" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; PPDS Label Generator
                </Link>
                <Link href="/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: Creating a 14-Allergen Matrix
                </Link>
              </div>
            </div>

            {/* Cluster 2 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md inline-block">
                    Cluster 2
                  </span>
                  <IconTile color="indigo" size="sm">
                    <ClipboardCheck className="w-4 h-4" />
                  </IconTile>
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">HACCP &amp; Due Diligence</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Systematic hazard analysis templates and Critical Control Point records supporting statutory due diligence defense.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/haccp-plan-builder" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; HACCP Plan Builder
                </Link>
                <Link href="/food-safety-templates/delivery-log" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Delivery Intake Log
                </Link>
                <Link href="/blog/how-to-write-haccp-plan-uk-food-business-step-by-step" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: Writing a UK HACCP Plan
                </Link>
              </div>
            </div>

            {/* Cluster 3 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md inline-block">
                    Cluster 3
                  </span>
                  <IconTile color="cyan" size="sm">
                    <Snowflake className="w-4 h-4" />
                  </IconTile>
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Temperature &amp; SFBB</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Daily fridge, freezer, and cooking temperature logs formatted for FSA Safer Food, Better Business diary packs.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/fridge-temperature-record-sheet-pdf" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Fridge Temperature Sheet
                </Link>
                <Link href="/food-safety-templates/freezer-temperature-chart" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Freezer Temperature Chart
                </Link>
                <Link href="/blog/commercial-kitchen-food-cooling-temperature-guide" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: 90-Minute Rapid Food Cooling
                </Link>
              </div>
            </div>

            {/* Cluster 4 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md inline-block">
                    Cluster 4
                  </span>
                  <IconTile color="teal" size="sm">
                    <Droplets className="w-4 h-4" />
                  </IconTile>
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Kitchen Cleaning &amp; Hygiene</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Daily, weekly, and deep-clean sanitisation schedules to pass local council Environmental Health Officer audits.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/cleaning-schedule" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Daily Cleaning Schedule
                </Link>
                <Link href="/food-safety-templates/opening-and-closing-checklist-template" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Opening &amp; Closing Checklist
                </Link>
                <Link href="/blog/sfbb-daily-kitchen-opening-closing-checklist-guide" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: SFBB Daily Shift Routines
                </Link>
              </div>
            </div>

            {/* Cluster 5 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md inline-block">
                    Cluster 5
                  </span>
                  <IconTile color="emerald" size="sm">
                    <Calculator className="w-4 h-4" />
                  </IconTile>
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Food Cost &amp; Recipe Management</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Interactive culinary calculators to protect 70%+ gross profit margins and scale commercial batch catering recipes.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/tools/food-cost-calculator" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Food Cost Percentage Calculator
                </Link>
                <Link href="/tools/recipe-batch-calculator" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Recipe Portion Scaler
                </Link>
                <Link href="/blog/mastering-food-cost-percentage-commercial-kitchen-calculator" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: Mastering Food Cost Margins
                </Link>
              </div>
            </div>

            {/* Cluster 6 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md inline-block">
                    Cluster 6
                  </span>
                  <IconTile color="rose" size="sm">
                    <Award className="w-4 h-4" />
                  </IconTile>
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Essential Safety Posters &amp; Guides</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Printable kitchen wall standard operating procedures for colour-coded cutting boards, hand hygiene, and food hygiene test prep.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/chopping-board-colour-chart" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Chopping Board Colour Guide
                </Link>
                <Link href="/food-safety-templates/hand-washing-poster" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Hand Washing SOP Poster
                </Link>
                <Link href="/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: Level 2 Food Hygiene Practice Test
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN 2-COLUMN HUB LAYOUT (SIDEBAR + GRID) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

          {/* ═══════════════════════════════════════════════════════════════
              LEFT SIDEBAR: FILTER RESOURCES (SAIM DEV STYLE)
          ════════════════════════════════════════════════════════════════ */}
          <aside className="filter-sidebar lg:sticky lg:top-24 rounded-3xl p-5 sm:p-6 bg-[#feeedb] border border-[#fddbc0] shadow-sm space-y-5 no-print">
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(prev => !prev)}
              className="w-full flex items-center justify-between text-left cursor-pointer lg:cursor-default"
              aria-expanded={isMobileFilterOpen}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-[#1D1D1F]">Filter Kitchen Resources</span>
                {(selectedType !== "all" || selectedActivity !== "all" || selectedPurpose !== "all" || searchTerm) && (
                  <span className="lg:hidden text-[10px] font-bold bg-amber-600 text-white px-2 py-0.5 rounded-full">
                    Active
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-gray-700">
                <SlidersHorizontal className="w-4 h-4" />
                <ChevronDown className={`w-4 h-4 lg:hidden transition-transform duration-200 ${isMobileFilterOpen ? "rotate-180" : ""}`} />
              </div>
            </button>

            <div className={`space-y-5 ${isMobileFilterOpen ? "block" : "hidden lg:block"}`}>
              {/* Type Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="filter-type" className="block text-xs font-bold text-gray-700">Type</label>
                <select
                  id="filter-type"
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                  className="w-full bg-white border border-[#e5d4be] rounded-xl px-3 py-2.5 text-xs text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer shadow-sm"
                >
                  <option value="all">All options ({FOOD_SAFETY_TEMPLATES.length})</option>
                  <option value="smart_tool">Smart tool ({FOOD_SAFETY_TEMPLATES.filter(t => t.type === "smart_tool").length})</option>
                  <option value="poster">Poster ({FOOD_SAFETY_TEMPLATES.filter(t => t.type === "poster").length})</option>
                  <option value="checklist">Checklist ({FOOD_SAFETY_TEMPLATES.filter(t => t.type === "checklist").length})</option>
                  <option value="chart">Chart ({FOOD_SAFETY_TEMPLATES.filter(t => t.type === "chart").length})</option>
                  <option value="log">Monitoring log ({FOOD_SAFETY_TEMPLATES.filter(t => t.type === "log").length})</option>
                </select>
              </div>

              {/* Business Activity Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="filter-activity" className="block text-xs font-bold text-gray-700">Business activity</label>
                <select
                  id="filter-activity"
                  value={selectedActivity}
                  onChange={e => setSelectedActivity(e.target.value)}
                  className="w-full bg-white border border-[#e5d4be] rounded-xl px-3 py-2.5 text-xs text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer shadow-sm"
                >
                  <option value="all">All options</option>
                  <option value="restaurant">Hospitality (Restaurants, Takeaways, Cafes)</option>
                  <option value="healthcare">Healthcare &amp; Schools</option>
                  <option value="producer">Manufacturing &amp; Production</option>
                  <option value="retail">Retail &amp; Grocery</option>
                  <option value="wholesale">Wholesale</option>
                </select>
              </div>

              {/* Purpose Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="filter-purpose" className="block text-xs font-bold text-gray-700">Purpose</label>
                <select
                  id="filter-purpose"
                  value={selectedPurpose}
                  onChange={e => setSelectedPurpose(e.target.value)}
                  className="w-full bg-white border border-[#e5d4be] rounded-xl px-3 py-2.5 text-xs text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer shadow-sm"
                >
                  <option value="all">All options</option>
                  <option value="new">Open my brand new business</option>
                  <option value="operating">Operate my running business effectively</option>
                </select>
              </div>

              {/* Search Templates Input */}
              <div className="space-y-1.5">
                <label htmlFor="filter-search" className="block text-xs font-bold text-gray-700">Search templates</label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="filter-search"
                    type="text"
                    placeholder="e.g. Allergen, Freezer, Cleaning..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-[#e5d4be] rounded-xl pl-9 pr-3 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
                  />
                </div>
              </div>

              {/* Reset Filters */}
              {(selectedType !== "all" || selectedActivity !== "all" || selectedPurpose !== "all" || searchTerm) && (
                <button
                  onClick={() => {
                    setSelectedType("all");
                    setSelectedActivity("all");
                    setSelectedPurpose("all");
                    setSearchTerm("");
                  }}
                  className="w-full py-2 text-xs font-bold text-amber-900 hover:text-black transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset all filters</span>
                </button>
              )}

              {/* Sidebar Promo Box */}
              <div className="p-4 rounded-2xl bg-white/80 border border-[#e5d4be] space-y-2">
                <span className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-amber-800">
                  Custom Takeaway Websites
                </span>
                <p className="text-xs text-gray-600 leading-snug">
                  Need an allergen filter on your online menu?
                </p>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20website%20with%20allergen%20filtering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#1D1D1F] hover:underline flex items-center gap-1 pt-1"
                >
                  <span>Ask Saim on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </aside>

          {/* ═══════════════════════════════════════════════════════════════
              RIGHT MAIN COLUMN: 4-COLUMN TEMPLATE GRID (160 ITEMS)
          ════════════════════════════════════════════════════════════════ */}
          <main className="space-y-6">
            {/* Results Counter & Free Pack Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2e2d75] via-[#39388c] to-[#2e2d75] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg top-banner no-print">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                  Kitchen Safety Templates &amp; Record Tools
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  All {FOOD_SAFETY_TEMPLATES.length} Posters, Logs, Charts and Smart Tools, Free
                </h3>
                <p className="text-xs text-white/80 mt-1 max-w-xl">
                  Customise kitchen sheets online and print or save as PDF with zero sign-up.
                </p>
              </div>

              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-bold shrink-0 font-mono">
                {filteredTemplates.length} Resources Available
              </div>
            </div>

            {/* Active Filter Chips */}
            <div className="flex items-center justify-between text-xs text-gray-500 px-1 no-print">
              <span>Showing <strong>{coreTemplates.length}</strong> food safety templates</span>
              <span className="font-mono text-[11px]">Print &amp; Save as PDF Ready</span>
            </div>

            {/* 4-COLUMN RESPONSIVE GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {coreTemplates.map((template, idx) => (
                <div
                  key={template.id}
                  className="group rounded-2xl bg-white border border-[#E5E5EA] hover:border-gray-400 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {/* Card Image Container with Color-Coded Background */}
                  <Link
                    href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Preview ${template.title}`}
                    className={`p-4 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-[1.02] ${getCardBg(template.type)}`}
                  >
                    <img
                      src={template.thumbUrl || template.imgUrl}
                      alt={`${template.title} - Free UK Food Hygiene Template (PDF Download)`}
                      width={300}
                      height={424}
                      className="max-h-full max-w-full object-contain drop-shadow-sm"
                      loading={idx < 12 ? "eager" : "lazy"}
                      decoding="async"
                      onError={(e) => {
                        // Fallback if SVG fails
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />

                    {/* Preheader Badge */}
                    <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider font-mono shadow-sm ${getPillColor(template.type)}`}>
                      {template.preheader || template.type.toUpperCase()}
                    </span>
                  </Link>

                  {/* Card Content & Title */}
                  <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between gap-3">
                    <Link
                      href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <h4 className="font-bold text-xs sm:text-sm text-[#1D1D1F] line-clamp-2 leading-snug group-hover:text-amber-800 transition-colors">
                        {template.title}
                      </h4>
                    </Link>

                    {/* Action Button */}
                    <div className="pt-2 border-t border-gray-100 flex items-center">
                      <Link
                        href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${template.title}`}
                        className="w-full py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-black text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer group-hover:bg-[#2e2d75]"
                      >
                        <span>{template.type === "smart_tool" || template.slug.includes("calc") || template.slug.includes("allergen") || template.slug.includes("quiz") ? "Open Interactive Tool" : "Open Template"}</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {coreTemplates.length === 0 && (
              <div className="p-12 text-center rounded-3xl bg-white border border-gray-200">
                <Search className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <h4 className="font-bold text-gray-800 text-base">No templates match your filters</h4>
                <p className="text-xs text-gray-500 mt-1">Try selecting different filter options or clearing the search box.</p>
                <button
                  onClick={() => {
                    setSelectedType("all");
                    setSelectedActivity("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Collapsible Drawer for Specialist & International Standards */}
            {offAudienceTemplates.length > 0 && (
              <details className="mt-10 rounded-2xl border border-gray-200 bg-gray-50/80 p-5 group no-print">
                <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-bold text-gray-700 select-none">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span>More resources ({offAudienceTemplates.length} Specialist &amp; International Standards)</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-xs text-gray-500 mt-2 mb-4 leading-relaxed">
                  Specialist industrial manufacturing checklists, US FDA reference charts, and export compliance templates for non-catering operations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 pt-1">
                  {offAudienceTemplates.map((template) => (
                    <Link
                      key={template.id}
                      href={`/food-safety-templates/${getCanonicalTemplateSlug(template.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white border border-gray-200 hover:border-gray-400 flex flex-col justify-between shadow-2xs group/card"
                    >
                      <span className="text-xs font-semibold text-gray-900 group-hover/card:text-amber-800 line-clamp-2">
                        {template.title}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono mt-1.5 uppercase">
                        {template.type}
                      </span>
                    </Link>
                  ))}
                </div>
              </details>
            )}
          </main>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          INTERACTIVE SMART TOOL MODAL (FULL EXPERIENCE)
      ════════════════════════════════════════════════════════════════ */}
      {activeInteractiveTool && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto no-print">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-gray-200">
            {/* Modal Header Bar with Full Tab Link & Close */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase text-gray-500">Interactive Workspace</span>
                {activeInteractiveTool === "allergen" && (
                  <Link
                    href="/tools/allergen-matrix-generator"
                    target="_blank"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
                {activeInteractiveTool === "cost" && (
                  <Link
                    href="/tools/food-cost-calculator"
                    target="_blank"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
                {activeInteractiveTool === "recipe" && (
                  <Link
                    href="/tools/recipe-batch-calculator"
                    target="_blank"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
              </div>
              <button
                onClick={() => setActiveInteractiveTool(null)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors close-modal-btn cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* MODAL: ALLERGEN MATRIX */}
            {activeInteractiveTool === "allergen" && (
              <AllergenMatrixTool />
            )}

            {/* MODAL: FOOD COST CALCULATOR */}
            {activeInteractiveTool === "cost" && (
              <FoodCostCalculatorTool />
            )}

            {/* MODAL: RECIPE CALCULATOR */}
            {activeInteractiveTool === "recipe" && (
              <RecipeCalculatorTool />
            )}

            {/* MODAL: SAFE TEMPS */}
            {activeInteractiveTool === "temps" && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-wider font-mono">
                    UK FSA Critical Control Limits
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
                    Safe Cooking &amp; Chilling Temperatures Guide
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900">
                    <span className="font-bold text-base block mb-1">Chilled &amp; Frozen</span>
                    <strong className="text-xl text-sky-700 block mb-2">&lt; 5°C</strong>
                    <p>Fridges: 0°C to 5°C (legal max 8°C). Freezers: -18°C or colder.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900">
                    <span className="font-bold text-base block mb-1">⚠️ Danger Zone</span>
                    <strong className="text-xl text-red-700 block mb-2">8°C &ndash; 63°C</strong>
                    <p>Bacteria multiply rapidly. Never leave cooked food at room temperature.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                    <span className="font-bold text-base block mb-1">Cooking Core Temp</span>
                    <strong className="text-xl text-emerald-700 block mb-2">75°C+</strong>
                    <p>Instant 75°C core (or 70°C for 2 min). Hot holding above 63°C.</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => window.print()}
                    className="bg-black text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 shadow"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Kitchen Temperature Poster</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          COMPLETE EDITORIAL SECTIONS (UK FSA & NATASHA'S LAW STANDARDS)
      ════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-8 no-print">
        <FoodSafetyDisclaimer />
      </div>

      <section className="editorial-section border-t border-[#E5E5EA] bg-white py-16 px-4 sm:px-8 no-print">
        <div className="max-w-4xl mx-auto space-y-12 text-[#1D1D1F]">

          {/* Section: Key Takeaways */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F6F6F9] border border-[#E5E5EA] space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed list-disc list-inside">
              <li>Food safety templates help standardise routines, organise kitchen records, and support daily food hygiene.</li>
              <li>Visual reminders like posters promote best practices in hygiene, temperature control, and cross-contamination prevention.</li>
              <li>Checklists and logs foster staff accountability and simplify daily, weekly, and monthly tasks for health inspection readiness.</li>
              <li>Temperature logs and calibration records support your own HACCP monitoring.</li>
            </ul>
          </div>

          {/* Section: Kitchen Wall SOPs */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              UK Kitchen Wall SOPs: Visual Standards for Food Handlers &amp; Prep Lines
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Laminated kitchen posters—such as the UK Colour-Coded Chopping Board Guide, Hand Hygiene SOP, and 90-Minute Rapid Food Cooling Protocol—serve as immediate visual reminders for commis chefs and kitchen porters. Positioned directly at hand-wash basins, raw meat prep stations, and pass lines, these visual standards reinforce cross-contamination barriers and support Food Standards Agency (FSA) hygiene practices during rush services.
            </p>
          </div>

          {/* Section: Printable Takeaway Records */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Printable Takeaway Due Diligence Sheets: Practical Daily Records
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              These operational record sheets are engineered specifically for independent British takeaways, pubs, cafes, and dark kitchens. Instead of cumbersome generic paperwork, our digital and printable sheets allow supervisors to log dual-shift fridge temperatures, hot-holding readings, and Natasha's Law allergen matrices with zero unnecessary clutter. Every template can be filled in your browser and printed directly for your kitchen compliance folder.
            </p>
          </div>

          {/* Section: Opening & Closing Checklists */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Opening, Closing &amp; Sanitisation Checklists for Busy Shifts
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Daily operational checklists provide kitchen teams with an unambiguous routine before morning prep starts and after the night cleanup finishes. Following the structure of the FSA Safer Food, Better Business (SFBB) diary pack, completing our daily opening, closing, and deep-cleaning logs provides contemporaneous proof of due diligence for unannounced local council Environmental Health Officer (EHO) visits.
            </p>
          </div>

          {/* Section: 4 Key Advantages */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              4 Key Operational Advantages for UK Food Businesses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">1. Structured Due Diligence Records</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Organize essential temperature logs and cleaning sheets to support statutory defense under Section 21 of the Food Safety Act 1990.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">2. Consistent Shift Standards</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Standardize food preparation and hygiene routines across daytime prep crews and evening service brigades.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">3. Transparent Staff Sign-Offs</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Named supervisor signatures ensure that morning checks and shutdown tasks are actually verified every day.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">4. Stress-Free Council Inspections</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Maintain neat, inspection-ready records that demonstrate confidence in management to local Environmental Health Officers.</p>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              HIGH-TICKET AGENCY CONVERSION OFFER (FOOTER)
          ════════════════════════════════════════════════════════════════ */}
          <div className="rounded-3xl bg-[#1D1D1F] text-white p-8 sm:p-12 space-y-4 shadow-xl">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              Bespoke Takeaway Web Development
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Need an online menu with an allergen filter?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
              Saim Dev builds fast, mobile-friendly websites for UK takeaways and restaurants, including allergen filters on menus.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20website%20with%20allergen%20filtering"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("hub_footer")}
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow"
              >
                <span>Discuss with Lead Architect on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services/takeaway-web-design"
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-1.5 transition-all border border-white/15"
              >
                <span>takeaway website with allergen filter</span>
              </Link>
            </div>
          </div>

        </div>
      </section>


        {/* ── FREQUENTLY ASKED QUESTIONS (AEO & AI EXTRACTION) ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                UK Food Safety Templates &amp; Kitchen Compliance FAQs
              </h2>
              <p className="text-xs text-gray-500">
                Authoritative compliance answers for UK commercial kitchens, takeaways, and caterers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4 space-y-1.5">
              <h3 className="font-bold text-gray-900 flex items-start gap-1.5">
                <span className="text-amber-600 font-mono">Q1.</span>
                <span>Are all food safety templates and tools free to download and print?</span>
              </h3>
              <p className="text-gray-600 leading-relaxed pl-5">
                Yes. All 160 templates, charts, checklists, and calculators on Saim Dev are 100% free to customise, download, and print as PDF with zero registration or subscription required.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4 space-y-1.5">
              <h3 className="font-bold text-gray-900 flex items-start gap-1.5">
                <span className="text-amber-600 font-mono">Q2.</span>
                <span>Do these kitchen templates comply with UK Food Standards Agency (FSA) regulations?</span>
              </h3>
              <p className="text-gray-600 leading-relaxed pl-5">
                Yes. Our kitchen checklists, allergen matrices, and temperature logs are designed around official UK FSA guidelines, SFBB (Safer Food, Better Business) standards, and Natasha&apos;s Law (Food Information Regulations).
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4 space-y-1.5">
              <h3 className="font-bold text-gray-900 flex items-start gap-1.5">
                <span className="text-amber-600 font-mono">Q3.</span>
                <span>How do I customise and print a template as a PDF?</span>
              </h3>
              <p className="text-gray-600 leading-relaxed pl-5">
                Select any template card, fill in your restaurant or takeaway business details, and click &apos;Print / Save PDF&apos; to generate a clean, high-resolution A4 kitchen poster or record sheet.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4 space-y-1.5">
              <h3 className="font-bold text-gray-900 flex items-start gap-1.5">
                <span className="text-amber-600 font-mono">Q4.</span>
                <span>What is the difference between Prepacked for Direct Sale (PPDS) and non-prepacked food?</span>
              </h3>
              <p className="text-gray-600 leading-relaxed pl-5">
                Under Natasha&apos;s Law, PPDS food is packaged at the same premises from which it is offered to consumers before ordering (e.g. boxed sandwiches or packaged salads), requiring full ingredients lists with all 14 statutory allergens emphasised in bold.
              </p>
            </div>
          </div>
        </div>

      {/* ── FOOTER ── */}
      <SiteFooter theme="light" />
    </div>
  );
};
