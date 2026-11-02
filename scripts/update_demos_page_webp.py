import re

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\DemosPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

replacements = {
    '/hotbite/preview.jpg': '/demos/previews/hotbite-street-food-takeaway.webp',
    '/burger-garage/assets/media/logo.png': '/demos/previews/burger-garage-restaurant-branding.webp',
    '/frenchyse/images/banner-bg-03-new.png': '/demos/previews/frenchyse-takeaway-restaurant-banner.webp',
    '/anzaar/images/banner-bg-03-new.png': '/demos/previews/anzaar-rooftop-restaurant-banner.webp',
    '/demos/architecture/preview.png': '/demos/previews/architecture-interior-studio-design.webp',
    '/demos/woshico/images/69006b7b13043eba7258c780_home-one-ad-bg.jpg': '/demos/previews/woshico-cleaning-services-preview.webp',
    '/demos/akdetailing/images/157_1-video_21.jpeg': '/demos/previews/detailx-car-detailing-auto-repair.webp',
    '/demos/beauticiansonthego/preview.png': '/demos/previews/beauticians-on-the-go-mobile-day-spa.webp',
    '/demos/atelier-noir/preview.png': '/demos/previews/atelier-noir-luxury-interior-design.webp',
    '/demos/serenia/preview.png': '/demos/previews/serenia-luxury-wellness-spa.webp',
    '/demos/valeria/preview.png': '/demos/previews/valeria-luxury-beauty-salon.webp',
    '/demos/studio-dbrickell/assets/images/branding/og-image.jpg': '/demos/previews/studio-dbrickell-luxury-beauty-spa.webp',
    '/demos/liana/images/og-image.png': '/demos/previews/liana-luxury-hair-beauty-salon.webp'
}

for old_src, new_src in replacements.items():
    if old_src in c:
        c = c.replace(old_src, new_src)
        print(f"Replaced {old_src} -> {new_src}")
    else:
        print(f"Target not found: {old_src}")

# Also update the img tag to include width, height, loading="lazy", decoding="async", enriched alt
old_img = '''                <img
                  src={demo.previewImage}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />'''

new_img = '''                <img
                  src={demo.previewImage}
                  alt={`${demo.title} - Modern bespoke web design & engineering showcase`}
                  width={1200}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />'''

if old_img in c:
    c = c.replace(old_img, new_img)
    print("Updated <img> tag attributes in DemosPage.tsx")
else:
    # Try with CRLF
    old_img_crlf = old_img.replace('\n', '\r\n')
    new_img_crlf = new_img.replace('\n', '\r\n')
    if old_img_crlf in c:
        c = c.replace(old_img_crlf, new_img_crlf)
        print("Updated <img> tag attributes in DemosPage.tsx (CRLF)")
    else:
        print("Could not match old <img> tag directly, searching with regex...")
        c = re.sub(
            r'<img\s+src=\{demo\.previewImage\}\s+alt=\{demo\.title\}\s+className="([^"]+)"\s*/>',
            r'<img src={demo.previewImage} alt={`${demo.title} - Modern bespoke web design & engineering showcase`} width={1200} height={675} loading="lazy" decoding="async" className="\1" />',
            c
        )
        print("Updated <img> tag with regex!")

with open(path, "w", encoding="utf-8") as f:
    f.write(c)

print("Saved DemosPage.tsx successfully!")
