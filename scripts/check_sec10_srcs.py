from bs4 import BeautifulSoup

with open('public/thejacketmaker/index.html', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

sec10 = soup.find('div', id='shopify-section-template--26828817039647__16359278676808bea5')
for idx, p in enumerate(sec10.find_all('div', class_='product-block')):
    img = p.find('img')
    if img:
        has_src = 'src' in img.attrs
        src_val = img.get('src', '')
        dsrc_val = img.get('data-src', '')
        print(f"[{idx}] has_src: {has_src} | src: {src_val[-30:]} | data-src: {dsrc_val[-30:]}")
