with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

batch22_slugs = [
    "restaurant-opening-checklist",
    "printable-retail-store-daily-checklist",
    "opening-and-closing-checklist-template",
    "restaurant-equipment-list",
    "opening-a-restaurant-checklist"
]

for s in batch22_slugs:
    print(f"{s} in tool_deep_content: {'\"' + s + '\":' in text}")
