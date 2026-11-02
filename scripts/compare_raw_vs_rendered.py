import urllib.request
import re
import json
import ssl
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BeyondSEO/2.9.1 (Audit-Only Comparison)'}

test_routes = [
    "https://www.saimdev.site/",
    "https://www.saimdev.site/services",
    "https://www.saimdev.site/services/takeaway-web-design",
    "https://www.saimdev.site/nextjs-developer-uk",
    "https://www.saimdev.site/technologies",
    "https://www.saimdev.site/case-studies",
    "https://www.saimdev.site/blogs",
    "https://www.saimdev.site/blog/why-small-business-needs-website-2026",
    "https://www.saimdev.site/tools",
    "https://www.saimdev.site/food-safety-templates/allergy-matrix",
    "https://www.saimdev.site/food-safety-templates/haccp-plan-builder",
    "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide",
    "https://www.saimdev.site/invalid-test-404-check"
]

comparison_results = {}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    for url in test_routes:
        print(f"Comparing: {url}")
        # 1. Fetch raw server HTML
        raw_html = ""
        raw_status = 0
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=12, context=ctx) as resp:
                raw_status = resp.status
                raw_html = resp.read().decode('utf-8', errors='ignore')
        except urllib.error.HTTPError as he:
            raw_status = he.code
            raw_html = he.read().decode('utf-8', errors='ignore')
        except Exception as e:
            raw_html = ""

        raw_soup = BeautifulSoup(raw_html, 'html.parser')

        # 2. Rendered in Headless Chromium
        rendered_status = 0
        rendered_html = ""
        try:
            res = page.goto(url, wait_until='networkidle', timeout=15000)
            rendered_status = res.status if res else 0
            page.wait_for_timeout(1000)
            rendered_html = page.content()
        except Exception as e:
            rendered_status = 0
            rendered_html = page.content() if page else ""

        rendered_soup = BeautifulSoup(rendered_html, 'html.parser')

        # Compare Key Elements
        # H1
        raw_h1 = [h.get_text().strip() for h in raw_soup.find_all('h1')]
        rend_h1 = [h.get_text().strip() for h in rendered_soup.find_all('h1')]

        # Headings H2
        raw_h2_count = len(raw_soup.find_all('h2'))
        rend_h2_count = len(rendered_soup.find_all('h2'))

        # Title
        raw_title = raw_soup.find('title').get_text().strip() if raw_soup.find('title') else ""
        rend_title = rendered_soup.find('title').get_text().strip() if rendered_soup.find('title') else ""

        # Meta description
        raw_desc = raw_soup.find('meta', attrs={'name': 'description'})
        raw_desc = raw_desc['content'].strip() if raw_desc and raw_desc.get('content') else ""
        rend_desc = rendered_soup.find('meta', attrs={'name': 'description'})
        rend_desc = rend_desc['content'].strip() if rend_desc and rend_desc.get('content') else ""

        # Canonical
        raw_canon = raw_soup.find('link', attrs={'rel': 'canonical'})
        raw_canon = raw_canon['href'].strip() if raw_canon and raw_canon.get('href') else ""
        rend_canon = rendered_soup.find('link', attrs={'rel': 'canonical'})
        rend_canon = rend_canon['href'].strip() if rend_canon and rend_canon.get('href') else ""

        # JSON-LD count
        raw_schemas = len(raw_soup.find_all('script', type='application/ld+json'))
        rend_schemas = len(rendered_soup.find_all('script', type='application/ld+json'))

        # Internal Links count
        raw_links = len(raw_soup.find_all('a', href=True))
        rend_links = len(rendered_soup.find_all('a', href=True))

        # Words count in main body
        raw_words = len(re.findall(r'\b\w+\b', raw_soup.get_text()))
        rend_words = len(re.findall(r'\b\w+\b', rendered_soup.get_text()))

        comparison_results[url] = {
            "url": url,
            "raw_status": raw_status,
            "rendered_status": rendered_status,
            "raw_title": raw_title,
            "rendered_title": rend_title,
            "raw_desc": raw_desc,
            "rendered_desc": rend_desc,
            "raw_canonical": raw_canon,
            "rendered_canonical": rend_canon,
            "raw_h1": raw_h1,
            "rendered_h1": rend_h1,
            "raw_h2_count": raw_h2_count,
            "rendered_h2_count": rend_h2_count,
            "raw_jsonld_blocks": raw_schemas,
            "rendered_jsonld_blocks": rend_schemas,
            "raw_links_count": raw_links,
            "rendered_links_count": rend_links,
            "raw_words": raw_words,
            "rendered_words": rend_words,
            "js_dependent_content_gap": rend_words - raw_words
        }

    browser.close()

out_file = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\raw_vs_rendered_comparison.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(comparison_results, f, indent=2)

print(f"Saved raw vs rendered comparison to {out_file}")
