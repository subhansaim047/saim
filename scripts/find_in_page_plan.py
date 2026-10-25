import json

page_plan = json.load(open('src/data/page_plan.json', 'r', encoding='utf-8'))

keywords = ['fsma', 'amazon', 'ecosure', 'cutting-board', 'color-chart']

matches = [s for s in page_plan.keys() if any(k in s.lower() for k in keywords)]

print(f"Total matching in page_plan.json: {len(matches)}")
for s in matches:
    print(f"  {s}: {page_plan[s]}")
