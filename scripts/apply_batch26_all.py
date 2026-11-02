# -*- coding: utf-8 -*-
import json
import csv
import sys

# 1. Update DigitalChecklistTool.tsx
dcl_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(dcl_path, 'r', encoding='utf-8') as f:
    dcl_code = f.read()

new_tasks = '''
const CALIBRATION_LOG_TASKS: CheckItem[] = [
  {
    id: "cal-1",
    category: "Probe Visual & Battery Inspection",
    task: "Inspect probe needle for bends, fractures, or loose cable connections; verify battery voltage and clean digital readout with zero error codes.",
    status: "pass",
    actionNotes: "Probe casing intact and display clear"
  },
  {
    id: "cal-2",
    category: "Ice-Point Calibration (0.0°C)",
    task: "Immerse probe 5 cm into crushed melting ice and water slurry; stir gently and verify reading stabilizes between -1.0°C and +1.0°C (target 0.0°C).",
    status: "pass",
    actionNotes: "Ice slurry reading stabilized at 0.1°C"
  },
  {
    id: "cal-3",
    category: "Boiling-Point Calibration (100.0°C)",
    task: "Immerse probe tip into rolling boiling water without touching pan bottom; verify reading stabilizes between 99.0°C and 101.0°C (target 100.0°C).",
    status: "pass",
    actionNotes: "Boiling point reading stabilized at 99.8°C"
  },
  {
    id: "cal-4",
    category: "Infrared Gun Accuracy Check",
    task: "Compare non-contact infrared surface thermometer against calibrated probe on matte surface; verify difference remains within ±1.0°C.",
    status: "pass",
    actionNotes: "Infrared gun verified within 0.5°C of probe"
  },
  {
    id: "cal-5",
    category: "Corrective Action & Tolerance",
    task: "If probe variance exceeds ±1.0°C (or ±0.5°C under high-care HACCP), recalibrate using manufacturer screw or remove from service and replace.",
    status: "pass",
    actionNotes: "All active kitchen probes within ±0.3°C tolerance"
  },
  {
    id: "cal-6",
    category: "Probe Sanitisation & Sign-Off",
    task: "Disinfect probe needle with food-safe wipe conforming to BS EN 1276 and record results on monthly master calibration certificate.",
    status: "pass",
    actionNotes: "Probe sanitised and monthly calibration signed"
  }
];

const PIZZA_HOT_HOLDING_TASKS: CheckItem[] = [
  {
    id: "pizza-1",
    category: "Hot Holding Cabinet Preheating",
    task: "Power on heated display cabinet or pass-through heat lamps at least 30 minutes before loading pizza; verify display air cavity reads above 65°C.",
    status: "pass",
    actionNotes: "Cabinet cavity preheated to 68.5°C"
  },
  {
    id: "pizza-2",
    category: "Core Temperature Check (≥63.0°C)",
    task: "Insert sanitised probe into thickest part of pizza slice; verify core temperature is maintained at or above 63.0°C continuously.",
    status: "pass",
    actionNotes: "Pepperoni pizza slice core verified at 65.2°C"
  },
  {
    id: "pizza-3",
    category: "2-Hour Exemption Time Control",
    task: "If pizza is displayed at ambient counter temperature below 63°C, record start time; sell, rapidly chill below 8°C, or discard within 2 hours.",
    status: "pass",
    actionNotes: "Ambient display timer logged (max 2 hours)"
  },
  {
    id: "pizza-4",
    category: "Crust Texture & Moisture Control",
    task: "Adjust cabinet humidity louvres to preserve bottom crust crispness while preventing cheese and toppings from drying out during holding.",
    status: "pass",
    actionNotes: "Cabinet humidity adjusted for optimal crispness"
  },
  {
    id: "pizza-5",
    category: "Allergen Segregation in Display",
    task: "Physically segregate gluten-free or vegan pizza slices on dedicated upper tier with designated colour-coded serving tongs.",
    status: "pass",
    actionNotes: "Gluten-free slices protected with acrylic divider"
  },
  {
    id: "pizza-6",
    category: "End-of-Holding Disposition",
    task: "Discard any leftover pizza slices held beyond maximum permitted holding window; never return hot-held slices to chillers for next-day resale.",
    status: "pass",
    actionNotes: "Unsold held slices discarded and logged"
  }
];

const APPROVED_SUPPLIER_TASKS: CheckItem[] = [
  {
    id: "supp-1",
    category: "Food Business Registration",
    task: "Confirm supplier holds active Local Authority food business registration and required approval codes (e.g. EC plant numbers for meat/fish/dairy).",
    status: "pass",
    actionNotes: "Council registration and EC approval codes verified"
  },
  {
    id: "supp-2",
    category: "Hygiene Rating & Certifications",
    task: "Collect and verify third-party certification certificates (BRCGS, SALSA, Red Tractor) or confirm minimum 4/5-star Food Hygiene Rating.",
    status: "pass",
    actionNotes: "SALSA certification and 5-star FHRS on file"
  },
  {
    id: "supp-3",
    category: "Allergen Disclosures (Natasha's Law)",
    task: "Ensure supplier submits signed product specifications disclosing all 14 statutory allergens and cross-contact preventative procedures.",
    status: "pass",
    actionNotes: "Annual allergen matrices signed by vendor"
  },
  {
    id: "supp-4",
    category: "Contracted Cold-Chain Specs",
    task: "Enforce contract delivery temperatures: chilled food $\le$ 5.0°C (legal max 8.0°C), fresh raw meat $\le$ 3.0°C, and frozen food $\le$ -18.0°C.",
    status: "pass",
    actionNotes: "Temperature SLA signed by delivery contractor"
  },
  {
    id: "supp-5",
    category: "Recall & Emergency Notification",
    task: "Establish 24-hour emergency recall contact details and written notification protocols in the event of upstream contamination or product recall.",
    status: "pass",
    actionNotes: "Emergency 24/7 contacts tested and updated"
  },
  {
    id: "supp-6",
    category: "Annual Vendor Review",
    task: "Evaluate vendor performance: delivery punctuality, temperature rejections, packaging integrity, and invoice price variance.",
    status: "pass",
    actionNotes: "Annual vendor evaluation scorecard completed"
  }
];

const INGREDIENT_TRACEABILITY_TASKS: CheckItem[] = [
  {
    id: "trace-1",
    category: "Goods Intake Batch Logging",
    task: "Record manufacturer batch numbers, delivery date, supplier name, and internal receiving tag for all incoming food commodities.",
    status: "pass",
    actionNotes: "Goods intake lot codes logged in inventory system"
  },
  {
    id: "trace-2",
    category: "Dry Storage Bin Lot Labeling",
    task: "Transfer bulk ingredients (flour, rice, grains, pulses) into clear containers labelled with original batch lot number and intake date.",
    status: "pass",
    actionNotes: "All decanted bulk containers labelled with batch IDs"
  },
  {
    id: "trace-3",
    category: "Prep Batch Sheet Reconciliation",
    task: "Record raw ingredient lot numbers on daily kitchen prep sheets for batch-cooked stocks, sauces, marinades, and braises.",
    status: "pass",
    actionNotes: "Sauce prep batch cross-referenced to meat lot #492"
  },
  {
    id: "trace-4",
    category: "Finished Service Batch Mapping",
    task: "Map cooked batch codes to date of service and customer table or takeaway dispatch orders under EC 178/2002 Article 18.",
    status: "pass",
    actionNotes: "Daily sales orders mapped to batch kitchen ledger"
  },
  {
    id: "trace-5",
    category: "Mock Recall Mass-Balance Test",
    task: "Execute annual 4-hour mock recall exercise reconciling 100% of selected raw material input through prep to customer distribution.",
    status: "pass",
    actionNotes: "Mock recall achieved 99.7% reconciliation in 3h 10m"
  },
  {
    id: "trace-6",
    category: "Traceability Record Retention",
    task: "Archive all supplier delivery notes, batch cooking logs, and customer distribution records for at least 12 months for EHO audit inspection.",
    status: "pass",
    actionNotes: "Past 12 months of batch records archived"
  }
];
'''

