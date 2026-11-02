import json
import csv

json_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json"
csv_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.csv"

with open(json_path, "r", encoding="utf-8") as f:
    tracker = json.load(f)

for item in tracker:
    if item["slug"] == "haccp-plan-builder":
        item["status"] = "COMPLETED"
        item["main_keyword"] = "haccp plan template uk catering"
        item["competitors_analyzed"] = 5
        item["title"] = "Free Takeaway HACCP Plan Template | Saim Dev"
        item["meta_description"] = "Build a compliant HACCP plan for your UK takeaway or restaurant. Identify critical control points, set safety limits, and download audit-ready PDF logs."
        item["has_deep_content"] = True
        item["word_count"] = 2150
        break

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(tracker, f, indent=2, ensure_ascii=False)

if tracker:
    keys = list(tracker[0].keys())
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(tracker)

print("Updated tools-seo-tracker.json and .csv for haccp-plan-builder to COMPLETED")
