import os
import json
import urllib.request
import ssl
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0'}
JS_DIR = "public/idreesleather/js"

with open('public/idreesleather/index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

im = soup.find('script', type='importmap')
if not im:
    print("No importmap found!")
    exit(1)

data = json.loads(im.string)
imports = data.get("imports", {})

new_imports = {}
for module_name, url in imports.items():
    clean_url = url.split("?")[0]
    fname = os.path.basename(clean_url)
    dest = os.path.join(JS_DIR, fname)
    
    if not os.path.exists(dest) or os.path.getsize(dest) == 0:
        download_url = url
        if download_url.startswith("//"):
            download_url = "https:" + download_url
        try:
            req = urllib.request.Request(download_url, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
                content = resp.read()
                with open(dest, "wb") as out:
                    out.write(content)
            print(f"Downloaded module {module_name} -> {fname}")
        except Exception as e:
            print(f"Failed to download {module_name} ({url}): {e}")
            # Stub if failed
            with open(dest, "w", encoding="utf-8") as out:
                out.write(f"// Stub for {module_name}\nexport default {{}};\n")
    else:
        print(f"Already have {fname} for {module_name}")

    new_imports[module_name] = f"/idreesleather/js/{fname}"

data["imports"] = new_imports
im.string = json.dumps(data, indent=2)

with open('public/idreesleather/index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Successfully rewritten importmap in index.html!")