# Insert tasks before DEFAULT_GENERAL_TASKS
kosh_end = dcl_code.find('const DEFAULT_GENERAL_TASKS')
if kosh_end == -1:
    raise Exception("Could not find const DEFAULT_GENERAL_TASKS in DigitalChecklistTool.tsx")

dcl_code = dcl_code[:kosh_end] + new_tasks + "\n" + dcl_code[kosh_end:]

# Add detection flags inside getInitialTasks
det_anchor = 'const isBrcAudit ='
det_pos = dcl_code.find(det_anchor)
if det_pos == -1:
    raise Exception("Could not find const isBrcAudit in DigitalChecklistTool.tsx")

new_detection = '''const isCalibrationLog =
    templateTitle.toLowerCase().includes("calibration") ||
    (templateId && templateId.includes("calibration"));
  const isPizzaHotHolding =
    (templateTitle.toLowerCase().includes("hot holding") || templateTitle.toLowerCase().includes("hot-holding")) &&
    templateTitle.toLowerCase().includes("pizza") ||
    (templateId && templateId.includes("hot-holding-temperature-requirement-for-pizza"));
  const isApprovedSupplier =
    templateTitle.toLowerCase().includes("supplier") ||
    (templateId && templateId.includes("approved-supplier"));
  const isIngredientTraceability =
    templateTitle.toLowerCase().includes("ingredient-traceability") ||
    (templateTitle.toLowerCase().includes("traceability") && templateTitle.toLowerCase().includes("ingredient")) ||
    (templateId && templateId.includes("ingredient-traceability"));
  '''

