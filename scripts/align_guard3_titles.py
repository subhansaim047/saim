import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

# Format each title to satisfy:
# 1. contains "Free"
# 2. ends with " | Saim Dev"
# 3. length <= 60
# 4. unique

titles_map = {
    "allergy-matrix": "Free Allergen Matrix Template UK | Saim Dev",
    "food-allergen-chart": "Free Allergen Chart for Takeaways | Saim Dev",
    "food-cost-calculator": "Free Food Cost Calculator UK | Saim Dev",
    "recipe-calculator": "Free Recipe Scaler Calculator UK | Saim Dev",
    "haccp-plan-builder": "Free Takeaway HACCP Plan Template | Saim Dev",
    "food-safety-quiz": "Free Food Safety Level 2 Practice Quiz | Saim Dev",
    "freezer-temperature-chart": "Free Freezer Temperature Chart UK | Saim Dev",
    "food-cooling-poster": "Free Kitchen Food Cooling Poster UK | Saim Dev",
    "basic-food-preparation-rules": "Free Basic Food Prep Rules Poster | Saim Dev",
    "walk-in-cooler-food-storage-chart": "Free Walk-In Cooler Storage Chart | Saim Dev",
    "fridge-temperature-record-sheet-pdf": "Free Fridge Temperature Log Sheet | Saim Dev",
    "cleaning-schedule": "Free Takeaway Cleaning Schedule | Saim Dev",
    "restaurant-cleaning-checklist": "Free Restaurant Cleaning Checklist | Saim Dev",
    "opening-and-closing-checklist-template": "Free SFBB Opening & Closing Checks | Saim Dev",
    "kitchen-prep-list-template": "Free Kitchen Daily Prep List Template | Saim Dev",
    "pest-control-checklist": "Free Kitchen Pest Control Checklist | Saim Dev",
    "food-traceability": "Free Food Traceability Log Template | Saim Dev",
    "food-recall": "Free Food Recall Procedure Checklist | Saim Dev",
    "hand-washing-poster": "Free Commercial Handwashing Poster | Saim Dev",
    "kitchen-safety-poster": "Free Commercial Kitchen Safety Poster | Saim Dev",
    "reheating-food-temperature-guide": "Free Reheating Food Temperature Guide | Saim Dev",
    "five-food-safety-rules": "Free 5 Key Food Safety Rules Poster | Saim Dev",
    "chopping-board-colour-chart": "Free Chopping Board Colour Chart | Saim Dev",
    "hot-holding-food-temperature-log": "Free Hot Holding Temperature Log | Saim Dev",
    "eho-checklist": "Free EHO Inspection Checklist UK | Saim Dev",
    "delivery-log": "Free Goods In Temperature Log UK | Saim Dev",
    "cooking-log-template": "Free Cooking Temperature Log Sheet | Saim Dev"
}

for slug, new_title in titles_map.items():
    if slug in meta:
        meta[slug]["title"] = new_title

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Updated core_metadata.json titles to satisfy Guard 3.")
