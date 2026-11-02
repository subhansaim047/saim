import json

path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json'
with open(path, 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch15_meta = {
    "restaurant-hood-cleaning": {
        "title": "Free Restaurant Hood Cleaning Checklist | Saim Dev",
        "desc": "Free restaurant hood cleaning checklist and TR19 frequency guide. Inspect grease filters, plenums, and ducts to maintain kitchen fire safety.",
        "howTo": [
            "Soak stainless steel baffle filters daily in hot degreasing solution and allow to air dry completely.",
            "Degrease the interior canopy hood and grease collection gutter using food-safe commercial degreaser.",
            "Inspect extract plenum and grease cup reservoirs weekly for excessive grease buildup.",
            "Schedule certified TR19 deep cleaning of ductwork and extract fan at insurance-mandated intervals."
        ]
    },
    "grease-trap-cleaning": {
        "title": "Free Grease Trap Cleaning Guide & SOP | Saim Dev",
        "desc": "Free grease trap cleaning guide and SOP checklist. Prevent commercial sewer blockages, control FOG buildup, and comply with UK Water Industry Act.",
        "howTo": [
            "Allow wastewater to cool before cleaning so grease and fats solidify on the surface.",
            "Remove trap lid carefully without damaging rubber gasket seals and ventilate the area.",
            "Skim the floating grease and oil cap into sealed waste containers for registered disposal.",
            "Scrape interior baffle walls and pump settled bottom solids before replacing lid securely."
        ]
    },
    "turkey-pasteurization-chart": {
        "title": "Free Turkey Pasteurization Chart & Guide | Saim Dev",
        "desc": "Free turkey pasteurization chart with time-temperature lethality tables. Ensure 7-log Salmonella reduction for safe roasting and combi cooking.",
        "howTo": [
            "Insert a calibrated probe thermometer into the thickest part of the turkey breast and thigh joint.",
            "Cook until core temperature reaches 75°C instantaneously or 70°C held continuously for 2 minutes.",
            "Reference low-temperature lethality tables for sous-vide holding times to guarantee pathogen kill.",
            "Tent roast turkey loosely with foil and allow core temperature to stabilize during resting."
        ]
    },
    "waste-management-plan": {
        "title": "Free Waste Management Plan & Checklist | Saim Dev",
        "desc": "Free commercial kitchen waste management plan and checklist. Segregate food waste, store Category 3 ABP safely, and meet UK Duty of Care rules.",
        "howTo": [
            "Segregate kitchen food prep waste from clean recycling and packaging at the preparation station.",
            "Store raw meat and poultry scraps in dedicated, locked Category 3 Animal By-Product containers.",
            "Collect spent cooking oil in bunded storage drums and obtain waste transfer notes from carriers.",
            "Wash and disinfect external refuse wheelie bins weekly to eliminate foul odors and pest attraction."
        ]
    },
    "haccp-flow-chart-template": {
        "title": "Free HACCP Flow Chart Template & SOP | Saim Dev",
        "desc": "Free interactive HACCP flow chart template for catering. Map process steps, identify hazards, set Critical Control Points, and pass EHO audits.",
        "howTo": [
            "Document every physical stage of food preparation from raw ingredient receipt through to service.",
            "Conduct hazard analysis at each step identifying biological, physical, chemical, and allergen risks.",
            "Apply the HACCP decision tree to determine which steps are Critical Control Points (CCPs).",
            "Establish validated critical limits, monitoring procedures, and corrective action protocols."
        ]
    }
}

for slug, data in batch15_meta.items():
    meta[slug] = data
    print(f"Updated metadata for {slug} (Title: {len(data['title'])} chars, Desc: {len(data['desc'])} chars)")

with open(path, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Finished updating core_metadata.json")
