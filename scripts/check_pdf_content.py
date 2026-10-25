import urllib.request
import re

urls = [
    'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Freezer_temp_C.pdf',
    'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Four_safety_rules_C.pdf',
    'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Restaurant_opening_checklist.pdf'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        raw = urllib.request.urlopen(req).read()
        data = raw.decode('latin1', errors='ignore')
        matches = re.findall(r'.{0,40}(?:fooddocs|food-docs|food docs).{0,40}', data, re.IGNORECASE)
        print(f"=== {url.split('/')[-1]} ===")
        print(f"Found {len(matches)} matches")
        for m in matches[:5]:
            print('  ->', repr(m.strip()))
    except Exception as e:
        print('Error:', e)
