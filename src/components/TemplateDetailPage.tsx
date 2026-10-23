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
  Check,
  RotateCcw,
  Clock,
  HelpCircle
} from "lucide-react";
import { FoodSafetyTemplate, FOOD_SAFETY_TEMPLATES } from "@/data/saim_templates";
import { ALLERGENS, MenuItem, AllergenStatus } from "./ToolsPage";

interface Props {
  template: FoodSafetyTemplate;
}

export const TemplateDetailPage: React.FC<Props> = ({ template }) => {
  // Related templates (same type or category)
  const related = FOOD_SAFETY_TEMPLATES.filter(
    (t) => t.id !== template.id && (t.type === template.type || t.catSlug === template.catSlug)
  ).slice(0, 4);

  // Types of interactive tools
  const isAllergenTool =
    template.slug.includes("allergen") ||
    template.slug.includes("allergy") ||
    template.title.toLowerCase().includes("allergen");

  const isCostTool =
    template.slug.includes("cost") ||
    template.slug.includes("margin") ||
    template.slug.includes("recipe-calc") ||
    template.slug.includes("recipe-card") ||
    template.title.toLowerCase().includes("cost");

  const isQuizTool =
    template.slug.includes("quiz") ||
    template.title.toLowerCase().includes("quiz");

  const isChecklistOrLog =
    !isAllergenTool &&
    !isCostTool &&
    !isQuizTool &&
    (template.type === "checklist" ||
      template.type === "log" ||
      template.slug.includes("checklist") ||
      template.slug.includes("log") ||
      template.slug.includes("schedule") ||
      template.slug.includes("sheet") ||
      template.slug.includes("opening") ||
      template.slug.includes("sop") ||
      template.slug.includes("audit"));

  // Common Header State
  const [restaurantName, setRestaurantName] = useState("My Takeaway & Kitchen");
  const [completedBy, setCompletedBy] = useState("Head Chef / Manager");
  const [reviewDate, setReviewDate] = useState(() => new Date().toISOString().split("T")[0]);

  // Allergen Matrix Interactive State
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

  // Digital Checklist / Log State
  const [checklistTasks, setChecklistTasks] = useState([
    { id: "1", task: "Probe calibrate & check main refrigeration (< 5°C)", checked: true, note: "Probe read: 3.4°C" },
    { id: "2", task: "Inspect walk-in commercial freezer temperature (< -18°C)", checked: true, note: "-19.2°C logged" },
    { id: "3", task: "Verify raw meat and ready-to-eat separation and color-coded chopping boards", checked: true, note: "Clean and separated" },
    { id: "4", task: "Check handwashing stations: warm water, antibacterial soap & blue roll", checked: true, note: "Fully equipped" },
    { id: "5", task: "Inspect sanitiser solution concentration (BS EN 1276 compliance)", checked: false, note: "Needs top-up" },
    { id: "6", task: "Date labels and PPDS Natasha's Law compliance check", checked: true, note: "Labels printed and attached" },
    { id: "7", task: "Check kitchen extraction hood, ventilation and grease filters", checked: false, note: "Scheduled for night clean" }
  ]);
  const [newTaskInput, setNewTaskInput] = useState("");

  const toggleTask = (id: string) => {
    setChecklistTasks(prev => prev.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    setChecklistTasks(prev => [
      ...prev,
      { id: Date.now().toString(), task: newTaskInput.trim(), checked: false, note: "Added manually" }
    ]);
    setNewTaskInput("");
  };

  // Food Safety Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      q: "What is the food temperature Danger Zone defined by the UK Food Standards Agency (FSA)?",
      options: ["0°C to 100°C", "8°C to 63°C", "20°C to 45°C", "-18°C to 0°C"],
      correct: 1
    },
    {
      q: "Under Natasha's Law (UK), what must Prepacked for Direct Sale (PPDS) foods display?",
      options: ["Only the calorie count", "Full ingredients list with the 14 allergens emphasized", "Only the chef's name", "Price excluding VAT"],
      correct: 1
    },
    {
      q: "Within what timeframe must cooked food be cooled to below 8°C?",
      options: ["Within 90 minutes (max 2 hours)", "Within 6 hours", "Within 12 hours", "Overnight at room temp"],
      correct: 0
    },
    {
      q: "Which chopping board color is designated for raw poultry in UK commercial kitchens?",
      options: ["Red", "Yellow", "Blue", "Green"],
      correct: 1
    },
    {
      q: "What is the legal minimum temperature for reheating hot holding food in England & Wales?",
      options: ["60°C", "75°C (reheated core) and held above 63°C", "50°C", "100°C"],
      correct: 1
    }
  ];

  const quizScore = Object.keys(quizAnswers).reduce((score, idx) => {
    const qIndex = Number(idx);
    return quizAnswers[qIndex] === quizQuestions[qIndex].correct ? score + 1 : score;
  }, 0);

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
                <span>Print Poster / Sheet</span>
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
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Review Date</label>
                <input
                  type="date"
                  value={reviewDate}
                  onChange={e => setReviewDate(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-semibold text-gray-900"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
                  <tr>
                    <th className="p-3 border-b">Dish Name</th>
                    {ALLERGENS.map(a => (
                      <th key={a.id} className="p-2 border-b text-center whitespace-nowrap" title={a.name}>
                        {a.icon} {a.name.slice(0, 4)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {menuItems.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-3 font-semibold text-gray-900">
                        {item.name}
                        <div className="text-[10px] text-gray-400 font-normal">{item.ingredients}</div>
                      </td>
                      {ALLERGENS.map(a => {
                        const status = item.allergens[a.id] || "none";
                        return (
                          <td key={a.id} className="p-1 text-center">
                            <button
                              onClick={() => toggleAllergen(item.id, a.id)}
                              className={`w-7 h-7 rounded-lg text-[10px] font-bold font-mono transition-transform active:scale-95 cursor-pointer ${
                                status === "contains"
                                  ? "bg-red-500 text-white shadow-sm"
                                  : status === "may"
                                  ? "bg-amber-400 text-gray-900 font-extrabold"
                                  : "bg-gray-100 text-gray-300 hover:text-gray-400"
                              }`}
                              title={`${a.name}: Click to cycle (Contains / May Contain / None)`}
                            >
                              {status === "contains" ? "YES" : status === "may" ? "MAY" : "—"}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Dish Form */}
            <form onSubmit={handleAddDish} className="flex gap-2 items-center no-print">
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

        {/* ═══════════════════════════════════════════════════════════════
            IF FOOD SAFETY QUIZ: INTERACTIVE QUIZ EMBED
        ════════════════════════════════════════════════════════════════ */}
        {isQuizTool && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6 printable-doc">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Interactive Food Safety Knowledge Test
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                  Test Your UK Food Hygiene &amp; Safety Compliance
                </h2>
              </div>
              {quizSubmitted && (
                <div className="text-right">
                  <span className="text-xs font-bold uppercase font-mono text-gray-500">Score</span>
                  <div className="text-2xl font-black text-indigo-600">{quizScore} / {quizQuestions.length}</div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {quizQuestions.map((q, qIdx) => {
                const selected = quizAnswers[qIdx];
                return (
                  <div key={qIdx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <p className="font-bold text-sm text-gray-900">
                      {qIdx + 1}. {q.q}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "bg-white border-gray-200 text-gray-800 hover:border-gray-400";
                        if (selected === optIdx) {
                          btnStyle = "bg-indigo-600 border-indigo-600 text-white font-bold";
                        }
                        if (quizSubmitted) {
                          if (optIdx === q.correct) {
                            btnStyle = "bg-emerald-600 border-emerald-600 text-white font-bold";
                          } else if (selected === optIdx && optIdx !== q.correct) {
                            btnStyle = "bg-red-500 border-red-500 text-white font-bold";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => {
                              if (!quizSubmitted) {
                                setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
                              }
                            }}
                            className={`text-left px-3.5 py-2.5 rounded-xl text-xs border transition-all cursor-pointer ${btnStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pt-2 no-print">
              {!quizSubmitted ? (
                <button
                  type="button"
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow"
                >
                  Submit &amp; Check Answers
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            IF CHECKLIST / LOG: INTERACTIVE DIGITAL CHECKLIST EMBED
        ════════════════════════════════════════════════════════════════ */}
        {isChecklistOrLog && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6 printable-doc">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Interactive Digital Inspection Checklist
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                  Daily Commercial Kitchen Verification Log
                </h2>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 self-start cursor-pointer no-print shadow"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Completed Sheet</span>
              </button>
            </div>

            {/* Checklist items */}
            <div className="space-y-2 border border-gray-200 rounded-2xl p-3 bg-gray-50/50">
              {checklistTasks.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => toggleTask(item.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                    item.checked
                      ? "bg-emerald-50/80 border-emerald-200 text-gray-900"
                      : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                      item.checked ? "bg-emerald-600 border-emerald-600 text-white" : "border-gray-300 bg-white"
                    }`}>
                      {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <p className={`text-xs font-semibold ${item.checked ? "line-through text-gray-500" : ""}`}>
                        {item.task}
                      </p>
                      {item.note && (
                        <p className="text-[10px] text-gray-400 font-mono mt-0.5">{item.note}</p>
                      )}
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    item.checked ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-500"
                  }`}>
                    {item.checked ? "COMPLETED" : "PENDING"}
                  </span>
                </div>
              ))}
            </div>

            {/* Add custom check task */}
            <form onSubmit={handleAddTask} className="flex gap-2 items-center no-print">
              <input
                type="text"
                placeholder="Add custom task or critical control point check..."
                value={newTaskInput}
                onChange={e => setNewTaskInput(e.target.value)}
                className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900"
              />
              <button
                type="submit"
                className="bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Check</span>
              </button>
            </form>
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
