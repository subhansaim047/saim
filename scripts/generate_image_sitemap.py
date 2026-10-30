import os
import re
import json
import xml.etree.ElementTree as ET
from xml.dom import minidom

BASE_URL = 'https://www.saimdev.site'

# 1. Read templates from src/data/saim_templates.ts
with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract template entries
template_pattern = re.compile(r'\{[^{}]*"slug":\s*"([^"]+)"[^{}]*"title":\s*"([^"]+)"[^{}]*"imgUrl":\s*"([^"]+)"(?:[^{}]*"thumbUrl":\s*"([^"]+)")?[^{}]*\}', re.DOTALL)

# Alternative cleaner regex
entries = []
block_pattern = re.compile(r'\{\s*"id":\s*"template-[^}]+?\n\s*\}', re.DOTALL)
for match in block_pattern.finditer(text):
    blk = match.group(0)
    slug_m = re.search(r'"slug":\s*"([^"]+)"', blk)
    title_m = re.search(r'"title":\s*"([^"]+)"', blk)
    img_m = re.search(r'"imgUrl":\s*"([^"]+)"', blk)
    thumb_m = re.search(r'"thumbUrl":\s*"([^"]+)"', blk)
    desc_m = re.search(r'"desc":\s*"([^"]+)"', blk)
    
    if slug_m and title_m and img_m:
        entries.append({
            'slug': slug_m.group(1),
            'title': title_m.group(1),
            'imgUrl': img_m.group(1),
            'thumbUrl': thumb_m.group(1) if thumb_m else None,
            'desc': desc_m.group(1) if desc_m else ''
        })

print(f"Extracted {len(entries)} templates from saim_templates.ts")

# 2. Read page plan to filter KEEP/IMPROVE templates
with open('src/data/page_plan.json', 'r', encoding='utf-8') as f:
    page_plan = json.load(f)

# Build image sitemap XML
urlset = ET.Element('urlset', {
    'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1'
})

def add_url_with_images(page_url, image_list):
    url_el = ET.SubElement(urlset, 'url')
    loc_el = ET.SubElement(url_el, 'loc')
    loc_el.text = page_url
    for img in image_list:
        img_el = ET.SubElement(url_el, 'image:image')
        iloc = ET.SubElement(img_el, 'image:loc')
        iloc.text = img['loc']
        if 'title' in img and img['title']:
            ititle = ET.SubElement(img_el, 'image:title')
            ititle.text = img['title']
        if 'caption' in img and img['caption']:
            icap = ET.SubElement(img_el, 'image:caption')
            icap.text = img['caption']

# Core Pages Images
add_url_with_images(f"{BASE_URL}/", [
    {
        'loc': f"{BASE_URL}/saim-dev-logo.jpg",
        'title': "Saim Dev - Lead Next.js Developer & Takeaway Web Specialist",
        'caption': "Official brand logo and profile of Saim Dev studio for UK restaurants and takeaways"
    },
    {
        'loc': f"{BASE_URL}/og-image.png",
        'title': "Saim Dev Takeaway Web Design Studio UK",
        'caption': "Bespoke online ordering and takeaway website architecture starting at GBP 250"
    }
])

add_url_with_images(f"{BASE_URL}/services/takeaway-web-design", [
    {
        'loc': f"{BASE_URL}/og-image.png",
        'title': "Takeaway Website Design UK Showcase",
        'caption': "Custom online ordering systems with 0% commission and POS integration for UK takeaways"
    }
])

