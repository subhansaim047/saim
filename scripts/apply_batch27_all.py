# -*- coding: utf-8 -*-
import json
import csv
import sys

# 1. Update TemplateDetailPage.tsx to route fridge-layout-poster to WalkInCoolerStorageChartTool
detail_path = 'src/components/TemplateDetailPage.tsx'
with open(detail_path, 'r', encoding='utf-8') as f:
    detail_code = f.read()

walkin_anchor = 'template.slug === "walk-in-cooler-food-storage-chart" ||'
if walkin_anchor in detail_code:
    new_walkin = 'template.slug === "walk-in-cooler-food-storage-chart" ||\n    template.slug.includes("fridge-layout") ||'
    detail_code = detail_code.replace(walkin_anchor, new_walkin, 1)
    with open(detail_path, 'w', encoding='utf-8') as f:
        f.write(detail_code)
    print("Updated TemplateDetailPage.tsx: routed fridge-layout-poster to WalkInCoolerStorageChartTool.")

# 2. Update DigitalChecklistTool.tsx
dcl_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(dcl_path, 'r', encoding='utf-8') as f:
    dcl_code = f.read()

new_tasks = '''
const FOOD_PRODUCTION_TASKS: CheckItem[] = [
  {
    id: "prod-1",
    category: "Recipe Scaling & Yield Target",
    task: "Review daily service covers, calculate recipe ingredient multipliers, and establish target portion yields across all production batches.",
    status: "pass",
    actionNotes: "Batch recipe scaling verified for 200 portions"
  },
  {
    id: "prod-2",
    category: "Raw Material Lot Verification",
    task: "Verify manufacturer lot codes, use-by dates, and 14 statutory allergen profiles before assembling raw ingredients into mixing bowls.",
    status: "pass",
    actionNotes: "All raw material lot codes logged"
  },
  {
    id: "prod-3",
    category: "Cooking Lethality Verification",
    task: "Insert calibrated probe into core of cooking batches; verify core temperature reaches minimum 75°C for 30s or 70°C for 2 min.",
    status: "pass",
    actionNotes: "Core lethality confirmed at 76.5°C"
  },
  {
    id: "prod-4",
    category: "Rapid 90-Minute Cooling",
    task: "Transfer hot cooked batches to blast chillers or ice water baths; cool from 60°C to below 8°C (ideally <5°C) within 90 minutes.",
    status: "pass",
    actionNotes: "Cooling cycle verified at 68 minutes"
  },
  {
    id: "prod-5",
    category: "Day-Dot & Allergen Labelling",
    task: "Affix food rotation day-dot label with production date, use-by date, batch number, chef initials, and bold allergen declarations.",
    status: "pass",
    actionNotes: "Storage containers labelled and sealed"
  },
  {
    id: "prod-6",
    category: "Yield & Waste Reconciliation",
    task: "Weigh finished batch yield against expected portion counts; record kitchen prep trimmings and waste deductions on daily ledger.",
    status: "pass",
    actionNotes: "Yield efficiency 98.4%; trim waste logged"
  }
];

const DISPATCH_LOG_TASKS: CheckItem[] = [
  {
    id: "disp-1",
    category: "Vehicle Hygiene & Pre-Trip Check",
    task: "Inspect delivery vehicle cargo bay; ensure interior surfaces are clean, sanitised, odour-free, and sealed against pest ingress.",
    status: "pass",
    actionNotes: "Refrigerated van cargo bay clean and sanitised"
  },
  {
    id: "disp-2",
    category: "Chilled Food Dispatch (<=5.0°C)",
    task: "Probe core or between-pack temperatures of chilled catering dishes; confirm reading is at or below 5.0°C (legal max 8.0°C) before loading.",
    status: "pass",
    actionNotes: "Chilled trays loaded at 3.4°C"
  },
  {
    id: "disp-3",
    category: "Hot Food Dispatch (>=63.0°C)",
    task: "Verify insulated transport Cambros and thermal boxes maintain cooked hot meals at or above 63.0°C at point of vehicle dispatch.",
    status: "pass",
    actionNotes: "Hot holding boxes loaded at 67.8°C"
  },
  {
    id: "disp-4",
    category: "Frozen Goods State (<=-18.0°C)",
    task: "Confirm frozen inventory remains frozen rock-solid with zero signs of surface thawing, ice crystals, or softening edges.",
    status: "pass",
    actionNotes: "Frozen stock verified at -19.2°C"
  },
  {
    id: "disp-5",
    category: "Tamper Seals & Security Slips",
    task: "Affix numbered tamper-evident security tags to transport containers; verify delivery manifest matches customer order paperwork.",
    status: "pass",
    actionNotes: "Tamper seals #8841-8846 recorded on manifest"
  },
  {
    id: "disp-6",
    category: "Transit Times & Consignee Sign-Off",
    task: "Record departure time, route transit duration, driver signature, and client temperature acceptance signature upon drop-off.",
    status: "pass",
    actionNotes: "Client receipt signed with delivery temp 64.5°C"
  }
];

const CORRECTIVE_ACTION_TASKS: CheckItem[] = [
  {
    id: "capa-1",
    category: "Incident & Defect Logging",
    task: "Document specific food safety non-conformance (e.g. refrigeration failure >8°C, undercooked poultry <75°C, packaging breach, pest sighting).",
    status: "pass",
    actionNotes: "Walk-in chiller #2 temperature excursion logged"
  },
  {
    id: "capa-2",
    category: "Immediate Containment Action",
    task: "Quarantine affected food lots immediately; lock quarantine area and affix red 'DO NOT USE / UNDER INVESTIGATION' hazard tags.",
    status: "pass",
    actionNotes: "4 cases of chicken thighs locked in quarantine"
  },
  {
    id: "capa-3",
    category: "Root Cause Analysis (5 Whys)",
    task: "Convene HACCP team to execute 5 Whys analysis: determine whether breach was mechanical failure, human error, or procedural defect.",
    status: "pass",
    actionNotes: "Root cause: evaporator fan motor relay burnt out"
  },
  {
    id: "capa-4",
    category: "Corrective & Preventive Action",
    task: "Execute repair, service equipment, revise SOPs, and deliver refresher hygiene training to prevent incident recurrence.",
    status: "pass",
    actionNotes: "Fan motor replaced by engineer; backup alarm fitted"
  },
  {
    id: "capa-5",
    category: "Product Disposition Decision",
    task: "Authorise safe product disposition: re-cook to verified 75°C lethality, safely condemn and destroy, or return defective goods to vendor.",
    status: "pass",
    actionNotes: "Product exceeded 8°C for >4h; safely condemned and denatured"
  },
  {
    id: "capa-6",
    category: "Effectiveness Verification & Closure",
    task: "Food Safety Team Leader reviews operational temperature logs after 14 days to verify permanent resolution before signing CAPA closure.",
    status: "pass",
    actionNotes: "14-day post-repair audit normal; CAPA closed"
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

new_detection = '''const isFoodProduction =
    templateTitle.toLowerCase().includes("production") ||
    (templateId && templateId.includes("food-production-sheet"));
  const isDispatch =
    templateTitle.toLowerCase().includes("dispatch") ||
    (templateId && templateId.includes("dispatch-log"));
  const isCorrectiveActionPlan =
    templateTitle.toLowerCase().includes("corrective action") ||
    (templateId && templateId.includes("corrective-action"));
  '''

dcl_code = dcl_code[:det_pos] + new_detection + dcl_code[det_pos:]

# Add returns inside getInitialTasks
ret_anchor = 'if (isBrcAudit) return BRC_AUDIT_TASKS;'
ret_pos = dcl_code.find(ret_anchor)
if ret_pos == -1:
    raise Exception("Could not find if (isBrcAudit) return BRC_AUDIT_TASKS; in DigitalChecklistTool.tsx")

new_returns = '''if (isFoodProduction) return FOOD_PRODUCTION_TASKS;
    if (isDispatch) return DISPATCH_LOG_TASKS;
    if (isCorrectiveActionPlan) return CORRECTIVE_ACTION_TASKS;
    '''

dcl_code = dcl_code[:ret_pos] + new_returns + dcl_code[ret_pos:]

with open(dcl_path, 'w', encoding='utf-8') as f:
    f.write(dcl_code)
print("Updated DigitalChecklistTool.tsx with Batch 27 tasks and routing.")

# 3. Update core_metadata.json
meta_path = 'src/data/core_metadata.json'
with open(meta_path, 'r', encoding='utf-8') as f:
    core_meta = json.load(f)

core_meta["food-production-sheet"] = {
    "title": "Free Food Production Sheet Template | Saim Dev",
    "desc": "Manage daily commercial kitchen culinary batch production with par levels. Free food production sheet covering recipe yields, CCPs, and allergens.",
    "howTo": [
        "Calculate recipe ingredient scaling based on forecasted daily service covers.",
        "Verify raw ingredient batch lot numbers, use-by dates, and allergen warnings.",
        "Probe core cooking temperatures to confirm compliance with FSA 75°C lethality.",
        "Cool batch preparations from 60°C to below 8°C within the 90-minute limit.",
        "Attach food rotation day-dot labels with batch IDs, dates, and allergen notes."
    ]
}

core_meta["dispatch-log"] = {
    "title": "Free Food Dispatch Temperature Log Sheet | Saim Dev",
    "desc": "Record food transport temperatures for catering and deliveries. Free dispatch log covering hot holding, chilled van temps, and vehicle cleanliness.",
    "howTo": [
        "Inspect transport vehicle cargo bay hygiene, refrigeration, and cleanliness.",
        "Probe chilled catering items to verify temperature is ≤5.0°C (legal max 8.0°C).",
        "Confirm hot meals in insulated transport boxes remain at or above 63.0°C.",
        "Affix tamper-evident security seals to transport containers and record numbers.",
        "Log vehicle departure time, transit duration, and consignee arrival signatures."
    ]
}

core_meta["hot-holding-food-temperature-log"] = {
    "title": "Free Hot Holding Temperature Log Sheet | Saim Dev",
    "desc": "Monitor commercial kitchen bain-maries and heated display cabinets at ≥63°C. Free hot holding temperature log sheet for UK EHO compliance.",
    "howTo": [
        "Preheat heated display cabinets, hot wells, and bain-maries to at least 65°C.",
        "Verify cooked food reaches 75°C core temperature before transferring to wells.",
        "Probe hot-held dishes every 2 hours; verify core temperature remains ≥63.0°C.",
        "Apply UK 2-hour display exemption rule if holding food at ambient counters.",
        "Log temperatures, probe sanitisation wipes, chef initials, and corrective actions."
    ]
}

core_meta["corrective-action-plan-template"] = {
    "title": "Free Corrective Action Plan Template | Saim Dev",
    "desc": "Document food safety non-conformances, 5 Whys root causes, and CAPA actions. Free corrective action plan template for HACCP and EHO audits.",
    "howTo": [
        "Identify and log food safety non-conformance (e.g. temperature breach, contamination).",
        "Immediately quarantine compromised food lots and attach clear hazard warning tags.",
        "Convene HACCP team to conduct 5 Whys root cause investigation on the failure.",
        "Assign corrective and preventive actions (CAPA) with designated owners and deadlines.",
        "Determine safe product disposition and sign off verification after 14 days."
    ]
}

core_meta["fridge-layout-poster"] = {
    "title": "Free Commercial Fridge Layout Poster | Saim Dev",
    "desc": "Organise commercial kitchen walk-in and reach-in refrigerators safely. Free printable fridge layout poster showing raw and ready-to-eat shelf tiers.",
    "howTo": [
        "Store ready-to-eat foods, prepped salads, and cooked meats on top shelves.",
        "Place dairy products, cheeses, and unwashed produce on middle shelves.",
        "Position raw seafood, whole cuts of beef, and pork on lower-middle shelves.",
        "Store raw poultry, minced meats, and raw game on bottom shelf in drip trays.",
        "Maintain continuous air circulation and verify temperature remains below 5.0°C."
    ]
}

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(core_meta, f, indent=2, ensure_ascii=False)
print("Updated core_metadata.json for Batch 27 tools.")

# 4. Update tool_deep_content.ts
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

batch27_deep_items = '''
  "food-production-sheet": {
    directAnswer:
      "A food production sheet organizes daily commercial culinary manufacturing and kitchen prep operations. It translates sales and cover forecasts into precise ingredient quantities, portion yields, CCP cooking lethality checks (75°C for 30s), 90-minute cooling compliance, and Natasha's Law allergen declarations across kitchen sections.",
    howTo: [
      "Calculate batch production pars: multiply standard recipe batch sizes by forecasted customer covers for lunch and dinner services.",
      "Log raw material batch lot numbers: record supplier intake lot codes and use-by dates for traceability across all ingredients.",
      "Verify thermal critical limits: probe core cooking temperatures to confirm batches achieve at least 75°C for 30 seconds (or 70°C for 2 minutes).",
      "Monitor statutory cooling: chill hot-cooked stocks, gravies, and braised meats from 60°C to below 8°C (ideally <5°C) within 90 minutes.",
      "Affix day-dot batch labels: record item name, prep date, use-by date, batch number, chef initials, and bold 14 statutory allergens."
    ],
    faqs: [
      {
        q: "What is the difference between a kitchen prep list and a food production sheet?",
        a: "A prep list focuses on station-by-station mise-en-place for daily service, whereas a food production sheet focuses on batch manufacturing—tracking ingredient scaling, recipe yields, batch lot numbers, CCP cooking temperatures, and portion variance."
      },
      {
        q: "How does a food production sheet reduce kitchen food waste?",
        a: "By setting exact production pars based on cover forecasts and comparing theoretical ingredient weights against actual yielded portions, managers detect over-portioning, prep shrinkage, and excessive batch scrap."
      },
      {
        q: "Why are raw material lot numbers recorded on production sheets?",
        a: "Under Regulation (EC) No 178/2002 Article 18, recording raw material lot codes links incoming supplier deliveries to finished menu items, enabling rapid targeted product recalls in the event of upstream contamination."
      },
      {
        q: "What cooling parameters must be verified during batch food production?",
        a: "Under UK Food Standards Agency guidelines, hot food passing through the danger zone (8°C to 60°C) must be cooled to below 8°C within 90 minutes to prevent spore germination of Bacillus cereus and Clostridium perfringens."
      },
      {
        q: "How long should completed food production sheets be retained?",
        a: "Under UK due diligence defence (Food Safety Act 1990), completed daily production logs should be archived for at least 12 months for Environmental Health Officer (EHO) and third-party audit verification."
      }
    ],
    relatedTools: [
      "kitchen-prep-list-template",
      "cooking-log-template",
      "recipe-batch-calculator"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "dispatch-log": {
    directAnswer:
      "A food dispatch log records outbound transport conditions for catered events, mobile delivery vans, and off-premise food distribution. Aligned with Regulation (EC) No 852/2004, it verifies vehicle cleanliness, temperature controls (hot food ≥63.0°C; chilled food ≤5.0°C; frozen ≤-18.0°C), tamper-evident container seals, departure times, and recipient delivery handovers.",
    howTo: [
      "Inspect transport vehicle hygiene: ensure delivery van cargo holds are sanitised, odour-free, and pre-chilled or heated as required.",
      "Probe chilled catering items: verify core or between-pack temperatures are at or below 5.0°C (statutory maximum 8.0°C) prior to loading.",
      "Verify hot-holding transport units: confirm insulated Cambros or electric warming cabinets maintain food at or above 63.0°C at dispatch.",
      "Check packaging integrity: ensure tamper-evident seals are intact and catering containers carry clear product and allergen labels.",
      "Log handover and arrival temperatures: record dispatch time, vehicle registration, driver initials, and client signature upon delivery."
    ],
    faqs: [
      {
        q: "What are the legal temperature limits for transporting food in the UK?",
        a: "Under the Food Safety and Hygiene (England) Regulations 2013, chilled food must be transported at or below 8.0°C (best practice ≤5.0°C) and hot food must be maintained at or above 63.0°C throughout transit."
      },
      {
        q: "How long can food be transported in passive insulated containers without active refrigeration?",
        a: "High-grade insulated containers (e.g. heavy-duty polyurethane Cambros) can maintain safe temperatures for up to 4 hours. However, internal temperatures must be probed and logged at departure and arrival to prove compliance."
      },
      {
        q: "What should happen if food arrives at an event below 63°C?",
        a: "If hot food drops below 63°C during transit, it must be either reheated to 75°C core (82°C in Scotland) and served immediately, served within the 2-hour legal exemption window, or safely discarded."
      },
      {
        q: "Why are tamper-evident seals recommended for food delivery vans?",
        a: "Tamper-evident seals on delivery boxes and vehicle doors provide verifiable chain-of-custody assurance that food was not subjected to unauthorized interference, contamination, or theft during transit."
      },
      {
        q: "Can delivery drivers log temperatures digitally?",
        a: "Yes. Digital temperature data-loggers, vehicle telematics probes, and mobile checklist apps provide tamper-proof, time-stamped records accepted by Environmental Health Officers."
      }
    ],
    relatedTools: [
      "delivery-log",
      "hot-holding-food-temperature-log",
      "ingredient-traceability"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "corrective-action-plan-template": {
    directAnswer:
      "A corrective action plan (CAPA) template documents the systematic containment, investigation, and resolution of food safety non-conformances. In accordance with HACCP Principle 5 and ISO 22000, it establishes immediate quarantine of compromised products, 5 Whys root cause analysis, preventative corrective measures, product disposition decisions, and 14-day effectiveness verifications.",
    howTo: [
      "Identify and log non-conformance: document the date, time, location, affected food batch, and specific safety limit breached.",
      "Execute immediate containment: isolate and tag affected food inventory with bold red 'QUARANTINE / DO NOT USE' labels.",
      "Conduct root cause investigation: apply the 5 Whys methodology to determine the underlying mechanical, operational, or human failure.",
      "Assign corrective and preventive actions: specify exact remediation tasks, designate accountable personnel, and establish implementation deadlines.",
      "Verify CAPA effectiveness: re-audit the affected process after 14 to 30 days to confirm the defect has not recurred before closing the file."
    ],
    faqs: [
      {
        q: "What is HACCP Principle 5?",
        a: "HACCP Principle 5 requires food businesses to establish corrective actions to be taken when monitoring indicates that a particular Critical Control Point (CCP) is not under control."
      },
      {
        q: "What is the difference between a correction and a corrective action?",
        a: "A correction is an immediate containment step to address a symptom (e.g. discarding an undercooked chicken breast). A corrective action identifies and eliminates the root cause to prevent the issue from happening again (e.g. recalibrating the oven thermostat and re-training the cook)."
      },
      {
        q: "What product disposition options exist under a food safety CAPA?",
        a: "Depending on scientific hazard evaluation, disposition options include: reprocessing (e.g. re-cooking to verified lethality), downgrading (e.g. diverting to animal feed), returning to supplier, or condemning and denaturing for secure waste disposal."
      },
      {
        q: "How does a robust CAPA system protect against EHO enforcement?",
        a: "Environmental Health Officers recognize that equipment and operational glitches happen. Demonstrating a documented CAPA system that immediately identifies, isolates, and rectifies breaches provides powerful legal proof of 'due diligence' under the Food Safety Act 1990."
      },
      {
        q: "Who is responsible for signing off on a completed corrective action?",
        a: "The designated Food Safety Team Leader, Head Chef, or Technical Quality Manager must independently review implementation evidence and verify effectiveness before formally signing off on CAPA closure."
      }
    ],
    relatedTools: [
      "root-cause-analysis",
      "haccp-plan-template",
      "health-inspection-checklist"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "fridge-layout-poster": {
    directAnswer:
      "A commercial fridge layout poster provides a visual food safety hierarchy for organizing walk-in cold rooms and reach-in refrigerators. In accordance with UK Food Standards Agency (FSA) guidelines, it establishes vertical shelf segregation to prevent cross-contamination: ready-to-eat foods at the top, dairy and unwashed produce in the middle, raw seafood in lower sections, and raw poultry and meats at the bottom.",
    howTo: [
      "Top shelf: store ready-to-eat (RTE) foods, cooked meats, prepared salads, sandwich fillings, and delicate desserts requiring no further cooking.",
      "Middle shelves: store pasteurised dairy items, butter, cheeses, cooked leftovers, and unwashed whole fruit and vegetables.",
      "Lower-middle shelves: store raw fish fillets, whole seafood, and whole cuts of raw beef and pork in sealed stainless containers.",
      "Bottom shelf: store raw poultry, minced meats, sausages, and raw game in deep drip-proof containers to prevent juices dripping onto other foods.",
      "Temperature and airflow: maintain continuous refrigeration between 0°C and 5.0°C (legal max 8.0°C) and avoid blocking evaporator airflow vents."
    ],
    faqs: [
      {
        q: "Why must raw poultry and meats always be stored on the bottom shelf of a fridge?",
        a: "Raw chicken and meats carry high bacterial loads of Salmonella and Campylobacter. Storing them on the lowest shelf ensures that any accidental leaks or drippings cannot contaminate ready-to-eat foods below them."
      },
      {
        q: "What is the legal maximum temperature for a commercial food refrigerator in the UK?",
        a: "Under the Food Safety and Hygiene (England) Regulations 2013, cold food must be held at or below 8.0°C. Best practice recommended by the Food Standards Agency is to operate fridges between 0°C and 5.0°C."
      },
      {
        q: "Where should allergen-free or gluten-free prepared foods be stored in a fridge?",
        a: "Allergen-free and gluten-free ingredients should be stored on top shelves inside clearly labelled purple containers with airtight lids, physically segregated from allergenic items like dairy, peanuts, or wheat flour."
      },
      {
        q: "Why is airflow crucial in a commercial refrigerator?",
        a: "Commercial chillers rely on forced-air circulation to distribute cold air evenly. Overcrowding shelves with boxes or lining wire racks with cardboard or foil impedes airflow, creating warm pockets that exceed 8.0°C."
      },
      {
        q: "How should opened canned foods be stored in a refrigerator?",
        a: "Food should never be stored in opened metal cans because the tin and iron can react with acidic contents in the presence of air, causing metallic contamination. Food must be transferred into food-grade plastic or stainless containers with lids."
      }
    ],
    relatedTools: [
      "walk-in-cooler-food-storage-chart",
      "freezer-temperature-chart",
      "basic-food-preparation-rules"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  }
'''

new_deep_code = pre_text + batch27_deep_items + "\n};\n\n" + deep_code[fallback_pos:]

with open(deep_path, 'w', encoding='utf-8') as f:
    f.write(new_deep_code)
print("Updated tool_deep_content.ts with Batch 27 deep content.")

# 5. Update tracker
tracker_path = 'audit/tools-seo-tracker.json'
with open(tracker_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

batch27_data = {
    "food-production-sheet": {
        "priority_rank": 131,
        "target_keyword": "food production sheet template",
        "top_5_competitors": [
            "https://pos.toasttab.com/blog/on-the-line/food-production-sheet",
            "https://safetyculture.com/checklists/food-production-sheet/",
            "https://www.fooddocs.com/post/food-production-sheet",
            "https://www.touchbistro.com/blog/food-production-sheet-template/",
            "https://www.restaurantowner.com/public/Daily-Food-Production-Sheet.cfm"
        ],
        "differentiators": [
            "Real-time yield & portion calculator: planned portions vs actual yielded units",
            "Integrated CCP thermal validation checks (core cooking 75°C for 30s)",
            "Natasha's Law allergen cross-contact sign-off on every production batch",
            "Zero login, zero paywall, client-side interactive tool",
            "Clean A4 PDF export formatted for kitchen production binders"
        ]
    },
    "dispatch-log": {
        "priority_rank": 132,
        "target_keyword": "food dispatch log template",
        "top_5_competitors": [
            "https://www.fooddocs.com/post/food-dispatch-log",
            "https://safetyculture.com/checklists/food-transport-log/",
            "https://www.highspeedtraining.co.uk/hub/food-transport-temperature-rules/",
            "https://www.virtual-college.co.uk/resources/food-transportation-guidelines",
            "https://www.ncass.org.uk/resources/daily-record-sheets/"
        ],
        "differentiators": [
            "Temperature verification at loading: hot >=63°C, chilled <=5°C (legal max 8°C), frozen <=-18°C",
            "Vehicle hygiene, thermal insulation boxes, and tamper-evident container seal tracking",
            "Estimated delivery transit time and client temperature acceptance signature",
            "Local storage persistence, custom customer route additions",
            "1-click printable dispatch manifest for drivers and dispatch managers"
        ]
    },
    "hot-holding-food-temperature-log": {
        "priority_rank": 133,
        "target_keyword": "hot holding food temperature log",
        "top_5_competitors": [
            "https://www.fooddocs.com/post/hot-holding-temperature-log",
            "https://safetyculture.com/checklists/hot-holding-temperature-log/",
            "https://www.highspeedtraining.co.uk/hub/hot-holding-temperatures/",
            "https://www.virtual-college.co.uk/resources/hot-holding-monitoring-sheet",
            "https://www.ncass.org.uk/resources/daily-record-sheets/"
        ],
        "differentiators": [
            "Continuous >=63.0°C critical limit validation (Food Safety Regulations 2013)",
            "Multi-station logging: bain-maries, soup kettles, heated gantries, carvery wells",
            "2-hour display exemption countdown tracker for buffet service",
            "Pre-configured corrective actions (re-heating to 75°C / 82°C Scotland or safe disposal)",
            "Unbranded clean A4 PDF print conforming to local council EHO audit expectations"
        ]
    },
    "corrective-action-plan-template": {
        "priority_rank": 134,
        "target_keyword": "corrective action plan template food safety",
        "top_5_competitors": [
            "https://safetyculture.com/checklists/corrective-action-plan/",
            "https://www.fooddocs.com/post/haccp-corrective-actions",
            "https://www.process.st/templates/corrective-action-plan-template/",
            "https://www.lumiform.app/template/corrective-action-plan",
            "https://www.highspeedtraining.co.uk/hub/haccp-principles-corrective-actions/"
        ],
        "differentiators": [
            "Full 5-stage CAPA workflow: containment, root cause (5 Whys), corrective action, deadline, verification",
            "Severity classification: Minor non-conformance, Major, or Critical public health risk",
            "Product disposition logging: reprocess, destroy, quarantine, or release under concession",
            "Zero signup gate, client-side interactive tool",
            "Clean A4 PDF audit certificate for EHO inspection close-out"
        ]
    },
    "fridge-layout-poster": {
        "priority_rank": 135,
        "target_keyword": "fridge layout poster commercial kitchen",
        "top_5_competitors": [
            "https://www.highspeedtraining.co.uk/hub/fridge-storage-order/",
            "https://www.virtual-college.co.uk/resources/fridge-storage-order-guide",
            "https://www.fooddocs.com/post/fridge-layout-poster",
            "https://safetyculture.com/checklists/safe-fridge-layout/",
            "https://www.ncass.org.uk/resources/fridge-organization-guide/"
        ],
        "differentiators": [
            "Visual vertical shelf hierarchy strictly aligned with FSA food hygiene rules",
            "Temperature tiering guide (air circulation rules, 0°C to 5.0°C range, legal max 8.0°C)",
            "Allergen segregation rules (top-shelf purple bins for allergen-free preps)",
            "Interactive shelf simulator and high-resolution printable A4/A3 kitchen wall poster",
            "Zero watermark, 100% free download"
        ]
    }
}

for row in tracker:
    slug = row.get("slug")
    if slug in batch27_data:
        info = batch27_data[slug]
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
print(f"Batch 27 application complete! Total completed tools: {completed_count}/160")
