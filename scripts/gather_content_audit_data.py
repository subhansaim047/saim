import os, sys, re, json
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
live_domain = "https://www.saimdev.site"

with open(os.path.join(base_dir, "public/sitemap.xml"), "r", encoding="utf-8") as f:
    sitemap = f.read()

urls = re.findall(r'<loc>(.*?)</loc>', sitemap)
legal_urls = [
    f"{live_domain}/privacy",
    f"{live_domain}/terms",
    f"{live_domain}/cookie-policy",
    f"{live_domain}/disclaimer"
]

all_urls = urls + [u for u in legal_urls if u not in urls]

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

page_data = []

for u in all_urls:
    p = url_to_html_path(u)
    if not p or not os.path.exists(p):
        continue
    with open(p, "r", encoding="utf-8") as f:
        html = f.read()
    
    soup = BeautifulSoup(html, "html.parser")
    
    title = soup.find("title").get_text(strip=True) if soup.find("title") else ""
    meta_desc = ""
    md = soup.find("meta", attrs={"name": "description"})
    if md and md.get("content"):
        meta_desc = md["content"].strip()
    
    h1s = [h.get_text(strip=True) for h in soup.find_all("h1")]
    h2s = [h.get_text(strip=True) for h in soup.find_all("h2")]
    h3s = [h.get_text(strip=True) for h in soup.find_all("h3")]
    
    # Strip scripts, styles, header, footer for main content text
    for tag in soup(["script", "style", "header", "footer", "nav"]):
        tag.decompose()
    
    full_text = soup.get_text(separator=" ", strip=True)
    words = full_text.split()
    word_count = len(words)
    
    # Check disclaimers and official sources
    has_disclaimer = bool(re.search(r"disclaimer|not a substitute for|does not replace", full_text, re.I))
    has_fsa = bool(re.search(r"food standards agency|fsa|sfbb|safer food, better business|haccp", full_text, re.I))
    
    page_data.append({
        "url": u,
        "title": title,
        "meta_desc": meta_desc,
        "h1": h1s[0] if h1s else "None",
        "h1_count": len(h1s),
        "h2_count": len(h2s),
        "h2s": h2s[:8],
        "h3_count": len(h3s),
        "word_count": word_count,
        "has_disclaimer": has_disclaimer,
        "has_fsa": has_fsa
    })

with open(os.path.join(base_dir, "audit/content_audit_raw.json"), "w", encoding="utf-8") as f:
    json.dump(page_data, f, indent=2, ensure_ascii=False)

print(f"Audited {len(page_data)} pages. Data saved to audit/content_audit_raw.json")
