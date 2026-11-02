import json

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json"
with open(path, "r", encoding="utf-8") as f:
    meta = json.load(f)

title = "Health Inspection Checklist UK | 5-Star EHO Audit | Saim Dev"
desc = "Free UK health inspection checklist for commercial kitchens. Self-audit food hygiene, premises cleanliness, HACCP records, and secure a 5-star FHRS rating."

print("Title len:", len(title))
print("Desc len:", len(desc))

meta["health-inspection-checklist"] = {
    "title": title,
    "desc": desc,
    "howTo": [
        "Audit food hygiene procedures: verify chilled storage (<5°C), core cooking temperatures (75°C), and colour-coded board segregation.",
        "Inspect kitchen physical structure: check handwash basins, hot running water, BS EN 1499 soap, and pest-proofing barriers.",
        "Verify management records: complete daily SFBB opening and closing checks, allergen matrices, and staff hygiene training logs.",
        "Review estimated Food Hygiene Rating Scheme (FHRS) star score and resolve identified non-compliance points immediately.",
        "Print out the signed inspection audit sheet and file with your due diligence documentation ready for visiting council officers."
    ]
}

with open(path, "w", encoding="utf-8") as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Updated core_metadata.json for health-inspection-checklist")
