# scripts/update_batch11_metadata.py
import json

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

batch11_meta = {
  "retail-store-daily-checklist": {
    "title": "Free Retail Store Daily Checklist | Saim Dev",
    "desc": "Download our free retail store daily checklist. Audit shop floor hygiene, grab-and-go chiller temperatures, and shelf stock rotation for UK stores.",
    "howTo": [
      "Verify perimeter security, alarms, CCTV, and cash float balances upon opening.",
      "Audit grab-and-go open chillers (1°C to 5°C, legal max 8°C) and display freezers.",
      "Execute First-In, First-Out (FIFO) stock rotation and inspect use-by date codes.",
      "Sanitise customer shopping baskets and trolley handles with BS EN 1276 disinfectant.",
      "Reconcile daily cash takings, empty refuse bins, and arm store alarm at night."
    ]
  },
  "kitchen-opening-and-closing-checklist": {
    "title": "Free Kitchen Opening & Closing Checklist | Saim Dev",
    "desc": "Free commercial kitchen opening and closing checklist. Complete daily SFBB diary tasks, refrigeration audits, sanitiser logs, and secure night shutdown.",
    "howTo": [
      "Check and log morning chiller (1°C–5°C) and freezer (≤-18°C) probe temperatures.",
      "Restock dedicated handwashing basins with unperfumed bactericidal soap and blue roll.",
      "Power on kitchen extraction canopy and confirm gas interlock safety valve is active.",
      "Cool cooked food to below 8°C within 90 minutes before covered refrigerated storage.",
      "Isolate commercial gas supplies, lock waste compactors, and verify pest barriers."
    ]
  },
  "restaurant-health-inspection-checklist": {
    "title": "Free Restaurant Health Inspection Checklist | Saim Dev",
    "desc": "Free restaurant health inspection checklist for UK kitchens. Audit hygiene handling, clean facilities, and HACCP management before your EHO inspection.",
    "howTo": [
      "Audit food handling practices: check cooking core (≥75°C) and chiller (≤5°C) limits.",
      "Verify physical segregation of raw poultry, meat, and fish from ready-to-eat foods.",
      "Inspect handwash stations for hot running water, bactericidal soap, and paper roll.",
      "Review SFBB or HACCP diary documentation, 4-weekly reviews, and temperature logs.",
      "Confirm staff Level 2 food hygiene certificates and supplier delivery invoices."
    ]
  },
  "kitchen-utensils-list": {
    "title": "Free Commercial Kitchen Utensils List | Saim Dev",
    "desc": "Interactive commercial kitchen utensils list. Manage par levels, colour-coded prep smallwares, UKAS probes, and smallware budgets for UK kitchens.",
    "howTo": [
      "Audit current smallware inventory against station par requirements.",
      "Verify full colour-coded sets for knives and chopping boards (6 standard colours).",
      "Inspect UKAS-calibrated needle probes and infrared thermometer accuracy.",
      "Check food-contact compliance (Type 304 stainless steel and BPA-free storage).",
      "Calculate missing smallware deficit and export ready-to-order purchase specification."
    ]
  },
  "starting-a-food-business-checklist": {
    "title": "Free Starting a Food Business Checklist | Saim Dev",
    "desc": "Free UK checklist for starting a food business. Follow step-by-step guidance on council registration, HACCP setup, trade waste, and food safety training.",
    "howTo": [
      "Register your food premises with the local council at least 28 days before opening.",
      "Implement a documented HACCP plan or complete the FSA Safer Food, Better Business pack.",
      "Ensure all food handlers complete certified Level 2 Food Hygiene training courses.",
      "Arrange commercial trade waste disposal and grease management with licensed carriers.",
      "Conduct a pre-opening inspection audit across all three FHRS hygiene pillars."
    ]
  }
}

for slug, meta in batch11_meta.items():
    data[slug] = meta
    print(f"Updated metadata for: {slug}")

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Saved src/data/core_metadata.json successfully")
