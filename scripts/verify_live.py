import urllib.request
import re
import ssl
import json
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

test_targets = [
    # Core Silo A: Small Business & Takeaway Web Dev
    ("Homepage", "https://www.saimdev.site/"),
    ("Takeaway Web Design", "https://www.saimdev.site/services/takeaway-web-design"),
    ("Next.js Developer UK", "https://www.saimdev.site/nextjs-developer-uk"),
    ("Services Hub", "https://www.saimdev.site/services"),
    ("Case Studies", "https://www.saimdev.site/case-studies"),
    ("Technologies", "https://www.saimdev.site/technologies"),
    ("Demos", "https://www.saimdev.site/demos"),
    ("About Page", "https://www.saimdev.site/about"),
    ("Contact Page", "https://www.saimdev.site/contact"),

    # Silo B: Food Safety & Commercial Kitchen Hub
    ("Tools Hub", "https://www.saimdev.site/tools"),
    ("PPDS Label Generator", "https://www.saimdev.site/tools/ppds-label-generator"),
    ("Food Allergen Chart", "https://www.saimdev.site/food-safety-templates/food-allergen-chart"),
    ("Freezer Temp Chart", "https://www.saimdev.site/food-safety-templates/freezer-temperature-chart"),
    ("Allergy Matrix", "https://www.saimdev.site/food-safety-templates/allergy-matrix"),

    # Blog & Content Authority
    ("Blogs Hub", "https://www.saimdev.site/blogs"),
    ("Cooling Guide Blog", "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide"),
    ("Natasha's Law Blog", "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide"),
    ("5-Star Hygiene Blog", "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist"),

    # Utility / Legal (Must have noindex, follow)
    ("Privacy Policy", "https://www.saimdev.site/privacy"),
    ("Cookie Policy", "https://www.saimdev.site/cookie-policy"),
    ("Terms of Service", "https://www.saimdev.site/terms"),
    ("Disclaimer", "https://www.saimdev.site/disclaimer"),
]

results = []
print(f"=== INITIATING LIVE VERIFICATION FOR SAIMDEV.SITE ===")

for label, url in test_targets:
    try:
        req = urllib.request.Request(url, headers=headers)
        start = time.time()
        with urllib.request.urlopen(req, timeout=12, context=ctx) as resp:
            latency_ms = int((time.time() - start) * 1000)
            status = resp.status
            body = resp.read().decode('utf-8', errors='ignore')
            
            title_m = re.search(r'<title>(.*?)</title>', body, re.IGNORECASE)
            title = title_m.group(1).strip() if title_m else ""

            desc_m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\']', body, re.IGNORECASE)
            desc = desc_m.group(1).strip() if desc_m else ""

            robots_m = re.search(r'<meta[^>]*name=["\']robots["\'][^>]*content=["\']([^"\']*)["\']', body, re.IGNORECASE)
            robots = robots_m.group(1).strip() if robots_m else "index, follow"

            canonical_m = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']*)["\']', body, re.IGNORECASE)
            canonical = canonical_m.group(1).strip() if canonical_m else ""

            h1_count = len(re.findall(r'<h1\b[^>]*>', body, re.IGNORECASE))
            has_schema = '<script type="application/ld+json"' in body

            results.append({
                "label": label,
                "url": url,
                "status": status,
                "latency_ms": latency_ms,
                "title": title,
                "title_len": len(title),
                "desc_len": len(desc),
                "robots": robots,
                "canonical": canonical,
                "h1_count": h1_count,
                "has_schema": has_schema,
            })
            print(f"[OK] {label:22} | HTTP {status} ({latency_ms}ms) | Title: {len(title)}c | Desc: {len(desc)}c | H1: {h1_count} | Robots: {robots}")
    except Exception as e:
        print(f"[FAIL] {label:22} | {e}")

# Check robots.txt and sitemap.xml
print("\n=== CHECKING SITEMAP.XML & ROBOTS.TXT ===")
try:
    with urllib.request.urlopen(urllib.request.Request("https://www.saimdev.site/robots.txt", headers=headers), timeout=10, context=ctx) as resp:
        txt = resp.read().decode('utf-8')
        print(f"robots.txt HTTP {resp.status} - Content length: {len(txt)}")
        print(f"Has Sitemap directive: {'Sitemap:' in txt or 'sitemap:' in txt}")
except Exception as e:
    print(f"robots.txt error: {e}")

try:
    with urllib.request.urlopen(urllib.request.Request("https://www.saimdev.site/sitemap.xml", headers=headers), timeout=10, context=ctx) as resp:
        sitemap_xml = resp.read().decode('utf-8')
        locs = re.findall(r'<loc>(.*?)</loc>', sitemap_xml)
        print(f"sitemap.xml HTTP {resp.status} - Total indexed URLs: {len(locs)}")
        noindexed_found = [u for u in locs if any(x in u for x in ['privacy', 'cookie-policy', 'terms', 'disclaimer'])]
        print(f"Noindexed legal pages found in sitemap: {len(noindexed_found)}")
        if noindexed_found:
            print(f"  Note: Vercel may be propagating recent deployment ab4549f. Found: {noindexed_found}")
except Exception as e:
    print(f"sitemap.xml error: {e}")

print(f"\nAudit complete. Total checked targets: {len(results)}")
