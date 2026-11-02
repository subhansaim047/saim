import os
import sys
import json
import urllib.request

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
with open(os.path.join(base_dir, "public/sitemap.xml"), "r", encoding="utf-8") as f:
    text = f.read()

import re
urls = re.findall(r'<loc>(.*?)</loc>', text)

print(f"=== CHECKING LIVE HTTP STATUS FOR ALL {len(urls)} SITEMAP URLS ===")

failed = []
passed = 0

for u in urls:
    try:
        req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
        res = urllib.request.urlopen(req, timeout=10)
        if res.status == 200:
            passed += 1
        else:
            failed.append((u, res.status))
    except Exception as e:
        failed.append((u, str(e)))

print(f"Passed: {passed} / {len(urls)} returned HTTP 200")
if failed:
    print(f"Failed ({len(failed)}):")
    for u, err in failed:
        print(f"  {u}: {err}")
else:
    print("ALL 48 SITEMAP URLS RETURN HTTP 200 ON LIVE SERVER")
