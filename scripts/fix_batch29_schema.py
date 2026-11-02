import json
import re

print("=== FIXING BATCH 29 SCHEMA & TYPESCRIPT ERRORS ===")

# 1. Fix THERMOMETER_SOP_TASKS in DigitalChecklistTool.tsx
with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    dcl = f.read()

# Replace the THERMOMETER_SOP_TASKS definition with clean CheckItem objects
therm_clean = """const THERMOMETER_SOP_TASKS: CheckItem[] = [
  {
    id: "therm-1",
    category: "Pre-Use Inspection",
    task: "Inspect digital thermometer casing, display, and battery level; verify casing integrity and clean probe tip.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-2",
    category: "BS EN 1276 Sanitisation",
    task: "Disinfect metal probe sensor stem using an approved BS EN 1276 single-use food-grade alcohol probe wipe before every temperature check.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-3",
    category: "Insertion Depth & Placement",
    task: "Insert probe needle into geometric centre/thickest portion of food item, avoiding direct contact with bones, gristle, skewers, or metal pans.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-4",
    category: "Reading Stabilisation",
    task: "Hold probe stationary for 5 to 10 seconds until the digital temperature reading holds steady without fluctuating.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-5",
    category: "Statutory Cooking Verification",
    task: "Verify food item meets UK FSA core lethality standard (>=75.0°C for 30 seconds or Scottish standard >=82.0°C).",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-6",
    category: "Post-Use Decontamination",
    task: "Immediately clean and disinfect probe stem with a fresh BS EN 1276 sanitising wipe before stowing probe in protective sheath.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-7",
    category: "Monthly Dual Calibration",
    task: "Perform dual ice bath (0.0°C ±1°C) and boiling water (100.0°C ±1°C) accuracy verification; log in calibration register.",
    status: "pass",
    actionNotes: ""
  }
];"""

# Replace in dcl
dcl = re.sub(r'const THERMOMETER_SOP_TASKS: CheckItem\[\] = \[[\s\S]*?\];', therm_clean, dcl)
with open('src/components/tools/DigitalChecklistTool.tsx', 'w', encoding='utf-8') as f:
    f.write(dcl)
print("1. Fixed DigitalChecklistTool.tsx CheckItem fields")

# 2. Fix tool_deep_content.ts objects for batch 29
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Target from "what-is-the-minimum-hot-holding-temperature-for-hot-dog": to the end of food-sanitation-rules
start_idx = text.find('  "what-is-the-minimum-hot-holding-temperature-for-hot-dog": {')
assert start_idx != -1, "Could not find start of batch 29 in tool_deep_content.ts"

fallback_pos = text.find('export const FALLBACK_DEEP_CONTENT')
end_idx = text.rfind('};', 0, fallback_pos)
assert end_idx != -1, "Could not find end of batch 29 in tool_deep_content.ts"

