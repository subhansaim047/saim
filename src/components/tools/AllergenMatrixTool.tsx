"use client";

import React, { useState, useMemo } from "react";
import { Plus, Trash2, Printer, ShieldAlert, Check, Search, Filter, RotateCcw, Edit3 } from "lucide-react";
import { ALLERGENS, MenuItem, AllergenStatus } from "../ToolsPage";

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    id: "dish-1",
    name: "Classic Cheeseburger",
    category: "Burgers",
    ingredients: "Beef patty, brioche bun, cheddar cheese, burger sauce, lettuce, tomato",
    allergens: { cereals: "contains", milk: "contains", eggs: "contains", sesame: "contains", mustard: "contains", soya: "may" }
  },
  {
    id: "dish-2",
    name: "Margherita Pizza 12\"",
    category: "Pizzas",
    ingredients: "Hand-stretched wheat dough, San Marzano tomato sauce, 100% fior di latte mozzarella, basil",
    allergens: { cereals: "contains", milk: "contains" }
  },
  {
    id: "dish-3",
    name: "Crispy Hot Wings",
    category: "Chicken",
    ingredients: "Buttermilk marinated fried chicken wings, hot cayenne butter glaze, celery dip",
    allergens: { cereals: "contains", milk: "contains", celery: "contains", mustard: "contains", soya: "may" }
  },
  {
    id: "dish-4",
    name: "Loaded Truffle Fries",
    category: "Sides",
    ingredients: "Skin-on potato fries, black truffle oil, garlic aioli, parmesan cheese",
    allergens: { milk: "contains", eggs: "contains", mustard: "may" }
  },
  {
    id: "dish-5",
    name: "Crispy King Prawns",
    category: "Starters",
    ingredients: "Panko crumbed king prawns, sweet chilli dip, fresh lime",
    allergens: { crustaceans: "contains", cereals: "contains", fish: "may", sesame: "may" }
  },
  {
    id: "dish-6",
    name: "Vegan Garden Salad",
    category: "Sides",
    ingredients: "Mixed baby leaf salad, cherry tomatoes, cucumber, balsamic vinaigrette",
    allergens: { sulphites: "contains" }
  }
];