# Demos Page Images (All 13 Showcase Designs)
demo_showcases = [
    ('/demos/previews/hotbite-street-food-takeaway.webp', 'Hotbite Street Food Takeaway Web Design', 'Fast food takeaway online ordering web design showcase by Saim Dev'),
    ('/demos/previews/burger-garage-restaurant-branding.webp', 'Burger Garage Restaurant Website Design', 'Gourmet burger bar takeaway brand and online ordering website'),
    ('/demos/previews/frenchyse-takeaway-restaurant-banner.webp', 'Frenchyse Restaurant & Cafe Website', 'Artisan French bistro and patisserie website design showcase'),
    ('/demos/previews/anzaar-rooftop-restaurant-banner.webp', 'Anzaar Rooftop Restaurant Website Showcase', 'High-end rooftop dining and takeaway online ordering interface'),
    ('/demos/previews/architecture-interior-studio-design.webp', 'Architecture & Interior Studio Web Design', 'Luxury architectural studio portfolio website design'),
    ('/demos/previews/woshico-cleaning-services-preview.webp', 'Woshico Cleaning Services Next.js Website', 'Commercial and domestic cleaning service booking website'),
    ('/demos/previews/detailx-car-detailing-auto-repair.webp', 'DetailX Car Detailing & Auto Repair Website', 'Automotive detailing service booking and pricing website'),
    ('/demos/previews/beauticians-on-the-go-mobile-day-spa.webp', 'Beauticians On The Go Mobile Spa Website', 'Mobile salon and beauty treatment appointment booking website'),
    ('/demos/previews/atelier-noir-luxury-interior-design.webp', 'Atelier Noir Luxury Interior Architecture Website', 'Minimalist high-end architecture design portfolio showcase'),
    ('/demos/previews/serenia-luxury-wellness-spa.webp', 'Serenia Luxury Wellness & Beauty Spa Website', 'Spa and holistic wellness center responsive website design')
]

add_url_with_images(f"{BASE_URL}/demos", [
    {
        'loc': f"{BASE_URL}{dloc}",
        'title': dtitle,
        'caption': dcap
    }
    for dloc, dtitle, dcap in demo_showcases
])

# Blog Posts Images
blog_data = [
    ('uk-food-hygiene-rating-scheme-5-star-checklist', '5-Star Food Hygiene Rating UK Checklist', 'Complete guide to achieving a 5-star Food Hygiene Rating from UK environmental health officers'),
    ('how-to-create-compliant-14-allergen-matrix-uk-restaurants', '14 Allergen Matrix Chart Guide', 'Step-by-step instructions for creating a compliant 14-allergen matrix in UK commercial kitchens'),
    ('mastering-food-cost-percentage-commercial-kitchen-calculator', 'Food Cost Percentage Commercial Kitchen Calculator', 'Formula and strategies to calculate food cost percentages and profit margins for UK hospitality'),
    ('how-to-scale-recipes-commercial-catering-batch-calculator', 'Commercial Recipe Batch Scale Calculator', 'How to scale batch recipes accurately for catering operations and restaurants'),
    ('sfbb-daily-kitchen-opening-closing-checklist-guide', 'SFBB Daily Kitchen Opening Closing Checklist', 'Safer Food Better Business diary records and opening closing audit tasks'),
    ('how-to-write-haccp-plan-uk-food-business-step-by-step', 'UK HACCP Food Safety Plan Workflow', 'The 7 principles of HACCP and food safety hazard control points for UK food businesses'),
    ('natashas-law-ppds-food-labelling-guide', 'Natashas Law PPDS Food Labelling Guide', 'Prepacked for Direct Sale allergen labelling regulations and compliant kitchen workflow'),
    ('commercial-kitchen-food-cooling-temperature-guide', 'Commercial Kitchen Food Cooling Temperature Guidelines', 'UK 90-minute safe cooling curve and blast chiller temperature benchmarks'),
    ('level-2-food-hygiene-practice-test-kitchen-staff-guide', 'Level 2 Food Hygiene Practice Test Questions', 'Essential training test questions and food safety answers for kitchen staff'),
    ('why-small-business-needs-website-2026', 'Why UK Small Businesses Need a Modern Website in 2026', 'Benefits of mobile-first fast loading websites over social media pages for local businesses'),
    ('free-website-for-local-business', 'Free Website Options for UK Local Businesses', 'Evaluating website builders versus bespoke high-converting websites'),
    ('50-percent-off-agency-launch', 'Saim Dev Agency Launch Offer', 'Special promotion on custom Next.js takeaway websites and SEO setup')
]

for bslug, btitle, bcap in blog_data:
    add_url_with_images(f"{BASE_URL}/blog/{bslug}", [
        {
            'loc': f"{BASE_URL}/og-image.png",
            'title': btitle,
            'caption': bcap
        }
    ])

