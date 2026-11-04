from bs4 import BeautifulSoup

with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

header = soup.select_one('#shopify-section-header, .site-header, header')
if header:
    links = header.find_all('a')
    print(f"Total header links: {len(links)}")
    for a in links:
        text = a.get_text().strip()
        href = a.get('href')
        if text:
            print(f"'{text}' -> '{href}'")
