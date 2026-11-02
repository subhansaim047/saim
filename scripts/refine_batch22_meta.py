import json

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

meta["restaurant-opening-checklist"]["desc"] = "Streamline morning restaurant opening operations from FOH setup to kitchen line readiness. Free customisable daily restaurant opening checklist template."
meta["restaurant-equipment-list"]["desc"] = "Plan and audit commercial kitchen infrastructure with a master restaurant equipment list. Free categorised checklist covering cooking, cooling, and prep."

# Also check howTo in opening-and-closing-checklist-template and printable-retail-store-daily-checklist for sanitize -> sanitise
meta["opening-and-closing-checklist-template"]["howTo"][0] = "Complete morning start-up: power on exhaust hoods, sanitise boards, and check fridges."
meta["printable-retail-store-daily-checklist"]["howTo"][2] = "Sanitise customer shopping carts, checkout conveyor belts, and payment terminals."

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Updated core_metadata.json with strict British English for Batch 22.")
