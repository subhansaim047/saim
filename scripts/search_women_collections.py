import json

with open('audit/all_store_collections.json', 'r', encoding='utf-8') as f:
    cols = json.load(f)

for c in cols:
    t = c['title'].lower()
    h = c['handle'].lower()
    if 'women' in t and ('bomber' in t or 'vest' in t or 'blazer' in t or 'coat' in t or 'tote' in t or 'crossbody' in t):
        print(f"{c['title']} -> {c['handle']}")
