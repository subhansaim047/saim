import urllib.request
import urllib.error
import ssl
import json
import re
import time
from bs4 import BeautifulSoup
from collections import defaultdict

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BeyondSEO/MasterAuditor'}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    start = time.time()
    try:
        with urllib.request.urlopen(req, timeout=15, context=ctx) as resp:
            latency = int((time.time() - start) * 1000)
            return {
                'status': resp.status,
                'final_url': resp.geturl(),
                'headers': resp.headers,
                'body': resp.read().decode('utf-8', errors='ignore'),
                'latency': latency,
                'error': None
            }
    except urllib.error.HTTPError as he:
        latency = int((time.time() - start) * 1000)
        return {
            'status': he.code,
            'final_url': he.geturl(),
            'headers': he.headers,
            'body': he.read().decode('utf-8', errors='ignore'),
            'latency': latency,
            'error': str(he)
        }
    except Exception as e:
        return {
            'status': 0,
            'final_url': url,
            'headers': {},
            'body': '',
            'latency': 0,
            'error': str(e)
        }

# 1. Get URLs from sitemap
print("Fetching sitemap...")
sitemap_res = fetch('https://www.saimdev.site/sitemap.xml')
sitemap_urls = re.findall(r'<loc>(.*?)</loc>', sitemap_res['body'])

additional_urls = [
    'https://www.saimdev.site/',
    'https://www.saimdev.site/about',
    'https://www.saimdev.site/contact',
    'https://www.saimdev.site/services',
    'https://www.saimdev.site/services/takeaway-web-design',
    'https://www.saimdev.site/nextjs-developer-uk',
    'https://www.saimdev.site/technologies',
    'https://www.saimdev.site/case-studies',
    'https://www.saimdev.site/demos',
    'https://www.saimdev.site/tools',
    'https://www.saimdev.site/tools/ppds-label-generator',
    'https://www.saimdev.site/blogs',
    'https://www.saimdev.site/privacy',
    'https://www.saimdev.site/cookie-policy',
    'https://www.saimdev.site/disclaimer',
    # Client demo pages
    'https://www.saimdev.site/burger-garage/index.html',
    'https://www.saimdev.site/frenchyse/index.html',
    'https://www.saimdev.site/anzaar/index.html',
    'https://www.saimdev.site/hotbite/index.html'
]

urls_to_crawl = list(dict.fromkeys(sitemap_urls + additional_urls))
print(f"Total unique URLs to crawl: {len(urls_to_crawl)}")

page_reports = []
all_titles = defaultdict(list)
all_descriptions = defaultdict(list)
all_canonicals = defaultdict(list)

