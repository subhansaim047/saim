import os
import sys
import json
import re
import urllib.request
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
live_domain = "https://www.saimdev.site"

with open(os.path.join(base_dir, "public/sitemap.xml"), "r", encoding="utf-8") as f:
    sitemap_xml = f.read()

sitemap_urls = re.findall(r'<loc>(.*?)</loc>', sitemap_xml)
print(f"Total sitemap URLs: {len(sitemap_urls)}")

legal_pages = [
    "/privacy",
    "/terms",
    "/disclaimer",
    "/cookie-policy"
]

# We will inspect both local server HTML in .next/server/app/ and live HTTP where possible
# First let's map URL path to compiled HTML file
def url_to_html_path(url):
    path = url.replace(live_domain, "").strip("/")
    if path == "":
        return os.path.join(base_dir, ".next/server/app/index.html")
    # check exact
    p1 = os.path.join(base_dir, f".next/server/app/{path}.html")
    if os.path.exists(p1):
        return p1
    p2 = os.path.join(base_dir, f".next/server/app/{path}/index.html")
    if os.path.exists(p2):
        return p2
    return None

results = []
titles_seen = {}
descs_seen = {}
images_to_check = set()

all_urls = list(sitemap_urls) + [live_domain + lp for lp in legal_pages]

print(f"Auditing total {len(all_urls)} URLs...")

for url in all_urls:
    is_legal = any(lp in url for lp in legal_pages)
    in_sitemap = url in sitemap_urls
    rel_path = url.replace(live_domain, "")
    html_file = url_to_html_path(url)
    
    if not html_file or not os.path.exists(html_file):
        results.append({
            "url": url,
            "error": "HTML file not found in build",
            "html_file": html_file
        })
        continue
        
    with open(html_file, "r", encoding="utf-8") as f:
        html = f.read()
        
    soup = BeautifulSoup(html, "html.parser")
    
    # Title
    t_tag = soup.find("title")
    title = t_tag.get_text().strip() if t_tag else ""
    title_len = len(title)
    
    # Meta Description
    m_tag = soup.find("meta", attrs={"name": "description"})
    desc = m_tag.get("content", "").strip() if m_tag else ""
    desc_len = len(desc)
    
    # H1
    h1_tags = soup.find_all("h1")
    h1_count = len(h1_tags)
    h1_text = [h.get_text().strip() for h in h1_tags]
    
    # Canonical
    c_tag = soup.find("link", rel="canonical")
    canonical = c_tag.get("href", "").strip() if c_tag else ""
    
    # Robots meta
    r_tag = soup.find("meta", attrs={"name": "robots"})
    robots = r_tag.get("content", "").strip() if r_tag else "index, follow"
    
    # OG Tags
    og = {}
    for tag in soup.find_all("meta"):
        prop = tag.get("property", "")
        if prop.startswith("og:"):
            og[prop] = tag.get("content", "")
            
    # Twitter Tags
    twitter = {}
    for tag in soup.find_all("meta"):
        name = tag.get("name", "")
        if name.startswith("twitter:"):
            twitter[name] = tag.get("content", "")
            
    if "og:image" in og and og["og:image"]:
        images_to_check.add(og["og:image"])
    if "twitter:image" in twitter and twitter["twitter:image"]:
        images_to_check.add(twitter["twitter:image"])
        
    # JSON-LD
    json_lds = []
    schema_types = []
    has_reviews_or_ratings = False
    faq_questions_in_schema = []
    
    state = {"has_reviews_or_ratings": False}
    faq_questions_in_schema = []
    
    def extract_types(obj):
        if isinstance(obj, dict):
            if "@type" in obj:
                schema_types.append(obj["@type"])
            if "aggregateRating" in obj or "review" in obj or "ratingValue" in obj:
                state["has_reviews_or_ratings"] = True
            if obj.get("@type") == "FAQPage" and "mainEntity" in obj:
                for q in obj["mainEntity"]:
                    if isinstance(q, dict) and "name" in q:
                        faq_questions_in_schema.append(q["name"])
            for v in obj.values():
                extract_types(v)
        elif isinstance(obj, list):
            for item in obj:
                extract_types(item)

    for script in soup.find_all("script", type="application/ld+json"):
        raw_json = script.get_text()
        try:
            parsed = json.loads(raw_json)
            json_lds.append(parsed)
            extract_types(parsed)
        except Exception as e:
            schema_types.append(f"INVALID_JSON: {e}")
            
    # Check visible FAQs on page
    visible_faq_headings = []
    for h in soup.find_all(["h2", "h3", "h4", "button", "dt"]):
        txt = h.get_text().strip()
        if "?" in txt:
            visible_faq_headings.append(txt)
            
    res = {
        "url": url,
        "is_legal": is_legal,
        "in_sitemap": in_sitemap,
        "title": title,
        "title_len": title_len,
        "desc": desc,
        "desc_len": desc_len,
        "h1_count": h1_count,
        "h1_text": h1_text,
        "canonical": canonical,
        "robots": robots,
        "og": og,
        "twitter": twitter,
        "schema_types": schema_types,
        "has_reviews_or_ratings": state["has_reviews_or_ratings"],
        "faq_schema_count": len(faq_questions_in_schema),
        "visible_faq_count": len(visible_faq_headings)
    }
    
    results.append(res)
    
    # Title uniqueness check
    if not is_legal and title:
        titles_seen.setdefault(title, []).append(url)
    if not is_legal and desc:
        descs_seen.setdefault(desc, []).append(url)

out_file = os.path.join(base_dir, "audit/qa_audit_results.json")
os.makedirs(os.path.dirname(out_file), exist_ok=True)
with open(out_file, "w", encoding="utf-8") as f:
    json.dump({
        "results": results,
        "duplicate_titles": {k: v for k, v in titles_seen.items() if len(v) > 1},
        "duplicate_descs": {k: v for k, v in descs_seen.items() if len(v) > 1},
        "images_to_check": list(images_to_check)
    }, f, indent=2)

print(f"Audit completed. Output written to {out_file}")
print(f"Total duplicate titles: {len([k for k, v in titles_seen.items() if len(v) > 1])}")
print(f"Total duplicate descriptions: {len([k for k, v in descs_seen.items() if len(v) > 1])}")
print(f"Total images to verify: {len(images_to_check)}")
