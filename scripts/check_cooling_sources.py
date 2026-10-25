import json

for fname in ['scripts/all_fooddocs_templates.json', 'scripts/unique_templates.json']:
    try:
        with open(fname, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"=== {fname} ===")
        for idx, item in enumerate(data):
            if 'cool' in (item.get('title', '') + ' ' + item.get('slug', '')).lower():
                print(f"  [{idx}] ID: {item.get('id')}, Title: {item.get('title')}, Slug: {item.get('slug')}, Target: {item.get('targetUrl')}")
    except Exception as e:
        print(f"{fname}: {e}")