dcl_code = dcl_code[:det_pos] + new_detection + dcl_code[det_pos:]

# Add returns inside getInitialTasks
ret_anchor = 'if (isBrcAudit) return BRC_AUDIT_TASKS;'
ret_pos = dcl_code.find(ret_anchor)
if ret_pos == -1:
    raise Exception("Could not find if (isBrcAudit) return BRC_AUDIT_TASKS; in DigitalChecklistTool.tsx")

new_returns = '''if (isCalibrationLog) return CALIBRATION_LOG_TASKS;
    if (isPizzaHotHolding) return PIZZA_HOT_HOLDING_TASKS;
    if (isApprovedSupplier) return APPROVED_SUPPLIER_TASKS;
    if (isIngredientTraceability) return INGREDIENT_TRACEABILITY_TASKS;
    '''

dcl_code = dcl_code[:ret_pos] + new_returns + dcl_code[ret_pos:]

# Clean up any potential LaTeX formatting
dcl_code = dcl_code.replace(r'$\le$', '<=')
dcl_code = dcl_code.replace(r'$\ge$', '>=')

with open(dcl_path, 'w', encoding='utf-8') as f:
    f.write(dcl_code)
print("Updated DigitalChecklistTool.tsx with Batch 26 tasks and routing.")

# 2. Update core_metadata.json
meta_path = 'src/data/core_metadata.json'
with open(meta_path, 'r', encoding='utf-8') as f:
    core_meta = json.load(f)

core_meta["thermometer-calibration-log"] = {
    "title": "Free Thermometer Calibration Log Sheet | Saim Dev",
    "desc": "Calibrate commercial kitchen probe thermometers with ice and boiling water checks. Free calibration log sheet for FSA and EHO compliance.",
    "howTo": [
        "Inspect thermometer probe needle for physical fractures, bends, and battery power.",
        "Immerse probe into crushed melting ice slurry; verify reading stabilizes at 0.0°C (±1.0°C).",
        "Immerse probe tip into rolling boiling water; verify reading reaches 100.0°C (±1.0°C).",
        "Record thermometer serial number, test date, calibration variance, and chef signature.",
        "Quarantine, adjust, or replace any kitchen probe thermometer with error exceeding ±1.0°C."
    ]
}

core_meta["what-is-the-minimum-hot-holding-temperature-requirement-for-pizza"] = {
    "title": "Free Hot Holding Temperature Guide for Pizza | Saim Dev",
    "desc": "Master UK hot-holding rules for pizza and display merchandisers. Free guidance covering the legal 63°C requirement and the 2-hour exemption rule.",
    "howTo": [
        "Preheat heated display merchandisers or pizza pass-through units to at least 65°C.",
        "Insert sanitised core probe into pizza slice; verify internal core temperature is ≥63.0°C.",
        "Under UK Food Safety Regulations 2013, hold pizza at or above 63.0°C continuously.",
        "If displaying at ambient counter temperatures, enforce the strict 2-hour exemption limit.",
        "Safely discard or rapidly cool any pizza slices held beyond the permitted display window."
    ]
}

