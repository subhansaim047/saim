import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

print(f"Total core_metadata entries: {len(d)}")
for k, v in d.items():
    t_len = len(v['title'])
    d_len = len(v['desc'])
    print(f"[{k}] ({t_len} chars | {d_len} chars)")
    print(f"  Title: {v['title']}")
    print(f"  Desc:  {v['desc']}")
