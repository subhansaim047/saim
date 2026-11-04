from bs4 import BeautifulSoup
import re

with open("public/idreesleather/index.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

for i, s in enumerate(soup.find_all("script")):
    src = s.get("src", "")
    content = s.string or ""
    if "checkout" in content or "checkout" in src:
        print(f"Script #{i} matches 'checkout': src={src}")
        print(content[:200])
        print("---")
    if "shopify" in content or "Shopify" in content:
        # Check if it has cdn or cloud
        if "shopifycloud" in content or "cdn.shopify.com" in content:
            print(f"Script #{i} matches shopifycloud: src={src}")
            print(content[:200])
            print("---")
