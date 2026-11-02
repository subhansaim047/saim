import sys

sys.stdout.reconfigure(encoding='utf-8')

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

pest_tasks_code = '''const PEST_CONTROL_TASKS: CheckItem[] = [
  {
    id: "p1",
    category: "Rodent Monitoring & Bait Stations",
    task: "Inspect all numbered exterior and internal tamper-resistant rodent bait stations: verify boxes are locked, undamaged, anchored in place, and inspected by BPCA/CEPA certified contractor under Regulation (EC) No 852/2004 Annex II Chap IX.",
    status: "pass",
    actionNotes: "All bait boxes secure; no droppings or gnaw marks"
  },
  {
    id: "p2",
    category: "Flying Insect Control & EFKs",
    task: "Check Electric Fly Killers (EFKs): verify UV lamps are illuminated (tubes replaced within 12 months), catch trays clean without insect overflow, and positioned away from open food prep benches.",
    status: "pass",
    actionNotes: "EFK catch trays emptied; UV tubes active"
  },
  {
    id: "p3",
    category: "Physical Building Proofing",
    task: "Inspect exterior door bottom bristle/rubber proofing strips (gap clearance strictly under 5mm); confirm fine fly screens on openable kitchen windows are intact with no tears or mesh holes.",
    status: "pass",
    actionNotes: "Door proofing strips flush; fly screens intact"
  },
  {
    id: "p4",
    category: "Service Penetrations & Drainage",
    task: "Check pipework penetrations through external walls, floor drains, and conduit entries: ensure tight seals with wire wool, concrete, or metal plates with zero rodent ingress voids.",
    status: "pass",
    actionNotes: "Pipe entry points sealed; drain grates fastened"
  },
  {
    id: "p5",
    category: "Dry Goods & Flour Store",
    task: "Inspect bulk grain sacks, flour bins, and dry store shelving for stored product insects (weevils, beetles, webbing, larvae). Ensure all stock is raised >15cm off floor on clean dunnage racks.",
    status: "pass",
    actionNotes: "Dry store clean; FIFO rotated; no insect webbing"
  },
  {
    id: "p6",
    category: "Crawling Insect Monitoring Traps",
    task: "Examine sticky insect monitoring blunder traps placed behind cookline ranges, underneath dishwashers, and near motor compressors for cockroach (Blattella germanica) or ant activity.",
    status: "pass",
    actionNotes: "Zero crawling insects detected on monitoring pads"
  },
  {
    id: "p7",
    category: "External Waste & Refuse Enclosure",
    task: "Verify external commercial wheelie bins and oil fat drums have tight-fitting lids closed; ensure waste corral floor is free from grease spills, standing effluent, or harborage debris.",
    status: "pass",
    actionNotes: "Bin corral clean; lids sealed; no food spillage"
  },
  {
    id: "p8",
    category: "Contractor Service Reports & SFBB",
    task: "Verify latest BPCA/NPTA pest control technician service report is signed, filed in the SFBB Management folder, and any recommended structural proofing repairs completed.",
    status: "pass",
    actionNotes: "Latest contractor report on file with zero active alerts"
  }
];

'''

# 1. Insert PEST_CONTROL_TASKS before DEFAULT_GENERAL_TASKS
target_general = 'const DEFAULT_GENERAL_TASKS: CheckItem[] = ['
if target_general in content:
    content = content.replace(target_general, pest_tasks_code + target_general)
    print("Inserted PEST_CONTROL_TASKS.")
else:
    print("Could not find target_general!")

# 2. Add isPestControl check
target_checks = '''  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
  const isRecall = templateTitle.toLowerCase().includes("recall") || templateTitle.toLowerCase().includes("withdrawal");
  const isHealthInspection =
    templateTitle.toLowerCase().includes("inspection") ||
    templateTitle.toLowerCase().includes("eho") ||
    templateTitle.toLowerCase().includes("hygiene audit");'''

repl_checks = '''  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
  const isRecall = templateTitle.toLowerCase().includes("recall") || templateTitle.toLowerCase().includes("withdrawal");
  const isHealthInspection =
    templateTitle.toLowerCase().includes("inspection") ||
    templateTitle.toLowerCase().includes("eho") ||
    templateTitle.toLowerCase().includes("hygiene audit");
  const isPestControl =
    templateTitle.toLowerCase().includes("pest") ||
    templateTitle.toLowerCase().includes("rodent") ||
    templateTitle.toLowerCase().includes("insect");'''

if target_checks in content:
    content = content.replace(target_checks, repl_checks)
    print("Added isPestControl check.")
else:
    print("Could not find target_checks!")

# 3. Add to useState initial task selection
target_selection = '''    if (isRecall) return RECALL_INCIDENT_TASKS;
    if (isHealthInspection) return HEALTH_INSPECTION_TASKS;
    if (isCleaning) return CLEANING_TASKS;
    return DEFAULT_GENERAL_TASKS;'''

repl_selection = '''    if (isPestControl) return PEST_CONTROL_TASKS;
    if (isRecall) return RECALL_INCIDENT_TASKS;
    if (isHealthInspection) return HEALTH_INSPECTION_TASKS;
    if (isCleaning) return CLEANING_TASKS;
    return DEFAULT_GENERAL_TASKS;'''

if target_selection in content:
    content = content.replace(target_selection, repl_selection)
    print("Added isPestControl to useState initial selection.")
else:
    print("Could not find target_selection!")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved DigitalChecklistTool.tsx successfully.")
