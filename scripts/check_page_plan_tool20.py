import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\page_plan.json', 'r', encoding='utf-8') as f:
    plan = json.load(f)

slug = 'cleaning-checklist-template'
print(f"Page plan entry for '{slug}':", plan.get(slug))