batch29_clean_ts = """  "what-is-the-minimum-hot-holding-temperature-for-hot-dog": {
    directAnswer:
      "Under Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013, cooked hot dogs must be maintained at a minimum hot-holding temperature of 63.0°C continuously. Operators may utilize a single 2-hour display exemption window below 63°C, after which food must be reheated to 75°C, chilled to 8°C, or discarded.",
    howTo: [
      "Cook or reheat hot dogs to at least 75.0°C core before transferring to warmers.",
      "Maintain hot holding display wells or roller grills at or above 63.0°C continuously.",
      "Check and record internal core temperature every 2 hours using a disinfected digital probe.",
      "Discard any hot dogs displayed below 63.0°C for longer than the statutory 2-hour window."
    ],
    faqs: [
      {
        q: "What is the statutory minimum hot-holding temperature for hot dogs in the UK?",
        a: "Under Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013, cooked hot dogs must be held hot at or above 63.0°C continuously until service."
      },
      {
        q: "Can hot dogs be held in a roller grill or water well below 63°C?",
        a: "Only under the statutory 2-hour display exemption. Hot dogs can be held below 63.0°C for a single period of up to 2 hours. If unsold after 2 hours, they must be rapidly chilled, brought above 63.0°C, or safely discarded."
      },
      {
        q: "How often should hot dog holding temperatures be probed and logged?",
        a: "Commercial best practice and FSA due diligence require probing core temperatures at least every 2 hours, recording the time, batch, temperature, and operator initials."
      },
      {
        q: "Can cold pre-cooked hot dogs be warmed up directly inside a hot-holding well?",
        a: "No. Hot-holding equipment is designed only to maintain hot food temperatures, not to heat cold food. Hot dogs must first be cooked or reheated to at least 75.0°C (or 82.0°C in Scotland) before being placed into holding equipment."
      },
      {
        q: "What should I do if hot dogs drop below 63°C during service?",
        a: "If the temperature has been below 63.0°C for less than 2 hours, you may reheat the hot dogs once to 75.0°C or serve them immediately. If the duration exceeds 2 hours or is unknown, discard them immediately to prevent Bacillus cereus or Clostridium intoxication."
      }
    ],
    relatedTools: [
      "hot-holding-food-temperature-log",
      "what-is-the-minimum-hot-holding-temperature-requirement-for-pizza",
      "food-temperature-chart"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "fridge-organization-chart": {
    directAnswer:
      "A commercial kitchen fridge organisation chart establishes a 5-tier vertical hierarchy based on required minimum cooking temperatures. Ready-to-eat foods occupy the top shelf, followed downwards by whole fish, whole raw meats, raw ground meats, and raw poultry at the bottom to prevent gravity-driven cross-contamination drips.",
    howTo: [
      "Store ready-to-eat foods, cooked meats, dairy, and salads exclusively on top shelves.",
      "Place whole raw cuts of beef, pork, lamb, and seafood on middle shelving tiers.",
      "Store raw minced meats and burger patties below whole cuts on intermediate shelves.",
      "Isolate raw poultry, chicken, and turkey strictly on the lowest bottom shelf.",
      "Label all prepped food pans with day-dot stickers indicating prep date and 48-hour discard time."
    ],
    faqs: [
      {
        q: "Why must raw poultry always be placed on the lowest shelf in a commercial fridge?",
        a: "Raw poultry carries the highest pathogen loads (Campylobacter and Salmonella) and requires the highest cooking lethality (75°C). Placing it on the bottom shelf prevents infectious poultry juices from dripping onto foods stored below."
      },
      {
        q: "What is the legal maximum operating temperature for a commercial fridge in the UK?",
        a: "Under the Food Safety and Hygiene (England) Regulations 2013, the legal maximum temperature for chilled food is 8.0°C. However, the FSA recommends setting commercial chillers between 1.0°C and 5.0°C for optimal safety."
      },
      {
        q: "Can cooked food and raw food be stored on the same refrigerator shelf?",
        a: "Never on the same shelf unless stored in completely sealed, airtight, commercial food-grade containers with physical separation barriers and clear distinct colour labelling."
      },
      {
        q: "Can I line refrigerator wire shelves with cardboard or aluminium foil?",
        a: "No. Lining wire shelves obstructs convective chilled airflow, creates warm pockets above 8.0°C, and cardboard harbours moisture, mold spores, and pests. Wire shelves must remain bare."
      },
      {
        q: "How often should commercial kitchen refrigerators be deep-cleaned?",
        a: "Spills and door gaskets must be cleaned daily. The entire unit should be completely emptied, shelves removed, washed with detergent, and disinfected with a BS EN 1276 chemical sanitiser at least once weekly."
      }
    ],
    relatedTools: [
      "walk-in-cooler-food-storage-chart",
      "fridge-layout-poster",
      "fridge-temperature-record-sheet-pdf"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "how-to-use-a-meat-thermometer": {
    directAnswer:
      "To use a digital meat thermometer, first disinfect the stainless steel sensor probe using a BS EN 1276 alcohol wipe. Insert the probe into the thickest geometric centre of the meat, avoiding bones, fat pockets, and metal cooking trays. Hold stationary for 5 to 10 seconds until reading stabilises at or above 75.0°C.",
    howTo: [
      "Disinfect the probe needle with a BS EN 1276 wipe for 30 seconds and allow to air dry.",
      "Insert the probe needle into the thickest part of the meat cut, avoiding bone or gristle.",
      "Hold the probe steady for 5 to 10 seconds until the digital temperature reading holds constant.",
      "Verify internal core temperature reaches at least 75.0°C for 30 seconds (or 82.0°C in Scotland).",
      "Sanitise the probe stem immediately after use before returning it to its protective casing."
    ],
    faqs: [
      {
        q: "What is the statutory cooking core temperature target for poultry and meat in the UK?",
        a: "Under UK FSA guidelines, meat and poultry must reach a core temperature of at least 75.0°C held for 30 seconds, or 70.0°C held for 2 minutes. In Scotland, reheated food must reach 82.0°C."
      },
      {
        q: "Why does the probe needle have to avoid touching bone?",
        a: "Bones conduct heat significantly faster than surrounding muscle tissue, producing a falsely high temperature reading while internal meat fibers remain undercooked and hazardous."
      },
      {
        q: "How long should I wait before reading a digital meat thermometer?",
        a: "Wait 5 to 10 seconds after insertion until the digital display holds a steady number without fluctuating before recording the measurement."
      },
      {
        q: "Can I wipe meat thermometer probes with a kitchen cloth or apron?",
        a: "Never. Wiping probe stems on tea towels or clothing causes immediate pathogen cross-contamination. Always use a fresh, single-use BS EN 1276 alcohol wipe between every test."
      },
      {
        q: "How often should commercial meat thermometers be calibrated?",
        a: "Calibrate monthly using the ice point (0.0°C) and boiling point (100.0°C) methods, or immediately if the thermometer is dropped or exposed to extreme heat shocks."
      }
    ],
    relatedTools: [
      "how-to-use-a-food-thermometer",
      "thermometer-calibration-log",
      "meat-cooking-temperature-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "how-to-use-a-food-thermometer": {
    directAnswer:
      "Operating a commercial food thermometer requires disinfecting the probe with a BS EN 1276 wipe, submerging the sensor stem at least 50mm into liquids or the geometric centre of solids, and waiting 5 to 10 seconds for reading stabilisation. Monthly calibration at 0.0°C and 100.0°C guarantees HACCP accuracy.",
    howTo: [
      "Inspect probe battery and display before each shift to verify operational accuracy.",
      "Sanitise the metal probe needle using an approved BS EN 1276 food-safe alcohol wipe.",
      "Immerse the probe at least 50mm into food core, avoiding container bottoms or sides.",
      "Wait 5 to 10 seconds until digital numbers stabilize before logging the temperature.",
      "Record reading with date, time, batch, and initials in the digital kitchen log."
    ],
    faqs: [
      {
        q: "How deep must a food probe thermometer be inserted into food?",
        a: "Submerge the probe stem at least 50mm (2 inches) into liquids or into the geometric center of solid foods to ensure the sensor tip achieves accurate thermal equilibrium."
      },
      {
        q: "What is the acceptable accuracy tolerance for commercial food thermometers?",
        a: "Food thermometers used for HACCP CCP monitoring must be accurate within ±0.5°C to ±1.0°C. Units exceeding ±1.0°C variance must be recalibrated or replaced."
      },
      {
        q: "How do you probe temperature of vacuum-packed delivery food without piercing packaging?",
        a: "Place the probe needle firmly sandwiched between two vacuum packs or within a fold of the packaging, ensuring good surface contact without puncturing the protective seal."
      },
      {
        q: "What standard of sanitising wipe is required for food thermometer probes?",
        a: "Wipes must be certified to British Standard BS EN 1276 or BS EN 13697, containing food-safe alcohol disinfectant that evaporates completely without leaving toxic chemical residues."
      },
      {
        q: "How often should commercial food thermometers be tested for calibration?",
        a: "Every commercial food thermometer should undergo ice bath (0.0°C) and boiling water (100.0°C) calibration testing at least once a month and after any physical impact."
      }
    ],
    relatedTools: [
      "how-to-use-a-meat-thermometer",
      "thermometer-calibration-log",
      "boiling-water-thermometer-calibration"
    ],
    relatedBlog: {
      title: "How to Write a HACCP Plan for UK Food Businesses: Step-by-Step",
      slug: "how-to-write-haccp-plan-uk-food-business-step-by-step"
    }
  },
  "food-sanitation-rules": {
    directAnswer:
      "Commercial food sanitation rules mandate a strict two-stage cleaning procedure: detergent washing to remove physical grease, followed by a BS EN 1276 chemical disinfectant applied with mandatory contact time (30-60 seconds). Dedicated handwash basins, colour-coded cleaning gear, and COSHH compliance prevent biological contamination.",
    howTo: [
      "Clear loose food debris and scrape surfaces before commencing wet cleaning.",
      "Wash surfaces with hot water and food-grade detergent to strip grease and grime.",
      "Apply BS EN 1276 chemical sanitiser, observing the full 30 to 60-second contact time.",
      "Allow surfaces to air dry or wipe dry using single-use blue paper roll.",
      "Sign off daily kitchen sanitation checklists to maintain EHO due diligence evidence."
    ],
    faqs: [
      {
        q: "What is two-stage cleaning and why is it legally required?",
        a: "Two-stage cleaning separates physical grime removal from bacterial destruction. Stage 1 washes away grease and debris with detergent; Stage 2 applies a BS EN 1276 disinfectant with contact time to kill 99.999% of pathogens."
      },
      {
        q: "What does BS EN 1276 certification signify on kitchen sanitisers?",
        a: "BS EN 1276 is the European and British standard proving that a chemical disinfectant achieves a 5-log reduction (99.999% kill rate) of foodborne bacteria within 5 minutes under dirty conditions."
      },
      {
        q: "Can reusable dishcloths or tea towels be used in commercial kitchens?",
        a: "No. Reusable dishcloths harbour and rapidly spread bacteria across preparation surfaces. UK EHO inspectors require single-use disposable paper roll or color-coded cloths laundered daily at 90°C."
      },
      {
        q: "Where should cleaning chemicals be stored in a restaurant or takeaway?",
        a: "In a dedicated, locked chemical storage cupboard away from all food prep and ingredient storage areas, in full compliance with COSHH regulations."
      },
      {
        q: "What documentation is required by an EHO regarding kitchen sanitation?",
        a: "An Environmental Health Officer requires a documented Master Cleaning Schedule, signed daily hygiene checklists, COSHH safety data sheets, and evidence of BS EN 1276 disinfectant compliance."
      }
    ],
    relatedTools: [
      "food-safety-and-sanitation",
      "kitchen-safety-poster",
      "hand-washing-poster"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  }
"""

text = text[:start_idx] + batch29_clean_ts + text[end_idx:]
with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("2. Updated tool_deep_content.ts with schema-compliant ToolDeepContent objects")
print("=== FIX COMPLETE ===")
