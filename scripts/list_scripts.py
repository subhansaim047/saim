from bs4 import BeautifulSoup
from urllib.parse import urlparse

with open("audit/idrees_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")
scripts = []
for s in soup.find_all("script"):
    src = s.get("src")
    if src:
        scripts.append(src)

shopify_scripts = [s for s in scripts if "idreesleather.com" in s or "shopify" in s]
print(f"Total scripts: {len(scripts)}")
print(f"Shopify/Idrees scripts: {len(shopify_scripts)}")
for s in shopify_scripts:
    print("  ", s)
