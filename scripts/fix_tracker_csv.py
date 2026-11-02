import json
import csv

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

# Collect all unique fieldnames
all_keys = []
for row in tracker:
    for k in row.keys():
        if k not in all_keys:
            all_keys.append(k)

# Write CSV with complete fieldnames
with open('audit/tools-seo-tracker.csv', 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=all_keys)
    writer.writeheader()
    for row in tracker:
        writer.writerow(row)

print(f"Updated audit/tools-seo-tracker.csv successfully with {len(all_keys)} fields!")
