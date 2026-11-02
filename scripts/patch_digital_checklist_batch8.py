import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/tools/DigitalChecklistTool.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

new_tasks = '''const RESTROOM_TASKS: CheckItem[] = [
  {
    id: "rest-1",
    category: "1. Hand Hygiene Dispensers & Supplies",
    task: "Verify unperfumed bactericidal hand soap (BS EN 1499) and blue disposable paper towel dispensers are fully stocked; no empty units.",
    status: "pass",
    actionNotes: "Soap and paper towels replenished"
  },
  {
    id: "rest-2",
    category: "2. Potable Water & Temperature Verification",
    task: "Check continuous hot running water (>=45°C) and cold water at handwash basins; verify push-taps provide sufficient flow duration.",
    status: "pass",
    actionNotes: "Water temperature verified at 48°C"
  },
  {
    id: "rest-3",
    category: "3. Sanitary Ware & Toilet Disinfection",
    task: "Descaling and bactericidal cleaning of WC toilet bowls, seats, urinals, and flush levers; confirm sanitary disposal bins are emptied.",
    status: "pass",
    actionNotes: "Toilets descaled and disinfected"
  },
  {
    id: "rest-4",
    category: "4. High-Touch Points & Mirror Cleaning",
    task: "Disinfect internal and external door handles, push plates, locks, cubicle partitions, and baby-changing tables with food-safe sanitiser.",
    status: "pass",
    actionNotes: "High-touch points sanitized"
  },
  {
    id: "rest-5",
    category: "5. Washroom Colour-Coded Floor Mopping",
    task: "Mop non-slip floors using designated yellow-coded mop bucket and yellow floor sign; ensure floors are dry and clear of slip hazards.",
    status: "pass",
    actionNotes: "Yellow mop used; floor dry and hazard-free"
  },
  {
    id: "rest-6",
    category: "6. Refuse & Odour Control",
    task: "Empty pedal bins, install fresh heavy-duty liner, wipe exterior bin surfaces, and verify automated air freshener / passive ventilation.",
    status: "pass",
    actionNotes: "Refuse emptied and relined"
  },
  {
    id: "rest-7",
    category: "7. Hourly Supervisor Sign-Off",
    task: "Complete hourly inspection checklist on back of washroom door with supervisor initials and maintenance action notes.",
    status: "pass",
    actionNotes: "Hourly log signed off"
  }
];

const DUE_DILIGENCE_TASKS: CheckItem[] = [
  {
    id: "dd-1",
    category: "1. Supplier Accreditation & Traceability",
    task: "Verify approved supplier lists; inspect goods-inwards delivery temperatures and lot code traceability (Article 18 Reg EC 178/2002).",
    status: "pass",
    actionNotes: "Supplier delivery logs verified"
  },
  {
    id: "dd-2",
    category: "2. Cold Chain Integrity & Storage Limits",
    task: "Confirm twice-daily commercial refrigerator logs (<=5°C, legal max 8°C) and freezer logs (<=-18°C) are signed without gaps.",
    status: "pass",
    actionNotes: "Cold chain records audited"
  },
  {
    id: "dd-3",
    category: "3. Thermal Core Lethality Verification",
    task: "Audit batch cooking logs verifying mandatory 75°C core for 30s (82°C Scotland); confirm hot-holding pass maintains >=63°C.",
    status: "pass",
    actionNotes: "Thermal probe logs signed off"
  },
  {
    id: "dd-4",
    category: "4. Natasha's Law & 14 Allergens Due Diligence",
    task: "Verify all PPDS foods bear complete ingredient lists with allergens in bold; review 14-allergen matrix accuracy against current stock.",
    status: "pass",
    actionNotes: "PPDS labels and allergen matrix confirmed"
  },
  {
    id: "dd-5",
    category: "5. Staff Competence & Hygiene Certification",
    task: "Confirm all active kitchen food handlers possess valid Level 2 Food Hygiene certificates and supervisors hold Level 3 awards.",
    status: "pass",
    actionNotes: "Training certificates filed in SFBB binder"
  },
  {
    id: "dd-6",
    category: "6. Pest Control Contract & Proofing Audit",
    task: "Verify quarterly BPCA pest inspection reports on file; confirm all recommended physical building proofing actions completed.",
    status: "pass",
    actionNotes: "BPCA pest report current with zero active alerts"
  },
  {
    id: "dd-7",
    category: "7. Thermometer Calibration & Equipment Maintenance",
    task: "Audit monthly digital probe calibration records (ice water -1°C to +1°C and boiling water 99°C to 101°C); inspect extraction TR19 certificate.",
    status: "pass",
    actionNotes: "Probe calibrations and TR19 cert validated"
  }
];

const DEFAULT_GENERAL_TASKS: CheckItem[] = ['''

