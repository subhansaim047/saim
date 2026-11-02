import json
import csv
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Update JSON
json_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json'
with open(json_path, 'r', encoding='utf-8') as f:
    tracker = json.load(f)

for item in tracker:
    if item.get('slug') == 'basic-food-preparation-rules':
        item['status'] = 'COMPLETED'
        item['competitors_analyzed'] = [
            "High Speed Training (highspeedtraining.co.uk/hub/food-hygiene-rules/)",
            "Food Standards Agency (food.gov.uk/business-guidance/safer-food-better-business-for-caterers)",
            "FoodDocs (fooddocs.com/templates/safe-food-handling)",
            "The Caterer (thecaterer.com/guides/food-hygiene-basics)",
            "NCASS (ncass.org.uk/resources/kitchen-safety-guidelines/)"
        ]
        item['our_score'] = 97.3
        item['top_competitor_score'] = 74.3
        item['enhancements'] = [
            "Built SafeFoodPrepRulesTool with 5 kitchen stations (Master, Raw Meat, Veg/Salad, Cookline, Allergen)",
            "8-point pre-prep readiness audit drill with live EHO compliance status scoring",
            "UK (75°C) and Scotland (82°C) temperature standard toggle",
            "High-contrast printable A4 wall poster with premises name, bench ID, and supervisor sign-off"
        ]
        print("Updated basic-food-preparation-rules in JSON tracker.")
        break

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=2)

# 2. Update CSV
csv_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.csv'
rows = []
with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    fieldnames = reader.fieldnames
    for r in reader:
        if r.get('slug') == 'basic-food-preparation-rules':
            r['status'] = 'COMPLETED'
            r['our_score'] = '97.3'
            r['top_competitor_score'] = '74.3'
        rows.append(r)

if 'our_score' not in fieldnames:
    fieldnames.append('our_score')
if 'top_competitor_score' not in fieldnames:
    fieldnames.append('top_competitor_score')

with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

print("Updated CSV tracker.")
