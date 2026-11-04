from bs4 import BeautifulSoup

with open('public/thejacketmaker/collections/mens-bomber-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("Title:", soup.title.string if soup.title else 'None')
banner = soup.select_one('.collection-banner, .collection-header, .page-header, .feature-header')
if banner:
    print("Banner heading:", banner.get_text().strip()[:100])
else:
    # check first h1
    h1 = soup.find('h1')
    print("First H1:", h1.get_text().strip() if h1 else 'None')

cards = soup.select('.filters-adjacent .product-block')
print("Total product cards in template:", len(cards))
if cards:
    print("Sample card HTML:")
    print(cards[0].prettify()[:600])
