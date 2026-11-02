import json

slugs = [
    'product-specification-sheet',
    'pest-management-plan',
    'meat-cooking-chart',
    'steak-cooking-chart',
    'turkey-cooking-chart'
]

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx', encoding='utf-8') as f:
    text = f.read()

for s in slugs:
    print(f"Slug '{s}' in TemplateDetailPage? {s in text}")
