import os
import json
import re
from bs4 import BeautifulSoup

def format_price(amount):
    try:
        val = float(amount)
        return f"{val:,.2f}"
    except (ValueError, TypeError):
        return str(amount)

def get_discount_pct(price, compare_price):
    try:
        p = float(price)
        cp = float(compare_price)
        if cp > p > 0:
            return int(round((cp - p) / cp * 100))
    except (ValueError, TypeError):
        pass
    return None

def build_product_block_html(prod):
    p_id = prod.get('id', '')
    title = prod.get('title', '')
    handle = prod.get('handle', '')
    
    # Prices
    variants = prod.get('variants', [{}])
    first_var = variants[0] if variants else {}
    price_val = first_var.get('price', '0')
    compare_val = first_var.get('compare_at_price')
    
    price_fmt = format_price(price_val)
    compare_fmt = format_price(compare_val) if compare_val else None
    discount = get_discount_pct(price_val, compare_val)
    
    # Image
    images = prod.get('images', [])
    img_src = images[0].get('src', '') if images else '/thejacketmaker/images/placeholder.jpg'
    media_id = images[0].get('id', p_id) if images else p_id
    
    sale_badge_html = ''
    if discount and discount > 0:
        sale_badge_html = f'''<div class="product-label-container">
<span class="product-label product-label--sale">
<span>{discount}% off</span>
</span></div>'''
        
    compare_span_html = ''
    if compare_fmt:
        compare_span_html = f'''<span class="product-price__item product-price__compare theme-money">Rs.{compare_fmt}</span>
<span class="product-price__item price-label price-label--sale">Sale</span>'''

    return f'''<div class="product-block" data-cc-animate="" data-product-id="{p_id}">
<div class="block-inner">
<div class="block-inner-inner">
<div class="image-cont">
<a aria-label="{title}" class="product-link" href="/thejacketmaker/products/{handle}/index.html" tabindex="-1">
<div class="image-label-wrap">
<div><div class="product-block__image product-block__image--primary product-block__image--active" data-media-id="{media_id}"><div class="rimage-outer-wrapper">
<div class="rimage-wrapper lazyload--placeholder" style="padding-top:100.0%"><img alt="{title}" class="rimage__image lazyload fade-in cover lazyloaded" data-aspectratio="1.0" data-parent-fit="cover" data-sizes="auto" data-src="{img_src}" data-widths="[180, 220, 300, 360, 460, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" src="{img_src}" style="object-position: "/>
<noscript>
<img alt="{title}" class="rimage__image lazyloaded" src="{img_src}"/>
</noscript>
</div>
</div>
</div></div>{sale_badge_html}
</div>
</a>
</div>
<div class="product-info">
<div class="inner">
<div class="innerer">
<a class="product-link" href="/thejacketmaker/products/{handle}/index.html">
<h2 class="product-block__title">{title}</h2>
<div class="yotpo-widget-instance" data-yotpo-cart-product-id="" data-yotpo-instance-id="462713" data-yotpo-product-id="{p_id}" data-yotpo-section-id="collection" id="starCollection"></div>
<div class="product-price">
<span class="product-price__item product-price__from"> </span>
<span class="product-price__item product-price__amount product-price__amount--on-sale theme-money">Rs.{price_fmt} PKR
</span>
{compare_span_html}
</div>
</a></div>
</div>
</div>
</div>
</div></div>'''

men_categories = [
    ("Men's Leather Jackets", "/thejacketmaker/collections/mens-leather-jackets/index.html"),
    ("Men's Bomber Jackets", "/thejacketmaker/collections/mens-bomber-jackets/index.html"),
    ("Men's Biker Jackets", "/thejacketmaker/collections/mens-biker-leather-jackets/index.html"),
    ("Men's Suede Jackets", "/thejacketmaker/collections/mens-suede-jackets/index.html"),
    ("Men's Varsity Jackets", "/thejacketmaker/collections/mens-varsity-jacket/index.html"),
    ("Men's Leather Vests", "/thejacketmaker/collections/mens-leather-vests/index.html"),
    ("Men's Leather Blazers", "/thejacketmaker/collections/mens-blazers/index.html"),
    ("Men's Fur & Shearling Jackets", "/thejacketmaker/collections/mens-fur-shearling-jackets/index.html"),
    ("Men's Aviator Jackets", "/thejacketmaker/collections/mens-aviator-jackets/index.html"),
    ("Men's Puffer Jackets", "/thejacketmaker/collections/mens-puffer-jackets/index.html"),
    ("Men's Hooded Leather Jackets", "/thejacketmaker/collections/mens-black-leather-jackets-hood/index.html"),
    ("Men's Best Sellers", "/thejacketmaker/collections/mens-best-sellers/index.html"),
    ("Men's Winter Jackets", "/thejacketmaker/collections/mens-winter-jackets/index.html"),
    ("Men's Leather Shoes", "/thejacketmaker/collections/full-grain-leather-shoes-men/index.html"),
    ("Leather Bags", "/thejacketmaker/collections/full-grain-leather-bags/index.html"),
    ("Clearance Sale", "/thejacketmaker/collections/clearance-sale/index.html")
]

