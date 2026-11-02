# scripts/patch_digital_checklist_batch12.py
with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_tasks_batch12 = """const SSOP_PROCEDURES_TASKS: CheckItem[] = [
  {
    id: "ssop-1",
    category: "1. Pre-Operational Inspection & Gross Debris Removal",
    task: "Inspect food contact surfaces; ensure all equipment is dismantled, power isolated, and dry food debris and crumbs swept and discarded before chemical application.",
    status: "pass",
    actionNotes: "Gross debris cleared and power locked out"
  },
  {
    id: "ssop-2",
    category: "2. Detergent Wash & Thermal Degradation",
    task: "Apply alkaline food-grade detergent in warm water (45°C–55°C) to emulsify organic fats and grease; scrub all conveyor belts, slicers, and prep surfaces with colour-coded brushes.",
    status: "pass",
    actionNotes: "Surfaces scrubbed with alkaline detergent"
  },
  {
    id: "ssop-3",
    category: "3. Intermediate Potable Water Rinse",
    task: "Rinse surfaces thoroughly with clean running potable water to remove all chemical detergent residue and suspended soils prior to disinfectant application.",
    status: "pass",
    actionNotes: "Detergent rinsed completely"
  },
  {
    id: "ssop-4",
    category: "4. Disinfection & Contact Time (BS EN 1276)",
    task: "Apply BS EN 1276 / BS EN 13697 certified bactericidal sanitiser at calibrated dilution; observe mandatory 30-second to 5-minute contact time for complete pathogen inactivation.",
    status: "pass",
    actionNotes: "Sanitiser applied; contact time verified"
  },
  {
    id: "ssop-5",
    category: "5. Final Rinse & Environmental Drainage",
    task: "Execute final potable water rinse if using non-leave-on disinfectant; squeegee residual water toward trapped drainage channels to prevent standing microbial pools.",
    status: "pass",
    actionNotes: "Floors and tables squeegeed dry"
  },
  {
    id: "ssop-6",
    category: "6. Post-Cleaning Verification (ATP / Protein Swab)",
    task: "Perform rapid ATP bioluminescence swab or allergen protein test on critical food contact zones; record RLU reading (target <30 RLU); approve line for production.",
    status: "pass",
    actionNotes: "ATP reading 14 RLU (PASS)"
  }
];

const RECEIVING_DELIVERY_TASKS: CheckItem[] = [
  {
    id: "rec-1",
    category: "1. Delivery Vehicle Inspection & Sanitation",
    task: "Inspect supplier vehicle cargo hold: confirm clean, odourless interior, free from chemical spills, pests, or evidence of temperature abuse; check refrigeration unit running.",
    status: "pass",
    actionNotes: "Vehicle interior clean and chilling active"
  },
  {
    id: "rec-2",
    category: "2. Chilled Goods Temperature Verification",
    task: "Probe core temperature of fresh meat, poultry, fish, and dairy using sanitised UKAS probe: verify reading is between 1°C and 5°C (strictly reject deliveries >8°C).",
    status: "pass",
    actionNotes: "Chilled goods probed at 3.2°C (PASS)"
  },
  {
    id: "rec-3",
    category: "3. Frozen Goods Integrity & Temperature",
    task: "Inspect frozen goods for softness or ice crystal refreezing: probe between packs to confirm temperature is ≤-18°C (reject shipments above -15°C).",
    status: "pass",
    actionNotes: "Frozen items solid at -19.1°C (PASS)"
  },
  {
    id: "rec-4",
    category: "4. Packaging Integrity & Seal Audit",
    task: "Check vacuum packs, MAP containers, and cans for blown seals, puncturing, rust, denting, or pest gnawing; verify hermetic seals are intact.",
    status: "pass",
    actionNotes: "Packaging intact; zero blown seals"
  },
  {
    id: "rec-5",
    category: "5. Date Codes, Traceability & Invoice Matching",
    task: "Audit Use-By dates to ensure adequate shelf-life; record supplier name, invoice/PO number, lot batch codes, and country of origin in intake register.",
    status: "pass",
    actionNotes: "Traceability batch codes and dates logged"
  },
  {
    id: "rec-6",
    category: "6. Immediate Cold Chain Transfer (FIFO)",
    task: "Transfer approved chilled and frozen items immediately to walk-in cold rooms within 15 minutes of offloading; apply dated intake labels and follow FIFO rotation.",
    status: "pass",
    actionNotes: "Stock transferred to walk-in chiller"
  }
];

const GMP_AUDIT_TASKS: CheckItem[] = [
  {
    id: "gmp-1",
    category: "1. Personnel Hygiene & Staff Welfare",
    task: "All production staff wearing clean protective clothing, hairnets, and beard snoods; zero jewellery (except plain wedding band); nail polish prohibited; handwash basins used upon entry.",
    status: "pass",
    actionNotes: "Protective clothing and hand hygiene verified"
  },
  {
    id: "gmp-2",
    category: "2. Facility Infrastructure & Environmental Hygiene",
    task: "Floors, walls, and ceilings clean, smooth, non-porous, and free from condensation or flaking paint; drainage channels clear with grease traps inspected.",
    status: "pass",
    actionNotes: "Facility structure and drainage clear"
  },
  {
    id: "gmp-3",
    category: "3. Allergen Segregation & Natasha's Law Controls",
    task: "All 14 statutory allergens clearly labelled, segregated in designated colour-coded storage bins, and handled using dedicated purple tools with scheduling barriers.",
    status: "pass",
    actionNotes: "Allergen storage segregated and labelled"
  },
  {
    id: "gmp-4",
    category: "4. Equipment Calibration & Preventive Maintenance",
    task: "Thermometer probes calibrated monthly; metal detectors and foreign body filters tested with certified test wands (Fe 1.5mm, Non-Fe 2.0mm, SS 2.5mm); maintenance logs up to date.",
    status: "pass",
    actionNotes: "Calibration and metal detection verified"
  },
  {
    id: "gmp-5",
    category: "5. Pest Prevention & External Proofing",
    task: "All external pest doors fitted with tight brush seals; electronic fly killers clean and operational; insect screens intact on opening windows; pest bait stations checked.",
    status: "pass",
    actionNotes: "Pest proofing intact; EFKs serviced"
  },
  {
    id: "gmp-6",
    category: "6. Traceability, CCP Monitoring & Recall Readiness",
    task: "All raw material lot numbers documented into finished batch production records; CCP critical limits logged and signed off by quality assurance supervisor.",
    status: "pass",
    actionNotes: "CCP records validated; full batch traceability"
  }
];

"""