for idx, url in enumerate(urls_to_crawl):
    print(f"[{idx+1}/{len(urls_to_crawl)}] Crawling {url}...")
    res = fetch(url)
    
    if res['status'] != 200:
        page_reports.append({
            'url': url,
            'status': res['status'],
            'latency_ms': res['latency'],
            'error': res['error'],
            'issues': [f"HTTP status {res['status']}"]
        })
        continue

    soup = BeautifulSoup(res['body'], 'html.parser')

    # Basic metadata
    title_tag = soup.find('title')
    title = title_tag.get_text().strip() if title_tag else ''
    
    desc_tag = soup.find('meta', attrs={'name': 'description'})
    desc = desc_tag.get('content', '').strip() if desc_tag else ''

    canonical_tag = soup.find('link', attrs={'rel': 'canonical'})
    canonical = canonical_tag.get('href', '').strip() if canonical_tag else ''

    robots_tag = soup.find('meta', attrs={'name': 'robots'})
    robots = robots_tag.get('content', '').strip() if robots_tag else ''

    # Headings
    h1_tags = [h.get_text().strip() for h in soup.find_all('h1')]
    h2_tags = [h.get_text().strip() for h in soup.find_all('h2')]
    h3_tags = [h.get_text().strip() for h in soup.find_all('h3')]

    # Images
    images = soup.find_all('img')
    img_count = len(images)
    missing_alt_imgs = []
    for img in images:
        alt = img.get('alt', None)
        src = img.get('src', '')
        if alt is None or (not alt.strip() and not img.get('aria-hidden')):
            missing_alt_imgs.append(src)

    # JSON-LD Schemas
    schemas = []
    for s in soup.find_all('script', type='application/ld+json'):
        try:
            s_data = json.loads(s.string)
            if isinstance(s_data, list):
                schemas.extend(s_data)
            elif isinstance(s_data, dict):
                if '@graph' in s_data:
                    schemas.extend(s_data['@graph'])
                else:
                    schemas.append(s_data)
        except:
            pass

    schema_types = [s.get('@type') for s in schemas if isinstance(s, dict) and '@type' in s]

    # Clean text for word count and AEO/GEO analysis
    for element in soup(['script', 'style', 'nav', 'footer']):
        element.extract()
    body_text = soup.get_text(separator=' ')
    clean_text = ' '.join(body_text.split())
    words = clean_text.split()
    word_count = len(words)

    # AEO Direct Answer check: paragraph with 35-70 words answering a question or defining topic near top
    paragraphs = [p.get_text().strip() for p in soup.find_all('p') if len(p.get_text().strip().split()) >= 25]
    has_direct_answer = False
    direct_answer_sample = ""
    for p in paragraphs[:5]:
        p_len = len(p.split())
        if 35 <= p_len <= 80:
            has_direct_answer = True
            direct_answer_sample = p[:120] + "..."
            break

    # GEO Entity Check: Saim Dev entity clarity
    has_brand = 'saim dev' in clean_text.lower()
    has_geo_terms = any(term in clean_text.lower() for term in ['united kingdom', 'uk', 'europe', 'london', 'eho', 'fsa'])

    # Track duplicates
    if title:
        all_titles[title].append(url)
    if desc:
        all_descriptions[desc].append(url)
    if canonical:
        all_canonicals[canonical].append(url)

    # Issues detection
    issues = []
    if not title:
        issues.append({'severity': 'Critical', 'issue': 'Missing <title> tag'})
    elif len(title) < 25 or len(title) > 65:
        issues.append({'severity': 'Low', 'issue': f'Title length suboptimal ({len(title)} chars): "{title}"'})

    if not desc:
        issues.append({'severity': 'High', 'issue': 'Missing meta description'})
    elif len(desc) < 100 or len(desc) > 165:
        issues.append({'severity': 'Low', 'issue': f'Meta description length ({len(desc)} chars)'})

    if not canonical:
        issues.append({'severity': 'High', 'issue': 'Missing canonical URL link tag'})
    elif canonical != url and not (url.endswith('/index.html') and canonical == url.replace('/index.html', '')):
        # Check if intentional canonicalization
        pass

    if len(h1_tags) == 0:
        issues.append({'severity': 'High', 'issue': 'Missing H1 heading'})
    elif len(h1_tags) > 1:
        issues.append({'severity': 'Medium', 'issue': f'Multiple H1 headings ({len(h1_tags)})'})

    if word_count < 250:
        issues.append({'severity': 'Medium', 'issue': f'Thin content warning: only {word_count} words'})

    if missing_alt_imgs:
        issues.append({'severity': 'Medium', 'issue': f'{len(missing_alt_imgs)} images missing alt text'})

    if not schema_types:
        issues.append({'severity': 'Medium', 'issue': 'No JSON-LD structured data found on page'})

    page_reports.append({
        'url': url,
        'status': res['status'],
        'latency_ms': res['latency'],
        'title': title,
        'title_len': len(title),
        'desc': desc,
        'desc_len': len(desc),
        'canonical': canonical,
        'robots': robots,
        'h1': h1_tags[0] if h1_tags else '',
        'h1_count': len(h1_tags),
        'h2_count': len(h2_tags),
        'h3_count': len(h3_tags),
        'img_count': img_count,
        'missing_alt_count': len(missing_alt_imgs),
        'word_count': word_count,
        'schema_types': schema_types,
        'has_direct_answer': has_direct_answer,
        'direct_answer_sample': direct_answer_sample,
        'has_brand_entity': has_brand,
        'has_geo_terms': has_geo_terms,
        'issues': issues
    })

# Summarize duplicates
dup_titles = {t: urls for t, urls in all_titles.items() if len(urls) > 1}
dup_descs = {d: urls for d, urls in all_descriptions.items() if len(urls) > 1}

summary = {
    'total_crawled': len(page_reports),
    'successful_200': sum(1 for p in page_reports if p.get('status') == 200),
    'avg_latency_ms': sum(p.get('latency_ms', 0) for p in page_reports) // len(page_reports),
    'duplicate_titles_count': len(dup_titles),
    'duplicate_titles': dup_titles,
    'duplicate_descriptions_count': len(dup_descs),
    'duplicate_descriptions': dup_descs,
    'pages': page_reports
}

with open('audit_crawl_full_results.json', 'w', encoding='utf-8') as f:
    json.dump(summary, f, indent=2)

print("\nCrawl complete! Saved to audit_crawl_full_results.json")
print(f"Total crawled: {len(page_reports)}, 200 OK: {summary['successful_200']}")
print(f"Duplicate titles: {len(dup_titles)}, Duplicate descriptions: {len(dup_descs)}")
