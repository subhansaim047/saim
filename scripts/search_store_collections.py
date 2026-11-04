import json

with open('audit/all_store_collections.json', 'r', encoding='utf-8') as f:
    cols = json.load(f)

keywords = ['women', 'bomber', 'biker', 'vest', 'varsity', 'hood', 'shoe', 'bag', 'seconds', 'clearance', 'seller', 'puffer']

for k in keywords:
    matches = [c for c in cols if k in c['title'].lower() or k in c['handle'].lower()]
    print(f"\n--- Matches for '{k}' ({len(matches)}): ---")
    for m in matches[:6]:
        print(f"  {m['title']} -> {m['handle']}")
