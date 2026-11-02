import json

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\saim_templates.ts', encoding='utf-8') as f:
    text = f.read()

slugs = ['restaurant-hood-cleaning', 'grease-trap-cleaning', 'turkey-pasteurization-chart', 'waste-management-plan', 'haccp-flow-chart-template']
for s in slugs:
    idx = text.find(f'"{s}"')
    if idx != -1:
        start = text.rfind('{', 0, idx)
        end = text.find('}', idx)
        block = text[start:end+1]
        print(f"=== {s} ===")
        print(block)
