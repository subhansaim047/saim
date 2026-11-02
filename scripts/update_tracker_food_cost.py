import json
import csv

json_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json"
csv_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.csv"

with open(json_path, "r", encoding="utf-8") as f:
    tracker = json.load(f)

for item in tracker:
    if item["slug"] == "food-cost-calculator":
        item["status"] = "COMPLETED"
        item["main_keyword"] = "commercial kitchen food cost calculator uk"
        item["competitors_analyzed"] = 5
        item["title"] = "Free Commercial Kitchen Food Cost Calculator | Saim Dev"
        item["meta_description"] = "Calculate recipe food cost percentages, gross profit margins, and profitable takeaway prices with our free UK food cost calculator for commercial kitchens."
        item["has_deep_content"] = True
        item["word_count"] = 2250
        break

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(tracker, f, indent=2, ensure_ascii=False)

if tracker:
    keys = list(tracker[0].keys())
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(tracker)

print("Updated tools-seo-tracker.json and .csv for food-cost-calculator to COMPLETED")
