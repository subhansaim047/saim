import json
import re

print("=== STARTING BATCH 29 COMPREHENSIVE UPDATE ===")

# -------------------------------------------------------------
# 1. UPDATE CORE METADATA
# -------------------------------------------------------------
with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

b29_meta = {
    "what-is-the-minimum-hot-holding-temperature-for-hot-dog": {
        "title": "Free Hot Dog Hot Holding Temp Guide | Saim Dev",
        "desc": "UK hot dog hot holding temperature guide. Maintain cooked sausages at 63°C or above under FSA rules with legal 2-hour single display exemptions.",
        "howTo": [
            "Verify cooked hot dogs reach 75°C core before transfer",
            "Hold hot dogs in dry warmers or water wells above 63.0°C",
            "Log core probe readings every 2 hours in digital register",
            "Apply the 2-hour service exemption once only before disposal"
        ]
    },
    "fridge-organization-chart": {
        "title": "Free Fridge Organisation Chart UK | Saim Dev",
        "desc": "Free commercial fridge organisation chart for UK kitchens. Prevent cross-contamination with 5-tier raw and ready-to-eat shelf hierarchy rules.",
        "howTo": [
            "Store ready-to-eat food and salads on top shelves",
            "Position whole raw meats and fish on intermediate tiers",
            "Place raw ground burgers and minced meat on lower shelf",
            "Isolate raw poultry and chicken strictly on the bottom shelf",
            "Maintain chiller air circulation and core temp at or below 5°C"
        ]
    },
    "how-to-use-a-meat-thermometer": {
        "title": "Free Meat Thermometer Guide & SOP | Saim Dev",
        "desc": "How to use a digital meat thermometer in commercial kitchens. Step-by-step probe insertion, sanitising wipes, and FSA core cooking targets.",
        "howTo": [
            "Sanitise probe stem with a BS EN 1276 alcohol wipe",
            "Insert probe tip into thickest part avoiding bone or gristle",
            "Wait 5 to 10 seconds for the digital display to stabilise",
            "Confirm FSA minimum core lethality of 75°C for 30 seconds",
            "Clean and wipe probe before returning to storage sheath"
        ]
    },
    "how-to-use-a-food-thermometer": {
        "title": "Free Food Thermometer SOP Guide | Saim Dev",
        "desc": "Master commercial kitchen food thermometers. Step-by-step insertion depths, probe wipe protocols, calibration SOPs, and FSA temperature checks.",
        "howTo": [
            "Inspect probe casing and batteries before service starts",
            "Disinfect sensor needle using a food-grade alcohol wipe",
            "Submerge probe at least 50mm into core centre of food",
            "Record stabilized temperature in the digital kitchen log",
            "Perform monthly ice bath (0°C) and boiling (100°C) calibration"
        ]
    },
    "food-sanitation-rules": {
        "title": "Free Food Sanitation Rules Poster | Saim Dev",
        "desc": "UK commercial food sanitation rules poster. Follow 2-stage cleaning, BS EN 1276 disinfection, hand hygiene, and EHO cross-contamination controls.",
        "howTo": [
            "Remove loose physical debris and wash with hot detergent",
            "Rinse clean water to remove chemical surfactant residues",
            "Apply BS EN 1276 disinfectant for mandatory contact time",
            "Allow surfaces to air dry or wipe with single-use paper",
            "Document daily cleaning schedule sign-offs for EHO audits"
        ]
    }
}

for slug, data in b29_meta.items():
    assert len(data['title']) <= 60, f"Title too long: {slug} ({len(data['title'])})"
    assert "Free" in data['title'], f"Missing Free: {slug}"
    assert data['title'].endswith(" | Saim Dev"), f"Missing suffix: {slug}"
    assert 120 <= len(data['desc']) <= 155, f"Desc length error: {slug} ({len(data['desc'])})"
    meta[slug] = data

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)
print("1. Updated core_metadata.json")

# -------------------------------------------------------------
# 2. UPDATE TemplateDetailPage.tsx ROUTING
# -------------------------------------------------------------
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    tdp = f.read()

