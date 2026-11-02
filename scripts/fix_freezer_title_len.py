import json

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json"
with open(path, "r", encoding="utf-8") as f:
    meta = json.load(f)

new_title = "Freezer Temperature Log Sheet UK | Free Chart | Saim Dev"
print("New title:", new_title, "Length:", len(new_title))

meta["freezer-temperature-chart"]["title"] = new_title

with open(path, "w", encoding="utf-8") as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print("Updated title successfully")
