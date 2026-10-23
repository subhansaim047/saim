"use client";

import React, { useState } from "react";
import {
  Plus,
  Trash2,
  Printer,
  ShieldCheck,
  CheckCircle2,
  AlertOctagon,
  RotateCcw,
  Edit3
} from "lucide-react";

export interface HaccpStep {
  id: string;
  stepName: string;
  hazardType: "Biological" | "Chemical" | "Physical" | "Allergenic";
  hazardDesc: string;
  isCcp: boolean;
  ccpNumber?: string;
  criticalLimit: string;
  monitoring: string;
  correctiveAction: string;
}

const DEFAULT_STEPS: HaccpStep[] = [
  {
    id: "haccp-1",
    stepName: "1. Delivery & Goods Receiving",
    hazardType: "Biological",
    hazardDesc: "Growth of Salmonella & Campylobacter due to delivery vehicle temperature abuse.",
    isCcp: true,
    ccpNumber: "CCP 1",
    criticalLimit: "Chilled foods <= 5°C; Frozen foods <= -18°C.",
    monitoring: "Probe temperature of high-risk meats on delivery; inspect vehicle hygiene.",
    correctiveAction: "Reject delivery if chilled temp > 8°C or if packaging is compromised."
  },
  {
    id: "haccp-2",
    stepName: "2. Chilled Storage",
    hazardType: "Biological",
    hazardDesc: "Multiplication of foodborne pathogens due to refrigeration malfunction.",
    isCcp: true,
    ccpNumber: "CCP 2",
    criticalLimit: "Commercial fridge air temp 1°C to 4°C (legal max 8°C).",
    monitoring: "Calibrated probe log recorded twice daily (morning & evening shift).",
    correctiveAction: "If > 8°C for < 2 hrs, move to backup walk-in; if > 8°C for > 2 hrs, condemn & discard."
  },
  {
    id: "haccp-3",
    stepName: "3. Preparation & Chopping",
    hazardType: "Allergenic",
    hazardDesc: "Cross-contact of gluten/nuts with allergen-free meals; cross-contamination of raw poultry.",
    isCcp: false,
    criticalLimit: "Strict color-coded boards (Yellow: poultry, Red: raw meat, Green: salad, Purple: allergen).",
    monitoring: "Visual inspection by shift supervisor; sanitiser wipe down between tasks.",
    correctiveAction: "Re-wash and sanitise station; re-prepare allergen order if cross-contact suspected."
  },
  {
    id: "haccp-4",
    stepName: "4. Cooking & Frying",
    hazardType: "Biological",
    hazardDesc: "Survival of vegetative pathogens (E. coli, Listeria, Salmonella) from undercooking.",
    isCcp: true,
    ccpNumber: "CCP 3",
    criticalLimit: "Core temperature >= 75°C for 30 seconds (or 70°C for 2 mins).",
    monitoring: "Digital probe inserted into thickest part of chicken/beef patty for every batch.",
    correctiveAction: "Continue cooking until probe verifies >= 75°C. Discard if equipment unable to reach heat."
  },
  {
    id: "haccp-5",
    stepName: "5. Hot Holding",
    hazardType: "Biological",
    hazardDesc: "Spore germination of Clostridium perfringens if held in temperature danger zone.",
    isCcp: true,
    ccpNumber: "CCP 4",
    criticalLimit: "Food held continuously at or above 63°C in heated display.",
    monitoring: "Probe temperature logged every 2 hours.",
    correctiveAction: "If food drops below 63°C for under 2 hours: reheat immediately to >= 75°C or discard."
  },
  {
    id: "haccp-6",
    stepName: "6. Two-Stage Cooling",
    hazardType: "Biological",
    hazardDesc: "Bacillus cereus spore toxin formation during slow cooling.",
    isCcp: true,
    ccpNumber: "CCP 5",
    criticalLimit: "Cool from 60°C to < 20°C in 2 hrs, then < 8°C in next 4 hrs (max 6 hrs total).",
    monitoring: "Log cooling start time and probe temp at 2 hrs and 6 hrs.",
    correctiveAction: "Discard food if not cooled below 8°C within 6 hours."
  }
];

