import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

completed = [t for t in tracker if t.get('status') == 'COMPLETED']
pending = [t for t in tracker if t.get('status') != 'COMPLETED']
pending.sort(key=lambda x: x.get('priority_rank', 999))

print(f"Total tools: {len(tracker)}")
print(f"Completed count: {len(completed)}")
print(f"Pending count: {len(pending)}")
print("Next 5 tools in queue:")
for t in pending[:5]:
    print(f"  Rank #{t.get('priority_rank')}: slug='{t.get('slug')}', name='{t.get('name')}', cat='{t.get('category')}'")
