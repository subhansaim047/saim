import os
import re
import urllib.request
from bs4 import BeautifulSoup

JS_DIR = "public/idreesleather/js"
os.makedirs(JS_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
}

# Scan raw pages for any theme JS assets
needed_js = set()
for root, dirs, files in os.walk("audit/raw_pages"):
    for f in files:
        if f.endswith(".html"):
            with open(os.path.join(root, f), "r", encoding="utf-8") as fp:
                html = fp.read()
            for m in re.finditer(r'(?:https?:)?//idreesleather\.com/cdn/shop/t/3/assets/([\w\.-]+\.js)', html):
                needed_js.add(m.group(1))

print(f"Total theme JS files referenced across all raw pages: {len(needed_js)}")
existing = set(os.listdir(JS_DIR))
missing = [f for f in needed_js if f not in existing]
print(f"Already present: {len(needed_js) - len(missing)}, Missing: {len(missing)}")

for js_name in missing:
    url = f"https://idreesleather.com/cdn/shop/t/3/assets/{js_name}"
    dest = os.path.join(JS_DIR, js_name)
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            content = resp.read()
            with open(dest, "wb") as out:
                out.write(content)
            print(f"Downloaded: {js_name} ({len(content)} bytes)")
    except Exception as e:
        print(f"Failed {js_name}: {e}")

print(f"JS assets complete! Total in {JS_DIR}: {len(os.listdir(JS_DIR))}")