# Add fridge-org to isWalkInStorageTool if not present
if 'template.slug.includes("fridge-org")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("fridge-layout") ||',
        'template.slug.includes("fridge-layout") ||\n    template.slug.includes("fridge-org") ||'
    )

# Add thermometer to isChecklistOrLog if not present
if 'template.slug.includes("thermometer")' not in tdp:
    tdp = tdp.replace(
        'template.slug.includes("audit") ||',
        'template.slug.includes("audit") ||\n      template.slug.includes("thermometer") ||'
    )

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    tdp_clean = f.write(tdp)
print("2. Updated TemplateDetailPage.tsx")

# -------------------------------------------------------------
# 3. UPDATE DigitalChecklistTool.tsx WITH THERMOMETER SOP TASKS
# -------------------------------------------------------------
with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    dcl = f.read()

thermometer_tasks_code = """const THERMOMETER_SOP_TASKS: CheckItem[] = [
  {
    id: "therm-1",
    category: "Pre-Use Inspection",
    task: "Inspect digital thermometer casing, display, and battery level; verify casing integrity and clean probe tip.",
    status: "pass",
    criticalLimit: "Intact waterproof casing; clear digital read-out; no battery low indicator",
    actionNotes: ""
  },
  {
    id: "therm-2",
    category: "BS EN 1276 Sanitisation",
    task: "Disinfect metal probe sensor stem using an approved BS EN 1276 single-use food-grade alcohol probe wipe before every temperature check.",
    status: "pass",
    criticalLimit: "BS EN 1276 wipe contact time 30s; probe air-dried before food insertion",
    actionNotes: ""
  },
  {
    id: "therm-3",
    category: "Insertion Depth & Placement",
    task: "Insert probe needle into geometric centre/thickest portion of food item, avoiding direct contact with bones, gristle, skewers, or metal pans.",
    status: "pass",
    criticalLimit: "Minimum insertion depth 50mm (or mid-point of thinnest food profile)",
    actionNotes: ""
  },
  {
    id: "therm-4",
    category: "Reading Stabilisation",
    task: "Hold probe stationary for 5 to 10 seconds until the digital temperature reading holds steady without fluctuating.",
    status: "pass",
    criticalLimit: "Stable temperature display for at least 5 consecutive seconds",
    actionNotes: ""
  },
  {
    id: "therm-5",
    category: "Statutory Cooking Verification",
    task: "Verify food item meets UK FSA core lethality standard (>=75.0°C for 30 seconds or Scottish standard >=82.0°C).",
    status: "pass",
    criticalLimit: "Core temp >=75.0°C (30s) / 70.0°C (2m) / Scotland >=82.0°C",
    actionNotes: ""
  },
  {
    id: "therm-6",
    category: "Post-Use Decontamination",
    task: "Immediately clean and disinfect probe stem with a fresh BS EN 1276 sanitising wipe before stowing probe in protective sheath.",
    status: "pass",
    criticalLimit: "Clean and sanitised probe stored in clean protective casing",
    actionNotes: ""
  },
  {
    id: "therm-7",
    category: "Monthly Dual Calibration",
    task: "Perform dual ice bath (0.0°C ±1°C) and boiling water (100.0°C ±1°C) accuracy verification; log in calibration register.",
    status: "pass",
    criticalLimit: "Probe accuracy within ±0.5°C to ±1.0°C; recalibrate or replace if exceeded",
    actionNotes: ""
  }
];

"""

if 'THERMOMETER_SOP_TASKS' not in dcl:
    # Insert before BIG_6_PATHOGENS_TASKS
    dcl = dcl.replace(
        'const BIG_6_PATHOGENS_TASKS: CheckItem[] = [',
        thermometer_tasks_code + 'const BIG_6_PATHOGENS_TASKS: CheckItem[] = ['
    )

    # Add boolean check
    bool_code = """  const isThermometerSop =
    templateTitle.toLowerCase().includes("how to use") && templateTitle.toLowerCase().includes("thermometer") ||
    (templateId && templateId.includes("how-to-use") && templateId.includes("thermometer"));
"""
    dcl = dcl.replace(
        '  const isFoodSanitation =',
        bool_code + '  const isFoodSanitation ='
    )

    # Add tasks return in useState
    dcl = dcl.replace(
        '    if (isFoodSanitation) return FOOD_SANITATION_TASKS;',
        '    if (isThermometerSop) return THERMOMETER_SOP_TASKS;\n    if (isFoodSanitation) return FOOD_SANITATION_TASKS;'
    )

    with open('src/components/tools/DigitalChecklistTool.tsx', 'w', encoding='utf-8') as f:
        f.write(dcl)
    print("3. Updated DigitalChecklistTool.tsx")
