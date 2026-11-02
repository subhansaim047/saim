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
    m = re.search(rf'"{s}":\s*(\{{.*?relatedBlog:\s*\{{.*?\}}[\s\n]*\}})', text, re.DOTALL)
    if m:
        entry = m.group(1)
        faq_count = len(re.findall(r'q:\s*"', entry))
        print(f"[{s}] FAQs: {faq_count}, Length: {len(entry)}")
    else:
        print(f"[{s}] NOT MATCHED")
