import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/components/tools/DigitalChecklistTool.tsx'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

tasks_to_add = '''const ALLERGEN_SOP_TASKS: CheckItem[] = [
  {
    id: "alg-1",
    category: "1. Goods Inwards & Specification Checks",
    task: "Verify supplier delivery notes and ingredient packaging specifications for unnotified formulation or allergen changes (Natasha's Law FIR 2021).",
    status: "pass",
    actionNotes: "Delivery allergen specifications signed off"
  },
  {
    id: "alg-2",
    category: "2. Segregated Storage & Airtight Containers",
    task: "Store 14 statutory allergens (nuts, gluten, milk, sesame, mustard) in sealed purple or clearly labelled containers beneath non-allergenic foods.",
    status: "pass",
    actionNotes: "Purple allergen containers sealed on lower shelf"
  },
  {
    id: "alg-3",
    category: "3. Dedicated Purple Utensils & Prep Zone",
    task: "Use designated purple colour-coded chopping boards, purple handled knives, and separate purple allergen cookware for allergen-free ticket orders.",
    status: "pass",
    actionNotes: "Purple allergen kit sanitised and reserved"
  },
  {
    id: "alg-4",
    category: "4. Hand Hygiene & Fresh Apron Protocol",
    task: "Food handler must wash hands with warm water and unperfumed bactericidal soap (BS EN 1499) and don a fresh clean apron before assembling allergen orders.",
    status: "pass",
    actionNotes: "Hands washed & fresh apron donned"
  },
  {
    id: "alg-5",
    category: "5. Order Communication & Service Handover",
    task: "Highlight POS kitchen ticket with allergen alert; prepare dish under head chef supervision; serve covered with dedicated cloche and allergen flag.",
    status: "pass",
    actionNotes: "Pass cloche applied with allergen marker"
  },
  {
    id: "alg-6",
    category: "6. Dedicated Spill Kit & Decontamination",
    task: "Clean allergen powder/liquid spills immediately using single-use blue disposable roll and BS EN 1276 sanitiser; never use shared reusable cloths.",
    status: "pass",
    actionNotes: "Single-use blue roll used; surface sanitised"
  },
  {
    id: "alg-7",
    category: "7. Daily Allergen Matrix Audit",
    task: "Review physical 14-allergen matrix binder and POS ingredient database against all daily specials, substituted dressings, and kitchen batches.",
    status: "pass",
    actionNotes: "Daily specials reconciled with allergen matrix"
  }
];

const HACCP_AUDIT_TASKS: CheckItem[] = [
  {
    id: "haccp-1",
    category: "1. Prerequisite Programmes (PRPs)",
    task: "Verify premises pest proofing, certified waste contracts, staff hygiene fitness-to-work records, and potable water testing under Regulation (EC) No 852/2004.",
    status: "pass",
    actionNotes: "PRP documentation verified and complete"
  },
  {
    id: "haccp-2",
    category: "2. Hazard Analysis & CCP Validation",
    task: "Review biological, chemical, physical, and allergen hazards across all operational flow steps from goods inwards to service; verify CCP thresholds.",
    status: "pass",
    actionNotes: "Hazard register updated with latest menu additions"
  },
  {
    id: "haccp-3",
    category: "3. Critical Limits & Monitoring Logs",
    task: "Audit last 90 days of chiller logs (<=5°C), cooking core logs (>=75°C / 82°C Scotland), and hot holding logs (>=63°C) for complete daily supervisor sign-offs.",
    status: "pass",
    actionNotes: "Chiller and cook line logs 100% complete"
  },
  {
    id: "haccp-4",
    category: "4. Corrective Action Verification",
    task: "Inspect records of deviations and corrective actions taken (e.g. food re-cooked, chiller repaired, condemned stock disposal transfer notes).",
    status: "pass",
    actionNotes: "Corrective actions documented with root cause"
  },
  {
    id: "haccp-5",
    category: "5. Probe Thermometer Calibration Check",
    task: "Inspect monthly probe calibration records: ice water test (-1°C to +1°C) and boiling water test (99°C to 101°C) verified for all digital needle probes.",
    status: "pass",
    actionNotes: "All 4 kitchen probes calibrated this month"
  },
  {
    id: "haccp-6",
    category: "6. Approved Supplier & Traceability Audit",
    task: "Verify approved supplier register accreditation; audit one-step-back and one-step-forward lot numbers for high-risk meat and seafood batches.",
    status: "pass",
    actionNotes: "Lot numbers matched to delivery invoices"
  },
  {
    id: "haccp-7",
    category: "7. Annual HACCP Review & EHO Readiness",
    task: "Confirm annual HACCP management system review signed by business owner; staff Level 2/3 hygiene certificates active in SFBB training record.",
    status: "pass",
    actionNotes: "Annual management review signed off"
  }
];

const DEFAULT_GENERAL_TASKS: CheckItem[] = ['''

content = content.replace("const DEFAULT_GENERAL_TASKS: CheckItem[] = [", tasks_to_add)

old_detection = '''  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
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
    if (isPestControl) return PEST_CONTROL_TASKS;
    if (isRecall) return RECALL_INCIDENT_TASKS;
    if (isHealthInspection) return HEALTH_INSPECTION_TASKS;
    if (isCleaning) return CLEANING_TASKS;
    return DEFAULT_GENERAL_TASKS;
  });'''

new_detection = '''  const isAllergenSop =
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

content = content.replace(old_detection, new_detection)

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated DigitalChecklistTool.tsx successfully")