core_meta["approved-supplier-list"] = {
    "title": "Free Approved Supplier List Template | Saim Dev",
    "desc": "Manage commercial food vendors, audit certifications, and allergen compliance. Free approved supplier list template for HACCP and EHO records.",
    "howTo": [
        "Verify supplier food business registration and required statutory approval codes.",
        "Collect copies of BRCGS, SALSA, or minimum 4-star Food Hygiene Rating certificates.",
        "Ensure vendor submits signed Natasha's Law allergen declarations for all ingredients.",
        "Establish delivery temperature thresholds: chilled ≤5.0°C, meat ≤3.0°C, frozen ≤-18.0°C.",
        "Review supplier punctuality, product defects, and temperature rejections annually."
    ]
}

core_meta["ingredient-traceability"] = {
    "title": "Free Ingredient Traceability Matrix Sheet | Saim Dev",
    "desc": "Track food ingredients from delivery to customer plating under EC 178/2002. Free ingredient traceability matrix sheet with mock recall support.",
    "howTo": [
        "Log supplier lot numbers, delivery dates, and receiving tags on intake delivery sheets.",
        "Label decanted bulk ingredient containers with original supplier batch identification.",
        "Cross-reference ingredient lot numbers on daily kitchen batch cooking prep sheets.",
        "Link finished menu batch numbers to date of service and customer order dispatch.",
        "Execute annual 4-hour mock recall reconciling 100% of ingredients through to customer."
    ]
}

core_meta["delivery-log"] = {
    "title": "Free Food Delivery Temperature Log Sheet | Saim Dev",
    "desc": "Audit goods receiving temperatures for chilled, raw meat, and frozen stock. Free food delivery temperature log sheet for UK commercial kitchens.",
    "howTo": [
        "Inspect supplier delivery vehicle hygiene, odour, and refrigeration cooling unit.",
        "Probe chilled deliveries between packs or in core; verify temperature is ≤5.0°C (legal max 8.0°C).",
        "Check raw poultry and red meat; verify core temperature is maintained at or below 3.0°C.",
        "Verify frozen goods are frozen rock-solid at ≤-18.0°C with no signs of thawing or refreezing.",
        "Audit use-by dates, tamper seals, and packaging integrity; record on delivery log sheet."
    ]
}

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(core_meta, f, indent=2, ensure_ascii=False)
print("Updated core_metadata.json for Batch 26 tools.")

# 3. Update tool_deep_content.ts
deep_path = 'src/data/tool_deep_content.ts'
with open(deep_path, 'r', encoding='utf-8') as f:
    deep_code = f.read()

fallback_pos = deep_code.find('export const FALLBACK_DEEP_CONTENT')
if fallback_pos == -1:
    raise Exception("Could not find FALLBACK_DEEP_CONTENT in tool_deep_content.ts")

end_tool_deep = deep_code.rfind('};', 0, fallback_pos)
if end_tool_deep == -1:
    raise Exception("Could not find }; before FALLBACK_DEEP_CONTENT")

pre_text = deep_code[:end_tool_deep].rstrip()
if pre_text.endswith('}'):
    pre_text = pre_text + ','

