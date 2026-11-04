import urllib.request
import json

handles = [
    'womens-bomber-jackets',
    'womens-biker-leather-jackets',
    'womens-suede-jackets',
    'womens-leather-vests',
    'womens-best-sellers',
    'womens-aviator-jackets',
    'womens-shearling-jackets',
    'womens-new-arrival',
    'mens-varsity-jackets',
    'mens-puffer-jackets',
    'mens-hooded-leather-jackets',
    'clearance-sale',
    'factory-seconds',
    'gifts-for-her'
]

for h in handles:
    url = f'https://www.thejacketmaker.pk/collections/{h}/products.json?limit=30'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            prods = data.get('products', [])
            print(f"Collection '{h}': {len(prods)} products -> First: {prods[0]['title'] if prods else 'None'}")
    except Exception as e:
        print(f"Collection '{h}': Error {e}")
