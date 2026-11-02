import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/core_metadata.json'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch10_meta = {
    "product-specification-template": {
        "title": "Free Food Product Specification Template | Saim Dev",
        "desc": "Free commercial food product specification template. QUID ingredient declarations, Natasha's Law allergens, microbial criteria, and printable QA sheets.",
        "howTo": [
            "Input finished product name, internal SKU code, recipe category, and manufacturing CPU details.",
            "Formulate Quantitative Ingredient Declarations (QUID %) and flag statutory allergens under Natasha's Law.",
            "Establish validated microbiological process hygiene criteria (Regulation EC No 2073/2005) and shelf-life.",
            "Click Print / Save as PDF to output a comprehensive technical food specification for BRCGS and EHO compliance."
        ]
    },
    "pest-control-inspection-checklist": {
        "title": "Free Daily Pest Inspection Checklist | Saim Dev",
        "desc": "Free commercial kitchen pest inspection checklist. BPCA bait stations, electronic fly killers, building proofing checks, and printable monitoring logs.",
        "howTo": [
            "Inspect numbered exterior and interior tamper-resistant rodent bait boxes for undisturbed locks and secure placement.",
            "Examine Electric Fly Killers (EFKs): confirm UV tube illumination, empty catch trays, and clean insect grilles.",
            "Check physical building proofing: verify door bristles (<5mm gap), intact window mesh, and sealed pipework penetrations.",
            "Click Print / Save as PDF to output a completed pest monitoring log for your SFBB food safety management folder."
        ]
    },
    "pest-control-template": {
        "title": "Free Kitchen Pest Prevention Action Plan | Saim Dev",
        "desc": "Free commercial kitchen pest prevention action plan. P.E.R.D. exclusion standards, contractor service audits, proofing rotas, and printable action logs.",
        "howTo": [
            "Implement the P.E.R.D. pest management framework: Proofing, Exclusion, Restriction of food/water, and Destruction.",
            "Schedule quarterly service visits with a certified BPCA / CEPA pest control specialist contractor.",
            "Document prompt corrective actions and proofing repairs whenever monitoring traps detect pest ingress.",
            "Click Print / Save as PDF to archive a complete kitchen pest prevention procedure ready for EHO audits."
        ]
    },
    "bar-opening-checklist": {
        "title": "Free Bar Opening & Operations Checklist | Saim Dev",
        "desc": "Free commercial bar opening checklist. Cellar temperature monitoring, beer line sanitation, glasswasher hygiene checks, and printable operations rotas.",
        "howTo": [
            "Verify cellar cold chain: ensure cellar cooling system maintains beer and kegs between 10°C and 12°C.",
            "Inspect commercial glasswasher: verify wash temp (>=55°C), final rinse temp (>=65°C), and chemical levels.",
            "Sanitize ice machine chute, ensure ice scoop is stored in sanitized wall holster, and date-label cocktail garnishes.",
            "Click Print / Save as PDF to output an opening bar checklist for shift bartenders and cellar supervisors."
        ]
    },
    "restaurant-checklist": {
        "title": "Free Restaurant Operations Checklist | Saim Dev",
        "desc": "Free restaurant front-of-house operations checklist. Table sanitisation rotas, POS terminal disinfection, customer washroom checks, and printable logs.",
        "howTo": [
            "Disinfect dining tables, chairs, highchairs, and laminated menus using food-safe antibacterial wipes (BS EN 1276).",
            "Wipe point-of-sale touchscreens, chip-and-pin card readers, and payment terminals with sanitising wipes.",
            "Conduct pre-service washroom inspection: verify unperfumed soap, blue paper roll, clean sanitary bins, and signed log.",
            "Click Print / Save as PDF to output a comprehensive front-of-house operational checklist for restaurant supervisors."
        ]
    }
}

for slug, data in batch10_meta.items():
    title = data["title"]
    desc = data["desc"]
    
    assert len(title) <= 60, f"Title too long: {len(title)} for {slug}"
    assert "Free" in title, f"Title missing Free: {title}"
    assert title.endswith(" | Saim Dev"), f"Title does not end with ' | Saim Dev': {title}"
    assert 120 <= len(desc) <= 155, f"Desc length invalid: {len(desc)} for {slug}"
    
    meta[slug] = data
    print(f"Validated {slug}: title={len(title)} chars, desc={len(desc)} chars")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Saved core_metadata.json with Batch 10 metadata successfully")
