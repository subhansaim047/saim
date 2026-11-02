import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

meta["haccp-plan-builder"]["desc"] = "Build a compliant HACCP plan for your UK takeaway or restaurant. Identify critical control points, set safety limits, and download audit-ready PDF logs."
meta["basic-food-preparation-rules"]["desc"] = "Printable UK commercial kitchen food preparation rules poster. Visual guidance on handwashing, temperature control, and cross-contamination prevention."
meta["fridge-temperature-record-sheet-pdf"]["desc"] = "Download a free fridge temperature log sheet for UK restaurants and takeaways. Record 8°C chilled limits twice daily for EHO due diligence evidence."
meta["restaurant-cleaning-checklist"]["desc"] = "Restaurant cleaning checklist covering dining area, bar, kitchen prep, and washrooms. Daily and weekly tasks aligned with UK food hygiene regulations."
meta["opening-and-closing-checklist-template"]["desc"] = "Free SFBB opening and closing checks template for UK food businesses. Daily hygiene checks, fridge temperatures, and routines for 5-star EHO ratings."
meta["hot-holding-food-temperature-log"]["desc"] = "Download a free hot holding temperature log for UK kitchens. Monitor food above 63°C and record time limits to comply with Food Hygiene Regulations."

with open('src/data/core_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Tightened descriptions updated.")
