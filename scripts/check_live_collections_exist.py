import urllib.request

candidates = [
    'womens-leather-jackets',
    'womens-bomber-jackets',
    'womens-biker-jackets',
    'womens-biker-leather-jackets',
    'womens-suede-jackets',
    'womens-leather-vests',
    'womens-best-sellers',
    'womens-leather-coats',
    'womens-blazers',
    'womens-fur-shearling-jackets',
    'womens-aviator-jackets',
    'womens-trench-coats',
    'womens-puffer-jackets',
    'womens-shearling-jackets',
    'womens-new-arrival',
    'mens-varsity-jackets',
    'mens-puffer-jackets',
    'mens-hooded-leather-jackets',
    'clearance-sale'
]

for c in candidates:
    url = f'https://www.thejacketmaker.pk/collections/{c}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            print(f"EXISTS (200): {c}")
    except Exception as e:
        print(f"NOT FOUND ({e}): {c}")