women_categories = [
    ("Women's Leather Jackets", "/thejacketmaker/collections/womens-leather-jackets/index.html"),
    ("Women's Bomber Jackets", "/thejacketmaker/collections/women-bomber-jackets/index.html"),
    ("Women's Biker Jackets", "/thejacketmaker/collections/womens-biker-leather-jackets/index.html"),
    ("Women's Suede Jackets", "/thejacketmaker/collections/womens-suede-jackets/index.html"),
    ("Women's Best Sellers", "/thejacketmaker/collections/best-leather-jackets-women/index.html"),
    ("Women's Leather Vests", "/thejacketmaker/collections/women-leather-vests/index.html"),
    ("Women's Leather Blazers", "/thejacketmaker/collections/women-blazers/index.html"),
    ("Women's Aviator Jackets", "/thejacketmaker/collections/womens-aviator-jackets/index.html"),
    ("Women's Leather Coats", "/thejacketmaker/collections/women-leather-coats/index.html"),
    ("Women's Trench & Winter Coats", "/thejacketmaker/collections/women-winter-coats/index.html"),
    ("Women's Shearling Jackets", "/thejacketmaker/collections/womens-shearling-jackets/index.html"),
    ("Women's Varsity Jackets", "/thejacketmaker/collections/women-varsity-jackets/index.html"),
    ("Women's New Arrivals", "/thejacketmaker/collections/womens-new-arrival/index.html"),
    ("Leather Bags", "/thejacketmaker/collections/full-grain-leather-bags/index.html"),
    ("Gifts For Her", "/thejacketmaker/collections/gifts-for-her/index.html")
]

def build_sidebar_categories_html(categories, active_handle):
    items = []
    for title, url in categories:
        is_active = active_handle in url
        active_class = " is-active" if is_active else ""
        items.append(f'''<li class="filter-group__item{active_class}">
  <a class="filter-group__link" href="{url}" style="padding: 6px 0; display: block; color: {'#111' if is_active else '#444'}; font-weight: {'600' if is_active else 'normal'}; text-decoration: none;">
    {title}
  </a>
</li>''')
    return '''<div class="filter-group filter-group--categories">
  <div class="filter-group__heading" style="font-weight: 700; margin-bottom: 12px; cursor: pointer; text-transform: uppercase; font-size: 13px; letter-spacing: 0.05em;">
    Categories
  </div>
  <ul class="filter-group__items" style="list-style: none; padding-left: 0; margin-bottom: 24px;">
    ''' + '\n    '.join(items) + '''
  </ul>
</div>'''

