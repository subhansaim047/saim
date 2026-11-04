import urllib.request
import json
import time

all_products = []
page = 1

while True:
    url = f'https://www.thejacketmaker.pk/products.json?limit=250&page={page}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            prods = data.get('products', [])
            if not prods:
                break
            all_products.extend(prods)
            print(f"Page {page}: fetched {len(prods)} products (Total so far: {len(all_products)})")
            page += 1
            time.sleep(0.5)
    except Exception as e:
        print(f"Error on page {page}: {e}")
        break

print(f"\nGRAND TOTAL PRODUCTS ON STORE: {len(all_products)}")

# Save list of all product handles and titles
with open('audit/all_store_products.json', 'w', encoding='utf-8') as f:
    json.dump([{'id': p['id'], 'title': p['title'], 'handle': p['handle'], 'product_type': p.get('product_type')} for p in all_products], f, indent=2)

print("Saved to audit/all_store_products.json")
