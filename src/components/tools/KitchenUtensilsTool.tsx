"use client";

import React, { useState, useMemo } from "react";
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
  Sparkles,
  Plus,
  Trash2,
  Filter,
  RefreshCw,
  ShoppingBag,
  SlidersHorizontal
} from "lucide-react";

export interface UtensilItem {
  id: string;
  name: string;
  category: "prep_knives" | "cookline_hot" | "measure_temp" | "gastronorm_storage" | "food_safety_hygiene" | "pastry_bakery";
  complianceStandard: string;
  recommendedQty: number;
  ownedQty: number;
  estUnitCost: number; // in GBP
  colourCode?: "Red" | "Blue" | "Yellow" | "Green" | "White" | "Brown" | "Purple" | "Stainless";
  criticalForFHRS: boolean;
  notes?: string;
}

const DEFAULT_UTENSILS: UtensilItem[] = [
  // Prep & Knives
  {
    id: "ut-1",
    name: "8-Inch Chef's Knife (French Cook's Knife)",
    category: "prep_knives",
    complianceStandard: "BS EN ISO 8442-1 (Food Contact Stainless)",
    recommendedQty: 4,
    ownedQty: 4,
    estUnitCost: 28.50,
    colourCode: "Stainless",
    criticalForFHRS: true,
    notes: "High-carbon molybdenum steel, seamless hygiene bolster."
  },
  {
    id: "ut-2",
    name: "Colour-Coded Prep Knife Set (6 Colours)",
    category: "prep_knives",
    complianceStandard: "FSA Cross-Contamination Guidance 2024",
    recommendedQty: 2,
    ownedQty: 2,
    estUnitCost: 65.00,
    colourCode: "Red",
    criticalForFHRS: true,
    notes: "Strict segregation: Red (Raw Meat), Blue (Raw Fish), Green (Salad/Fruit)."
  },
  {
    id: "ut-3",
    name: "Commercial Safety Mandoline with Food Guard",
    category: "prep_knives",
    complianceStandard: "HSE Puwer 1998 Machine Safety",
    recommendedQty: 1,
    ownedQty: 1,
    estUnitCost: 45.00,
    colourCode: "Stainless",
    criticalForFHRS: false,
    notes: "Includes stainless steel safety pusher and julienne blades."
  },
  {
    id: "ut-4",
    name: "Diamond Sharpening Steel (Honing Rod, 12-inch)",
    category: "prep_knives",
    complianceStandard: "HSE Safe Kitchen Knife Maintenance",
    recommendedQty: 2,
    ownedQty: 2,
    estUnitCost: 19.99,
    colourCode: "Stainless",
    criticalForFHRS: false,
    notes: "Daily edge maintenance for clean food slicing."
  },

  // Cookline & Hot Range
  {
    id: "ut-5",
    name: "Heavy-Duty Stainless Steel Locking Tongs (12-inch)",
    category: "cookline_hot",
    complianceStandard: "EC 1935/2004 Food Grade Material",
    recommendedQty: 6,
    ownedQty: 5,
    estUnitCost: 6.50,
    colourCode: "Stainless",
    criticalForFHRS: true,
    notes: "Commercial spring-loaded locking mechanism."
  },
  {
    id: "ut-6",
    name: "High-Heat Silicone Spatulas (Heat Resistant up to 260°C)",
    category: "cookline_hot",
    complianceStandard: "FDA/EU Food Safe Silicone Polymer",
    recommendedQty: 4,
    ownedQty: 3,
    estUnitCost: 8.75,
    colourCode: "White",
    criticalForFHRS: false,
    notes: "One-piece seamless construction prevents bacterial entrapment."
  },
  {
    id: "ut-7",
    name: "Stainless Steel Serving Ladles (Stamped Capacities: 60ml & 120ml)",
    category: "cookline_hot",
    complianceStandard: "Portion Control & Food Safety Spec",
    recommendedQty: 4,
    ownedQty: 4,
    estUnitCost: 5.95,
    colourCode: "Stainless",
    criticalForFHRS: false,
    notes: "Monobloc pressed stainless steel, zero weld traps."
  },
  {
    id: "ut-8",
    name: "Heavy-Wire Deep Fryer Skimmer (Spider Strainer, 8-inch)",
    category: "cookline_hot",
    complianceStandard: "High-Temperature Oil Safety",
    recommendedQty: 2,
    ownedQty: 1,
    estUnitCost: 11.20,
    colourCode: "Stainless",
    criticalForFHRS: false,
    notes: "Debris removal to prevent carcinogenic acrylamide buildup."
  },

  // Measurement & Temperature Assurance
  {
    id: "ut-9",
    name: "UKAS Calibrated Digital Probe Thermometer (±0.4°C)",
    category: "measure_temp",
    complianceStandard: "Food Safety and Hygiene (England) Regs 2013",
    recommendedQty: 2,
    ownedQty: 2,
    estUnitCost: 48.00,
    colourCode: "Stainless",
    criticalForFHRS: true,
    notes: "Verification of core cook temp ≥75°C and cold hold ≤5°C."
  },
  {
    id: "ut-10",
    name: "Non-Contact Infrared Surface Thermometer",
    category: "measure_temp",
    complianceStandard: "Good Manufacturing Practice (GMP)",
    recommendedQty: 1,
    ownedQty: 1,
    estUnitCost: 34.50,
    colourCode: "Stainless",
    criticalForFHRS: false,
    notes: "Rapid intake delivery inspection for chilled goods."
  },
  {
    id: "ut-11",
    name: "Precision Digital Commercial Kitchen Scale (0.1g - 5kg)",
    category: "measure_temp",
    complianceStandard: "Weights and Measures Act 1985",
    recommendedQty: 2,
    ownedQty: 1,
    estUnitCost: 39.00,
    colourCode: "Stainless",
    criticalForFHRS: true,
    notes: "QUID ingredient verification and allergen recipe scaling."
  },
  {
    id: "ut-12",
    name: "Polypropylene Graduated Measuring Jug Set (1L, 2L, 5L)",
    category: "measure_temp",
    complianceStandard: "EC 10/2011 Food Contact Plastic",
    recommendedQty: 3,
    ownedQty: 3,
    estUnitCost: 14.50,
    colourCode: "White",
    criticalForFHRS: false,
    notes: "Embossed volume graduations, chemical resistant."
  },

  // Gastronorm & Storage
  {
    id: "ut-13",
    name: "Stainless Steel Gastronorm 1/1 Pans (65mm Depth)",
    category: "gastronorm_storage",
    complianceStandard: "BS EN 631-1 Dimensions Standard",
    recommendedQty: 8,
    ownedQty: 8,
    estUnitCost: 12.50,
    colourCode: "Stainless",
    criticalForFHRS: true,
    notes: "Bain-marie hot holding and combi-oven roasting."
  },
  {
    id: "ut-14",
    name: "Clear Polycarbonate Food Storage Boxes with Lids (18L)",
    category: "gastronorm_storage",
    complianceStandard: "BPA-Free Food Contact Approved",
    recommendedQty: 6,
    ownedQty: 4,
    estUnitCost: 22.00,
    colourCode: "White",
    criticalForFHRS: true,
    notes: "Airtight storage with write-on FIFO date panels."
  },
  {
    id: "ut-15",
    name: "Mobile Ingredient Bins with Transparent Sliding Lids (80L)",
    category: "gastronorm_storage",
    complianceStandard: "Food Hygiene Bulk Storage Regs",
    recommendedQty: 2,
    ownedQty: 2,
    estUnitCost: 95.00,
    colourCode: "White",
    criticalForFHRS: true,
    notes: "Dedicated scoops mounted inside for flour and sugar."
  },

  // Food Safety, Allergens & Hygiene
  {
    id: "ut-16",
    name: "Purple Allergen-Dedicated Utensil Kit (Tongs, Knife & Turner)",
    category: "food_safety_hygiene",
    complianceStandard: "Natasha's Law & FSA Allergen Technical Guidance",
    recommendedQty: 2,
    ownedQty: 1,
    estUnitCost: 32.50,
    colourCode: "Purple",
    criticalForFHRS: true,
    notes: "Dedicated allergen prep tools to prevent gluten/peanut cross-contact."
  },
  {
    id: "ut-17",
    name: "Colour-Coded Chopping Board Set with Wire Storage Rack",
    category: "food_safety_hygiene",
    complianceStandard: "FSA Safe Food Better Business System",
    recommendedQty: 2,
    ownedQty: 2,
    estUnitCost: 49.99,
    colourCode: "Yellow",
    criticalForFHRS: true,
    notes: "High-density polyethylene (HDPE), non-absorbent."
  },
  {
    id: "ut-18",
    name: "Probe Disinfection Wipes Tub (200 Wipes, BS EN 1276)",
    category: "food_safety_hygiene",
    complianceStandard: "BS EN 1276 & BS EN 13697 Bactericidal",
    recommendedQty: 4,
    ownedQty: 2,
    estUnitCost: 7.20,
    colourCode: "Blue",
    criticalForFHRS: true,
    notes: "Mandatory 30-second wipe sanitisation before probe insertion."
  },
  {
    id: "ut-19",
    name: "Dissolvable Day-of-the-Week Food Prep Labels (Roll of 1000)",
    category: "food_safety_hygiene",
    complianceStandard: "Regulation (EC) No 852/2004 Annex II",
    recommendedQty: 7,
    ownedQty: 5,
    estUnitCost: 8.50,
    colourCode: "White",
    criticalForFHRS: true,
    notes: "100% water soluble in commercial dishwashers."
  },

  // Pastry & Bakery Smallwares
  {
    id: "ut-20",
    name: "Non-Stick Silicone Baking Mats (GN 1/1 Sized)",
    category: "pastry_bakery",
    complianceStandard: "EU Food Contact Directive 2002/72/EC",
    recommendedQty: 6,
    ownedQty: 6,
    estUnitCost: 9.80,
    colourCode: "Brown",
    criticalForFHRS: false,
    notes: "Reusable fibreglass silicone baking mats (-40°C to 280°C)."
  },
  {
    id: "ut-21",
    name: "Stainless Steel Dough Scraper / Bench Knife (Calibrated)",
    category: "pastry_bakery",
    complianceStandard: "Commercial Bakery Smallware Spec",
    recommendedQty: 2,
    ownedQty: 2,
    estUnitCost: 6.40,
    colourCode: "Stainless",
    criticalForFHRS: false,
    notes: "Engraved metric/imperial ruler for dough portioning."
  }
];

