"use client";

import React, { useState } from "react";
import { Plus, Trash2, Printer, Download, Sparkles, Scale, Clock, ChefHat, CheckCircle2 } from "lucide-react";

interface Ingredient {
  id: string;
  qty: number;
  unit: string;
  name: string;
}

const MEASUREMENTS = [
  { group: "Metric Units", units: ["Grams (g)", "Kilograms (kg)", "Milliliters (ml)", "Liters (l)", "Pieces"] },
  { group: "Kitchen Measures", units: ["Tablespoons (tbsp)", "Teaspoons (tsp)", "Cups", "Dashes", "Pinches"] },
  { group: "Imperial Units", units: ["Ounces (oz)", "Pounds (lbs)", "Pints (pt)", "Quarts (qt)", "Gallons (gal)"] },
];

export const RecipeCalculatorTool: React.FC<{ templateId?: string; pdfUrl?: string }> = ({ templateId, pdfUrl }) => {
  const [recipeName, setRecipeName] = useState("Artisan Brioche Burger Buns");
  const [prepTime, setPrepTime] = useState("25 mins");
  const [cookTime, setCookTime] = useState("18 mins");
  const [origServings, setOrigServings] = useState<number>(4);
  const [desiredServings, setDesiredServings] = useState<number>(24);
  const [cookingTemp, setCookingTemp] = useState("190°C / 375°F");

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: "1", qty: 500, unit: "Grams (g)", name: "Strong White Bread Flour" },
    { id: "2", qty: 7, unit: "Grams (g)", name: "Fast-Action Dried Yeast" },
    { id: "3", qty: 10, unit: "Grams (g)", name: "Fine Sea Salt" },
    { id: "4", qty: 30, unit: "Grams (g)", name: "Caster Sugar" },
    { id: "5", qty: 150, unit: "Milliliters (ml)", name: "Whole Warm Milk" },
    { id: "6", qty: 3, unit: "Pieces", name: "Free-Range Large Eggs" },
    { id: "7", qty: 180, unit: "Grams (g)", name: "Softened Unsalted Butter" }
  ]);

  const [prepSteps, setPrepSteps] = useState(
    "1. Whisk flour, yeast, salt, and sugar in a standing mixer.\n2. Add milk and eggs; knead at medium speed for 8-10 minutes until elastic.\n3. Gradually incorporate butter until silky dough forms.\n4. Proof 1 hour until doubled, portion, glaze with egg wash and bake at 190°C until golden."
  );

  const factor = origServings > 0 ? desiredServings / origServings : 1;

  const handleAddIngredient = () => {
    setIngredients(prev => [
      ...prev,
      { id: Date.now().toString(), qty: 100, unit: "Grams (g)", name: "" }
    ]);
  };

  const handleRemoveIngredient = (id: string) => {
    setIngredients(prev => prev.filter(ing => ing.id !== id));
  };

  const handleUpdateIngredient = (id: string, field: keyof Ingredient, value: any) => {
    setIngredients(prev =>
      prev.map(ing => (ing.id === id ? { ...ing, [field]: value } : ing))
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Title & Badge */}
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

        <div className="flex items-center gap-2 no-print">
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border border-gray-200"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Recipe Card</span>
          </button>

          {templateId ? (
            <a
              href={`/api/download?id=${templateId}`}
              className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          ) : null}
        </div>
      </div>

      {/* General Recipe Details */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs">
        <div className="sm:col-span-2">
          <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
            Recipe Name
          </label>
          <input
            type="text"
            value={recipeName}
            onChange={e => setRecipeName(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 font-bold text-sm text-gray-900"
          />
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
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 font-semibold"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
            Baking / Cooking Temp
          </label>
          <input
            type="text"
            value={cookingTemp}
            onChange={e => setCookingTemp(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 font-semibold"
          />
        </div>
      </div>

      {/* Yield & Conversion Factor Control */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
          <span className="text-[11px] font-bold font-mono text-gray-500 uppercase">1. Original Recipe Servings</span>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="number"
              min="1"
              max="9999"
              value={origServings}
              onChange={e => setOrigServings(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 text-2xl font-black bg-white border border-gray-300 rounded-xl px-3 py-1 text-gray-900"
            />
            <span className="text-xs text-gray-500 font-semibold">Portions</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
          <span className="text-[11px] font-bold font-mono text-gray-500 uppercase">2. Desired Batch Servings</span>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="number"
              min="1"
              max="9999"
              value={desiredServings}
              onChange={e => setDesiredServings(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 text-2xl font-black bg-white border border-amber-400 rounded-xl px-3 py-1 text-amber-900"
            />
            <span className="text-xs text-amber-700 font-semibold">Portions</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#1D1D1F] text-white flex flex-col justify-between shadow-sm">
          <span className="text-[11px] font-bold font-mono text-amber-400 uppercase">Conversion Multiplier</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">x {factor.toFixed(2)}</span>
            <span className="text-[11px] text-gray-300 font-mono">
              ({desiredServings} ÷ {origServings})
            </span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison: Input Ingredients vs Scaled Recipe */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-gray-900">
            Ingredients &amp; Automatic Resized Yields
          </h3>
          <button
            type="button"
            onClick={handleAddIngredient}
            className="no-print bg-gray-900 hover:bg-black text-white text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Ingredient</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b">Ingredient Name</th>
                <th className="p-3 border-b text-center">Original Qty</th>
                <th className="p-3 border-b">Unit</th>
                <th className="p-3 border-b bg-amber-50/80 text-amber-900 font-bold text-center">
                  Resized Batch Qty (x{factor.toFixed(2)})
                </th>
                <th className="p-3 border-b text-right no-print">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {ingredients.map(ing => {
                const scaledQty = (ing.qty * factor);
                const displayScaled = Number.isInteger(scaledQty)
                  ? scaledQty.toString()
                  : scaledQty.toFixed(scaledQty < 10 ? 2 : 1);

                return (
                  <tr key={ing.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-3">
                      <input
                        type="text"
                        placeholder="e.g. Flour, Sugar, Milk..."
                        value={ing.name}
                        onChange={e => handleUpdateIngredient(ing.id, "name", e.target.value)}
                        className="w-full bg-transparent border-b border-transparent hover:border-gray-300 focus:border-gray-500 py-1 font-semibold text-gray-900 focus:outline-none"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <input
                        type="number"
                        step="any"
                        min="0"
                        value={ing.qty}
                        onChange={e => handleUpdateIngredient(ing.id, "qty", parseFloat(e.target.value) || 0)}
                        className="w-20 text-center bg-gray-50 border border-gray-200 rounded-lg py-1 font-mono font-bold text-gray-800"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={ing.unit}
                        onChange={e => handleUpdateIngredient(ing.id, "unit", e.target.value)}
                        className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-700 focus:outline-none"
                      >
                        {MEASUREMENTS.map(grp => (
                          <optgroup key={grp.group} label={grp.group}>
                            {grp.units.map(u => (
                              <option key={u} value={u}>{u}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </td>
                    <td className="p-3 bg-amber-50/40 text-center font-mono font-black text-amber-950 text-sm">
                      {displayScaled} {ing.unit.split(" ")[0]}
                    </td>
                    <td className="p-3 text-right no-print">
                      <button
                        type="button"
                        onClick={() => handleRemoveIngredient(ing.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                        title="Remove Ingredient"
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
      </div>

      {/* Preparation Steps */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider font-mono">
          Method &amp; Preparation Steps
        </label>
        <textarea
          rows={4}
          value={prepSteps}
          onChange={e => setPrepSteps(e.target.value)}
          placeholder="Step-by-step instructions for chefs and kitchen staff..."
          className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-xs text-gray-800 leading-relaxed font-sans focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Bottom Kitchen Print Stamp */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
        <div>• Saim Dev Commercial Kitchen Tools • Accurate To 2 Decimal Places</div>
        <div>Compliant with UK FSA Standards</div>
      </div>
    </div>
  );
};
