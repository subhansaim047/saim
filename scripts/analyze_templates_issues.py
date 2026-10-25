import json
import re

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    c = f.read()

m = re.search(r'export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);', c)
templates = json.loads(m.group(1))

print(f"Total templates: {len(templates)}")

# 1. Check URL collisions (slug or targetUrl)
slug_map = {}
for t in templates:
    slug = t.get('slug')
    target = t.get('targetUrl')
    slug_map.setdefault(slug, []).append(f"{t['id']} [{t.get('type')}]: \"{t['title']}\"")

duplicates = {k: v for k, v in slug_map.items() if len(v) > 1}
print(f"\n--- SLUG COLLISIONS (Total {len(duplicates)}) ---")
for k, v in duplicates.items():
    print(f"Slug: '{k}'")
    for item in v:
        print(f"   -> {item}")

# 2. Check title collisions
title_map = {}
for t in templates:
    title = t.get('title')
    title_map.setdefault(title, []).append(f"{t['id']} [{t.get('type')}] (slug: {t.get('slug')})")

dup_titles = {k: v for k, v in title_map.items() if len(v) > 1}
print(f"\n--- TITLE COLLISIONS (Total {len(dup_titles)}) ---")
for k, v in dup_titles.items():
    print(f"Title: '{k}'")
    for item in v:
        print(f"   -> {item}")

# 3. Check "Template" vs "Smart Tool" pairs
smart_tools = [t for t in templates if t.get('type') == 'smart_tool' or 'smart' in t.get('type', '')]
print(f"\n--- SMART TOOLS (Total {len(smart_tools)}) ---")
for st in smart_tools:
    print(f"{st['id']}: \"{st['title']}\" (slug: {st['slug']})")

# 4. Check US-focused items (FDA, FSMA, EcoSure, Amazon, etc.)
print(f"\n--- US-FOCUSED ITEMS ---")
us_keywords = ['fda', 'fsma', 'ecosure', 'amazon', 'usda', 'fahrenheit', 'cutting board']
for t in templates:
    text = (t.get('title', '') + ' ' + t.get('slug', '') + ' ' + t.get('description', '')).lower()
    matches = [kw for kw in us_keywords if kw in text]
    if matches:
        print(f"{t['id']}: \"{t['title']}\" (slug: {t['slug']}) -> keywords: {matches}")