def update_megamenu(soup):
    men_map = {
        'all leather jackets': '/thejacketmaker/collections/mens-leather-jackets/index.html',
        'leather jackets': '/thejacketmaker/collections/mens-leather-jackets/index.html',
        'bomber jackets': '/thejacketmaker/collections/mens-bomber-jackets/index.html',
        'biker jackets': '/thejacketmaker/collections/mens-biker-leather-jackets/index.html',
        'suede jackets': '/thejacketmaker/collections/mens-suede-jackets/index.html',
        'varsity jackets': '/thejacketmaker/collections/mens-varsity-jacket/index.html',
        'leather vests': '/thejacketmaker/collections/mens-leather-vests/index.html',
        'leather blazers': '/thejacketmaker/collections/mens-blazers/index.html',
        'fur & shearling': '/thejacketmaker/collections/mens-fur-shearling-jackets/index.html',
        'aviator jackets': '/thejacketmaker/collections/mens-aviator-jackets/index.html',
        'puffer jackets': '/thejacketmaker/collections/mens-puffer-jackets/index.html',
        'hooded leather jackets': '/thejacketmaker/collections/mens-black-leather-jackets-hood/index.html',
        'best seller': '/thejacketmaker/collections/mens-best-sellers/index.html',
        'best sellers': '/thejacketmaker/collections/mens-best-sellers/index.html',
        'clearance - 50% off': '/thejacketmaker/collections/clearance-sale/index.html',
        'factory seconds - 40% off': '/thejacketmaker/collections/clearance-sale/index.html',
        'winter jackets': '/thejacketmaker/collections/mens-winter-jackets/index.html',
        'tech & fabric jackets': '/thejacketmaker/collections/mens-winter-jackets/index.html',
        'summer jackets': '/thejacketmaker/collections/mens-winter-jackets/index.html',
        'denim jackets': '/thejacketmaker/collections/mens-winter-jackets/index.html',
        'waxed canvas jackets': '/thejacketmaker/collections/mens-winter-jackets/index.html',
        'puffer vests': '/thejacketmaker/collections/mens-puffer-jackets/index.html',
        'windbreaker & puffers': '/thejacketmaker/collections/mens-puffer-jackets/index.html',
        'lightweight jackets': '/thejacketmaker/collections/mens-winter-jackets/index.html',
        'soft shell jackets': '/thejacketmaker/collections/mens-winter-jackets/index.html',
        'down jacket': '/thejacketmaker/collections/mens-puffer-jackets/index.html',
        'coats': '/thejacketmaker/collections/mens-leather-coats/index.html',
        'leather coats': '/thejacketmaker/collections/mens-leather-coats/index.html',
        'trench & winter coats': '/thejacketmaker/collections/mens-winter-jackets/index.html',
        'wool coats & jackets': '/thejacketmaker/collections/mens-wool-coats-jackets/index.html',
        'fur & shearling coats': '/thejacketmaker/collections/mens-fur-shearling-jackets/index.html',
        'leather dusters': '/thejacketmaker/collections/mens-leather-coats/index.html',
        'shoes': '/thejacketmaker/collections/full-grain-leather-shoes-men/index.html',
        'leather shoes': '/thejacketmaker/collections/full-grain-leather-shoes-men/index.html',
        'leather loafers': '/thejacketmaker/collections/full-grain-leather-shoes-men/index.html',
        'dress shoes': '/thejacketmaker/collections/full-grain-leather-shoes-men/index.html',
        'casual shoes': '/thejacketmaker/collections/full-grain-leather-shoes-men/index.html',
        'leather boots': '/thejacketmaker/collections/full-grain-leather-shoes-men/index.html',
        'leather sneakers': '/thejacketmaker/collections/full-grain-leather-shoes-men/index.html',
        'bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'leather bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'vintage leather bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'laptop bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'travel bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'business bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'leather backpacks': '/thejacketmaker/collections/full-grain-leather-backpacks/index.html',
        'gifts': '/thejacketmaker/collections/gifts-for-him/index.html',
        'gift set': '/thejacketmaker/collections/gifts-for-him/index.html',
        'gifts for him': '/thejacketmaker/collections/gifts-for-him/index.html',
        'leather accessories': '/thejacketmaker/collections/full-full-grain-leather-wallets/index.html',
        'leather wallets': '/thejacketmaker/collections/full-full-grain-leather-wallets/index.html',
        'leather gifts': '/thejacketmaker/collections/full-full-grain-leather-wallets/index.html',
        'leather belts': '/thejacketmaker/collections/full-full-grain-leather-wallets/index.html',
    }

    women_map = {
        'all leather jackets': '/thejacketmaker/collections/womens-leather-jackets/index.html',
        'leather jackets': '/thejacketmaker/collections/womens-leather-jackets/index.html',
        'best sellers': '/thejacketmaker/collections/best-leather-jackets-women/index.html',
        'suede jackets': '/thejacketmaker/collections/womens-suede-jackets/index.html',
        'bomber jackets': '/thejacketmaker/collections/women-bomber-jackets/index.html',
        'biker jackets': '/thejacketmaker/collections/womens-biker-leather-jackets/index.html',
        'leather vests': '/thejacketmaker/collections/women-leather-vests/index.html',
        'varsity jackets': '/thejacketmaker/collections/women-varsity-jackets/index.html',
        'leather blazers': '/thejacketmaker/collections/women-blazers/index.html',
        'aviator jackets': '/thejacketmaker/collections/womens-aviator-jackets/index.html',
        'plus size leather jackets': '/thejacketmaker/collections/womens-leather-jackets/index.html',
        'new arrivals': '/thejacketmaker/collections/womens-new-arrival/index.html',
        'coats': '/thejacketmaker/collections/women-winter-coats/index.html',
        'leather coats': '/thejacketmaker/collections/women-leather-coats/index.html',
        'leather trench coats': '/thejacketmaker/collections/women-leather-coats/index.html',
        'trench & winter coats': '/thejacketmaker/collections/women-winter-coats/index.html',
        'shearling jackets & coats': '/thejacketmaker/collections/womens-shearling-jackets/index.html',
        'bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'leather bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'hobo bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'tote bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'crossbody bags': '/thejacketmaker/collections/full-grain-leather-bags/index.html',
        'leather accessories': '/thejacketmaker/collections/full-full-grain-leather-wallets/index.html',
        'leather wallets': '/thejacketmaker/collections/full-full-grain-leather-wallets/index.html',
        'leather gifts': '/thejacketmaker/collections/full-full-grain-leather-wallets/index.html',
        'gifts': '/thejacketmaker/collections/gifts-for-her/index.html',
        'gift set': '/thejacketmaker/collections/gifts-for-her/index.html',
        'gifts for her': '/thejacketmaker/collections/gifts-for-her/index.html',
    }

    nav = soup.find('div', class_='navigation--main')
    if not nav:
        return

    ul = nav.find('ul', class_='navigation__tier-1')
    if not ul:
        return

    for li in ul.find_all('li', recursive=False):
        top_a = li.find('a', class_='navigation__link')
        top_txt = top_a.get_text(strip=True).upper() if top_a else ''
        if top_txt == 'MEN':
            for a in li.find_all('a'):
                t = a.get_text(strip=True).lower()
                if t in men_map:
                    a['href'] = men_map[t]
        elif top_txt == 'WOMEN':
            for a in li.find_all('a'):
                t = a.get_text(strip=True).lower()
                if t in women_map:
                    a['href'] = women_map[t]
        elif top_txt == 'SALE':
            if top_a:
                top_a['href'] = '/thejacketmaker/collections/clearance-sale/index.html'
        elif top_txt == 'GIFTING':
            if top_a:
                top_a['href'] = '/thejacketmaker/collections/gifts-for-him/index.html'

