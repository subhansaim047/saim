"use client";

import React, { useState } from "react";
import {
  Printer,
  ShieldCheck,
  FileSpreadsheet,
  AlertTriangle,
  Info,
  CheckCircle2,
  Package,
  Layers,
  Thermometer,
  Clock,
  Sparkles
} from "lucide-react";

interface IngredientLine {
  id: string;
  name: string;
  quidPercentage: number;
  isAllergen: boolean;
  allergenName?: string;
  countryOfOrigin: string;
}

export function ProductSpecificationTool({
  templateId
}: {
  templateId?: string;
}) {
  const [productName, setProductName] = useState("Artisan Slow-Cooked Beef Bourguignon");
  const [productCode, setProductCode] = useState("SKU-BF-402");
  const [category, setCategory] = useState("Cook-Chill Prepared Catering Entrée");
  const [manufacturer, setManufacturer] = useState("The Crown Kitchens & Central Production Unit");
  const [shelfLifeDays, setShelfLifeDays] = useState(5);
  const [storageTemp, setStorageTemp] = useState("Keep refrigerated at 1°C to 5°C");
  const [targetPH, setTargetPH] = useState("5.2 – 5.6");
  const [packagingType, setPackagingType] = useState("Recyclable CPET tray with barrier film top lidding");
  const [qaManager, setQaManager] = useState("Technical QA Lead E. Jenkins");

  const [ingredients, setIngredients] = useState<IngredientLine[]>([
    { id: "1", name: "Diced British Beef Chuck Steak", quidPercentage: 45, isAllergen: false, countryOfOrigin: "United Kingdom" },
    { id: "2", name: "Red Wine Reduction Sauce (Contains Sulphites)", quidPercentage: 25, isAllergen: true, allergenName: "Sulphur dioxide/sulphites", countryOfOrigin: "France" },
    { id: "3", name: "Shallots & Button Mushrooms", quidPercentage: 15, isAllergen: false, countryOfOrigin: "United Kingdom" },
    { id: "4", name: "Rich Beef Stock (Beef Bones, Celery, Carrot, Onion)", quidPercentage: 10, isAllergen: true, allergenName: "Celery", countryOfOrigin: "United Kingdom" },
    { id: "5", name: "Unsalted Butter (Cow's Milk)", quidPercentage: 3, isAllergen: true, allergenName: "Milk", countryOfOrigin: "United Kingdom" },
    { id: "6", name: "Wheat Flour (for roux thickening)", quidPercentage: 2, isAllergen: true, allergenName: "Gluten (Wheat)", countryOfOrigin: "United Kingdom" }
  ]);

  const activeAllergens = Array.from(
    new Set(ingredients.filter(i => i.isAllergen && i.allergenName).map(i => i.allergenName!))
  );

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 mb-2">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span>UK Food Standards Agency &amp; BRCGS Technical Specification Standard</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Commercial Food Product Technical Specification Builder
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Formulate compliant technical food specifications. Define Quantitative Ingredient Declarations (QUID %), flag statutory allergens under Natasha's Law, specify microbiological limits, and print an A4 Technical QA Dossier.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print A4 Specification</span>
            </button>
          </div>
        </div>

        {/* Product Identity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Product Description / Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={e => setProductName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-emerald-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Internal SKU / Product Code
            </label>
            <input
              type="text"
              value={productCode}
              onChange={e => setProductCode(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-emerald-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Manufacturer / Production CPU
            </label>
            <input
              type="text"
              value={manufacturer}
              onChange={e => setManufacturer(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-emerald-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Technical QA Manager
            </label>
            <input
              type="text"
              value={qaManager}
              onChange={e => setQaManager(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-emerald-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>
        </div>

        {/* Ingredients & QUID Formulation Matrix */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Formulation &amp; Quantitative Ingredient Declaration (QUID %):
            </h3>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Total QUID: {ingredients.reduce((acc, i) => acc + i.quidPercentage, 0)}%
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="p-3">Ingredient Component</th>
                  <th className="p-3">QUID %</th>
                  <th className="p-3">Allergen Classification</th>
                  <th className="p-3">Country of Origin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {ingredients.map(ing => (
                  <tr key={ing.id} className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-900">{ing.name}</td>
                    <td className="p-3 font-mono font-bold text-emerald-700">{ing.quidPercentage}%</td>
                    <td className="p-3">
                      {ing.isAllergen ? (
                        <span className="inline-block px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[10px]">
                          {ing.allergenName}
                        </span>
                      ) : (
                        <span className="text-slate-400 text-[10px]">No Allergen</span>
                      )}
                    </td>
                    <td className="p-3 text-slate-600">{ing.countryOfOrigin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Allergens Summary Banner */}
        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-purple-900 block uppercase tracking-wide">
              Mandatory Natasha's Law Allergen Emphases:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeAllergens.map(a => (
                <span key={a} className="px-2.5 py-1 rounded-lg bg-purple-600 text-white font-black text-xs">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="text-[11px] text-purple-800 font-medium max-w-sm">
            Must appear in <strong>bold, contrasting typography</strong> on all finished product packaging and PPDS shelf-edge labels.
          </div>
        </div>
      </div>

      {/* Printable Technical Specification Sheet (A4 Portrait) */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-900 space-y-6 printable-doc shadow-xs max-w-4xl mx-auto">
        {/* Specification Header */}
        <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-1">
              Finished Product Technical Dossier
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              PRODUCT SPECIFICATION
            </h1>
            <p className="text-xs font-semibold text-slate-600">
              Regulation (EU) No 1169/2011 &bull; Natasha's Law (FIR 2021) &bull; BRCGS Food Safety Issue 9
            </p>
          </div>

          <div className="text-right text-xs space-y-1">
            <div className="font-black text-slate-900">{productName}</div>
            <div className="text-slate-600 font-mono">Code: {productCode}</div>
            <div className="text-slate-500 text-[10px]">{manufacturer}</div>
          </div>
        </div>

        {/* Section 1: Product Classification & Storage */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-300 text-xs">
          <div>
            <span className="font-bold text-slate-700 block uppercase text-[10px]">Category:</span>
            <span className="font-semibold text-slate-900">{category}</span>
          </div>
          <div>
            <span className="font-bold text-slate-700 block uppercase text-[10px]">Total Shelf Life:</span>
            <span className="font-semibold text-slate-900">{shelfLifeDays} Days from Prep</span>
          </div>
          <div>
            <span className="font-bold text-slate-700 block uppercase text-[10px]">Target pH:</span>
            <span className="font-semibold text-slate-900">{targetPH}</span>
          </div>
          <div>
            <span className="font-bold text-slate-700 block uppercase text-[10px]">Storage Condition:</span>
            <span className="font-semibold text-emerald-800">{storageTemp}</span>
          </div>
        </div>

        {/* Section 2: QUID Ingredient Declaration */}
        <div className="space-y-2">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1">
            1. Ingredient Breakdown &amp; Legal Label Declaration (QUID %)
          </h3>
          <p className="text-xs text-slate-800 leading-relaxed p-3 bg-slate-50 rounded-lg border border-slate-200">
            <strong>Legal Ingredients List:</strong> Beef (45%), Red Wine Reduction Sauce (25%) [Red Wine (<strong>Sulphites</strong>), Water, Tomato Paste], Shallots, Mushrooms, Beef Stock (10%) [Water, Beef Bones, <strong>Celery</strong>, Carrots, Onions], Butter (3%) (<strong>Milk</strong>), Wheat Flour (2%) (<strong>Wheat Gluten</strong>), Salt, Black Pepper.
          </p>
        </div>

        {/* Section 3: Statutory Process Hygiene & Microbial Limits */}
        <div className="space-y-2">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1">
            2. Microbiological Safety Criteria (Regulation EC No 2073/2005)
          </h3>
          <div className="overflow-x-auto rounded-lg border border-slate-300">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
                  <th className="p-2 border-r border-slate-200">Microorganism</th>
                  <th className="p-2 border-r border-slate-200">Target Standard</th>
                  <th className="p-2 border-r border-slate-200">Statutory Action Limit</th>
                  <th className="p-2">Testing Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                <tr>
                  <td className="p-2 font-bold border-r border-slate-200">Total Viable Count (TVC @ 30°C)</td>
                  <td className="p-2 border-r border-slate-200 font-mono">&lt; 10^3 cfu/g</td>
                  <td className="p-2 border-r border-slate-200 font-mono text-rose-700">&gt;= 10^5 cfu/g</td>
                  <td className="p-2">Monthly swab testing</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r border-slate-200">Enterobacteriaceae</td>
                  <td className="p-2 border-r border-slate-200 font-mono">&lt; 10 cfu/g</td>
                  <td className="p-2 border-r border-slate-200 font-mono text-rose-700">&gt;= 10^2 cfu/g</td>
                  <td className="p-2">Each production run</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r border-slate-200">Escherichia coli</td>
                  <td className="p-2 border-r border-slate-200 font-mono">&lt; 10 cfu/g</td>
                  <td className="p-2 border-r border-slate-200 font-mono text-rose-700">&gt;= 20 cfu/g</td>
                  <td className="p-2">Each production run</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r border-slate-200">Listeria monocytogenes</td>
                  <td className="p-2 border-r border-slate-200 font-mono">Absent in 25g</td>
                  <td className="p-2 border-r border-slate-200 font-mono text-rose-700">Detected in 25g</td>
                  <td className="p-2">Shelf-life end testing</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r border-slate-200">Salmonella enterica</td>
                  <td className="p-2 border-r border-slate-200 font-mono">Absent in 25g</td>
                  <td className="p-2 border-r border-slate-200 font-mono text-rose-700">Detected in 25g</td>
                  <td className="p-2">Quarterly lab panel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Packaging & Technical Sign-Off */}
        <div className="pt-2 border-t-2 border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px]">
          <div>
            <span className="font-bold text-slate-900 block uppercase">Technical QA Lead:</span>
            <span className="text-slate-600 underline decoration-dotted">{qaManager}</span>
          </div>
          <div>
            <span className="font-bold text-slate-900 block uppercase">Issue Version:</span>
            <span className="text-slate-600 font-mono">Ver 2.4 (2026 Release)</span>
          </div>
          <div>
            <span className="font-bold text-slate-900 block uppercase">Approval Status:</span>
            <span className="font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">APPROVED FOR COMMERCE</span>
          </div>
          <div>
            <span className="font-bold text-slate-900 block uppercase">EHO Reference:</span>
            <span className="text-slate-600 font-mono">SPEC-UK-084</span>
          </div>
        </div>
      </div>
    </div>
  );
}
