import os
import sys
import json
from bs4 import BeautifulSoup

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('scripts'))
import generate_all_collections as gen

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

def build_image_slide_html(title, img_src, media_id):
    return f'''<div class="slide" data-media-id="{media_id}">
  <div class="product-media-wrapper" data-media-id="template--{media_id}" id="FeaturedMedia-template--{media_id}-wrapper" tabindex="-1">
    <div class="product-media product-media--image" style="padding-bottom: 100.0%">
      <div class="rimage-outer-wrapper">
        <div class="rimage-wrapper lazyload--placeholder" style="padding-top:100.0%">
          <img alt="{title}" class="rimage__image lazyload fade-in cover lazyloaded" data-aspectratio="1.0" data-parent-fit="cover" data-sizes="auto" data-src="{img_src}" src="{img_src}"/>
          <noscript>
            <img alt="{title}" class="rimage__image lazyloaded" src="{img_src}"/>
          </noscript>
        </div>
      </div>
    </div>
  </div>
</div>'''

def build_video_slide_html(title, video_url, poster_url, media_id):
    return f'''<div class="slide" data-media-id="{media_id}">
  <div class="product-media-wrapper" data-media-id="template--{media_id}" id="FeaturedMedia-template--{media_id}-wrapper" tabindex="-1">
    <div class="product-media product-media--video product-media--frame" data-enable-video-looping="true" data-video-id="" data-video-type="external" style="padding-bottom: 100.0%">
      <div class="product-media__poster lazyload--placeholder">
        <div class="rimage-background lazyload fade-in lazyloaded" style="background-image: url('{poster_url}') !important;"></div>
        <button aria-label="Play video" class="product-media__video-play-btn">
          <svg aria-hidden="true" class="icon icon--full-color icon-video-badge-full-color" focusable="false" role="presentation" viewbox="0 0 26 26"><path clip-rule="evenodd" d="M1 25h24V1H1v24z" fill-rule="evenodd"></path><path class="icon-video-badge-full-color-outline" d="M.5 25v.5h25V.5H.5V25z"></path><path class="icon-video-badge-full-color-element" clip-rule="evenodd" d="M9.718 6.72a1 1 0 0 0-1.518.855v10.736a1 1 0 0 0 1.562.827l8.35-5.677a1 1 0 0 0-.044-1.682l-8.35-5.06z" fill-rule="evenodd" opacity=".6"></path></svg>
        </button>
      </div>
      <script class="product-media__video-template" type="text/template">
        <video playsinline="playsinline" loop="loop" preload="none" aspect-ratio="1.0" aria-label="{title} Video" poster="{poster_url}">
          <source src="{video_url}" type="video/mp4">
          <img alt="{title} Video" src="{poster_url}">
        </video>
      </script>
    </div>
  </div>
</div>'''

def build_image_thumb_html(title, img_src, media_id):
    return f'''<a class="thumbnail thumbnail--media-image" data-media-id="{media_id}" href="{img_src}">
  <div class="rimage-outer-wrapper" style="max-width: 1080px">
    <div class="rimage-wrapper lazyload--placeholder" style="padding-top:100.0%">
      <img alt="{title}" class="rimage__image lazyload fade-in lazyloaded" src="{img_src}"/>
    </div>
  </div>
</a>'''

def build_video_thumb_html(title, video_url, poster_url, media_id):
    return f'''<a class="thumbnail thumbnail--media-video" data-media-id="{media_id}" href="{poster_url}">
  <div class="rimage-outer-wrapper" style="max-width: 1080px">
    <div class="rimage-wrapper lazyload--placeholder" style="padding-top:100.0%">
      <img alt="{title} Video" class="rimage__image lazyload fade-in lazyloaded" src="{poster_url}"/>
    </div>
  </div>
  <span data-src="{video_url}">
    <span class="watchvideo">Watch Video</span>
  </span>
</a>'''

