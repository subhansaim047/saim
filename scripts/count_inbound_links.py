import os
import re

files_to_scan = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.jsx', '.js')):
            files_to_scan.append(os.path.join(root, f))
for root, dirs, files in os.walk('app'):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.jsx', '.js')):
            files_to_scan.append(os.path.join(root, f))

counts = {
    'fridge-temperature-chart': 0,
    'fridge-temperature-record-sheet-pdf': 0,
    'freezer-temperature-chart': 0,
    'cleaning-schedule': 0,
    'restaurant-cleaning-checklist': 0,
    'kitchen-opening-and-closing-checklist': 0,
    'opening-and-closing-checklist-template': 0
}

for path in files_to_scan:
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    for k in counts:
        counts[k] += len(re.findall(re.escape(k), content))

print("Inbound mentions in source code:")
for k, v in counts.items():
    print(f"  {k}: {v}")
