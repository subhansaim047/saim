"use client";

import React, { useState } from "react";
import {
  Printer,
  ShieldAlert,
  AlertTriangle,
  Info,
  CheckCircle2,
  Fish,
  Flame,
  Egg,
  Milk,
  Beef,
  Sparkles
} from "lucide-react";

interface AdvisoryItem {
  id: string;
  name: string;
  category: string;
  icon: any;
  riskDescription: string;
  legalFSAStandard: string;
  exemptions: string;
}

const ADVISORY_ITEMS: AdvisoryItem[] = [
  {
    id: "rare-beef",
    name: "Rare & Medium-Rare Intact Beef & Steaks",
    category: "Whole Muscle Meat",
    icon: Beef,
    riskDescription: "Serving whole muscle beef rare carries risk if exterior surfaces are not thoroughly seared. Minced beef/burgers must NEVER be served rare without FSA-approved validation.",
    legalFSAStandard: "Whole muscle surface searing (>=75°C surface temperature) kills Salmonella and STEC bacteria on exterior tissues.",
    exemptions: "Applies to intact steaks only. Rolled joints, mechanically tenderised steaks, and minced burgers are strictly excluded."
  },
  {
    id: "raw-shellfish",
    name: "Raw Oysters & Live Bivalve Molluscs",
    category: "Bivalve Shellfish",
    icon: Fish,
    riskDescription: "Raw oysters may carry Norovirus, Vibrio vulnificus, and marine biotoxins. Filter feeders concentrate microbial pathogens.",
    legalFSAStandard: "Must be harvested from certified Class A waters or depurated in Class B waters; stored under continuous cold chain (<=4°C).",
    exemptions: "Vulnerable individuals (elderly, pregnant, immunocompromised) are strongly advised to avoid raw shellfish."
  },
  {
    id: "pink-duck",
    name: "Seared Pink Duck Breast Fillets",
    category: "Poultry / Waterfowl",
    icon: Flame,
    riskDescription: "Duck breast served medium or pink carries potential risk of Campylobacter and Salmonella if whole muscle integrity is compromised.",
    legalFSAStandard: "Exterior skin and flesh must be seared vigorously; core must reach at least 65°C for 2 minutes with carryover resting.",
    exemptions: "Whole birds and duck leg confit must be cooked thoroughly to 75°C core (82°C Scotland)."
  },
  {
    id: "runny-eggs",
    name: "Raw & Lightly Cooked British Lion Eggs",
    category: "Shell Eggs",
    icon: Egg,
    riskDescription: "Non-Lion or uncertified eggs carry Salmonella enteritidis contamination risks when served raw, runny, or in unbaked desserts.",
    legalFSAStandard: "FSA advice permits vulnerable groups to consume raw/runny eggs ONLY if bearing the official British Lion Mark scheme.",
    exemptions: "Unstamped or non-Lion eggs must be cooked thoroughly until both white and yolk are completely solid."
  },
  {
    id: "raw-cured-fish",
    name: "Ceviche, Tartare & Cold-Smoked Fish",
    category: "Raw Seafood",
    icon: Fish,
    riskDescription: "Raw or lightly marinated wild finfish carries risks of live Anisakis simplex nematode larvae and Listeria monocytogenes.",
    legalFSAStandard: "Statutory parasite freezing certification under Regulation (EC) No 853/2004 (-20°C for 24h or -35°C for 15h) is legally mandatory.",
    exemptions: "Aquaculture salmon with certified parasite-free feed regimes are legally exempt from mandatory freezing."
  },
  {
    id: "unpasteurised-cheese",
    name: "Artisan Raw Milk & Unpasteurised Cheeses",
    category: "Dairy",
    icon: Milk,
    riskDescription: "Unpasteurised dairy products may harbor Listeria monocytogenes, E. coli O157, and Mycobacterium bovis.",
    legalFSAStandard: "Must carry clear menu labelling: 'Made with raw/unpasteurised milk'. Store strictly at or below 5°C.",
    exemptions: "Expectant mothers and immunocompromised guests must be cautioned against soft unpasteurised cheeses (Brie, Camembert)."
  }
];

