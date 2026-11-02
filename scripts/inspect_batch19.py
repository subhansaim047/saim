import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

batch19 = [t for t in data if 91 <= t.get('priority_rank', 999) <= 95]
batch19.sort(key=lambda x: x.get('priority_rank', 999))

for t in batch19:
    print(f"Rank {t.get('priority_rank')}: slug='{t.get('slug')}', name='{t.get('name')}', cat='{t.get('category')}', status='{t.get('status')}', keyword='{t.get('target_keyword')}'")
