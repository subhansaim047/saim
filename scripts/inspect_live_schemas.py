import urllib.request
import json
import ssl
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    'https://www.saimdev.site/',
    'https://www.saimdev.site/about',
    'https://www.saimdev.site/contact',
    'https://www.saimdev.site/tools',
    'https://www.saimdev.site/tools/ppds-label-generator',
    'https://www.saimdev.site/services/takeaway-web-design',
    'https://www.saimdev.site/food-safety-templates/freezer-temperature-chart',
    'https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist'
]

print("=== CHECKING SCHEMA JSON-LD ON LIVE PAGES ===")
for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        resp = urllib.request.urlopen(req, context=ctx)
        soup = BeautifulSoup(resp.read().decode('utf-8'), 'html.parser')
        scripts = soup.find_all('script', type='application/ld+json')
        print(f"\nURL: {url}")
        print(f"Total ld+json scripts: {len(scripts)}")
        for idx, s in enumerate(scripts):
            try:
                data = json.loads(s.string)
                stype = data.get('@type', 'UNKNOWN')
                sname = data.get('name') or data.get('headline') or 'NO_NAME'
                print(f"  [{idx+1}] @type: {stype} | Name: {sname[:45]}")
            except Exception as ex:
                print(f"  [{idx+1}] JSON PARSE ERROR: {ex}")
    except Exception as e:
        print(f"ERROR: {url} -> {e}")
