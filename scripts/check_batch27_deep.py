with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

batch27_slugs = [
    "food-production-sheet",
    "dispatch-log",
    "hot-holding-food-temperature-log",
    "corrective-action-plan-template",
    "fridge-layout-poster"
]

import re
for slug in batch27_slugs:
    matches = [m.start() for m in re.finditer(f'"{slug}":', text)]
    print(f"{slug}: {len(matches)} occurrences")
