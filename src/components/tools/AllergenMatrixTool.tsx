"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Plus, Trash2, Printer, ShieldCheck, Search, RotateCcw, Edit3, FileSpreadsheet, Sparkles, ArrowRight, Layers } from "lucide-react";
import { ALLERGENS, MenuItem, AllergenStatus } from "../ToolsPage";

const STORAGE_KEY = "saim_allergen_matrix_v2";

// ── REGULATORY 14 ALLERGEN KEYWORD DETECTOR ──
export const detectAllergensFromIngredients = (ingredientsText: string): Record<string, AllergenStatus> => {
  if (!ingredientsText) return {};
  const text = ingredientsText.toLowerCase();
  const detected: Record<string, AllergenStatus> = {};

  const rules: { id: string; regex: RegExp }[] = [
    { id: "celery", regex: /\b(celery|celeriac|celery\s*salt|celery\s*seed)\b/i },
    { id: "gluten", regex: /\b(wheat|barley|rye|oat|oats|spelt|kamut|gluten|flour|semolina|breadcrumbs|pasta|batter|malt|noodle|noodles|couscous|brioche|croissant|bagel|panko|bread)\b/i },
    { id: "crustaceans", regex: /\b(prawn|prawns|crab|lobster|crayfish|shrimp|shrimps|scampi|langoustine|crustacean)\b/i },
    { id: "eggs", regex: /\b(egg|eggs|mayo|mayonnaise|albumin|meringue|custard|hollandaise|brioche|omelette|yolk|egg\s*white)\b/i },
    { id: "fish", regex: /\b(fish|salmon|tuna|cod|haddock|anchov|anchovies|bass|trout|plaice|halibut|pollock|fish\s*sauce|worcestershire)\b/i },
    { id: "lupin", regex: /\b(lupin|lupine|lupin\s*flour)\b/i },
    { id: "milk", regex: /\b(milk|cheese|butter|cream|whey|casein|yogurt|yoghurt|lactose|ghee|mozzarella|cheddar|parmesan|paneer|custard|buttermilk|dairy)\b/i },
    { id: "molluscs", regex: /\b(mussel|mussels|oyster|oysters|squid|calamari|clam|clams|snail|snails|scallop|scallops|octopus|cockle|whelk)\b/i },
    { id: "mustard", regex: /\b(mustard|dijon|wholegrain\s*mustard|mustard\s*seed|mustard\s*flour|english\s*mustard)\b/i },
    { id: "nuts", regex: /\b(almond|almonds|hazelnut|hazelnuts|walnut|walnuts|cashew|cashews|pecan|pecans|brazil\s*nut|pistachio|pistachios|macadamia|chestnut|praline|marzipan|frangipane)\b/i },
    { id: "peanuts", regex: /\b(peanut|peanuts|groundnut|groundnuts|monkey\s*nut|peanut\s*butter|satay|arachis)\b/i },
    { id: "sesame", regex: /\b(sesame|sesame\s*seeds?|tahini|hummus|halva|sesame\s*oil)\b/i },
    { id: "soya", regex: /\b(soya|soy|tofu|edamame|soy\s*sauce|soya\s*lecithin|tamari|miso|tempeh|soybean)\b/i },
    { id: "sulphites", regex: /\b(sulphite|sulphites|sulfite|sulfites|sulphur\s*dioxide|wine|cider|beer|balsamic|vinegar|preservative)\b/i }
  ];

  rules.forEach(rule => {
    if (rule.regex.test(text)) {
      detected[rule.id] = "contains";
    }
  });

  return detected;
};