export const HaccpPlanBuilderTool: React.FC<{ templateId?: string }> = () => {
  const [businessName, setBusinessName] = useState("Artisan Kitchen & Takeaway Ltd");
  const [foodCategory, setFoodCategory] = useState("Cook-Serve & Hot-Holding (Burgers, Pizzas & Fried Chicken)");
  const [managerName, setManagerName] = useState("Head Chef / Safety Lead");
  const [auditDate, setAuditDate] = useState(() => new Date().toISOString().split("T")[0]);

  const [steps, setSteps] = useState<HaccpStep[]>(DEFAULT_STEPS);

  const handleAddStep = () => {
    const newId = `haccp-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setSteps(prev => [
      ...prev,
      {
        id: newId,
        stepName: `${prev.length + 1}. Custom Process Step`,
        hazardType: "Biological",
        hazardDesc: "Identify potential biological, chemical, or physical hazard...",
        isCcp: false,
        criticalLimit: "Define measurable limit (e.g. Temp <= 4°C or >= 75°C)...",
        monitoring: "Describe check procedure and frequency...",
        correctiveAction: "Describe corrective action if limit is breached..."
      }
    ]);
  };

  const handleRemoveStep = (id: string) => {
    setSteps(prev => {
      if (prev.length <= 1) return prev;
      return prev.filter(s => s.id !== id);
    });
  };

  const handleUpdateStep = (id: string, field: keyof HaccpStep, val: any) => {
    setSteps(prev => prev.map(s => (s.id === id ? { ...s, [field]: val } : s)));
  };

  const handleReset = () => {
    setSteps(DEFAULT_STEPS);
    setBusinessName("Artisan Kitchen & Takeaway Ltd");
    setFoodCategory("Cook-Serve & Hot-Holding (Burgers, Pizzas & Fried Chicken)");
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Print Page Setup (Landscape for Wide HACCP Table) */}
      <style jsx global>{`
        @media print {
          @page {
            size: landscape;
            margin: 8mm;
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
            padding: 6px 8px !important;
            word-break: break-word !important;
            overflow-wrap: break-word !important;
            white-space: normal !important;
          }
          .printable-doc th {
            background-color: #f3f4f6 !important;
            color: #111827 !important;
            font-size: 8.5pt !important;
          }
        }
      `}</style>

      {/* ── TOOL HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-indigo-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            Codex Alimentarius &amp; UK FSA Compliant
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
            HACCP Plan Builder &amp; CCP Hazard Analysis Matrix
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Document critical control points, preventive limits, and corrective procedures for EHO compliance.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 no-print">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-2 rounded-xl">
            <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Click any cell to edit</span>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Reset to standard Codex steps"
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
            <span>Print HACCP Plan</span>
          </button>
        </div>
      </div>

      {/* ── BUSINESS DETAILS (EDITABLE HEADER) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/60 text-xs">
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Company / Establishment</label>
          <input
            type="text"
            value={businessName}
            onChange={e => setBusinessName(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden"
          />
          <div className="hidden print:block font-bold text-sm text-gray-900">{businessName}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Food Operation Scope</label>
          <input
            type="text"
            value={foodCategory}
            onChange={e => setFoodCategory(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg px-3 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden"
          />
          <div className="hidden print:block font-semibold text-xs text-gray-800">{foodCategory}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">HACCP Team Lead</label>
          <input
            type="text"
            value={managerName}
            onChange={e => setManagerName(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg px-3 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden"
          />
          <div className="hidden print:block font-semibold text-xs text-gray-800">{managerName}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Review Date</label>
          <input
            type="date"
            value={auditDate}
            onChange={e => setAuditDate(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg px-3 py-1.5 font-semibold text-gray-900 focus:outline-none print:hidden"
          />
          <div className="hidden print:block font-semibold text-xs text-gray-800">{auditDate}</div>
        </div>
      </div>

      {/* ── HACCP MATRIX TABLE ── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between no-print">
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
              7-Principle Hazard Analysis &amp; Critical Control Points
            </h3>
            <p className="text-xs text-gray-500">
              All textareas and fields below are 100% editable. When printed, all text prints fully with zero clipping.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddStep}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Process Step</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white print:border-none print:overflow-visible">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b" style={{ width: "13%" }}>Process Step</th>
                <th className="p-3 border-b" style={{ width: "10%" }}>Hazard Type</th>
                <th className="p-3 border-b" style={{ width: "21%" }}>Hazard Details</th>
                <th className="p-3 border-b text-center" style={{ width: "8%" }}>CCP?</th>
                <th className="p-3 border-b" style={{ width: "16%" }}>Critical Limit</th>
                <th className="p-3 border-b" style={{ width: "16%" }}>Monitoring Procedure</th>
                <th className="p-3 border-b" style={{ width: "16%" }}>Corrective Action</th>
                <th className="p-3 border-b text-right no-print" style={{ width: "5%" }}>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {steps.map(s => (
                <tr key={s.id} className="hover:bg-indigo-50/20 transition-colors">
                  {/* 1. Process Step Name */}
                  <td className="p-2.5 font-bold text-gray-900 align-top">
                    <input
                      type="text"
                      value={s.stepName}
                      onChange={e => handleUpdateStep(s.id, "stepName", e.target.value)}
                      placeholder="Step name..."
                      className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg px-2.5 py-2 font-bold text-xs text-gray-900 focus:outline-none print:hidden shadow-2xs"
                    />
                    <div className="hidden print:block font-bold text-[8.5pt] text-gray-950">
                      {s.stepName}
                    </div>
                  </td>

                  {/* 2. Hazard Type */}
                  <td className="p-2.5 align-top">
                    <select
                      value={s.hazardType}
                      onChange={e => handleUpdateStep(s.id, "hazardType", e.target.value)}
                      className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg px-2 py-2 text-xs font-semibold text-gray-800 print:hidden shadow-2xs focus:outline-none"
                    >
                      <option value="Biological">Biological</option>
                      <option value="Chemical">Chemical</option>
                      <option value="Physical">Physical</option>
                      <option value="Allergenic">Allergenic</option>
                    </select>
                    <div className="hidden print:block text-[8.5pt] font-semibold text-gray-900">
                      {s.hazardType}
                    </div>
                  </td>

                  {/* 3. Hazard Details */}
                  <td className="p-2.5 align-top">
                    <textarea
                      rows={4}
                      value={s.hazardDesc}
                      onChange={e => handleUpdateStep(s.id, "hazardDesc", e.target.value)}
                      placeholder="Identify specific hazard details..."
                      className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg p-2.5 text-xs text-gray-800 leading-relaxed print:hidden shadow-2xs focus:outline-none resize-y min-h-[96px]"
                    />
                    <div className="hidden print:block text-[9pt] leading-relaxed text-gray-950 whitespace-pre-wrap">
                      {s.hazardDesc}
                    </div>
                  </td>

                  {/* 4. CCP Designation */}
                  <td className="p-2.5 text-center align-top">
                    <button
                      type="button"
                      onClick={() => handleUpdateStep(s.id, "isCcp", !s.isCcp)}
                      className={`px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-extrabold cursor-pointer transition-transform active:scale-95 print:hidden shadow-xs ${
                        s.isCcp
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
                      }`}
                      title="Click to toggle CCP vs PRP"
                    >
                      {s.isCcp ? (s.ccpNumber || "CCP") : "PRP"}
                    </button>
                    <div className="hidden print:block">
                      <span
                        className={`inline-block px-1.5 py-0.5 rounded text-[8pt] font-mono font-black ${
                          s.isCcp
                            ? "border border-red-600 text-red-700 bg-red-50"
                            : "border border-gray-400 text-gray-700 bg-gray-50"
                        }`}
                      >
                        {s.isCcp ? (s.ccpNumber || "CCP") : "PRP"}
                      </span>
                    </div>
                  </td>

                  {/* 5. Critical Limit */}
                  <td className="p-2.5 align-top">
                    <textarea
                      rows={4}
                      value={s.criticalLimit}
                      onChange={e => handleUpdateStep(s.id, "criticalLimit", e.target.value)}
                      placeholder="Specify measurable limits..."
                      className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg p-2.5 text-xs text-gray-800 font-mono leading-relaxed print:hidden shadow-2xs focus:outline-none resize-y min-h-[96px]"
                    />
                    <div className="hidden print:block text-[9pt] font-mono leading-relaxed text-gray-950 whitespace-pre-wrap">
                      {s.criticalLimit}
                    </div>
                  </td>

                  {/* 6. Monitoring Procedure */}
                  <td className="p-2.5 align-top">
                    <textarea
                      rows={4}
                      value={s.monitoring}
                      onChange={e => handleUpdateStep(s.id, "monitoring", e.target.value)}
                      placeholder="Monitoring procedure..."
                      className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg p-2.5 text-xs text-gray-800 leading-relaxed print:hidden shadow-2xs focus:outline-none resize-y min-h-[96px]"
                    />
                    <div className="hidden print:block text-[9pt] leading-relaxed text-gray-950 whitespace-pre-wrap">
                      {s.monitoring}
                    </div>
                  </td>

                  {/* 7. Corrective Action */}
                  <td className="p-2.5 align-top">
                    <textarea
                      rows={4}
                      value={s.correctiveAction}
                      onChange={e => handleUpdateStep(s.id, "correctiveAction", e.target.value)}
                      placeholder="Corrective actions taken..."
                      className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-indigo-600 rounded-lg p-2.5 text-xs text-red-950 font-medium leading-relaxed print:hidden shadow-2xs focus:outline-none resize-y min-h-[96px]"
                    />
                    <div className="hidden print:block text-[9pt] leading-relaxed text-red-950 font-semibold whitespace-pre-wrap">
                      {s.correctiveAction}
                    </div>
                  </td>

                  {/* 8. Action (Delete) */}
                  <td className="p-2.5 text-right no-print align-top">
                    <button
                      type="button"
                      onClick={() => handleRemoveStep(s.id)}
                      disabled={steps.length <= 1}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        steps.length <= 1
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-400 hover:text-red-500 hover:bg-red-50"
                      }`}
                      title="Remove step"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── BOTTOM ADD BUTTON ── */}
        <div className="flex items-center justify-between no-print pt-1">
          <button
            type="button"
            onClick={handleAddStep}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow cursor-pointer hover:scale-[1.01]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Process Step Row</span>
          </button>
          <span className="text-xs font-mono text-gray-500">
            {steps.length} step{steps.length !== 1 ? "s" : ""} documented • All fields printable
          </span>
        </div>
      </div>

      {/* ── REGULATORY FOOTER ── */}
      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-gray-400 font-mono gap-2">
        <div>• Saim Dev Food Safety Architecture • Codex HACCP Standards</div>
        <div>Audited &amp; Signed By: {managerName} • Retained Reg (EC) 852/2004</div>
      </div>
    </div>
  );
};
