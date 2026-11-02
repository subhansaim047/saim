import os
import sys
import json
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

ARTICLES = [
    {
        "slug": "why-small-business-needs-website-2026",
        "file": ".next/server/app/blog/why-small-business-needs-website-2026.html",
        "url": "/blog/why-small-business-needs-website-2026",
        "expected_links": [
            ("/blogs", "return to the Saim Dev blog"),
            ("/services", "fixed-price website development"),
            ("/nextjs-developer-uk", "Next.js websites for UK businesses"),
            ("/case-studies", "website case studies"),
            ("/contact", "discuss your website project"),
        ]
    },
    {
        "slug": "free-website-for-local-business",
        "file": ".next/server/app/blog/free-website-for-local-business.html",
        "url": "/blog/free-website-for-local-business",
        "expected_links": [
            ("/blogs", "return to the Saim Dev blog"),
            ("/services", "fixed-price website development"),
            ("/case-studies", "website case studies"),
            ("/contact", "discuss your website project"),
        ]
    },
    {
        "slug": "50-percent-off-agency-launch",
        "file": ".next/server/app/blog/50-percent-off-agency-launch.html",
        "url": "/blog/50-percent-off-agency-launch",
        "expected_links": [
            ("/blogs", "return to the Saim Dev blog"),
            ("/services", "fixed-price website development"),
            ("/nextjs-developer-uk", "Next.js websites for UK businesses"),
            ("/contact", "discuss your website project"),
        ]
    }
]

print("=== RAW SERVER HTML AUDIT FOR 3 BLOG ARTICLES ===")

for art in ARTICLES:
    html_path = os.path.join(base_dir, art["file"])
    if not os.path.exists(html_path):
        print(f"ERROR: HTML file not found: {html_path}")
        continue
    
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    soup = BeautifulSoup(html, "html.parser")
    
    title = soup.find("title").get_text().strip() if soup.find("title") else ""
    desc_meta = soup.find("meta", attrs={"name": "description"})
    desc = desc_meta["content"].strip() if desc_meta and desc_meta.get("content") else ""
    canon_link = soup.find("link", attrs={"rel": "canonical"})
    canon = canon_link["href"].strip() if canon_link else ""
    h1s = [h.get_text().strip() for h in soup.find_all("h1")]
    
    # Schemas
    schemas = []
    for s in soup.find_all("script", type="application/ld+json"):
        try:
            d = json.loads(s.string)
            if isinstance(d, dict) and "@type" in d:
                schemas.append(d["@type"])
            elif isinstance(d, list):
                schemas.extend([x.get("@type") for x in d if isinstance(x, dict)])
        except:
            pass
    
    # All <a> links
    links = []
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        text = " ".join(a.get_text().split())
        links.append((href, text))
    
    print(f"\n------------------------------------------------------------")
    print(f"ARTICLE: {art['url']}")
    print(f"Title: {title} ({len(title)}c)")
    print(f"Description: {desc} ({len(desc)}c)")
    print(f"Canonical: {canon}")
    print(f"H1 Count: {len(h1s)} | H1: \"{h1s[0] if h1s else 'NONE'}\"")
    print(f"Validated Schemas: {schemas}")
    print(f"Total HTML <a> links: {len(links)}")
    
    for req_href, req_anchor_hint in art["expected_links"]:
        matched = [(h, t) for h, t in links if req_href == h or (req_href == '/blogs' and '/blogs' in h)]
        if matched:
            print(f"  [PASS] Link to {req_href}:")
            for m_href, m_text in matched:
                print(f"         href=\"{m_href}\" | text=\"{m_text}\"")
        else:
            print(f"  [FAIL] Missing required link to {req_href}!")

