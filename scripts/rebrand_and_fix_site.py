import os
import json
import re
from bs4 import BeautifulSoup
import generate_all_collections as col_gen

def rebrand_text(text):
    if not text:
        return text
    # Order matters: replace specific phrases before short tokens
    text = text.replace('The Jacket Maker Pakistan', 'HQ Leathercon')
    text = text.replace('The Jacket Maker (1:1 Interactive E-Commerce Clone)', 'HQ Leathercon (1:1 Interactive E-Commerce Clone)')
    text = text.replace('The Jacket Maker', 'HQ Leathercon')
    text = text.replace('THE JACKET MAKER', 'HQ LEATHERCON')
    text = text.replace('the jacket maker', 'hq leathercon')
    text = text.replace('TheJacketMaker', 'HQLeathercon')
    text = text.replace('Jacket Maker', 'HQ Leathercon')
    text = text.replace('JACKET MAKER', 'HQ LEATHERCON')
    text = text.replace('© 2026 The Jacket Maker.', '© 2026 HQ Leathercon.')
    return text

def main():
    print("--- 1. Regenerating All Collections (including leather-keychains) ---")
    with open('audit/collections_data.json', 'r', encoding='utf-8') as f:
        collections_data = json.load(f)

    # Base template for collections
    template_path = 'public/thejacketmaker/collections/mens-bomber-jackets/index.html'
    with open(template_path, 'r', encoding='utf-8') as f:
        base_html = f.read()

    # Rebrand base template
    base_html = rebrand_text(base_html)

    for handle, col_data in collections_data.items():
        title = col_data.get('title', handle.replace('-', ' ').title())
        products = col_data.get('products', [])

        soup = BeautifulSoup(base_html, 'html.parser')

        # 1. Update Title & Meta
        title_tag = soup.find('title')
        if title_tag:
            title_tag.string = f"{title} | HQ Leathercon"

        h1 = soup.find('h1')
        if h1:
            h1.string = title

        # 2. Update Breadcrumbs
        bc = soup.find(class_='breadcrumbs-list__link', attrs={'aria-current': 'page'})
        if bc:
            bc.string = title

        # 3. Update Megamenu
        col_gen.update_megamenu(soup)
        # Ensure Custom Leather Keychains points to /thejacketmaker/collections/leather-keychains/index.html
        for a in soup.find_all('a'):
            txt = a.get_text(strip=True).lower()
            if 'keychain' in txt:
                a['href'] = '/thejacketmaker/collections/leather-keychains/index.html'

        # 4. Product Grid
        grid = soup.find('div', class_='product-list')
        if grid:
            grid.clear()
            for prod in products:
                # build_product_block_html returns product block linking to /thejacketmaker/products/{handle}/index.html
                block_soup = BeautifulSoup(col_gen.build_product_block_html(prod), 'html.parser')
                grid.append(block_soup)

        # 5. Ensure gallery-controller.js
        body = soup.find('body')
        if body:
            has_controller = any('gallery-controller.js' in s.get('src', '') for s in body.find_all('script'))
            if not has_controller:
                script_tag = soup.new_tag('script', src='/thejacketmaker/js/gallery-controller.js')
                body.append(script_tag)

        target_dir = os.path.join('public/thejacketmaker/collections', handle)
        os.makedirs(target_dir, exist_ok=True)
        target_path = os.path.join(target_dir, 'index.html')

        col_html = rebrand_text(str(soup))
        with open(target_path, 'w', encoding='utf-8') as f:
            f.write(col_html)

    print(f"Generated {len(collections_data)} collections successfully.")

    print("\n--- 2. Updating Homepage (index.html) ---")
    with open('audit/all_store_products_complete.json', 'r', encoding='utf-8') as f:
        all_store_prods = json.load(f)

    id_to_handle = {str(p['id']): p['handle'] for p in all_store_prods if p.get('id') and p.get('handle')}

    with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
        home_soup = BeautifulSoup(f.read(), 'html.parser')

    # Update megamenu on homepage
    col_gen.update_megamenu(home_soup)

    # Fix all product blocks in homepage by data-product-id
    blocks = home_soup.find_all(attrs={'data-product-id': True})
    updated_blocks = 0
    for block in blocks:
        pid = str(block.get('data-product-id', ''))
        if pid in id_to_handle:
            real_handle = id_to_handle[pid]
            for a in block.find_all('a'):
                a['href'] = f"/thejacketmaker/products/{real_handle}/index.html"
            updated_blocks += 1

    print(f"Updated {updated_blocks} product cards on homepage to their exact handles!")

    # Fix any remaining product links on homepage
    for a in home_soup.find_all('a'):
        href = a.get('href', '')
        if href.startswith('/products/'):
            slug = href.split('/products/')[1].split('?')[0].strip('/ ')
            a['href'] = f"/thejacketmaker/products/{slug}/index.html"
        txt = a.get_text(strip=True).lower()
        if 'keychain' in txt:
            a['href'] = '/thejacketmaker/collections/leather-keychains/index.html'

    home_html = rebrand_text(str(home_soup))
    with open('public/thejacketmaker/index.html', 'w', encoding='utf-8') as f:
        f.write(home_html)
    print("Homepage updated and rebranded!")

    print("\n--- 3. Updating Static Pages & Policies ---")
    for subdir in ['pages', 'policies']:
        dir_path = os.path.join('public/thejacketmaker', subdir)
        for root, dirs, files in os.walk(dir_path):
            for file in files:
                if file.endswith('.html'):
                    fpath = os.path.join(root, file)
                    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                    soup = BeautifulSoup(content, 'html.parser')
                    col_gen.update_megamenu(soup)
                    for a in soup.find_all('a'):
                        txt = a.get_text(strip=True).lower()
                        if 'keychain' in txt:
                            a['href'] = '/thejacketmaker/collections/leather-keychains/index.html'
                    updated = rebrand_text(str(soup))
                    with open(fpath, 'w', encoding='utf-8') as f:
                        f.write(updated)

    print("Static pages and policies updated and rebranded successfully!")

if __name__ == '__main__':
    main()