# Insert new tasks before DEFAULT_GENERAL_TASKS
target_marker = "const DEFAULT_GENERAL_TASKS: CheckItem[] = ["
if target_marker in content:
    content = content.replace(target_marker, new_tasks_batch12 + target_marker)
    print("Inserted Batch 12 tasks arrays")
else:
    print("Error: target_marker not found")

# Replace boolean conditions
old_bools = """  const isRetailStore =
    templateTitle.toLowerCase().includes("retail") ||
    templateTitle.toLowerCase().includes("store") ||
    templateTitle.toLowerCase().includes("shop");"""

new_bools = """  const isSsop =
    templateTitle.toLowerCase().includes("ssop") ||
    templateTitle.toLowerCase().includes("sanitation standard") ||
    templateTitle.toLowerCase().includes("sanitation sop");
  const isReceiving =
    templateTitle.toLowerCase().includes("receiving") ||
    templateTitle.toLowerCase().includes("delivery") ||
    templateTitle.toLowerCase().includes("intake");
  const isGmpAudit =
    templateTitle.toLowerCase().includes("gmp") ||
    templateTitle.toLowerCase().includes("good manufacturing");
  const isRetailStore =
    !isSsop &&
    !isReceiving &&
    !isGmpAudit &&
    (templateTitle.toLowerCase().includes("retail") ||
     templateTitle.toLowerCase().includes("store") ||
     templateTitle.toLowerCase().includes("shop"));"""

if old_bools in content:
    content = content.replace(old_bools, new_bools)
    print("Replaced boolean conditions in DigitalChecklistTool")
else:
    print("Warning: old_bools not found")

# Replace return logic in useState<CheckItem[]>
old_returns = """    if (isRetailStore) return RETAIL_STORE_TASKS;"""
new_returns = """    if (isSsop) return SSOP_PROCEDURES_TASKS;
    if (isReceiving) return RECEIVING_DELIVERY_TASKS;
    if (isGmpAudit) return GMP_AUDIT_TASKS;
    if (isRetailStore) return RETAIL_STORE_TASKS;"""

if old_returns in content:
    content = content.replace(old_returns, new_returns)
    print("Replaced task returns in DigitalChecklistTool")
else:
    print("Warning: old_returns not found")

with open('src/components/tools/DigitalChecklistTool.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved DigitalChecklistTool.tsx successfully")