// ── MENU PRESETS ──
const PRESET_BURGER_PIZZA: MenuItem[] = [
  {
    id: "bp-1",
    name: "Classic Cheeseburger",
    category: "Burgers",
    ingredients: "Beef patty, brioche bun, cheddar cheese, burger sauce, lettuce, tomato",
    allergens: { gluten: "contains", milk: "contains", eggs: "contains", sesame: "contains", mustard: "contains", soya: "may" }
  },
  {
    id: "bp-2",
    name: "Margherita Pizza 12\"",
    category: "Pizzas",
    ingredients: "Hand-stretched wheat dough, San Marzano tomato sauce, 100% fior di latte mozzarella, basil",
    allergens: { gluten: "contains", milk: "contains" }
  },
  {
    id: "bp-3",
    name: "Crispy Hot Wings",
    category: "Chicken",
    ingredients: "Buttermilk marinated, seasoned wheat flour coated fried chicken wings, hot cayenne butter glaze, celery dip",
    allergens: { gluten: "contains", milk: "contains", celery: "contains", mustard: "contains", soya: "may" }
  },
  {
    id: "bp-4",
    name: "Loaded Truffle Fries",
    category: "Sides",
    ingredients: "Skin-on potato fries, black truffle oil, garlic aioli, parmesan cheese",
    allergens: { milk: "contains", eggs: "contains", mustard: "may" }
  },
  {
    id: "bp-5",
    name: "Crispy King Prawns",
    category: "Starters",
    ingredients: "Egg-washed panko crumbed king prawns, sweet chilli dip, fresh lime",
    allergens: { crustaceans: "contains", gluten: "contains", eggs: "contains", fish: "may", sesame: "may" }
  },
  {
    id: "bp-6",
    name: "Vegan Garden Salad",
    category: "Sides",
    ingredients: "Mixed baby leaf salad, cherry tomatoes, cucumber, balsamic vinaigrette (balsamic vinegar, olive oil, mustard)",
    allergens: { mustard: "contains", sulphites: "contains" }
  }
];

const PRESET_FISH_CHIPS: MenuItem[] = [
  {
    id: "fc-1",
    name: "Battered Atlantic Cod (Regular)",
    category: "Fish",
    ingredients: "Skinless Atlantic cod fillet, seasoned wheat flour beer batter, beef dripping or vegetable oil",
    allergens: { fish: "contains", gluten: "contains" }
  },
  {
    id: "fc-2",
    name: "Breaded Wholetail Scampi (10pc)",
    category: "Seafood",
    ingredients: "Wholetail Scottish scampi (langoustine tails), crispy wheat crumb coating",
    allergens: { crustaceans: "contains", gluten: "contains", molluscs: "may" }
  },
  {
    id: "fc-3",
    name: "Chunky British Chips (Portion)",
    category: "Chips & Sides",
    ingredients: "100% British Maris Piper potatoes, pure sunflower or rapeseed oil, table salt",
    allergens: {}
  },
  {
    id: "fc-4",
    name: "Traditional Mushy Peas",
    category: "Chips & Sides",
    ingredients: "Steeped processed marrowfat peas, water, sugar, salt",
    allergens: {}
  },
  {
    id: "fc-5",
    name: "Chip Shop Chinese Curry Sauce",
    category: "Sauces",
    ingredients: "Water, wheat flour, vegetable oil, curry powder (coriander, turmeric, mustard, celery seed), onion powder",
    allergens: { gluten: "contains", mustard: "contains", celery: "contains" }
  },
  {
    id: "fc-6",
    name: "Creamy Tartar Sauce Dip",
    category: "Sauces",
    ingredients: "Rapeseed oil, water, capers, gherkins, pasteurised egg yolk, spirit vinegar, mustard flour",
    allergens: { eggs: "contains", mustard: "contains", sulphites: "contains" }
  }
];

const PRESET_INDIAN_CURRY: MenuItem[] = [
  {
    id: "ic-1",
    name: "Chicken Tikka Masala",
    category: "Main Curries",
    ingredients: "Tandoori chicken breast, tomato onion masala, double cream, butter, ground almond powder, fenugreek",
    allergens: { milk: "contains", nuts: "contains" }
  },
  {
    id: "ic-2",
    name: "Slow-Cooked Lamb Rogan Josh",
    category: "Main Curries",
    ingredients: "Diced tender lamb shoulder, Kashmiri chilli, tomato purée, ginger, garlic, garam masala, mustard oil",
    allergens: { mustard: "contains" }
  },
  {
    id: "ic-3",
    name: "Crispy Onion Bhaji (3pc)",
    category: "Starters",
    ingredients: "Sliced Spanish onions, gram (chickpea) flour, carom seeds, turmeric, cumin, vegetable oil",
    allergens: {}
  },
  {
    id: "ic-4",
    name: "Garlic & Coriander Naan",
    category: "Breads",
    ingredients: "Wheat flour dough, pasteurised whole milk, egg, butter ghee, minced fresh garlic, coriander",
    allergens: { gluten: "contains", milk: "contains", eggs: "contains" }
  },
  {
    id: "ic-5",
    name: "Crispy Vegetable Samosas (2pc)",
    category: "Starters",
    ingredients: "Spiced potatoes and green peas wrapped in crisp wheat pastry, cumin, mustard seeds",
    allergens: { gluten: "contains", mustard: "may" }
  },
  {
    id: "ic-6",
    name: "Cucumber & Mint Raita",
    category: "Sides & Dips",
    ingredients: "Set natural cow's milk yoghurt, grated fresh cucumber, roasted cumin powder, fresh mint",
    allergens: { milk: "contains" }
  }
];

