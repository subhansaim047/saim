import urllib.request
import re
import ssl
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BeyondSEO/2.9.1'}

PAGES = [
    ("Tools Hub", "https://www.saimdev.site/tools", "https://www.saimdev.site/og-tools.png"),
    ("Services", "https://www.saimdev.site/services", "https://www.saimdev.site/og-services.png"),
    ("Demos", "https://www.saimdev.site/demos", "https://www.saimdev.site/og-demos.png"),
    ("Contact", "https://www.saimdev.site/contact", "https://www.saimdev.site/og-contact.png"),
]

IMAGES = [
    "https://www.saimdev.site/og-tools.png",
    "https://www.saimdev.site/og-services.png",
    "https://www.saimdev.site/og-demos.png",
    "https://www.saimdev.site/og-contact.png",
]

print("=== CHECKING LIVE IMAGES ===")
for img_url in IMAGES:
    try:
        req = urllib.request.Request(img_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            content_type = resp.headers.get('Content-Type', '')
            content_length = resp.headers.get('Content-Length', '')
            print(f"[{resp.status}] {img_url} | Content-Type: {content_type} | Length: {content_length} bytes")
    except Exception as e:
        print(f"[FAIL] {img_url}: {e}")

print("\n=== CHECKING LIVE RAW HTML FOR OPEN GRAPH & TWITTER TAGS ===")
REQUIRED_TAGS = [
    'og:type',
    'og:title',
    'og:description',
    'og:url',
    'og:site_name',
    'og:image',
    'og:image:width',
    'og:image:height',
    'og:image:alt',
    'twitter:card',
    'twitter:title',
    'twitter:description',
    'twitter:image'
]

for label, page_url, expected_img in PAGES:
    try:
        req = urllib.request.Request(page_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            body = resp.read().decode('utf-8', errors='ignore')
            
            title_m = re.search(r'<title>(.*?)</title>', body)
            title = title_m.group(1) if title_m else ""

            desc_m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\']', body)
            desc = desc_m.group(1) if desc_m else ""

            canon_m = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']*)["\']', body)
            canon = canon_m.group(1) if canon_m else ""

            print(f"\n--- {label} ({page_url}) ---")
            print(f"Title: {title}")
            print(f"Description: {desc}")
            print(f"Canonical: {canon}")

            for t in REQUIRED_TAGS:
                if t.startswith('og:'):
                    pattern = rf'<meta[^>]*property=["\']{t}["\'][^>]*content=["\']([^"\']*)["\']'
                else:
                    pattern = rf'<meta[^>]*name=["\']{t}["\'][^>]*content=["\']([^"\']*)["\']'
                m = re.search(pattern, body)
                if m:
                    print(f"  [PASS] {t}: {m.group(1)}")
                else:
                    print(f"  [PENDING/FAIL] {t} not found yet in live response")
    except Exception as e:
        print(f"Error checking {page_url}: {e}")
