"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Trash2,
  Printer,
  DollarSign,
  Percent,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  Scale,
  ChefHat,
  Edit3,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Info
} from "lucide-react";

export interface CostItem {
  id: string;
  name: string;
  qty: number | "";
  unit: string;
  unitCost: number | "";
}

const DEFAULT_PRIMARY: CostItem[] = [
  { id: "p-1", name: "Aged Chuck & Brisket Patty (200g)", qty: 1, unit: "pc", unitCost: 1.85 },
  { id: "p-2", name: "Artisan Brioche Bun", qty: 1, unit: "pc", unitCost: 0.45 },
  { id: "p-3", name: "Smoked Monterey Jack Cheese", qty: 2, unit: "slices", unitCost: 0.28 },
  { id: "p-4", name: "Skin-on Rustic Fries (Portion)", qty: 1, unit: "portion", unitCost: 0.42 }
];

const DEFAULT_SECONDARY: CostItem[] = [
  { id: "s-1", name: "Black Truffle Mayo Dressing", qty: 30, unit: "ml", unitCost: 0.015 },
  { id: "s-2", name: "Crispy Shallots & Pickles", qty: 25, unit: "g", unitCost: 0.012 },
  { id: "s-3", name: "Takeaway Branded Kraft Box", qty: 1, unit: "pc", unitCost: 0.22 }
];