export function ConsumerAdvisoryNoticeTool({
  templateId
}: {
  templateId?: string;
}) {
  const [establishmentName, setEstablishmentName] = useState("The Metropolitan Bistro & Grill");
  const [managerName, setManagerName] = useState("General Manager S. Harrison");
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "rare-beef",
    "raw-shellfish",
    "pink-duck",
    "runny-eggs"
  ]);
  const [customNoticeText, setCustomNoticeText] = useState(
    "Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions. Please inform your server of any dietary requirements, allergies, or intolerances before ordering."
  );

  const toggleItem = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>UK Food Standards Agency &amp; EHO Due Diligence Advisory</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Commercial Consumer Advisory Notice &amp; Signage Builder
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Generate an official UK restaurant consumer advisory notice for raw, undercooked, or lightly cooked foods. Customise food hazard disclosures, meet local authority EHO due diligence requirements, and print laminated A4/A5 display cards.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print A4 / A5 Notice</span>
            </button>
          </div>
        </div>

        {/* Business Settings Toolbar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Establishment / Trading Name
            </label>
            <input
              type="text"
              value={establishmentName}
              onChange={e => setEstablishmentName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Supervisor / Manager Sign-Off
            </label>
            <input
              type="text"
              value={managerName}
              onChange={e => setManagerName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>
        </div>

        {/* Advisory Food Category Toggles */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Active Menu Items Requiring Statutory Advisory Disclosures:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ADVISORY_ITEMS.map(item => {
              const isSelected = selectedItems.includes(item.id);
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-amber-50/60 border-amber-400 shadow-2xs"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                        <Icon className="w-4 h-4 text-amber-600" />
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isSelected ? "bg-amber-600 text-white" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {isSelected ? "Active On Menu" : "Excluded"}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">{item.riskDescription}</p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200/60 text-[10px] font-medium text-amber-900">
                    <strong>FSA Control:</strong> {item.legalFSAStandard}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Notice Text Area */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Front-of-House Consumer Advisory Statement (Customisable):
          </label>
          <textarea
            rows={3}
            value={customNoticeText}
            onChange={e => setCustomNoticeText(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 focus:border-amber-600 rounded-xl p-3 text-xs text-slate-800 leading-relaxed focus:outline-none"
          />
        </div>
      </div>

      {/* Official Printable Consumer Advisory Notice Card (A4 / A5) */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-900 space-y-6 printable-doc shadow-xs max-w-4xl mx-auto">
        {/* Notice Header */}
        <div className="text-center space-y-2 border-b-2 border-slate-900 pb-6">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest mb-1">
            Important Food Safety Information
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
            CONSUMER ADVISORY NOTICE
          </h1>
          <p className="text-xs font-bold text-slate-600 tracking-wider">
            {establishmentName} &bull; Food Safety Act 1990 Due Diligence Compliance
          </p>
        </div>

        {/* Primary Advisory Banner */}
        <div className="p-5 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-500 text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-amber-900 font-black text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Health &amp; Dietary Advisory Warning</span>
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed max-w-2xl mx-auto">
            {customNoticeText}
          </p>
        </div>

        {/* Specific Disclosures for Selected Items */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
            Menu Items Prepared to Order with Less Thorough Cooking:
          </h3>

          <div className="divide-y divide-slate-100 text-xs">
            {selectedItems.map(id => {
              const item = ADVISORY_ITEMS.find(i => i.id === id);
              if (!item) return null;
              return (
                <div key={item.id} className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{item.name}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 max-w-lg">
                    {item.riskDescription} <em>({item.legalFSAStandard})</em>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vulnerable Groups Advisory */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
          <span className="font-bold text-slate-900 block uppercase tracking-wide">
            Note for Vulnerable Consumers:
          </span>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            The Food Standards Agency (FSA) strongly advises that vulnerable individuals—including pregnant women, the elderly, infants, young children, and those with weakened immune systems—should avoid consuming raw shellfish, rare meats, or unpasteurised dairy products.
          </p>
        </div>

        {/* Notice Footer with Verification Sign-Off */}
        <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-600">
          <div>
            <span className="font-bold text-slate-900">Signed on behalf of management:</span>{" "}
            <span className="underline decoration-dotted font-medium">{managerName}</span>
          </div>
          <div>
            <span className="font-bold text-slate-900">Valid Service Year:</span> 2026 &bull; Displayed at Entrance &amp; Counter
          </div>
        </div>
      </div>
    </div>
  );
}
