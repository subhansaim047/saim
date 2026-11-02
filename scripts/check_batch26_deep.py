with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

batch26_slugs = [
    "thermometer-calibration-log",
    "what-is-the-minimum-hot-holding-temperature-requirement-for-pizza",
    "approved-supplier-list",
    "ingredient-traceability",
    "delivery-log"
]

import re
for slug in batch26_slugs:
    matches = [m.start() for m in re.finditer(f'"{slug}":', text)]
    print(f"{slug}: {len(matches)} occurrences")
