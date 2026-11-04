import urllib.request
import json
import time

all_collections = []
page = 1

while True:
    url = f'https://www.thejacketmaker.pk/collections.json?limit=250&page={page}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            cols = data.get('collections', [])
            if not cols:
                break
            all_collections.extend(cols)
            print(f"Page {page}: fetched {len(cols)} collections (Total so far: {len(all_collections)})")
            page += 1
            time.sleep(0.5)
    except Exception as e:
        print(f"Error on page {page}: {e}")
        break

print(f"\nGRAND TOTAL COLLECTIONS ON STORE: {len(all_collections)}")

with open('audit/all_store_collections.json', 'w', encoding='utf-8') as f:
    json.dump([{'id': c['id'], 'title': c['title'], 'handle': c['handle']} for c in all_collections], f, indent=2)

print("Saved to audit/all_store_collections.json")
