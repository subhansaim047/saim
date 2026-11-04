import urllib.request
import json

url = 'https://www.thejacketmaker.pk/products.json?limit=50'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        prods = data.get('products', [])
        print(f"Total products returned in products.json: {len(prods)}")
        for p in prods[:10]:
            print(f"- {p.get('title')} ({p.get('handle')}) - {len(p.get('images', []))} images")
except Exception as e:
    print("Error:", e)
