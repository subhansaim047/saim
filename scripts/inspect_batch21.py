import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

batch21 = [t for t in data if 101 <= t.get('priority_rank', 999) <= 105]
batch21.sort(key=lambda x: x.get('priority_rank', 999))

for t in batch21:
    print(f"Rank {t.get('priority_rank')}: slug='{t.get('slug')}', name='{t.get('name')}', cat='{t.get('category')}', status='{t.get('status')}', keyword='{t.get('target_keyword')}'")
