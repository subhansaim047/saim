import xml.etree.ElementTree as ET
import re

tree = ET.parse('public/sitemap.xml')
sitemap_urls = set(e.text for e in tree.getroot().findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc'))

with open('next.config.mjs', 'r', encoding='utf-8') as f:
    text = f.read()

sources = re.findall(r"source:\s*['\"]([^'\"]+)['\"]", text)
print(f"Total redirects in next.config.mjs: {len(sources)}")

leaks = []
for s in sources:
    full_url = f"https://www.saimdev.site{s}"
    if full_url in sitemap_urls:
        leaks.append(full_url)

print(f"Redirect sources leaking into sitemap.xml: {leaks}")
