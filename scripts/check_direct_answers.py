import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
slugs = [
    "allergy-matrix",
    "food-allergen-chart",
    "food-cost-calculator",
    "haccp-plan-builder",
    "opening-and-closing-checklist-template",
    "fridge-temperature-record-sheet-pdf",
    "freezer-temperature-chart",
    "cleaning-schedule",
    "hot-holding-food-temperature-log",
    "recipe-calculator"
]

for s in slugs:
    # Find directAnswer
    pattern = rf'"{s}":\s*\{{[^}}]*directAnswer:\s*"([^"]+)"'
    m = re.search(pattern, text)
    if m:
        ans = m.group(1)
        word_count = len(ans.split())
        print(f"[{s}] directAnswer word count: {word_count}")
    else:
        print(f"[{s}] directAnswer NOT FOUND")
