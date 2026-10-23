"use client";

import React, { useState } from "react";
import { Plus, Trash2, Printer, Download, ShieldCheck, CheckCircle2, AlertOctagon, HelpCircle } from "lucide-react";

interface HaccpStep {
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

export const HaccpPlanBuilderTool: React.FC<{ templateId?: string }> = ({ templateId }) => {
  const [businessName, setBusinessName] = useState("Artisan Kitchen & Takeaway Ltd");
  const [foodCategory, setFoodCategory] = useState("Cook-Serve & Hot-Holding (Burgers, Pizzas & Fried Chicken)");
  const [managerName, setManagerName] = useState("Head Chef / Safety Lead");
  const [auditDate, setAuditDate] = useState(() => new Date().toISOString().split("T")[0]);

  const [steps, setSteps] = useState<HaccpStep[]>([
    {
      id: "1",
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
      id: "2",
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
      id: "3",
      stepName: "3. Preparation & Chopping",
      hazardType: "Allergenic",
      hazardDesc: "Cross-contact of gluten/nuts with allergen-free meals; cross-contamination of raw poultry.",
      isCcp: false,
      criticalLimit: "Strict color-coded boards (Yellow: poultry, Red: raw meat, Green: salad, Purple: allergen).",
      monitoring: "Visual inspection by shift supervisor; sanitiser wipe down between tasks.",
      correctiveAction: "Re-wash and sanitise station; re-prepare allergen order if cross-contact suspected."
    },
    {
      id: "4",
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
      id: "5",
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
      id: "6",
      stepName: "6. Two-Stage Cooling",
      hazardType: "Biological",
      hazardDesc: "Bacillus cereus spore toxin formation during slow cooling.",
      isCcp: true,
      ccpNumber: "CCP 5",
      criticalLimit: "Cool from 60°C to < 20°C in 2 hrs, then < 8°C in next 4 hrs (max 6 hrs total).",
      monitoring: "Log cooling start time and probe temp at 2 hrs and 6 hrs.",
      correctiveAction: "Discard food if not cooled below 8°C within 6 hours."
    }
  ]);

  const handleAddStep = () => {
    const newId = `haccp-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setSteps(prev => [
      ...prev,
      {
        id: newId,
        stepName: "Custom Process Step",
        hazardType: "Biological",
        hazardDesc: "Identify potential hazard...",
        isCcp: false,
        criticalLimit: "Define measurable limit...",
        monitoring: "Describe check procedure...",
        correctiveAction: "Describe corrective action..."
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
    setSteps(prev => prev.map(s => s.id === id ? { ...s, [field]: val } : s));
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Header */}
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

        <div className="flex items-center gap-2 no-print">
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border border-gray-200"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print HACCP Plan</span>
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

      {/* Business Header Meta */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/60 text-xs">
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Company / Establishment</label>
          <input
            type="text"
            value={businessName}
            onChange={e => setBusinessName(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-bold text-gray-900"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Food Operation Scope</label>
          <input
            type="text"
            value={foodCategory}
            onChange={e => setFoodCategory(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-semibold text-gray-900"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">HACCP Team Lead</label>
          <input
            type="text"
            value={managerName}
            onChange={e => setManagerName(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-semibold text-gray-900"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Review Date</label>
          <input
            type="date"
            value={auditDate}
            onChange={e => setAuditDate(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-semibold text-gray-900"
          />
        </div>
      </div>

      {/* HACCP Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
            7-Principle Hazard Analysis &amp; Critical Control Points
          </h3>
          <button
            type="button"
            onClick={handleAddStep}
            className="no-print bg-gray-900 hover:bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Process Step</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b">Process Step</th>
                <th className="p-3 border-b">Hazard Type</th>
                <th className="p-3 border-b">Hazard Details</th>
                <th className="p-3 border-b text-center">CCP?</th>
                <th className="p-3 border-b">Critical Limit</th>
                <th className="p-3 border-b">Monitoring Procedure</th>
                <th className="p-3 border-b">Corrective Action</th>
                <th className="p-3 border-b text-right no-print">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {steps.map(s => (
                <tr key={s.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-3 font-bold text-gray-900 min-w-[140px]">
                    <input
                      type="text"
                      value={s.stepName}
                      onChange={e => handleUpdateStep(s.id, "stepName", e.target.value)}
                      className="w-full bg-transparent font-bold border-b border-transparent hover:border-gray-300 focus:border-gray-500 py-1"
                    />
                  </td>
                  <td className="p-3 min-w-[110px]">
                    <select
                      value={s.hazardType}
                      onChange={e => handleUpdateStep(s.id, "hazardType", e.target.value)}
                      className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    >
                      <option value="Biological">Biological</option>
                      <option value="Chemical">Chemical</option>
                      <option value="Physical">Physical</option>
                      <option value="Allergenic">Allergenic</option>
                    </select>
                  </td>
                  <td className="p-3 min-w-[180px]">
                    <textarea
                      rows={2}
                      value={s.hazardDesc}
                      onChange={e => handleUpdateStep(s.id, "hazardDesc", e.target.value)}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg p-1.5 text-xs text-gray-700"
                    />
                  </td>
                  <td className="p-3 text-center min-w-[90px]">
                    <button
                      type="button"
                      onClick={() => handleUpdateStep(s.id, "isCcp", !s.isCcp)}
                      className={`px-2 py-1 rounded-md text-[10px] font-mono font-extrabold cursor-pointer transition-transform active:scale-95 ${
                        s.isCcp
                          ? "bg-red-600 text-white shadow-xs"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {s.isCcp ? (s.ccpNumber || "CCP") : "PRP"}
                    </button>
                  </td>
                  <td className="p-3 min-w-[160px]">
                    <textarea
                      rows={2}
                      value={s.criticalLimit}
                      onChange={e => handleUpdateStep(s.id, "criticalLimit", e.target.value)}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg p-1.5 text-xs text-gray-700 font-mono"
                    />
                  </td>
                  <td className="p-3 min-w-[160px]">
                    <textarea
                      rows={2}
                      value={s.monitoring}
                      onChange={e => handleUpdateStep(s.id, "monitoring", e.target.value)}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg p-1.5 text-xs text-gray-700"
                    />
                  </td>
                  <td className="p-3 min-w-[160px]">
                    <textarea
                      rows={2}
                      value={s.correctiveAction}
                      onChange={e => handleUpdateStep(s.id, "correctiveAction", e.target.value)}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg p-1.5 text-xs text-red-900 font-semibold"
                    />
                  </td>
                  <td className="p-3 text-right no-print">
                    <button
                      type="button"
                      onClick={() => handleRemoveStep(s.id)}
                      className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between no-print pt-1">
          <button
            type="button"
            onClick={handleAddStep}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow cursor-pointer hover:scale-[1.01]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Process Step</span>
          </button>
          <span className="text-xs font-mono text-gray-500">
            {steps.length} step{steps.length !== 1 ? "s" : ""} documented
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
        <div>• Saim Dev Food Safety Architecture • Codex HACCP Standards</div>
        <div>Compliant with Food Safety Act 1990 &amp; Retained Reg (EC) 852/2004</div>
      </div>
    </div>
  );
};
