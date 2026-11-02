import urllib.request
import re

req = urllib.request.Request('https://www.saimdev.site', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Find all http:// links (excluding standard schema.org / w3 namespaces)
http_links = re.findall(r'http://[^\s"\'<>]+', html)
insecure_assets = [link for link in http_links if not (link.startswith('http://schema.org') or link.startswith('http://www.w3.org'))]

print('Total http:// found:', len(http_links))
print('Insecure mixed-content assets/links:', insecure_assets)
