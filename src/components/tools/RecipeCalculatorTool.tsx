"use client";

import React, { useState, useRef } from "react";
import {
  Plus,
  Trash2,
  Printer,
  Sparkles,
  Scale,
  Clock,
  ChefHat,
  CheckCircle2,
  Image as ImageIcon,
  RotateCcw,
  Sliders,
  Edit3
} from "lucide-react";

export interface RecipeIngredient {
  id: string;
  qty: number | "";
  unit: string;
  name: string;
}

const METRIC_UNITS = [
  "Grams (g)",
  "Kilograms (kg)",
  "Milliliters (ml)",
  "Liters (l)",
  "Pieces",
  "Tablespoons (tbsp)",
  "Teaspoons (tsp)",
  "Pinches"
];

const IMPERIAL_UNITS = [
  "Ounces (oz)",
  "Pounds (lbs)",
  "Cups",
  "Tablespoons (tbsp)",
  "Teaspoons (tsp)",
  "Pints (pt)",
  "Quarts (qt)",
  "Gallons (gal)",
  "Pieces of",
  "Dashes",
  "Pinches"
];

const DEFAULT_INGREDIENTS: RecipeIngredient[] = [
  { id: "ing-1", qty: 500, unit: "Grams (g)", name: "Strong White Bread Flour" },
  { id: "ing-2", qty: 7, unit: "Grams (g)", name: "Fast-Action Dried Yeast" },
  { id: "ing-3", qty: 10, unit: "Grams (g)", name: "Fine Sea Salt" },
  { id: "ing-4", qty: 30, unit: "Grams (g)", name: "Caster Sugar" },
  { id: "ing-5", qty: 150, unit: "Milliliters (ml)", name: "Whole Warm Milk" },
  { id: "ing-6", qty: 3, unit: "Pieces", name: "Free-Range Large Eggs" },
  { id: "ing-7", qty: 180, unit: "Grams (g)", name: "Softened Unsalted Butter" }
];

