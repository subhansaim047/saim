import urllib.request
import re
import json

competitors = [
    ("Cheap Web Designer", "https://cheapwebdesigner.co.uk/"),
    ("Finley Design (Takeaway Specialist)", "https://www.finleydesign.co.uk/"),
    ("Universal Web Design", "https://universalwebdesign.co.uk/"),
    ("Fixed Price Web", "https://fixedpriceweb.co.uk/"),
    ("Dial A Website", "https://dialawebsite.co.uk/")
]

results = []

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

for name, url in competitors:
    print(f"Analyzing {name} ({url})...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as response:
            status = response.status
            html = response.read().decode('utf-8', errors='ignore')
            
            title_m = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
            title = title_m.group(1).strip() if title_m else "N/A"
            
            desc_m = re.search(r'<meta[^>]*name=[\"\']description[\"\'][^>]*content=[\"\'](.*?)[\"\']', html, re.I | re.S)
            desc = desc_m.group(1).strip() if desc_m else "N/A"
            
            h1s = [re.sub(r'<[^>]+>', '', x).strip() for x in re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)]
            h2s = [re.sub(r'<[^>]+>', '', x).strip() for x in re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.I | re.S)]
            
            schemas = re.findall(r'<script type=[\"\']application/ld\+json[\"\'][^>]*>(.*?)</script>', html, re.I | re.S)
            schema_types = []
            for s in schemas:
                try:
                    data = json.loads(s)
                    if isinstance(data, dict):
                        schema_types.append(data.get("@type", "Unknown"))
                    elif isinstance(data, list):
                        for item in data:
                            if isinstance(item, dict):
                                schema_types.append(item.get("@type", "Unknown"))
                except:
                    pass
            
            # Detect CMS/tech
            tech = []
            if "wp-content" in html or "wp-json" in html:
                tech.append("WordPress")
            if "elementor" in html.lower():
                tech.append("Elementor")
            if "divi" in html.lower():
                tech.append("Divi")
            if "wix.com" in html.lower():
                tech.append("Wix")
            if "squarespace" in html.lower():
                tech.append("Squarespace")
            if "next" in html or "__next" in html:
                tech.append("Next.js")
            if not tech:
                tech.append("Custom/Other")
                
            plugins = set(re.findall(r'/wp-content/plugins/([^/]+)/', html))
            
            # Look for pricing clues
            prices = re.findall(r'£\s*\d+(?:,\d+)*(?:\.\d{2})?', html)
            
            results.append({
                "name": name,
                "url": url,
                "status": status,
                "title": title,
                "desc": desc,
                "h1": h1s,
                "h2_sample": h2s[:5],
                "schemas": list(set(str(t) for t in schema_types if t)),
                "tech": ", ".join(tech),
                "plugins_count": len(plugins),
                "plugins_sample": list(plugins)[:6],
                "html_size_kb": round(len(html) / 1024, 1),
                "prices_sample": list(set(prices))[:8]
            })
            print(f"  -> Done: Tech={tech}, HTML Size={round(len(html)/1024, 1)}KB, Title={title[:40]}...")
    except Exception as e:
        print(f"  -> Failed {name}: {e}")
        results.append({
            "name": name,
            "url": url,
            "error": str(e)
        })

with open('audit/competitor_reverse_engineering.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print("\nSaved reverse engineering results to audit/competitor_reverse_engineering.json")
