import xml.etree.ElementTree as ET

tree = ET.parse('public/sitemap.xml')
root = tree.getroot()

# Sitemap namespace
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = [elem.text for elem in root.findall('.//sm:loc', ns)]

print(f"Total URLs in public/sitemap.xml: {len(urls)}")
tool_urls = [u for u in urls if '/food-safety-templates/' in u]
print(f"Total /food-safety-templates/ URLs: {len(tool_urls)}")
tools_hub = [u for u in urls if u.endswith('/tools')]
print(f"/tools hub in sitemap: {len(tools_hub) > 0}")

# Check with tracker
import json
with open('audit/tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

print(f"Total tools in tracker: {len(tracker)}")
missing = []
for t in tracker:
    slug = t['slug']
    expected_url = f"https://www.saimdev.site/food-safety-templates/{slug}"
    if expected_url not in urls:
        missing.append(slug)

print(f"Missing from sitemap: {len(missing)}")
if missing:
    print(f"Sample missing: {missing[:5]}")
