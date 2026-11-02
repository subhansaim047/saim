# scripts/test_batch12_routing.py
import re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = ['ssop', 'receiving-log', 'calculating-food-cost', 'food-production-gmp-audit-checklist', 'hazard-analysis-template']
for s in slugs:
    m = re.search(r'\{\s*"id":\s*"([^"]+)",\s*"slug":\s*"' + s + r'"[^\}]+', text)
    if m:
        block = m.group(0).replace('\n', ' ')
        print(f"Slug: {s} => {block[:120]}...")
    else:
        print(f"Slug {s} not found")
