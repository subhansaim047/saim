import json
import csv

json_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json"
csv_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.csv"

with open(json_path, "r", encoding="utf-8") as f:
    tracker = json.load(f)

for item in tracker:
    if item["slug"] == "restaurant-cleaning-checklist":
        item["status"] = "COMPLETED"
        item["main_keyword"] = "commercial kitchen cleaning schedule uk"
        item["competitors_analyzed"] = 5
        item["title"] = "Restaurant Cleaning Checklist UK | Free Sheet | Saim Dev"
        item["meta_description"] = "Free UK restaurant cleaning checklist. Daily opening, closing, and deep clean tasks, BS EN 1276 sanitiser contact times, and printable EHO kitchen logs."
        item["has_deep_content"] = True
        item["word_count"] = 1890
        break

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(tracker, f, indent=2, ensure_ascii=False)

if tracker:
    keys = list(tracker[0].keys())
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(tracker)

print("Updated tools-seo-tracker.json and .csv for restaurant-cleaning-checklist to COMPLETED")