export const FoodCostCalculatorTool: React.FC<{ templateId?: string }> = () => {
  const [recipeName, setRecipeName] = useState("Gourmet Truffle Burger & Fries");
  const [currency, setCurrency] = useState("£");
  const [servings, setServings] = useState<number | "">(1);
  const [salesPrice, setSalesPrice] = useState<number | "">(11.50);
  const [targetCostPct, setTargetCostPct] = useState<number | "">(28);

  // UK Specific VAT & Delivery App States
  const [vatIncluded, setVatIncluded] = useState(true);
  const [showDeliveryCalc, setShowDeliveryCalc] = useState(true);
  const [deliveryPlatform, setDeliveryPlatform] = useState<"justeat" | "deliveroo" | "ubereats" | "custom">("deliveroo");
  const [customCommissionPct, setCustomCommissionPct] = useState<number | "">(30);

  const [primaryIngredients, setPrimaryIngredients] = useState<CostItem[]>(DEFAULT_PRIMARY);
  const [secondaryIngredients, setSecondaryIngredients] = useState<CostItem[]>(DEFAULT_SECONDARY);

  const [prepNotes, setPrepNotes] = useState(
    "1. Sear beef patty on flat-top at 220°C for 3 mins each side until internal core temp reaches 75°C.\n2. Melt Monterey Jack cheese under cloche.\n3. Toast brioche bun with clarified butter.\n4. Assemble with truffle mayo base, patty, crispy shallots, pickles, and pack in ventilated kraft box with hot fries."
  );

  // Calculations
  const calcSectionSum = (items: CostItem[]) =>
    items.reduce((sum, item) => {
      const q = typeof item.qty === "number" ? item.qty : 0;
      const c = typeof item.unitCost === "number" ? item.unitCost : 0;
      return sum + (q * c);
    }, 0);

  const primarySum = calcSectionSum(primaryIngredients);
  const secondarySum = calcSectionSum(secondaryIngredients);
  const totalBatchCost = primarySum + secondarySum;

  const numServings = typeof servings === "number" && servings > 0 ? servings : 1;
  const numSalesPrice = typeof salesPrice === "number" && salesPrice > 0 ? salesPrice : 0;
  const numTargetCostPct = typeof targetCostPct === "number" && targetCostPct > 0 ? targetCostPct : 28;

  const portionCost = numServings > 0 ? totalBatchCost / numServings : totalBatchCost;

  // UK VAT Stripping Logic (standard UK restaurant & hot takeaway rate = 20%)
  const isUkVatActive = currency === "£" && vatIncluded;
  const netSalesPrice = isUkVatActive && numSalesPrice > 0 ? numSalesPrice / 1.20 : numSalesPrice;
  const vatAmount = isUkVatActive ? numSalesPrice - netSalesPrice : 0;

  // Food cost and gross margin calculated against TRUE net revenue
  const actualFoodCostPct = netSalesPrice > 0 ? (portionCost / netSalesPrice) * 100 : 0;
  const grossProfit = netSalesPrice - portionCost;
  const grossMarginPct = netSalesPrice > 0 ? (grossProfit / netSalesPrice) * 100 : 0;
  
  // Recommended selling price to achieve target food cost percentage
  const recommendedNetPrice = numTargetCostPct > 0 ? portionCost / (numTargetCostPct / 100) : 0;
  const recommendedSellingPrice = isUkVatActive ? recommendedNetPrice * 1.20 : recommendedNetPrice;

  // Third-Party Delivery Platform Commission Analysis
  const getCommissionRate = () => {
    switch (deliveryPlatform) {
      case "deliveroo":
        return 32;
      case "justeat":
        return 30;
      case "ubereats":
        return 30;
      case "custom":
        return typeof customCommissionPct === "number" ? customCommissionPct : 30;
      default:
        return 30;
    }
  };

  const deliveryCommissionRate = getCommissionRate();
  // App takes commission from the gross customer order price
  const deliveryCommissionTaken = (numSalesPrice * deliveryCommissionRate) / 100;
  // Net money received by takeaway after delivery app fee and VAT
  const netRevenueAfterDelivery = netSalesPrice - deliveryCommissionTaken;
  const profitAfterDelivery = netRevenueAfterDelivery - portionCost;
  const marginPctAfterDelivery = netSalesPrice > 0 ? (profitAfterDelivery / netSalesPrice) * 100 : 0;

  // Recommended price on delivery apps to protect the same cash profit (£) as in-store:
  // We need Net_after_delivery - portionCost = grossProfit
  // (Price / 1.20) - Price * (comm / 100) = portionCost + grossProfit
  // Price * (1/1.20 - comm/100) = netSalesPrice
  const factor = isUkVatActive ? (1 / 1.20 - deliveryCommissionRate / 100) : (1 - deliveryCommissionRate / 100);
  const recommendedDeliveryMenuPrice = factor > 0 ? netSalesPrice / factor : numSalesPrice * 1.35;

  // Handlers
  const handleAddPrimary = () => {
    const newId = `p-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setPrimaryIngredients(prev => [
      ...prev,
      { id: newId, name: "", qty: 1, unit: "pc", unitCost: "" }
    ]);
  };

  const handleAddSecondary = () => {
    const newId = `s-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setSecondaryIngredients(prev => [
      ...prev,
      { id: newId, name: "", qty: 1, unit: "g", unitCost: "" }
    ]);
  };

  const updateItem = (
    listSetter: React.Dispatch<React.SetStateAction<CostItem[]>>,
    id: string,
    field: keyof CostItem,
    val: any
  ) => {
    listSetter(prev => prev.map(item => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const removeItem = (
    listSetter: React.Dispatch<React.SetStateAction<CostItem[]>>,
    id: string
  ) => {
    listSetter(prev => {
      if (prev.length <= 1) return prev;
      return prev.filter(item => item.id !== id);
    });
  };

  const exportToCsv = () => {
    const headers = ["Section", "Ingredient / Item Name", "Quantity", "Unit", "Unit Cost", "Total Line Cost"];
    const rows = [
      headers,
      ...primaryIngredients.map(item => [
        "Primary Component",
        item.name,
        typeof item.qty === "number" ? item.qty : 0,
        item.unit,
        typeof item.unitCost === "number" ? item.unitCost.toFixed(3) : "0.000",
        (typeof item.qty === "number" && typeof item.unitCost === "number" ? item.qty * item.unitCost : 0).toFixed(2)
      ]),
      ...secondaryIngredients.map(item => [
        "Seasoning / Packaging",
        item.name,
        typeof item.qty === "number" ? item.qty : 0,
        item.unit,
        typeof item.unitCost === "number" ? item.unitCost.toFixed(3) : "0.000",
        (typeof item.qty === "number" && typeof item.unitCost === "number" ? item.qty * item.unitCost : 0).toFixed(2)
      ]),
      [],
      ["Financial Summary", "Metric", "Calculated Value"],
      ["Summary", "Total Batch Cost", (totalBatchCost).toFixed(2)],
      ["Summary", "Portions / Servings", numServings],
      ["Summary", "Portion Plate Cost", (portionCost).toFixed(2)],
      ["Summary", "Gross Customer Menu Price", (numSalesPrice).toFixed(2)],
      ["Summary", "UK 20% VAT Deducted", isUkVatActive ? (vatAmount).toFixed(2) : "0.00"],
      ["Summary", "Net Kitchen Revenue (ex. VAT)", (netSalesPrice).toFixed(2)],
      ["Summary", "Actual Food Cost % (Net)", `${actualFoodCostPct.toFixed(1)}%`],
      ["Summary", "Gross Profit (In-Store)", (grossProfit).toFixed(2)],
      ["Summary", "Gross Profit Margin (In-Store)", `${grossMarginPct.toFixed(1)}%`],
      ["Summary", `Delivery Fee (${deliveryCommissionRate}%)`, (deliveryCommissionTaken).toFixed(2)],
      ["Summary", "Profit Left on Delivery App", (profitAfterDelivery).toFixed(2)],
      ["Summary", "Recommended Delivery Menu Price", (recommendedDeliveryMenuPrice).toFixed(2)],
      ["Summary", "Recommended In-Store Price", (recommendedSellingPrice).toFixed(2)]
    ];

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${recipeName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-costing-sheet.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setPrimaryIngredients(DEFAULT_PRIMARY);
    setSecondaryIngredients(DEFAULT_SECONDARY);
    setRecipeName("Gourmet Truffle Burger & Fries");
    setSalesPrice(11.50);
    setTargetCostPct(28);
    setServings(1);
    setVatIncluded(true);
    setDeliveryPlatform("deliveroo");
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Print Page Setup (Portrait for Costing Sheets) */}
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
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            Commercial Food Cost &amp; Profit Engine
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
            Commercial Recipe Costing &amp; Margin Calculator
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Portion costs, true gross profit margins, UK 20% VAT stripping, and delivery app commission protection.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 no-print">
          {/* Currency Switcher */}
          <div className="flex items-center bg-gray-100 rounded-xl p-1 border border-gray-200">
            {["£", "$", "€"].map(cur => (
              <button
                key={cur}
                type="button"
                onClick={() => setCurrency(cur)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === cur ? "bg-white text-black shadow-xs" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {cur}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl">
            <Edit3 className="w-3.5 h-3.5 text-emerald-600" />
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
            onClick={exportToCsv}
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow cursor-pointer hover:scale-[1.02]"
            title="Download editable CSV spreadsheet for Excel or Google Sheets"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-200" />
            <span>Excel / CSV</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.02]"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>Print Sheet</span>
          </button>
        </div>
      </div>

      {/* ── KPI METRICS CARDS ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Portion Cost */}
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">Portion Cost</span>
          <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
            {currency}{portionCost.toFixed(2)}
          </div>
          <span className="text-[10px] text-gray-400 font-mono">Total ingredients per portion</span>
        </div>

        {/* Metric 2: Food Cost % */}
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">Food Cost %</span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                actualFoodCostPct <= numTargetCostPct
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              Target: {numTargetCostPct}%
            </span>
          </div>
          <div
            className={`text-2xl sm:text-3xl font-black mt-1 ${
              actualFoodCostPct <= numTargetCostPct ? "text-emerald-600" : "text-amber-600"
            }`}
          >
            {actualFoodCostPct.toFixed(1)}%
          </div>
          <span className="text-[10px] text-gray-400 font-mono">
            {isUkVatActive ? "Calculated on Net (ex. VAT)" : "Calculated on Gross Price"}
          </span>
        </div>

        {/* Metric 3: Gross Margin % */}
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">Gross Margin %</span>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1">
            {grossMarginPct.toFixed(1)}%
          </div>
          <span className="text-[10px] text-gray-400 font-mono">
            Target Price: {currency}{recommendedSellingPrice.toFixed(2)}
          </span>
        </div>

        {/* Metric 4: Gross Profit */}
        <div className="p-5 rounded-2xl bg-[#1D1D1F] text-white">
          <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">Gross Profit / Portion</span>
          <div className="text-2xl sm:text-3xl font-black text-white mt-1">
            {currency}{grossProfit.toFixed(2)}
          </div>
          <span className="text-[10px] text-gray-300 font-mono">
            Net Revenue: {currency}{netSalesPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* ── UK VAT STRIPPING CALLOUT & TOGGLE ── */}
      {currency === "£" && (
        <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/90 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-blue-950 block">UK 20% VAT Commercial Stripping Mode</span>
              <p className="text-blue-800 text-[11px] leading-relaxed">
                Hot takeaway food and dine-in sales incur 20% standard VAT. Customer price of {currency}{numSalesPrice.toFixed(2)} includes {currency}{vatAmount.toFixed(2)} for HMRC. Net revenue is {currency}{netSalesPrice.toFixed(2)}.
              </p>
            </div>
          </div>

          <label className="inline-flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-blue-200 shadow-2xs shrink-0 self-start sm:self-auto">
            <input
              type="checkbox"
              checked={vatIncluded}
              onChange={e => setVatIncluded(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
            />
            <span className="text-xs font-bold text-gray-800">Selling Price Includes 20% VAT</span>
          </label>
        </div>
      )}

      {/* ── CONTROL CONFIGURATION BAR ── */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs">
        <div className="sm:col-span-2">
          <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Recipe / Menu Item</label>
          <input
            type="text"
            value={recipeName}
            onChange={e => setRecipeName(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-emerald-600 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-bold text-sm text-gray-950">{recipeName}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
            Menu Selling Price ({currency}) {isUkVatActive && <span className="text-gray-400 font-normal">(inc. VAT)</span>}
          </label>
          <input
            type="number"
            step="0.10"
            min="0"
            value={salesPrice}
            onChange={e => {
              const val = e.target.value === "" ? "" : Math.max(0, parseFloat(e.target.value) || 0);
              setSalesPrice(val);
            }}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-emerald-600 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-bold text-xs text-gray-900">{currency}{numSalesPrice.toFixed(2)}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Target Food Cost %</label>
          <input
            type="number"
            min="1"
            max="100"
            value={targetCostPct}
            onChange={e => {
              const val = e.target.value === "" ? "" : Math.max(1, parseInt(e.target.value) || 28);
              setTargetCostPct(val);
            }}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-emerald-600 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-bold text-xs text-gray-900">{numTargetCostPct}%</div>
        </div>
      </div>

      {/* ── THIRD-PARTY DELIVERY APP MARGIN BUFFER (JUST EAT / DELIVEROO / UBER EATS) ── */}
      <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-4 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-amber-700" />
            <div>
              <h3 className="font-bold text-sm text-amber-950">
                Delivery App Commission Buffer (Just Eat, Deliveroo, Uber Eats)
              </h3>
              <p className="text-xs text-amber-800">
                Calculate real takeaway profit after third-party 25%–34% commission fees.
              </p>
            </div>
          </div>

          {/* Platform selector */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => setDeliveryPlatform("deliveroo")}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                deliveryPlatform === "deliveroo"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-amber-200"
              }`}
            >
              Deliveroo (32%)
            </button>
            <button
              type="button"
              onClick={() => setDeliveryPlatform("justeat")}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                deliveryPlatform === "justeat"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-amber-200"
              }`}
            >
              Just Eat (30%)
            </button>
            <button
              type="button"
              onClick={() => setDeliveryPlatform("ubereats")}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                deliveryPlatform === "ubereats"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-amber-200"
              }`}
            >
              Uber Eats (30%)
            </button>
            <button
              type="button"
              onClick={() => setDeliveryPlatform("custom")}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                deliveryPlatform === "custom"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-amber-200"
              }`}
            >
              Custom %
            </button>
          </div>
        </div>

        {deliveryPlatform === "custom" && (
          <div className="flex items-center gap-2 max-w-xs text-xs pt-1">
            <label className="font-bold text-gray-700">Custom Commission %:</label>
            <input
              type="number"
              min="0"
              max="50"
              value={customCommissionPct}
              onChange={e => setCustomCommissionPct(e.target.value === "" ? "" : parseFloat(e.target.value) || 0)}
              className="w-20 bg-white border border-gray-300 rounded-lg px-2 py-1 font-mono font-bold"
            />
          </div>
        )}

        {/* Side-by-side comparison cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Card 1: In-Store Cash Profit */}
          <div className="p-3.5 bg-white rounded-xl border border-amber-200/60 shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold block">In-Store / Direct Sale</span>
            <div className="text-lg font-extrabold text-emerald-700 mt-1">
              +{currency}{grossProfit.toFixed(2)} Profit
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Zero commission fee paid to aggregators.
            </p>
          </div>

          {/* Card 2: Sold on Delivery App at Same Price */}
          <div className="p-3.5 bg-white rounded-xl border border-red-200 shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-red-600 font-bold block">If Sold on App at Same Price</span>
            <div className="text-lg font-extrabold text-red-600 mt-1">
              {currency}{profitAfterDelivery.toFixed(2)} Profit
            </div>
            <p className="text-[11px] text-red-700 mt-0.5">
              App takes -{currency}{deliveryCommissionTaken.toFixed(2)} ({deliveryCommissionRate}% fee). Profit drops by {grossProfit > 0 ? (((grossProfit - profitAfterDelivery) / grossProfit) * 100).toFixed(0) : 0}%.
            </p>
          </div>

          {/* Card 3: Recommended Delivery Menu Price */}
          <div className="p-3.5 bg-[#1D1D1F] text-white rounded-xl shadow-2xs">
            <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">Recommended App Menu Price</span>
            <div className="text-lg font-extrabold text-amber-300 mt-1">
              {currency}{recommendedDeliveryMenuPrice.toFixed(2)}
            </div>
            <p className="text-[11px] text-gray-300 mt-0.5">
              Markup required on delivery app to keep your full {currency}{grossProfit.toFixed(2)} in-store margin.
            </p>
          </div>
        </div>

        {/* High-Converting Studio Callout */}
        <div className="p-3.5 bg-white/90 rounded-xl border border-amber-300/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <span className="font-bold text-gray-900 block">
              💡 Stop paying 30% aggregator commissions every month
            </span>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              Saim Dev designs custom online ordering websites for UK takeaways with 0% commission, direct card payments, and instant kitchen order printing.
            </p>
          </div>

          <Link
            href="/takeaway-web-design"
            className="inline-flex items-center gap-1.5 font-bold text-xs bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl transition-all shadow-xs shrink-0 self-start sm:self-auto"
          >
            <span>See 0% Commission Takeaway Sites</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ── 1. PRIMARY INGREDIENTS TABLE ── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between no-print">
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
              1. Primary Ingredients &amp; Raw Proteins
            </h3>
            <p className="text-[11px] text-gray-500">Major proteins, doughs, buns, and main components</p>
          </div>

          <button
            type="button"
            onClick={handleAddPrimary}
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Ingredient</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white print:border-none print:overflow-visible">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b min-w-[200px]" style={{ width: "40%" }}>Product / Ingredient Name</th>
                <th className="p-3 border-b text-center min-w-[100px]" style={{ width: "15%" }}>Qty / Portion</th>
                <th className="p-3 border-b min-w-[80px]" style={{ width: "15%" }}>Unit</th>
                <th className="p-3 border-b min-w-[120px]" style={{ width: "15%" }}>Unit Cost ({currency})</th>
                <th className="p-3 border-b font-bold text-right min-w-[100px]" style={{ width: "10%" }}>Row Total</th>
                <th className="p-3 border-b text-right no-print w-16" style={{ width: "5%" }}>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {primaryIngredients.map(item => {
                const numericQty = typeof item.qty === "number" ? item.qty : 0;
                const numericCost = typeof item.unitCost === "number" ? item.unitCost : 0;
                const total = numericQty * numericCost;
                return (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-2.5">
                      <input
                        type="text"
                        placeholder="Ingredient name..."
                        value={item.name}
                        onChange={e => updateItem(setPrimaryIngredients, item.id, "name", e.target.value)}
                        className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-emerald-600 rounded-lg px-2.5 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block font-semibold text-[8.5pt] text-gray-950">
                        {item.name || "—"}
                      </div>
                    </td>
                    <td className="p-2.5 text-center">
                      <input
                        type="number"
                        step="any"
                        min="0"
                        value={item.qty}
                        onChange={e => {
                          const val = e.target.value === "" ? "" : parseFloat(e.target.value);
                          updateItem(setPrimaryIngredients, item.id, "qty", isNaN(val as number) ? "" : val);
                        }}
                        className="w-20 text-center bg-white border border-gray-300 rounded-lg py-1.5 font-mono font-bold text-gray-800 focus:outline-none focus:border-emerald-600 print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block font-mono text-[8.5pt]">
                        {item.qty}
                      </div>
                    </td>
                    <td className="p-2.5">
                      <input
                        type="text"
                        value={item.unit}
                        onChange={e => updateItem(setPrimaryIngredients, item.id, "unit", e.target.value)}
                        placeholder="pc, portion, kg"
                        className="w-20 bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:border-emerald-600 print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block text-[8.5pt] text-gray-700">
                        {item.unit}
                      </div>
                    </td>
                    <td className="p-2.5">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={item.unitCost}
                        onChange={e => {
                          const val = e.target.value === "" ? "" : parseFloat(e.target.value);
                          updateItem(setPrimaryIngredients, item.id, "unitCost", isNaN(val as number) ? "" : val);
                        }}
                        className="w-24 bg-white border border-gray-300 rounded-lg px-2 py-1.5 font-mono font-bold text-gray-800 focus:outline-none focus:border-emerald-600 print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block font-mono text-[8.5pt]">
                        {currency}{typeof item.unitCost === "number" ? item.unitCost.toFixed(2) : "0.00"}
                      </div>
                    </td>
                    <td className="p-2.5 text-right font-mono font-bold text-gray-900">
                      {currency}{total.toFixed(2)}
                    </td>
                    <td className="p-2.5 text-right no-print">
                      <button
                        type="button"
                        onClick={() => removeItem(setPrimaryIngredients, item.id)}
                        disabled={primaryIngredients.length <= 1}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          primaryIngredients.length <= 1
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-400 hover:text-red-600 hover:bg-red-50"
                        }`}
                        title="Remove ingredient"
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

        {/* Bottom Add Primary Ingredient Button */}
        <div className="flex items-center justify-between no-print pt-1">
          <button
            type="button"
            onClick={handleAddPrimary}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow cursor-pointer hover:scale-[1.01]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Primary Component</span>
          </button>
          <span className="text-xs font-mono font-bold text-gray-600">
            Subtotal: {currency}{primarySum.toFixed(2)}
          </span>
        </div>
      </div>

      {/* ── 2. SECONDARY INGREDIENTS & PACKAGING TABLE ── */}
      <div className="space-y-3 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between no-print">
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
              2. Sauces, Seasonings, Garnishes &amp; Takeaway Packaging
            </h3>
            <p className="text-[11px] text-gray-500">Condiments, oils, bags, boxes, containers, and napkins</p>
          </div>

          <button
            type="button"
            onClick={handleAddSecondary}
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Item</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white print:border-none print:overflow-visible">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b min-w-[200px]" style={{ width: "40%" }}>Product / Packaging Name</th>
                <th className="p-3 border-b text-center min-w-[100px]" style={{ width: "15%" }}>Qty</th>
                <th className="p-3 border-b min-w-[80px]" style={{ width: "15%" }}>Unit</th>
                <th className="p-3 border-b min-w-[120px]" style={{ width: "15%" }}>Unit Cost ({currency})</th>
                <th className="p-3 border-b font-bold text-right min-w-[100px]" style={{ width: "10%" }}>Row Total</th>
                <th className="p-3 border-b text-right no-print w-16" style={{ width: "5%" }}>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {secondaryIngredients.map(item => {
                const numericQty = typeof item.qty === "number" ? item.qty : 0;
                const numericCost = typeof item.unitCost === "number" ? item.unitCost : 0;
                const total = numericQty * numericCost;
                return (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-2.5">
                      <input
                        type="text"
                        placeholder="Packaging, sauce, condiment..."
                        value={item.name}
                        onChange={e => updateItem(setSecondaryIngredients, item.id, "name", e.target.value)}
                        className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-emerald-600 rounded-lg px-2.5 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block font-semibold text-[8.5pt] text-gray-950">
                        {item.name || "—"}
                      </div>
                    </td>
                    <td className="p-2.5 text-center">
                      <input
                        type="number"
                        step="any"
                        min="0"
                        value={item.qty}
                        onChange={e => {
                          const val = e.target.value === "" ? "" : parseFloat(e.target.value);
                          updateItem(setSecondaryIngredients, item.id, "qty", isNaN(val as number) ? "" : val);
                        }}
                        className="w-20 text-center bg-white border border-gray-300 rounded-lg py-1.5 font-mono font-bold text-gray-800 focus:outline-none focus:border-emerald-600 print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block font-mono text-[8.5pt]">
                        {item.qty}
                      </div>
                    </td>
                    <td className="p-2.5">
                      <input
                        type="text"
                        value={item.unit}
                        onChange={e => updateItem(setSecondaryIngredients, item.id, "unit", e.target.value)}
                        placeholder="ml, g, pc"
                        className="w-20 bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-xs text-gray-700 focus:outline-none focus:border-emerald-600 print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block text-[8.5pt] text-gray-700">
                        {item.unit}
                      </div>
                    </td>
                    <td className="p-2.5">
                      <input
                        type="number"
                        step="0.001"
                        min="0"
                        value={item.unitCost}
                        onChange={e => {
                          const val = e.target.value === "" ? "" : parseFloat(e.target.value);
                          updateItem(setSecondaryIngredients, item.id, "unitCost", isNaN(val as number) ? "" : val);
                        }}
                        className="w-24 bg-white border border-gray-300 rounded-lg px-2 py-1.5 font-mono font-bold text-gray-800 focus:outline-none focus:border-emerald-600 print:hidden shadow-2xs"
                      />
                      <div className="hidden print:block font-mono text-[8.5pt]">
                        {currency}{typeof item.unitCost === "number" ? item.unitCost.toFixed(2) : "0.00"}
                      </div>
                    </td>
                    <td className="p-2.5 text-right font-mono font-bold text-gray-900">
                      {currency}{total.toFixed(2)}
                    </td>
                    <td className="p-2.5 text-right no-print">
                      <button
                        type="button"
                        onClick={() => removeItem(setSecondaryIngredients, item.id)}
                        disabled={secondaryIngredients.length <= 1}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          secondaryIngredients.length <= 1
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-400 hover:text-red-600 hover:bg-red-50"
                        }`}
                        title="Remove secondary ingredient"
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

        {/* Bottom Add Secondary Ingredient Button */}
        <div className="flex items-center justify-between no-print pt-1">
          <button
            type="button"
            onClick={handleAddSecondary}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow cursor-pointer hover:scale-[1.01]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Secondary Ingredient / Packaging</span>
          </button>
          <span className="text-xs font-mono font-bold text-gray-600">
            Subtotal: {currency}{secondarySum.toFixed(2)}
          </span>
        </div>
      </div>

      {/* ── 3. PREPARATION STEPS (TABLE 3 IN RECIPE STANDARDS) ── */}
      <div className="space-y-2 pt-4 border-t border-gray-100">
        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider font-mono">
          3. Preparation Steps &amp; Kitchen SOP
        </label>
        <textarea
          rows={6}
          value={prepNotes}
          onChange={e => setPrepNotes(e.target.value)}
          placeholder="Document standard operating procedures, cooking temperatures, and presentation steps..."
          className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-emerald-600 rounded-2xl p-4 text-xs text-gray-800 leading-relaxed font-sans focus:outline-none print:hidden shadow-2xs resize-y min-h-[140px]"
        />
        <div className="hidden print:block p-3 border border-gray-200 rounded-xl text-[9pt] text-gray-950 leading-relaxed whitespace-pre-wrap">
          {prepNotes}
        </div>
      </div>

      {/* ── FOOTER AUDIT STAMP ── */}
      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-gray-400 font-mono gap-2">
        <div>• Saim Dev Commercial Kitchen Tools • Accurate Portion Economics</div>
        <div>Total Portion Cost: {currency}{portionCost.toFixed(2)} • Net Margin: {grossMarginPct.toFixed(1)}%</div>
      </div>
    </div>
  );
};
