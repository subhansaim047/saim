import json
import csv
import sys

sys.stdout.reconfigure(encoding='utf-8')

batch3_slugs = [
    "food-cooling-poster",
    "walk-in-cooler-food-storage-chart",
    "fridge-temperature-record-sheet-pdf",
    "food-allergen-chart",
    "pest-control-checklist"
]

scores = {
    "food-cooling-poster": (97.4, 73.6),
    "walk-in-cooler-food-storage-chart": (97.6, 72.4),
    "fridge-temperature-record-sheet-pdf": (97.8, 74.8),
    "food-allergen-chart": (98.2, 75.2),
    "pest-control-checklist": (97.5, 74.2)
}

# 1. Update JSON
json_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json'
with open(json_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

for item in tracker:
    slug = item.get('slug')
    if slug in batch3_slugs:
        item['status'] = 'COMPLETED'
        our_s, comp_s = scores[slug]
        item['our_score'] = our_s
        item['top_competitor_score'] = comp_s
        print(f"Updated JSON tracker for {slug}")

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=2)

# 2. Update CSV
csv_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.csv'
rows = []
with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    fieldnames = reader.fieldnames
    for r in reader:
        slug = r.get('slug')
        if slug in batch3_slugs:
            r['status'] = 'COMPLETED'
            our_s, comp_s = scores[slug]
            r['our_score'] = str(our_s)
            r['top_competitor_score'] = str(comp_s)
            print(f"Updated CSV tracker for {slug}")
        rows.append(r)

with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

print("Batch 3 tracker updates complete.")
