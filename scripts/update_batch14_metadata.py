# scripts/update_batch14_metadata.py
import json

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

batch14_meta = {
  "hot-holding-temperature": {
    "title": "Free Hot Holding Temperature Chart | Saim Dev",
    "desc": "Free commercial hot holding temperature chart for UK catering. Master statutory 63°C temperature limits, 2-hour buffet rules, and bain-marie audits.",
    "howTo": [
      "Preheat bain-maries, soup kettles, and hot cupboards before loading hot food.",
      "Verify core food temperature is at least 63°C before transfer into holding units.",
      "Probe center of food pans every 2 hours and record readings in daily diary.",
      "Stir liquids frequently to distribute heat and prevent cold surface pockets.",
      "Safely discard any hot holding food that falls below 63°C for more than 2 hours."
    ]
  },
  "what-is-the-minimum-hot-holding-temperature-for-fried-chicken": {
    "title": "Free Fried Chicken Hot Holding Temp Guide | Saim Dev",
    "desc": "Free UK guide on hot holding temperature for fried chicken. Learn statutory 63°C limits, heated display cabinets, probe monitoring, and food safety rules.",
    "howTo": [
      "Cook fried chicken until internal bone temperature reaches 75°C (82°C in Scotland).",
      "Transfer immediately to a preheated humidified or pass-through warmer held at ≥63°C.",
      "Probe thickest breast and thigh pieces hourly using a sanitized needle thermometer.",
      "Never stack pieces so densely that airflow and internal holding heat are blocked.",
      "Enforce maximum holding duration (typically 90 minutes) to preserve safety and crispness."
    ]
  },
  "cleaning-a-meat-slicer-poster": {
    "title": "Free Cleaning a Meat Slicer Poster | Saim Dev",
    "desc": "Free cleaning a meat slicer poster for commercial kitchens. Master electrical lockout, cut-resistant glove safety, BS EN 1276 sanitising, and reassembly.",
    "howTo": [
      "Unplug slicer power cord from wall outlet and turn thickness index past zero lock.",
      "Don EN 388 Level 5 cut-resistant safety mesh gloves before touching the blade.",
      "Remove product carriage chute, center blade deflector, and safety ring guard.",
      "Scrub blade with warm detergent solution (45°C–55°C) wiping from center outward.",
      "Apply BS EN 1276 sanitiser, observe 30-second contact time, air-dry, and lubricate."
    ]
  },
  "allergen-poster": {
    "title": "Free 14 Food Allergens Kitchen Poster | Saim Dev",
    "desc": "Free 14 food allergens kitchen poster for UK restaurants. Comply with Natasha's Law, prevent cross-contact, and display clear customer allergen warnings.",
    "howTo": [
      "Display the 14 statutory allergens poster visibly in kitchen prep and pass areas.",
      "Audit every menu recipe against supplier ingredient packaging and technical sheets.",
      "Use dedicated purple-handled smallwares and cutting boards for allergen-free orders.",
      "Sanitise prep stations between batches using disposable blue roll and BS EN 1276 spray.",
      "Ensure front-of-house staff ask customers about dietary requirements before ordering."
    ]
  },
  "proper-method-for-cleaning-dirty-utensils": {
    "title": "Free Cleaning & Sanitizing Utensils Guide | Saim Dev",
    "desc": "Free commercial guide on cleaning and sanitising dirty utensils. Master 3-sink washing protocols, BS EN 1276 disinfection, and air-drying standards.",
    "howTo": [
      "Pre-scrape and flush gross food residue from utensils into designated waste bins.",
      "Wash in Sink 1 with warm water (45°C–55°C) and commercial degreasing detergent.",
      "Rinse in Sink 2 with clean running potable water to remove chemical detergent suds.",
      "Sanitise in Sink 3 using BS EN 1276 chemical disinfectant (or thermal rinse ≥82°C).",
      "Invert utensils on clean stainless wire racks to air dry completely before storage."
    ]
  }
}

for slug, meta in batch14_meta.items():
    data[slug] = meta
    print(f"Updated metadata for: {slug}")

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Saved src/data/core_metadata.json successfully")
