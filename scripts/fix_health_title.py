import json

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json"
with open(path, "r", encoding="utf-8") as f:
    meta = json.load(f)

title = "Free Health Inspection Checklist UK | EHO Audit | Saim Dev"
print("Title len:", len(title))

meta["health-inspection-checklist"]["title"] = title

with open(path, "w", encoding="utf-8") as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Updated title for health-inspection-checklist")
