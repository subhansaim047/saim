import subprocess
import json
import xml.etree.ElementTree as ET

def curl_get(url):
    cmd = [
        "curl.exe", "-s",
        "-H", "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
        "-H", "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        url
    ]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return res.stdout.decode('utf-8', errors='ignore')

# 1. Sitemap check
sitemap_xml = curl_get("https://www.thejacketmaker.pk/sitemap.xml")
print("Sitemap length:", len(sitemap_xml))

sub_sitemaps = []
try:
    root = ET.fromstring(sitemap_xml)
    for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
        sub_sitemaps.append(loc.text)
    print("Sub-sitemaps found:", len(sub_sitemaps))
    for sm in sub_sitemaps:
        print(" -", sm)
except Exception as e:
    print("Sitemap parse error:", e)

# 2. Products.json check
products_json = curl_get("https://www.thejacketmaker.pk/products.json?limit=10")
print("Products json length:", len(products_json))
try:
    pj = json.loads(products_json)
    prods = pj.get("products", [])
    print(f"Products.json sample count: {len(prods)}")
    if prods:
        print("Sample product:", prods[0]["title"], "handle:", prods[0]["handle"])
except Exception as e:
    print("Products.json error:", e)

# 3. Collections.json check
collections_json = curl_get("https://www.thejacketmaker.pk/collections.json?limit=10")
print("Collections json length:", len(collections_json))
try:
    cj = json.loads(collections_json)
    cols = cj.get("collections", [])
    print(f"Collections.json sample count: {len(cols)}")
    if cols:
        print("Sample collection:", cols[0]["title"], "handle:", cols[0]["handle"])
except Exception as e:
    print("Collections.json error:", e)
