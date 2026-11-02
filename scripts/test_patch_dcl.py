import sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Fix American spellings
text = text.replace("probes sanitized before & after use.", "probes sanitised before & after use.")
text = text.replace("distinct color chopping boards", "distinct colour-coded chopping boards")
text = text.replace("foods labeled with preparation date", "foods labelled with preparation date")

# Add FileSpreadsheet and Timer to imports if not present
if "FileSpreadsheet" not in text:
    text = text.replace('import { Plus, Trash2, Printer, Check, AlertCircle, Clock, Thermometer, ShieldCheck, Edit3 } from "lucide-react";',
                        'import { Plus, Trash2, Printer, Check, AlertCircle, Clock, Thermometer, ShieldCheck, Edit3, FileSpreadsheet, Timer, Play, Pause, RotateCcw } from "lucide-react";')

# Let's inspect tasks initialization
cleaning_def = '''const CLEANING_TASKS: CheckItem[] = [
  {
    id: "clean-1",
    category: "Two-Stage Disinfection (BS EN 1276)",
    task: "Food-contact surfaces cleaned with detergent to remove soil/grease, followed by BS EN 1276 sanitiser left for statutory contact time (30–60s) before final wipe.",
    status: "pass",
    actionNotes: "Two-stage clean executed on prep lines"
  },
  {
    id: "clean-2",
    category: "Commercial Cook Line & Prep",
    task: "Fryer wells skimmed and drained, plancha scraped, oven door seals wiped, and extraction hood grease baffle filters checked for grease accumulation.",
    status: "pass",
    actionNotes: "Extraction filters soaked and degreased"
  },
  {
    id: "clean-3",
    category: "Dining Room & Front-of-House",
    task: "Customer dining tables, chairs, payment card PDQ terminals, laminated menus, and door touchpoints sanitised with food-safe surface wipes.",
    status: "pass",
    actionNotes: "High-touch points disinfected between sittings"
  },
  {
    id: "clean-4",
    category: "Potwash & Warewashing",
    task: "Commercial dishwasher operating at wash temp >=55°C and rinse temp >=82°C. Wash arms cleared of debris and chemical detergent/rinse-aid lines verified.",
    status: "pass",
    actionNotes: "Rinse temperature verified at 84°C"
  },
  {
    id: "clean-5",
    category: "Customer & Staff Restrooms",
    task: "Toilets descaled, basins disinfected, antibacterial hand soap (BS EN 1499) restocked, hot running water verified, and paper roll dispensers filled.",
    status: "pass",
    actionNotes: "Restrooms inspected and signed off"
  },
  {
    id: "clean-6",
    category: "Refuse, Waste & COSHH Storage",
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
];'''

# Replace tasks declaration
target_tasks = '''  // Checklist Tasks
  const [tasks, setTasks] = useState<CheckItem[]>([
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
  ]);'''

# Check if target_tasks exists in text
print("target_tasks in text:", target_tasks in text)
