import json

try:
    with open('audit/tjm_sitemap_urls.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f"Total urls in tjm_sitemap_urls.json: {len(data)}")
    collections = [u for u in data if '/collections/' in u]
    products = [u for u in data if '/products/' in u]
    print(f"Collections count: {len(collections)}")
    print(f"Products count: {len(products)}")
    print("\nCollections sample:")
    for c in collections[:20]:
        print(c)
    print("\nProducts sample:")
    for p in products[:20]:
        print(p)
except Exception as e:
    print("Error:", e)
