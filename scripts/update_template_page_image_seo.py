with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update OG and Twitter images in generateMetadata
old_og_block = """      images: [
        {
          url: "https://www.saimdev.site/og-image.png",
          width: 1200,
          height: 630,
          alt: `${template.title} - Saim Dev`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@saimwebdev",
      title: pageTitle,
      description: pageDesc,
      images: ["https://www.saimdev.site/og-image.png"],
    },"""

new_og_block = """      images: [
        {
          url: `https://www.saimdev.site${template.imgUrl || template.thumbUrl || '/og-image.png'}`,
          width: 1200,
          height: 630,
          alt: `${template.title} - Free UK Food Hygiene Template (PDF Download)`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@saimwebdev",
      title: pageTitle,
      description: pageDesc,
      images: [`https://www.saimdev.site${template.imgUrl || template.thumbUrl || '/og-image.png'}`],
    },"""

if old_og_block in code:
    code = code.replace(old_og_block, new_og_block)
    print("Updated OG & Twitter images in generateMetadata")
else:
    print("WARNING: old_og_block not found")

# 2. Add previewImageUrl and imageSchema in TemplateDetailRoute
old_canonical_decl = "  const canonicalUrl = `https://www.saimdev.site/food-safety-templates/${slug}`;"
new_canonical_decl = """  const canonicalUrl = `https://www.saimdev.site/food-safety-templates/${slug}`;
  const previewImageUrl = `https://www.saimdev.site${template.imgUrl || template.thumbUrl || '/og-image.png'}`;"""

if old_canonical_decl in code and 'const previewImageUrl' not in code:
    code = code.replace(old_canonical_decl, new_canonical_decl)
    print("Added previewImageUrl")

# 3. Add image to structuredSchema
old_web_app = """"applicationCategory": "BusinessApplication","""
new_web_app = """"applicationCategory": "BusinessApplication",
        "image": previewImageUrl,"""

old_doc = """"fileFormat": "application/pdf","""
new_doc = """"fileFormat": "application/pdf",
        "image": previewImageUrl,"""

if old_web_app in code and '"image": previewImageUrl' not in code:
    code = code.replace(old_web_app, new_web_app)
    code = code.replace(old_doc, new_doc)
    print("Added image property to structuredSchema")

# 4. Add imageSchema definition and script injection
old_faq_schema_def = "  const faqSchema = {"
image_schema_def = """  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": previewImageUrl,
    "url": previewImageUrl,
    "name": `${template.title} Template`,
    "caption": `${template.title} - Printable UK Food Hygiene & Safety Sheet (PDF Download)`,
    "description": template.desc,
    "representativeOfPage": true,
    "author": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site"
    }
  };

  const faqSchema = {"""

if old_faq_schema_def in code and 'const imageSchema' not in code:
    code = code.replace(old_faq_schema_def, image_schema_def)
    print("Added imageSchema definition")

old_script_return = """      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />"""

new_script_return = """      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />"""

if old_script_return in code and 'JSON.stringify(imageSchema)' not in code:
    code = code.replace(old_script_return, new_script_return)
    print("Injected imageSchema script tag")

with open('app/food-safety-templates/[slug]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Saved app/food-safety-templates/[slug]/page.tsx")
