import os
import sys
import json
import re
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
live_domain = "https://www.saimdev.site"

with open(os.path.join(base_dir, "public/sitemap.xml"), "r", encoding="utf-8") as f:
    sitemap_xml = f.read()

sitemap_urls = re.findall(r'<loc>(.*?)</loc>', sitemap_xml)

def url_to_html_path(url):
    path = url.replace(live_domain, "").strip("/")
    if path == "":
        return os.path.join(base_dir, ".next/server/app/index.html")
    p1 = os.path.join(base_dir, f".next/server/app/{path}.html")
    if os.path.exists(p1):
        return p1
    p2 = os.path.join(base_dir, f".next/server/app/{path}/index.html")
    if os.path.exists(p2):
        return p2
    return None

faq_discrepancies = []
article_details = []
duplicate_schema_blocks = []

for url in sitemap_urls:
    html_file = url_to_html_path(url)
    if not html_file or not os.path.exists(html_file):
        continue
    with open(html_file, "r", encoding="utf-8") as f:
        html = f.read()
    soup = BeautifulSoup(html, "html.parser")
    
    # Check script tags
    scripts = soup.find_all("script", type="application/ld+json")
    script_texts = [s.get_text().strip() for s in scripts]
    if len(script_texts) != len(set(script_texts)):
        duplicate_schema_blocks.append((url, "Exact duplicate script block found"))
        
    for s in scripts:
        try:
            data = json.loads(s.get_text())
            # Check article
            def check_obj(obj):
                if isinstance(obj, dict):
                    t = obj.get("@type")
                    if t == "Article":
                        article_details.append({
                            "url": url,
                            "headline": obj.get("headline", ""),
                            "datePublished": obj.get("datePublished", ""),
                            "dateModified": obj.get("dateModified", ""),
                            "author": obj.get("author", {})
                        })
                    if t == "FAQPage":
                        schema_qs = [q.get("name", "") for q in obj.get("mainEntity", []) if isinstance(q, dict)]
                        # Check visible text for each question
                        for q in schema_qs:
                            # clean q
                            q_clean = q.strip().replace("’", "'").replace("&quot;", '"')
                            # check if question substring appears in html
                            first_few = q_clean[:30]
                            if first_few not in html:
                                faq_discrepancies.append((url, q))
                    for v in obj.values():
                        check_obj(v)
                elif isinstance(obj, list):
                    for item in obj:
                        check_obj(item)
            check_obj(data)
        except Exception as e:
            pass

print(f"=== SCHEMA & FAQ ALIGNMENT AUDIT ===")
print(f"Total articles found with Article schema: {len(article_details)}")
for a in article_details[:6]:
    author_name = a["author"].get("name") if isinstance(a["author"], dict) else str(a["author"])
    print(f"  Article: {a['url']}")
    print(f"    Published: {a['datePublished']} | Modified: {a['dateModified']} | Author: {author_name}")

print(f"\nDuplicate schema blocks across all pages: {len(duplicate_schema_blocks)}")
print(f"FAQ schema discrepancies (questions in schema missing from visible HTML): {len(faq_discrepancies)}")
if faq_discrepancies:
    for u, q in faq_discrepancies:
        print(f"  {u}: '{q}'")
else:
    print("ALL FAQ SCHEMA ENTITIES MATCH VISIBLE QUESTIONS ON PAGE")
