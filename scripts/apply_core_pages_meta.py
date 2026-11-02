import os
import re

def update_file(path, old_pattern, replacement):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if re.search(old_pattern, content):
        new_content = re.sub(old_pattern, replacement, content, count=1)
        with open(path, 'w', encoding='utf-8', newline='') as f:
            f.write(new_content)
        print(f"[OK] Updated {path}")
        return True
    else:
        print(f"[WARN] Pattern not found in {path}")
        return False

# 1. app/about/page.tsx
c_about = open('app/about/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_about:
    old_about = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/about[\"'],?\s*\})"
    rep_about = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  alternates: {\n"
        "    canonical: \"https://www.saimdev.site/about\",\n"
        "    languages: {\n"
        "      \"en-GB\": \"https://www.saimdev.site/about\",\n"
        "    },\n"
        "  }"
    )
    update_file('app/about/page.tsx', old_about, rep_about)

# 2. app/services/page.tsx
c_services = open('app/services/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_services:
    old_services = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/services[\"']\s*\})"
    rep_services = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  alternates: {\n"
        "    canonical: 'https://www.saimdev.site/services',\n"
        "    languages: {\n"
        "      'en-GB': 'https://www.saimdev.site/services',\n"
        "    },\n"
        "  }"
    )
    update_file('app/services/page.tsx', old_services, rep_services)

# Add creator to twitter in app/services/page.tsx
c_services = open('app/services/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_services:
    old_tw = r"(twitter:\s*\{\s*card:\s*'summary_large_image',)"
    rep_tw = r"\1\n    creator: '@saimwebdev',"
    update_file('app/services/page.tsx', old_tw, rep_tw)

# Add FAQPage and Service schema to app/services/page.tsx
c_services = open('app/services/page.tsx', 'r', encoding='utf-8').read()
if 'FAQPage' not in c_services:
    target_return = r"export default function Page\(\) \{"
    schema_code = (
        "const servicesFaqSchema = {\n"
        "  \"@context\": \"https://schema.org\",\n"
        "  \"@type\": \"FAQPage\",\n"
        "  \"mainEntity\": [\n"
        "    {\n"
        "      \"@type\": \"Question\",\n"
        "      \"name\": \"Which plan or service is right for my business?\",\n"
        "      \"acceptedAnswer\": {\n"
        "        \"@type\": \"Answer\",\n"
        "        \"text\": \"If you operate a UK takeaway, cafe, or restaurant, our £250 Fixed Price Takeaway Package is specifically tailored to eliminate 30%+ Just Eat, Deliveroo, and Uber Eats commissions with an interactive Natasha's Law allergen-filtered menu. For general UK and European small businesses, our Starter Plan begins at £250, and comprehensive multi-page custom builds range from £350 to £850.\"\n"
        "      }\n"
        "    },\n"
        "    {\n"
        "      \"@type\": \"Question\",\n"
        "      \"name\": \"Does the takeaway website include Natasha's Law allergen filtering?\",\n"
        "      \"acceptedAnswer\": {\n"
        "        \"@type\": \"Answer\",\n"
        "        \"text\": \"Yes. Every restaurant and takeaway site we deliver includes an interactive 14-allergen filter matrix on the digital menu. Diners can filter out nuts, gluten, dairy, celery, mustard, etc. in real time, helping you maintain compliance with the Food Information Regulations 2014 and Natasha's Law.\"\n"
        "      }\n"
        "    },\n"
        "    {\n"
        "      \"@type\": \"Question\",\n"
        "      \"name\": \"Are there any recurring commission fees or monthly subscriptions?\",\n"
        "      \"acceptedAnswer\": {\n"
        "        \"@type\": \"Answer\",\n"
        "        \"text\": \"None. Unlike aggregator platforms (Just Eat, Deliveroo) that take 20% to 35% of every single order, you pay a one-time fixed price from £250. Orders go directly to your WhatsApp or kitchen tablet, and you keep 100% of your customer revenue.\"\n"
        "      }\n"
        "    },\n"
        "    {\n"
        "      \"@type\": \"Question\",\n"
        "      \"name\": \"Do I get full ownership of the website?\",\n"
        "      \"acceptedAnswer\": {\n"
        "        \"@type\": \"Answer\",\n"
        "        \"text\": \"Yes! Upon project completion and full payment, you receive full ownership of the Next.js code, assets, and design with zero recurring agency locks or platform dependency.\"\n"
        "      }\n"
        "    }\n"
        "  ]\n"
        "};\n\n"
        "export default function Page() {"
    )
    update_file('app/services/page.tsx', target_return, schema_code)

    # Render script in app/services/page.tsx
    old_script = r'(<script\s+type="application/ld\+json"\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(breadcrumbSchema\)\s*\}\}\s*/>)'
    rep_script = (
        r'\1\n      <script\n'
        r'        type="application/ld+json"\n'
        r'        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}\n'
        r'      />'
    )
    update_file('app/services/page.tsx', old_script, rep_script)

# 3. app/services/takeaway-web-design/page.tsx
c_twd = open('app/services/takeaway-web-design/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_twd:
    old_twd = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/services/takeaway-web-design[\"'],?\s*\})"
    rep_twd = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  alternates: {\n"
        "    canonical: \"https://www.saimdev.site/services/takeaway-web-design\",\n"
        "    languages: {\n"
        "      \"en-GB\": \"https://www.saimdev.site/services/takeaway-web-design\",\n"
        "    },\n"
        "  }"
    )
    update_file('app/services/takeaway-web-design/page.tsx', old_twd, rep_twd)

# Update OG image and twitter in app/services/takeaway-web-design/page.tsx
c_twd = open('app/services/takeaway-web-design/page.tsx', 'r', encoding='utf-8').read()
if 'og-services.png' not in c_twd:
    old_img = r'url:\s*"https://www\.saimdev\.site/og-image\.png",\s*width:\s*1200,\s*height:\s*630,\s*alt:\s*"Takeaway Website Design UK - Saim Dev",'
    rep_img = (
        'url: "https://www.saimdev.site/og-services.png",\n'
        '        width: 1200,\n'
        '        height: 630,\n'
        '        alt: "Takeaway Website Design UK - Saim Dev",\n'
        '        type: "image/png",'
    )
    update_file('app/services/takeaway-web-design/page.tsx', old_img, rep_img)

c_twd = open('app/services/takeaway-web-design/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_twd:
    old_tw = r'(twitter:\s*\{\s*card:\s*"summary_large_image",)'
    rep_tw = r'\1\n    creator: "@saimwebdev",'
    update_file('app/services/takeaway-web-design/page.tsx', old_tw, rep_tw)
    old_tw_img = r'images:\s*\["https://www\.saimdev\.site/og-image\.png"\]'
    rep_tw_img = 'images: ["https://www.saimdev.site/og-services.png"]'
    update_file('app/services/takeaway-web-design/page.tsx', old_tw_img, rep_tw_img)

# 4. app/nextjs-developer-uk/page.tsx
c_uk = open('app/nextjs-developer-uk/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_uk:
    old_uk = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/nextjs-developer-uk[\"'],?\s*\})"
    rep_uk = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  alternates: {\n"
        "    canonical: \"https://www.saimdev.site/nextjs-developer-uk\",\n"
        "    languages: {\n"
        "      \"en-GB\": \"https://www.saimdev.site/nextjs-developer-uk\",\n"
        "    },\n"
        "  }"
    )
    update_file('app/nextjs-developer-uk/page.tsx', old_uk, rep_uk)

c_uk = open('app/nextjs-developer-uk/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_uk:
    old_tw = r'(twitter:\s*\{\s*card:\s*"summary_large_image",)'
    rep_tw = r'\1\n    creator: "@saimwebdev",'
    update_file('app/nextjs-developer-uk/page.tsx', old_tw, rep_tw)

# 5. app/case-studies/page.tsx
c_cs = open('app/case-studies/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_cs:
    old_cs = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/case-studies[\"']\s*\})"
    rep_cs = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  alternates: {\n"
        "    canonical: 'https://www.saimdev.site/case-studies',\n"
        "    languages: {\n"
        "      'en-GB': 'https://www.saimdev.site/case-studies',\n"
        "    },\n"
        "  }"
    )
    update_file('app/case-studies/page.tsx', old_cs, rep_cs)

c_cs = open('app/case-studies/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_cs:
    old_tw = r"(twitter:\s*\{\s*card:\s*'summary_large_image',)"
    rep_tw = r"\1\n    creator: '@saimwebdev',"
    update_file('app/case-studies/page.tsx', old_tw, rep_tw)

c_cs = open('app/case-studies/page.tsx', 'r', encoding='utf-8').read()
if 'og-demos.png' not in c_cs:
    old_img = r"url:\s*'https://www\.saimdev\.site/og-image\.png',\s*width:\s*1200,\s*height:\s*630,\s*alt:\s*'Saim Dev Case Studies'"
    rep_img = "url: 'https://www.saimdev.site/og-demos.png', width: 1200, height: 630, alt: 'Client Web Development Case Studies - Saim Dev', type: 'image/png'"
    update_file('app/case-studies/page.tsx', old_img, rep_img)
    old_tw_img = r"images:\s*\['https://www\.saimdev\.site/og-image\.png'\]"
    rep_tw_img = "images: ['https://www.saimdev.site/og-demos.png']"
    update_file('app/case-studies/page.tsx', old_tw_img, rep_tw_img)

# 6. app/blogs/page.tsx
c_blogs = open('app/blogs/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_blogs:
    old_bl = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/blogs[\"'],?\s*\})"
    rep_bl = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  alternates: {\n"
        "    canonical: 'https://www.saimdev.site/blogs',\n"
        "    languages: {\n"
        "      'en-GB': 'https://www.saimdev.site/blogs',\n"
        "    },\n"
        "  }"
    )
    update_file('app/blogs/page.tsx', old_bl, rep_bl)

# 7. app/demos/page.tsx
c_demos = open('app/demos/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_demos:
    old_dm = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/demos[\"']\s*\})"
    rep_dm = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  alternates: {\n"
        "    canonical: 'https://www.saimdev.site/demos',\n"
        "    languages: {\n"
        "      'en-GB': 'https://www.saimdev.site/demos',\n"
        "    },\n"
        "  }"
    )
    update_file('app/demos/page.tsx', old_dm, rep_dm)

c_demos = open('app/demos/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_demos:
    old_tw = r"(twitter:\s*\{\s*card:\s*'summary_large_image',)"
    rep_tw = r"\1\n    creator: '@saimwebdev',"
    update_file('app/demos/page.tsx', old_tw, rep_tw)

# 8. app/contact/page.tsx (preserve exact Guard 11 patterns)
c_contact = open('app/contact/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_contact:
    old_ct = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/contact[\"'],?\s*\})"
    rep_ct = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  alternates: {\n"
        "    canonical: 'https://www.saimdev.site/contact',\n"
        "    languages: {\n"
        "      'en-GB': 'https://www.saimdev.site/contact',\n"
        "    },\n"
        "  }"
    )
    update_file('app/contact/page.tsx', old_ct, rep_ct)

c_contact = open('app/contact/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_contact:
    old_tw = r"(twitter:\s*\{\s*card:\s*'summary_large_image',)"
    rep_tw = r"\1\n    creator: '@saimwebdev',"
    update_file('app/contact/page.tsx', old_tw, rep_tw)

# Add ContactPage schema to app/contact/page.tsx
c_contact = open('app/contact/page.tsx', 'r', encoding='utf-8').read()
if 'ContactPage' not in c_contact:
    target_contact = r"export default function Page\(\) \{"
    contact_schema_code = (
        "const contactPageSchema = {\n"
        "  \"@context\": \"https://schema.org\",\n"
        "  \"@type\": \"ContactPage\",\n"
        "  \"name\": \"Contact Saim Dev\",\n"
        "  \"description\": \"Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.\",\n"
        "  \"url\": \"https://www.saimdev.site/contact\",\n"
        "  \"mainEntity\": {\n"
        "    \"@type\": \"Organization\",\n"
        "    \"name\": \"Saim Dev\",\n"
        "    \"url\": \"https://www.saimdev.site\",\n"
        "    \"contactPoint\": {\n"
        "      \"@type\": \"ContactPoint\",\n"
        "      \"contactType\": \"customer service\",\n"
        "      \"email\": \"contact@saimdev.site\",\n"
        "      \"url\": \"https://wa.me/923196526604\",\n"
        "      \"availableLanguage\": [\"English\"]\n"
        "    }\n"
        "  }\n"
        "};\n\n"
        "export default function Page() {"
    )
    update_file('app/contact/page.tsx', target_contact, contact_schema_code)

    old_contact_script = r'(<script\s+type="application/ld\+json"\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(breadcrumbSchema\)\s*\}\}\s*/>)'
    rep_contact_script = (
        r'\1\n      <script\n'
        r'        type="application/ld+json"\n'
        r'        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}\n'
        r'      />'
    )
    update_file('app/contact/page.tsx', old_contact_script, rep_contact_script)

# 9. app/technologies/page.tsx
c_tech = open('app/technologies/page.tsx', 'r', encoding='utf-8').read()
if 'robots:' not in c_tech:
    old_tech = r"(alternates:\s*\{\s*canonical:\s*[\"']https://www\.saimdev\.site/technologies[\"']\s*\})"
    rep_tech = (
        "robots: {\n"
        "    index: true,\n"
        "    follow: true,\n"
        "  },\n"
        "  alternates: {\n"
        "    canonical: 'https://www.saimdev.site/technologies',\n"
        "    languages: {\n"
        "      'en-GB': 'https://www.saimdev.site/technologies',\n"
        "    },\n"
        "  }"
    )
    update_file('app/technologies/page.tsx', old_tech, rep_tech)

c_tech = open('app/technologies/page.tsx', 'r', encoding='utf-8').read()
if 'creator:' not in c_tech:
    old_tw = r"(twitter:\s*\{\s*card:\s*'summary_large_image',)"
    rep_tw = r"\1\n    creator: '@saimwebdev',"
    update_file('app/technologies/page.tsx', old_tw, rep_tw)

print("Core pages updated.")
