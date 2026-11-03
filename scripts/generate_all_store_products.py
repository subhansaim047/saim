import os
import json
import re

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

def normalize_url(url):
    if not url:
        return ""
    if url.startswith("//"):
        return "https:" + url
    return url

def build_image_slide_html(title, img_src, media_id):
    src = normalize_url(img_src)
    return f'''<div class="slide" data-media-id="{media_id}">
  <div class="product-media-wrapper" data-media-id="template--{media_id}" id="FeaturedMedia-template--{media_id}-wrapper" tabindex="-1">
    <div class="product-media product-media--image" style="padding-bottom: 100.0%">
      <div class="rimage-outer-wrapper">
        <div class="rimage-wrapper lazyload--placeholder" style="padding-top:100.0%">
          <img alt="{title}" class="rimage__image lazyload fade-in cover lazyloaded" data-aspectratio="1.0" data-parent-fit="cover" data-sizes="auto" data-src="{src}" src="{src}"/>
          <noscript>
            <img alt="{title}" class="rimage__image lazyloaded" src="{src}"/>
          </noscript>
        </div>
      </div>
    </div>
  </div>
</div>'''

def build_image_thumb_html(title, img_src, media_id):
    src = normalize_url(img_src)
    return f'''<a class="thumbnail thumbnail--media-image" data-media-id="{media_id}" href="{src}">
  <div class="rimage-outer-wrapper" style="max-width: 1080px">
    <div class="rimage-wrapper" style="padding-top:100.0%; position: relative; overflow: hidden;">
      <img alt="" class="thumb__img" src="{src}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;"/>
    </div>
  </div>
</a>'''

