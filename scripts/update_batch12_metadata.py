# scripts/update_batch12_metadata.py
import json

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

batch12_meta = {
  "ssop": {
    "title": "Free SSOP Sanitation Template UK | Saim Dev",
    "desc": "Download our free SSOP sanitation template. Master commercial kitchen cleaning procedures, BS EN 1276 chemical contact times, and ATP swab verification.",
    "howTo": [
      "Isolate machinery power and sweep dry food debris from food contact zones.",
      "Apply alkaline detergent at 45°C–55°C to break down organic fats and grease.",
      "Rinse with clean potable water to eliminate chemical surfactant residue.",
      "Apply BS EN 1276 bactericidal disinfectant with calibrated contact time.",
      "Perform ATP bioluminescence swab test to verify line clearance under 30 RLU."
    ]
  },
  "receiving-log": {
    "title": "Free Food Receiving Temperature Log | Saim Dev",
    "desc": "Free food receiving temperature log for UK kitchens. Verify delivery vehicle hygiene, chilled core limits under 5°C, frozen goods, and batch traceability.",
    "howTo": [
      "Inspect delivery vehicle cargo bay for cleanliness, odour, and refrigeration operation.",
      "Probe core temperature of chilled foods (1°C–5°C, reject any delivery over 8°C).",
      "Verify frozen shipments are solidly frozen at ≤-18°C with no signs of thawing.",
      "Check packaging seals for hermetic integrity and reject dented or blown cans.",
      "Log supplier name, batch code, expiry date, and invoice number for traceability."
    ]
  },
  "calculating-food-cost": {
    "title": "Free Food Cost & Margin Calculator | Saim Dev",
    "desc": "Free food cost and gross profit margin calculator. Calculate recipe food cost percentage, dish pricing, UK VAT impact, and commercial catering margins.",
    "howTo": [
      "Itemise raw ingredient costs and unit quantities for each recipe component.",
      "Set your target gross profit margin percentage (typically 68% to 72% in UK catering).",
      "Account for UK VAT (20% standard rate for eat-in or hot takeaway foods).",
      "Include a delivery aggregator commission buffer (15% to 30%) if applicable.",
      "Calculate optimal menu selling price and export your recipe margin specification."
    ]
  },
  "food-production-gmp-audit-checklist": {
    "title": "Free Food Production GMP Audit Checklist | Saim Dev",
    "desc": "Free food production GMP audit checklist. Audit personnel hygiene, cross-contamination, Natasha's Law allergens, equipment calibration, and CCP records.",
    "howTo": [
      "Audit staff hygiene compliance: clean PPE, hairnets, handwash protocols, and zero jewellery.",
      "Inspect production floors, walls, and overhead structures for cracks, leaks, or flaking paint.",
      "Verify strict allergen zoning and dedicated colour-coded smallwares under Natasha's Law.",
      "Test metal detector sensitivity wands and review monthly thermometer probe calibrations.",
      "Verify batch traceability documentation and confirm quality supervisor CCP sign-offs."
    ]
  },
  "hazard-analysis-template": {
    "title": "Free HACCP Hazard Analysis Template | Saim Dev",
    "desc": "Free HACCP hazard analysis template for UK food businesses. Identify biological, chemical, physical, and allergen hazards with CCP risk scoring matrix.",
    "howTo": [
      "List every process step from raw ingredient delivery to final customer service.",
      "Identify all potential biological, chemical, physical, and allergen hazards at each step.",
      "Assess risk level by calculating Severity × Likelihood for each identified hazard.",
      "Determine Critical Control Points (CCPs) using the Codex Alimentarius decision tree.",
      "Establish measurable critical limits and preventive control measures for every CCP."
    ]
  }
}

for slug, meta in batch12_meta.items():
    data[slug] = meta
    print(f"Updated metadata for: {slug}")

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Saved src/data/core_metadata.json successfully")
