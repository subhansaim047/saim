import urllib.request
import json

url = 'https://www.thejacketmaker.pk/collections.json?limit=50'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        cols = data.get('collections', [])
        print(f"Total collections returned in collections.json: {len(cols)}")
        for c in cols:
            print(f"- {c.get('title')} ({c.get('handle')})")
except Exception as e:
    print("Error:", e)
