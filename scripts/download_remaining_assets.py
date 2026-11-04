import os
import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0'}

# 1. overflow-list.css
css_url = "https://idreesleather.com/cdn/shop/t/3/assets/overflow-list.css?v=16727044177065489451792675552"
dest_css = "public/idreesleather/css/overflow-list.css"
try:
    req = urllib.request.Request(css_url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
        with open(dest_css, "wb") as f:
            f.write(resp.read())
    print("Downloaded overflow-list.css")
except Exception as e:
    print("Failed overflow-list.css:", e)

# 2. popover-polyfill.js
js_url = "https://idreesleather.com/cdn/shop/t/3/assets/popover-polyfill.js?v=119029313658895111201792675552"
dest_js = "public/idreesleather/js/popover-polyfill.js"
try:
    req = urllib.request.Request(js_url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
        with open(dest_js, "wb") as f:
            f.write(resp.read())
    print("Downloaded popover-polyfill.js")
except Exception as e:
    print("Failed popover-polyfill.js:", e)
