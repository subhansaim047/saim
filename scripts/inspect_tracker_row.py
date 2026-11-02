import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

for row in tracker:
    if row.get("slug") == "waste-management-plan-sop":
        print(json.dumps(row, indent=2))
        break
