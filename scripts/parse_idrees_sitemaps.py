import urllib.request
import xml.etree.ElementTree as ET
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

sitemap_urls = [
    "https://idreesleather.com/sitemap_products_1.xml?from=10324100775993&to=10371105718329",
    "https://idreesleather.com/sitemap_pages_1.xml?from=165821513785&to=166444302393",
    "https://idreesleather.com/sitemap_collections_1.xml?from=490662297657&to=491516166201",
    "https://idreesleather.com/sitemap_blogs_1.xml"
]

all_urls = {
    'products': [],
    'pages': [],
    'collections': [],
    'blogs': []
}

for sm_url in sitemap_urls:
    category = 'products' if 'products' in sm_url else 'pages' if 'pages' in sm_url else 'collections' if 'collections' in sm_url else 'blogs'
    try:
        req = urllib.request.Request(sm_url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            xml_data = resp.read()
            root = ET.fromstring(xml_data)
            # xmlns namespace
            ns = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
            for url_tag in root.findall('ns:url', ns):
                loc = url_tag.find('ns:loc', ns)
                if loc is not None and loc.text:
                    all_urls[category].append(loc.text)
            print(f"Loaded {len(all_urls[category])} URLs for {category}")
    except Exception as e:
        print(f"Error fetching {sm_url}: {e}")

with open("audit/idrees_full_sitemap_urls.json", "w", encoding="utf-8") as f:
    json.dump(all_urls, f, indent=2)

total = sum(len(v) for v in all_urls.values())
print(f"TOTAL URLs across all site categories: {total}")
