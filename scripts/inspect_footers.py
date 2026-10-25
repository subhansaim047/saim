import urllib.request
import os
from PIL import Image

sample_urls = [
    ("Freezer_temp_C.png", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Freezer_temp_C.png"),
    ("Cooling_methods_C.png", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Cooling_methods_C.png"),
    ("Four_safety_rules_C.png", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Four_safety_rules_C.png"),
    ("Handwashing_poster.png", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Handwashing_poster.png"),
    ("Food_temp_poster_C.png", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Food_temp_poster_C.png")
]

os.makedirs("test_posters", exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for fname, url in sample_urls:
    local_path = os.path.join("test_posters", fname)
    print(f"Downloading {url}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(local_path, "wb") as f:
            f.write(resp.read())
        im = Image.open(local_path)
        print(f"  Downloaded {fname}: Size = {im.size}, Mode = {im.mode}")
        # Crop footer (bottom 250px)
        w, h = im.size
        footer = im.crop((0, h - 250, w, h))
        footer_path = os.path.join("test_posters", f"footer_{fname}")
        footer.save(footer_path)
    except Exception as e:
        print(f"  Error downloading {fname}: {e}")
