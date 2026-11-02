import urllib.request
import time

def verify_live():
    print("Waiting 15 seconds for Vercel deployment...")
    time.sleep(15)
    
    # 1. Verify image-sitemap.xml
    try:
        url = 'https://www.saimdev.site/image-sitemap.xml'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8')
            has_images = 'image:image' in content and 'freezer-temperature-chart' in content
            print(f"1. Live image-sitemap.xml: {'PASS' if has_images else 'FAIL'} (length: {len(content)} bytes)")
    except Exception as e:
        print(f"1. Live image-sitemap.xml error: {e}")

    # 2. Verify robots.txt
    try:
        url = 'https://www.saimdev.site/robots.txt'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8')
            has_bot = 'Googlebot-Image' in content
            has_sitemap = 'image-sitemap.xml' in content
            print(f"2. Live robots.txt: Googlebot-Image={'PASS' if has_bot else 'FAIL'} | Image Sitemap={'PASS' if has_sitemap else 'FAIL'}")
    except Exception as e:
        print(f"2. Live robots.txt error: {e}")

    # 3. Verify template detail page ImageObject schema
    try:
        url = 'https://www.saimdev.site/food-safety-templates/freezer-temperature-chart'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8')
            has_img_schema = 'ImageObject' in content
            print(f"3. Template page ImageObject schema: {'PASS' if has_img_schema else 'FAIL'}")
    except Exception as e:
        print(f"3. Template page ImageObject schema error: {e}")

if __name__ == '__main__':
    verify_live()