export const AllergenMatrixTool: React.FC<{ templateId?: string }> = ({ templateId }) => {
  const [restaurantName, setRestaurantName] = useState("Artisan Kitchen & Takeaway Ltd");
  const [completedBy, setCompletedBy] = useState("Head Chef / Food Safety Manager");
  const [reviewDate, setReviewDate] = useState(() => new Date().toISOString().split("T")[0]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [freeFromFilter, setFreeFromFilter] = useState("all");

  const [menuItems, setMenuItems] = useState<MenuItem[]>(DEFAULT_MENU_ITEMS);

  const [newDishName, setNewDishName] = useState("");
  const [newDishCategory, setNewDishCategory] = useState("Burgers");
  const [newDishIngredients, setNewDishIngredients] = useState("");

  const categories = useMemo(() => {
    const set = new Set(menuItems.map(m => m.category));
    return ["all", ...Array.from(set)];
  }, [menuItems]);

  const toggleAllergen = (itemId: string, allergenId: string) => {
    setMenuItems(prev =>
      prev.map(item => {
        if (item.id !== itemId) return item;
        const current = item.allergens[allergenId] || "none";
        const next: AllergenStatus =
          current === "none" ? "contains" : current === "contains" ? "may" : "none";
        return { ...item, allergens: { ...item.allergens, [allergenId]: next } };
      })
    );
  };

  const handleAddDish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDishName.trim()) return;
    const newId = `dish-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setMenuItems(prev => [
      ...prev,
      {
        id: newId,
        name: newDishName.trim(),
        category: newDishCategory.trim() || "Mains",
        ingredients: newDishIngredients.trim(),
        allergens: {}
      }
    ]);
    setNewDishName("");
    setNewDishIngredients("");
  };

  const handleQuickAddEmpty = () => {
    const newId = `dish-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setMenuItems(prev => [
      ...prev,
      {
        id: newId,
        name: "New Recipe / Dish",
        category: "Mains",
        ingredients: "Add ingredients...",
        allergens: {}
      }
    ]);
  };

  const handleRemoveDish = (id: string) => {
    setMenuItems(prev => {
      if (prev.length <= 1) return prev;
      return prev.filter(m => m.id !== id);
    });
  };

  const handleReset = () => {
    setMenuItems(DEFAULT_MENU_ITEMS);
    setSearchQuery("");
    setSelectedCategory("all");
    setFreeFromFilter("all");
  };

  // Filtered menu
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesIngr = item.ingredients.toLowerCase().includes(q);
        if (!matchesName && !matchesIngr) return false;
      }
      if (freeFromFilter !== "all") {
        const status = item.allergens[freeFromFilter] || "none";
        if (status !== "none") return false;
      }
      return true;
    });
  }, [menuItems, selectedCategory, searchQuery, freeFromFilter]);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Print Page Setup (Landscape for 14 Allergen Columns) */}
      <style jsx global>{`
        @media print {
          @page {
            size: landscape;
            margin: 6mm;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .printable-doc {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .printable-doc table {
            width: 100% !important;
            table-layout: fixed !important;
            border-collapse: collapse !important;
          }
          .printable-doc th,
          .printable-doc td {
            border: 1px solid #d1d5db !important;
            padding: 4px 6px !important;
            word-break: break-word !important;
          }
          .printable-doc th {
            background-color: #1f2937 !important;
            color: #ffffff !important;
            font-size: 8pt !important;
          }
        }
      `}</style>

      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-red-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-red-600" />
            UK Food Standards Agency &amp; Natasha&apos;s Law Compliant
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
            Official 14 Food Allergen Matrix &amp; Kitchen Chart
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Audit allergen hazards, document recipe ingredients, and export for local authority food hygiene inspections.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 no-print">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-red-800 bg-red-50 border border-red-200 px-3 py-2 rounded-xl">
            <Edit3 className="w-3.5 h-3.5 text-red-600" />
            <span>All Dishes &amp; Allergens Editable</span>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Reset to sample dishes"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.02]"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>Print Allergen Chart</span>
          </button>
        </div>
      </div>

      {/* ── ESTABLISHMENT DETAILS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs">
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Establishment / Brand Name</label>
          <input
            type="text"
            value={restaurantName}
            onChange={e => setRestaurantName(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-red-500 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-bold text-xs text-gray-950">{restaurantName}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Assessed &amp; Signed By</label>
          <input
            type="text"
            value={completedBy}
            onChange={e => setCompletedBy(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-red-500 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-bold text-xs text-gray-950">{completedBy}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Review Date</label>
          <input
            type="date"
            value={reviewDate}
            onChange={e => setReviewDate(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-red-500 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-bold text-xs text-gray-950">{reviewDate}</div>
        </div>
      </div>

      {/* ── FILTER & SEARCH CONTROLS (NO-PRINT) ── */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between no-print">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-56">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-red-500"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-xl px-3 py-1.5 text-xs text-gray-700 font-semibold focus:outline-none focus:border-red-500"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c === "all" ? "All Categories" : c}</option>
            ))}
          </select>

          <select
            value={freeFromFilter}
            onChange={e => setFreeFromFilter(e.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-xl px-3 py-1.5 text-xs text-gray-700 font-semibold focus:outline-none focus:border-red-500"
          >
            <option value="all">No Dietary Filter</option>
            {ALLERGENS.map(a => (
              <option key={a.id} value={a.id}>Free From: {a.name}</option>
            ))}
          </select>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="flex items-center gap-1 font-bold text-red-700">
            <span className="w-3 h-3 rounded bg-red-500 inline-block" /> YES = Contains
          </span>
          <span className="flex items-center gap-1 font-bold text-amber-700">
            <span className="w-3 h-3 rounded bg-amber-400 inline-block" /> MAY = May Contain
          </span>
          <span className="flex items-center gap-1 text-gray-500">
            <span className="w-3 h-3 rounded bg-gray-200 inline-block" /> — = Free From
          </span>
        </div>
      </div>

      {/* ── 14-ALLERGEN INTERACTIVE TABLE ── */}
      <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white print:border-none print:overflow-visible">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#1D1D1F] text-white uppercase font-mono text-[9px] tracking-wider">
            <tr>
              <th className="p-3 border-b" style={{ width: "32%", minWidth: "270px" }}>Dish / Recipe Name &amp; Ingredients</th>
              {ALLERGENS.map(a => (
                <th key={a.id} className="p-2 border-b text-center whitespace-nowrap" style={{ width: "5%" }} title={a.name}>
                  <div>{a.icon}</div>
                  <div className="mt-0.5 text-[8px] opacity-80">{a.name.slice(0, 3)}</div>
                </th>
              ))}
              <th className="p-2 border-b text-right no-print" style={{ width: "2%" }}>Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredItems.map(item => (
              <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="p-2.5 align-top" style={{ minWidth: "270px" }}>
                  <input
                    type="text"
                    value={item.name}
                    onChange={e => {
                      const val = e.target.value;
                      setMenuItems(prev => prev.map(m => m.id === item.id ? { ...m, name: val } : m));
                    }}
                    placeholder="Dish name..."
                    className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-red-500 rounded-lg px-3 py-2 font-bold text-xs text-gray-900 focus:outline-none print:hidden shadow-2xs"
                  />
                  <div className="hidden print:block font-bold text-[9pt] text-gray-950 leading-tight">
                    {item.name}
                  </div>

                  <textarea
                    rows={4}
                    value={item.ingredients}
                    placeholder="Full ingredient breakdown..."
                    onChange={e => {
                      const val = e.target.value;
                      setMenuItems(prev => prev.map(m => m.id === item.id ? { ...m, ingredients: val } : m));
                    }}
                    className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-red-500 rounded-lg p-2.5 text-xs text-gray-800 focus:outline-none print:hidden shadow-2xs mt-1.5 resize-y leading-relaxed min-h-[92px]"
                  />
                  <div className="hidden print:block text-[8.5pt] text-gray-950 font-medium leading-relaxed whitespace-pre-wrap mt-1">
                    {item.ingredients}
                  </div>

                  <span className="inline-block mt-1 px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[9px] font-mono text-gray-600 print:text-[7.5pt] print:border-gray-300">
                    {item.category}
                  </span>
                </td>

                {ALLERGENS.map(a => {
                  const status = item.allergens[a.id] || "none";
                  return (
                    <td key={a.id} className="p-1 text-center align-middle">
                      <button
                        type="button"
                        onClick={() => toggleAllergen(item.id, a.id)}
                        className={`w-7 h-7 rounded-lg text-[9px] font-extrabold font-mono transition-transform active:scale-90 cursor-pointer print:hidden ${
                          status === "contains"
                            ? "bg-red-500 text-white shadow-xs"
                            : status === "may"
                            ? "bg-amber-400 text-gray-950 shadow-xs"
                            : "bg-gray-100 text-gray-300 hover:text-gray-500"
                        }`}
                        title={`${a.name}: Click to toggle (YES / MAY / Free)`}
                      >
                        {status === "contains" ? "YES" : status === "may" ? "MAY" : "—"}
                      </button>
                      <div className="hidden print:block text-center font-mono font-black text-[7.5pt]">
                        {status === "contains" ? (
                          <span className="inline-block px-1 py-0.5 rounded border border-red-600 bg-red-50 text-red-700 font-black">
                            YES
                          </span>
                        ) : status === "may" ? (
                          <span className="inline-block px-1 py-0.5 rounded border border-amber-500 bg-amber-50 text-amber-800 font-bold">
                            MAY
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </div>
                    </td>
                  );
                })}

                <td className="p-2 text-right no-print align-top">
                  <button
                    type="button"
                    onClick={() => handleRemoveDish(item.id)}
                    disabled={menuItems.length <= 1}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      menuItems.length <= 1
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-400 hover:text-red-500 hover:bg-red-50"
                    }`}
                    title="Remove dish"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── ADD NEW DISH & INGREDIENTS FORM ── */}
      <div className="space-y-3 no-print">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-gray-800 uppercase font-mono">
            + Add New Recipe / Dish to Allergen Matrix
          </h4>
          <button
            type="button"
            onClick={handleQuickAddEmpty}
            className="text-xs font-bold text-red-700 hover:text-red-900 cursor-pointer flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Quick Add Blank Row</span>
          </button>
        </div>

        <form onSubmit={handleAddDish} className="flex flex-col sm:flex-row gap-2 items-center p-3 bg-gray-50 rounded-2xl border border-gray-200">
          <input
            type="text"
            placeholder="Dish name (e.g. Garlic Naan)..."
            value={newDishName}
            onChange={e => setNewDishName(e.target.value)}
            className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-red-500"
          />
          <input
            type="text"
            placeholder="Category (e.g. Breads)..."
            value={newDishCategory}
            onChange={e => setNewDishCategory(e.target.value)}
            className="w-full sm:w-36 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-red-500"
          />
          <input
            type="text"
            placeholder="All ingredients (e.g. Wheat flour, yogurt, ghee, garlic)..."
            value={newDishIngredients}
            onChange={e => setNewDishIngredients(e.target.value)}
            className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-red-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer shrink-0 hover:scale-[1.01]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Dish &amp; Ingredients</span>
          </button>
        </form>
      </div>

      {/* ── REGULATORY AUDIT FOOTER ── */}
      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-gray-400 font-mono gap-2">
        <div>• Compliant with Food Information Regulations 2014 &amp; Natasha&apos;s Law (PPDS)</div>
        <div>Audited By: {completedBy} • Approved for Kitchen Wall Display</div>
      </div>
    </div>
  );
};
