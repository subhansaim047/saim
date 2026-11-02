import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\HaccpPlanBuilderTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Fix British English
text = text.replace("color-coded", "colour-coded")

# Add FileSpreadsheet import
if "FileSpreadsheet" not in text:
    text = text.replace('import {\n  Plus,\n  Trash2,\n  Printer,\n  ShieldCheck,\n  CheckCircle2,\n  AlertOctagon,\n  RotateCcw,\n  Edit3\n} from "lucide-react";',
                        'import {\n  Plus,\n  Trash2,\n  Printer,\n  ShieldCheck,\n  CheckCircle2,\n  AlertOctagon,\n  RotateCcw,\n  Edit3,\n  FileSpreadsheet,\n  BookOpen\n} from "lucide-react";')

# Add exportHaccpCSV
csv_func = '''  const exportHaccpCSV = () => {
    let csv = "Business Name,Food Category,Supervisor,Audit Date\\n";
    csv += `"${businessName || "Commercial Kitchen"}","${foodCategory}","${managerName || "Head Chef"}","${auditDate}"\\n\\n`;
    csv += "Step,Hazard Type,Hazard Description,Is CCP,CCP #,Critical Limit,Monitoring Procedure,Corrective Action\\n";
    steps.forEach(s => {
      csv += `"${s.stepName}","${s.hazardType}","${s.hazardDesc.replace(/"/g, '""')}","${s.isCcp ? "YES" : "NO"}","${s.ccpNumber || "PRP"}","${s.criticalLimit.replace(/"/g, '""')}","${s.monitoring.replace(/"/g, '""')}","${s.correctiveAction.replace(/"/g, '""')}"\\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `HACCP_Plan_${(businessName || "Kitchen").replace(/\\s+/g, "_")}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
'''

if "const exportHaccpCSV" not in text:
    pos_reset = text.find("const handleReset = () => {")
    if pos_reset != -1:
        text = text[:pos_reset] + csv_func + "\n  " + text[pos_reset:]

# Add Export CSV button next to Print button
print_target = '''            <button
              onClick={() => window.print()}
              className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.02]"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print A4 HACCP Plan</span>
            </button>'''

export_print_target = '''            <button
              onClick={exportHaccpCSV}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all border border-slate-300 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => window.print()}
              className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.02]"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print A4 HACCP Plan</span>
            </button>'''

if print_target in text:
    text = text.replace(print_target, export_print_target, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Updated HaccpPlanBuilderTool.tsx with British English & CSV export")
