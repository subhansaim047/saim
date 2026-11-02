import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/core_metadata.json'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    meta = json.load(f)

batch7_meta = {
    "fish-temperature-chart": {
        "title": "Fish Cooking Temperature Chart | Free Guide | Saim Dev",
        "description": "Free UK commercial fish cooking temperature chart. Core probe temperatures, parasite freeze controls, species timings, and printable kitchen poster."
    },
    "food-temperature-chart": {
        "title": "UK Food Temperature Danger Zone | Free Chart | Saim Dev",
        "description": "Free UK master food temperature chart. Explore legal 8°C–63°C danger zone limits, fridge and freezer storage benchmarks, and printable A4 kitchen poster."
    },
    "pork-temperature-chart": {
        "title": "Pork Cooking Temperature Chart | Free Guide | Saim Dev",
        "description": "Free UK commercial pork cooking temperature chart. Joint roasting calculator, core probe standards, mince safety rules, and printable kitchen wall sheet."
    },
    "allergen-control-sop": {
        "title": "Commercial Allergen Control SOP | Free Guide | Saim Dev",
        "description": "Free commercial kitchen allergen control SOP checklist. Natasha's Law protocols, segregation procedures, purple tool rules, and printable kitchen audit."
    },
    "haccp-audit-checklist-template": {
        "title": "HACCP Internal Audit Checklist | Free Guide | Saim Dev",
        "description": "Free commercial kitchen HACCP internal audit checklist. CCP verification, PRPs, calibration reviews, corrective action logs, and printable audit sheets."
    }
}

for slug, data in batch7_meta.items():
    title = data["title"]
    desc = data["description"]
    
    assert len(title) <= 60, f"Title too long: {len(title)} for {slug}"
    assert "Free" in title, f"Title missing Free: {title}"
    assert title.endswith(" | Saim Dev"), f"Title does not end with ' | Saim Dev': {title}"
    assert 120 <= len(desc) <= 155, f"Desc length invalid: {len(desc)} for {slug}"
    
    meta[slug] = data
    print(f"Validated {slug}: title={len(title)} chars, desc={len(desc)} chars")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Saved core_metadata.json successfully")
