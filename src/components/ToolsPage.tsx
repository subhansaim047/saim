"use client";

import React, { useState, useEffect, useId } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  DollarSign,
  ChefHat,
  ClipboardCheck,
  Thermometer,
  Printer,
  Download,
  Plus,
  Trash2,
  Search,
  Filter,
  Check,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Copy,
  Info,
  Calendar,
  Building,
  User,
  Sliders,
  AlertCircle
} from "lucide-react";

// ── 14 OFFICIAL UK / EU REGULATED ALLERGENS ──
export interface AllergenDef {
  id: string;
  name: string;
  short: string;
  icon: string;
  description: string;
}

export const ALLERGENS: AllergenDef[] = [
  { id: "celery", name: "Celery", short: "CEL", icon: "🥬", description: "Stalks, leaves, seeds and celeriac in salads, soups, stocks." },
  { id: "gluten", name: "Cereals (Gluten)", short: "GLU", icon: "🌾", description: "Wheat, rye, barley, oats in dough, buns, batter, breadcrumbs." },
  { id: "crustaceans", name: "Crustaceans", short: "CRU", icon: "🦀", description: "Crabs, lobster, prawns, scampi, shrimp paste." },
  { id: "eggs", name: "Eggs", short: "EGG", icon: "🥚", description: "Cakes, mayonnaise, pasta, quiches, glazed breads." },
  { id: "fish", name: "Fish", short: "FSH", icon: "🐟", description: "Fish sauce, Worcestershire sauce, pizzas, dressings." },
  { id: "lupin", name: "Lupin", short: "LUP", icon: "🌱", description: "Lupin seeds & flour in specialty pastries, bread, pasta." },
  { id: "milk", name: "Milk", short: "MLK", icon: "🥛", description: "Butter, cheese, cream, milk powder, ghee, yogurt." },
  { id: "molluscs", name: "Molluscs", short: "MOL", icon: "🦪", description: "Mussels, oysters, squid, snail, oyster sauce." },
  { id: "mustard", name: "Mustard", short: "MUS", icon: "🟡", description: "Liquid mustard, mustard powder, seeds, marinades, curries." },
  { id: "nuts", name: "Tree Nuts", short: "NUT", icon: "🌰", description: "Almonds, walnuts, cashews, pecans, pistachios, praline." },
  { id: "peanuts", name: "Peanuts", short: "PNT", icon: "🥜", description: "Groundnuts in sauces, cakes, satay, peanut oil." },
  { id: "sesame", name: "Sesame", short: "SES", icon: "🥯", description: "Burger buns, tahini, hummus, toasted sesame oil." },
  { id: "soya", name: "Soya", short: "SOY", icon: "🫘", description: "Soy sauce, edamame, tofu, burger meat extenders." },
  { id: "sulphites", name: "Sulphites", short: "SUL", icon: "🍷", description: "Dried fruits, wine, beer, sausages, burger seasonings." }
];

// Allergen Status: 'none' | 'contains' | 'may'
export type AllergenStatus = "none" | "contains" | "may";

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  ingredients: string;
  allergens: Record<string, AllergenStatus>;
}

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
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
    id: "2",
    name: "Margherita Pizza 12\"",
    category: "Pizzas",
    ingredients: "Hand-stretched dough, San Marzano tomato sauce, 100% mozzarella, basil",
    allergens: {
      gluten: "contains",
      milk: "contains"
    }
  },
  {
    id: "3",
    name: "Crispy Hot Wings (6 pcs)",
    category: "Chicken",
    ingredients: "Chicken wings, seasoned flour coating, spicy cayenne glaze, celery stick",
    allergens: {
      gluten: "contains",
      celery: "contains",
      mustard: "contains",
      soya: "may"
    }
  },
  {
    id: "4",
    name: "Loaded Garlic Cheese Fries",
    category: "Sides",
    ingredients: "Skin-on potato fries, garlic butter drizzle, melted cheddar, mozzarella, spring onions",
    allergens: {
      milk: "contains",
      gluten: "may"
    }
  },
  {
    id: "5",
    name: "Double Chocolate Brownie",
    category: "Desserts",
    ingredients: "Dark Belgian chocolate, butter, eggs, flour, walnuts, vanilla cream",
    allergens: {
      gluten: "contains",
      eggs: "contains",
      milk: "contains",
      nuts: "contains",
      soya: "contains",
      peanuts: "may"
    }
  },
  {
    id: "6",
    name: "Creamy Garlic Mayo Dip",
    category: "Sauces",
    ingredients: "Rapeseed oil, egg yolks, roasted garlic puree, lemon juice, mustard flour",
    allergens: {
      eggs: "contains",
      mustard: "contains"
    }
  }
];

