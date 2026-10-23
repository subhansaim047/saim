"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Plus, Trash2, Printer, ShieldCheck, Search, RotateCcw, Edit3 } from "lucide-react";
import { ALLERGENS, MenuItem, AllergenStatus } from "../ToolsPage";

const STORAGE_KEY = "saim_allergen_matrix_v2";

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    id: "dish-1",
    name: "Classic Cheeseburger",
    category: "Burgers",
    ingredients: "Beef patty, brioche bun, cheddar cheese, burger sauce, lettuce, tomato",
    allergens: {
      gluten: "contains",
      milk: "contains",
      eggs: "contains",
      sesame: "contains",
      mustard: "contains",
      soya: "may"
    }
  },
  {
    id: "dish-2",
    name: "Margherita Pizza 12\"",
    category: "Pizzas",
    ingredients: "Hand-stretched wheat dough, San Marzano tomato sauce, 100% fior di latte mozzarella, basil",
    allergens: {
      gluten: "contains",
      milk: "contains"
    }
  },
  {
    id: "dish-3",
    name: "Crispy Hot Wings",
    category: "Chicken",
    ingredients: "Buttermilk marinated fried chicken wings, seasoned wheat flour coating, hot cayenne butter glaze, celery dip",
    allergens: {
      gluten: "contains",
      milk: "contains",
      celery: "contains",
      mustard: "contains",
      soya: "may"
    }
  },
  {
    id: "dish-4",
    name: "Loaded Truffle Fries",
    category: "Sides",
    ingredients: "Skin-on potato fries, black truffle oil, garlic aioli, parmesan cheese",
    allergens: {
      milk: "contains",
      eggs: "contains",
      mustard: "may"
    }
  },
  {
    id: "dish-5",
    name: "Crispy King Prawns",
    category: "Starters",
    ingredients: "Panko crumbed king prawns, sweet chilli dip, fresh lime",
    allergens: {
      crustaceans: "contains",
      gluten: "contains",
      fish: "may",
      sesame: "may"
    }
  },
  {
    id: "dish-6",
    name: "Vegan Garden Salad",
    category: "Sides",
    ingredients: "Mixed baby leaf salad, cherry tomatoes, cucumber, balsamic vinaigrette (contains mustard and sulphites)",
    allergens: {
      mustard: "contains",
      sulphites: "contains"
    }
  }
];

