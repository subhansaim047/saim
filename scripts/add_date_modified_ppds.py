with open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

target = 'offers: {\n      "@type": "Offer",\n      price: "0",\n      priceCurrency: "GBP",\n    },'
replacement = 'offers: {\n      "@type": "Offer",\n      price: "0",\n      priceCurrency: "GBP",\n    },\n    dateModified: "2026-10-27",'

if target in text:
    text = text.replace(target, replacement)
    with open('app/tools/ppds-label-generator/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Added dateModified to webAppSchema successfully.")
else:
    print("Could not find target in text.")
