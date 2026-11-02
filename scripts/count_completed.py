import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

completed = [t for t in tracker if t.get('status') == 'COMPLETED']
pending = [t for t in tracker if t.get('status') != 'COMPLETED']
print(f"Total tools: {len(tracker)}")
print(f"Completed tools: {len(completed)}")
print(f"Pending tools: {len(pending)}")
