import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/subhan/.gemini/antigravity/scratch/saim/audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data:
    if 46 <= item.get('priority_rank', 0) <= 50:
        print(f"Rank {item.get('priority_rank')}: id={item.get('id')}, slug={item.get('slug')}, name={item.get('name')}, status={item.get('status')}")
