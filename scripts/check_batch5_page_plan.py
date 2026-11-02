import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

batch5_slugs = [
    "cleaning-restaurant",
    "haccp-audit",
    "haccp-risk-assessment",
    "restaurant-deep-cleaning-checklist",
    "ham-cooking-temperature-chart"
]

for s in batch5_slugs:
    print(s, "->", plan.get(s))
