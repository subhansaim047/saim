"use client";

import React, { useState, useId } from "react";
import { Printer, ShieldCheck, Plus, RotateCcw, AlertTriangle, CheckCircle, Info, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface PpdsPreset {
  name: string;
  category: string;
  weight: string;
  ingredients: string;
  allergens: string[];
  storage: string;
  shelfLifeDays: number;
}

const STATUTORY_14_ALLERGENS = [
  { id: "celery", name: "Celery", regex: /celery|celeriac/i },
  { id: "gluten", name: "Cereals containing Gluten (Wheat, Rye, Barley, Oats)", regex: /wheat|barley|rye|oats|spelt|kamut|gluten|flour|semolina/i },
  { id: "crustaceans", name: "Crustaceans (Prawns, Crab, Lobster)", regex: /prawn|crab|lobster|crayfish|shrimp|crustacean/i },
  { id: "eggs", name: "Eggs", regex: /egg|albumin|mayonnaise/i },
  { id: "fish", name: "Fish", regex: /fish|salmon|tuna|cod|haddock|anchov/i },
  { id: "lupin", name: "Lupin", regex: /lupin/i },
  { id: "milk", name: "Milk / Dairy (Butter, Cheese, Whey)", regex: /milk|cheese|butter|cream|whey|casein|yogurt|yoghurt|lactose/i },
  { id: "molluscs", name: "Molluscs (Mussels, Oysters, Squid)", regex: /mussel|oyster|squid|calamari|clam|snail|mollusc/i },
  { id: "mustard", name: "Mustard", regex: /mustard|dijon/i },
  { id: "nuts", name: "Tree Nuts (Almonds, Hazelnuts, Walnuts, etc.)", regex: /almond|hazelnut|walnut|cashew|pecan|brazil|pistachio|macadamia/i },
  { id: "peanuts", name: "Peanuts", regex: /peanut|groundnut/i },
  { id: "sesame", name: "Sesame Seeds", regex: /sesame|tahini/i },
  { id: "soya", name: "Soya / Soybeans", regex: /soya|soy|tofu|edamame/i },
  { id: "sulphites", name: "Sulphur Dioxide / Sulphites (>10mg/kg)", regex: /sulphite|sulfite|sulphur dioxide/i },
];

const PRESETS: PpdsPreset[] = [
  {
    name: "Classic Ham & Mature Cheddar Baguette",
    category: "Pre-packed Sandwiches",
    weight: "225g e",
    ingredients: "White Baguette (Wheat Flour [Wheat Flour, Calcium Carbonate, Iron, Niacin, Thiamin], Water, Yeast, Salt, Rapeseed Oil), Cooked Ham 28% (Pork, Salt, Dextrose, Stabiliser [Sodium Triphosphate], Antioxidant [Sodium Ascorbate], Preservative [Sodium Nitrite]), Mature Cheddar Cheese 20% (Pasteurised Cow's Milk, Salt, Starter Culture, Vegetarian Rennet), Salted Butter (Butter [Milk], Salt).",
    allergens: ["gluten", "milk"],
    storage: "Keep refrigerated below 5°C. Consume within 24 hours of opening.",
    shelfLifeDays: 2,
  },
  {
    name: "Coronation Chicken & Baby Spinach Salad",
    category: "Grab & Go Salads",
    weight: "280g e",
    ingredients: "Cooked British Chicken Breast 35% (Chicken, Salt, Cornstarch), Coronation Dressing (Rapeseed Oil, Water, Pasteurised Egg Yolk, Spirit Vinegar, Mango Chutney [Mango, Sugar, Salt, Acidity Regulator (Acetic Acid)], Curry Powder [Coriander, Turmeric, Cumin, Fenugreek, Mustard Flour, Salt, Garlic, Chilli], Apricot Puree, Salt, Sugar), Baby Spinach Leaves 20%, Dried Apricots, Toasted Flaked Almonds (Tree Nuts).",
    allergens: ["eggs", "mustard", "nuts"],
    storage: "Keep refrigerated below 5°C. Not suitable for home freezing.",
    shelfLifeDays: 2,
  },
  {
    name: "Triple Chocolate Bakery Cookie",
    category: "Packaged Baked Goods",
    weight: "85g e",
    ingredients: "Wheat Flour (Wheat Flour, Calcium Carbonate, Iron, Niacin, Thiamin), Salted Butter (Milk), Dark Chocolate Chunks 15% (Cocoa Mass, Sugar, Emulsifier [Soya Lecithin], Natural Vanilla Flavouring), Milk Chocolate Chunks 10% (Sugar, Whole Milk Powder, Cocoa Butter, Cocoa Mass, Emulsifier [Soya Lecithin]), Brown Sugar, Granulated Sugar, Pasteurised Free-Range Egg, Cocoa Powder, Bicarbonate of Soda, Salt.",
    allergens: ["gluten", "milk", "eggs", "soya"],
    storage: "Store in a cool, dry place away from direct sunlight.",
    shelfLifeDays: 4,
  },
];

export const PpdsLabelGeneratorTool: React.FC = () => {
  const foodNameId = useId();
  const netWeightId = useId();
  const businessNameId = useId();
  const businessAddressId = useId();
  const storageInstructionsId = useId();
  const ingredientsId = useId();
  const useById = useId();
  const batchId = useId();

  const [foodName, setFoodName] = useState(PRESETS[0].name);
  const [netWeight, setNetWeight] = useState(PRESETS[0].weight);
  const [ingredientsText, setIngredientsText] = useState(PRESETS[0].ingredients);
  const [businessName, setBusinessName] = useState("Artisan Deli & Kitchen Ltd");
  const [businessAddress, setBusinessAddress] = useState("14 High Street, Manchester, M1 1AA, UK");
  const [storageInstructions, setStorageInstructions] = useState(PRESETS[0].storage);
  const [labelsPerPage, setLabelsPerPage] = useState<number>(1);
  const [dateType, setDateType] = useState<"useBy" | "bestBefore">("useBy");

  // Format date helper
  const getFormattedDate = (daysAhead: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const [expiryDate, setExpiryDate] = useState(() => getFormattedDate(2));
  const [batchCode, setBatchCode] = useState("LOT-26A");

  // Auto-detect allergens from text
  const detectedAllergens = STATUTORY_14_ALLERGENS.filter((allergen) =>
    allergen.regex.test(ingredientsText)
  );

  // Load a preset
  const loadPreset = (preset: PpdsPreset) => {
    setFoodName(preset.name);
    setNetWeight(preset.weight);
    setIngredientsText(preset.ingredients);
    setStorageInstructions(preset.storage);
    setExpiryDate(getFormattedDate(preset.shelfLifeDays));
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Helper to highlight allergen words in bold in preview
  const formatIngredientsHtml = (text: string) => {
    // Regex that catches all standard allergens
    const highlightRegex = /(wheat|barley|rye|oats|spelt|kamut|gluten|flour|semolina|milk|butter|cheese|cream|whey|casein|yogurt|yoghurt|lactose|egg|eggs|mayonnaise|almond|almonds|hazelnut|hazelnuts|walnut|walnuts|cashew|cashews|pecan|pecans|brazil|pistachio|pistachios|macadamia|peanut|peanuts|soya|soy|soybeans|sesame|mustard|celery|celeriac|fish|salmon|tuna|cod|anchov|prawn|prawns|crab|crabs|lobster|mussel|mussels|oyster|oysters|squid|calamari|sulphite|sulphites|sulfite|sulfites|sulphur dioxide|lupin)/gi;
    return text.replace(highlightRegex, (match) => `<strong>${match}</strong>`);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* ── PRINT-SPECIFIC CSS ── */}
      <style jsx global>{`
        @media print {
          header, nav, footer, .no-print, .conversion-banner, .related-section, .no-print * {
            display: none !important;
          }
          body, html {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .ppds-print-sheet {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 4mm !important;
            padding: 8mm !important;
            width: 100% !important;
            page-break-after: always;
          }
          .ppds-sticker {
            border: 1px solid #111111 !important;
            padding: 3.5mm !important;
            border-radius: 2mm !important;
            font-size: 8pt !important;
            line-height: 1.25 !important;
            background: #ffffff !important;
            page-break-inside: avoid !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            min-height: 52mm !important;
          }
          .ppds-sticker strong {
            font-weight: 800 !important;
            text-transform: uppercase !important;
          }
        }
      `}</style>

      {/* Control & Customization Panel */}
      <div className="no-print bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full">
                Natasha's Law Compliant
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Regulation (EU) No 1169/2011 & FIR 2020
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
              Interactive PPDS Food Label Generator
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Generate statutory food labels for Pre-Packed for Direct Sale (PPDS) items with bolded allergens and compliant print layouts.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="bg-neutral-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl inline-flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Labels</span>
            </button>
          </div>
        </div>

        {/* Preset Selector */}
        <div>
          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
            Load UK Takeaway & Cafe Presets
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {PRESETS.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => loadPreset(p)}
                className="text-left p-3 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:bg-neutral-100/80 hover:border-neutral-300 transition-all text-xs cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono mb-1">
                  <span>{p.category}</span>
                  <ArrowUpRight className="w-3 h-3 text-amber-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="font-bold text-neutral-900 group-hover:text-amber-800 line-clamp-1">
                  {p.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          <div className="sm:col-span-2">
            <label htmlFor={foodNameId} className="block text-xs font-bold text-neutral-700 uppercase mb-1">
              Food Item Legal Name <span className="text-rose-500">*</span>
            </label>
            <input
              id={foodNameId}
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="e.g. Chicken Caesar Wrap"
            />
          </div>

          <div>
            <label htmlFor={netWeightId} className="block text-xs font-bold text-neutral-700 uppercase mb-1">
              Net Quantity / Weight
            </label>
            <input
              id={netWeightId}
              type="text"
              value={netWeight}
              onChange={(e) => setNetWeight(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="e.g. 240g e"
            />
          </div>

          <div>
            <label htmlFor={businessNameId} className="block text-xs font-bold text-neutral-700 uppercase mb-1">
              Food Business Operator (FBO) Name
            </label>
            <input
              id={businessNameId}
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="e.g. Saim's Kitchen Ltd"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={businessAddressId} className="block text-xs font-bold text-neutral-700 uppercase mb-1">
              Business Address & Postcode
            </label>
            <input
              id={businessAddressId}
              type="text"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="e.g. 10 High Street, Birmingham, B1 1BB, UK"
            />
          </div>

          <div>
            <label htmlFor={storageInstructionsId} className="block text-xs font-bold text-neutral-700 uppercase mb-1">
              Storage Instructions
            </label>
            <input
              id={storageInstructionsId}
              type="text"
              value={storageInstructions}
              onChange={(e) => setStorageInstructions(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="e.g. Keep refrigerated below 5°C"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor={useById} className="text-xs font-bold text-neutral-700 uppercase">
                {dateType === "useBy" ? "Use By Date" : "Best Before Date"}
              </label>
              <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                <button
                  type="button"
                  onClick={() => setDateType("useBy")}
                  className={`cursor-pointer ${dateType === "useBy" ? "font-bold text-neutral-900 underline" : ""}`}
                >
                  Use By
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => setDateType("bestBefore")}
                  className={`cursor-pointer ${dateType === "bestBefore" ? "font-bold text-neutral-900 underline" : ""}`}
                >
                  Best Before
                </button>
              </div>
            </div>
            <input
              id={useById}
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="e.g. 28 Oct 2026"
            />
          </div>

          <div>
            <label htmlFor={batchId} className="block text-xs font-bold text-neutral-700 uppercase mb-1">
              Batch / Lot Number
            </label>
            <input
              id={batchId}
              type="text"
              value={batchCode}
              onChange={(e) => setBatchCode(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="e.g. LOT-42B"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-between mb-1">
              <label htmlFor={ingredientsId} className="text-xs font-bold text-neutral-700 uppercase">
                Full Ingredients List (in descending order of weight) <span className="text-rose-500">*</span>
              </label>
              <span className="text-[11px] text-neutral-500 font-mono">
                Statutory allergens are automatically detected & bolded below
              </span>
            </div>
            <textarea
              id={ingredientsId}
              rows={4}
              value={ingredientsText}
              onChange={(e) => setIngredientsText(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl p-3.5 text-xs text-neutral-900 leading-relaxed focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="List all ingredients and compound sub-ingredients in descending order..."
            />
          </div>
        </div>

        {/* Live Detected Allergen Chips */}
        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
          <div className="flex items-center gap-2 mb-2 text-amber-900 text-xs font-bold">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              Detected Allergens ({detectedAllergens.length} of 14 UK Statutory Allergens)
            </span>
          </div>
          {detectedAllergens.length === 0 ? (
            <p className="text-xs text-neutral-600">
              No statutory allergens detected yet in the ingredients list. (Ensure all cereal flours, dairy derivatives, or traces are listed).
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {detectedAllergens.map((a) => (
                <span
                  key={a.id}
                  className="bg-amber-200/80 text-amber-950 font-bold px-2.5 py-1 rounded-lg text-[11px] border border-amber-300/80 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3 h-3 text-amber-700" />
                  <span>{a.name}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Print Layout Options */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-neutral-100">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-neutral-700 uppercase">Print Layout:</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLabelsPerPage(1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  labelsPerPage === 1 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                Single Sticker Preview
              </button>
              <button
                type="button"
                onClick={() => setLabelsPerPage(21)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  labelsPerPage === 21 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                A4 Sheet (21 Labels / 3x7 Grid)
              </button>
            </div>
          </div>
          <div className="text-[11px] text-neutral-500 font-mono">
            Optimized for 63.5mm × 38.1mm sticker sheets
          </div>
        </div>
      </div>

      {/* ── LIVE PREVIEW & PRINTABLE LABEL(S) ── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between no-print px-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-600 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-neutral-400" />
            <span>Label Preview (Real-time formatting)</span>
          </h3>
          <span className="text-xs text-neutral-500">
            {labelsPerPage === 1 ? "Showing 1 Label" : "Showing 21-Label Sheet Preview"}
          </span>
        </div>

        {/* Labels Container */}
        <div className={`ppds-print-sheet ${labelsPerPage === 1 ? "max-w-md mx-auto" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}`}>
          {Array.from({ length: labelsPerPage }).map((_, i) => (
            <div
              key={i}
              className="ppds-sticker bg-white border border-neutral-900 rounded-2xl p-5 shadow-sm space-y-3 text-neutral-950 font-sans text-xs relative"
            >
              {/* Top Header */}
              <div className="border-b border-neutral-200 pb-2 flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base leading-snug tracking-tight text-neutral-950">
                    {foodName || "Food Item Legal Name"}
                  </h4>
                  <div className="text-[11px] font-semibold text-neutral-600">
                    {businessName}
                  </div>
                </div>
                {netWeight && (
                  <span className="text-xs font-mono font-bold text-neutral-900 shrink-0">
                    {netWeight}
                  </span>
                )}
              </div>

              {/* Ingredients with bolded allergens */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Ingredients:
                </div>
                <p
                  className="text-[11px] leading-relaxed text-neutral-800"
                  dangerouslySetInnerHTML={{
                    __html: formatIngredientsHtml(ingredientsText || "No ingredients entered"),
                  }}
                />
              </div>

              {/* Allergen Callout */}
              <div className="text-[10px] font-bold text-neutral-900 pt-1 border-t border-neutral-100">
                Allergen Advice: For allergens, including cereals containing gluten, see ingredients in <strong>BOLD</strong>.
              </div>

              {/* Storage & Expiry Footer */}
              <div className="pt-2 border-t border-neutral-200 grid grid-cols-2 gap-2 text-[10px]">
                <div>
                  <span className="text-neutral-500 block uppercase text-[9px] font-semibold">Storage:</span>
                  <span className="text-neutral-800 font-medium leading-tight block">{storageInstructions}</span>
                </div>
                <div className="text-right">
                  <span className="text-neutral-500 block uppercase text-[9px] font-semibold">
                    {dateType === "useBy" ? "Use By:" : "Best Before:"}
                  </span>
                  <span className="font-bold text-neutral-950 font-mono text-[11px] block">{expiryDate}</span>
                  {batchCode && (
                    <span className="text-neutral-400 font-mono text-[9px] block">Lot: {batchCode}</span>
                  )}
                </div>
              </div>

              {/* Business Address */}
              <div className="text-[9px] text-neutral-500 text-center border-t border-neutral-100 pt-1 leading-tight">
                {businessAddress}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
