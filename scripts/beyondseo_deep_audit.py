import urllib.request
import re
import json
import ssl
import time
import os
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BeyondSEO/2.9.1 (Audit-Only Crawler)'}

# 1. Fetch sitemap.xml
sitemap_url = "https://www.saimdev.site/sitemap.xml"
req = urllib.request.Request(sitemap_url, headers=HEADERS)
sitemap_urls = []
try:
    with urllib.request.urlopen(req, timeout=15, context=ctx) as resp:
        content = resp.read().decode('utf-8')
        sitemap_urls = re.findall(r'<loc>(.*?)</loc>', content)
except Exception as e:
    print(f"Error reading sitemap: {e}")

print(f"Total Sitemap URLs found: {len(sitemap_urls)}")

# 2. Add other discovered entrypoints
all_target_urls = list(set(sitemap_urls + [
    "https://www.saimdev.site/",
    "https://www.saimdev.site/privacy",
    "https://www.saimdev.site/cookie-policy",
    "https://www.saimdev.site/terms",
    "https://www.saimdev.site/disclaimer",
    "https://www.saimdev.site/services/takeaway-web-design",
    "https://www.saimdev.site/tools/ppds-label-generator",
    "https://www.saimdev.site/invalid-404-test-page"
]))

results = {}
link_graph = {} # target -> list of sources
outbound_graph = {} # source -> list of targets
discovered_all = set(all_target_urls)

for i, url in enumerate(all_target_urls):
    print(f"[{i+1}/{len(all_target_urls)}] Crawling: {url}")
    link_graph.setdefault(url, [])
    outbound_graph.setdefault(url, [])
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        start_t = time.time()
        try:
            resp = urllib.request.urlopen(req, timeout=12, context=ctx)
            status = resp.status
            final_url = resp.geturl()
            headers_dict = dict(resp.headers)
            body = resp.read().decode('utf-8', errors='ignore')
        except urllib.error.HTTPError as he:
            status = he.code
            final_url = he.geturl()
            headers_dict = dict(he.headers)
            body = he.read().decode('utf-8', errors='ignore')
        except Exception as ee:
            status = 0
            final_url = url
            headers_dict = {}
            body = ""

        latency_ms = int((time.time() - start_t) * 1000)

        soup = BeautifulSoup(body, 'html.parser')

        title_el = soup.find('title')
        title = title_el.get_text().strip() if title_el else ""

        desc_el = soup.find('meta', attrs={'name': 'description'})
        desc = desc_el.get('content', '').strip() if desc_el else ""

        robots_el = soup.find('meta', attrs={'name': 'robots'})
        robots = robots_el.get('content', '').strip() if robots_el else "index, follow"

        x_robots = headers_dict.get('x-robots-tag', '')

        canonical_el = soup.find('link', attrs={'rel': 'canonical'})
        canonical = canonical_el.get('href', '').strip() if canonical_el else ""

        h1s = [h.get_text().strip() for h in soup.find_all('h1')]
        h2s = [h.get_text().strip() for h in soup.find_all('h2')]
        h3s = [h.get_text().strip() for h in soup.find_all('h3')]

        # Images
        images = soup.find_all('img')
        img_count = len(images)
        missing_alt = sum(1 for img in images if not img.get('alt'))

        # OpenGraph & Twitter
        og_title = soup.find('meta', property='og:title')
        og_desc = soup.find('meta', property='og:description')
        og_url = soup.find('meta', property='og:url')
        tw_card = soup.find('meta', attrs={'name': 'twitter:card'})

        # JSON-LD schemas
        schemas = []
        for s in soup.find_all('script', type='application/ld+json'):
            try:
                data = json.loads(s.string)
                if isinstance(data, list):
                    schemas.extend(data)
                elif isinstance(data, dict):
                    if '@graph' in data:
                        schemas.extend(data['@graph'])
                    else:
                        schemas.append(data)
            except:
                pass

        schema_types = [s.get('@type') for s in schemas if isinstance(s, dict) and '@type' in s]

        # Links (Extract from full HTML before cleaning nav/footer)
        links = soup.find_all('a', href=True)
        int_links = []
        ext_links = []
        for a in links:
            href = a['href'].strip()
            anchor = a.get_text().strip()
            if href.startswith('/') or 'saimdev.site' in href:
                if href.startswith('/'):
                    full = "https://www.saimdev.site" + href.split('#')[0]
                else:
                    full = href.split('#')[0]
                if full.endswith('/') and len(full) > len("https://www.saimdev.site/"):
                    full = full[:-1]
                int_links.append((full, anchor))
                discovered_all.add(full)
            elif href.startswith('http'):
                ext_links.append((href, anchor))

        outbound_graph[url] = int_links
        for tgt, anc in int_links:
            link_graph.setdefault(tgt, []).append((url, anc))

        # Extract text & words (Clean scripts/styles for word count)
        for s in soup(['script', 'style']):
            s.extract()
        main_text = soup.get_text(separator=' ')
        words = re.findall(r'\b[a-zA-Z0-9_\'-]+\b', main_text)
        word_count = len(words)

        results[url] = {
            "url": url,
            "status": status,
            "final_url": final_url,
            "latency_ms": latency_ms,
            "in_sitemap": url in sitemap_urls,
            "title": title,
            "title_len": len(title),
            "description": desc,
            "desc_len": len(desc),
            "robots": robots,
            "x_robots": x_robots,
            "canonical": canonical,
            "h1_count": len(h1s),
            "h1": h1s[0] if h1s else "",
            "h2_count": len(h2s),
            "h3_count": len(h3s),
            "h2_sample": h2s[:5],
            "word_count": word_count,
            "img_count": img_count,
            "missing_alt": missing_alt,
            "schema_types": schema_types,
            "has_og": bool(og_title),
            "has_tw": bool(tw_card),
            "external_link_count": len(ext_links),
            "ext_sample": [x[0] for x in ext_links[:5]]
        }
    except Exception as e:
        results[url] = {"url": url, "error": str(e)}

# Summarize link graph
for url in results:
    inbounds = link_graph.get(url, [])
    # normalize check
    alt_url = url + '/' if not url.endswith('/') else url[:-1]
    inbounds.extend(link_graph.get(alt_url, []))
    results[url]["inbound_count"] = len(inbounds)
    results[url]["inbound_sources"] = list(set([x[0] for x in inbounds]))[:5]

output_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\deep_crawl_results.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump({
        "sitemap_urls_count": len(sitemap_urls),
        "total_crawled": len(results),
        "discovered_all_count": len(discovered_all),
        "results": results
    }, f, indent=2)

print(f"Deep crawl saved to {output_path}")