def main():
    with open('audit/all_products_detailed.json', 'r', encoding='utf-8') as f:
        all_prods = json.load(f)

    # Collect video pool
    video_pool = []
    for h, p in all_prods.items():
        vids = [m for m in p.get('media', []) if m.get('media_type') == 'video']
        if vids:
            mp4s = [s['url'] for s in vids[0].get('sources', []) if s.get('format') == 'mp4']
            poster = vids[0].get('preview_image', {}).get('src', '')
            if mp4s and poster:
                video_pool.append({
                    'video_url': mp4s[0],
                    'poster': poster
                })

    print(f"Video pool contains {len(video_pool)} real HD product videos!")

    # Master template
    master_template_path = 'public/thejacketmaker/products/ionic-black-leather-jacket/index.html'
    with open(master_template_path, 'r', encoding='utf-8') as f:
        master_soup = BeautifulSoup(f.read(), 'html.parser')

    # Update mega menu on master soup
    gen.update_megamenu(master_soup)

    # Ensure gallery controller script is present
    body = master_soup.find('body')
    if body and not any('gallery-controller.js' in s.get('src', '') for s in body.find_all('script')):
        body.append(master_soup.new_tag('script', src='/thejacketmaker/js/gallery-controller.js'))

    # Store master html string
    master_html = str(master_soup)

    print(f"Master template prepared. Generating {len(all_prods)} products...")

    count = 0
    for handle, prod in all_prods.items():
        title = prod.get('title', handle.replace('-', ' ').title())
        p_id = prod.get('id', '')

        # Pricing
        variants = prod.get('variants', [{}])
        first_var = variants[0] if variants else {}
        price_val = first_var.get('price', '0')
        # if price is represented in cents (e.g. 3780000), adjust
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
        compare_fmt = format_price(compare_val) if compare_val else None
        discount = get_discount_pct(price_val, compare_val) or 50

        # Video
        native_vids = [m for m in prod.get('media', []) if m.get('media_type') == 'video']
        if native_vids:
            mp4s = [s['url'] for s in native_vids[0].get('sources', []) if s.get('format') == 'mp4']
            poster = native_vids[0].get('preview_image', {}).get('src', '')
            vid_url = mp4s[0] if mp4s else video_pool[0]['video_url']
            vid_poster = poster if poster else video_pool[0]['poster']
        else:
            # Deterministic video selection from pool
            pool_idx = abs(hash(handle)) % len(video_pool)
            vid_url = video_pool[pool_idx]['video_url']
            vid_poster = video_pool[pool_idx]['poster']

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
            img_urls = [vid_poster]

        # Parse fresh soup
        soup = BeautifulSoup(master_html, 'html.parser')

        # Update title & og
        title_tag = soup.find('title')
        if title_tag:
            title_tag.string = f"{title} | The Jacket Maker Pakistan"

        h1 = soup.find('h1', class_='title') or soup.find('h1')
        if h1:
            h1.string = title

        price_el = soup.find(class_='product-price__amount')
        if price_el:
            price_el.string = f"Rs.{price_fmt} PKR\n"

        compare_el = soup.find(class_='product-price__compare')
        if compare_el:
            if compare_fmt:
                compare_el.string = f"Rs.{compare_fmt}"
                compare_el.parent.style = ""
            else:
                compare_el.string = f"Rs.{format_price(float(price_val)*1.8)}"

        label_el = soup.find(class_='product-label--sale')
        if label_el:
            span = label_el.find('span')
            if span:
                span.string = f"{discount}% off"

        # Slides & Thumbs
        slides_html = []
        thumbs_html = []
        video_inserted = False

        for idx, src in enumerate(img_urls):
            # Insert video at position 2
            if idx == 2 and not video_inserted:
                v_mid = f"vid-{p_id}"
                slides_html.append(build_video_slide_html(title, vid_url, vid_poster, v_mid))
                thumbs_html.append(build_video_thumb_html(title, vid_url, vid_poster, v_mid))
                video_inserted = True

            i_mid = f"img-{p_id}-{idx}"
            slides_html.append(build_image_slide_html(title, src, i_mid))
            thumbs_html.append(build_image_thumb_html(title, src, i_mid))

        if not video_inserted:
            v_mid = f"vid-{p_id}"
            slides_html.append(build_video_slide_html(title, vid_url, vid_poster, v_mid))
            thumbs_html.append(build_video_thumb_html(title, vid_url, vid_poster, v_mid))

        slideshow_div = soup.find(class_='product-slideshow')
        if slideshow_div:
            slideshow_div.clear()
            for s_h in slides_html:
                slideshow_div.append(BeautifulSoup(s_h, 'html.parser'))

        thumbs_div = soup.find(class_='thumbnails')
        if thumbs_div:
            thumbs_div.clear()
            for t_h in thumbs_html:
                thumbs_div.append(BeautifulSoup(t_h, 'html.parser'))

        # Description
        body_html = prod.get('body_html') or prod.get('description')
        if body_html:
            desc_div = soup.find(class_='product-description')
            if desc_div:
                desc_div.clear()
                desc_div.append(BeautifulSoup(body_html, 'html.parser'))

        # Save product page
        p_dir = os.path.join('public/thejacketmaker/products', handle)
        os.makedirs(p_dir, exist_ok=True)
        p_file = os.path.join(p_dir, 'index.html')

        with open(p_file, 'w', encoding='utf-8') as pf:
            pf.write(str(soup))

        count += 1
        if count % 50 == 0 or count == len(all_prods):
            print(f"Generated {count}/{len(all_prods)} product pages...")

    print(f"\nCompleted! Generated {count} product pages with HD images and working videos.")

if __name__ == '__main__':
    main()
