import json
import csv
import sys

sys.stdout.reconfigure(encoding='utf-8')

batch4_slugs = [
    "recipe-calculator",
    "cleaning-schedule",
    "allergy-matrix",
    "food-traceability",
    "cleaning-checklist-template"
]

scores = {
    "recipe-calculator": (98.4, 75.0),
    "cleaning-schedule": (97.5, 74.0),
    "allergy-matrix": (98.2, 75.0),
    "food-traceability": (97.7, 73.8),
    "cleaning-checklist-template": (97.6, 74.4)
}

# 1. Update JSON
json_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json'
with open(json_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

for item in tracker:
    slug = item.get('slug')
    if slug in batch4_slugs:
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
        if slug in batch4_slugs:
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

print("Batch 4 tracker updates complete.")
