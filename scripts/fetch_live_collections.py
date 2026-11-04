import urllib.request
import json
import xml.etree.ElementTree as ET

def fetch_url(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.read()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

# Check sitemap_collections_1.xml
data = fetch_url('https://www.thejacketmaker.pk/sitemap_collections_1.xml')
if data:
    root = ET.fromstring(data)
    urls = [elem.text for elem in root.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    print(f"Total collections in live sitemap: {len(urls)}")
    for u in urls:
        print(u)
else:
    print("Could not fetch sitemap_collections_1.xml")
