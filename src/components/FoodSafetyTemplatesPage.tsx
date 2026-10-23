"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Printer,
  ShieldAlert,
  Calculator,
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
  ChefHat,
  ClipboardCheck,
  AlertCircle,
  Sliders,
  Check
} from "lucide-react";
import { FOOD_SAFETY_TEMPLATES, FoodSafetyTemplate } from "@/data/saim_templates";
import { ALLERGENS, MenuItem, AllergenStatus } from "./ToolsPage";
import { AllergenMatrixTool } from "./tools/AllergenMatrixTool";
import { FoodCostCalculatorTool } from "./tools/FoodCostCalculatorTool";
import { RecipeCalculatorTool } from "./tools/RecipeCalculatorTool";

export const FoodSafetyTemplatesPage: React.FC = () => {
  // ── FILTER STATES (INTERNAL SAIM DEV FILTERS) ──
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedActivity, setSelectedActivity] = useState<string>("all");
  const [selectedPurpose, setSelectedPurpose] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeInteractiveTool, setActiveInteractiveTool] = useState<string | null>(null);

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
              <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-[#1D1D1F] text-base tracking-tight">Saim Dev</span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
            Food Safety Templates Hub
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveInteractiveTool("allergen")}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#C8E6C9] px-3.5 py-1.5 rounded-full transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Interactive Allergen Matrix</span>
          </button>

          <a
            href="https://wa.me/447473962953?text=Hi%20Saim,%20I'm%20using%20the%20Food%20Safety%20Templates%20Hub"
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
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>Official HACCP &amp; Food Hygiene Resources</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">Free Printable &amp; Digital</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1]">
              Food Safety Templates Hub: Posters, Checklists, Logs, Smart Tools, and More
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-1">
              Explore our comprehensive collection of food safety templates, checklists, logs, posters, 
              and smart calculators. Designed for restaurants, takeaways, caterers, and food manufacturers 
              to streamline Natasha&apos;s Law compliance and achieve 5-Star Food Hygiene ratings.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-semibold text-gray-500 uppercase font-mono tracking-wider">Quick Launch:</span>
              <button
                onClick={() => setActiveInteractiveTool("allergen")}
                className="text-xs font-medium text-gray-700 hover:text-black bg-white hover:bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-blue-600" />
                <span>Allergen Matrix</span>
              </button>
              <button
                onClick={() => setActiveInteractiveTool("cost")}
                className="text-xs font-medium text-gray-700 hover:text-black bg-white hover:bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                <span>Food Cost Calculator</span>
              </button>
              <button
                onClick={() => setActiveInteractiveTool("recipe")}
                className="text-xs font-medium text-gray-700 hover:text-black bg-white hover:bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />
                <span>Recipe Calculator</span>
              </button>
              <button
                onClick={() => setActiveInteractiveTool("temps")}
                className="text-xs font-medium text-gray-700 hover:text-black bg-white hover:bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
              >
                <Thermometer className="w-3.5 h-3.5 text-red-600" />
                <span>Safe Cooking Temps Chart</span>
              </button>
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
          <aside className="filter-sidebar sticky top-24 rounded-3xl p-6 bg-[#feeedb] border border-[#fddbc0] shadow-sm space-y-5 no-print">
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-[#1D1D1F]">Filter resources</span>
              <SlidersHorizontal className="w-4 h-4 text-gray-700" />
            </div>

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
                <option value="smart_tool">Smart tool (27)</option>
                <option value="poster">Poster (44)</option>
                <option value="checklist">Checklist (31)</option>
                <option value="chart">Chart (45)</option>
                <option value="log">Monitoring log (15)</option>
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
                Need automated Natasha&apos;s Law allergen filtering on your menu?
              </p>
              <a
                href="https://wa.me/447473962953?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20website%20with%20allergen%20filtering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#1D1D1F] hover:underline flex items-center gap-1 pt-1"
              >
                <span>Ask Saim on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>

          {/* ═══════════════════════════════════════════════════════════════
              RIGHT MAIN COLUMN: 4-COLUMN TEMPLATE GRID (171 ITEMS)
          ════════════════════════════════════════════════════════════════ */}
          <main className="space-y-6">
            {/* Results Counter & Free Pack Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2e2d75] via-[#39388c] to-[#2e2d75] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg top-banner no-print">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                  100% Free Interactive Templates &amp; Compliance Hub
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  All 160+ Posters, Logs, Charts &amp; Smart Tools Free
                </h3>
                <p className="text-xs text-white/80 mt-1 max-w-xl">
                  Customize compliance sheets online and print or save as PDF with zero sign-up.
                </p>
              </div>

              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-bold shrink-0 font-mono">
                {filteredTemplates.length} Resources Available
              </div>
            </div>

            {/* Active Filter Chips */}
            <div className="flex items-center justify-between text-xs text-gray-500 px-1 no-print">
              <span>Showing <strong>{filteredTemplates.length}</strong> food safety templates</span>
              <span className="font-mono text-[11px]">Print &amp; Save as PDF Ready</span>
            </div>

            {/* 4-COLUMN RESPONSIVE GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredTemplates.map((template, idx) => (
                <div
                  key={template.id}
                  className="group rounded-2xl bg-white border border-[#E5E5EA] hover:border-gray-400 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {/* Card Image Container with Color-Coded Background */}
                  <Link
                    href={`/food-safety-templates/${template.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 aspect-[4/3] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-[1.02] ${getCardBg(template.type)}`}
                  >
                    <img
                      src={template.thumbUrl || template.imgUrl}
                      alt={template.title}
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
                      href={`/food-safety-templates/${template.slug}`}
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
                        href={`/food-safety-templates/${template.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
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

            {filteredTemplates.length === 0 && (
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
                  className="mt-4 px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl"
                >
                  Clear Filters
                </button>
              </div>
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
                    href="/food-safety-templates/allergy-matrix"
                    target="_blank"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
                {activeInteractiveTool === "cost" && (
                  <Link
                    href="/food-safety-templates/food-cost-calculator"
                    target="_blank"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
                {activeInteractiveTool === "recipe" && (
                  <Link
                    href="/food-safety-templates/recipe-calculator"
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
      <section className="editorial-section border-t border-[#E5E5EA] bg-white py-16 px-4 sm:px-8 no-print">
        <div className="max-w-4xl mx-auto space-y-12 text-[#1D1D1F]">

          {/* Section: Key Takeaways */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F6F6F9] border border-[#E5E5EA] space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed list-disc list-inside">
              <li>Food safety templates streamline compliance, enhance operational consistency, and reduce risks of foodborne illnesses.</li>
              <li>Visual reminders like posters promote best practices in hygiene, temperature control, and cross-contamination prevention.</li>
              <li>Checklists and logs foster staff accountability and simplify daily, weekly, and monthly tasks for health inspection readiness.</li>
              <li>Temperature logs and calibration records support HACCP monitoring, Natasha&apos;s Law, and EHO audit readiness.</li>
            </ul>
          </div>

          {/* Section: Food safety posters */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Food safety posters: visual reminders for best practices
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Visual aids like our Kitchen Safety Poster and Hand Washing Poster are crucial in reinforcing proper food handling practices. 
              Placed strategically in food preparation and dining areas, these posters serve as constant reminders of personal hygiene, 
              proper handwashing techniques, and essential safety rules.
            </p>
          </div>

          {/* Section: Customizable templates */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Customizable food safety templates: streamline your safety processes
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our customizable templates are essential tools for comprehensive food safety management, allowing you to manage food safety hazards 
              and maintain compliance effortlessly. Whether you are running a restaurant, food manufacturing facility, or catering company, 
              these templates adapt to your unique operational workflow.
            </p>
          </div>

          {/* Section: Comprehensive checklists */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Comprehensive food safety checklists: your daily compliance partners
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Checklists are essential tools for maintaining consistency and compliance in daily operations. Use the Restaurant Cleaning Checklist 
              and Kitchen Opening and Closing Checklist to maintain a spotless environment every shift. The Health Inspection Checklist ensures 
              your team is always audit-ready.
            </p>
          </div>

          {/* Section: 5 Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              5 Benefits of using these food safety resources in your food business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">1. Enhanced compliance and reduced risk</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Meet local authority and FSA food safety standards consistently.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">2. Improved efficiency and consistency</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Standardize food preparation and hygiene routines across all staff shifts.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">3. Increased staff accountability</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Sign-off sheets ensure tasks are completed and verified daily.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">4. Enhanced customer trust &amp; 5★ ratings</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Protect your reputation and prevent catastrophic allergy incidents.</p>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              HIGH-TICKET AGENCY CONVERSION OFFER (FOOTER)
          ════════════════════════════════════════════════════════════════ */}
          <div className="rounded-3xl bg-[#1D1D1F] text-white p-8 sm:p-12 space-y-4 shadow-xl">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              Bespoke Takeaway &amp; Restaurant Web Development
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to automate food safety on your own online ordering website?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
              We engineer custom, ultra-fast websites for UK takeaways and restaurants with automated allergen badges, 
              direct WhatsApp orders, and 0% commission fees on every order.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://wa.me/447473962953?text=Hi%20Saim,%20I%20want%20to%20build%20a%20custom%20takeaway%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow"
              >
                <span>Discuss with Lead Architect on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://calendly.com/saimdev/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-full border border-white/20 transition-all"
              >
                <span>Book 15-Min Strategy Call</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#E5E5EA] bg-white py-8 px-4 sm:px-8 text-center text-xs text-gray-500 no-print">
        <p>© 2026 Saim Dev. All 160+ Food Safety Templates, Checklists &amp; Posters are 100% Free.</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>•</span>
          <Link href="/services" className="hover:text-black">Services</Link>
          <span>•</span>
          <Link href="/demos" className="hover:text-black">Demos</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};