export default function KitchenUtensilsTool({ templateId }: { templateId?: string }) {
  const [items, setItems] = useState<UtensilItem[]>(DEFAULT_UTENSILS);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [onlyDeficit, setOnlyDeficit] = useState<boolean>(false);
  const [establishmentName, setEstablishmentName] = useState("The Commercial Kitchen");
  const [headChefName, setHeadChefName] = useState("Executive Head Chef");
  const [auditDate, setAuditDate] = useState(new Date().toISOString().split("T")[0]);

  // Metric Calculations
  const stats = useMemo(() => {
    let totalRecommended = 0;
    let totalOwned = 0;
    let deficitCount = 0;
    let deficitCost = 0;
    let criticalMissing = 0;

    items.forEach(item => {
      totalRecommended += item.recommendedQty;
      totalOwned += Math.min(item.ownedQty, item.recommendedQty);
      if (item.ownedQty < item.recommendedQty) {
        const diff = item.recommendedQty - item.ownedQty;
        deficitCount += diff;
        deficitCost += diff * item.estUnitCost;
        if (item.criticalForFHRS) {
          criticalMissing += 1;
        }
      }
    });

    const stockPercentage = totalRecommended > 0 
      ? Math.round((totalOwned / totalRecommended) * 100) 
      : 100;

    return {
      stockPercentage,
      deficitCount,
      deficitCost,
      criticalMissing,
      totalItems: items.length
    };
  }, [items]);

  // Filtered Items
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      if (onlyDeficit && item.ownedQty >= item.recommendedQty) {
        return false;
      }
      return true;
    });
  }, [items, selectedCategory, onlyDeficit]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextVal = Math.max(0, item.ownedQty + delta);
          return { ...item, ownedQty: nextVal };
        }
        return item;
      })
    );
  };

  const resetToParLevels = () => {
    setItems(prev =>
      prev.map(item => ({
        ...item,
        ownedQty: item.recommendedQty
      }))
    );
  };

  const exportCSV = () => {
    let csv = "Commercial Kitchen Utensils & Smallwares Master Inventory Audit\n";
    csv += `Premises:,"${establishmentName}"\n`;
    csv += `Auditor / Head Chef:,"${headChefName}"\n`;
    csv += `Audit Date:,"${auditDate}"\n`;
    csv += `Overall Stock Compliance:,"${stats.stockPercentage}%"\n\n`;
    csv += "Item Name,Category,Standard,Recommended Par,Current In-Stock,Deficit Qty,Est Unit Cost (GBP),Total Deficit Cost (GBP),FHRS Critical,Notes\n";

    items.forEach(i => {
      const deficit = Math.max(0, i.recommendedQty - i.ownedQty);
      const totalCost = (deficit * i.estUnitCost).toFixed(2);
      csv += `"${i.name.replace(/"/g, '""')}","${i.category}","${i.complianceStandard}","${i.recommendedQty}","${i.ownedQty}","${deficit}","£${i.estUnitCost.toFixed(2)}","£${totalCost}","${i.criticalForFHRS ? 'YES' : 'NO'}","${(i.notes || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `kitchen-utensils-master-spec-${auditDate}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-8 shadow-sm">
      {/* Header and Print Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-xs font-semibold uppercase tracking-wider">
              Interactive Smallwares Auditor & Par Manager
            </span>
            <span className="text-xs text-gray-500">BS EN ISO 8442 & FSA 2024</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Commercial Kitchen Utensils & Smallwares Master Spec
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">
            Live interactive inventory checklist and equipment budget calculator. Tally required kitchen smallwares, identify missing critical items for 5-star FHRS hygiene compliance, and generate a printable purchase order.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 print:hidden">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-xl shadow-sm transition"
          >
            <Printer className="w-4 h-4" />
            Print Master Spec (A4)
          </button>
          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-sm transition"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Export CSV / PO
          </button>
          <button
            onClick={resetToParLevels}
            className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-xl transition"
            title="Reset in-stock quantities to par levels"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Par
          </button>
        </div>
      </div>

      {/* Establishment & Audit Header (Printable) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-xs">
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Commercial Establishment Name</label>
          <input
            type="text"
            value={establishmentName}
            onChange={(e) => setEstablishmentName(e.target.value)}
            className="w-full bg-white px-3 py-2 rounded-lg border border-gray-300 font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Head Chef / Kitchen Manager</label>
          <input
            type="text"
            value={headChefName}
            onChange={(e) => setHeadChefName(e.target.value)}
            className="w-full bg-white px-3 py-2 rounded-lg border border-gray-300 font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Audit / Inspection Date</label>
          <input
            type="date"
            value={auditDate}
            onChange={(e) => setAuditDate(e.target.value)}
            className="w-full bg-white px-3 py-2 rounded-lg border border-gray-300 font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Real-time Compliance & Budget Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 print:grid-cols-4">
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Par Stock Readiness</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-black text-slate-900">{stats.stockPercentage}%</span>
            <span className="text-xs text-slate-500">of required smallwares</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
            <div
              className={`h-full ${stats.stockPercentage >= 90 ? 'bg-emerald-500' : stats.stockPercentage >= 75 ? 'bg-amber-500' : 'bg-red-500'}`}
              style={{ width: `${stats.stockPercentage}%` }}
            />
          </div>
        </div>

        <div className="bg-amber-50/50 border border-amber-200/60 p-4 rounded-2xl">
          <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider block">Deficit Items Needed</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-black text-amber-900">{stats.deficitCount}</span>
            <span className="text-xs text-amber-700">units to purchase</span>
          </div>
          <span className="text-[11px] text-amber-600 block mt-1">Across all kitchen stations</span>
        </div>

        <div className="bg-emerald-50/50 border border-emerald-200/60 p-4 rounded-2xl">
          <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block">Est. Smallwares Order</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-black text-emerald-900">£{stats.deficitCost.toFixed(2)}</span>
            <span className="text-xs text-emerald-700">ex. VAT</span>
          </div>
          <span className="text-[11px] text-emerald-600 block mt-1">Trade wholesale benchmark</span>
        </div>

        <div className={`p-4 rounded-2xl border ${stats.criticalMissing > 0 ? 'bg-red-50 border-red-200 text-red-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900'}`}>
          <span className="text-[11px] font-semibold uppercase tracking-wider block">FHRS Critical Gaps</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-black">{stats.criticalMissing}</span>
            <span className="text-xs">statutory items</span>
          </div>
          <span className="text-[11px] block mt-1">
            {stats.criticalMissing === 0 ? "✓ 100% FHRS Audit Ready" : "! Action required before EHO inspection"}
          </span>
        </div>
      </div>

      {/* Filter Tabs and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 print:hidden">
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: "all", label: "All Stations" },
            { id: "prep_knives", label: "Knives & Prep" },
            { id: "cookline_hot", label: "Cookline & Range" },
            { id: "measure_temp", label: "Probes & Measures" },
            { id: "gastronorm_storage", label: "GN & Storage" },
            { id: "food_safety_hygiene", label: "Food Safety & Allergens" },
            { id: "pastry_bakery", label: "Pastry & Bakery" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedCategory === tab.id
                  ? "bg-amber-500 text-white shadow-sm"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-xl border border-gray-200 transition">
          <input
            type="checkbox"
            checked={onlyDeficit}
            onChange={(e) => setOnlyDeficit(e.target.checked)}
            className="w-4 h-4 text-amber-500 rounded border-gray-300 focus:ring-amber-500"
          />
          Show Missing Items Only ({items.filter(i => i.ownedQty < i.recommendedQty).length})
        </label>
      </div>

      {/* Utensils Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-2xl">
        <table className="w-full text-left text-xs text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-700 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Utensil Description & Spec</th>
              <th className="py-3 px-3">Compliance Standard</th>
              <th className="py-3 px-3 text-center">Colour Code</th>
              <th className="py-3 px-3 text-center">Par Level</th>
              <th className="py-3 px-3 text-center">In Stock</th>
              <th className="py-3 px-3 text-center">Deficit</th>
              <th className="py-3 px-3 text-right">Est Unit (£)</th>
              <th className="py-3 px-3 text-right">Order Cost</th>
              <th className="py-3 px-3 text-center print:hidden">Stock Control</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredItems.map(item => {
              const deficit = Math.max(0, item.recommendedQty - item.ownedQty);
              const totalCost = deficit * item.estUnitCost;
              const isShort = deficit > 0;

              return (
                <tr
                  key={item.id}
                  className={`hover:bg-slate-50/70 transition ${
                    isShort ? 'bg-amber-50/20' : ''
                  }`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-start gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm">{item.name}</span>
                          {item.criticalForFHRS && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-red-100 text-red-700 uppercase tracking-wider">
                              FHRS Critical
                            </span>
                          )}
                        </div>
                        {item.notes && (
                          <p className="text-[11px] text-gray-500 mt-0.5">{item.notes}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-gray-600">
                    {item.complianceStandard}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {item.colourCode && (
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.colourCode === 'Red'
                            ? 'bg-red-500 text-white'
                            : item.colourCode === 'Blue'
                            ? 'bg-blue-500 text-white'
                            : item.colourCode === 'Yellow'
                            ? 'bg-yellow-400 text-gray-900'
                            : item.colourCode === 'Green'
                            ? 'bg-emerald-600 text-white'
                            : item.colourCode === 'Purple'
                            ? 'bg-purple-600 text-white'
                            : item.colourCode === 'White'
                            ? 'bg-gray-200 text-gray-800'
                            : 'bg-slate-100 text-slate-700 border border-slate-300'
                        }`}
                      >
                        {item.colourCode}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-center font-bold text-gray-900">
                    {item.recommendedQty}
                  </td>
                  <td className="py-3 px-3 text-center font-extrabold">
                    <span className={isShort ? 'text-amber-600 font-bold' : 'text-emerald-700'}>
                      {item.ownedQty}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    {deficit > 0 ? (
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 font-extrabold rounded-md text-[11px]">
                        -{deficit}
                      </span>
                    ) : (
                      <span className="text-emerald-600 font-bold">✓ Par</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-gray-700">
                    £{item.estUnitCost.toFixed(2)}
                  </td>
                  <td className="py-3 px-3 text-right font-mono font-bold text-gray-900">
                    {deficit > 0 ? `£${totalCost.toFixed(2)}` : '£0.00'}
                  </td>
                  <td className="py-3 px-3 text-center print:hidden">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center transition"
                        title="Reduce in-stock"
                      >
                        -
                      </button>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center transition"
                        title="Increase in-stock"
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Statutory Guidance & Colour Coding Callout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
        <div>
          <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            UK Food Safety & FHRS Smallware Hygiene Protocol
          </h4>
          <p className="text-slate-600 leading-relaxed">
            Under <strong>Regulation (EC) No 852/2004</strong> and the <strong>Food Safety Act 1990</strong>, commercial catering smallwares that directly contact food must be fabricated from food-grade, non-porous, corrosion-resistant materials (Type 304 austenitic stainless steel or BPA-free food polymer). Any cracked wooden handles, flaking PTFE non-stick surfaces, or pitted aluminum must be discarded immediately.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-2">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Natasha&apos;s Law Allergen Smallware Segregation
          </h4>
          <p className="text-slate-600 leading-relaxed">
            To satisfy Environmental Health Officer (EHO) inspection audits for allergen management, kitchens must maintain dedicated <strong>purple-handled smallwares</strong> (tongs, spatulas, and chef knives) reserved exclusively for allergen-free preparations. Probe thermometers must be disinfected with <strong>BS EN 1276 certified probe wipes</strong> between every temperature read.
          </p>
        </div>
      </div>

      {/* Sign-Off Block for Print */}
      <div className="hidden print:grid grid-cols-2 gap-8 pt-8 border-t border-gray-300 text-xs text-gray-700">
        <div>
          <p className="font-semibold text-gray-900">Head Chef Sign-Off:</p>
          <div className="border-b border-gray-400 mt-8 mb-1"></div>
          <p className="text-[10px] text-gray-500">Signature & Date</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">General Manager / Food Business Operator:</p>
          <div className="border-b border-gray-400 mt-8 mb-1"></div>
          <p className="text-[10px] text-gray-500">Approval & Purchase Order Authorisation</p>
        </div>
      </div>
    </div>
  );
}
