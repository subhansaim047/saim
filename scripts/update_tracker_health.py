import json
import csv

json_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json"
csv_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.csv"

with open(json_path, "r", encoding="utf-8") as f:
    tracker = json.load(f)

for item in tracker:
    if item["slug"] == "health-inspection-checklist":
        item["status"] = "COMPLETED"
        item["main_keyword"] = "health inspection checklist uk"
        item["competitors_analyzed"] = 5
        item["title"] = "Free Health Inspection Checklist UK | EHO Audit | Saim Dev"
        item["meta_description"] = "Free UK health inspection checklist for commercial kitchens. Self-audit food hygiene, premises cleanliness, HACCP records, and secure a 5-star FHRS rating."
        item["has_deep_content"] = True
        item["word_count"] = 1940
        break

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(tracker, f, indent=2, ensure_ascii=False)

if tracker:
    keys = list(tracker[0].keys())
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(tracker)

print("Updated tools-seo-tracker.json and .csv for health-inspection-checklist to COMPLETED")
