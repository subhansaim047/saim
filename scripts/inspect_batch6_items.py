import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/subhan/.gemini/antigravity/scratch/saim/audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data:
    if 26 <= item.get('priority_rank', 0) <= 30:
        print(f"Rank {item.get('priority_rank')}: slug={item.get('slug')}, name={item.get('name')}, status={item.get('status')}")
