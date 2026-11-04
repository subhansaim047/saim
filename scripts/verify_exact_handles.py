import urllib.request
import json

test_handles = [
    'women-bomber-jackets',
    'womens-biker-leather-jackets',
    'womens-suede-jackets',
    'best-leather-jackets-women',
    'women-leather-vests',
    'women-blazers',
    'womens-aviator-jackets',
    'women-leather-coats',
    'women-winter-coats',
    'womens-shearling-jackets',
    'women-varsity-jackets',
    'womens-new-arrival',
    'mens-varsity-jacket',
    'mens-puffer-jackets',
    'mens-black-leather-jackets-hood',
    'full-grain-leather-shoes-men',
    'full-grain-leather-bags',
    'full-grain-leather-backpacks',
    'full-full-grain-leather-wallets',
    'clearance-sale',
    'gifts-for-her'
]

for h in test_handles:
    url = f'https://www.thejacketmaker.pk/collections/{h}/products.json?limit=5'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            prods = data.get('products', [])
            print(f"Collection '{h}': {len(prods)} products -> First: {prods[0]['title'] if prods else 'Empty'}")
    except Exception as e:
        print(f"Collection '{h}': Error {e}")
