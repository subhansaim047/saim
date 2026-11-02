with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

batch28_slugs = [
    "when-should-you-wash-your-hands",
    "how-do-you-calibrate-a-thermometer",
    "kitchen-safety-poster",
    "food-safety-and-sanitation",
    "big-6-foodborne-illnesses"
]

import re
for slug in batch28_slugs:
    matches = [m.start() for m in re.finditer(f'"{slug}":', text)]
    print(f"{slug}: {len(matches)} occurrences")
