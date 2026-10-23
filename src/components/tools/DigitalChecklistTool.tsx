"use client";

import React, { useState } from "react";
import { Plus, Trash2, Printer, Download, Check, AlertCircle, Clock, Thermometer, ShieldCheck } from "lucide-react";

interface CheckItem {
  id: string;
  category: string;
  task: string;
  status: "pass" | "fail" | "pending";
  actionNotes: string;
}

interface TempEntry {
  id: string;
  unit: string;
  target: string;
  time: string;
  temp: string;
  signedBy: string;
  status: "pass" | "fail";
}

export const DigitalChecklistTool: React.FC<{ templateTitle: string; templateId?: string }> = ({ templateTitle, templateId }) => {
  const [shift, setShift] = useState<"Opening" | "Midday" | "Closing">("Opening");
  const [inspectorName, setInspectorName] = useState("Shift Manager / Supervisor");
  const [logDate, setLogDate] = useState(() => new Date().toISOString().split("T")[0]);

  // Temperature Probe Records
  const [tempRecords, setTempRecords] = useState<TempEntry[]>([
    { id: "1", unit: "Walk-in Chiller 1", target: "<= 4°C", time: "08:15", temp: "2.8°C", signedBy: "JS", status: "pass" },
    { id: "2", unit: "Cook Line Prep Fridge", target: "<= 5°C", time: "08:20", temp: "3.9°C", signedBy: "JS", status: "pass" },
    { id: "3", unit: "Commercial Deep Freezer", target: "<= -18°C", time: "08:30", temp: "-19.4°C", signedBy: "JS", status: "pass" },
    { id: "4", unit: "Hot Holding Well (Display)", target: ">= 63°C", time: "11:45", temp: "68.2°C", signedBy: "MB", status: "pass" },
    { id: "5", unit: "Raw Poultry Cooking Core", target: ">= 75°C", time: "12:10", temp: "78.5°C", signedBy: "MB", status: "pass" }
  ]);

  // Checklist Tasks
  const [tasks, setTasks] = useState<CheckItem[]>([
    {
      id: "1",
      category: "Refrigeration & Cold Chain",
      task: "All commercial chillers operating under 5°C; probes sanitized before & after use.",
      status: "pass",
      actionNotes: "Calibrated probe reading verified"
    },
    {
      id: "2",
      category: "Cross-Contamination",
      task: "Raw meats stored strictly beneath ready-to-eat foods; distinct color chopping boards in place.",
      status: "pass",
      actionNotes: "Yellow poultry and Red meat boards separated"
    },
    {
      id: "3",
      category: "Personal Hygiene",
      task: "Handwashing basins stocked with warm water, antibacterial soap (BS EN 1499) and blue paper roll.",
      status: "pass",
      actionNotes: "Basin 2 refilled with soap"
    },
    {
      id: "4",
      category: "Natasha's Law & Labelling",
      task: "All pre-prepped items and PPDS foods labeled with preparation date, use-by date & 14 allergens.",
      status: "pass",
      actionNotes: "Day dots updated"
    },
    {
      id: "5",
      category: "Chemicals & Sanitation",
      task: "Surface sanitiser mixed to correct manufacturer dilution (BS EN 1276 compliance verified).",
      status: "pending",
      actionNotes: "New spray bottle required"
    },
    {
      id: "6",
      category: "Waste & Refuse",
      task: "External bins locked, waste bags intact, grease trap lid sealed and clean.",
      status: "pass",
      actionNotes: "Refuse area swept"
    }
  ]);

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Hygiene");

  const toggleTaskStatus = (id: string) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id !== id) return t;
        const next = t.status === "pass" ? "fail" : t.status === "fail" ? "pending" : "pass";
        return { ...t, status: next };
      })
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        category: newTaskCategory,
        task: newTaskText.trim(),
        status: "pending",
        actionNotes: ""
      }
    ]);
    setNewTaskText("");
  };

  const handleAddTempRow = () => {
    setTempRecords(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        unit: "Custom Chiller / Hot Hold",
        target: "<= 5°C",
        time: "12:00",
        temp: "",
        signedBy: "",
        status: "pass"
      }
    ]);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-600" />
            Official Environmental Health Officer (EHO) Inspection Audit
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
            {templateTitle || "Commercial Kitchen Verification Checklist & Temp Log"}
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Real-time digital inspection log. Sign off checks and export directly for local authority inspections.
          </p>
        </div>

        <div className="flex items-center gap-2 no-print">
          <div className="flex bg-gray-100 rounded-xl p-1 border border-gray-200 text-xs font-bold">
            {(["Opening", "Midday", "Closing"] as const).map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setShift(s)}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  shift === s ? "bg-white text-black shadow-xs" : "text-gray-500 hover:text-black"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border border-gray-200"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Official Log</span>
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

      {/* Meta Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs">
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Inspector / Supervisor</label>
          <input
            type="text"
            value={inspectorName}
            onChange={e => setInspectorName(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-bold text-gray-900"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Shift Type</label>
          <div className="py-1.5 font-bold text-gray-900 font-mono text-sm">{shift} Shift Routine</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Inspection Date</label>
          <input
            type="date"
            value={logDate}
            onChange={e => setLogDate(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-bold text-gray-900"
          />
        </div>
      </div>

      {/* 1. Daily Critical Temperature Log */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-red-500" />
            <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
              1. Calibrated Probe Temperature Record
            </h3>
          </div>
          <button
            type="button"
            onClick={handleAddTempRow}
            className="no-print bg-gray-900 hover:bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Equipment</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b">Equipment / Product</th>
                <th className="p-3 border-b">Target Limit</th>
                <th className="p-3 border-b">Log Time</th>
                <th className="p-3 border-b font-bold">Probe Reading</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Initial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tempRecords.map(t => (
                <tr key={t.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-3 font-semibold text-gray-900">
                    <input
                      type="text"
                      value={t.unit}
                      onChange={e => {
                        const val = e.target.value;
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, unit: val } : r));
                      }}
                      className="w-full bg-transparent border-b border-transparent hover:border-gray-300 focus:border-gray-500 py-0.5"
                    />
                  </td>
                  <td className="p-3 font-mono text-gray-500">{t.target}</td>
                  <td className="p-3 font-mono">
                    <input
                      type="text"
                      value={t.time}
                      onChange={e => {
                        const val = e.target.value;
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, time: val } : r));
                      }}
                      className="w-16 bg-gray-50 border border-gray-200 rounded px-1.5 py-0.5 font-mono"
                    />
                  </td>
                  <td className="p-3 font-mono font-bold text-gray-900">
                    <input
                      type="text"
                      value={t.temp}
                      placeholder="e.g. 3.4°C"
                      onChange={e => {
                        const val = e.target.value;
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, temp: val } : r));
                      }}
                      className="w-24 bg-gray-50 border border-gray-200 rounded px-2 py-0.5 font-bold"
                    />
                  </td>
                  <td className="p-3">
                    <button
                      type="button"
                      onClick={() => {
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, status: r.status === "pass" ? "fail" : "pass" } : r));
                      }}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold cursor-pointer ${
                        t.status === "pass" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {t.status.toUpperCase()}
                    </button>
                  </td>
                  <td className="p-3 font-mono text-gray-400">
                    <input
                      type="text"
                      value={t.signedBy}
                      placeholder="Sign"
                      onChange={e => {
                        const val = e.target.value;
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, signedBy: val } : r));
                      }}
                      className="w-12 bg-transparent border-b border-gray-200 text-center uppercase"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Inspection Verification Items */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
          2. Mandatory HACCP &amp; Food Hygiene Checks
        </h3>

        <div className="space-y-2">
          {tasks.map(task => (
            <div
              key={task.id}
              className={`p-3.5 rounded-2xl border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                task.status === "pass"
                  ? "bg-emerald-50/50 border-emerald-200"
                  : task.status === "fail"
                  ? "bg-red-50/50 border-red-200"
                  : "bg-gray-50/80 border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3 flex-1">
                <button
                  type="button"
                  onClick={() => toggleTaskStatus(task.id)}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all cursor-pointer mt-0.5 shrink-0 ${
                    task.status === "pass"
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : task.status === "fail"
                      ? "bg-red-600 border-red-600 text-white"
                      : "bg-white border-gray-300 text-transparent"
                  }`}
                  title="Click to cycle status: Pass / Fail / Pending"
                >
                  {task.status === "pass" ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : task.status === "fail" ? (
                    <span className="text-xs font-black">!</span>
                  ) : null}
                </button>

                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                    {task.category}
                  </span>
                  <p className="text-xs font-bold text-gray-900 leading-snug">{task.task}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <input
                  type="text"
                  placeholder="Action taken / notes..."
                  value={task.actionNotes}
                  onChange={e => {
                    const val = e.target.value;
                    setTasks(prev => prev.map(t => t.id === task.id ? { ...t, actionNotes: val } : t));
                  }}
                  className="bg-white border border-gray-200 rounded-lg px-2.5 py-1 text-xs text-gray-700 w-44 focus:outline-none"
                />

                <span
                  onClick={() => toggleTaskStatus(task.id)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-black uppercase cursor-pointer ${
                    task.status === "pass"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : task.status === "fail"
                      ? "bg-red-600 text-white shadow-xs"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Check Form */}
        <form onSubmit={handleAddTask} className="flex gap-2 items-center no-print pt-1">
          <input
            type="text"
            placeholder="Add custom verification check..."
            value={newTaskText}
            onChange={e => setNewTaskText(e.target.value)}
            className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900"
          />
          <input
            type="text"
            placeholder="Category..."
            value={newTaskCategory}
            onChange={e => setNewTaskCategory(e.target.value)}
            className="w-32 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900"
          />
          <button
            type="submit"
            className="bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 cursor-pointer shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Check</span>
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
        <div>• Saim Dev Inspection Records • Retain On Premises For Minimum 12 Months</div>
        <div>Audited By: {inspectorName}</div>
      </div>
    </div>
  );
};
