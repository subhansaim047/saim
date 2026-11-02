path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add task sets right before DEFAULT_GENERAL_TASKS
hood_and_grease_tasks = '''const HOOD_CLEANING_TASKS: CheckItem[] = [
  {
    id: "hood-1",
    category: "1. Daily Baffle Filter Degreasing",
    task: "Remove stainless steel baffle grease filters; soak in hot alkaline degreaser solution (min 60°C) for 30 minutes, pressure rinse, and allow to air dry completely.",
    status: "pass",
    actionNotes: "Filters soaked, degreased, and re-seated"
  },
  {
    id: "hood-2",
    category: "2. Daily Grease Drip Cup & Channel Emptying",
    task: "Empty and wash grease collection cups and drain channels beneath canopy edge; pour collected waste fat into sealed spent oil drums (never down drains).",
    status: "pass",
    actionNotes: "Grease channels cleared; cups disinfected"
  },
  {
    id: "hood-3",
    category: "3. Weekly Canopy Interior & Plenum Wipe Down",
    task: "Degrease exposed interior canopy surfaces, light fixtures, and plenum chamber behind filters using food-contact safe degreaser and lint-free cloths.",
    status: "pass",
    actionNotes: "Canopy interior free of carbonised grease"
  },
  {
    id: "hood-4",
    category: "4. Weekly Canopy Exterior & Stainless Polish",
    task: "Wash outer stainless steel hood shell, wipe down seams, and apply food-grade stainless steel polish; verify illumination bulbs are fully operational.",
    status: "pass",
    actionNotes: "Outer canopy polished; vapour-proof lights tested"
  },
  {
    id: "hood-5",
    category: "5. Monthly Fan Housing & Airflow Verification",
    task: "Inspect rooftop or inline exhaust fan housing for vibration, grease seepage, and belt tension; verify negative air pressure draws smoke effectively across all cooking equipment.",
    status: "pass",
    actionNotes: "Extraction fan operational with positive draft"
  },
  {
    id: "hood-6",
    category: "6. Insurance & TR19 Professional Certification",
    task: "Verify date of last certified TR19 deep clean of internal ductwork, risers, and extract motor; confirm next professional specialist service is scheduled within insurance warranty policy window.",
    status: "pass",
    actionNotes: "TR19 certificate valid; audit log signed"
  }
];

const GREASE_TRAP_TASKS: CheckItem[] = [
  {
    id: "gt-1",
    category: "1. Daily FOG Layer & Water Cooling Check",
    task: "Allow kitchen wastewater in grease trap to cool completely (below 35°C) so fats, oils, and grease (FOG) congeal firmly into a solid surface blanket.",
    status: "pass",
    actionNotes: "Trap cooled; solid grease crust formed"
  },
  {
    id: "gt-2",
    category: "2. Daily / Weekly Surface Skimming",
    task: "Carefully skim solidified grease, fats, and oils from top surface using a perforated skimmer shovel; transfer solids directly into designated sealed food waste drums.",
    status: "pass",
    actionNotes: "Surface grease cake skimmed into waste drum"
  },
  {
    id: "gt-3",
    category: "3. Baffle Plate Removal & Internal Wall Scrubbing",
    task: "Remove removable flow baffles; scrape grease accumulation from baffle slots and interior chamber walls using a non-scratch plastic scraper and warm soapy water.",
    status: "pass",
    actionNotes: "Baffles removed, scraped clean, and refitted"
  },
  {
    id: "gt-4",
    category: "4. Heavy Solids & Sludge Removal (25% Rule)",
    task: "Measure combined thickness of floating grease cap and bottom sludge layer; if depth exceeds 25% of total liquid volume, pump out bottom sediment or schedule commercial pump-out.",
    status: "pass",
    actionNotes: "FOG and sludge depth checked (under 20%)"
  },
  {
    id: "gt-5",
    category: "5. Biological Dosing Unit & Enzyme Injection",
    task: "Inspect automatic bacterial / bio-enzyme dosing pump; verify chemical bottle level is adequate, injection tube is unclogged, and timer is programmed for overnight dosing.",
    status: "pass",
    actionNotes: "Bio-dosing reservoir full; timer verified"
  },
  {
    id: "gt-6",
    category: "6. Gasket Seal & Odour Control Integrity",
    task: "Inspect rubber gasket around trap access lid for cracks, perishing, or food debris; tighten lock-down bolts evenly to prevent sewer gas and foul odour escape.",
    status: "pass",
    actionNotes: "Lid gasket airtight; no sewer odour detected"
  },
  {
    id: "gt-7",
    category: "7. Licensed Carrier Waste Transfer Notes (Duty of Care)",
    task: "Archive certified Waste Transfer Notes (WTN) from registered environmental waste contractor for all grease trap pump-outs; retain records on-site for 2 years under UK Environmental Protection Act 1990.",
    status: "pass",
    actionNotes: "Duty of Care transfer note filed and signed"
  }
];

'''

target_general = 'const DEFAULT_GENERAL_TASKS: CheckItem[] = ['
if target_general in content:
    content = content.replace(target_general, hood_and_grease_tasks + target_general, 1)
    print("Added HOOD_CLEANING_TASKS and GREASE_TRAP_TASKS")
else:
    print("Could not find DEFAULT_GENERAL_TASKS")

# 2. Add boolean flags
target_booleans = '  const isMeatSlicer ='
replacement_booleans = '''  const isHoodCleaning =
    templateTitle.toLowerCase().includes("hood") ||
    templateTitle.toLowerCase().includes("canopy") ||
    templateTitle.toLowerCase().includes("exhaust");
  const isGreaseTrap =
    templateTitle.toLowerCase().includes("grease trap") ||
    templateTitle.toLowerCase().includes("grease-trap");
  const isMeatSlicer ='''

if target_booleans in content:
    content = content.replace(target_booleans, replacement_booleans, 1)
    print("Added isHoodCleaning and isGreaseTrap booleans")
else:
    print("Could not find target_booleans")

# 3. Add task routing
target_routing = '    if (isMeatSlicer) return MEAT_SLICER_CLEANING_TASKS;'
replacement_routing = '''    if (isHoodCleaning) return HOOD_CLEANING_TASKS;
    if (isGreaseTrap) return GREASE_TRAP_TASKS;
    if (isMeatSlicer) return MEAT_SLICER_CLEANING_TASKS;'''

if target_routing in content:
    content = content.replace(target_routing, replacement_routing, 1)
    print("Added task routing for hood and grease trap")
else:
    print("Could not find target_routing")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Finished updating DigitalChecklistTool.tsx")