def main():
    with open('audit/collections_data.json', 'r', encoding='utf-8') as f:
        collections_data = json.load(f)

    # Base template
    template_path = 'public/thejacketmaker/collections/mens-bomber-jackets/index.html'
    with open(template_path, 'r', encoding='utf-8') as f:
        base_html = f.read()

    print(f"Loaded base template ({len(base_html)} bytes). Processing {len(collections_data)} collections...")

    for handle, col_info in collections_data.items():
        title = col_info.get('title', handle.replace('-', ' ').title())
        products = col_info.get('products', [])
        
        soup = BeautifulSoup(base_html, 'html.parser')

        # 1. Update Title and OG tags
        title_tag = soup.find('title')
        if title_tag:
            title_tag.string = f"{title} | The Jacket Maker Pakistan"

        # 2. Update H1 and description
        h1 = soup.find('h1', class_='overlay-text__title') or soup.find('h1')
        if h1:
            h1.string = title

        desc_p = soup.find(class_='metafield-rich_text_field')
        if desc_p:
            desc_p.clear()
            p = soup.new_tag('p')
            p.string = f"Explore authentic {title} at The Jacket Maker. Crafted from 100% genuine full-grain leather and tailored to perfection with custom sizing available."
            desc_p.append(p)

        # 3. Update Mega Menu
        update_megamenu(soup)

        # 4. Update Sidebar Categories
        is_women = 'women' in handle.lower() or 'her' in handle.lower()
        cats = women_categories if is_women else men_categories
        
        filters_div = soup.find('div', class_='filters')
        if filters_div:
            # Check if custom categories group exists or insert at top of filters
            existing_cat_group = filters_div.find('div', class_='filter-group--categories')
            new_cat_soup = BeautifulSoup(build_sidebar_categories_html(cats, handle), 'html.parser')
            if existing_cat_group:
                existing_cat_group.replace_with(new_cat_soup)
            else:
                filters_div.insert(0, new_cat_soup)

        # 5. Populate Product Grid
        grid = soup.find('div', class_='product-list')
        if grid:
            grid.clear()
            for prod in products:
                block_soup = BeautifulSoup(build_product_block_html(prod), 'html.parser')
                grid.append(block_soup)

        # 6. Ensure gallery-controller.js is included
        body = soup.find('body')
        if body:
            has_controller = any('gallery-controller.js' in s.get('src', '') for s in body.find_all('script'))
            if not has_controller:
                script_tag = soup.new_tag('script', src='/thejacketmaker/js/gallery-controller.js')
                body.append(script_tag)

        # Save collection
        target_dir = os.path.join('public/thejacketmaker/collections', handle)
        os.makedirs(target_dir, exist_ok=True)
        target_path = os.path.join(target_dir, 'index.html')
        
        with open(target_path, 'w', encoding='utf-8') as f:
            f.write(str(soup))
            
        print(f"Generated {handle} -> {len(products)} products -> {target_path}")

    print("\nAll 34 collection pages successfully generated!")

if __name__ == '__main__':
    main()
