import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

for k in ['chicken-temperature-chart', 'ham-cooking-temperature-chart']:
    print(k, meta.get(k))
