from bs4 import BeautifulSoup

with open('public/thejacketmaker/products/ionic-black-leather-jacket/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

sections = soup.select('.shopify-section')
for s in sections:
    sec_id = s.get('id', '')
    headings = [h.get_text().strip() for h in s.find_all(['h1', 'h2', 'h3', 'h4'])]
    print(f"Section {sec_id}: Headings = {headings[:3]}")