# Client Demo Pages Images (Burger Garage, Anzaar, Frenchyse, Hotbite)
add_url_with_images(f"{BASE_URL}/burger-garage/index.html", [
    {
        'loc': f"{BASE_URL}/burger-garage/assets/media/barger-logo.png",
        'title': "Burger Garage Gourmet Takeaway Brand Logo",
        'caption': "Burger Garage bespoke takeaway website demo by Saim Dev"
    },
    {
        'loc': f"{BASE_URL}/burger-garage/assets/media/products/cat_wrap.jpg",
        'title': "Crispy Grilled Chicken Wrap Burger Garage",
        'caption': "Freshly made wraps on the Burger Garage takeaway menu"
    }
])

add_url_with_images(f"{BASE_URL}/anzaar/index.html", [
    {
        'loc': f"{BASE_URL}/anzaar/images/anzaar-logo.png",
        'title': "Anzaar Restaurant & Takeaway Brand Logo",
        'caption': "Anzaar online ordering and table booking showcase by Saim Dev"
    },
    {
        'loc': f"{BASE_URL}/anzaar/images/pizza-01.webp",
        'title': "Margherita Stone-Baked Pizza",
        'caption': "Traditional stone-baked margherita pizza on Anzaar takeaway menu"
    },
    {
        'loc': f"{BASE_URL}/anzaar/images/pizza_02.webp",
        'title': "Pepperoni Hot Pizza",
        'caption': "Spicy pepperoni pizza with mozzarella on Anzaar menu"
    },
    {
        'loc': f"{BASE_URL}/anzaar/images/pizza-03.webp",
        'title': "BBQ Chicken Feast Pizza",
        'caption': "Smoky BBQ chicken pizza with peppers and red onions"
    },
    {
        'loc': f"{BASE_URL}/anzaar/images/pizza-04.webp",
        'title': "Vegetarian Supreme Pizza",
        'caption': "Fresh vegetarian pizza topped with mushrooms, sweetcorn and peppers"
    },
    {
        'loc': f"{BASE_URL}/anzaar/images/pizza_05.webp",
        'title': "Meat Lovers Special Pizza",
        'caption': "Loaded meat feast pizza on Anzaar takeaway online ordering system"
    },
    {
        'loc': f"{BASE_URL}/anzaar/images/pizza_06.webp",
        'title': "Four Cheese Rustic Pizza",
        'caption': "Quattro formaggi pizza with cheddar, parmesan, gorgonzola and mozzarella"
    },
    {
        'loc': f"{BASE_URL}/anzaar/images/pizza-delivery.png",
        'title': "Fast UK Takeaway Delivery Service",
        'caption': "Online food delivery and tracking service illustration"
    }
])

add_url_with_images(f"{BASE_URL}/frenchyse/index.html", [
    {
        'loc': f"{BASE_URL}/frenchyse/images/frenchys-logo.png",
        'title': "Frenchyse Cafe & Bistro Brand Logo",
        'caption': "Frenchyse artisan cafe and bakery website demo by Saim Dev"
    }
])

# Food Safety Templates (All 160 templates)
count_templates = 0
for t in entries:
    slug = t['slug']
    page_url = f"{BASE_URL}/food-safety-templates/{slug}"
    img_items = []
    
    # Primary image
    img_loc = t['imgUrl']
    if not img_loc.startswith('http'):
        img_loc = f"{BASE_URL}{img_loc}"
    img_items.append({
        'loc': img_loc,
        'title': f"{t['title']} Template",
        'caption': f"{t['title']} - Printable UK Commercial Kitchen Food Safety Sheet PDF"
    })
    
    # Thumb image if distinct
    if t.get('thumbUrl') and t['thumbUrl'] != t['imgUrl']:
        thumb_loc = t['thumbUrl']
        if not thumb_loc.startswith('http'):
            thumb_loc = f"{BASE_URL}{thumb_loc}"
        img_items.append({
            'loc': thumb_loc,
            'title': f"{t['title']} Thumbnail Preview",
            'caption': f"Preview of {t['title']} compliance document"
        })
        
    add_url_with_images(page_url, img_items)
    count_templates += 1

print(f"Added {count_templates} templates to image sitemap")

# Write to public/image-sitemap.xml
xml_str = ET.tostring(urlset, encoding='utf-8')
dom = minidom.parseString(xml_str)
pretty_xml = dom.toprettyxml(indent='  ', encoding='utf-8')

# Ensure standard XML header
with open('public/image-sitemap.xml', 'wb') as fp:
    fp.write(pretty_xml)

print(f"Successfully generated public/image-sitemap.xml with {len(urlset)} URLs!")
