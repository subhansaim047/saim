import subprocess
import xml.etree.ElementTree as ET
import json
import os

def curl_get(url):
    cmd = [
        "curl.exe", "-s",
        "-H", "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
        url
    ]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return res.stdout.decode('utf-8', errors='ignore')

def parse_sitemap(url):
    xml_data = curl_get(url)
    urls = []
    try:
        root = ET.fromstring(xml_data)
        for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
            urls.append(loc.text)
    except Exception as e:
        print(f"Error parsing {url}: {e}")
    return urls

os.makedirs("audit", exist_ok=True)

# Parse pages
pages = parse_sitemap("https://www.thejacketmaker.pk/sitemap_pages_1.xml?from=123550335263&to=166100795679")
print(f"Total Pages found: {len(pages)}")

# Parse collections
collections = parse_sitemap("https://www.thejacketmaker.pk/sitemap_collections_1.xml?from=454609010975&to=520510832927")
print(f"Total Collections found: {len(collections)}")

# Parse products from product sitemaps
product_sitemaps = [
    "https://www.thejacketmaker.pk/sitemap_products_1.xml?from=8385321173279&to=10079785484575",
    "https://www.thejacketmaker.pk/sitemap_products_2.xml?from=10079785779487&to=10315404280095",
    "https://www.thejacketmaker.pk/sitemap_products_3.xml?from=10315428823327&to=10654758306079",
    "https://www.thejacketmaker.pk/sitemap_products_4.xml?from=10654771020063&to=10673450909983",
]

all_products = []
for psm in product_sitemaps:
    p_urls = parse_sitemap(psm)
    print(f"Products in {psm.split('?')[0].split('/')[-1]}: {len(p_urls)}")
    all_products.extend(p_urls)

print(f"Total Product URLs: {len(all_products)}")

sitemap_summary = {
    "pages": pages,
    "collections": collections,
    "products": all_products
}

with open("audit/tjm_sitemap_urls.json", "w", encoding="utf-8") as f:
    json.dump(sitemap_summary, f, indent=2)

print("Saved audit/tjm_sitemap_urls.json!")
