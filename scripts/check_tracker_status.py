import json

with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total tools in tracker: {len(data)}")
completed_count = sum(1 for row in data if row.get("status") == "COMPLETED")
print(f"Completed tools: {completed_count}")

print("\n--- Next 15 tools in tracker ---")
for row in data[100:115]:
    print(f"Rank {row.get('rank')}: {row.get('slug')} | Status: {row.get('status')} | Category: {row.get('category')}")
