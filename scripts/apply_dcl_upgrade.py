import sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# 1. Update imports
old_import = 'import { Plus, Trash2, Printer, Check, AlertCircle, Clock, Thermometer, ShieldCheck, Edit3 } from "lucide-react";'
new_import = 'import { Plus, Trash2, Printer, Check, AlertCircle, Clock, Thermometer, ShieldCheck, Edit3, FileSpreadsheet, Timer, Play, Pause, RotateCcw } from "lucide-react";\nimport { useEffect } from "react";'

text = text.replace(old_import, new_import, 1)

# 2. Add Task presets definitions right before export const DigitalChecklistTool
task_presets = '''const CLEANING_TASKS: CheckItem[] = [
  {
    id: "clean-1",
    category: "Two-Stage Disinfection (BS EN 1276)",
    task: "Food-contact surfaces cleaned with detergent to remove soil and grease, followed by BS EN 1276 sanitiser left for statutory contact time (30–60s) before final clean wipe.",
    status: "pass",
    actionNotes: "Two-stage disinfection method completed"
  },
  {
    id: "clean-2",
    category: "Commercial Cook Line & Prep",
    task: "Fryer wells skimmed/filtered, plancha and char-grill scraped, oven door gaskets cleaned, and extraction hood grease baffle filters soaked and degreased.",
    status: "pass",
    actionNotes: "Extraction filters degreased and refitted"
  },
  {
    id: "clean-3",
    category: "Dining Room & Front-of-House",
    task: "Dining tables, dining chairs, card payment terminals, door touchpoints, and laminated takeaway menus disinfected with food-safe antibacterial wipes.",
    status: "pass",
    actionNotes: "High-touch points disinfected between service runs"
  },
  {
    id: "clean-4",
    category: "Potwash & Warewashing",
    task: "Commercial pass-through dishwasher operating with wash temp >=55°C and final rinse >=82°C. Wash arms cleared and chemical dosing lines verified.",
    status: "pass",
    actionNotes: "Rinse temperature verified at 84°C"
  },
  {
    id: "clean-5",
    category: "Customer & Staff Restrooms",
    task: "Toilets descaled, hand basins disinfected, antibacterial hand soap (BS EN 1499) replenished, warm running water verified, and paper roll dispensers filled.",
    status: "pass",
    actionNotes: "Restrooms inspected and signed off"
  },
  {
    id: "clean-6",
    category: "Refuse, Waste & COSHH Cupboard",
    task: "Internal bins emptied and relined; external commercial waste wheelie bins locked; grease trap area checked; all cleaning chemicals locked in COSHH cupboard.",
    status: "pass",
    actionNotes: "External bins locked & COSHH secured"
  }
];

const DEFAULT_GENERAL_TASKS: CheckItem[] = [
  {
    id: "1",
    category: "Refrigeration & Cold Chain",
    task: "All commercial chillers operating under 5°C; probes sanitised before & after use.",
    status: "pass",
    actionNotes: "Calibrated probe reading verified"
  },
  {
    id: "2",
    category: "Cross-Contamination",
    task: "Raw meats stored strictly beneath ready-to-eat foods; distinct colour-coded chopping boards in place.",
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
    task: "All pre-prepped items and PPDS foods labelled with preparation date, use-by date & 14 allergens.",
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
];

'''

text = text.replace("export const DigitalChecklistTool:", task_presets + "export const DigitalChecklistTool:", 1)

# 3. Replace tasks declaration and add timer and exportCSV
target_tasks = '''  // Checklist Tasks
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
  ]);'''

new_tasks_and_timer = '''  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
  // Checklist Tasks
  const [tasks, setTasks] = useState<CheckItem[]>(() =>
    isCleaning ? CLEANING_TASKS : DEFAULT_GENERAL_TASKS
  );

  // BS EN 1276 Chemical Sanitiser Contact Time Stopwatch
  const [timerTarget, setTimerTarget] = useState(30);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft(s => s - 1);
      }, 1000);
    } else if (timerSecondsLeft === 0) {
      setTimerActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timerSecondsLeft]);

  const resetTimer = (sec: number) => {
    setTimerTarget(sec);
    setTimerSecondsLeft(sec);
    setTimerActive(false);
  };

  const exportChecklistCSV = () => {
    let csv = "Shift,Date,Inspector,Category,Task Description,Status,Action Notes\\n";
    tasks.forEach(t => {
      csv += `"${shift}","${logDate}","${inspectorName}","${t.category}","${t.task.replace(/"/g, '""')}","${t.status.toUpperCase()}","${(t.actionNotes || "").replace(/"/g, '""')}"\\n`;
    });
    csv += "\\nTEMPERATURE PROBE RECORDS\\n";
    csv += "Unit,Target,Time,Recorded Temp,Signed By,Status\\n";
    tempRecords.forEach(r => {
      csv += `"${r.unit}","${r.target}","${r.time}","${r.temp}","${r.signedBy}","${r.status.toUpperCase()}"\\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Kitchen_Checklist_${logDate}_${shift}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };'''

text = text.replace(target_tasks, new_tasks_and_timer, 1)

# 4. Add Export CSV button in Header alongside Print button
print_btn_target = '''          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.02]"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>Print Official Log</span>
          </button>'''

export_and_print = '''          <button
            type="button"
            onClick={exportChecklistCSV}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all border border-slate-300 cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Export CSV</span>
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.02]"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>Print Official Log</span>
          </button>'''

text = text.replace(print_btn_target, export_and_print, 1)

# 5. Add BS EN 1276 Contact Time Widget above or below Meta Bar
meta_bar_target = '      {/* Meta Bar */}'
timer_widget = '''      {/* BS EN 1276 Sanitiser Contact Time Verification Widget */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 no-print shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-amber-700" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-950 font-mono">
              BS EN 1276 Disinfectant Contact Time Guide
            </span>
          </div>
          <p className="text-xs text-gray-700 max-w-xl">
            UK Food Standards Agency (FSA) regulations require kitchen surface sanitisers to remain visibly wet on food-contact counters for the certified dwell time (typically 30 to 60 seconds) to destroy 99.999% of bacteria.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white border border-amber-300 rounded-xl px-2.5 py-1">
            {[30, 60, 120].map(s => (
              <button
                key={s}
                type="button"
                onClick={() => resetTimer(s)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition ${
                  timerTarget === s ? "bg-amber-800 text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                {s}s
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-white border border-amber-300 rounded-xl px-3 py-1.5">
            <span className={`font-mono text-base font-black ${timerSecondsLeft === 0 ? "text-emerald-600 animate-pulse" : "text-gray-900"}`}>
              {timerSecondsLeft}s
            </span>
            <button
              type="button"
              onClick={() => setTimerActive(!timerActive)}
              className="text-xs font-bold px-2 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center gap-1 cursor-pointer"
            >
              {timerActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{timerActive ? "Pause" : "Start"}</span>
            </button>
            <button
              type="button"
              onClick={() => resetTimer(timerTarget)}
              className="text-gray-400 hover:text-gray-700 cursor-pointer p-1"
              title="Reset timer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Meta Bar */}'''

text = text.replace(meta_bar_target, timer_widget, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Successfully upgraded DigitalChecklistTool.tsx")
