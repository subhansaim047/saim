"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Printer,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building,
  User,
  Calendar,
  ArrowRight,
  ExternalLink,
  Plus,
  Trash2,
  Search,
  Check
} from "lucide-react";
import { FoodSafetyTemplate, FOOD_SAFETY_TEMPLATES } from "@/data/saim_templates";
import { ALLERGENS, MenuItem, AllergenStatus } from "./ToolsPage";

interface Props {
  template: FoodSafetyTemplate;
}

export const TemplateDetailPage: React.FC<Props> = ({ template }) => {
  // Related templates (same type or category)
  const related = FOOD_SAFETY_TEMPLATES.filter(
    (t) => t.id !== template.id && t.type === template.type
  ).slice(0, 4);

  // Allergen Matrix Interactive State (if applicable)
  const isAllergenTool =
    template.slug.includes("allergen") ||
    template.slug.includes("allergy") ||
    template.title.toLowerCase().includes("allergen");

  const isCostTool =
    template.slug.includes("cost") ||
    template.slug.includes("margin") ||
    template.title.toLowerCase().includes("cost");

  const [restaurantName, setRestaurantName] = useState("My Takeaway & Kitchen");
  const [completedBy, setCompletedBy] = useState("Head Chef / Manager");
  const [reviewDate, setReviewDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Classic Cheeseburger",
      category: "Burgers",
      ingredients: "Beef patty, brioche bun, cheddar cheese, burger sauce, lettuce, tomato",
      allergens: { gluten: "contains", milk: "contains", eggs: "contains", sesame: "contains", mustard: "contains", soya: "may" }
    },
    {
      id: "2",
      name: "Margherita Pizza 12\"",
      category: "Pizzas",
      ingredients: "Hand-stretched dough, San Marzano tomato sauce, 100% mozzarella, basil",
      allergens: { gluten: "contains", milk: "contains" }
    },
    {
      id: "3",
      name: "Crispy Hot Wings",
      category: "Chicken",
      ingredients: "Seasoned crispy chicken wings, spicy cayenne glaze, celery dip",
      allergens: { gluten: "contains", celery: "contains", mustard: "contains", soya: "may" }
    },
    {
      id: "4",
      name: "Loaded Cheese Fries",
      category: "Sides",
      ingredients: "Crisp potato fries, garlic butter drizzle, melted cheddar & mozzarella",
      allergens: { milk: "contains", gluten: "may" }
    }
  ]);
  const [newDishName, setNewDishName] = useState("");
  const [newDishCategory, setNewDishCategory] = useState("Mains");

  const toggleAllergen = (itemId: string, allergenId: string) => {
    setMenuItems(prev =>
      prev.map(item => {
        if (item.id !== itemId) return item;
        const current = item.allergens[allergenId] || "none";
        const next: AllergenStatus = current === "none" ? "contains" : current === "contains" ? "may" : "none";
        return { ...item, allergens: { ...item.allergens, [allergenId]: next } };
      })
    );
  };

  const handleAddDish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDishName.trim()) return;
    setMenuItems(prev => [
      ...prev,
      { id: Date.now().toString(), name: newDishName.trim(), category: newDishCategory.trim(), ingredients: "", allergens: {} }
    ]);
    setNewDishName("");
  };

  // Food Cost State
  const [sellingPrice, setSellingPrice] = useState(8.50);
  const [costIngredients, setCostIngredients] = useState([
    { id: "1", name: "Minced Chuck Beef", packQty: 1000, packCost: 7.20, recipeQty: 200, unit: "g" },
    { id: "2", name: "Brioche Bun", packQty: 4, packCost: 1.60, recipeQty: 1, unit: "pcs" },
    { id: "3", name: "American Cheddar", packQty: 10, packCost: 2.20, recipeQty: 2, unit: "pcs" },
    { id: "4", name: "Burger Sauce", packQty: 500, packCost: 3.50, recipeQty: 30, unit: "ml" }
  ]);
  const totalCost = costIngredients.reduce((sum, ing) => sum + (ing.packQty > 0 ? (ing.packCost / ing.packQty) * ing.recipeQty : 0), 0);
  const foodCostPct = sellingPrice > 0 ? (totalCost / sellingPrice) * 100 : 0;
  const grossMargin = sellingPrice > 0 ? ((sellingPrice - totalCost) / sellingPrice) * 100 : 0;

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
              {template.pdfUrl ? (
                <a
                  href={`/api/download?id=${template.id}`}
                  className="bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free PDF</span>
                </a>
              ) : null}

              <button
                onClick={() => window.print()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-bold px-4 py-3 rounded-xl flex items-center gap-2 border border-gray-200 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Poster</span>
              </button>
            </div>

            <div className="text-[11px] text-gray-400 font-mono pt-1">
              • Compliant with UK Food Standards Agency (FSA) and Natasha&apos;s Law
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            IF INTERACTIVE ALLERGEN MATRIX: LIVE TOOL EMBED
        ════════════════════════════════════════════════════════════════ */}
        {isAllergenTool && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6 printable-doc">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono">
                Interactive Food Allergy Matrix
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                Customize Dishes &amp; Check UK 14 Major Allergens
              </h2>
            </div>

            {/* Config */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs no-print">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Restaurant Name</label>
                <input
                  type="text"
                  value={restaurantName}
                  onChange={e => setRestaurantName(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-semibold text-gray-900"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Audited By</label>
                <input
                  type="text"
                  value={completedBy}
                  onChange={e => setCompletedBy(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-semibold text-gray-900"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Date</label>
                <input
                  type="date"
                  value={reviewDate}
                  onChange={e => setReviewDate(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-semibold text-gray-900"
                />
              </div>
            </div>

            {/* Matrix */}
            <div className="border border-gray-200 rounded-2xl overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="p-3 font-bold text-gray-800 min-w-[170px] sticky left-0 bg-gray-100 z-10">Dish Name</th>
                    {ALLERGENS.map(a => (
                      <th key={a.id} className="p-2 text-center font-bold text-gray-700 min-w-[55px]">
                        <div className="flex flex-col items-center">
                          <span>{a.icon}</span>
                          <span className="text-[10px] font-mono">{a.short}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {menuItems.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-900 sticky left-0 bg-white z-10 border-r border-gray-100">
                        {item.name}
                        <span className="text-[10px] text-gray-400 block font-normal">{item.category}</span>
                      </td>
                      {ALLERGENS.map(a => {
                        const st = item.allergens[a.id] || "none";
                        return (
                          <td
                            key={a.id}
                            onClick={() => toggleAllergen(item.id, a.id)}
                            className="p-1 text-center cursor-pointer select-none hover:bg-gray-100"
                          >
                            {st === "contains" && (
                              <span className="inline-block px-1.5 py-0.5 rounded bg-red-600 text-white font-extrabold text-[10px]">C</span>
                            )}
                            {st === "may" && (
                              <span className="inline-block px-1.5 py-0.5 rounded bg-amber-500 text-white font-extrabold text-[10px]">MC</span>
                            )}
                            {st === "none" && <span className="text-gray-300">&mdash;</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Dish */}
            <form onSubmit={handleAddDish} className="flex flex-col sm:flex-row items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200 no-print">
              <input
                type="text"
                placeholder="New dish name..."
                value={newDishName}
                onChange={e => setNewDishName(e.target.value)}
                className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs text-gray-900"
              />
              <input
                type="text"
                placeholder="Category"
                value={newDishCategory}
                onChange={e => setNewDishCategory(e.target.value)}
                className="w-32 bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs text-gray-900"
              />
              <button
                type="submit"
                className="bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Dish</span>
              </button>
            </form>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            IF FOOD COST CALCULATOR: LIVE TOOL EMBED
        ════════════════════════════════════════════════════════════════ */}
        {isCostTool && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6 printable-doc">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider font-mono">
                Interactive Food Cost &amp; Profit Engine
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                Calculate Real-time Recipe Costs &amp; Target Margins
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <span className="text-[10px] font-mono uppercase text-gray-500">Portion Cost</span>
                <div className="text-2xl font-bold text-gray-900">£{totalCost.toFixed(2)}</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <span className="text-[10px] font-mono uppercase text-gray-500">Food Cost %</span>
                <div className={`text-2xl font-bold ${foodCostPct <= 28 ? "text-emerald-600" : "text-amber-600"}`}>
                  {foodCostPct.toFixed(1)}%
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <span className="text-[10px] font-mono uppercase text-gray-500">Gross Margin %</span>
                <div className="text-2xl font-bold text-emerald-600">{grossMargin.toFixed(1)}%</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <span className="text-[10px] font-mono uppercase text-gray-500">Selling Price</span>
                <input
                  type="number"
                  step="0.10"
                  value={sellingPrice}
                  onChange={e => setSellingPrice(Number(e.target.value))}
                  className="text-2xl font-bold text-gray-900 bg-transparent border-b border-gray-300 w-24 focus:outline-none"
                />
              </div>
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
                  className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-gray-400 transition-colors flex flex-col justify-between shadow-sm"
                >
                  <div className="aspect-[4/3] rounded-xl bg-gray-50 p-2 flex items-center justify-center mb-2">
                    <img src={item.imgUrl} alt={item.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="text-xs font-bold text-gray-900 line-clamp-2">{item.title}</span>
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
