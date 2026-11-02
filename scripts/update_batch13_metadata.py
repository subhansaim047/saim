# scripts/update_batch13_metadata.py
import json

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

batch13_meta = {
  "recipe-card-generator": {
    "title": "Free Recipe Card Generator & Batch Scaler | Saim Dev",
    "desc": "Free commercial recipe card generator. Scale ingredient quantities, calculate portion food costs, manage allergen tags, and export printable recipe specs.",
    "howTo": [
      "Input base recipe ingredient weights, unit costs, and initial portion yield.",
      "Enter desired batch multiplier or target servings to automatically scale quantities.",
      "Select statutory Natasha's Law allergens present in recipe sub-components.",
      "Calculate ingredient cost per portion and optimal menu selling price with VAT.",
      "Export A4 commercial recipe specification sheet for kitchen station binders."
    ]
  },
  "food-temperatures-poster": {
    "title": "Free Food Temperatures Poster & Safe Guide | Saim Dev",
    "desc": "Free commercial food temperatures poster for UK kitchens. Master legal cooking cores over 75°C, hot holding above 63°C, chilling, and the danger zone.",
    "howTo": [
      "Mount the printed A4/A3 safe temperatures chart above cooking and prep ranges.",
      "Verify core cooking reach 75°C for 30s (70°C for 2 min; 82°C in Scotland).",
      "Maintain hot holding equipment at or above 63°C throughout continuous service.",
      "Ensure commercial food chillers operate strictly between 0°C and 5°C.",
      "Cool cooked hot batches to below 8°C within 90 minutes before refrigerated storage."
    ]
  },
  "danger-zone-for-food": {
    "title": "Free Food Temperature Danger Zone Chart | Saim Dev",
    "desc": "Free food temperature danger zone chart for UK caterers. Learn safe heating limits above 63°C, cold chain controls under 5°C, and the 2-hour cooling rule.",
    "howTo": [
      "Identify the statutory UK bacterial Danger Zone (8°C to 63°C) across all prep steps.",
      "Minimize the time high-risk foods remain between 20°C and 45°C during active preparation.",
      "Apply the 2-hour cooling rule to bring hot food below 8°C using blast chillers.",
      "Maintain hot buffet wells at ≥63°C or discard unheated food held over 2 hours.",
      "Archive daily temperature probe verification logs to maintain your due diligence."
    ]
  },
  "fridge-temperature-chart": {
    "title": "Free Commercial Fridge Temperature Chart | Saim Dev",
    "desc": "Free commercial fridge temperature chart for UK kitchens. Verify daily chiller targets between 1°C and 5°C, shelf stacking rules, and statutory compliance.",
    "howTo": [
      "Mount the fridge temperature reference chart directly on commercial chiller doors.",
      "Record probe readings twice daily at morning opening and evening closing.",
      "Maintain operating chiller temperatures between 1°C and 5°C (statutory max 8°C).",
      "Enforce top-to-bottom shelf rules: raw meats on bottom shelves beneath cooked items.",
      "Execute corrective actions immediately if internal air temperatures rise above 5°C."
    ]
  },
  "burger-temp-chart": {
    "title": "Free Burger Cooking Temperature Chart | Saim Dev",
    "desc": "Free burger cooking temperature chart for UK restaurants. Master E. coli O157 safety rules, 75°C core cooking limits, griddle timing, and FSA rare burgers.",
    "howTo": [
      "Insert calibrated needle thermometer into the thickest center of burger patties.",
      "Verify core temperature reaches 75°C for 30 seconds (or 70°C for 2 minutes).",
      "Ensure meat juices run completely clear and no pink minced beef remains.",
      "Follow strict FSA accredited supplier protocols if licensed to serve rare burgers.",
      "Log core griddle temperatures daily in your kitchen HACCP due diligence diary."
    ]
  }
}

for slug, meta in batch13_meta.items():
    data[slug] = meta
    print(f"Updated metadata for: {slug}")

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Saved src/data/core_metadata.json successfully")
