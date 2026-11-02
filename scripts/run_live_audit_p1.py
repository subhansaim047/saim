import urllib.request
import urllib.error
import ssl
import json
import re
import time
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BeyondSEO/SeniorAuditor'}

audit_data = {
    'technical': {},
    'on_page': {},
    'schema': {},
    'aeo': {},
    'geo': {},
    'llmo': {},
    'issues': []
}

def check_url(url, method='GET'):
    start = time.time()
    try:
        req = urllib.request.Request(url, headers=HEADERS, method=method)
        with urllib.request.urlopen(req, timeout=12, context=ctx) as resp:
            elapsed = int((time.time() - start) * 1000)
            return {
                'status': resp.status,
                'final_url': resp.geturl(),
                'headers': dict(resp.headers),
                'content': resp.read().decode('utf-8', errors='ignore'),
                'latency': elapsed,
                'error': None
            }
    except urllib.error.HTTPError as he:
        elapsed = int((time.time() - start) * 1000)
        return {
            'status': he.code,
            'final_url': he.geturl(),
            'headers': dict(he.headers),
            'content': he.read().decode('utf-8', errors='ignore'),
            'latency': elapsed,
            'error': str(he)
        }
    except Exception as e:
        return {
            'status': 0,
            'final_url': url,
            'headers': {},
            'content': '',
            'latency': 0,
            'error': str(e)
        }

print("=== 1. AUDITING ROBOTS.TXT, SITEMAP.XML, LLMS.TXT ===")
# 1. robots.txt
r_robots = check_url('https://www.saimdev.site/robots.txt')
audit_data['technical']['robots_txt'] = {
    'status': r_robots['status'],
    'length': len(r_robots['content']),
    'has_googlebot_image': 'Googlebot-Image' in r_robots['content'],
    'has_sitemap': 'sitemap.xml' in r_robots['content'],
    'has_image_sitemap': 'image-sitemap.xml' in r_robots['content'],
    'has_gptbot': 'GPTBot' in r_robots['content'],
    'has_claude': 'ClaudeBot' in r_robots['content'],
    'has_perplexity': 'PerplexityBot' in r_robots['content'],
    'has_disallow_api': 'Disallow: /api/' in r_robots['content'],
    'any_blocked_demos': 'Disallow: /burger-garage/' in r_robots['content']
}
print(f"robots.txt status: {r_robots['status']}, size: {len(r_robots['content'])}b")

# 2. sitemap.xml
r_sitemap = check_url('https://www.saimdev.site/sitemap.xml')
sitemap_locs = re.findall(r'<loc>(.*?)</loc>', r_sitemap['content'])
audit_data['technical']['sitemap_xml'] = {
    'status': r_sitemap['status'],
    'urls_count': len(sitemap_locs),
    'sample_urls': sitemap_locs[:10]
}
print(f"sitemap.xml status: {r_sitemap['status']}, total URLs: {len(sitemap_locs)}")

# 3. image-sitemap.xml
r_img_sitemap = check_url('https://www.saimdev.site/image-sitemap.xml')
img_sitemap_locs = re.findall(r'<loc>(.*?)</loc>', r_img_sitemap['content'])
audit_data['technical']['image_sitemap'] = {
    'status': r_img_sitemap['status'],
    'urls_count': len(img_sitemap_locs)
}
print(f"image-sitemap.xml status: {r_img_sitemap['status']}, total URLs: {len(img_sitemap_locs)}")

# 4. llms.txt
r_llms = check_url('https://www.saimdev.site/llms.txt')
audit_data['llmo']['llms_txt'] = {
    'status': r_llms['status'],
    'length': len(r_llms['content']),
    'has_brand': 'Saim Dev' in r_llms['content'],
    'has_pricing': 'GBP' in r_llms['content'] or '£' in r_llms['content'],
    'content_preview': r_llms['content'][:300]
}
print(f"llms.txt status: {r_llms['status']}, size: {len(r_llms['content'])}b")

print("\n=== 2. AUDITING REDIRECTS, CANONICALS & SECURITY HEADERS ===")
# Non-www to www redirect
r_non_www = check_url('https://saimdev.site/', method='HEAD')
# HTTP to HTTPS redirect
r_http = check_url('http://www.saimdev.site/', method='HEAD')
# Trailing slash test
r_trailing = check_url('https://www.saimdev.site/tools/')

home_res = check_url('https://www.saimdev.site/')
sec_headers = home_res['headers']

audit_data['technical']['infra'] = {
    'https_redirect': r_http['final_url'].startswith('https://'),
    'non_www_redirect': r_non_www['final_url'].startswith('https://www.saimdev.site'),
    'trailing_slash_behavior': r_trailing['status'],
    'trailing_slash_final': r_trailing['final_url'],
    'security_headers': {
        'strict_transport_security': sec_headers.get('strict-transport-security'),
        'x_content_type_options': sec_headers.get('x-content-type-options'),
        'x_frame_options': sec_headers.get('x-frame-options'),
        'referrer_policy': sec_headers.get('referrer-policy'),
        'content_security_policy': sec_headers.get('content-security-policy'),
        'permissions_policy': sec_headers.get('permissions-policy')
    }
}
print(f"HTTPS redirect: {audit_data['technical']['infra']['https_redirect']}")
print(f"Non-www redirect: {audit_data['technical']['infra']['non_www_redirect']} ({r_non_www['final_url']})")
print(f"Security Headers: HSTS={bool(sec_headers.get('strict-transport-security'))}, X-Frame={bool(sec_headers.get('x-frame-options'))}, X-Content-Type={bool(sec_headers.get('x-content-type-options'))}")

with open('audit_phase1_technical.json', 'w', encoding='utf-8') as f:
    json.dump(audit_data, f, indent=2)

print("\nSaved audit_phase1_technical.json")
