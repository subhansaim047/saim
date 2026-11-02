path = "app/layout.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

target = '''        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />'''

replacement = '''        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />'''

if target in content and 'professionalServiceSchema' not in content.split('<head>')[1]:
    content = content.replace(target, replacement, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Added professionalServiceSchema to head in layout.tsx")
else:
    print("professionalServiceSchema already in head or target not found")
