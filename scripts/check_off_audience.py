import json
import re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = re.findall(r'["\']slug["\']\s*:\s*["\']([^"\']+)["\']', text)

off_audience_candidates = [
    "brc-audit",
    "kosher-certification",
    "non-gmo",
    "amazon-seller-and-product-requirements",
    "ecosure-inspection-checklist",
    "sqf-audit-checklist",
    "gfsi-audit-checklist",
    "get-iso-22000-certified",
    "iso-22000-internal-audit-checklist",
    "fssc-certification-checklist",
    "fat-tom-poster",
    "three-sink-method",
    "big-6-foodborne-illnesses",
    "freeze-drying-time-chart",
    "milk-pasteurization-temperature-time-chart",
    "juice-pasteurization-temperature-time-chart",
    "what-is-the-minimum-hot-holding-temperature-for-fried-chicken",
    "what-is-the-minimum-hot-holding-temperature-requirement-for-pizza",
    "what-is-the-minimum-hot-holding-temperature-for-hot-dog"
]

print(f"Total defined templates: {len(slugs)}")
print("\nChecking OFF_AUDIENCE_SLUGS against saim_templates.ts:")
for s in off_audience_candidates:
    print(f"  {s}: in dataset = {s in slugs}")

# Also check any other pasteurization slugs in dataset:
past = [s for s in slugs if 'pasteur' in s]
print(f"\nAll pasteurization slugs in dataset: {past}")
