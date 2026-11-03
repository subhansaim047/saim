import os
import re
from bs4 import BeautifulSoup

def clean_html(file_path):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # 1. Remove iframes embedding the live site or third-party widgets
    for iframe in list(soup.find_all("iframe")):
        src = iframe.get("src", "")
        if "thejacketmaker" in src or "zoko" in src or "attn.tv" in src or "gotolstoy" in src:
            iframe.decompose()

    # 2. Remove any remaining script or link referencing zoko or attn
    for s in list(soup.find_all("script")):
        src = s.get("src", "")
        text = s.string or ""
        if (src and ("zoko" in src or "attn.tv" in src or "awin" in src or "shop.app" in src)) or \
           (text and ("zoko" in text or "attn.tv" in text or "Awin" in text)):
            s.decompose()

    # 3. Save
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(str(soup))

def main():
    root_dir = "public/thejacketmaker"
    count = 0
    for root, _, files in os.walk(root_dir):
        for f in files:
            if f == "index.html":
                clean_html(os.path.join(root, f))
                count += 1
    print(f"Cleaned remaining iframes and external trackers in {count} HTML files!")

if __name__ == "__main__":
    main()