else:
    print("3. DigitalChecklistTool.tsx already contains THERMOMETER_SOP_TASKS")

# -------------------------------------------------------------
# 4. INJECT DEEP CONTENT INTO tool_deep_content.ts
# -------------------------------------------------------------
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep_text = f.read()

fallback_pos = deep_text.find('export const FALLBACK_DEEP_CONTENT')
assert fallback_pos != -1, "Could not find FALLBACK_DEEP_CONTENT"
insert_pos = deep_text.rfind('};', 0, fallback_pos)
assert insert_pos != -1, "Could not find closing brace before FALLBACK_DEEP_CONTENT"

b29_deep_content = """  "what-is-the-minimum-hot-holding-temperature-for-hot-dog": {
    guideTitle: "Commercial Hot Dog Hot Holding Temperature Standards & FSA Compliance",
    overview: "Cooked hot dogs, frankfurters, and bratwurst held in commercial food warmers, roller grills, and bain-maries must be maintained at safe hot-holding temperatures to prevent the germination of spore-forming foodborne pathogens including Clostridium perfringens and Bacillus cereus. Under the Food Safety and Hygiene (England) Regulations 2013 and equivalent statutory regulations across Scotland, Wales, and Northern Ireland, food held hot for service must be kept continuously at or above 63.0°C (145.4°F). This guide covers operating standards, core temperature probing, the UK 2-hour service display exemption, and due diligence digital logging protocols.",
    regulations: [
      "Food Safety and Hygiene (England) Regulations 2013 (Schedule 4 - Temperature Control)",
      "Food Hygiene (Scotland) Regulations 2006 (Schedule 4 - Temperature Control Requirements)",
      "UK Food Standards Agency (FSA) Safer Food, Better Business (SFBB) - Hot Holding Safe Method",
      "Regulation (EC) No 852/2004 on the Hygiene of Foodstuffs (Article 5 HACCP Due Diligence)"
    ],
    sections: [
      {
        heading: "Statutory 63.0°C Hot Holding Threshold for Sausages & Hot Dogs",
        content: "Under UK food safety law, cooked meat products held hot for customer service must be maintained at a minimum internal core temperature of 63.0°C (145.4°F). When loading pre-cooked hot dogs or grilling raw sausages, the product must first reach a verified cooking lethality core temperature (75.0°C for 30 seconds or Scotland 82.0°C) before transfer to holding equipment. Hot holding equipment—such as wet-well steam tables, dry heated wells, or heated roller grills—is engineered strictly to maintain holding temperatures, never to reheat cold foods."
      },
      {
        heading: "The UK 2-Hour Display Exemption Rule Explained",
        content: "Under Schedule 4 of the Food Safety and Hygiene Regulations, commercial food businesses are permitted to keep hot food below 63.0°C for a single display period of up to 2 hours (e.g. on open buffet lines or mobile event concessions). Once the 2-hour display window has elapsed, any remaining hot dogs must either be rapidly brought back to 63.0°C or above, chilled to 8.0°C or below within 90 minutes, or safely discarded. Food that has been displayed under this exemption cannot be reheated or returned to hot holding a second time."
      },
      {
        heading: "Digital Temperature Probing Protocol for Hot Dogs",
        content: "Chefs and concession operators must verify hot dog holding temperatures every 2 hours using a calibrated digital probe thermometer. Disinfect the probe needle with an approved BS EN 1276 alcohol wipe. Insert the tip at least 50mm longitudinally into the geometric core of a representative hot dog. Allow 5 to 10 seconds for reading stabilisation. Confirm that the core reaches at least 63.0°C before signing the digital temperature register."
      }
    ],
    faqs: [
      {
        q: "What is the statutory minimum hot-holding temperature for hot dogs in the UK?",
        a: "Under Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013, cooked hot dogs must be held hot at or above 63.0°C (145.4°F) continuously until service."
      },
      {
        q: "Can hot dogs be held in a roller grill or water well below 63°C?",
        a: "Only under the statutory 2-hour display exemption. Hot dogs can be held below 63.0°C for a single period of up to 2 hours. If unsold after 2 hours, they must be rapidly chilled, brought above 63.0°C, or discarded."
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
    ]
  },
  "fridge-organization-chart": {
    guideTitle: "Commercial Fridge Organisation Hierarchy & Raw Food Segregation Standard",
    overview: "Improper refrigerator organisation is one of the leading root causes of biological cross-contamination and food poisoning incidents cited during Environmental Health Officer (EHO) hygiene inspections. Commercial kitchens must implement a strict 5-tier vertical hierarchy based on required minimum cooking temperatures. By placing foods requiring the highest cooking lethality at the bottom and ready-to-eat foods at the very top, gravity-driven drips and airborne cross-contact are eliminated. This guide details commercial shelving layout, day-dot rotation, and FSA temperature controls.",
    regulations: [
      "Regulation (EC) No 852/2004 on the Hygiene of Foodstuffs (Annex II - Food Storage & Contamination)",
      "Food Safety and Hygiene (England) Regulations 2013 (Schedule 4 - Temperature Control)",
      "UK Food Standards Agency (FSA) Guidance on Controlling Cross-Contamination",
      "Food Safety Act 1990 (Section 21 Statutory Defence of Due Diligence)"
    ],
    sections: [
      {
        heading: "The 5-Tier Commercial Refrigerator Shelf Hierarchy",
        content: "Every commercial walk-in cooler and reach-in refrigerator must organize food products according to required minimum internal cooking temperatures: Shelf 1 (Top) is reserved strictly for ready-to-eat (RTE) foods, cooked meats, prepared deli items, salads, dairy, and cakes. Shelf 2 holds whole raw fish, seafood, and pasteurised shell eggs. Shelf 3 accommodates whole cuts of raw beef, lamb, pork, and veal joints. Shelf 4 stores raw minced and ground meats, sausages, and burgers (75°C core required). Shelf 5 (Bottom) is strictly reserved for raw poultry, chicken breasts, turkey, duck, and stuffed meats with the highest Campylobacter and Salmonella hazard."
      },
      {
        heading: "Airflow Circulation & Storage Density Rules",
        content: "Commercial refrigeration units operate by circulating cold convection air. Stacking food pans flush against rear evaporator fan guards or lining wire shelves with cardboard or solid foil blocks vital airflow, creating dangerous warm pockets where temperatures can exceed 10.0°C. Food pans must be spaced at least 25mm apart and wire shelves kept unlined to maintain uniform temperature distribution at or below 5.0°C."
      },
      {
        heading: "Day-Dot Labelling & 48-Hour Open Shelf-Life Protocols",
        content: "All opened food pans, prepared sauces, and decanted ingredients must be sealed with tight-fitting food-grade lids and labelled with a day-dot or date sticker. Labels must record: 1. Food product name; 2. Prep/open date and time; 3. Use-by date (typically maximum 48 to 72 hours for high-risk opened foods); and 4. Chef initials. Any unlabelled or expired items must be discarded immediately during daily opening audits."
      }
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
    ]
  },
  "how-to-use-a-meat-thermometer": {
    guideTitle: "Commercial Meat Thermometer Operating Protocol & Core Lethality Verification",
    overview: "Using a digital probe meat thermometer is a mandatory Critical Control Point (CCP) verification step under HACCP Article 5 of Regulation (EC) No 852/2004. Visual checks—such as observing clear meat juices or cut surfaces—are subjective and legally insufficient for an Environmental Health Officer (EHO) audit. Commercial chefs must master probe insertion, contact disinfection, display stabilisation, and UK statutory lethality targets to prevent foodborne illness outbreaks.",
    regulations: [
      "Regulation (EC) No 852/2004 on the Hygiene of Foodstuffs (Article 5 HACCP Due Diligence)",
      "UK Food Standards Agency (FSA) Technical Guidance on Cooking Temperatures",
      "Food Hygiene (Scotland) Regulations 2006 (Schedule 4 - Reheating 82.0°C Requirement)",
      "British Standard BS EN 1276 / BS EN 13697 Chemical Disinfectant Standards"
    ],
    sections: [
      {
        heading: "Pre-Use Probe Sanitisation & Inspection",
        content: "Before taking any food temperature, inspect the digital thermometer casing for physical damage, cracked probes, or low-battery alerts. Disinfect the entire stainless steel sensor needle using a single-use alcohol wipe certified to BS EN 1276 (minimum 70% isopropyl alcohol). Allow the probe stem to air dry completely for at least 30 seconds so chemical disinfectant does not taint food flavour or create false readings."
      },
      {
        heading: "Accurate Insertion Depth & Sensor Positioning",
        content: "Insert the probe needle into the geometric centre or thickest portion of the meat cut. The probe tip must never touch bone, gristle, roasting spits, or metal baking pans, as conductive bone and metal transmit heat rapidly and produce false elevated readings while meat remains biologically undercooked. For thin cuts (such as burgers or steaks), insert the needle horizontally through the side into the core."
      },
      {
        heading: "Display Stabilisation & UK FSA Core Lethality Targets",
        content: "Hold the probe stationary in the food core for 5 to 10 seconds until the digital readout stabilizes. Under UK FSA guidance, the core must reach at least 75.0°C for 30 seconds or an equivalent verified time-temperature lethality (such as 70.0°C for 2 minutes). In Scotland, all reheated food must reach a minimum of 82.0°C. Record the exact temperature, batch, and time directly into your kitchen digital register."
      }
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
    ]
  },
  "how-to-use-a-food-thermometer": {
    guideTitle: "Food Probe Thermometer Standard Operating Procedure & Kitchen Calibration",
    overview: "Food probe thermometers are the primary technical monitoring instrument used in commercial kitchens to verify HACCP Critical Control Points (CCPs) across receiving delivery intake, chilled and frozen storage, core cooking, hot holding, and rapid cooling. Operating a commercial food thermometer correctly requires understanding probe immersion depth, stabilization duration, probe wipe sanitisation, and routine two-point calibration under Regulation (EC) No 852/2004.",
    regulations: [
      "Regulation (EC) No 852/2004 on the Hygiene of Foodstuffs (Article 5 HACCP)",
      "Food Safety and Hygiene (England) Regulations 2013 (Schedule 4 - Temperature Control)",
      "UK Food Standards Agency (FSA) Safer Food, Better Business (SFBB) - Chilling & Cooking",
      "BS EN 13485:2001 Thermometers for Measuring Temperatures in Food Transport & Storage"
    ],
    sections: [
      {
        heading: "Proper Probe Immersion Depth & Sensor Types",
        content: "Most digital catering probe thermometers feature a thermistor or thermocouple sensor situated in the final 5mm to 10mm of the stainless steel stem. To achieve accurate thermal equilibrium, the stem must be submerged at least 50mm (2 inches) into liquid foods (soups, stews, gravies) or inserted into the geometric centre of solid foods. For vacuum-sealed delivery packs, probe between two tightly sandwiched packets without puncturing the packaging seal."
      },
      {
        heading: "Cross-Contamination Prevention & BS EN 1276 Wipes",
        content: "A thermometer probe that tests raw chicken at 65.0°C and is then inserted into a cooked beef roast transfers millions of viable Campylobacter and Salmonella cells. Thermometer probes must be disinfected with a single-use BS EN 1276 alcohol probe wipe before and after every single temperature measurement. Allow 30 seconds contact time and air drying before introducing the probe into food."
      },
      {
        heading: "Dual Ice-Bath & Boiling Calibration Procedure",
        content: "Under UK due diligence defence (Section 21, Food Safety Act 1990), kitchen thermometers must be verified monthly. 1. Ice-Point Check: Fill a beaker with crushed ice and minimal cold water, stir, insert probe; reading must be 0.0°C ±1.0°C. 2. Boiling-Point Check: Insert probe into rolling boiling water; reading must be 100.0°C ±1.0°C. Record both values in the kitchen calibration log."
      }
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
    ]
  },
  "food-sanitation-rules": {
    guideTitle: "Commercial Kitchen Food Sanitation Rules & Hygiene Standard Operating Procedure",
    overview: "Food sanitation is the fundamental prerequisite program (PRP) underpinning every effective HACCP food safety management system. Under the UK Food Safety Act 1990 and Regulation (EC) No 852/2004 Annex II, commercial food business operators (FBOs) are legally obligated to maintain clean, sanitised, and pest-free premises. This standard operating procedure outlines the two-stage cleaning protocol, BS EN 1276 disinfectant contact times, colour-coded cleaning zones, and daily hygiene audit sign-offs.",
    regulations: [
      "Regulation (EC) No 852/2004 Annex II (General Hygiene Requirements for Food Premises)",
      "UK Food Safety Act 1990 (Section 21 Due Diligence Legal Requirements)",
      "Food Safety and Hygiene (England) Regulations 2013",
      "Control of Substances Hazardous to Health (COSHH) Regulations 2002"
    ],
    sections: [
      {
        heading: "The Mandatory Two-Stage Cleaning Protocol",
        content: "Single-step wipe-downs with soapy cloths do not eliminate foodborne pathogens and will result in EHO hygiene rating penalties. Commercial kitchens must implement two-stage cleaning: Stage 1 (Detergent Wash): Remove physical food debris, grease, and dirt using warm water and food-grade detergent, followed by a clean water rinse. Stage 2 (Disinfection): Apply a chemical sanitiser certified to BS EN 1276 or BS EN 13697, observing the full manufacturer contact time (typically 30 to 60 seconds) to destroy 99.999% of bacteria."
      },
      {
        heading: "Colour-Coded Cleaning Equipment Standard",
        content: "To prevent transferring pathogenic bacteria across kitchen zones, all cleaning tools (cloths, mops, buckets, and scrubbers) must follow standard UK colour coding: Red is restricted exclusively to washrooms, toilets, and sanitary areas. Yellow is designated for commercial kitchen food preparation areas and workbenches. Blue is reserved for general customer dining rooms, bar floors, and front-of-house surfaces. Green is assigned to bar dispense and fruit prep areas."
      },
      {
        heading: "Chemical Safety & COSHH Storage Compliance",
        content: "Under the COSHH Regulations 2002, commercial cleaning chemicals must be stored in a dedicated, locked, ventilated cabinet situated strictly away from food storage and preparation areas. Chemicals must remain in original labelled containers with Safety Data Sheets (SDS) readily accessible to staff. Kitchen staff must wear appropriate PPE (nitrile gloves, aprons, eye protection) when diluting concentrates."
      }
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
    ]
  },
"""