const PRESET_CAFE_BAKERY: MenuItem[] = [
  {
    id: "cb-1",
    name: "Ham & Mature Cheddar Croissant",
    category: "Bakery",
    ingredients: "All-butter laminated wheat croissant, cooked cured ham, mature British cheddar cheese, egg wash",
    allergens: { gluten: "contains", milk: "contains", eggs: "contains" }
  },
  {
    id: "cb-2",
    name: "Smoked Salmon & Cream Cheese Bagel",
    category: "Sandwiches",
    ingredients: "Toasted seeded wheat bagel (sesame), oak-smoked Atlantic salmon, full-fat soft cheese, dill",
    allergens: { gluten: "contains", fish: "contains", milk: "contains", sesame: "contains" }
  },
  {
    id: "cb-3",
    name: "Triple Chocolate Brownie",
    category: "Sweet Treats",
    ingredients: "Dark Belgian chocolate, butter, sugar, free-range eggs, wheat flour, cocoa powder, soya lecithin",
    allergens: { gluten: "contains", milk: "contains", eggs: "contains", soya: "contains", nuts: "may" }
  },
  {
    id: "cb-4",
    name: "Barista Oat Flat White (Coffee)",
    category: "Hot Drinks",
    ingredients: "Espresso coffee shots, steam-foamed gluten-containing oat milk base (water, oats, rapeseed oil)",
    allergens: { gluten: "contains" }
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

  const [menuItems, setMenuItems] = useState<MenuItem[]>(PRESET_BURGER_PIZZA);

  const [newDishName, setNewDishName] = useState("");
  const [newDishCategory, setNewDishCategory] = useState("Burgers");
  const [newDishIngredients, setNewDishIngredients] = useState("");
  const [detectedSummary, setDetectedSummary] = useState<string[]>([]);

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

  const exportToCsv = () => {
    const headers = [
      "Dish Name",
      "Category",
      "Ingredients",
      ...ALLERGENS.map(a => a.name)
    ];

    const rows: (string | number)[][] = [
      ["Business Name:", restaurantName || "Commercial Kitchen", "Reviewed By:", checkedBy || "Kitchen Manager", "Date:", reviewDate || "Unspecified Date"],
      [],
      headers,
      ...menuItems.map(dish => [
        dish.name,
        dish.category,
        dish.ingredients,
        ...ALLERGENS.map(a => {
          const status = dish.allergens[a.id];
          if (status === "contains") return "YES (Contains)";
          if (status === "may") return "MAY (Cross-Contact)";
          return "NO";
        })
      ])
    ];

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${(restaurantName || "kitchen").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-14-allergen-matrix.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categories = useMemo(() => {
    const set = new Set<string>();
    menuItems.forEach(item => {
      if (item.category) set.add(item.category);
    });
    return ["all", ...Array.from(set)];
  }, [menuItems]);

  const toggleAllergen = (dishId: string, allergenId: string) => {
    setMenuItems(prev =>
      prev.map(dish => {
        if (dish.id !== dishId) return dish;
        const current = dish.allergens[allergenId] || "none";
        let next: AllergenStatus = "contains";
        if (current === "contains") next = "may";
        else if (current === "may") next = "none";
        else next = "contains";

        const updatedAllergens = { ...dish.allergens };
        if (next === "none") {
          delete updatedAllergens[allergenId];
        } else {
          updatedAllergens[allergenId] = next;
        }

        return { ...dish, allergens: updatedAllergens };
      })
    );
  };

  const handleSmartDetectNewDish = () => {
    if (!newDishIngredients.trim()) return;
    const detected = detectAllergensFromIngredients(newDishIngredients);
    const names = Object.keys(detected).map(id => {
      const match = ALLERGENS.find(a => a.id === id);
      return match ? match.name : id;
    });
    setDetectedSummary(names);
  };

  const handleAddDish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDishName.trim()) return;
    const newId = `dish-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    
    // Auto detect from ingredients if provided
    const autoDetected = detectAllergensFromIngredients(newDishIngredients);

    setMenuItems(prev => [
      ...prev,
      {
        id: newId,
        name: newDishName.trim(),
        category: newDishCategory.trim() || "Mains",
        ingredients: newDishIngredients.trim(),
        allergens: autoDetected
      }
    ]);
    setNewDishName("");
    setNewDishIngredients("");
    setDetectedSummary([]);
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

  const handleLoadPreset = (preset: MenuItem[]) => {
    setMenuItems(preset);
    setSelectedCategory("all");
    setSearchQuery("");
    setAllergenFilter("all");
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "Reset all dishes, ingredients, and allergen markings back to default? Any custom edits will be cleared."
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
    setMenuItems(PRESET_BURGER_PIZZA);
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
            Commercial Kitchen 14 Allergen Chart
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
            Record, filter, and print mandatory food allergen disclosures for UK restaurants, takeaways, and caterers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 no-print">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-3 py-2 rounded-xl">
            <Edit3 className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
            <span>Interactive Disclosures</span>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
            title="Reset to default dishes"
            aria-label="Reset chart to default example dishes"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset</span>
          </button>

          <button
            type="button"
            onClick={exportToCsv}
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow cursor-pointer hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-1"
            title="Download editable CSV matrix for Excel or Google Sheets"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-200" aria-hidden="true" />
            <span>Excel / CSV</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
            aria-label="Print or save allergen chart as PDF"
          >
            <Printer className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span>Print Chart</span>
          </button>
        </div>
      </div>

      {/* ── 1-CLICK TAKEAWAY MENU PRESETS BAR ── */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-700" />
            <span className="text-xs font-bold text-slate-900">
              Instant UK Cuisine Templates (Pre-filled):
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono">1-click populate dishes &amp; ingredients</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => handleLoadPreset(PRESET_BURGER_PIZZA)}
            className="px-3 py-1.5 rounded-xl font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs transition-all cursor-pointer"
          >
            🍔 Burgers &amp; Pizzas
          </button>
          <button
            type="button"
            onClick={() => handleLoadPreset(PRESET_FISH_CHIPS)}
            className="px-3 py-1.5 rounded-xl font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs transition-all cursor-pointer"
          >
            🐟 Fish &amp; Chips Shop
          </button>
          <button
            type="button"
            onClick={() => handleLoadPreset(PRESET_INDIAN_CURRY)}
            className="px-3 py-1.5 rounded-xl font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs transition-all cursor-pointer"
          >
            🍛 Indian &amp; Curry House
          </button>
          <button
            type="button"
            onClick={() => handleLoadPreset(PRESET_CAFE_BAKERY)}
            className="px-3 py-1.5 rounded-xl font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs transition-all cursor-pointer"
          >
            ☕ Bakery &amp; Café
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
          </span>
        </div>
      </div>

      {/* ── 14-ALLERGEN INTERACTIVE TABLE ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-bold text-gray-700 uppercase font-mono tracking-wider">
            Dishes &amp; Statutory Allergen Declarations ({filteredItems.length} items)
          </div>
          <div className="text-[11px] text-gray-500 font-mono no-print">
            Click table cells to cycle: <strong>YES</strong> &rarr; <strong>MAY</strong> &rarr; <strong>&mdash;</strong>
          </div>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white print:border-none print:overflow-visible">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono text-[9px] uppercase tracking-wider">
                <th className="p-2.5 border-b border-gray-700 min-w-[200px]" style={{ width: "24%" }}>
                  Dish / Recipe &amp; Ingredients
                </th>
                {ALLERGENS.map(a => (
                  <th
                    key={a.id}
                    className="p-1 border-b border-gray-700 text-center text-[8px] font-bold uppercase tracking-tight"
                    style={{ width: "5%" }}
                    title={a.name}
                  >
                    <span className="block truncate max-w-[50px] mx-auto">{a.name.split(" ")[0]}</span>
                  </th>
                ))}
                <th className="p-2 border-b border-gray-700 text-right no-print w-10">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredItems.map(item => (
                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-2.5 align-top">
                    <input
                      type="text"
                      placeholder="Dish name"
                      aria-label="Dish name"
                      value={item.name}
                      onChange={e => {
                        const val = e.target.value;
                        setMenuItems(prev => prev.map(m => m.id === item.id ? { ...m, name: val } : m));
                      }}
                      className="font-bold text-xs text-gray-900 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-slate-900 focus:outline-none w-full print:hidden"
                    />
                    <div className="hidden print:block font-bold text-xs text-gray-950">
                      {item.name || "Untitled dish"}
                    </div>

                    <textarea
                      placeholder="Key ingredients list..."
                      aria-label={`Key ingredients for ${item.name || 'dish'}`}
                      value={item.ingredients}
                      rows={2}
                      onChange={e => {
                        const val = e.target.value;
                        setMenuItems(prev => prev.map(m => m.id === item.id ? { ...m, ingredients: val } : m));
                      }}
                      className="text-[10px] text-gray-500 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-slate-900 focus:outline-none w-full mt-0.5 resize-none print:hidden"
                    />
                    <div className="hidden print:block text-[7.5pt] text-gray-600 leading-tight">
                      {item.ingredients}
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-block px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[9px] font-mono text-gray-600 print:text-[7.5pt] print:border-gray-300">
                        {item.category}
                      </span>
                      
                      {/* Row Auto-Detect Button */}
                      <button
                        type="button"
                        onClick={() => {
                          const detected = detectAllergensFromIngredients(item.ingredients);
                          setMenuItems(prev => prev.map(m => m.id === item.id ? { ...m, allergens: { ...m.allergens, ...detected } } : m));
                        }}
                        className="no-print inline-flex items-center gap-1 text-[9px] text-amber-700 hover:text-amber-900 font-bold bg-amber-50 hover:bg-amber-100 border border-amber-200 px-1.5 py-0.5 rounded cursor-pointer"
                        title="Auto-detect allergens from this ingredients list"
                      >
                        <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                        <span>Auto-Scan</span>
                      </button>
                    </div>
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
                              ? `${a.name}: Not declared. Check with staff.`
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

      {/* ── ADD NEW DISH & INGREDIENTS FORM WITH SMART SCANNER ── */}
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

        <form onSubmit={handleAddDish} className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
          <div className="flex flex-col sm:flex-row gap-2 items-center">
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
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <input
              type="text"
              placeholder="Full ingredients list (e.g. Wheat flour, yogurt, butter ghee, garlic)..."
              aria-label="New dish ingredients"
              value={newDishIngredients}
              onChange={e => {
                setNewDishIngredients(e.target.value);
                if (e.target.value.length > 5) {
                  const detected = detectAllergensFromIngredients(e.target.value);
                  const names = Object.keys(detected).map(id => {
                    const match = ALLERGENS.find(a => a.id === id);
                    return match ? match.name : id;
                  });
                  setDetectedSummary(names);
                } else {
                  setDetectedSummary([]);
                }
              }}
              className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
            />

            <button
              type="button"
              onClick={handleSmartDetectNewDish}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer shrink-0"
              title="Test scan ingredients for 14 allergens"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scan 14 Allergens</span>
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer shrink-0 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
            >
              <Plus className="w-3.5 h-3.5" aria-hidden="true" />
              <span>+ Add Dish to Matrix</span>
            </button>
          </div>

          {detectedSummary.length > 0 && (
            <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs flex items-center gap-2">
              <span className="font-bold text-amber-900">⚡ Auto-Detected:</span>
              <div className="flex flex-wrap gap-1.5">
                {detectedSummary.map(name => (
                  <span key={name} className="px-2 py-0.5 bg-amber-200 text-amber-900 font-bold rounded-md text-[10px]">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </form>
      </div>

      {/* ── HIGH-CONVERTING TAKEAWAY WEB DESIGN CALLOUT ── */}
      <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs no-print">
        <div className="space-y-1">
          <span className="font-bold text-amber-400 block text-sm">
            💡 Want live allergen filtering on your takeaway ordering website?
          </span>
          <p className="text-gray-300 text-xs leading-relaxed max-w-2xl">
            Saim Dev builds bespoke Next.js takeaway websites featuring instant interactive allergen filters, allowing customers to filter out gluten, dairy, nuts, or any of the 14 allergens with 1 click before ordering.
          </p>
        </div>

        <Link
          href="/takeaway-web-design"
          className="inline-flex items-center gap-1.5 font-bold text-xs bg-amber-400 hover:bg-amber-300 text-black px-4 py-2.5 rounded-xl transition-all shadow-xs shrink-0 self-start sm:self-auto"
        >
          <span>See Live Demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
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
