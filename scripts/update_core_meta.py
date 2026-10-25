import json

meta_path = "src/data/core_metadata.json"
with open(meta_path, "r", encoding="utf-8") as f:
    meta = json.load(f)

# pest-control-checklist
meta["pest-control-checklist"]["title"] = "Free Commercial Pest Control Checklist | Saim Dev"
meta["pest-control-checklist"]["desc"] = "Comprehensive commercial kitchen pest control checklist. Inspect ingress points, bait stations, and proofing barriers with direct printable PDF download."

# food-cooling-poster
meta["food-cooling-poster"]["title"] = "Free Food Cooling Methods & Chilling Poster | Saim Dev"
meta["food-cooling-poster"]["desc"] = "UK FSA-recommended food cooling procedures and two-stage chilling guidelines. Download printable kitchen posters with 90-minute rapid chilling protocols."

print("pest title len:", len(meta["pest-control-checklist"]["title"]))
print("pest desc len:", len(meta["pest-control-checklist"]["desc"]))
print("cooling title len:", len(meta["food-cooling-poster"]["title"]))
print("cooling desc len:", len(meta["food-cooling-poster"]["desc"]))

with open(meta_path, "w", encoding="utf-8") as f:
    json.dump(meta, f, indent=2)

print("Updated core_metadata.json successfully")