# Check for existing slugs in deep_text
for s in b29_meta.keys():
    if f'"{s}":' in deep_text or f"'{s}':" in deep_text:
        print(f"Warning: {s} already in tool_deep_content.ts!")

new_deep_text = deep_text[:insert_pos] + b29_deep_content + deep_text[insert_pos:]
with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
    f.write(new_deep_text)
print("4. Injected deep content into tool_deep_content.ts")

# -------------------------------------------------------------
# 5. UPDATE TRACKER JSON & CSV
# -------------------------------------------------------------
with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

updated_count = 0
for t in tracker:
    if t.get('slug') in b29_meta:
        t['status'] = 'COMPLETED'
        t['title'] = b29_meta[t['slug']]['title']
        t['metaDescription'] = b29_meta[t['slug']]['desc']
        updated_count += 1
        print(f"Marked {t['slug']} as COMPLETED in tracker")

with open('audit/tools-seo-tracker.json', 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=2, ensure_ascii=False)

# Update CSV
import csv
with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker_data = json.load(f)

if tracker_data:
    keys = list(tracker_data[0].keys())
    with open('audit/tools-seo-tracker.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(tracker_data)

print(f"5. Updated tracker files (marked {updated_count} tools COMPLETED)")
print("=== BATCH 29 COMPLETED SUCCESSFULLY ===")
