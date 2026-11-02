import json

with open("src/data/core_metadata.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total entries: {len(data)}")
for slug, val in list(data.items())[:15]:
    print(f"Slug: {slug}")
    print(f"  Title: {val.get('title')}")
    print(f"  Desc:  {val.get('desc')[:60]}...")
