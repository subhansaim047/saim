import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/tools/DigitalChecklistTool.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

bar_and_foh_tasks = '''const BAR_OPERATIONS_TASKS: CheckItem[] = [
  {
    id: "bar-1",
    category: "1. Cellar & Beer Line Sanitation",
    task: "Verify beer line cleaning rota completed with purple-indicator chemical; cellar temperature maintained between 10°C and 12°C.",
    status: "pass",
    actionNotes: "Lines cleaned and flushed with fresh water"
  },
  {
    id: "bar-2",
    category: "2. Commercial Glasswasher Sanitisation",
    task: "Check glasswasher chemical dosing levels: wash temp >=55°C, rinse temp >=65°C, and wash tank cleared of broken glass and lime scale.",
    status: "pass",
    actionNotes: "Glasswasher chemicals full; rinse verified"
  },
  {
    id: "bar-3",
    category: "3. Ice Machine & Ice Scoop Hygiene",
    task: "Inspect commercial ice machine: zero pink slime or biofilm in chute; dedicated sanitized plastic scoop stored in wall holster (never left in ice bin).",
    status: "pass",
    actionNotes: "Ice machine sanitized; scoop holstered"
  },
  {
    id: "bar-4",
    category: "4. Garnish Station & Natasha's Law Allergens",
    task: "Cut fresh citrus and cocktail garnishes daily; label with prep date and use-by time; separate egg white cocktail shaker from standard shakers.",
    status: "pass",
    actionNotes: "Garnishes prepped and egg shakers segregated"
  },
  {
    id: "bar-5",
    category: "5. Bar Optics, Pourers & Speed Rails",
    task: "Soak optic nozzles and pour spouts in warm water; sanitize speed rails and rubber bar counter spill mats.",
    status: "pass",
    actionNotes: "Optics and pourers soaked and disinfected"
  },
  {
    id: "bar-6",
    category: "6. Handwash Basin & Staff Hygiene",
    task: "Dedicated bar handwash sink fully stocked with warm running water, unperfumed soap (BS EN 1499), and blue paper roll.",
    status: "pass",
    actionNotes: "Handwash basin clean and stocked"
  },
  {
    id: "bar-7",
    category: "7. Bottle Dumps & Glass Recycling",
    task: "Empty under-counter bottle bins into external commercial glass recycling skip; verify skip is locked and free from broken glass hazards.",
    status: "pass",
    actionNotes: "Bottle skips locked and surrounding area swept"
  }
];

const RESTAURANT_FOH_TASKS: CheckItem[] = [
  {
    id: "foh-1",
    category: "1. Dining Tables & Touchpoint Sanitation",
    task: "Disinfect all customer dining tables, chairs, highchairs, and laminated takeaway menus using food-safe antibacterial wipes (BS EN 1276).",
    status: "pass",
    actionNotes: "Tables and highchairs sanitized"
  },
  {
    id: "foh-2",
    category: "2. POS Terminals & Card Readers",
    task: "Wipe down electronic point-of-sale touchscreens, chip-and-pin card readers, and payment terminals with electronics-safe disinfectant.",
    status: "pass",
    actionNotes: "Card readers disinfected"
  },
  {
    id: "foh-3",
    category: "3. Condiment Cruets & Cutlery Hygiene",
    task: "Inspect salt and pepper shakers, sauce bottles, and cutlery roll-ups; ensure condiment bottles are wiped and date-checked.",
    status: "pass",
    actionNotes: "Condiments cleaned and refilled"
  },
  {
    id: "foh-4",
    category: "4. Floor Cleanliness & Slip Hazard Check",
    task: "Sweep and mop dining room floors; inspect entrance walk-off matting; confirm zero wet slip hazards or tripping cables.",
    status: "pass",
    actionNotes: "Dining floors clean; mats flat and secure"
  },
  {
    id: "foh-5",
    category: "5. Ventilation & Airflow Management",
    task: "Verify front-of-house heating, ventilation, and air conditioning (HVAC) operating smoothly with fresh air intake; verify no grease odors.",
    status: "pass",
    actionNotes: "HVAC set to comfortable airflow"
  },
  {
    id: "foh-6",
    category: "6. Customer Washroom Verification Walk",
    task: "Conduct pre-service customer restroom inspection: confirm unperfumed soap, paper towels, clean sanitary bins, and signed door log.",
    status: "pass",
    actionNotes: "Restrooms inspected and signed off"
  },
  {
    id: "foh-7",
    category: "7. Daily Specials & Allergen Briefing",
    task: "Conduct pre-service staff briefing: review daily food specials, substituted ingredients, and Natasha's Law 14-allergen declarations.",
    status: "pass",
    actionNotes: "Service team briefed on daily specials and allergens"
  }
];

const WASTE_MANAGEMENT_TASKS: CheckItem[] = ['''

content = content.replace("const WASTE_MANAGEMENT_TASKS: CheckItem[] = [", bar_and_foh_tasks)

old_detection = '''  const isWasteManagement =
    templateTitle.toLowerCase().includes("waste") ||
    templateTitle.toLowerCase().includes("refuse") ||
    templateTitle.toLowerCase().includes("garbage");'''

new_detection = '''  const isBar =
    templateTitle.toLowerCase().includes("bar") ||
    templateTitle.toLowerCase().includes("cellar") ||
    templateTitle.toLowerCase().includes("beverage");
  const isRestaurantFoh =
    templateTitle.toLowerCase().includes("front of house") ||
    templateTitle.toLowerCase().includes("foh") ||
    (templateTitle.toLowerCase().includes("restaurant") && !templateTitle.toLowerCase().includes("cleaning"));
  const isWasteManagement =
    templateTitle.toLowerCase().includes("waste") ||
    templateTitle.toLowerCase().includes("refuse") ||
    templateTitle.toLowerCase().includes("garbage");'''

content = content.replace(old_detection, new_detection)

old_task_init = '''  const [tasks, setTasks] = useState<CheckItem[]>(() => {
    if (isWasteManagement) return WASTE_MANAGEMENT_TASKS;'''

new_task_init = '''  const [tasks, setTasks] = useState<CheckItem[]>(() => {
    if (isBar) return BAR_OPERATIONS_TASKS;
    if (isRestaurantFoh) return RESTAURANT_FOH_TASKS;
    if (isWasteManagement) return WASTE_MANAGEMENT_TASKS;'''

content = content.replace(old_task_init, new_task_init)

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated DigitalChecklistTool.tsx with BAR and RESTAURANT FOH tasks successfully")
