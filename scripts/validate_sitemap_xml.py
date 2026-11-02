import xml.etree.ElementTree as ET

def validate():
    tree = ET.parse("public/sitemap.xml")
    root = tree.getroot()
    print("Root tag:", root.tag)

    ns = {
        "sm": "http://www.sitemaps.org/schemas/sitemap/0.9",
        "image": "http://www.google.com/schemas/sitemap-image/1.1"
    }

    urls = root.findall("sm:url", ns)
    images = root.findall(".//image:image", ns)

    print(f"Total URLs in sitemap: {len(urls)}")
    print(f"Total <image:image> tags in sitemap: {len(images)}")

    for img in images[:6]:
        loc = img.find("image:loc", ns)
        title = img.find("image:title", ns)
        loc_text = loc.text if loc is not None else ""
        title_text = title.text if title is not None else ""
        print(f"  Image: {loc_text}")
        print(f"    Title: {title_text}")

if __name__ == "__main__":
    validate()
