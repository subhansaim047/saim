import os
from bs4 import BeautifulSoup

count = 0
for root, dirs, files in os.walk("public/idreesleather"):
    for f in files:
        if f.endswith(".html"):
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8") as fp:
                html = fp.read()
            if "web-pixels" in html or "iframe" in html:
                soup = BeautifulSoup(html, "html.parser")
                changed = False
                for ifr in soup.find_all("iframe"):
                    src = ifr.get("src", "")
                    if "web-pixels" in src or "shopify" in src or "sandbox" in src:
                        ifr.decompose()
                        changed = True
                if changed:
                    with open(p, "w", encoding="utf-8") as fp:
                        fp.write(str(soup))
                    count += 1

print(f"Removed tracking iframes from {count} pages.")