batch26_deep_items = '''
  "thermometer-calibration-log": {
    directAnswer:
      "A thermometer calibration log documents monthly verification checks performed on commercial kitchen probe thermometers and temperature data-loggers. Aligned with UK Food Standards Agency (FSA) due diligence requirements, it tracks dual-point calibration tests in crushed melting ice (0.0°C ±1.0°C) and rolling boiling water (100.0°C ±1.0°C), probe serial numbers, observed error variances, and corrective recalibrations.",
    howTo: [
      "Prepare ice slurry: fill a beaker with crushed melting ice and a small amount of cold water; stir and wait 2 minutes for equilibrium.",
      "Execute ice-point check: immerse probe needle 5 cm into slurry without touching glass; verify reading settles between -1.0°C and +1.0°C.",
      "Execute boiling-point check: place probe needle in rolling boiling water; verify reading settles between 99.0°C and 101.0°C (at sea level).",
      "Record calibration findings: log thermometer ID/serial number, date, ice reading, boiling reading, variance, and tester initials.",
      "Initiate corrective action: if variance exceeds ±1.0°C (or ±0.5°C in high-care processing), adjust calibration nut, change battery, or replace thermometer."
    ],
    faqs: [
      {
        q: "How frequently must kitchen probe thermometers be calibrated?",
        a: "Under UK food safety guidelines, digital probe thermometers should be calibrated at least once a month, or immediately following any severe impact (e.g. being dropped on a tiled kitchen floor) or extreme temperature exposure."
      },
      {
        q: "What is an acceptable error tolerance for a commercial food thermometer?",
        a: "An error tolerance of ±1.0°C is acceptable for general commercial catering. In high-risk manufacturing and BRCGS-certified plants, thermometers must remain accurate within ±0.5°C of reference standards."
      },
      {
        q: "Does altitude affect boiling-point calibration of thermometers?",
        a: "Yes. Water boils at 100.0°C at sea level, but boils approximately 1°C lower for every 300 metres of elevation. For UK kitchens located close to sea level, 99°C to 101°C is the standard calibration range."
      },
      {
        q: "Can infrared thermometers replace probe thermometers for food safety logs?",
        a: "No. Infrared thermometers only measure surface temperatures and cannot verify internal core microbiological lethality (e.g. 75°C core for 30 seconds). Internal core readings require a calibrated penetration needle probe."
      },
      {
        q: "How should probe needles be disinfected during calibration?",
        a: "Probe needles must be wiped with food-safe antibacterial probe wipes conforming to BS EN 1276 or BS EN 13697 before and after testing to prevent chemical or microbial contamination."
      }
    ],
    relatedTools: [
      "cooking-log-template",
      "meat-cooking-temperatures",
      "freezer-temperature-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "what-is-the-minimum-hot-holding-temperature-requirement-for-pizza": {
    directAnswer:
      "Under the Food Safety and Hygiene (England) Regulations 2013 (Schedule 4) and UK Food Standards Agency guidelines, the minimum legal hot-holding temperature requirement for pizza is 63.0°C (145.4°F). Once baked, hot pizza held for customer service in display cabinets, heated merchandisers, or takeaway delivery warmers must be kept at or above 63.0°C continuously to prevent the proliferation of pathogenic bacteria like Staphylococcus aureus and Bacillus cereus.",
    howTo: [
      "Preheat holding merchandiser: set display cabinet air temperature to at least 65°C to 70°C prior to transferring fresh hot pizza.",
      "Verify core temperature with probe: insert sanitised digital probe into the centre of pizza slices to confirm core temperature is ≥63.0°C.",
      "Apply the UK 2-Hour Exemption rule: if pizza is displayed below 63°C for ambient counter sales, record exact start time and sell or safely discard within 2 hours maximum.",
      "Maintain moisture balance: adjust display cabinet airflow louvres to keep bottom crusts crisp without allowing cheese and sauce to dry out.",
      "Log hot-holding audits: record cabinet and pizza core temperatures every 2 hours on your daily HACCP hot-holding verification sheet."
    ],
    faqs: [
      {
        q: "What is the legal hot holding temperature for pizza in the UK?",
        a: "The statutory minimum hot-holding temperature in England, Wales, and Northern Ireland is 63.0°C. Holding food at or above 63°C prevents dangerous bacterial pathogens from multiplying."
      },
      {
        q: "What is the 2-hour rule for hot-held pizza in the UK?",
        a: "Under Regulation 2013 Schedule 4, hot food may be held below 63°C for display purposes for a single period of up to 2 hours. After 2 hours, the food must be sold immediately, rapidly cooled to 8°C or below, or safely discarded."
      },
      {
        q: "Can leftover hot-held pizza be reheated the following day?",
        a: "Under commercial food hygiene best practice, food that has been hot-held for service should not be chilled and reheated for a second service, as multiple heating and cooling cycles severely increase microbial and toxin risk."
      },
      {
        q: "What temperature should pizza be reheated to in Scotland?",
        a: "Under the Food Hygiene (Scotland) Regulations 2006, reheated foods must reach a minimum internal core temperature of 82.0°C, compared to 75.0°C (for 30 seconds) in England and Wales."
      },
      {
        q: "How can pizza operators maintain pizza crust crispness in heated cabinets?",
        a: "Use heated display merchandisers equipped with perforated pizza trays and adjustable moisture exhaust vents. Trapped steam causes soggy crusts, while completely dry heat hardens cheese."
      }
    ],
    relatedTools: [
      "food-temperature-chart",
      "cooking-log-template",
      "opening-and-closing-checklist-template"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "approved-supplier-list": {
    directAnswer:
      "An approved supplier list is a foundational food safety and quality assurance document that details all certified vendors authorized to supply raw ingredients, chilled and frozen foods, packaging, and cleaning chemicals to a commercial food business. It logs supplier contact information, local authority registration, third-party food safety certifications (BRCGS, SALSA), delivery temperature specifications, and Natasha's Law allergen declarations.",
    howTo: [
      "Catalog all commercial suppliers: categorize vendors by product risk tier (fresh meat/poultry, seafood, dairy, produce, ambient dry goods, and packaging).",
      "Verify statutory compliance: collect and verify local council food business registration numbers and EC plant approval codes for animal products.",
      "Audit certification credentials: confirm suppliers hold accredited food safety certifications (e.g. BRCGS, SALSA, Red Tractor) or minimum 4-star food hygiene ratings.",
      "Enforce Natasha's Law allergen declarations: require signed product specification sheets detailing all 14 statutory allergens and allergen cross-contact risks.",
      "Conduct annual supplier reviews: evaluate on-time delivery percentages, delivery temperature compliance, product defects, and corrective action responsiveness."
    ],
    faqs: [
      {
        q: "Why is an approved supplier list mandatory for UK food businesses?",
        a: "Under Regulation (EC) No 852/2004 and HACCP Principle 1, food businesses must ensure incoming raw materials are safe. Buying from approved suppliers provides verifiable due diligence that ingredients originate from inspected, legitimate premises."
      },
      {
        q: "What third-party food safety certifications are recognized on an approved supplier list?",
        a: "Widely recognized certifications in the UK include BRCGS (Global Standard for Food Safety), SALSA (Safe and Local Supplier Approval), FSSC 22000, SQF, Red Tractor, and Soil Association Organic certification."
      },
      {
        q: "How should a kitchen respond if an unapproved supplier delivers goods?",
        a: "Deliveries from unapproved suppliers must be quarantined on intake. Kitchen managers must verify registration and obtain product specifications before accepting stock into inventory."
      },
      {
        q: "How often should an approved supplier list be reviewed and updated?",
        a: "The master supplier list should be reviewed at least annually, or immediately whenever a supplier updates their certifications, changes manufacturing sites, or introduces new recipe formulations."
      },
      {
        q: "What allergen documentation must suppliers provide under Natasha's Law?",
        a: "Suppliers must provide comprehensive ingredient specification sheets declaring any of the 14 statutory allergens present as ingredients or potential cross-contact risks on shared production lines."
      }
    ],
    relatedTools: [
      "delivery-log",
      "ingredient-traceability",
      "food-allergen-chart"
    ],
    relatedBlog: {
      title: "How to Create a Compliant 14 Allergen Matrix for UK Restaurants",
      slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants"
    }
  },
  "ingredient-traceability": {
    directAnswer:
      "An ingredient traceability template tracks raw materials and food components along the supply chain from delivery receipt through batch preparation to customer sale or distribution. Mandated by Regulation (EC) No 178/2002 (Article 18), robust 'one step back, one step forward' traceability enables commercial kitchens to rapidly identify, quarantine, and recall contaminated product batches within a 4-hour window.",
    howTo: [
      "Log intake lot numbers: record supplier name, delivery date, purchase invoice number, and manufacturer lot codes for all incoming goods.",
      "Label decanted bulk ingredients: ensure dry store containers and storage tubs display the original supplier batch lot number and date of opening.",
      "Record lot codes on prep sheets: transfer raw ingredient batch numbers to daily kitchen prep sheets for batch sauces, stocks, and cooked fillings.",
      "Map prep batches to service dates: link batch codes to specific service shifts, dining reservations, or customer takeaway order receipts.",
      "Perform mock recall tests: test traceability annually by picking an ingredient at random and reconciling 100% of received stock against finished dishes within 4 hours."
    ],
    faqs: [
      {
        q: "What is the 'one step back, one step forward' traceability principle?",
        a: "Under Regulation (EC) No 178/2002 Article 18, food businesses must be able to identify exactly who supplied every ingredient (one step back) and to whom their finished products were sold or distributed (one step forward, excluding direct sales to final consumers)."
      },
      {
        q: "What is the industry time limit for completing a mock recall exercise?",
        a: "Under GFSI-benchmarked standards including BRCGS and SQF, a food business must be able to complete a 100% mass-balance reconciliation traceability exercise within 4 hours."
      },
      {
        q: "How does ingredient traceability help during an allergen incident?",
        a: "If a supplier issues an allergen contamination alert (e.g. undeclared peanut traces in cumin), traceability records allow chefs to immediately pinpoint every prep batch, sauce, and finished dish using that specific supplier lot."
      },
      {
        q: "How long must commercial food traceability records be retained?",
        a: "Traceability records, delivery invoices, and batch prep sheets must be retained for at least 12 months for perishable foods, or 6 months beyond the product's use-by or best-before date for extended shelf-life goods."
      },
      {
        q: "Can digital spreadsheets replace paper batch sheets for traceability?",
        a: "Yes. Digital spreadsheets, kitchen management apps, and POS inventory systems are fully recognized by Environmental Health Officers (EHO) provided data is entered consistently and backed up securely."
      }
    ],
    relatedTools: [
      "approved-supplier-list",
      "delivery-log",
      "recipe-batch-calculator"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  }
'''

