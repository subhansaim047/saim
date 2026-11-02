import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tools = json.load(f)

pending = [t for t in tools if t.get('status') == 'PENDING']
print(f"Total pending tools: {len(pending)}")
for idx, t in enumerate(pending):
    print(f"{idx+141}. slug: {t.get('slug')} | cat: {t.get('category')} | name: {t.get('name')}")
