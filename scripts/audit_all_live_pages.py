import urllib.request
import urllib.robotparser
import xml.etree.ElementTree as ET
import re

GOOGLEBOT_UA = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"

# 1. Fetch robots.txt
robots_url = "https://www.saimdev.site/robots.txt"
req_rob = urllib.request.Request(robots_url, headers={'User-Agent': GOOGLEBOT_UA})
try:
    with urllib.request.urlopen(req_rob) as resp:
        robots_txt = resp.read().decode('utf-8')
except Exception as e:
    print(f"Error fetching robots.txt: {e}")
    robots_txt = ""

rp = urllib.robotparser.RobotFileParser()
rp.parse(robots_txt.splitlines())

# 2. Fetch sitemap.xml
sitemap_url = "https://www.saimdev.site/sitemap.xml"
req_sm = urllib.request.Request(sitemap_url, headers={'User-Agent': GOOGLEBOT_UA})
with urllib.request.urlopen(req_sm) as resp:
    sitemap_xml = resp.read().decode('utf-8')

root = ET.fromstring(sitemap_xml)
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
sitemap_urls = [elem.text.strip() for elem in root.findall('.//sm:loc', ns)]

print(f"Total Sitemap URLs to audit: {len(sitemap_urls)}")

results = []

for u in sitemap_urls:
    # Check robots.txt
    allowed_by_robots = rp.can_fetch("Googlebot", u)
    
    # Fetch page
    req = urllib.request.Request(u, headers={'User-Agent': GOOGLEBOT_UA})
    try:
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            headers = dict(resp.headers)
            html = resp.read().decode('utf-8', errors='ignore')
            
            x_robots = headers.get('x-robots-tag', 'NONE')
            
            # Check meta robots
            meta_robots_m = re.findall(r'<meta[^>]*name=["\'](robots|googlebot)["\'][^>]*content=["\']([^"\']+)["\']', html, re.IGNORECASE)
            
            # Canonical
            canon_m = re.findall(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', html, re.IGNORECASE)
            canonical = canon_m[0] if canon_m else 'MISSING'
            
            results.append({
                'url': u,
                'allowed_by_robots': allowed_by_robots,
                'status': status,
                'x_robots': x_robots,
                'meta_robots': meta_robots_m,
                'canonical': canonical,
                'canonical_matches': canonical == u
            })
    except Exception as e:
        results.append({
            'url': u,
            'allowed_by_robots': allowed_by_robots,
            'status': str(e),
            'x_robots': 'ERR',
            'meta_robots': [],
            'canonical': 'ERR',
            'canonical_matches': False
        })

print("\n=== AUDIT RESULTS SUMMARY ===")
blocked_count = sum(1 for r in results if not r['allowed_by_robots'])
non_200_count = sum(1 for r in results if r['status'] != 200)
canonical_mismatch_count = sum(1 for r in results if not r['canonical_matches'])
noindex_count = sum(1 for r in results if any('noindex' in str(m).lower() for m in r['meta_robots']) or 'noindex' in r['x_robots'].lower())

print(f"Total Audited: {len(results)}")
print(f"Blocked by robots.txt: {blocked_count}")
print(f"Non-200 Status: {non_200_count}")
print(f"Noindexed Pages: {noindex_count}")
print(f"Canonical Mismatches: {canonical_mismatch_count}")

if blocked_count > 0:
    print("\n[!] BLOCKED URLS IN SITEMAP:")
    for r in results:
        if not r['allowed_by_robots']:
            print(f"  {r['url']}")

if non_200_count > 0:
    print("\n[!] NON-200 STATUS:")
    for r in results:
        if r['status'] != 200:
            print(f"  {r['url']} -> {r['status']}")

if canonical_mismatch_count > 0:
    print("\n[!] CANONICAL MISMATCHES:")
    for r in results:
        if not r['canonical_matches']:
            print(f"  {r['url']} -> Canonical: {r['canonical']}")
