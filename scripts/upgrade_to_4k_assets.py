import urllib.request
import os
import re
from PIL import Image

REPO_DIR = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
IMG_DIR = os.path.join(REPO_DIR, "public", "thejacketmaker", "images")

# Key banners and images that need 2K/4K ultra crisp resolution
HIGH_RES_TARGETS = [
    # Hero slider desktop
    ("homepage-0ffc82f66b90dae06d83f627fcb8739e8dcc70a4e279e5e2f133512cae941e9f.webp", 
     "https://www.thejacketmaker.pk/cdn/shop/files/homepage-0ffc82f66b90dae06d83f627fcb8739e8dcc70a4e279e5e2f133512cae941e9f.webp"),
    ("2048_x_1024_-_TJM.webp",
     "https://www.thejacketmaker.pk/cdn/shop/files/2048_x_1024_-_TJM_2048x.webp"),
    ("2048_x_1024_-_Trucarry.webp",
     "https://www.thejacketmaker.pk/cdn/shop/files/2048_x_1024_-_Trucarry_2048x.webp"),
    ("2048_x_1024_-_Eviternity.webp",
     "https://www.thejacketmaker.pk/cdn/shop/files/2048_x_1024_-_Eviternity_2048x.webp"),
    # Hero slider mobile
    ("Men-Mobile-03.jpg",
     "https://www.thejacketmaker.pk/cdn/shop/files/Men-Mobile-03.jpg"),
    ("1024_x_1024_-_Trucarry.webp",
     "https://www.thejacketmaker.pk/cdn/shop/files/1024_x_1024_-_Trucarry.webp"),
    ("1024_x_1024_-_Eviternity.webp",
     "https://www.thejacketmaker.pk/cdn/shop/files/1024_x_1024_-_Eviternity.webp"),
    # Flat 50% Off Leather Bags Banner (Section 16)
    ("formal-suiting-web-banner.webp",
     "https://www.thejacketmaker.pk/cdn/shop/files/formal-suiting-web-banner.webp"),
    ("formal-suiting-mobile-banner.webp",
     "https://www.thejacketmaker.pk/cdn/shop/files/formal-suiting-mobile-banner.webp"),
    # Clearance Sale Section 8 products
    ("Open_924e2bcc-2e03-42a2-940f-d4db23e24b9f.jpg",
     "https://www.thejacketmaker.pk/cdn/shop/files/Open_924e2bcc-2e03-42a2-940f-d4db23e24b9f_1024x1024.jpg"),
    ("Men_s_Evan_Hart_Fur_Brown_Leather_Jacket_Close_Front_1_86e2c111-4910-401f-b31a-add29b7c8232.jpg",
     "https://www.thejacketmaker.pk/cdn/shop/files/Men_s_Evan_Hart_Fur_Brown_Leather_Jacket_Close_Front_1_86e2c111-4910-401f-b31a-add29b7c8232_1024x1024.jpg"),
    ("02-_The_Poet_Navy_Blue_Leather_Tote_Bag_back-3-1666112702931.jpg",
     "https://www.thejacketmaker.pk/cdn/shop/products/02-_The_Poet_Navy_Blue_Leather_Tote_Bag_back-3-1666112702931_1024x1024.jpg"),
    ("Men_s_Allaric_Alley_Black_Leather_Biker_Jacket_2_11ac1524-562b-450d-bc1c-641e2af60a29.jpg",
     "https://www.thejacketmaker.pk/cdn/shop/files/Men_s_Allaric_Alley_Black_Leather_Biker_Jacket_2_11ac1524-562b-450d-bc1c-641e2af60a29_1024x1024.jpg"),
    ("Men_s_Sven_Black_Leather_Bomber_Jacket_Close_Front_81f18073-671c-4235-9034-7067d0a2f9b8.jpg",
     "https://www.thejacketmaker.pk/cdn/shop/files/Men_s_Sven_Black_Leather_Bomber_Jacket_Close_Front_81f18073-671c-4235-9034-7067d0a2f9b8_1024x1024.jpg"),
    ("02-_The_Darrio_Black_Leather_Duffle_Bag_front-3-1666112839958.jpg",
     "https://www.thejacketmaker.pk/cdn/shop/products/02-_The_Darrio_Black_Leather_Duffle_Bag_front-3-1666112839958_1024x1024.jpg")
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

print("=== Upgrading targets to Master 2K/4K resolution ===")
for fname, url in HIGH_RES_TARGETS:
    fpath = os.path.join(IMG_DIR, fname)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(fpath, "wb") as out_f:
                out_f.write(data)
            with Image.open(fpath) as im:
                print(f"[OK] {fname}: {im.width}x{im.height} ({len(data)/1024:.1f} KB)")
    except Exception as e:
        print(f"[ERR] {fname} from {url}: {e}")

print("Upgrade complete!")
