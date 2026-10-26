import os
import re
import json
import xml.etree.ElementTree as ET
from bs4 import BeautifulSoup

SITEMAP_PATH = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\public\sitemap.xml"
APP_BUILD_DIR = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\.next\server\app"

tree = ET.parse(SITEMAP_PATH)
root = tree.getroot()
namespace = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
urls = [elem.text.strip() for elem in root.findall(".//ns:loc", namespace)]

print(f"Total sitemap URLs to audit: {len(urls)}")

def url_to_html_path(url):
    path = url.replace("https://www.saimdev.site", "").strip("/")
    if path == "":
        return os.path.join(APP_BUILD_DIR, "index.html")
    # check if path.html exists
    direct_html = os.path.join(APP_BUILD_DIR, path + ".html")
    if os.path.exists(direct_html):
        return direct_html
    nested_html = os.path.join(APP_BUILD_DIR, path, "index.html")
    if os.path.exists(nested_html):
        return nested_html
    # Try looking in subfolders
    parts = path.split("/")
    sub_html = os.path.join(APP_BUILD_DIR, *parts) + ".html"
    if os.path.exists(sub_html):
        return sub_html
    return None

audit_results = []
all_internal_links = {u: set() for u in urls}

for u in urls:
    html_file = url_to_html_path(u)
    if not html_file or not os.path.exists(html_file):
        audit_results.append({
            "url": u,
            "status": 404,
            "error": "HTML not found on disk"
        })
        continue
    
    with open(html_file, "r", encoding="utf-8") as f:
        html_content = f.read()
    
    soup = BeautifulSoup(html_content, "html.parser")
    
    # 1. Title
    title_tag = soup.find("title")
    title = title_tag.text.strip() if title_tag else ""
    title_len = len(title)
    
    # 2. Meta description
    meta_desc_tag = soup.find("meta", attrs={"name": "description"})
    meta_desc = meta_desc_tag["content"].strip() if meta_desc_tag and "content" in meta_desc_tag.attrs else ""
    desc_len = len(meta_desc)
    
    # 3. Robots
    robots_tag = soup.find("meta", attrs={"name": "robots"})
    robots_meta = robots_tag["content"].strip() if robots_tag and "content" in robots_tag.attrs else "index, follow (implicit)"
    
    # 4. Canonical
    canonical_tag = soup.find("link", attrs={"rel": "canonical"})
    canonical = canonical_tag["href"].strip() if canonical_tag and "href" in canonical_tag.attrs else ""
    
    # 5. H1
    h1_tags = [h.text.strip() for h in soup.find_all("h1")]
    h1 = h1_tags[0] if h1_tags else ""
    h1_count = len(h1_tags)
    
    # 6. H2
    h2_tags = [h.text.strip() for h in soup.find_all("h2")]
    
    # 7. Word count of text
    text_content = soup.get_text(separator=" ", strip=True)
    word_count = len(text_content.split())
    
    # 8. Schema markup
    schemas = []
    for s in soup.find_all("script", attrs={"type": "application/ld+json"}):
        try:
            parsed = json.loads(s.string) if s.string else {}
            stype = parsed.get("@type", "Unknown")
            schemas.append(stype)
        except Exception:
            schemas.append("Invalid JSON-LD")
            
    # 9. Outbound internal links
    outbound = set()
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if href.startswith("/"):
            # Normalize
            clean_href = "https://www.saimdev.site" + href.split("#")[0].rstrip("/")
            if clean_href == "https://www.saimdev.site":
                clean_href = "https://www.saimdev.site/"
            outbound.add(clean_href)
        elif href.startswith("https://www.saimdev.site"):
            clean_href = href.split("#")[0].rstrip("/")
            if clean_href == "https://www.saimdev.site":
                clean_href = "https://www.saimdev.site/"
            outbound.add(clean_href)
            
    all_internal_links[u] = outbound
    
    # 10. Images & Alt
    images = soup.find_all("img")
    images_missing_alt = [img.get("src", "") for img in images if not img.get("alt") or img.get("alt").strip() == ""]
    
    # 11. OG & Twitter
    og_title = soup.find("meta", property="og:title")
    og_title_val = og_title["content"].strip() if og_title and "content" in og_title.attrs else ""
    
    audit_results.append({
        "url": u,
        "status": 200,
        "title": title,
        "title_len": title_len,
        "meta_desc": meta_desc,
        "desc_len": desc_len,
        "canonical": canonical,
        "robots": robots_meta,
        "h1": h1,
        "h1_count": h1_count,
        "h2_count": len(h2_tags),
        "word_count": word_count,
        "schemas": schemas,
        "outbound_count": len(outbound),
        "images_missing_alt_count": len(images_missing_alt),
        "has_og_title": bool(og_title_val)
    })

# Compute inbound internal links
inbound_counts = {u: 0 for u in urls}
for source_url, out_set in all_internal_links.items():
    for target in out_set:
        if target in inbound_counts and target != source_url:
            inbound_counts[target] += 1

for res in audit_results:
    u = res["url"]
    res["inbound_count"] = inbound_counts.get(u, 0)

with open(r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\rendered_seo_audit.json", "w", encoding="utf-8") as f:
    json.dump(audit_results, f, indent=2)

print("Rendered SEO audit saved successfully!")

# Summary print
short_titles = [r for r in audit_results if r.get("title_len", 0) < 40 or r.get("title_len", 0) > 65]
short_descs = [r for r in audit_results if r.get("desc_len", 0) < 130 or r.get("desc_len", 0) > 165]
zero_inbound = [r for r in audit_results if r.get("inbound_count", 0) == 0]
h1_issues = [r for r in audit_results if r.get("h1_count", 0) != 1]

print(f"Summary:")
print(f"URLs with title <40 or >65 chars: {len(short_titles)}")
print(f"URLs with desc <130 or >165 chars: {len(short_descs)}")
print(f"URLs with 0 internal inbound links (Orphan): {len(zero_inbound)}")
print(f"URLs with H1 != 1: {len(h1_issues)}")
