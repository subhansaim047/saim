import os
import sys
import json
import re
import urllib.request
import urllib.error

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

domain = "https://www.saimdev.site"

print("=== 1. ROBOTS.TXT CHECK ===")
try:
    req = urllib.request.Request(f"{domain}/robots.txt", headers={"User-Agent": "Mozilla/5.0"})
    res = urllib.request.urlopen(req, timeout=10)
    robots_text = res.read().decode('utf-8')
    print(f"Status: {res.status}")
    print(robots_text.strip())
except Exception as e:
    print(f"Robots.txt error: {e}")

print("\n=== 2. 404 STATUS CHECK ===")
try:
    req = urllib.request.Request(f"{domain}/this-is-a-definitely-missing-page-404-check", headers={"User-Agent": "Mozilla/5.0"})
    res = urllib.request.urlopen(req, timeout=10)
    print(f"Unexpected status: {res.status}")
except urllib.error.HTTPError as e:
    print(f"Expected 404 status received: {e.code}")
except Exception as e:
    print(f"404 test error: {e}")

print("\n=== 3. PDF DOWNLOAD API CHECK ===")
try:
    req = urllib.request.Request(f"{domain}/api/download?slug=freezer-temperature-chart", headers={"User-Agent": "Mozilla/5.0"})
    res = urllib.request.urlopen(req, timeout=10)
    print(f"PDF API Status: {res.status} | Content-Type: {res.headers.get('Content-Type')} | Content-Length: {res.headers.get('Content-Length')}")
except Exception as e:
    print(f"PDF API error: {e}")

print("\n=== 4. SITEMAP XML LIVE FETCH ===")
try:
    req = urllib.request.Request(f"{domain}/sitemap.xml", headers={"User-Agent": "Mozilla/5.0"})
    res = urllib.request.urlopen(req, timeout=10)
    sitemap_content = res.read().decode('utf-8')
    urls = re.findall(r'<loc>(.*?)</loc>', sitemap_content)
    print(f"Sitemap Status: {res.status} | Total URLs in live sitemap: {len(urls)}")
except Exception as e:
    print(f"Sitemap error: {e}")
