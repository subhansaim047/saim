with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

batch25_slugs = [
    "restaurant-maintenance-checklist",
    "restaurant-inventory-template",
    "restaurant-schedule-template",
    "kitchen-prep-list-template",
    "cooking-log-template"
]

import re
for slug in batch25_slugs:
    matches = [m.start() for m in re.finditer(f'"{slug}":', text)]
    print(f"{slug}: {len(matches)} occurrences at indices {matches}")
