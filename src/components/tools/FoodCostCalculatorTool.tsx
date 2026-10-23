"use client";

import React, { useState } from "react";
import { Plus, Trash2, Printer, Download, DollarSign, Percent, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

interface CostItem {
  id: string;
  name: string;
  qty: number;
  unit: string;
  unitCost: number;
}

export const FoodCostCalculatorTool: React.FC<{ templateId?: string }> = ({ templateId }) => {
  const [recipeName, setRecipeName] = useState("Gourmet Truffle Burger & Fries");
  const [currency, setCurrency] = useState("£");
  const [servings, setServings] = useState<number>(1);
  const [salesPrice, setSalesPrice] = useState<number>(11.50);
  const [targetCostPct, setTargetCostPct] = useState<number>(28);

  const [primaryIngredients, setPrimaryIngredients] = useState<CostItem[]>([
    { id: "1", name: "Aged Chuck & Brisket Patty (200g)", qty: 1, unit: "pc", unitCost: 1.85 },
    { id: "2", name: "Artisan Brioche Bun", qty: 1, unit: "pc", unitCost: 0.45 },
    { id: "3", name: "Smoked Monterey Jack Cheese", qty: 2, unit: "slices", unitCost: 0.28 },
    { id: "4", name: "Skin-on Rustic Fries (Portion)", qty: 1, unit: "portion", unitCost: 0.42 }
  ]);

  const [secondaryIngredients, setSecondaryIngredients] = useState<CostItem[]>([
    { id: "5", name: "Black Truffle Mayo", qty: 30, unit: "ml", unitCost: 0.015 },
    { id: "6", name: "Crispy Shallots & Pickles", qty: 25, unit: "g", unitCost: 0.012 },
    { id: "7", name: "Takeaway Branded Kraft Box", qty: 1, unit: "pc", unitCost: 0.22 }
  ]);

  // Calculations
  const calcSectionSum = (items: CostItem[]) =>
    items.reduce((sum, item) => sum + (item.qty * item.unitCost), 0);

  const primarySum = calcSectionSum(primaryIngredients);
  const secondarySum = calcSectionSum(secondaryIngredients);
  const totalBatchCost = primarySum + secondarySum;
  const portionCost = servings > 0 ? totalBatchCost / servings : totalBatchCost;

  const actualFoodCostPct = salesPrice > 0 ? (portionCost / salesPrice) * 100 : 0;
  const grossProfit = salesPrice - portionCost;
  const grossMarginPct = salesPrice > 0 ? (grossProfit / salesPrice) * 100 : 0;

  // Row handlers
  const handleAddPrimary = () => {
    setPrimaryIngredients(prev => [
      ...prev,
      { id: Date.now().toString(), name: "", qty: 1, unit: "pc", unitCost: 0 }
    ]);
  };

  const handleAddSecondary = () => {
    setSecondaryIngredients(prev => [
      ...prev,
      { id: Date.now().toString(), name: "", qty: 1, unit: "pc", unitCost: 0 }
    ]);
  };

  const updateItem = (
    listSetter: React.Dispatch<React.SetStateAction<CostItem[]>>,
    id: string,
    field: keyof CostItem,
    val: any
  ) => {
    listSetter(prev => prev.map(item => item.id === id ? { ...item, [field]: val } : item));
  };

  const removeItem = (
    listSetter: React.Dispatch<React.SetStateAction<CostItem[]>>,
    id: string
  ) => {
    listSetter(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            Commercial Food Cost &amp; Profit Engine
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
            Commercial Recipe Costing &amp; Margin Calculator
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Calculate portion cost, target margin %, and food cost ratio in real-time.
          </p>
        </div>

        <div className="flex items-center gap-2 no-print">
          <div className="flex items-center bg-gray-100 rounded-xl p-1 border border-gray-200">
            {["£", "$", "€"].map(cur => (
              <button
                key={cur}
                type="button"
                onClick={() => setCurrency(cur)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  currency === cur ? "bg-white text-black shadow-xs" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {cur}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border border-gray-200"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Sheet</span>
          </button>

          {templateId ? (
            <a
              href={`/api/download?id=${templateId}`}
              className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          ) : null}
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">Portion Cost</span>
          <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
            {currency}{portionCost.toFixed(2)}
          </div>
          <span className="text-[10px] text-gray-400 font-mono">Total ingredients per portion</span>
        </div>

        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">Food Cost %</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              actualFoodCostPct <= targetCostPct
                ? "bg-emerald-100 text-emerald-800"
                : "bg-amber-100 text-amber-800"
            }`}>
              Target: {targetCostPct}%
            </span>
          </div>
          <div className={`text-2xl sm:text-3xl font-black mt-1 ${
            actualFoodCostPct <= targetCostPct ? "text-emerald-600" : "text-amber-600"
          }`}>
            {actualFoodCostPct.toFixed(1)}%
          </div>
          <span className="text-[10px] text-gray-400 font-mono">
            {actualFoodCostPct <= targetCostPct ? "Within healthy margin" : "Exceeds target limit"}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">Gross Margin %</span>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1">
            {grossMarginPct.toFixed(1)}%
          </div>
          <span className="text-[10px] text-gray-400 font-mono">Profit margin percentage</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#1D1D1F] text-white">
          <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">Gross Profit / Portion</span>
          <div className="text-2xl sm:text-3xl font-black text-white mt-1">
            {currency}{grossProfit.toFixed(2)}
          </div>
          <span className="text-[10px] text-gray-300 font-mono">
            Selling Price: {currency}{salesPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Control Configuration Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs">
        <div className="sm:col-span-2">
          <label className="block text-[11px] font-bold text-gray-600 mb-1">Recipe / Menu Item</label>
          <input
            type="text"
            value={recipeName}
            onChange={e => setRecipeName(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-bold text-gray-900"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-600 mb-1">Menu Selling Price ({currency})</label>
          <input
            type="number"
            step="0.10"
            min="0"
            value={salesPrice}
            onChange={e => setSalesPrice(Math.max(0, parseFloat(e.target.value) || 0))}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-bold text-gray-900"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-600 mb-1">Target Food Cost %</label>
          <input
            type="number"
            min="1"
            max="100"
            value={targetCostPct}
            onChange={e => setTargetCostPct(Math.max(1, parseInt(e.target.value) || 28))}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-bold text-gray-900"
          />
        </div>
      </div>

      {/* 1. Primary Ingredients Table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
              1. Primary Ingredients &amp; Raw Proteins
            </h3>
            <p className="text-[11px] text-gray-500">Major proteins, bases, and portioned goods</p>
          </div>
          <button
            type="button"
            onClick={handleAddPrimary}
            className="no-print bg-gray-900 hover:bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Row</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b">Product Name</th>
                <th className="p-3 border-b text-center">Qty / Portion</th>
                <th className="p-3 border-b">Unit</th>
                <th className="p-3 border-b">Unit Cost ({currency})</th>
                <th className="p-3 border-b font-bold text-right">Row Total</th>
                <th className="p-3 border-b text-right no-print">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {primaryIngredients.map(item => {
                const total = item.qty * item.unitCost;
                return (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-3">
                      <input
                        type="text"
                        placeholder="Ingredient name..."
                        value={item.name}
                        onChange={e => updateItem(setPrimaryIngredients, item.id, "name", e.target.value)}
                        className="w-full bg-transparent border-b border-transparent hover:border-gray-300 focus:border-gray-500 py-1 font-semibold text-gray-900 focus:outline-none"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <input
                        type="number"
                        step="any"
                        min="0"
                        value={item.qty}
                        onChange={e => updateItem(setPrimaryIngredients, item.id, "qty", parseFloat(e.target.value) || 0)}
                        className="w-20 text-center bg-gray-50 border border-gray-200 rounded-lg py-1 font-mono font-bold text-gray-800"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={item.unit}
                        onChange={e => updateItem(setPrimaryIngredients, item.id, "unit", e.target.value)}
                        className="w-20 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-700"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        step="0.001"
                        min="0"
                        value={item.unitCost}
                        onChange={e => updateItem(setPrimaryIngredients, item.id, "unitCost", parseFloat(e.target.value) || 0)}
                        className="w-24 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-gray-800"
                      />
                    </td>
                    <td className="p-3 text-right font-mono font-bold text-gray-900">
                      {currency}{total.toFixed(2)}
                    </td>
                    <td className="p-3 text-right no-print">
                      <button
                        type="button"
                        onClick={() => removeItem(setPrimaryIngredients, item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
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

      {/* 2. Secondary Ingredients Table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
              2. Secondary Ingredients, Sauces &amp; Packaging
            </h3>
            <p className="text-[11px] text-gray-500">Seasonings, dressings, garnishes, and disposable packaging</p>
          </div>
          <button
            type="button"
            onClick={handleAddSecondary}
            className="no-print bg-gray-900 hover:bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Row</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b">Product Name</th>
                <th className="p-3 border-b text-center">Qty</th>
                <th className="p-3 border-b">Unit</th>
                <th className="p-3 border-b">Unit Cost ({currency})</th>
                <th className="p-3 border-b font-bold text-right">Row Total</th>
                <th className="p-3 border-b text-right no-print">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {secondaryIngredients.map(item => {
                const total = item.qty * item.unitCost;
                return (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-3">
                      <input
                        type="text"
                        placeholder="Packaging, sauce, condiment..."
                        value={item.name}
                        onChange={e => updateItem(setSecondaryIngredients, item.id, "name", e.target.value)}
                        className="w-full bg-transparent border-b border-transparent hover:border-gray-300 focus:border-gray-500 py-1 font-semibold text-gray-900 focus:outline-none"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <input
                        type="number"
                        step="any"
                        min="0"
                        value={item.qty}
                        onChange={e => updateItem(setSecondaryIngredients, item.id, "qty", parseFloat(e.target.value) || 0)}
                        className="w-20 text-center bg-gray-50 border border-gray-200 rounded-lg py-1 font-mono font-bold text-gray-800"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        value={item.unit}
                        onChange={e => updateItem(setSecondaryIngredients, item.id, "unit", e.target.value)}
                        className="w-20 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-700"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        step="0.001"
                        min="0"
                        value={item.unitCost}
                        onChange={e => updateItem(setSecondaryIngredients, item.id, "unitCost", parseFloat(e.target.value) || 0)}
                        className="w-24 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 font-mono font-bold text-gray-800"
                      />
                    </td>
                    <td className="p-3 text-right font-mono font-bold text-gray-900">
                      {currency}{total.toFixed(2)}
                    </td>
                    <td className="p-3 text-right no-print">
                      <button
                        type="button"
                        onClick={() => removeItem(setSecondaryIngredients, item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
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

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
        <div>• Saim Dev Commercial Cost Engine • Unlocked &amp; 100% Free Forever</div>
        <div>Total Recipe Cost: {currency}{totalBatchCost.toFixed(2)}</div>
      </div>
    </div>
  );
};
