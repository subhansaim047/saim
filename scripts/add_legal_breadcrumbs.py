import re

pages = [
    ("app/terms/page.tsx", "Terms of Service", "https://www.saimdev.site/terms"),
    ("app/privacy/page.tsx", "Privacy Policy", "https://www.saimdev.site/privacy"),
    ("app/cookie-policy/page.tsx", "Cookie Policy", "https://www.saimdev.site/cookie-policy"),
    ("app/disclaimer/page.tsx", "Food Safety Disclaimer", "https://www.saimdev.site/disclaimer"),
]

for file_path, name, url in pages:
    with open(file_path, "r", encoding="utf-8") as f:
        c = f.read()

    schema_str = f'''  const breadcrumbSchema = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      }},
      {{
        "@type": "ListItem",
        "position": 2,
        "name": "{name}",
        "item": "{url}"
      }}
    ]
  }};'''

    script_tag = '''      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />'''

    if "BreadcrumbList" not in c:
        # insert before return
        pattern = re.compile(r"export default function \w+\(\)\s*\{")
        match = pattern.search(c)
        if match:
            idx = match.end()
            c = c[:idx] + "\n" + schema_str + c[idx:]
            # now insert script tag in return
            c = re.sub(r"return\s*\(\s*(<[^>]+>)", f"return (\n    <>\n{script_tag}\n      \\1", c, count=1)
            # close fragment at end of component
            c = re.sub(r"(</[^>]+>\s*\n\s*\);?\s*\})", "\\1\n    </>\n  );\n}", c, count=1)
            # wait, let's do clean JSX replacement per page
    
print("Preparing precise per-page breadcrumb injection...")