export const ToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"allergen" | "cost" | "recipe" | "checklist" | "temp">("allergen");

  // ──────────────────────────────────────────────
  // TAB 1: ALLERGEN MATRIX STATE
  // ──────────────────────────────────────────────
  const [restaurantName, setRestaurantName] = useState("My Takeaway & Kitchen");
  const [completedBy, setCompletedBy] = useState("Head Chef / Manager");
  const [reviewDate, setReviewDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(DEFAULT_MENU_ITEMS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allergenFilter, setAllergenFilter] = useState("all");
  const [copyFeedback, setCopyFeedback] = useState(false);

  // New item draft state
  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Burgers");
  const [newItemIngredients, setNewItemIngredients] = useState("");

  // Categories
  const categories = ["All", ...Array.from(new Set(menuItems.map(m => m.category)))];

  // Cycle cell state: none -> contains -> may -> none
  const toggleAllergen = (itemId: string, allergenId: string) => {
    setMenuItems(prev =>
      prev.map(item => {
        if (item.id !== itemId) return item;
        const current = item.allergens[allergenId] || "none";
        const next: AllergenStatus = current === "none" ? "contains" : current === "contains" ? "may" : "none";
        return {
          ...item,
          allergens: { ...item.allergens, [allergenId]: next }
        };
      })
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    const item: MenuItem = {
      id: Date.now().toString(),
      name: newItemName.trim(),
      category: newItemCategory.trim() || "Mains",
      ingredients: newItemIngredients.trim(),
      allergens: {}
    };
    setMenuItems(prev => [...prev, item]);
    setNewItemName("");
    setNewItemIngredients("");
  };

  const handleDeleteItem = (id: string) => {
    setMenuItems(prev => prev.filter(m => m.id !== id));
  };

  const handleResetSample = () => {
    if (confirm("Reset to default takeaway sample items?")) {
      setMenuItems(DEFAULT_MENU_ITEMS);
    }
  };

  // Filtered Items
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ingredients.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;

    if (!matchesSearch || !matchesCat) return false;

    // Filter by safe from specific allergen
    if (allergenFilter !== "all") {
      const status = item.allergens[allergenFilter] || "none";
      if (status !== "none") return false; // hide if it contains or may contain
    }

    return true;
  });

  // Export CSV
  const exportCsv = () => {
    const headers = ["Category", "Dish Name", "Ingredients", ...ALLERGENS.map(a => a.name)];
    const rows = menuItems.map(item => {
      const row = [
        `"${item.category}"`,
        `"${item.name}"`,
        `"${item.ingredients.replace(/"/g, '""')}"`,
        ...ALLERGENS.map(a => {
          const st = item.allergens[a.id];
          return st === "contains" ? "CONTAINS" : st === "may" ? "MAY CONTAIN" : "FREE";
        })
      ];
      return row.join(",");
    });
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${restaurantName.replace(/\s+/g, "_")}_Allergen_Matrix.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy WhatsApp/Text Summary
  const copySummary = () => {
    let text = `📋 ${restaurantName} - Allergen Declaration (FSA & Natasha's Law Compliant)\n`;
    text += `Last Updated: ${reviewDate} | Inspected By: ${completedBy}\n\n`;
    menuItems.forEach(item => {
      const contains = ALLERGENS.filter(a => item.allergens[a.id] === "contains").map(a => a.name);
      const may = ALLERGENS.filter(a => item.allergens[a.id] === "may").map(a => a.name);
      text += `• ${item.name} (${item.category}):\n`;
      if (contains.length > 0) text += `   ⚠️ Contains: ${contains.join(", ")}\n`;
      if (may.length > 0) text += `   ⚡ May contain: ${may.join(", ")}\n`;
      if (contains.length === 0 && may.length === 0) text += `   ✅ 14 Major Allergens Free\n`;
    });
    navigator.clipboard.writeText(text);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2500);
  };

  // ──────────────────────────────────────────────
  // TAB 2: FOOD COST CALCULATOR STATE
  // ──────────────────────────────────────────────
  interface IngredientRow {
    id: string;
    name: string;
    packQty: number; // e.g. 1000g
    packCost: number; // e.g. £5.00
    recipeQty: number; // e.g. 150g
    unit: string;
  }

  const [currencySymbol, setCurrencySymbol] = useState("£");
  const [recipeTitle, setRecipeTitle] = useState("Gourmet Double Smash Burger");
  const [servingsYield, setServingsYield] = useState(1);
  const [menuSellingPrice, setMenuSellingPrice] = useState(8.50);
  const [targetCostPercent, setTargetCostPercent] = useState(28);

  const [ingredients, setIngredients] = useState<IngredientRow[]>([
    { id: "1", name: "Prime Minced Chuck Beef", packQty: 1000, packCost: 7.20, recipeQty: 200, unit: "g" },
    { id: "2", name: "Toasted Brioche Bun", packQty: 4, packCost: 1.60, recipeQty: 1, unit: "pcs" },
    { id: "3", name: "American Cheddar Slices", packQty: 10, packCost: 2.20, recipeQty: 2, unit: "pcs" },
    { id: "4", name: "Signature Burger Sauce", packQty: 500, packCost: 3.50, recipeQty: 30, unit: "ml" },
    { id: "5", name: "Crisp Lettuce & Tomato", packQty: 1, packCost: 0.35, recipeQty: 1, unit: "portion" }
  ]);

  const addIngredient = () => {
    const newId = `ing-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setIngredients(prev => [
      ...prev,
      { id: newId, name: "New Ingredient", packQty: 1000, packCost: 5.0, recipeQty: 100, unit: "g" }
    ]);
  };

  const removeIngredient = (id: string) => {
    setIngredients(prev => prev.filter(ing => ing.id !== id));
  };

  const updateIngredient = (id: string, field: keyof IngredientRow, value: any) => {
    setIngredients(prev =>
      prev.map(ing => (ing.id === id ? { ...ing, [field]: value } : ing))
    );
  };

  // Math
  const totalBatchCost = ingredients.reduce((sum, ing) => {
    const unitPrice = ing.packQty > 0 ? ing.packCost / ing.packQty : 0;
    return sum + unitPrice * ing.recipeQty;
  }, 0);

  const portionCost = servingsYield > 0 ? totalBatchCost / servingsYield : 0;
  const foodCostPercent = menuSellingPrice > 0 ? (portionCost / menuSellingPrice) * 100 : 0;
  const grossProfitMargin = menuSellingPrice > 0 ? ((menuSellingPrice - portionCost) / menuSellingPrice) * 100 : 0;
  const profitPerItem = menuSellingPrice - portionCost;
  const recommendedSellingPrice = targetCostPercent > 0 ? portionCost / (targetCostPercent / 100) : 0;

  // ──────────────────────────────────────────────
  // TAB 3: RECIPE CARD & YIELD SCALER STATE
  // ──────────────────────────────────────────────
  const [scalerBaseServings, setScalerBaseServings] = useState(4);
  const [scalerTargetServings, setScalerTargetServings] = useState(20);
  const scaleRatio = scalerBaseServings > 0 ? scalerTargetServings / scalerBaseServings : 1;

  const [recipeName, setRecipeName] = useState("Chef's Secret Pizza Sauce");
  const [prepTime, setPrepTime] = useState("15 mins");
  const [cookTime, setCookTime] = useState("45 mins");
  const [recipeMethod, setRecipeMethod] = useState(
    "1. Heat extra virgin olive oil in a stainless steel stock pot over medium heat.\n2. Add crushed garlic and sauté for 60 seconds until fragrant (do not brown).\n3. Pour in crushed San Marzano plum tomatoes, oregano, sea salt, and basil.\n4. Simmer gently on low heat for 45 minutes until reduced and rich.\n5. Cool to below 8°C within 90 minutes. Label and store chilled at < 5°C."
  );

  const [scalableIngredients, setScalableIngredients] = useState([
    { id: "1", name: "San Marzano Canned Tomatoes", baseQty: 800, unit: "g" },
    { id: "2", name: "Fresh Garlic Cloves (Minced)", baseQty: 4, unit: "cloves" },
    { id: "3", name: "Extra Virgin Olive Oil", baseQty: 50, unit: "ml" },
    { id: "4", name: "Dried Mediterranean Oregano", baseQty: 5, unit: "g" },
    { id: "5", name: "Fresh Basil Leaves (Torn)", baseQty: 10, unit: "g" },
    { id: "6", name: "Sea Salt & Cracked Black Pepper", baseQty: 8, unit: "g" }
  ]);

  const addScalableIngredient = () => {
    const newId = `sc-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setScalableIngredients(prev => [
      ...prev,
      { id: newId, name: "New Ingredient", baseQty: 100, unit: "g" }
    ]);
  };

  // ──────────────────────────────────────────────
  // TAB 4: DAILY SFBB HYGIENE CHECKLIST STATE
  // ──────────────────────────────────────────────
  const [checklistDate, setChecklistDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [fridge1Temp, setFridge1Temp] = useState("3.2");
  const [fridge2Temp, setFridge2Temp] = useState("2.8");
  const [freezerTemp, setFreezerTemp] = useState("-19.5");
  const [hotHoldingTemp, setHotHoldingTemp] = useState("68.0");
  const [supervisorSig, setSupervisorSig] = useState("Signed on duty");

  const [openingChecks, setOpeningChecks] = useState([
    { id: "1", text: "Walk-in & display fridges operating safely at 5°C or lower", checked: true },
    { id: "2", text: "Freezers operating at -18°C or lower (all frozen solid)", checked: true },
    { id: "3", text: "Handwash sinks fully stocked with antibacterial soap & blue roll", checked: true },
    { id: "4", text: "Separate color-coded cutting boards & knives sanitized for raw meat vs ready-to-eat", checked: true },
    { id: "5", text: "Food prep surfaces & slicers wiped down with food-safe sanitiser (BS EN 1276 standard)", checked: true },
    { id: "6", text: "All staff in clean protective uniforms, hairnets, and fit for food handling duty", checked: true }
  ]);

  const [closingChecks, setClosingChecks] = useState([
    { id: "c1", text: "All hot held foods kept above 63°C throughout service", checked: true },
    { id: "c2", text: "Hot cooked items blast-chilled or cooled below 8°C within 90 minutes", checked: true },
    { id: "c3", text: "Raw meats stored strictly below cooked / ready-to-eat foods in walk-in", checked: true },
    { id: "c4", text: "All opened containers sealed, dated with prep date & 3-day use-by sticker", checked: true },
    { id: "c5", text: "Waste bins emptied, washed, and bin lids closed tightly (pest prevention)", checked: true },
    { id: "c6", text: "All kitchen appliances, gas burners, and deep fryers safely switched off", checked: true }
  ]);

  const toggleCheck = (id: string, isClosing: boolean) => {
    if (!isClosing) {
      setOpeningChecks(prev => prev.map(c => c.id === id ? { ...c, checked: !c.checked } : c));
    } else {
      setClosingChecks(prev => prev.map(c => c.id === id ? { ...c, checked: !c.checked } : c));
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] selection:bg-primary selection:text-black">
      {/* ── STYLES FOR CRISP INK-FRIENDLY A4/A3 PRINTING ── */}
      <style jsx global>{`
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          header, nav, .no-print, .tabs-bar, .lead-cta-banner, footer {
            display: none !important;
          }
          .printable-document {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
          }
          .printable-document table {
            border-collapse: collapse !important;
            width: 100% !important;
            color: #000000 !important;
          }
          .printable-document th, .printable-document td {
            border: 1px solid #333333 !important;
            padding: 4px 6px !important;
            color: #000000 !important;
            font-size: 10pt !important;
          }
          .printable-document th {
            background-color: #f2f2f2 !important;
          }
          .print-badge-c {
            background: #dc2626 !important;
            color: #ffffff !important;
            font-weight: bold !important;
            padding: 2px 4px !important;
            border-radius: 3px !important;
          }
          .print-badge-mc {
            background: #d97706 !important;
            color: #ffffff !important;
            font-weight: bold !important;
            padding: 2px 4px !important;
            border-radius: 3px !important;
          }
        }
      `}</style>

      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between no-print">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-primary transition-colors">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-white text-sm sm:text-base tracking-tight">Saim Dev</span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
            Free Hospitality Tools
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="text-xs text-white/70 hover:text-white transition-colors hidden sm:block"
          >
            Custom Takeaway Websites
          </Link>
          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20using%20your%20free%20takeaway%20tools%20and%20would%20like%20to%20discuss%20a%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:brightness-110 text-black text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-md"
          >
            <span>WhatsApp Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ── HERO HEADER ── */}
      <section className="relative px-4 sm:px-8 pt-10 pb-6 max-w-7xl mx-auto no-print">
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1 text-xs text-white/80">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono uppercase tracking-wider text-[11px]">100% Free Food Safety &amp; Kitchen Suite</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-emerald-400 font-semibold text-[11px]">UK &amp; EU Compliant</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Takeaway &amp; Restaurant <br />
            <span className="text-primary italic font-serif">Compliance &amp; Costing Tools</span>
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
            Everything your kitchen needs for <strong className="text-white">Natasha&apos;s Law</strong>, 
            Food Standards Agency (FSA) inspections, and accurate food margins. 
            <span className="text-primary"> 100% Free forever</span> — zero credit cards, zero paywalls.
          </p>

          {/* Quick value cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full mt-4">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-2.5 text-left">
              <ShieldAlert className="w-4 h-4 text-primary shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Natasha&apos;s Law</div>
                <div className="text-[10px] text-white/50">14 Major Allergens</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-2.5 text-left">
              <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Food Costing</div>
                <div className="text-[10px] text-white/50">Real-time Gross Margin</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-2.5 text-left">
              <ClipboardCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">SFBB Checklist</div>
                <div className="text-[10px] text-white/50">Daily EHO Audit Log</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-2.5 text-left">
              <Printer className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Print-Ready A4</div>
                <div className="text-[10px] text-white/50">Kitchen Posters</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TOOL TABS NAVIGATION ── */}
        <div className="mt-10 flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 scrollbar-none tabs-bar border-b border-white/10">
          <button
            onClick={() => setActiveTab("allergen")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              activeTab === "allergen"
                ? "bg-primary text-black shadow-lg"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>1. Allergen Matrix &amp; Chart</span>
          </button>

          <button
            onClick={() => setActiveTab("cost")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              activeTab === "cost"
                ? "bg-primary text-black shadow-lg"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>2. Food Cost &amp; Margin</span>
          </button>

          <button
            onClick={() => setActiveTab("recipe")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              activeTab === "recipe"
                ? "bg-primary text-black shadow-lg"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <ChefHat className="w-4 h-4" />
            <span>3. Recipe Card &amp; Scaler</span>
          </button>

          <button
            onClick={() => setActiveTab("checklist")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              activeTab === "checklist"
                ? "bg-primary text-black shadow-lg"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <ClipboardCheck className="w-4 h-4" />
            <span>4. Daily SFBB Hygiene Log</span>
          </button>

          <button
            onClick={() => setActiveTab("temp")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
              activeTab === "temp"
                ? "bg-primary text-black shadow-lg"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Thermometer className="w-4 h-4" />
            <span>5. Cooking &amp; Chilling Temps</span>
          </button>
        </div>
      </section>

      {/* ── TOOL BODY CONTENT ── */}
      <main className="max-w-7xl mx-auto px-3 sm:px-8 pb-20">

        {/* ═══════════════════════════════════════════════════════════════
            TAB 1: INTERACTIVE ALLERGEN MATRIX & CHART (STAR TOOL)
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "allergen" && (
          <div className="space-y-6">
            {/* Top Toolbar / Configuration */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0f0f11] border border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 no-print shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                <div className="flex flex-col gap-1">
                  <label htmlFor="tools-rest-name" className="text-[11px] font-mono text-white/50 uppercase flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-primary" />
                    <span>Restaurant / Business Name</span>
                  </label>
                  <input
                    id="tools-rest-name"
                    type="text"
                    value={restaurantName}
                    onChange={e => setRestaurantName(e.target.value)}
                    className="bg-black/60 border border-white/15 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-white focus:outline-none focus:border-primary"
                    placeholder="e.g. O'Resto Takeaway"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="tools-comp-by" className="text-[11px] font-mono text-white/50 uppercase flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span>Completed / Verified By</span>
                  </label>
                  <input
                    id="tools-comp-by"
                    type="text"
                    value={completedBy}
                    onChange={e => setCompletedBy(e.target.value)}
                    className="bg-black/60 border border-white/15 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-white focus:outline-none focus:border-primary"
                    placeholder="e.g. Head Chef / Manager"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="tools-rev-date" className="text-[11px] font-mono text-white/50 uppercase flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>Audit / Review Date</span>
                  </label>
                  <input
                    id="tools-rev-date"
                    type="date"
                    value={reviewDate}
                    onChange={e => setReviewDate(e.target.value)}
                    className="bg-black/60 border border-white/15 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-white/10 shrink-0">
                <button
                  onClick={() => window.print()}
                  className="bg-white hover:bg-white/90 text-black text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-black" />
                  <span>Print A4 Poster</span>
                </button>

                <button
                  onClick={exportCsv}
                  className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all border border-white/15 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>

                <button
                  onClick={copySummary}
                  className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all border border-white/15 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copyFeedback ? "Copied!" : "Copy Text"}</span>
                </button>

                <button
                  onClick={handleResetSample}
                  title="Reset to default items"
                  className="p-2 text-white/40 hover:text-white transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Filter and Legend Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs no-print">
              {/* Search & Category */}
              <div className="flex items-center gap-2 flex-wrap flex-1">
                <div className="relative min-w-[180px]">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search dish or ingredients..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full bg-[#121215] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-primary"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="bg-[#121215] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none cursor-pointer"
                >
                  {categories.map(c => (
                    <option key={c} value={c} className="bg-black text-white">{c}</option>
                  ))}
                </select>

                <div className="flex items-center gap-1.5">
                  <span className="text-white/40 text-[11px]">Safe for:</span>
                  <select
                    value={allergenFilter}
                    onChange={e => setAllergenFilter(e.target.value)}
                    className="bg-[#121215] border border-primary/30 text-primary font-medium rounded-lg px-2.5 py-1.5 text-xs focus:outline-none cursor-pointer"
                  >
                    <option value="all" className="bg-black text-white">All Diets (No Filter)</option>
                    {ALLERGENS.map(a => (
                      <option key={a.id} value={a.id} className="bg-black text-white">
                        {a.icon} Safe (No {a.name})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Legend Badges */}
              <div className="flex items-center gap-2 p-1.5 bg-[#121215] border border-white/10 rounded-lg shrink-0">
                <span className="text-[10px] text-white/40 uppercase font-mono mr-1">Status Legend:</span>
                <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800 text-[10px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  C = Contains
                </span>
                <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800 text-[10px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  MC = May Contain
                </span>
                <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 text-white/50 text-[10px]">
                  Blank = Free
                </span>
              </div>
            </div>

            {/* ── THE PRINTABLE / INTERACTIVE MATRIX TABLE ── */}
            <div className="printable-document bg-[#0a0a0c] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Printable Header (Visible when printed or on screen) */}
              <div className="p-4 sm:p-6 border-b border-white/10 bg-gradient-to-r from-black via-[#111115] to-black">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {restaurantName} &mdash; Official Allergen Matrix
                    </h2>
                    <p className="text-xs text-white/60 mt-0.5">
                      Compliant with UK Regulation 1169/2011 (FIC) &amp; Natasha&apos;s Law (Food Standards Agency UK)
                    </p>
                  </div>
                  <div className="text-left sm:text-right text-xs font-mono text-white/60">
                    <div>Date: <strong className="text-white">{reviewDate}</strong></div>
                    <div>Audited By: <strong className="text-white">{completedBy}</strong></div>
                  </div>
                </div>
              </div>

              {/* Table wrapper */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#141418] border-b border-white/10">
                      <th className="p-3 font-semibold text-white min-w-[180px] sticky left-0 bg-[#141418] z-10 border-r border-white/10">
                        Menu Dish / Item
                      </th>
                      {ALLERGENS.map(allergen => (
                        <th
                          key={allergen.id}
                          className="p-2 text-center font-medium text-white/80 border-r border-white/5 min-w-[62px]"
                          title={`${allergen.name}: ${allergen.description}`}
                        >
                          <div className="flex flex-col items-center gap-0.5">
                            <span className="text-base">{allergen.icon}</span>
                            <span className="text-[10px] font-mono tracking-tighter uppercase font-bold text-primary">
                              {allergen.short}
                            </span>
                            <span className="text-[9px] text-white/50 hidden lg:inline-block leading-tight">
                              {allergen.name.split(" ")[0]}
                            </span>
                          </div>
                        </th>
                      ))}
                      <th className="p-2 text-center text-white/40 w-10 no-print">Del</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredItems.map(item => (
                      <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                        {/* Dish info sticky column */}
                        <td className="p-3 sticky left-0 bg-[#0a0a0c] group-hover:bg-[#121216] transition-colors border-r border-white/10 z-10">
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-semibold text-white text-xs sm:text-sm">{item.name}</span>
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-white/10 text-white/60">
                              {item.category}
                            </span>
                          </div>
                          {item.ingredients && (
                            <p className="text-[11px] text-white/70 mt-1 leading-relaxed whitespace-pre-wrap max-w-sm">
                              {item.ingredients}
                            </p>
                          )}
                        </td>

                        {/* 14 Allergen Interactive Cells */}
                        {ALLERGENS.map(allergen => {
                          const status = item.allergens[allergen.id] || "none";
                          return (
                            <td
                              key={allergen.id}
                              onClick={() => toggleAllergen(item.id, allergen.id)}
                              className="p-1 text-center border-r border-white/5 cursor-pointer hover:bg-white/10 transition-colors select-none"
                              title={`Click to cycle: ${item.name} -> ${allergen.name} (${status.toUpperCase()})`}
                            >
                              <div className="flex items-center justify-center min-h-[34px]">
                                {status === "contains" && (
                                  <span className="print-badge-c px-2 py-1 rounded bg-red-900/90 text-red-200 font-extrabold text-xs shadow-md border border-red-600 animate-pulse">
                                    C
                                  </span>
                                )}
                                {status === "may" && (
                                  <span className="print-badge-mc px-1.5 py-0.5 rounded bg-amber-900/90 text-amber-200 font-bold text-[11px] border border-amber-600">
                                    MC
                                  </span>
                                )}
                                {status === "none" && (
                                  <span className="text-white/10 text-xs hover:text-white/30">&mdash;</span>
                                )}
                              </div>
                            </td>
                          );
                        })}

                        {/* Delete row */}
                        <td className="p-2 text-center no-print">
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-1 text-white/20 hover:text-red-400 transition-colors"
                            title="Delete Dish"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}

                    {filteredItems.length === 0 && (
                      <tr>
                        <td colSpan={16} className="p-8 text-center text-white/40 text-xs">
                          No dishes match your search or filter. Try clearing the filter above.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Printable Sign-off Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span>
                    Staff Guidance: Always verify allergen status before serving customers. If in doubt, ask head chef.
                  </span>
                </div>
                <div className="font-mono text-[11px] pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10 w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6">
                  <span>Manager Signature: _______________________</span>
                  <span>Date: {reviewDate}</span>
                </div>
              </div>
            </div>

            {/* Inline Quick Add Form */}
            <form onSubmit={handleAddItem} className="p-4 sm:p-5 rounded-2xl bg-[#0f0f11] border border-white/10 flex flex-col sm:flex-row items-center gap-3 no-print">
              <span className="text-xs font-bold text-white shrink-0 flex items-center gap-1.5">
                <Plus className="w-4 h-4 text-primary" />
                <span>Add Dish:</span>
              </span>

              <input
                type="text"
                placeholder="Dish Name (e.g. Crispy Falafel Wrap)"
                value={newItemName}
                onChange={e => setNewItemName(e.target.value)}
                className="bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary flex-1"
                required
              />

              <input
                type="text"
                placeholder="Category (e.g. Wraps, Mains)"
                value={newItemCategory}
                onChange={e => setNewItemCategory(e.target.value)}
                className="bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary w-full sm:w-36"
              />

              <input
                type="text"
                placeholder="Ingredients list (optional)"
                value={newItemIngredients}
                onChange={e => setNewItemIngredients(e.target.value)}
                className="bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary flex-1"
              />

              <button
                type="submit"
                className="bg-primary hover:brightness-110 text-black text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Matrix</span>
              </button>
            </form>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            TAB 2: FOOD COST & GROSS MARGIN CALCULATOR
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "cost" && (
          <div className="space-y-6">
            {/* KPI Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 no-print">
              <div className="p-4 rounded-2xl bg-[#0f0f11] border border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/50">Portion Cost</span>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {currencySymbol}{portionCost.toFixed(2)}
                </div>
                <span className="text-[10px] text-white/40">Raw ingredient cost per plate</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f0f11] border border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/50">Food Cost %</span>
                <div className={`text-2xl sm:text-3xl font-bold mt-1 ${
                  foodCostPercent <= 28 ? "text-emerald-400" : foodCostPercent <= 35 ? "text-amber-400" : "text-red-400"
                }`}>
                  {foodCostPercent.toFixed(1)}%
                </div>
                <span className="text-[10px] text-white/40">
                  {foodCostPercent <= 28 ? "✅ Highly Profitable (<28%)" : foodCostPercent <= 35 ? "⚠️ Average (28-35%)" : "🔴 High Cost (>35%)"}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f0f11] border border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/50">Gross Profit Margin</span>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                  {grossProfitMargin.toFixed(1)}%
                </div>
                <span className="text-[10px] text-white/40">Target standard: 70%+</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f0f11] border border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/50">Gross Cash Profit</span>
                <div className="text-2xl sm:text-3xl font-bold text-primary mt-1">
                  {currencySymbol}{profitPerItem.toFixed(2)}
                </div>
                <span className="text-[10px] text-white/40">Net profit per dish sold</span>
              </div>
            </div>

            {/* Calculator Settings & Ingredients Table */}
            <div className="printable-document p-5 sm:p-7 rounded-2xl bg-[#0a0a0c] border border-white/10 shadow-2xl space-y-6">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex-1">
                  <label htmlFor="tools-recipe-title" className="text-[10px] font-mono uppercase text-white/50">Recipe / Dish Name</label>
                  <input
                    id="tools-recipe-title"
                    type="text"
                    value={recipeTitle}
                    onChange={e => setRecipeTitle(e.target.value)}
                    className="w-full text-lg sm:text-2xl font-bold text-white bg-transparent border-b border-white/20 focus:border-primary focus:outline-none pb-1 mt-0.5"
                  />
                </div>

                <div className="flex items-center gap-3 no-print">
                  <div>
                    <label htmlFor="tools-serv-yield" className="text-[10px] font-mono uppercase text-white/50 block">Servings Yield</label>
                    <input
                      id="tools-serv-yield"
                      type="number"
                      min="1"
                      value={servingsYield}
                      onChange={e => setServingsYield(Math.max(1, Number(e.target.value)))}
                      className="w-20 bg-[#121215] border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-white text-center focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="tools-sell-price" className="text-[10px] font-mono uppercase text-white/50 block">Selling Price</label>
                    <div className="flex items-center bg-[#121215] border border-white/15 rounded-lg px-2 py-1.5">
                      <span className="text-primary font-bold text-xs mr-1">{currencySymbol}</span>
                      <input
                        id="tools-sell-price"
                        type="number"
                        step="0.10"
                        min="0"
                        value={menuSellingPrice}
                        onChange={e => setMenuSellingPrice(Number(e.target.value))}
                        className="w-20 bg-transparent text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tools-currency-sym" className="text-[10px] font-mono uppercase text-white/50 block">Currency</label>
                    <select
                      id="tools-currency-sym"
                      value={currencySymbol}
                      onChange={e => setCurrencySymbol(e.target.value)}
                      className="bg-[#121215] border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option value="£">£ GBP (UK)</option>
                      <option value="€">€ EUR (EU)</option>
                      <option value="$">$ USD</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Ingredients Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50 font-mono text-[10px] uppercase">
                      <th className="py-2.5">Ingredient Name</th>
                      <th className="py-2.5 text-center">Pack Qty</th>
                      <th className="py-2.5 text-center">Pack Cost</th>
                      <th className="py-2.5 text-center">Recipe Qty</th>
                      <th className="py-2.5 text-center">Unit</th>
                      <th className="py-2.5 text-right">Cost</th>
                      <th className="py-2.5 text-center w-8 no-print"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {ingredients.map(ing => {
                      const lineCost = ing.packQty > 0 ? (ing.packCost / ing.packQty) * ing.recipeQty : 0;
                      return (
                        <tr key={ing.id} className="hover:bg-white/[0.02]">
                          <td className="py-2 pr-2">
                            <input
                              type="text"
                              value={ing.name}
                              onChange={e => updateIngredient(ing.id, "name", e.target.value)}
                              className="w-full bg-transparent border-b border-transparent hover:border-white/20 focus:border-primary text-white text-xs py-0.5 focus:outline-none"
                            />
                          </td>
                          <td className="py-2 px-2 text-center">
                            <input
                              type="number"
                              min="0.1"
                              step="any"
                              value={ing.packQty}
                              onChange={e => updateIngredient(ing.id, "packQty", Number(e.target.value))}
                              className="w-16 bg-[#121215] border border-white/10 rounded px-1.5 py-0.5 text-center text-white text-xs focus:outline-none"
                            />
                          </td>
                          <td className="py-2 px-2 text-center">
                            <div className="inline-flex items-center text-white/70">
                              <span className="text-[10px] mr-0.5">{currencySymbol}</span>
                              <input
                                type="number"
                                min="0"
                                step="0.01"
                                value={ing.packCost}
                                onChange={e => updateIngredient(ing.id, "packCost", Number(e.target.value))}
                                className="w-16 bg-[#121215] border border-white/10 rounded px-1.5 py-0.5 text-center text-white text-xs focus:outline-none"
                              />
                            </div>
                          </td>
                          <td className="py-2 px-2 text-center">
                            <input
                              type="number"
                              min="0.01"
                              step="any"
                              value={ing.recipeQty}
                              onChange={e => updateIngredient(ing.id, "recipeQty", Number(e.target.value))}
                              className="w-16 bg-[#121215] border border-white/10 rounded px-1.5 py-0.5 text-center text-white text-xs font-bold text-primary focus:outline-none"
                            />
                          </td>
                          <td className="py-2 px-2 text-center">
                            <select
                              value={ing.unit}
                              onChange={e => updateIngredient(ing.id, "unit", e.target.value)}
                              className="bg-[#121215] border border-white/10 rounded px-1.5 py-0.5 text-white/70 text-xs focus:outline-none cursor-pointer"
                            >
                              <option value="g">g</option>
                              <option value="kg">kg</option>
                              <option value="ml">ml</option>
                              <option value="l">l</option>
                              <option value="pcs">pcs</option>
                              <option value="portion">portion</option>
                            </select>
                          </td>
                          <td className="py-2 pl-2 text-right font-mono font-bold text-white">
                            {currencySymbol}{lineCost.toFixed(2)}
                          </td>
                          <td className="py-2 text-center no-print">
                            <button
                              onClick={() => removeIngredient(ing.id)}
                              className="text-white/20 hover:text-red-400 transition-colors p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Add Ingredient Button & Total Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
                <button
                  onClick={addIngredient}
                  className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/15 transition-all no-print cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Ingredient Line</span>
                </button>

                <div className="text-right text-xs">
                  <div className="text-white/60">Total Recipe Batch Cost: <strong className="text-white text-sm">{currencySymbol}{totalBatchCost.toFixed(2)}</strong></div>
                  <div className="text-white/60 mt-0.5">Cost per Single Portion: <strong className="text-primary text-sm font-bold">{currencySymbol}{portionCost.toFixed(2)}</strong></div>
                </div>
              </div>

              {/* Target Price Calculator Slider */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 no-print space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-primary" />
                    <span>Target Food Cost Markup Calculator</span>
                  </span>
                  <span className="text-xs font-mono text-primary font-bold">{targetCostPercent}% Target Cost</span>
                </div>

                <input
                  type="range"
                  min="15"
                  max="45"
                  value={targetCostPercent}
                  onChange={e => setTargetCostPercent(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
                  <span>To achieve a <strong className="text-white">{targetCostPercent}% food cost</strong>, your recommended price is:</span>
                  <div className="px-3 py-1 rounded bg-primary/20 border border-primary/40 text-primary font-bold text-sm">
                    {currencySymbol}{recommendedSellingPrice.toFixed(2)} (or {currencySymbol}{Math.ceil(recommendedSellingPrice) - 0.05})
                  </div>
                </div>
              </div>

              {/* Print Button */}
              <div className="flex justify-end no-print">
                <button
                  onClick={() => window.print()}
                  className="bg-white hover:bg-white/90 text-black text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-black" />
                  <span>Print Recipe Cost Sheet</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            TAB 3: RECIPE CARD & YIELD SCALER
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "recipe" && (
          <div className="space-y-6">
            {/* Controls Bar */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0f0f11] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 no-print shadow-xl">
              <div>
                <h3 className="text-base font-bold text-white">Dynamic Recipe Portion Resizer</h3>
                <p className="text-xs text-white/60">
                  Scale your batch recipe from 4 servings to 50+ portions with exact ingredient math.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-black/60 p-2 rounded-xl border border-white/15">
                <div className="flex items-center gap-1.5">
                  <label htmlFor="tools-scaler-base" className="text-[11px] font-mono text-white/50">Base Servings:</label>
                  <input
                    id="tools-scaler-base"
                    type="number"
                    min="1"
                    value={scalerBaseServings}
                    onChange={e => setScalerBaseServings(Math.max(1, Number(e.target.value)))}
                    className="w-14 bg-[#141418] border border-white/10 rounded px-2 py-1 text-xs text-white text-center focus:outline-none"
                  />
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
                <div className="flex items-center gap-1.5">
                  <label htmlFor="tools-scaler-target" className="text-[11px] font-mono text-primary font-bold">Target Batch:</label>
                  <input
                    id="tools-scaler-target"
                    type="number"
                    min="1"
                    value={scalerTargetServings}
                    onChange={e => setScalerTargetServings(Math.max(1, Number(e.target.value)))}
                    className="w-16 bg-primary/20 border border-primary/50 text-primary font-bold rounded px-2 py-1 text-xs text-center focus:outline-none"
                  />
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="bg-white hover:bg-white/90 text-black text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <Printer className="w-4 h-4 text-black" />
                <span>Print Chef Card</span>
              </button>
            </div>

            {/* Chef Station Card Sheet */}
            <div className="printable-document p-6 sm:p-8 rounded-2xl bg-[#0a0a0c] border border-white/10 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <input
                    type="text"
                    value={recipeName}
                    onChange={e => setRecipeName(e.target.value)}
                    className="text-2xl sm:text-3xl font-bold text-white bg-transparent border-b border-white/20 focus:border-primary focus:outline-none pb-1"
                  />
                  <div className="flex items-center gap-4 text-xs text-white/60 mt-2 font-mono">
                    <span>Prep Time: <input value={prepTime} onChange={e => setPrepTime(e.target.value)} className="bg-transparent border-b border-white/20 text-white w-16 text-center" /></span>
                    <span>Cook Time: <input value={cookTime} onChange={e => setCookTime(e.target.value)} className="bg-transparent border-b border-white/20 text-white w-16 text-center" /></span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="px-3.5 py-1.5 rounded-xl bg-primary/10 border border-primary/30 inline-block">
                    <span className="text-xs text-white/70">Yielding: </span>
                    <strong className="text-primary text-base font-bold">{scalerTargetServings} Portions</strong>
                    <span className="text-[10px] text-white/40 block">({scaleRatio.toFixed(2)}x Multiplier)</span>
                  </div>
                </div>
              </div>

              {/* Scaled Ingredients Grid */}
              <div>
                <h4 className="text-xs font-mono uppercase text-white/50 tracking-wider mb-3">
                  Scaled Ingredients Checklist
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {scalableIngredients.map(ing => {
                    const scaled = ing.baseQty * scaleRatio;
                    const formatted = Number.isInteger(scaled) ? scaled : scaled.toFixed(1);
                    return (
                      <div key={ing.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                        <span className="text-xs text-white">{ing.name}</span>
                        <div className="font-mono text-xs">
                          <strong className="text-primary text-sm font-bold mr-1">{formatted}</strong>
                          <span className="text-white/60">{ing.unit}</span>
                          <span className="text-[10px] text-white/30 ml-1.5 hidden sm:inline">
                            (was {ing.baseQty} {ing.unit})
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={addScalableIngredient}
                    className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/15 transition-all no-print cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Scalable Ingredient</span>
                  </button>
                </div>
              </div>

              {/* Cooking Method */}
              <div>
                <h4 className="text-xs font-mono uppercase text-white/50 tracking-wider mb-2">
                  Kitchen Method &amp; Standard Operating Procedure (SOP)
                </h4>
                <textarea
                  rows={6}
                  value={recipeMethod}
                  onChange={e => setRecipeMethod(e.target.value)}
                  className="w-full bg-[#121215] border border-white/15 rounded-xl p-4 text-xs text-white leading-relaxed focus:outline-none focus:border-primary font-mono"
                />
              </div>

              {/* Critical Food Safety Point (CCP) */}
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-amber-200 block font-semibold mb-0.5">Critical Control Point (CCP) Warning:</strong>
                  <span className="text-amber-200/80">
                    If this recipe requires hot holding, ensure temperature remains strictly above <strong>63°C</strong>. 
                    If storing chilled, cool to under <strong>8°C</strong> within 90 minutes. Always apply date label stickers.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            TAB 4: DAILY SFBB HYGIENE CHECKLIST (EHO AUDIT RECORD)
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "checklist" && (
          <div className="printable-document p-6 sm:p-8 rounded-2xl bg-[#0a0a0c] border border-white/10 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-primary text-[10px] font-mono uppercase tracking-widest">
                  Food Standards Agency &mdash; SFBB Daily Diary
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                  Daily Kitchen Opening &amp; Closing Hygiene Log
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs">
                  <label htmlFor="tools-check-date" className="text-white/50 font-mono">Date:</label>
                  <input
                    id="tools-check-date"
                    type="date"
                    value={checklistDate}
                    onChange={e => setChecklistDate(e.target.value)}
                    className="bg-[#121215] border border-white/15 rounded px-2.5 py-1 text-xs text-white focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => window.print()}
                  className="bg-white hover:bg-white/90 text-black text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all no-print cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-black" />
                  <span>Print Daily Sheet</span>
                </button>
              </div>
            </div>

            {/* Critical Temperatures Log Box */}
            <div className="p-4 rounded-xl bg-[#111115] border border-white/10">
              <h4 className="text-xs font-mono uppercase text-white/50 tracking-wider mb-3 flex items-center gap-1.5">
                <Thermometer className="w-4 h-4 text-primary" />
                <span>Critical Temperatures Verification (Log Daily)</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-black border border-white/10">
                  <span className="text-white/50 text-[10px] block">Walk-in Fridge (&lt;5°C)</span>
                  <div className="flex items-center gap-1 mt-1">
                    <input
                      type="text"
                      value={fridge1Temp}
                      onChange={e => setFridge1Temp(e.target.value)}
                      className="w-14 bg-transparent text-white font-bold text-sm focus:outline-none"
                    />
                    <span className="text-white/40 font-mono">°C</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-black border border-white/10">
                  <span className="text-white/50 text-[10px] block">Prep Display Fridge (&lt;5°C)</span>
                  <div className="flex items-center gap-1 mt-1">
                    <input
                      type="text"
                      value={fridge2Temp}
                      onChange={e => setFridge2Temp(e.target.value)}
                      className="w-14 bg-transparent text-white font-bold text-sm focus:outline-none"
                    />
                    <span className="text-white/40 font-mono">°C</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-black border border-white/10">
                  <span className="text-white/50 text-[10px] block">Deep Freezer (&lt;-18°C)</span>
                  <div className="flex items-center gap-1 mt-1">
                    <input
                      type="text"
                      value={freezerTemp}
                      onChange={e => setFreezerTemp(e.target.value)}
                      className="w-14 bg-transparent text-white font-bold text-sm focus:outline-none"
                    />
                    <span className="text-white/40 font-mono">°C</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-black border border-white/10">
                  <span className="text-white/50 text-[10px] block">Hot Holding (&gt;63°C)</span>
                  <div className="flex items-center gap-1 mt-1">
                    <input
                      type="text"
                      value={hotHoldingTemp}
                      onChange={e => setHotHoldingTemp(e.target.value)}
                      className="w-14 bg-transparent text-white font-bold text-sm focus:outline-none"
                    />
                    <span className="text-white/40 font-mono">°C</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening & Closing Checklists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Opening Checks */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Morning Opening Checks
                  </h4>
                </div>
                <div className="space-y-2">
                  {openingChecks.map(chk => (
                    <div
                      key={chk.id}
                      onClick={() => toggleCheck(chk.id, false)}
                      className={`p-3 rounded-xl border text-xs flex items-start gap-3 transition-colors cursor-pointer select-none ${
                        chk.checked ? "bg-emerald-950/20 border-emerald-500/30 text-white" : "bg-black/40 border-white/10 text-white/50"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        chk.checked ? "bg-emerald-500 border-emerald-400 text-black font-bold" : "border-white/30"
                      }`}>
                        {chk.checked && <Check className="w-3 h-3 text-black stroke-[3]" />}
                      </div>
                      <span className="leading-snug">{chk.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing Checks */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Evening Closing Checks
                  </h4>
                </div>
                <div className="space-y-2">
                  {closingChecks.map(chk => (
                    <div
                      key={chk.id}
                      onClick={() => toggleCheck(chk.id, true)}
                      className={`p-3 rounded-xl border text-xs flex items-start gap-3 transition-colors cursor-pointer select-none ${
                        chk.checked ? "bg-sky-950/20 border-sky-500/30 text-white" : "bg-black/40 border-white/10 text-white/50"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        chk.checked ? "bg-sky-500 border-sky-400 text-black font-bold" : "border-white/30"
                      }`}>
                        {chk.checked && <Check className="w-3 h-3 text-black stroke-[3]" />}
                      </div>
                      <span className="leading-snug">{chk.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Supervisor Sign-off */}
            <div className="p-4 rounded-xl bg-black border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <label htmlFor="tools-duty-mgr" className="text-white/50 font-mono">Duty Manager Sign-off:</label>
                <input
                  id="tools-duty-mgr"
                  type="text"
                  value={supervisorSig}
                  onChange={e => setSupervisorSig(e.target.value)}
                  className="bg-[#141418] border border-white/20 rounded px-3 py-1 text-white font-medium focus:outline-none"
                />
              </div>
              <div className="font-mono text-white/40 text-[11px]">
                Valid for UK Local Authority (EHO) Food Hygiene Audits
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            TAB 5: SAFE COOKING & CHILLING TEMPS CHART (UK FSA)
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "temp" && (
          <div className="printable-document p-6 sm:p-8 rounded-2xl bg-[#0a0a0c] border border-white/10 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-primary text-[10px] font-mono uppercase tracking-widest">
                  Food Standards Agency (UK) &amp; HACCP Standards
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                  Critical Temperatures &amp; Danger Zone Reference Guide
                </h3>
              </div>
              <button
                onClick={() => window.print()}
                className="bg-white hover:bg-white/90 text-black text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all no-print cursor-pointer"
              >
                <Printer className="w-4 h-4 text-black" />
                <span>Print Kitchen Poster</span>
              </button>
            </div>

            {/* The Danger Zone Visual Meter */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-sky-950/30 border border-sky-500/30 text-sky-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-white">Chilled &amp; Frozen</span>
                  <span className="text-xl font-extrabold text-sky-400">&lt; 5°C</span>
                </div>
                <p className="text-xs text-sky-200/80 mt-2 leading-relaxed">
                  • Fridges: <strong>0°C to 5°C</strong> (Legal maximum is 8°C in UK).<br />
                  • Deep Freezers: <strong>-18°C or below</strong>.<br />
                  • Chilling Cooked Food: Cool below 8°C in under 90 minutes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-red-950/40 border border-red-500/50 text-red-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-white">⚠️ DANGER ZONE</span>
                  <span className="text-xl font-extrabold text-red-400">8°C &ndash; 63°C</span>
                </div>
                <p className="text-xs text-red-200/80 mt-2 leading-relaxed">
                  • Bacteria like Salmonella &amp; E. coli multiply rapidly in this zone.<br />
                  • Never leave high-risk food standing at room temperature.<br />
                  • Maximum exposure allowed: 2-hour ambient rule.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-white">Cooking &amp; Hot Holding</span>
                  <span className="text-xl font-extrabold text-emerald-400">75°C+</span>
                </div>
                <p className="text-xs text-emerald-200/80 mt-2 leading-relaxed">
                  • Safe Cook (Core Temp): <strong>70°C for 2 min</strong> or <strong>75°C instant</strong>.<br />
                  • Hot Holding: Keep continuously above <strong>63°C</strong>.<br />
                  • Reheating: Minimum <strong>75°C</strong> (82°C in Scotland).
                </p>
              </div>
            </div>

            {/* Core Cooking Temp Table by Food Type */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white/50 font-mono text-[10px] uppercase">
                    <th className="py-2.5">Food Product Category</th>
                    <th className="py-2.5 text-center">Core Safe Temp</th>
                    <th className="py-2.5 text-center">Holding Time</th>
                    <th className="py-2.5">Specific Kitchen Rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/80">
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Poultry (Chicken, Turkey, Duck)</td>
                    <td className="py-2.5 text-center font-bold text-emerald-400 font-mono">75°C</td>
                    <td className="py-2.5 text-center font-mono">Instant (or 70°C for 2m)</td>
                    <td className="py-2.5 text-white/60">No pink meat allowed; juices must run crystal clear.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Burgers, Sausages &amp; Minced Meat</td>
                    <td className="py-2.5 text-center font-bold text-emerald-400 font-mono">75°C</td>
                    <td className="py-2.5 text-center font-mono">Instant (or 70°C for 2m)</td>
                    <td className="py-2.5 text-white/60">Bacteria exists throughout minced meat. Cook thoroughly.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Pork Joints &amp; Chops</td>
                    <td className="py-2.5 text-center font-bold text-emerald-400 font-mono">75°C</td>
                    <td className="py-2.5 text-center font-mono">2 minutes</td>
                    <td className="py-2.5 text-white/60">Probe at thickest part of the meat away from bones.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Whole Beef &amp; Lamb Cuts (Steaks)</td>
                    <td className="py-2.5 text-center font-bold text-emerald-400 font-mono">54°C &ndash; 75°C</td>
                    <td className="py-2.5 text-center font-mono">Depending on rare/well</td>
                    <td className="py-2.5 text-white/60">External surface must be fully seared to kill surface bacteria.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Fish &amp; Seafood</td>
                    <td className="py-2.5 text-center font-bold text-emerald-400 font-mono">65°C &ndash; 70°C</td>
                    <td className="py-2.5 text-center font-mono">2 minutes</td>
                    <td className="py-2.5 text-white/60">Flesh becomes opaque and flakes easily with fork.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Hot Soups, Gravies &amp; Sauces Reheating</td>
                    <td className="py-2.5 text-center font-bold text-emerald-400 font-mono">75°C+</td>
                    <td className="py-2.5 text-center font-mono">Rapid boil / simmer</td>
                    <td className="py-2.5 text-white/60">Reheat once only. Never reheat food multiple times.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            AGENCY CONVERSION & LEAD MAGNET BANNER (NO-PRINT)
        ════════════════════════════════════════════════════════════════ */}
        <section className="mt-16 rounded-3xl bg-gradient-to-r from-[#141418] via-[#1c1b12] to-[#141418] border border-primary/25 p-8 sm:p-12 relative overflow-hidden shadow-2xl no-print lead-cta-banner">
          <div className="max-w-3xl">
            <span className="text-primary text-xs font-mono uppercase tracking-widest mb-2 block">
              Automate Your Takeaway &amp; Save Thousands
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Tired of JustEat &amp; Deliveroo taking <span className="text-primary">30% commission</span> on every order?
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
              We engineer bespoke, high-speed online ordering websites for UK takeaways and restaurants. 
              Features include <strong className="text-white">built-in Natasha&apos;s Law allergen filtering</strong>, 
              direct WhatsApp orders, Google Maps SEO, and zero commission fees.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20using%20your%20food%20safety%20tools%20and%20interested%20in%20a%20takeaway%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:brightness-110 text-black text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-xl"
              >
                <span>Discuss Your Project on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
