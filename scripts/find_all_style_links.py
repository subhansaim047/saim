from bs4 import BeautifulSoup

with open('public/idreesleather/index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

for l in soup.find_all('link'):
    rel = l.get('rel', [])
    href = l.get('href', '')
    as_attr = l.get('as', '')
    if 'style' in as_attr or 'stylesheet' in rel or href.endswith('.css'):
        print(f"rel={rel}, as={as_attr}, href={href}")
