import os
import re
from bs4 import BeautifulSoup

with open("public/idreesleather/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace inline import of popover-polyfill
html = html.replace("//idreesleather.com/cdn/shop/t/3/assets/popover-polyfill.js?v=119029313658895111201792675552", "/idreesleather/js/popover-polyfill.js")
html = re.sub(r'[\'\"](?:https?:)?//idreesleather\.com/cdn/shop/t/3/assets/popover-polyfill\.js[^\'\"]*[\'\"]', '"/idreesleather/js/popover-polyfill.js"', html)

soup = BeautifulSoup(html, "html.parser")

# Fix preload / modulepreload links
for link in soup.find_all("link"):
    href = link.get("href", "")
    if "overflow-list.css" in href:
        link["href"] = "/idreesleather/css/overflow-list.css"
    elif "styles.css" in href:
        link["href"] = "/idreesleather/css/styles.css"
    elif "modulepreload" in link.get("rel", []):
        base_name = href.split("?")[0].split("/")[-1]
        link["href"] = f"/idreesleather/js/{base_name}"
    elif "idreesleather.com" in href:
        base_name = href.split("?")[0].split("/")[-1]
        if base_name.endswith(".js"):
            link["href"] = f"/idreesleather/js/{base_name}"
        elif base_name.endswith(".css"):
            link["href"] = f"/idreesleather/css/{base_name}"

# Remove any remaining iframes pointing to idreesleather or shopify sandbox
for iframe in soup.find_all("iframe"):
    src = iframe.get("src", "")
    if "idreesleather.com" in src or "shopify" in src:
        iframe.decompose()

# Remove web-pixel scripts or sandboxes
for script in soup.find_all("script"):
    src = script.get("src", "")
    text = script.string or ""
    if "web-pixel" in src or "custom-pixel" in src or "web-pixel" in text:
        script.decompose()

with open("public/idreesleather/index.html", "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Fixed all remaining references in public/idreesleather/index.html")
