import os
import re
import subprocess
import urllib.parse

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"

CSS_URLS = [
    ("styles.css", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/styles.css?v=23192325485103501651793168988"),
    ("swatches.css", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/swatches.css?v=63535705673985646561793168988"),
    ("slick.css", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/slick.css?v=11371836161327267251793168718"),
    ("slick-theme.css", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/slick-theme.css?v=138219439532829345231793168718"),
    ("modal.min.css", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/modal.min.css?v=110497937847514292711793168717"),
    ("fancybox.css", "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"),
    ("intlTelInput.css", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/intlTelInput.css?v=88961508673648375711793168988"),
    ("accelerated-checkout.css", "https://www.thejacketmaker.pk/cdn/shopifycloud/portable-wallets/latest/accelerated-checkout-backwards-compat.css"),
]

JS_URLS = [
    ("jquery.min.js", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/jquery.min.js?v=98014222988859431451793168716"),
    ("slick.min.js", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/slick.min.js?v=71779134894361685811793168719"),
    ("fancybox.umd.js", "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"),
    ("modal.min.js", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/modal.min.js?v=159519910713626114401793168717"),
    ("intlTelInput.min.js", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/intlTelInput.min.js?v=169975622367914620791793168715"),
    ("vendor.min.js", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/vendor.min.js?v=11589511144441591071793168723"),
    ("theme.js", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/theme.js?v=139047352831704519031793168722"),
    ("custom.js", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/custom.js?v=25268110243007141951793168712"),
    ("utils.js", "https://www.thejacketmaker.pk/cdn/shop/t/101/assets/utils.js?v=22537019896550327031793168722"),
]

FONT_URLS = [
    ("roboto_n4.woff2", "https://www.thejacketmaker.pk/cdn/fonts/roboto/roboto_n4.2019d890f07b1852f56ce63ba45b2db45d852cba.woff2"),
    ("roboto_n7.woff2", "https://www.thejacketmaker.pk/cdn/fonts/roboto/roboto_n7.f38007a10afbbde8976c4056bfe890710d51dec2.woff2"),
]

def download_file(url, target_path):
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    cmd = [
        "curl.exe", "-s", "-L",
        "-A", USER_AGENT,
        url,
        "-o", target_path
    ]
    subprocess.run(cmd, check=True)
    size = os.path.getsize(target_path) if os.path.exists(target_path) else 0
    print(f"Downloaded {target_path} ({size} bytes)")
    return size

def main():
    print("=== Downloading CSS ===")
    for filename, url in CSS_URLS:
        target = os.path.join("public", "thejacketmaker", "css", filename)
        download_file(url, target)

    print("\n=== Downloading JS ===")
    for filename, url in JS_URLS:
        target = os.path.join("public", "thejacketmaker", "js", filename)
        download_file(url, target)

    print("\n=== Downloading Fonts ===")
    for filename, url in FONT_URLS:
        target = os.path.join("public", "thejacketmaker", "fonts", filename)
        download_file(url, target)

    # Check font references inside styles.css and slick.css
    print("\n=== Checking additional font / asset URLs in CSS ===")
    with open("public/thejacketmaker/css/styles.css", "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    urls_in_css = set(re.findall(r'url\([\"\']?([^\"\'\)]+)[\"\']?\)', content))
    font_urls = [u for u in urls_in_css if any(ext in u.lower() for ext in [".woff", ".woff2", ".ttf", ".eot", ".svg"])]
    print(f"Found {len(font_urls)} font/asset URLs referenced in styles.css:")
    for fu in font_urls[:10]:
        print("  -", fu)

if __name__ == "__main__":
    main()