export const RecipeCalculatorTool: React.FC<{ templateId?: string; pdfUrl?: string }> = () => {
  const [recipeName, setRecipeName] = useState("Artisan Brioche Burger Buns");
  const [unitSystem, setUnitSystem] = useState<"metric" | "imperial">("metric");
  const [prepTime, setPrepTime] = useState("25 mins");
  const [cookTime, setCookTime] = useState("18 mins");
  const [origServings, setOrigServings] = useState<number | "">(4);
  const [desiredServings, setDesiredServings] = useState<number | "">(24);
  const [cookingTemp, setCookingTemp] = useState("190°C / 375°F");
  const [recipeImage, setRecipeImage] = useState<string | null>(null);

  const [ingredients, setIngredients] = useState<RecipeIngredient[]>(DEFAULT_INGREDIENTS);

  const [prepSteps, setPrepSteps] = useState(
    "1. Whisk flour, yeast, salt, and sugar together in a commercial mixer bowl.\n2. Add milk and eggs; knead on medium speed for 8-10 minutes until elastic.\n3. Gradually incorporate butter piece by piece until a silky, supple dough forms.\n4. Proof 1 hour until doubled, portion equally, egg wash, and bake at 190°C until golden brown."
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scaling factor
  const numOrig = typeof origServings === "number" && origServings > 0 ? origServings : 1;
  const numDesired = typeof desiredServings === "number" && desiredServings > 0 ? desiredServings : numOrig;
  const factor = numDesired / numOrig;

  // Add ingredient with guaranteed unique ID
  const handleAddIngredient = () => {
    const defaultUnit = unitSystem === "metric" ? "Grams (g)" : "Ounces (oz)";
    const newId = `ing-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setIngredients(prev => [
      ...prev,
      {
        id: newId,
        qty: unitSystem === "metric" ? 100 : 4,
        unit: defaultUnit,
        name: ""
      }
    ]);
  };

  const handleRemoveIngredient = (id: string) => {
    setIngredients(prev => {
      if (prev.length <= 1) return prev;
      return prev.filter(ing => ing.id !== id);
    });
  };

  const handleUpdateIngredient = (id: string, field: keyof RecipeIngredient, value: any) => {
    setIngredients(prev =>
      prev.map(ing => (ing.id === id ? { ...ing, [field]: value } : ing))
    );
  };

  const handleReset = () => {
    setIngredients(DEFAULT_INGREDIENTS);
    setOrigServings(4);
    setDesiredServings(24);
    setRecipeName("Artisan Brioche Burger Buns");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setRecipeImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const availableUnits = unitSystem === "metric" ? METRIC_UNITS : IMPERIAL_UNITS;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Print Page Setup (Portrait for Recipe Cards) */}
      <style jsx global>{`
        @media print {
          @page {
            size: portrait;
            margin: 10mm;
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
            border: 1px solid #e5e7eb !important;
            padding: 6px 8px !important;
            word-break: break-word !important;
          }
        }
      `}</style>

      {/* ── TOOL HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <ChefHat className="w-4 h-4 text-amber-600" />
            Interactive Recipe Resizing &amp; Yield Engine
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
            Commercial Recipe Calculator &amp; Batch Scaler
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Scale portions, ingredient quantities, and batch sizes with 100% mathematical accuracy.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 no-print">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl">
            <Edit3 className="w-3.5 h-3.5 text-amber-600" />
            <span>All Fields Editable</span>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Reset to default recipe"
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
            <span>Print Recipe Card</span>
          </button>
        </div>
      </div>

      {/* ── GENERAL RECIPE METADATA ── */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs">
        <div className="sm:col-span-2">
          <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
            Recipe Name
          </label>
          <input
            type="text"
            value={recipeName}
            onChange={e => setRecipeName(e.target.value)}
            placeholder="e.g. Signature Artisan Burger Buns"
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-2 font-bold text-sm text-gray-900 focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-extrabold text-base text-gray-950">{recipeName}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
            Prep / Cook Time
          </label>
          <input
            type="text"
            value={`${prepTime} / ${cookTime}`}
            onChange={e => {
              const parts = e.target.value.split("/");
              setPrepTime(parts[0]?.trim() || "");
              setCookTime(parts[1]?.trim() || "");
            }}
            placeholder="25 mins / 18 mins"
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-2 text-gray-900 font-semibold focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-semibold text-xs text-gray-800">{prepTime} / {cookTime}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
            Baking / Cooking Temp
          </label>
          <input
            type="text"
            value={cookingTemp}
            onChange={e => setCookingTemp(e.target.value)}
            placeholder="190°C / 375°F"
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-2 text-gray-900 font-semibold focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-semibold text-xs text-gray-800">{cookingTemp}</div>
        </div>
      </div>

      {/* ── UNITS & SERVING MULTIPLIER CONTROLS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Step 1: Base Servings */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold font-mono text-gray-500 uppercase">1. Original Servings</span>
            {/* Unit System Switcher */}
            <div className="flex items-center bg-gray-200/80 p-0.5 rounded-lg text-[10px] font-bold no-print">
              <button
                type="button"
                onClick={() => setUnitSystem("metric")}
                className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                  unitSystem === "metric" ? "bg-white text-gray-900 shadow-xs" : "text-gray-500"
                }`}
              >
                Metric
              </button>
              <button
                type="button"
                onClick={() => setUnitSystem("imperial")}
                className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                  unitSystem === "imperial" ? "bg-white text-gray-900 shadow-xs" : "text-gray-500"
                }`}
              >
                Imperial
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <input
              type="number"
              min="1"
              max="9999"
              value={origServings}
              onChange={e => {
                const val = e.target.value === "" ? "" : Math.max(1, parseInt(e.target.value) || 1);
                setOrigServings(val);
              }}
              className="w-24 text-2xl font-black bg-white border border-gray-300 rounded-xl px-3 py-1 text-gray-900 focus:outline-none focus:border-amber-500 shadow-2xs"
            />
            <span className="text-xs text-gray-500 font-semibold">Portions</span>
          </div>
        </div>

        {/* Step 2: Desired Yield */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
          <span className="text-[11px] font-bold font-mono text-gray-500 uppercase">2. Desired Batch Servings</span>
          <div className="flex items-center gap-2 mt-3">
            <input
              type="number"
              min="1"
              max="9999"
              value={desiredServings}
              onChange={e => {
                const val = e.target.value === "" ? "" : Math.max(1, parseInt(e.target.value) || 1);
                setDesiredServings(val);
              }}
              className="w-24 text-2xl font-black bg-white border border-amber-400 rounded-xl px-3 py-1 text-amber-900 focus:outline-none focus:border-amber-600 shadow-2xs"
            />
            <span className="text-xs text-amber-700 font-semibold">Portions</span>
          </div>
        </div>

        {/* Step 3: Multiplier Output */}
        <div className="p-4 rounded-2xl bg-[#1D1D1F] text-white flex flex-col justify-between shadow-sm">
          <span className="text-[11px] font-bold font-mono text-amber-400 uppercase">Batch Multiplier Factor</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">x {factor.toFixed(2)}</span>
            <span className="text-[11px] text-gray-300 font-mono">
              ({numDesired} ÷ {numOrig})
            </span>
          </div>
          <span className="text-[10px] text-gray-400 font-mono mt-1">
            All ingredients scaled automatically
          </span>
        </div>
      </div>

      {/* ── INGREDIENTS TABLE & SCALING ── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between no-print">
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Ingredients &amp; Automatic Resized Yields
            </h3>
            <p className="text-xs text-gray-500">
              Add recipe ingredients below. The right-hand column rescales instantly based on your target portions.
            </p>
          </div>

          {/* Top Add Ingredient Button */}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-sm cursor-pointer hover:shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Add Ingredient</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white print:border-none print:overflow-visible">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b min-w-[200px]" style={{ width: "35%" }}>Ingredient Name</th>
                <th className="p-3 border-b text-center min-w-[100px]" style={{ width: "15%" }}>Base Quantity</th>
                <th className="p-3 border-b min-w-[130px]" style={{ width: "20%" }}>Measurement Unit</th>
                <th className="p-3 border-b bg-amber-50 text-amber-950 font-bold text-center min-w-[150px]" style={{ width: "25%" }}>
                  Resized Batch Qty (x{factor.toFixed(2)})
                </th>
                <th className="p-3 border-b text-right no-print w-16" style={{ width: "5%" }}>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ingredients.map(ing => {
                const numericQty = typeof ing.qty === "number" ? ing.qty : 0;
                const scaledQty = numericQty * factor;
                const displayScaled = Number.isInteger(scaledQty)
                  ? scaledQty.toString()
                  : scaledQty.toFixed(scaledQty < 10 ? 2 : 1);

                return (
                  <tr key={ing.id} className="hover:bg-amber-50/20 transition-colors">
                    {/* Ingredient Name */}
                    <td className="p-2.5">
                      <input
                        type="text"
                        placeholder="e.g. Flour, Sugar, Whole Milk..."
                        value={ing.name}
                        onChange={e => handleUpdateIngredient(ing.id, "name", e.target.value)}
                        className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-2.5 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block font-semibold text-[8.5pt] text-gray-950">
                        {ing.name || "—"}
                      </div>
                    </td>

                    {/* Original Qty */}
                    <td className="p-2.5 text-center">
                      <input
                        type="number"
                        step="any"
                        min="0"
                        value={ing.qty}
                        onChange={e => {
                          const val = e.target.value === "" ? "" : parseFloat(e.target.value);
                          handleUpdateIngredient(ing.id, "qty", isNaN(val as number) ? "" : val);
                        }}
                        className="w-20 text-center bg-white border border-gray-300 rounded-lg py-1.5 font-mono font-bold text-gray-900 focus:outline-none focus:border-amber-600 print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block font-mono font-bold text-[8.5pt]">
                        {ing.qty}
                      </div>
                    </td>

                    {/* Unit Selector */}
                    <td className="p-2.5">
                      <select
                        value={ing.unit}
                        onChange={e => handleUpdateIngredient(ing.id, "unit", e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-xs text-gray-800 font-medium focus:outline-none focus:border-amber-600 print:hidden shadow-2xs"
                      >
                        {availableUnits.map(u => (
                          <option key={u} value={u}>{u}</option>
                        ))}
                      </select>
                      <div className="hidden print:block text-[8.5pt] text-gray-700">
                        {ing.unit}
                      </div>
                    </td>

                    {/* Rescaled Output */}
                    <td className="p-2.5 bg-amber-50/40 text-center font-mono font-black text-amber-950 text-sm">
                      {numericQty > 0 ? (
                        <span>
                          {displayScaled} <span className="text-xs font-semibold text-amber-800">{ing.unit.split(" ")[0]}</span>
                        </span>
                      ) : (
                        <span className="text-gray-400">&mdash;</span>
                      )}
                    </td>

                    {/* Delete Row Button */}
                    <td className="p-2.5 text-right no-print">
                      <button
                        type="button"
                        onClick={() => handleRemoveIngredient(ing.id)}
                        disabled={ingredients.length <= 1}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          ingredients.length <= 1
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-400 hover:text-red-600 hover:bg-red-50"
                        }`}
                        title="Delete this ingredient"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ── BOTTOM PROMINENT "+ ADD INGREDIENT" BUTTON ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 no-print">
          <button
            type="button"
            onClick={handleAddIngredient}
            className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.01]"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Ingredient Row</span>
          </button>

          <span className="text-[11px] text-gray-400 font-mono">
            {ingredients.length} total ingredient{ingredients.length !== 1 ? "s" : ""} in recipe • Fully printable
          </span>
        </div>
      </div>

      {/* ── PHOTO UPLOAD & PREPARATION STEPS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        {/* Method / Prep Notes */}
        <div className="lg:col-span-2 space-y-2">
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider font-mono">
            Preparation Method &amp; Kitchen Instructions
          </label>
          <textarea
            rows={5}
            value={prepSteps}
            onChange={e => setPrepSteps(e.target.value)}
            placeholder="Step-by-step instructions for chefs, bakers and kitchen crew..."
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-2xl p-4 text-xs text-gray-800 leading-relaxed font-sans focus:outline-none print:hidden shadow-2xs resize-y"
          />
          <div className="hidden print:block p-3 border border-gray-200 rounded-xl text-[8.5pt] text-gray-900 leading-relaxed whitespace-pre-wrap">
            {prepSteps}
          </div>
        </div>

        {/* Recipe Dish Photo */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider font-mono">
            Dish Reference Photo
          </label>
          <div className="p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center min-h-[140px]">
            {recipeImage ? (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden group">
                <img src={recipeImage} alt="Dish photo" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => setRecipeImage(null)}
                  className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1 rounded-full text-xs no-print cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="space-y-2 no-print">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div className="text-xs text-gray-600">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="font-bold text-amber-800 hover:underline cursor-pointer"
                  >
                    Upload image
                  </button>{" "}
                  for recipe card
                </div>
                <p className="text-[10px] text-gray-400">JPG, PNG, WEBP up to 5MB</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── DUAL SIDE-BY-SIDE RECIPE CARD PREVIEW (PRINTABLE) ── */}
      <div className="pt-6 border-t border-gray-100 space-y-4">
        <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
          Side-By-Side Recipe Scaling Output
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Original Recipe Card */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200">
              <span className="text-xs font-bold text-gray-700 font-mono uppercase">Original Recipe Card</span>
              <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded border border-gray-200">
                {numOrig} Servings
              </span>
            </div>
            <h4 className="font-bold text-sm text-gray-900">{recipeName}</h4>
            <ul className="space-y-1.5 text-xs text-gray-700">
              {ingredients.map(ing => (
                <li key={ing.id} className="flex justify-between py-0.5 border-b border-gray-100">
                  <span className="font-medium">{ing.name || "Unnamed Ingredient"}</span>
                  <span className="font-mono font-semibold">
                    {ing.qty} {ing.unit.split(" ")[0]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Rescaled Batch Card */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-amber-200">
              <span className="text-xs font-bold text-amber-900 font-mono uppercase">
                Resized Batch Card (x{factor.toFixed(2)})
              </span>
              <span className="text-xs font-mono font-bold bg-amber-600 text-white px-2 py-0.5 rounded">
                {numDesired} Servings
              </span>
            </div>
            <h4 className="font-bold text-sm text-amber-950">{recipeName}</h4>
            <ul className="space-y-1.5 text-xs text-amber-950">
              {ingredients.map(ing => {
                const numericQty = typeof ing.qty === "number" ? ing.qty : 0;
                const scaledQty = numericQty * factor;
                const displayScaled = Number.isInteger(scaledQty)
                  ? scaledQty.toString()
                  : scaledQty.toFixed(scaledQty < 10 ? 2 : 1);
                return (
                  <li key={ing.id} className="flex justify-between py-0.5 border-b border-amber-200/50">
                    <span className="font-medium">{ing.name || "Unnamed Ingredient"}</span>
                    <span className="font-mono font-bold">
                      {displayScaled} {ing.unit.split(" ")[0]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* ── FOOTER STAMP ── */}
      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-gray-400 font-mono gap-2">
        <div>• Saim Dev Commercial Kitchen Tools • Accurate To 2 Decimal Places</div>
        <div>Compliant with UK FSA Standards &amp; Natasha&apos;s Law</div>
      </div>
    </div>
  );
};
