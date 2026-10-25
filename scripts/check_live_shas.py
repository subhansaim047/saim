import urllib.request
import re

urls = [
    'https://www.saimdev.site/',
    'https://www.saimdev.site/blogs',
    'https://www.saimdev.site/tools',
    'https://www.saimdev.site/about',
    'https://www.saimdev.site/food-safety-templates/food-allergen-chart',
    'https://www.saimdev.site/food-safety-templates/freezer-temperature-chart'
]

for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req) as resp:
            body = resp.read().decode('utf-8', errors='ignore')
            sha = re.search(r'name="build-sha"\s+content="([^"]+)"', body)
            sha_val = sha.group(1) if sha else 'None'
            h1 = re.search(r'<h1[^>]*>(.*?)</h1>', body, re.DOTALL)
            h1_val = re.sub(r'<[^>]+>', '', h1.group(1)).strip() if h1 else 'None'
            print(f'{u}: sha={sha_val} | h1={h1_val[:50]}')
    except Exception as e:
        print(f'{u}: Error {e}')
