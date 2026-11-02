import json

desc = "Free UK restaurant cleaning checklist. Daily opening, closing, and deep clean tasks, BS EN 1276 sanitiser contact times, and printable EHO kitchen logs."
print("Exact len:", len(desc))

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json"
with open(path, "r", encoding="utf-8") as f:
    meta = json.load(f)

meta["restaurant-cleaning-checklist"]["desc"] = desc

with open(path, "w", encoding="utf-8") as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Saved exact length:", len(desc))
