# -*- coding: utf-8 -*-
import json
import csv
import sys

# 1. Update TemplateDetailPage.tsx to route when-should-you-wash-your-hands to HandWashingPosterTool
detail_path = 'src/components/TemplateDetailPage.tsx'
with open(detail_path, 'r', encoding='utf-8') as f:
    detail_code = f.read()

hw_anchor = 'template.slug === "hand-washing-poster" ||'
if hw_anchor in detail_code:
    new_hw = 'template.slug === "hand-washing-poster" ||\n    template.slug.includes("wash-your-hands") ||'
    detail_code = detail_code.replace(hw_anchor, new_hw, 1)
    with open(detail_path, 'w', encoding='utf-8') as f:
        f.write(detail_code)
    print("Updated TemplateDetailPage.tsx: routed when-should-you-wash-your-hands to HandWashingPosterTool.")

# 2. Update DigitalChecklistTool.tsx
dcl_path = 'src/components/tools/DigitalChecklistTool.tsx'
with open(dcl_path, 'r', encoding='utf-8') as f:
    dcl_code = f.read()

new_tasks = '''
const FOOD_SANITATION_TASKS: CheckItem[] = [
  {
    id: "san-1",
    category: "Two-Stage Cleaning Protocol",
    task: "Stage 1: Clean food-contact surfaces with warm water and detergent to lift grease and food debris; Stage 2: Spray BS EN 1276 chemical disinfectant.",
    status: "pass",
    actionNotes: "Prep benches cleaned and disinfected via two-stage process"
  },
  {
    id: "san-2",
    category: "Chemical Contact Time (30-60s)",
    task: "Allow surface sanitiser to remain visibly wet on surfaces for the full statutory manufacturer contact time before wiping with disposable blue roll.",
    status: "pass",
    actionNotes: "60-second contact time timed and verified"
  },
  {
    id: "san-3",
    category: "BS EN 1276 / 13697 Standards",
    task: "Confirm all commercial kitchen sanitisers and bactericidal disinfectants are certified to BS EN 1276 or BS EN 13697 standards.",
    status: "pass",
    actionNotes: "Chemical technical data sheets verified compliant"
  },
  {
    id: "san-4",
    category: "Colour-Coded Cleaning Equipment",
    task: "Enforce four-colour equipment segregation: Red (washrooms), Blue (bar/dining), Yellow (kitchen prep surfaces), Green (produce prep).",
    status: "pass",
    actionNotes: "Colour-coded cloths and mop buckets audited"
  },
  {
    id: "san-5",
    category: "Master Cleaning Schedule Sign-Off",
    task: "Complete and initial daily, weekly, and monthly deep clean items on the master cleaning schedule (hood baffles, floor drains, ice machines).",
    status: "pass",
    actionNotes: "Daily kitchen sanitation log signed by head chef"
  },
  {
    id: "san-6",
    category: "Sanitiser Chemical Dilution Testing",
    task: "Test chemical dispenser dilution with quat or chlorine test strips to ensure sanitiser concentration is within effective bactericidal range.",
    status: "pass",
    actionNotes: "Chemical test strip confirmed 200 ppm quat active"
  }
];

const BIG_6_PATHOGENS_TASKS: CheckItem[] = [
  {
    id: "path-1",
    category: "Norovirus Controls & Spill Kit",
    task: "Strictly exclude staff with vomiting or diarrhoea for 48 hours after symptoms cease; maintain dedicated emergency bodily fluid spill kit.",
    status: "pass",
    actionNotes: "48-hour exclusion rule enforced on staff register"
  },
  {
    id: "path-2",
    category: "Non-Typhoidal Salmonella Lethality",
    task: "Cook raw poultry, liquid eggs, and poultry dishes to a minimum core temperature of 75°C for 30s (or 70°C for 2m); store on lowest fridge shelf.",
    status: "pass",
    actionNotes: "Core temperature logs confirm 75°C lethality achieved"
  },
  {
    id: "path-3",
    category: "Salmonella Typhi & Paratyphi",
    task: "Require medical questionnaires for staff returning from typhoid-endemic travel; enforce absolute exclusion of confirmed carriers.",
    status: "pass",
    actionNotes: "Pre-employment health declarations verified"
  },
  {
    id: "path-4",
    category: "Shiga Toxin-Producing E. coli (STEC)",
    task: "Cook minced beef burgers and rolled meat joints thoroughly to 75°C core; enforce dedicated red boards and dual-pack vacuum packers.",
    status: "pass",
    actionNotes: "Raw red meat separation protocols verified"
  },
  {
    id: "path-5",
    category: "Shigella spp. Hygiene Barriers",
    task: "Sanitise customer and staff restroom flush levers, cubicle locks, and washbasins every 2 hours; provide non-touch sensor taps.",
    status: "pass",
    actionNotes: "Restroom sanitisation schedule initialled"
  },
  {
    id: "path-6",
    category: "Hepatitis A Jaundice Screening",
    task: "Immediately exclude any food handler displaying jaundice, fever, dark urine, or abdominal pain; notify local Environmental Health Officer.",
    status: "pass",
    actionNotes: "Daily staff wellness checks recorded on opening sheet"
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

new_detection = '''const isFoodSanitation =
    templateTitle.toLowerCase().includes("sanitation") ||
    (templateId && templateId.includes("food-safety-and-sanitation"));
  const isBig6Pathogens =
    templateTitle.toLowerCase().includes("big 6") ||
    templateTitle.toLowerCase().includes("big-6") ||
    (templateId && templateId.includes("big-6-foodborne"));
  '''

dcl_code = dcl_code[:det_pos] + new_detection + dcl_code[det_pos:]

# Add returns inside getInitialTasks
ret_anchor = 'if (isBrcAudit) return BRC_AUDIT_TASKS;'
ret_pos = dcl_code.find(ret_anchor)
if ret_pos == -1:
    raise Exception("Could not find if (isBrcAudit) return BRC_AUDIT_TASKS; in DigitalChecklistTool.tsx")

new_returns = '''if (isFoodSanitation) return FOOD_SANITATION_TASKS;
    if (isBig6Pathogens) return BIG_6_PATHOGENS_TASKS;
    '''

dcl_code = dcl_code[:ret_pos] + new_returns + dcl_code[ret_pos:]

with open(dcl_path, 'w', encoding='utf-8') as f:
    f.write(dcl_code)
print("Updated DigitalChecklistTool.tsx with Batch 28 tasks and routing.")

# 3. Update core_metadata.json
meta_path = 'src/data/core_metadata.json'
with open(meta_path, 'r', encoding='utf-8') as f:
    core_meta = json.load(f)

core_meta["when-should-you-wash-your-hands"] = {
    "title": "Free When to Wash Hands Poster Guide | Saim Dev",
    "desc": "Master kitchen hand hygiene triggers under UK food safety laws. Free food service handwashing poster covering raw meat handling, bins, and coughs.",
    "howTo": [
        "Wash hands before commencing work, handling food, or putting on disposable gloves.",
        "Wash immediately after handling raw meats, poultry, unwashed eggs, or raw seafood.",
        "Wash after using the toilet, blowing nose, coughing, sneezing, or touching hair.",
        "Wash after handling waste bins, cleaning chemicals, dirty cutlery, or money.",
        "Scrub with antibacterial soap and warm water for 20 seconds; dry with paper towels."
    ]
}

core_meta["how-do-you-calibrate-a-thermometer"] = {
    "title": "Free How to Calibrate a Thermometer Guide | Saim Dev",
    "desc": "Calibrate kitchen probe thermometers using ice slurry and boiling water. Free step-by-step calibration guide with ±1.0°C FSA accuracy tolerances.",
    "howTo": [
        "Prepare crushed ice slurry with minimal cold water in a glass beaker; stir well.",
        "Immerse probe needle 5 cm deep; verify reading stabilizes at 0.0°C (±1.0°C range).",
        "Bring pot of water to a rolling boil; immerse probe tip without touching pan bottom.",
        "Verify boiling water reading stabilizes at 100.0°C (99.0°C to 101.0°C tolerance).",
        "Record calibration test on monthly log; service or replace probe if error exceeds ±1°C."
    ]
}

core_meta["kitchen-safety-poster"] = {
    "title": "Free Commercial Kitchen Safety Poster | Saim Dev",
    "desc": "Prevent slips, cuts, burns, and chemical accidents in professional kitchens. Free printable kitchen safety poster conforming to HSE catering rules.",
    "howTo": [
        "Display safety poster prominently in kitchen cooking lines and prep areas.",
        "Enforce slip-resistant footwear, apron tie safety, and knife-carrying protocols.",
        "Ensure deep fryer splash guards, hot oil PPE, and steam vent covers are used.",
        "Store cleaning chemicals in locked COSHH cupboards away from food prep areas.",
        "Keep kitchen fire blankets, Class F extinguishers, and emergency gas shut-offs clear."
    ]
}

core_meta["food-safety-and-sanitation"] = {
    "title": "Free Food Safety & Sanitation Poster Guide | Saim Dev",
    "desc": "Master commercial kitchen two-stage cleaning and BS EN 1276 sanitising. Free printable food safety sanitation poster with contact time rules.",
    "howTo": [
        "Stage 1: Clean surfaces with warm water and detergent to remove grease and food soils.",
        "Stage 2: Apply BS EN 1276 approved disinfectant or bactericidal sanitiser spray.",
        "Allow chemical sanitiser to remain wet on surfaces for full manufacturer contact time.",
        "Use colour-coded cloths and mops: Red for washrooms, Yellow for kitchen prep surfaces.",
        "Sign off daily cleaning schedule logs and verify sanitiser dispenser dilution rates."
    ]
}

core_meta["big-6-foodborne-illnesses"] = {
    "title": "Free Big 6 Foodborne Illnesses Poster | Saim Dev",
    "desc": "Identify and prevent the Big 6 pathogens: Norovirus, Salmonella, E. coli, and more. Free foodborne illnesses chart with 48-hour exclusion rules.",
    "howTo": [
        "Enforce 48-hour exclusion for staff experiencing vomiting or diarrhoea symptoms.",
        "Cook poultry and eggs to minimum 75°C core temperature to eliminate Salmonella.",
        "Cook minced beef burgers to 75°C to destroy Shiga toxin-producing E. coli (STEC).",
        "Sanitise customer restrooms every 2 hours to prevent Shigella and Norovirus spread.",
        "Immediately exclude and report food handlers exhibiting jaundice (Hepatitis A)."
    ]
}

with open(meta_path, 'w', encoding='utf-8') as f:
    json.dump(core_meta, f, indent=2, ensure_ascii=False)
print("Updated core_metadata.json for Batch 28 tools.")

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

batch28_deep_items = '''
  "when-should-you-wash-your-hands": {
    directAnswer:
      "Under UK Food Safety Regulation (EC) No 852/2004 and FSA guidelines, commercial food handlers must wash their hands frequently and thoroughly with warm running water and antibacterial soap (BS EN 1499). Mandatory triggers include: before starting food prep, immediately after handling raw meats, poultry, or eggs, after visiting the toilet, after touching waste bins, after coughing, sneezing, or blowing your nose, after touching your face or hair, between handling allergen and non-allergen foods, and before donning disposable gloves.",
    howTo: [
      "Wash before starting work: scrub hands thoroughly before entering food prep areas or handling clean crockery.",
      "Wash after raw protein contact: immediately scrub hands after touching raw meat, poultry, seafood, or unwashed produce.",
      "Wash after biological triggers: wash hands following toilet visits, coughing, sneezing, nose-blowing, or touching hair.",
      "Wash after environmental contact: wash after emptying waste bins, sweeping floors, handling cash, or using cleaning chemicals.",
      "Execute 20-second technique: wet hands under warm water, apply antibacterial soap, scrub palms, backs, fingers, and thumbs for 20 seconds, and dry with disposable paper towels."
    ],
    faqs: [
      {
        q: "What is the legal handwashing time recommended for food handlers?",
        a: "The UK Food Standards Agency and World Health Organization recommend scrubbing hands with antibacterial soap for at least 20 seconds, followed by complete drying using disposable single-use paper towels."
      },
      {
        q: "Can hand sanitiser gel replace handwashing with soap and water?",
        a: "No. Alcohol-based hand sanitisers cannot cut through grease, organic protein soils, or food residues and are ineffective against Norovirus. Hand sanitiser may only be used as an extra barrier after thorough soap and water handwashing."
      },
      {
        q: "Why are reusable fabric towels banned in commercial kitchens?",
        a: "Fabric tea towels quickly harbor moisture and cross-contaminate bacteria (like E. coli and Salmonella) between handlers. Commercial food hygiene regulations require touchless dispensers and disposable single-use paper towels."
      },
      {
        q: "Do food handlers have to wash hands before putting on gloves?",
        a: "Yes. Gloves are not sterile. Sweaty hands transfer bacteria onto the outside of gloves during donning, and punctures or tears can leak pathogens onto food. Hands must always be washed before donning clean gloves."
      },
      {
        q: "What washbasin facilities are legally mandatory in a UK food business?",
        a: "Under Regulation (EC) No 852/2004, kitchens must provide separate dedicated handwash basins equipped with warm running water (or mixer taps), antibacterial soap in dispensers, and disposable paper towels, separate from food sinks."
      }
    ],
    relatedTools: [
      "hand-washing-poster",
      "personal-hygiene",
      "basic-food-preparation-rules"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "how-do-you-calibrate-a-thermometer": {
    directAnswer:
      "Calibrating a food thermometer verifies that temperature probes provide accurate readings to guarantee microbiological food safety. Commercial kitchens calibrate probes using two standard scientific reference methods: the Ice-Point Slurry method (target 0.0°C, acceptable range -1.0°C to +1.0°C) and the Boiling-Water method (target 100.0°C, acceptable range 99.0°C to 101.0°C at sea level). Probes with error exceeding ±1.0°C must be recalibrated or replaced.",
    howTo: [
      "Prepare ice bath: fill a glass beaker with crushed ice and add cold water until ice is saturated; stir and let sit for 2 minutes.",
      "Test ice point: insert probe 5 cm into slurry without touching glass walls; wait for reading to stabilize at 0.0°C (±1.0°C tolerance).",
      "Prepare boiling water: bring a deep saucepan of clean water to a rapid rolling boil on the cookline range.",
      "Test boiling point: immerse probe tip into center of boiling water; confirm stabilized reading reads 100.0°C (±1.0°C tolerance).",
      "Document and adjust: record variance in your monthly calibration log; adjust manual hex calibration screw or replace unit if variance exceeds ±1°C."
    ],
    faqs: [
      {
        q: "How often should commercial kitchen food thermometers be calibrated?",
        a: "Under UK food hygiene due diligence guidelines, food thermometers should be calibrated at least once per month, and immediately after being dropped or exposed to extreme heat or cold shocks."
      },
      {
        q: "What is the acceptable tolerance for kitchen thermometers under EHO standards?",
        a: "Environmental Health Officers expect food thermometers to be accurate within ±1.0°C of true temperature for general catering, and within ±0.5°C for high-care BRCGS food manufacturing."
      },
      {
        q: "Why does water boil below 100°C at high altitudes?",
        a: "Atmospheric pressure decreases with altitude, lowering the boiling point of water by approximately 1.0°C per 300 metres of elevation. Kitchens above sea level must adjust boiling-point calibration targets accordingly."
      },
      {
        q: "How do you adjust a digital probe thermometer if the reading is inaccurate?",
        a: "Many digital probes have a 'CAL' button that resets the ice point to 0.0°C when held down in an ice bath. For manual dial thermometers, adjust the hex calibration nut beneath the dial using a small wrench."
      },
      {
        q: "Why is probe needle sanitisation critical during calibration?",
        a: "Immersing an unsanitised probe into test beakers can cross-contaminate testing equipment. Probes must be wiped with food-safe antibacterial probe wipes conforming to BS EN 1276 before and after calibration testing."
      }
    ],
    relatedTools: [
      "thermometer-calibration-log",
      "cooking-log-template",
      "food-temperature-chart"
    ],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling Temperature Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "food-safety-and-sanitation": {
    directAnswer:
      "Commercial food safety and sanitation ensures that kitchen surfaces, preparation equipment, utensils, and food contact zones are systematically cleaned and disinfected to prevent foodborne illness and allergen cross-contact. Aligned with Regulation (EC) No 852/2004, it enforces the UK Two-Stage Cleaning method (detergent clean followed by BS EN 1276 chemical disinfection), strict contact times, and four-colour cleaning equipment segregation.",
    howTo: [
      "Stage 1 Cleaning: scrape physical debris and wash surfaces with hot water and commercial detergent to dissolve grease and organic soils.",
      "Stage 2 Disinfection: spray chemical sanitiser or disinfectant certified to BS EN 1276 across the entire surface area.",
      "Observe contact time: allow sanitiser to remain wet on surfaces for the full manufacturer-specified contact time (typically 30 to 60 seconds).",
      "Wipe with disposable paper: wipe surfaces with clean, single-use blue paper roll; air drying is recommended for food equipment.",
      "Segregate cleaning tools: use Red cloths/mops for washrooms, Blue for customer areas, Yellow for kitchen prep surfaces, and Green for vegetable prep."
    ],
    faqs: [
      {
        q: "What is the difference between cleaning and sanitising?",
        a: "Cleaning removes physical dirt, grease, and food residues using detergent and water. Sanitising uses chemical agents or high thermal heat (82°C+) to kill 99.999% of bacteria, viruses, and pathogens to safe public health levels."
      },
      {
        q: "What is the British Standard BS EN 1276?",
        a: "BS EN 1276 is the official European standard for chemical bactericidal disinfectants used in food, industrial, domestic, and institutional areas. It proves that a disinfectant achieves a 5-log (99.999%) reduction of bacteria within 5 minutes at 20°C."
      },
      {
        q: "Why is the Two-Stage Cleaning method mandatory under UK food hygiene?",
        a: "Disinfectants cannot penetrate layers of grease and protein debris. Attempting to sanitise a dirty surface neutralises the chemical agent. Stage 1 lifts the soil, allowing Stage 2 disinfectant to contact and kill exposed pathogens."
      },
      {
        q: "Why are colour-coded mops and cloths required in commercial kitchens?",
        a: "Equipment colour-coding prevents dangerous cross-contamination—ensuring that cloths or mop buckets used in customer toilets (Red) are never accidentally used to wipe kitchen sandwich prep counters (Yellow)."
      },
      {
        q: "How frequently must high-touch kitchen surfaces be disinfected?",
        a: "High-touch points such as refrigerator door handles, knife handles, microwave touchpads, POS screens, and prep line surfaces should be disinfected every 2 hours during service, and after any change in food task."
      }
    ],
    relatedTools: [
      "commercial-kitchen-cleaning-checklist",
      "kitchen-safety-poster",
      "master-cleaning-schedule"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  },
  "big-6-foodborne-illnesses": {
    directAnswer:
      "The 'Big 6' foodborne illnesses refer to the six most highly infectious, easily transmissible foodborne pathogens recognized by food safety authorities (FSA and FDA): Norovirus, Non-typhoidal Salmonella, Salmonella Typhi, Shiga toxin-producing E. coli (STEC), Shigella spp., and Hepatitis A virus. Due to low infectious doses and severe health risks, food handlers diagnosed with or exhibiting symptoms of any Big 6 pathogen must be excluded from food operations for at least 48 hours symptom-free.",
    howTo: [
      "Enforce mandatory staff symptom reporting: require immediate reporting of vomiting, diarrhoea, jaundice, sore throat with fever, or infected skin lesions.",
      "Apply the 48-Hour Exclusion rule: exclude any food handler experiencing vomiting or diarrhoea for at least 48 hours after symptoms have completely cleared.",
      "Achieve thermal kill limits: cook poultry and meat to an internal core temperature of at least 75°C for 30 seconds (or 70°C for 2 minutes) to destroy Salmonella and E. coli.",
      "Prevent raw-to-ready cross-contamination: use dedicated colour-coded cutting boards (Red: raw meat, Yellow: cooked meat) and separate vacuum packaging machines.",
      "Disinfect vomit and bodily fluid spills immediately: seal off area, wear PPE, and disinfect using chlorine bleach at 1000 ppm concentration to destroy Norovirus."
    ],
    faqs: [
      {
        q: "What are the Big 6 foodborne pathogens?",
        a: "The Big 6 pathogens are: 1. Norovirus, 2. Non-typhoidal Salmonella, 3. Salmonella Typhi, 4. Shiga toxin-producing Escherichia coli (STEC/E. coli O157), 5. Shigella spp., and 6. Hepatitis A virus."
      },
      {
        q: "What is the statutory 48-hour exclusion rule in UK food premises?",
        a: "Under UK Food Standards Agency guidelines, any food worker who experiences diarrhoea or vomiting must stay off work until at least 48 hours after symptoms have completely ceased naturally, without anti-diarrhoeal medication."
      },
      {
        q: "Why is Norovirus the leading cause of foodborne gastrointestinal outbreaks?",
        a: "Norovirus has an extremely low infectious dose (as few as 18 viral particles cause infection), spreads through aerosols generated by vomiting, resists standard alcohol sanitiser gels, and survives on stainless steel surfaces for days."
      },
      {
        q: "What are the primary food sources of Shiga toxin-producing E. coli (STEC)?",
        a: "STEC (including E. coli O157) is predominantly found in undercooked minced beef (burgers), raw unpasteurised milk and cheeses, and raw salad produce contaminated by agricultural runoff."
      },
      {
        q: "What symptoms warrant immediate exclusion for Hepatitis A?",
        a: "Jaundice (yellowing of the eyes or skin), accompanied by fatigue, abdominal pain, dark urine, and fever. Food handlers with suspected Hepatitis A must be excluded immediately and cleared medically before returning."
      }
    ],
    relatedTools: [
      "food-safety-and-sanitation",
      "personal-hygiene",
      "when-should-you-wash-your-hands"
    ],
    relatedBlog: {
      title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  }
'''

new_deep_code = pre_text + batch28_deep_items + "\n};\n\n" + deep_code[fallback_pos:]

with open(deep_path, 'w', encoding='utf-8') as f:
    f.write(new_deep_code)
print("Updated tool_deep_content.ts with Batch 28 deep content.")

# 5. Update tracker
tracker_path = 'audit/tools-seo-tracker.json'
with open(tracker_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

batch28_data = {
    "when-should-you-wash-your-hands": {
        "priority_rank": 136,
        "target_keyword": "when should you wash your hands in food service",
        "top_5_competitors": [
            "https://www.food.gov.uk/safety-hygiene/handwashing",
            "https://www.highspeedtraining.co.uk/hub/when-should-food-handlers-wash-their-hands/",
            "https://www.virtual-college.co.uk/resources/when-to-wash-hands-food-hygiene",
            "https://www.cdc.gov/clean-hands/about/index.html",
            "https://safetyculture.com/checklists/handwashing-in-food-service/"
        ],
        "differentiators": [
            "12 operational triggers: raw prep, restroom, waste bins, coughing, phones, allergens, glove changes",
            "WHO and FSA 20-second technique breakdown with antibacterial soap (BS EN 1499)",
            "Interactive hand hygiene audit checklist with daily shift compliance logging",
            "Zero paywall, 100% free downloadable A4 kitchen noticeboard poster",
            "High-contrast visual cues for non-English kitchen workers"
        ]
    },
    "how-do-you-calibrate-a-thermometer": {
        "priority_rank": 137,
        "target_keyword": "how do you calibrate a food thermometer",
        "top_5_competitors": [
            "https://www.highspeedtraining.co.uk/hub/how-to-calibrate-a-probe-thermometer/",
            "https://www.fooddocs.com/post/how-to-calibrate-a-thermometer",
            "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/kitchen-thermometers",
            "https://safetyculture.com/checklists/how-to-calibrate-a-thermometer/",
            "https://www.thermoworks.com/ice-bath-calibration-guide/"
        ],
        "differentiators": [
            "Dual-method step-by-step instructions: Ice-Point Slurry (0.0°C) and Boiling-Water (100.0°C)",
            "Digital vs dial bimetallic adjustment mechanisms explained (hex calibration nut vs digital offset)",
            "Interactive digital calibration tool with auto-calculated error variance",
            "Clear EHO compliance threshold (±0.5°C preferred, ±1.0°C statutory cutoff)",
            "Clean printable A4 calibration protocol sheet for kitchen prep clipboards"
        ]
    },
    "kitchen-safety-poster": {
        "priority_rank": 138,
        "target_keyword": "commercial kitchen safety poster",
        "top_5_competitors": [
            "https://www.hse.gov.uk/catering/",
            "https://www.highspeedtraining.co.uk/hub/kitchen-safety-rules/",
            "https://safetyculture.com/checklists/commercial-kitchen-safety/",
            "https://www.virtual-college.co.uk/resources/kitchen-safety-guide",
            "https://www.fooddocs.com/post/kitchen-safety-poster"
        ],
        "differentiators": [
            "6-pillar safety framework: slips/trips, knife handling, burns, COSHH, manual handling, fire response",
            "Visual icon badges with bold typography optimized for distant wall visibility",
            "Interactive kitchen safety inspection checklist integrated directly on page",
            "100% free downloadable high-res vector A4/A3 wall poster",
            "Conforms to HSE Catering Information Sheet No 24 & Health and Safety at Work Act 1974"
        ]
    },
    "food-safety-and-sanitation": {
        "priority_rank": 139,
        "target_keyword": "food safety and sanitation poster",
        "top_5_competitors": [
            "https://www.food.gov.uk/business-guidance/cleaning-effectively-in-your-business",
            "https://www.highspeedtraining.co.uk/hub/cleaning-in-food-premises/",
            "https://www.virtual-college.co.uk/resources/food-hygiene-cleaning-procedure",
            "https://safetyculture.com/checklists/food-safety-and-sanitation/",
            "https://www.fooddocs.com/post/food-safety-and-sanitation"
        ],
        "differentiators": [
            "Definitive UK Two-Stage Cleaning process: Stage 1 clean, Stage 2 disinfect with BS EN 1276",
            "Colour-coded cleaning equipment standard (Red: washrooms; Blue: bar/dining; Yellow: prep; Green: produce)",
            "Dilution ratio calculation helper for concentrated sanitisers",
            "Interactive sanitation schedule tool with daily supervisor sign-offs",
            "Printable high-resolution kitchen wall chart ready for laminated display"
        ]
    },
    "big-6-foodborne-illnesses": {
        "priority_rank": 140,
        "target_keyword": "big 6 foodborne illnesses poster",
        "top_5_competitors": [
            "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/employee-health-and-personal-hygiene-handbook",
            "https://www.highspeedtraining.co.uk/hub/foodborne-pathogens-chart/",
            "https://safetyculture.com/checklists/big-6-foodborne-illnesses/",
            "https://www.statefoodsafety.com/Resources/Resources/the-big-6-foodborne-illnesses-poster",
            "https://www.fooddocs.com/post/big-6-foodborne-illnesses"
        ],
        "differentiators": [
            "Authoritative breakdown of all 6 high-infectivity pathogens (Norovirus, Salmonella, E. coli, etc.)",
            "Statutory staff exclusion rules: 48 hours symptom-free for vomiting/diarrhoea; jaundice notifications",
            "Critical control points: thermal lethality, chlorination, hand hygiene, and exclusion protocols",
            "Interactive foodborne disease diagnostic & quarantine checklist",
            "Free full-colour printable high-resolution educational A4 poster"
        ]
    }
}

for row in tracker:
    slug = row.get("slug")
    if slug in batch28_data:
        info = batch28_data[slug]
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
print(f"Batch 28 application complete! Total completed tools: {completed_count}/160")
