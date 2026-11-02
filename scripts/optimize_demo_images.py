import os
from PIL import Image

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
public_dir = os.path.join(base_dir, "public")
output_dir = os.path.join(public_dir, "demos", "previews")
os.makedirs(output_dir, exist_ok=True)

demos_to_process = [
    {
        "id": "beauticiansonthego",
        "src": "demos/beauticiansonthego/preview.png",
        "out": "beauticians-on-the-go-mobile-day-spa.webp",
        "max_w": 1200
    },
    {
        "id": "atelier-noir",
        "src": "demos/atelier-noir/preview.png",
        "out": "atelier-noir-luxury-interior-design.webp",
        "max_w": 1200
    },
    {
        "id": "architecture",
        "src": "demos/architecture/preview.png",
        "out": "architecture-interior-studio-design.webp",
        "max_w": 1200
    },
    {
        "id": "liana",
        "src": "demos/liana/images/og-image.png",
        "out": "liana-luxury-hair-beauty-salon.webp",
        "max_w": 1200
    },
    {
        "id": "serenia",
        "src": "demos/serenia/preview.png",
        "out": "serenia-luxury-wellness-spa.webp",
        "max_w": 1200
    },
    {
        "id": "akdetailing",
        "src": "demos/akdetailing/images/157_1-video_21.jpeg",
        "out": "detailx-car-detailing-auto-repair.webp",
        "max_w": 1200
    },
    {
        "id": "valeria",
        "src": "demos/valeria/preview.png",
        "out": "valeria-luxury-beauty-salon.webp",
        "max_w": 1200
    },
    {
        "id": "hotbite",
        "src": "hotbite/preview.jpg",
        "out": "hotbite-street-food-takeaway.webp",
        "max_w": 1200
    },
    {
        "id": "burger-garage",
        "src": "burger-garage/assets/media/logo.png",
        "out": "burger-garage-restaurant-branding.webp",
        "max_w": 800
    },
    {
        "id": "woshico",
        "src": "demos/woshico/images/69006b7b13043eba7258c780_home-one-ad-bg.jpg",
        "out": "woshico-cleaning-services-preview.webp",
        "max_w": 1200
    },
    {
        "id": "studio-dbrickell",
        "src": "demos/studio-dbrickell/assets/images/branding/og-image.jpg",
        "out": "studio-dbrickell-luxury-beauty-spa.webp",
        "max_w": 1200
    },
    {
        "id": "frenchyse",
        "src": "frenchyse/images/banner-bg-03-new.png",
        "out": "frenchyse-takeaway-restaurant-banner.webp",
        "max_w": 800
    },
    {
        "id": "anzaar-rooftop",
        "src": "anzaar/images/banner-bg-03-new.png",
        "out": "anzaar-rooftop-restaurant-banner.webp",
        "max_w": 800
    }
]

total_before = 0
total_after = 0

print("=== OPTIMIZING DEMO PREVIEWS TO WEBP ===")
for item in demos_to_process:
    in_path = os.path.join(public_dir, item["src"].replace("/", os.sep))
    out_path = os.path.join(output_dir, item["out"])
    
    if not os.path.exists(in_path):
        print(f"Error: {in_path} does not exist!")
        continue
        
    size_before = os.path.getsize(in_path)
    total_before += size_before
    
    with Image.open(in_path) as im:
        # Convert RGBA to RGB if saving with quality or keep RGBA if transparency
        if im.mode in ("RGBA", "LA") and not any(pixel[3] < 255 for pixel in im.getdata() if len(pixel) > 3):
            im = im.convert("RGB")
        elif im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGB")
            
        w, h = im.size
        if w > item["max_w"]:
            new_h = int(h * (item["max_w"] / w))
            im = im.resize((item["max_w"], new_h), Image.Resampling.LANCZOS)
            
        im.save(out_path, "WEBP", quality=82, method=6)
        
    size_after = os.path.getsize(out_path)
    total_after += size_after
    reduction = ((size_before - size_after) / size_before) * 100
    print(f"[{item['id']}] {item['src']} -> {item['out']}: {size_before/1024:.1f} KB -> {size_after/1024:.1f} KB (-{reduction:.1f}%)")

print(f"\nTOTAL BEFORE: {total_before/1024:.1f} KB")
print(f"TOTAL AFTER:  {total_after/1024:.1f} KB")
print(f"TOTAL SAVED:  {(total_before - total_after)/1024:.1f} KB (-{((total_before - total_after)/total_before)*100:.1f}%)")