def main():
    print("Loading audit/master_product_template.html...")
    with open('audit/master_product_template.html', 'r', encoding='utf-8') as f:
        tpl = f.read()

    # Apply HQ Leathercon rebranding to template
    tpl = tpl.replace('The Jacket Maker Pakistan', 'HQ Leathercon')
    tpl = tpl.replace('The Jacket Maker', 'HQ Leathercon')
    tpl = tpl.replace('THE JACKET MAKER', 'HQ LEATHERCON')
    tpl = tpl.replace('the jacket maker', 'hq leathercon')
    tpl = tpl.replace('TheJacketMaker', 'HQLeathercon')
    tpl = tpl.replace('Jacket Maker', 'HQ Leathercon')
    tpl = tpl.replace('JACKET MAKER', 'HQ LEATHERCON')
    tpl = tpl.replace('#thejacketmaker', '#hqleathercon')
    tpl = tpl.replace('@thejacketmaker', '@hqleathercon')
    tpl = tpl.replace('© 2026 The Jacket Maker.', '© 2026 HQ Leathercon.')
    tpl = tpl.replace('The Jacket Maker (1:1 Interactive E-Commerce Clone)', 'HQ Leathercon (1:1 Interactive E-Commerce Clone)')

    # Strip background-video section and unboxing experience from template ONCE
    if '<div class="shopify-section' in tpl:
        parts = tpl.split('<div class="shopify-section')
        kept = [parts[0]]
        for part in parts[1:]:
            header = part[:1000].lower()
            if 'section-background-video' in header or 'background-video' in header:
                continue
            if 'unboxing experience' in part.lower():
                continue
            kept.append('<div class="shopify-section' + part)
        tpl = ''.join(kept)

    # Load all products
    with open('audit/all_store_products_complete.json', 'r', encoding='utf-8') as f:
        all_prods = json.load(f)

    print(f"Total store products to generate: {len(all_prods)}")

    # Specific replacements on template to prepare tokens
    # Title tag
    tpl = re.sub(r'<title>Ionic Black Leather Jacket \| [^<]*</title>', '<title>__PROD_TITLE__ | HQ Leathercon</title>', tpl)
    
    # H1 title
    tpl = tpl.replace('<h1 class="title">Ionic Black Leather Jacket</h1>', '<h1 class="title">__PROD_TITLE__</h1>')
    
    # Breadcrumbs current page
    tpl = re.sub(
        r'<a class="breadcrumbs-list__link" href="/thejacketmaker/products/ionic-black-leather-jacket/index\.html" aria-current="page">[^<]*</a>',
        '<a class="breadcrumbs-list__link" href="/thejacketmaker/products/__PROD_HANDLE__/index.html" aria-current="page">__PROD_TITLE__</a>',
        tpl
    )

    # Base price tag
    tpl = re.sub(
        r'product-price__amount--on-sale theme-money">Rs\.[0-9,]+(?:\.[0-9]+)?\s*PKR',
        'product-price__amount--on-sale theme-money">Rs.__PRICE_FMT__ PKR',
        tpl
    )

    # Compare price tag (first occurrence in main section)
    tpl = tpl.replace('product-price__compare theme-money">Rs.110,000.00</span>', 'product-price__compare theme-money">Rs.__COMPARE_FMT__</span>', 1)

    generated_count = 0
    for prod in all_prods:
        handle = prod.get('handle')
        if not handle:
            continue

        title = prod.get('title', handle.replace('-', ' ').title())
        p_id = prod.get('id', '')

        # Pricing
        variants = prod.get('variants', [{}])
        first_var = variants[0] if variants else {}
        price_val = first_var.get('price', '0')
        try:
            if float(price_val) > 1000000:
                price_val = float(price_val) / 100.0
        except Exception:
            pass

        compare_val = first_var.get('compare_at_price')
        try:
            if compare_val and float(compare_val) > 1000000:
                compare_val = float(compare_val) / 100.0
        except Exception:
            pass

        price_fmt = format_price(price_val)
        if compare_val and float(compare_val) > float(price_val):
            compare_fmt = format_price(compare_val)
        else:
            try:
                compare_fmt = format_price(float(price_val) * 1.5)
            except Exception:
                compare_fmt = price_fmt

        discount = get_discount_pct(price_val, compare_val) or 40

        # Images
        images = prod.get('images', [])
        img_urls = []
        for im in images:
            if isinstance(im, dict):
                src = im.get('src')
            elif isinstance(im, str):
                src = im
            else:
                src = None
            if src:
                img_urls.append(src)

        if not img_urls:
            img_urls = ['/thejacketmaker/images/placeholder.jpg']

        slides_html = []
        thumbs_html = []
        for idx, src in enumerate(img_urls):
            i_mid = f"img-{p_id}-{idx}"
            slides_html.append(build_image_slide_html(title, src, i_mid))
            thumbs_html.append(build_image_thumb_html(title, src, i_mid))

        slides_joined = "\n".join(slides_html)
        thumbs_joined = "\n".join(thumbs_html)

        # Description
        body_html = prod.get('body_html') or f"<p>{title} handcrafted from premium full-grain leather by HQ Leathercon master artisans.</p>"

        # Build product HTML via string replacement
        html = tpl
        html = html.replace('__PROD_TITLE__', title)
        html = html.replace('__PROD_HANDLE__', handle)
        html = html.replace('__PRICE_FMT__', price_fmt)
        html = html.replace('__COMPARE_FMT__', compare_fmt)
        html = html.replace('___PRODUCT_SLIDES___', slides_joined)
        html = html.replace('___PRODUCT_THUMBS___', thumbs_joined)
        html = html.replace('___PRODUCT_DESC___', body_html)
        html = html.replace('Ionic Black Leather Jacket', title)
        html = html.replace('#thejacketmaker', '#hqleathercon')
        html = html.replace('@thejacketmaker', '@hqleathercon')
        html = html.replace('The Jacket Maker', 'HQ Leathercon')
        html = html.replace('the jacket maker', 'hq leathercon')
        html = html.replace('THE JACKET MAKER', 'HQ LEATHERCON')
        html = html.replace('Jacket Maker', 'HQ Leathercon')

        # Ensure directory exists and write
        out_dir = os.path.join('public/thejacketmaker/products', handle)
        os.makedirs(out_dir, exist_ok=True)
        out_file = os.path.join(out_dir, 'index.html')
        with open(out_file, 'w', encoding='utf-8') as out_f:
            out_f.write(html)

        generated_count += 1
        if generated_count % 100 == 0 or generated_count == len(all_prods):
            print(f"Generated {generated_count}/{len(all_prods)} products...")

    print(f"\nAll {generated_count} product pages generated successfully!")

if __name__ == '__main__':
    main()
