import urllib.request
import json
import time

collections = [
    ('womens-leather-jackets', "Women's Leather Jackets"),
    ('women-bomber-jackets', "Women's Leather Bomber Jackets"),
    ('womens-biker-leather-jackets', "Women's Leather Biker Jackets"),
    ('womens-suede-jackets', "Women's Suede Jackets"),
    ('best-leather-jackets-women', "Women's Best Selling Leather Jackets"),
    ('women-leather-vests', "Women's Leather Vests"),
    ('women-blazers', "Women's Leather Blazers"),
    ('womens-aviator-jackets', "Women's Aviator Jackets"),
    ('women-leather-coats', "Women's Leather Coats"),
    ('women-winter-coats', "Women's Trench & Winter Coats"),
    ('womens-shearling-jackets', "Women's Shearling Jackets & Coats"),
    ('women-varsity-jackets', "Women's Varsity Jackets"),
    ('womens-new-arrival', "Women's New Arrivals"),
    ('mens-leather-jackets', "Men's Leather Jackets"),
    ('mens-bomber-jackets', "Men's Leather Bomber Jackets"),
    ('mens-biker-leather-jackets', "Men's Leather Biker Jackets"),
    ('mens-suede-jackets', "Men's Suede Jackets"),
    ('mens-varsity-jacket', "Men's Varsity Jackets"),
    ('mens-leather-vests', "Men's Leather Vests"),
    ('mens-blazers', "Men's Leather Blazers"),
    ('mens-fur-shearling-jackets', "Men's Fur & Shearling Jackets"),
    ('mens-aviator-jackets', "Men's Aviator Jackets"),
    ('mens-winter-jackets', "Men's Winter Jackets"),
    ('mens-puffer-jackets', "Men's Puffer Jackets"),
    ('mens-black-leather-jackets-hood', "Men's Hooded Leather Jackets"),
    ('mens-best-sellers', "Men's Best Sellers"),
    ('mens-new-arrival', "Men's New Arrivals"),
    ('full-grain-leather-shoes-men', "Men's Leather Shoes"),
    ('full-grain-leather-bags', "Leather Bags"),
    ('full-grain-leather-backpacks', "Leather Backpacks"),
    ('full-full-grain-leather-wallets', "Leather Wallets"),
    ('clearance-sale', "Clearance Sale - Up to 50% Off"),
    ('gifts-for-him', "Gifts For Him"),
    ('gifts-for-her', "Gifts For Her")
]

results = {}

for handle, title in collections:
    url = f'https://www.thejacketmaker.pk/collections/{handle}/products.json?limit=50'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            prods = data.get('products', [])
            print(f"Fetched {len(prods)} products for {handle} ('{title}')")
            results[handle] = {
                'title': title,
                'handle': handle,
                'products': prods
            }
            time.sleep(0.3)
    except Exception as e:
        print(f"Error fetching {handle}: {e}")

with open('audit/collections_data.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print(f"\nAll done! Successfully saved {len(results)} collections into audit/collections_data.json")
