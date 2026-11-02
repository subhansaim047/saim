import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/core_metadata.json'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch7_meta = {
    "fish-temperature-chart": {
        "title": "Free Fish Temperature Chart | Saim Dev",
        "desc": "Free UK commercial fish cooking temperature chart. Core probe temperatures, parasite freeze controls, species timings, and printable kitchen poster.",
        "howTo": [
            "Select the seafood cut: oily salmon supreme, white fish fillets, seared tuna loin, or whole round fish.",
            "Verify raw fish storage history: fresh fish must be stored between 0°C and 2°C on melting flaked ice.",
            "Insert a sanitised needle probe horizontally into the thickest center part of the fillet away from bone.",
            "Verify core reaches 63°C for 2 minutes (or 70°C / Scottish 82°C) until flesh becomes completely opaque."
        ]
    },
    "food-temperature-chart": {
        "title": "Free Food Temperature Chart | Saim Dev",
        "desc": "Free UK master food temperature chart. Explore legal 8°C–63°C danger zone limits, fridge and freezer storage benchmarks, and printable A4 kitchen poster.",
        "howTo": [
            "Position calibrated dial or digital thermometers in all refrigeration units (1°C–5°C) and deep freezers (<= -18°C).",
            "Record twice-daily AM and PM ambient appliance temperatures in the kitchen SFBB compliance log.",
            "Monitor hot-holding buffet equipment and carvery passes every 2 hours to confirm core remains strictly >= 63°C.",
            "Probe every cooked high-risk batch with a disinfected digital probe to ensure core reaches >= 75°C (82°C Scotland)."
        ]
    },
    "pork-temperature-chart": {
        "title": "Free Pork Temperature Chart | Saim Dev",
        "desc": "Free UK commercial pork cooking temperature chart. Joint roasting calculator, core probe standards, mince safety rules, and printable kitchen wall sheet.",
        "howTo": [
            "Determine cut category: intact loin joint, bone-in chop, rolled belly porchetta, or minced pork sausage.",
            "Calculate oven duration factoring joint weight (e.g. 50 mins/kg for whole loins at 180°C Fan).",
            "Insert sanitised needle probe into the geometric center of the meat, avoiding bones and thick fat deposits.",
            "Ensure minced pork and rolled joints achieve 75°C for 30 seconds (82°C Scotland); allow chops to rest 8–10 minutes."
        ]
    },
    "allergen-control-sop": {
        "title": "Free Allergen Control SOP | Saim Dev",
        "desc": "Free commercial kitchen allergen control SOP checklist. Natasha's Law protocols, segregation procedures, purple tool rules, and printable kitchen audit.",
        "howTo": [
            "Inspect all incoming goods against approved ingredient matrices, checking for unnotified allergen formulation alerts.",
            "Store 14 statutory allergens in designated, airtight, sealed containers beneath allergen-free ingredients.",
            "Allocate dedicated purple colour-coded cutting boards, chef knives, and cookware for allergen-free orders.",
            "Require food handlers to wash hands with warm water and BS EN 1499 soap and put on a clean apron before cooking."
        ]
    },
    "haccp-audit-checklist-template": {
        "title": "Free HACCP Audit Checklist Template | Saim Dev",
        "desc": "Free commercial kitchen HACCP internal audit checklist. CCP verification, PRPs, calibration reviews, corrective action logs, and printable audit sheets.",
        "howTo": [
            "Review operational prerequisite programmes (PRPs) including pest control, waste contracts, and staff health logs.",
            "Examine CCP monitoring records: confirm chiller logs (<=5°C), cooking core logs (>=75°C), and hot holding logs are signed.",
            "Inspect probe thermometer calibration log, checking monthly ice water (-1°C to +1°C) and boiling water (99°C to 101°C) tests.",
            "Check non-conformance and corrective action reports to verify that root-cause investigations were documented."
        ]
    }
}

for slug, data in batch7_meta.items():
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

print("Saved core_metadata.json with title, desc, and howTo")