new_deep_code = pre_text + batch26_deep_items + "\n};\n\n" + deep_code[fallback_pos:]

with open(deep_path, 'w', encoding='utf-8') as f:
    f.write(new_deep_code)
print("Updated tool_deep_content.ts with Batch 26 deep content.")

# 4. Update tracker
tracker_path = 'audit/tools-seo-tracker.json'
with open(tracker_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

batch26_data = {
    "thermometer-calibration-log": {
        "priority_rank": 126,
        "target_keyword": "thermometer calibration log",
        "top_5_competitors": [
            "https://www.fooddocs.com/post/thermometer-calibration-log",
            "https://safetyculture.com/checklists/thermometer-calibration/",
            "https://www.highspeedtraining.co.uk/hub/thermometer-calibration-record/",
            "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/kitchen-thermometers",
            "https://www.ncass.org.uk/resources/daily-record-sheets/"
        ],
        "differentiators": [
            "Ice point (0.0°C) and boiling point (100.0°C) dual-point calibration verification",
            "Serial number / asset ID tagging for every kitchen probe with tolerance calculation",
            "Automatic Pass / Fail / Re-calibrate logic (±1.0°C standard; ±0.5°C high-care limit)",
            "Zero paywall, interactive digital calibration log with local storage",
            "Clean A4 PDF export formatted for EHO and BRCGS due diligence inspections"
        ]
    },
    "what-is-the-minimum-hot-holding-temperature-requirement-for-pizza": {
        "priority_rank": 127,
        "target_keyword": "minimum hot holding temperature for pizza",
        "top_5_competitors": [
            "https://www.fooddocs.com/post/hot-holding-temperature",
            "https://www.highspeedtraining.co.uk/hub/hot-holding-temperatures/",
            "https://www.virtual-college.co.uk/resources/hot-holding-regulations",
            "https://pos.toasttab.com/blog/on-the-line/hot-holding-temperature",
            "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/danger-zone-40-f-140-f"
        ],
        "differentiators": [
            "Definitive UK statutory direct answer: continuous holding at or above 63.0°C (Regulations 2013)",
            "2-Hour Legal Exemption rule control with interactive ambient countdown timer",
            "Interactive hot cabinet monitoring calculator with digital timer alert and core probe logger",
            "Quality preservation guidance (crust crispness vs humidity control in heated display merchandisers)",
            "Watermark-free printable temperature check sheet for pizza delivery and slice displays"
        ]
    },
    "approved-supplier-list": {
        "priority_rank": 128,
        "target_keyword": "approved supplier list template food safety",
        "top_5_competitors": [
            "https://www.fooddocs.com/post/approved-supplier-list",
            "https://safetyculture.com/checklists/approved-supplier-list/",
            "https://www.process.st/templates/approved-supplier-evaluation-checklist/",
            "https://www.highspeedtraining.co.uk/hub/supplier-audit-checklist/",
            "https://www.fsrmagazine.com/expert-take/how-manage-restaurant-supplier-relationships/"
        ],
        "differentiators": [
            "Categorised vendor management: meat, seafood, dairy, produce, ambient, and packaging",
            "Statutory assurance verification: Council registration, EC approval codes, BRCGS/SALSA certification",
            "Natasha's Law supplier allergen questionnaire tracking",
            "100% free interactive database with status tracking and contact cards",
            "Clean A4 PDF export for EHO and third-party vendor assurance audits"
        ]
    },
    "ingredient-traceability": {
        "priority_rank": 129,
        "target_keyword": "ingredient traceability template",
        "top_5_competitors": [
            "https://www.fooddocs.com/post/food-traceability-template",
            "https://safetyculture.com/checklists/food-traceability/",
            "https://www.highspeedtraining.co.uk/hub/food-traceability-rules/",
            "https://www.virtual-college.co.uk/resources/food-traceability-legislation",
            "https://www.food.gov.uk/business-guidance/traceability-and-labelling-guidance"
        ],
        "differentiators": [
            "Regulation (EC) No 178/2002 Article 18 'one step back, one step forward' legal compliance",
            "Batch/lot number reconciliation connecting supplier delivery notes to finished prepared dish batches",
            "Mock recall 4-hour mass-balance calculation verification",
            "Free interactive tracker with client-side persistence",
            "Print-ready traceability ledger for Environmental Health and BRCGS auditors"
        ]
    },
    "delivery-log": {
        "priority_rank": 130,
        "target_keyword": "food delivery log sheet template",
        "top_5_competitors": [
            "https://www.fooddocs.com/post/food-delivery-log",
            "https://safetyculture.com/checklists/food-delivery-intake/",
            "https://www.highspeedtraining.co.uk/hub/food-delivery-temperature-sheet/",
            "https://www.virtual-college.co.uk/resources/delivery-temperature-log",
            "https://www.ncass.org.uk/resources/daily-record-sheets/"
        ],
        "differentiators": [
            "Multi-temperature intake validation: chilled foods <=5.0°C (legal max 8.0°C), raw red meat <=3.0°C, frozen <=-18.0°C",
            "Vehicle cleanliness, pest signs, and temperature data-logger printout audit checks",
            "Packaging integrity, tamper seal, and 'Use-By' date expiry inspection",
            "Instant Pass / Quarantine / Reject workflow with supplier non-conformance notes",
            "100% free interactive tool with printable goods receiving sheet"
        ]
    }
}

for row in tracker:
    slug = row.get("slug")
    if slug in batch26_data:
        info = batch26_data[slug]
        row["status"] = "COMPLETED"
        row["priority_rank"] = info["priority_rank"]
        row["target_keyword"] = info["target_keyword"]
        row["top_5_competitors"] = info["top_5_competitors"]
        row["differentiators"] = info["differentiators"]
        row["phase1_completed"] = True
        print(f"Updated tracker for {slug} (Rank {info['priority_rank']})")

with open(tracker_path, 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=2, ensure_ascii=False)

csv_path = 'audit/tools-seo-tracker.csv'
all_keys = set()
for r in tracker:
    all_keys.update(r.keys())
fieldnames = sorted(list(all_keys))

with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    for r in tracker:
        row_copy = {}
        for k in fieldnames:
            v = r.get(k, "")
            if isinstance(v, (list, dict)):
                row_copy[k] = json.dumps(v)
            else:
                row_copy[k] = v
        writer.writerow(row_copy)

completed_count = sum(1 for r in tracker if r.get('status') == 'COMPLETED')
print(f"Batch 26 application complete! Total completed tools: {completed_count}/160")
