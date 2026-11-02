import urllib.request
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

urls = [
    'https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide',
    'https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants'
]

for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8')
        print(f"\n[URL: {url}] - HTTP 200")
        schemas = re.findall(r'<script\s+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.DOTALL)
        print(f"  Total JSON-LD blocks: {len(schemas)}")
        for i, s in enumerate(schemas, 1):
            try:
                parsed = json.loads(s.strip())
                print(f"    Block {i}: @type = {parsed.get('@type')}")
            except Exception as pe:
                print(f"    Block {i}: Error parsing JSON: {pe}")
    except Exception as e:
        print(f"\n[URL: {url}] - Fetch error: {e}")
