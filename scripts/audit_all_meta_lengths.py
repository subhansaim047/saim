import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

for slug, data in meta.items():
    title = data.get('title', '')
    desc = data.get('desc', '')
    t_len = len(title)
    d_len = len(desc)
    warn = ""
    if t_len > 60:
        warn += f" TITLE_LEN={t_len}"
    if d_len > 155:
        warn += f" DESC_LEN={d_len}"
    print(f"[{slug}] T: {t_len} chars | D: {d_len} chars {warn}")
