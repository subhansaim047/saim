import os
import re

JS_DIR = "public/idreesleather/js"

for fname in os.listdir(JS_DIR):
    fpath = os.path.join(JS_DIR, fname)
    try:
        with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            if "checkout-web" in content or "portable-wallets" in content or "shopifycloud" in content:
                print(f"Found in JS file: {fname}")
                # find context
                for m in re.finditer(r'(?:checkout-web|portable-wallets|shopifycloud)', content):
                    start = max(0, m.start() - 60)
                    end = min(len(content), m.end() + 60)
                    print(f"   ... {repr(content[start:end])} ...")
    except Exception as e:
        pass