export const AllergenMatrixTool: React.FC<{ templateId?: string }> = () => {
  // Fields start empty with grey placeholder text
  const [restaurantName, setRestaurantName] = useState("");
  const [checkedBy, setCheckedBy] = useState("");
  const [reviewDate, setReviewDate] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [allergenFilter, setAllergenFilter] = useState("all");

  const [menuItems, setMenuItems] = useState<MenuItem[]>(DEFAULT_MENU_ITEMS);

  const [newDishName, setNewDishName] = useState("");
  const [newDishCategory, setNewDishCategory] = useState("Burgers");
  const [newDishIngredients, setNewDishIngredients] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.restaurantName === "string") setRestaurantName(parsed.restaurantName);
        if (typeof parsed.checkedBy === "string") setCheckedBy(parsed.checkedBy);
        if (typeof parsed.reviewDate === "string") setReviewDate(parsed.reviewDate);
        if (Array.isArray(parsed.menuItems) && parsed.menuItems.length > 0) {
          setMenuItems(parsed.menuItems);
        }
      }
    } catch (err) {
      console.warn("Failed to read allergen matrix from localStorage", err);
    }
  }, []);

  // Save edits to localStorage
  useEffect(() => {
    try {
      const payload = {
        restaurantName,
        checkedBy,
        reviewDate,
        menuItems
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      console.warn("Failed to save allergen matrix to localStorage", err);
    }
  }, [restaurantName, checkedBy, reviewDate, menuItems]);

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
        ingredients: "Add ingredient breakdown...",
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
    const confirmed = window.confirm(
      "Reset all dishes, ingredients, and allergen markings back to the example data? Any custom edits will be cleared."
    );
    if (!confirmed) return;

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn("Failed to clear localStorage", err);
    }

    setRestaurantName("");
    setCheckedBy("");
    setReviewDate("");
    setMenuItems(DEFAULT_MENU_ITEMS);
    setSearchQuery("");
    setSelectedCategory("all");
    setAllergenFilter("all");
  };

  // Filtered menu: hides dishes containing allergen if marked YES or MAY
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesIngr = item.ingredients.toLowerCase().includes(q);
        if (!matchesName && !matchesIngr) return false;
      }
      if (allergenFilter !== "all") {
        const status = item.allergens[allergenFilter];
        // Hide dishes marked YES (contains) or MAY (may contain cross-contact)
        if (status === "contains" || status === "may") return false;
      }
      return true;
    });
  }, [menuItems, selectedCategory, searchQuery, allergenFilter]);

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
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            Covers the 14 UK/EU allergens
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
            14 Allergen Chart for Kitchens
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
            Record which of the 14 allergens each dish contains, then print or save as PDF.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 no-print">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-3 py-2 rounded-xl">
            <Edit3 className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <span>Editable dishes &amp; allergens</span>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
            title="Reset to example dishes"
            aria-label="Reset chart to default example dishes"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
            aria-label="Print or save allergen chart as PDF"
          >
            <Printer className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span>Print Allergen Chart</span>
          </button>
        </div>
      </div>

      {/* ── ESTABLISHMENT DETAILS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs">
        <div>
          <label htmlFor="allergen-business-name" className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
            Business name
          </label>
          <input
            id="allergen-business-name"
            type="text"
            placeholder="Your business name"
            value={restaurantName}
            onChange={e => setRestaurantName(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 rounded-lg px-3 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none print:hidden shadow-2xs"
          />
          {restaurantName ? (
            <div className="hidden print:block font-bold text-xs text-gray-950">{restaurantName}</div>
          ) : (
            <div className="hidden print:block text-xs text-gray-400 italic">Business name not set</div>
          )}
        </div>

        <div>
          <label htmlFor="allergen-checked-by" className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
            Checked by
          </label>
          <input
            id="allergen-checked-by"
            type="text"
            placeholder="Name of person checking"
            value={checkedBy}
            onChange={e => setCheckedBy(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 rounded-lg px-3 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none print:hidden shadow-2xs"
          />
          {checkedBy ? (
            <div className="hidden print:block font-bold text-xs text-gray-950">Checked by: {checkedBy}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="allergen-review-date" className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
            Review date
          </label>
          <input
            id="allergen-review-date"
            type="date"
            value={reviewDate}
            onChange={e => setReviewDate(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 rounded-lg px-3 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none print:hidden shadow-2xs"
          />
          {reviewDate ? (
            <div className="hidden print:block font-bold text-xs text-gray-950">Review date: {reviewDate}</div>
          ) : null}
        </div>
      </div>

      {/* ── FILTER & SEARCH CONTROLS (NO-PRINT) ── */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between no-print">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-56">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              aria-label="Search dishes or ingredients"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            aria-label="Filter dishes by category"
            className="bg-gray-50 border border-gray-300 rounded-xl px-3 py-1.5 text-xs text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c === "all" ? "All categories" : c}</option>
            ))}
          </select>

          <select
            value={allergenFilter}
            onChange={e => setAllergenFilter(e.target.value)}
            aria-label="Filter dishes by allergen"
            className="bg-gray-50 border border-gray-300 rounded-xl px-3 py-1.5 text-xs text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          >
            <option value="all">No allergen filter</option>
            {ALLERGENS.map(a => (
              <option key={a.id} value={a.id}>Hide dishes containing: {a.name}</option>
            ))}
          </select>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono">
          <span className="flex items-center gap-1 font-bold text-red-700">
            <span className="w-3 h-3 rounded bg-red-500 inline-block" aria-hidden="true" /> YES = Contains
          </span>
          <span className="flex items-center gap-1 font-bold text-amber-700">
            <span className="w-3 h-3 rounded bg-amber-400 inline-block" aria-hidden="true" /> MAY = May contain (cross-contact)
          </span>
          <span
            className="flex items-center gap-1 text-gray-600 cursor-help"
            title="Not declared does not mean the dish has none. Always check with staff."
          >
            <span className="w-3 h-3 rounded bg-gray-200 inline-block" aria-hidden="true" /> — = Not declared
            <span
              className="text-[10px] text-gray-400 underline decoration-dotted ml-0.5"
              title="Not declared does not mean the dish has none. Always check with staff."
            >
              (info)
            </span>
          </span>
        </div>
      </div>

      {/* ── 14-ALLERGEN INTERACTIVE TABLE ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-bold text-gray-700 uppercase font-mono tracking-wider">
            Example dishes (replace with your own)
          </div>
          <div className="text-[11px] text-gray-500 italic no-print">
            Click any cell to cycle: Contains (YES) &rarr; May contain (MAY) &rarr; Not declared (—)
          </div>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white print:border-none print:overflow-visible">
          <table className="w-full text-left text-xs" aria-label="14 Allergen Matrix Table">
            <thead className="bg-[#1D1D1F] text-white uppercase font-mono text-[9px] tracking-wider">
              <tr>
                <th scope="col" className="p-3 border-b" style={{ width: "32%", minWidth: "270px" }}>
                  <div>Dish / Recipe Name &amp; Ingredients</div>
                  <div className="text-[9px] font-normal text-gray-400 normal-case mt-0.5">
                    Example dishes (replace with your own)
                  </div>
                </th>
                {ALLERGENS.map(a => (
                  <th
                    key={a.id}
                    scope="col"
                    className="p-2 border-b text-center whitespace-nowrap"
                    style={{ width: "4.8%" }}
                    aria-label={a.name}
                    title={a.name}
                  >
                    <div aria-hidden="true" className="text-sm select-none">{a.icon}</div>
                    <div className="mt-0.5 text-[8px] opacity-80 uppercase tracking-tighter">
                      <span className="hidden xl:inline">{a.name}</span>
                      <span className="xl:hidden">{a.short}</span>
                    </div>
                  </th>
                ))}
                <th scope="col" className="p-2 border-b text-right no-print" style={{ width: "2%" }}>
                  <span className="sr-only">Actions</span>
                </th>
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
                      aria-label="Dish or recipe name"
                      className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 rounded-lg px-3 py-2 font-bold text-xs text-gray-900 focus:outline-none print:hidden shadow-2xs"
                    />
                    <div className="hidden print:block font-bold text-[9pt] text-gray-950 leading-tight">
                      {item.name}
                    </div>

                    <textarea
                      rows={3}
                      value={item.ingredients}
                      placeholder="Full ingredient breakdown..."
                      aria-label={`Ingredient breakdown for ${item.name || 'dish'}`}
                      onChange={e => {
                        const val = e.target.value;
                        setMenuItems(prev => prev.map(m => m.id === item.id ? { ...m, ingredients: val } : m));
                      }}
                      className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900 rounded-lg p-2.5 text-xs text-gray-800 focus:outline-none print:hidden shadow-2xs mt-1.5 resize-y leading-relaxed min-h-[76px]"
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
                    const statusLabel =
                      status === "contains"
                        ? "Contains"
                        : status === "may"
                        ? "May contain"
                        : "Not declared";

                    return (
                      <td key={a.id} className="p-1 text-center align-middle">
                        <button
                          type="button"
                          onClick={() => toggleAllergen(item.id, a.id)}
                          aria-label={`${item.name || "Dish"}: ${a.name} is ${statusLabel}. Click to cycle status.`}
                          className={`w-7 h-7 rounded-lg text-[9px] font-extrabold font-mono transition-transform active:scale-90 cursor-pointer print:hidden focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 ${
                            status === "contains"
                              ? "bg-red-500 text-white shadow-xs"
                              : status === "may"
                              ? "bg-amber-400 text-gray-950 shadow-xs"
                              : "bg-gray-100 text-gray-400 hover:text-gray-700 hover:bg-gray-200"
                          }`}
                          title={
                            status === "none"
                              ? `${a.name}: Not declared does not mean the dish has none. Always check with staff.`
                              : `${a.name}: ${statusLabel} (Click to toggle)`
                          }
                        >
                          <span className="sr-only">{statusLabel}</span>
                          <span aria-hidden="true">
                            {status === "contains" ? "YES" : status === "may" ? "MAY" : "—"}
                          </span>
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
                            <span
                              className="text-gray-300"
                              title="Not declared does not mean the dish has none. Always check with staff."
                            >
                              —
                            </span>
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
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 ${
                        menuItems.length <= 1
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-400 hover:text-red-500 hover:bg-red-50"
                      }`}
                      aria-label={`Remove dish ${item.name || ''}`}
                      title="Remove dish"
                    >
                      <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            className="text-xs font-bold text-slate-800 hover:text-black cursor-pointer flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-slate-900 rounded"
          >
            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Quick Add Blank Row</span>
          </button>
        </div>

        <form onSubmit={handleAddDish} className="flex flex-col sm:flex-row gap-2 items-center p-3 bg-gray-50 rounded-2xl border border-gray-200">
          <input
            type="text"
            placeholder="Dish name (e.g. Garlic Naan)..."
            aria-label="New dish name"
            value={newDishName}
            onChange={e => setNewDishName(e.target.value)}
            className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          />
          <input
            type="text"
            placeholder="Category (e.g. Breads)..."
            aria-label="New dish category"
            value={newDishCategory}
            onChange={e => setNewDishCategory(e.target.value)}
            className="w-full sm:w-36 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          />
          <input
            type="text"
            placeholder="All ingredients (e.g. Wheat flour, yogurt, ghee, garlic)..."
            aria-label="New dish ingredients"
            value={newDishIngredients}
            onChange={e => setNewDishIngredients(e.target.value)}
            className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer shrink-0 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
          >
            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
            <span>+ Add Dish</span>
          </button>
        </form>
      </div>

      {/* ── DISCLAIMER FOOTER NOTE ── */}
      <div className="pt-4 border-t border-gray-200 text-xs text-gray-600 leading-relaxed font-sans">
        <p>
          This chart helps you record allergen information. You are responsible for checking every recipe and supplier specification. It is not legal advice and has not been approved by the Food Standards Agency.
        </p>
      </div>
    </div>
  );
};
