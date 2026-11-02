import urllib.request
from bs4 import BeautifulSoup

urls = [
    'https://www.saimdev.site/',
    'https://www.saimdev.site/about',
    'https://www.saimdev.site/services/takeaway-web-design',
    'https://www.saimdev.site/nextjs-developer-uk',
    'https://www.saimdev.site/tools',
    'https://www.saimdev.site/tools/ppds-label-generator',
    'https://www.saimdev.site/food-safety-templates/freezer-temperature-chart',
    'https://www.saimdev.site/food-safety-templates/food-allergen-chart',
    'https://www.saimdev.site/food-safety-templates/food-cost-calculator',
    'https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
    'https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    'https://www.saimdev.site/demos',
    'https://www.saimdev.site/case-studies',
    'https://www.saimdev.site/technologies',
    'https://www.saimdev.site/contact',
    'https://www.saimdev.site/blogs'
]

for url in urls:
    try:
        resp = urllib.request.urlopen(url)
        html = resp.read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        for s in soup(['script', 'style']):
            s.extract()
        text = ' '.join(soup.get_text().split())
        words = len(text.split())
        h1 = [h.get_text().strip() for h in soup.find_all('h1')]
        h1_str = h1[0] if h1 else 'NONE'
        print(f"[{words:>5} words | H1: {h1_str[:40]:<40}] {url}")
    except Exception as e:
        print(f"ERROR: {url} -> {e}")
