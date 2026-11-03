import os
import re
import urllib.parse
import urllib.request
import ssl
from bs4 import BeautifulSoup

# Disable SSL verification issues if any
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'Accept': '*/*',
}

BASE_DIR = os.path.abspath("public/idreesleather")
CSS_DIR = os.path.join(BASE_DIR, "css")
JS_DIR = os.path.join(BASE_DIR, "js")
FONTS_DIR = os.path.join(BASE_DIR, "fonts")
IMAGES_DIR = os.path.join(BASE_DIR, "images")

for d in [BASE_DIR, CSS_DIR, JS_DIR, FONTS_DIR, IMAGES_DIR]:
    os.makedirs(d, exist_ok=True)

def download_file(url, target_path):
    if os.path.exists(target_path) and os.path.getsize(target_path) > 0:
        return True
    try:
        if url.startswith("//"):
            url = "https:" + url
        elif not url.startswith("http"):
            url = urllib.parse.urljoin("https://idreesleather.com/", url)
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            data = resp.read()
            with open(target_path, "wb") as f:
                f.write(data)
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

def sanitize_filename(url):
    parsed = urllib.parse.urlparse(url)
    base = os.path.basename(parsed.path)
    if not base or "." not in base:
        # hash or clean
        base = "asset_" + str(abs(hash(url)))
    # remove special chars
    base = re.sub(r'[^\w\.-]', '_', base)
    return base

with open("audit/idrees_raw.html", "r", encoding="utf-8") as f:
    raw_html = f.read()

soup = BeautifulSoup(raw_html, "html.parser")

print("1. Extracting and downloading stylesheets...")
css_mapping = {}
for link in soup.find_all("link", rel=lambda r: r and "stylesheet" in r):
    href = link.get("href")
    if not href:
        continue
    fname = sanitize_filename(href)
    if not fname.endswith(".css"):
        fname += ".css"
    dest = os.path.join(CSS_DIR, fname)
    if download_file(href, dest):
        css_mapping[href] = f"/idreesleather/css/{fname}"

print(f"Downloaded {len(css_mapping)} CSS files.")

print("2. Extracting and downloading fonts from HTML & CSS...")
font_urls = set(re.findall(r'url\([\'"]?([^\'")]+?\.(?:woff2|woff|ttf|eot)[^\'")]*?)[\'"]?\)', raw_html))
for css_file in os.listdir(CSS_DIR):
    css_path = os.path.join(CSS_DIR, css_file)
    with open(css_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
        fonts_in_css = re.findall(r'url\([\'"]?([^\'")]+?\.(?:woff2|woff|ttf|eot)[^\'")]*?)[\'"]?\)', content)
        for fu in fonts_in_css:
            font_urls.add(fu)

font_mapping = {}
for fu in font_urls:
    clean_url = fu.split("?")[0]
    fname = sanitize_filename(clean_url)
    dest = os.path.join(FONTS_DIR, fname)
    if download_file(fu, dest):
        font_mapping[fu] = f"/idreesleather/fonts/{fname}"
        font_mapping[clean_url] = f"/idreesleather/fonts/{fname}"

print(f"Downloaded {len(font_mapping)} font references.")

print("3. Extracting and downloading JavaScript files...")
js_mapping = {}
for script in soup.find_all("script"):
    src = script.get("src")
    if not src:
        continue
    # Skip third party external tracking ad pixels to ensure privacy & zero console spam
    if any(tracker in src for tracker in ["facebook.net", "tiktok.com", "google-analytics", "googletagmanager", "web-pixel"]):
        continue
    
    fname = sanitize_filename(src)
    if not fname.endswith(".js"):
        fname += ".js"
    dest = os.path.join(JS_DIR, fname)
    if download_file(src, dest):
        js_mapping[src] = f"/idreesleather/js/{fname}"

print(f"Downloaded {len(js_mapping)} JS files.")

print("4. Extracting and downloading images...")
img_urls = set()
for img in soup.find_all("img"):
    src = img.get("src")
    if src:
        img_urls.add(src)
    srcset = img.get("srcset")
    if srcset:
        for p in srcset.split(","):
            u = p.strip().split(" ")[0]
            if u:
                img_urls.add(u)

for source in soup.find_all("source"):
    src = source.get("src")
    if src:
        img_urls.add(src)
    srcset = source.get("srcset")
    if srcset:
        for p in srcset.split(","):
            u = p.strip().split(" ")[0]
            if u:
                img_urls.add(u)

for tag in soup.find_all(style=True):
    style = tag.get("style", "")
    for m in re.findall(r'url\([\'"]?([^\'")]+)[\'"]?\)', style):
        if not any(m.endswith(ext) for ext in [".woff", ".woff2", ".ttf"]):
            img_urls.add(m)

img_mapping = {}
for iu in img_urls:
    if iu.startswith("data:"):
        continue
    clean_url = iu.split("?")[0]
    fname = sanitize_filename(clean_url)
    dest = os.path.join(IMAGES_DIR, fname)
    if download_file(iu, dest):
        img_mapping[iu] = f"/idreesleather/images/{fname}"
        img_mapping[clean_url] = f"/idreesleather/images/{fname}"

print(f"Downloaded {len(img_mapping)} images.")

print("Scrape complete. Ready for HTML rewriting.")