content = content.replace("const DEFAULT_GENERAL_TASKS: CheckItem[] = [", new_tasks)

old_detection = '''  const isAllergenSop =
    templateTitle.toLowerCase().includes("allergen") ||
    templateTitle.toLowerCase().includes("allergy");
  const isHaccpAudit =
    templateTitle.toLowerCase().includes("haccp") ||
    templateTitle.toLowerCase().includes("hazard analysis");
  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
  const isRecall = templateTitle.toLowerCase().includes("recall") || templateTitle.toLowerCase().includes("withdrawal");
  const isHealthInspection =
    templateTitle.toLowerCase().includes("inspection") ||
    templateTitle.toLowerCase().includes("eho") ||
    templateTitle.toLowerCase().includes("hygiene audit");
  const isPestControl =
    templateTitle.toLowerCase().includes("pest") ||
    templateTitle.toLowerCase().includes("rodent") ||
    templateTitle.toLowerCase().includes("insect");

  // Checklist Tasks
  const [tasks, setTasks] = useState<CheckItem[]>(() => {
    if (isAllergenSop) return ALLERGEN_SOP_TASKS;
    if (isHaccpAudit) return HACCP_AUDIT_TASKS;
    if (isPestControl) return PEST_CONTROL_TASKS;
    if (isRecall) return RECALL_INCIDENT_TASKS;
    if (isHealthInspection) return HEALTH_INSPECTION_TASKS;
    if (isCleaning) return CLEANING_TASKS;
    return DEFAULT_GENERAL_TASKS;
  });'''

new_detection = '''  const isRestroom =
    templateTitle.toLowerCase().includes("restroom") ||
    templateTitle.toLowerCase().includes("washroom") ||
    templateTitle.toLowerCase().includes("toilet");
  const isDueDiligence =
    templateTitle.toLowerCase().includes("due diligence") ||
    templateTitle.toLowerCase().includes("compliance") ||
    templateTitle.toLowerCase().includes("ecosure");
  const isAllergenSop =
    templateTitle.toLowerCase().includes("allergen") ||
    templateTitle.toLowerCase().includes("allergy");
  const isHaccpAudit =
    templateTitle.toLowerCase().includes("haccp") ||
    templateTitle.toLowerCase().includes("hazard analysis");
  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
  const isRecall = templateTitle.toLowerCase().includes("recall") || templateTitle.toLowerCase().includes("withdrawal");
  const isHealthInspection =
    templateTitle.toLowerCase().includes("inspection") ||
    templateTitle.toLowerCase().includes("eho") ||
    templateTitle.toLowerCase().includes("hygiene audit");
  const isPestControl =
    templateTitle.toLowerCase().includes("pest") ||
    templateTitle.toLowerCase().includes("rodent") ||
    templateTitle.toLowerCase().includes("insect");

  // Checklist Tasks
  const [tasks, setTasks] = useState<CheckItem[]>(() => {
    if (isRestroom) return RESTROOM_TASKS;
    if (isDueDiligence) return DUE_DILIGENCE_TASKS;
    if (isAllergenSop) return ALLERGEN_SOP_TASKS;
    if (isHaccpAudit) return HACCP_AUDIT_TASKS;
    if (isPestControl) return PEST_CONTROL_TASKS;
    if (isRecall) return RECALL_INCIDENT_TASKS;
    if (isHealthInspection) return HEALTH_INSPECTION_TASKS;
    if (isCleaning) return CLEANING_TASKS;
    return DEFAULT_GENERAL_TASKS;
  });'''

content = content.replace(old_detection, new_detection)

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated DigitalChecklistTool.tsx with RESTROOM and DUE DILIGENCE tasks successfully")
