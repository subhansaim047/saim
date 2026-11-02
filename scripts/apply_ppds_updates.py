import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update metadata
old_meta = """export const metadata: Metadata = {
  title: 'Free PPDS Food Label Template UK | Natasha\\'s Law',
  description: 'Generate compliant Natasha\\'s Law PPDS food labels online for free. Automatically bold all 14 statutory allergens, set expiry dates, and print A4 sheets.',
  alternates: {
    canonical: "https://www.saimdev.site/tools/ppds-label-generator",
  },
  openGraph: {
    title: 'Free PPDS Food Label Template UK | Natasha\\'s Law',
    description: 'Generate compliant Natasha\\'s Law PPDS food labels online for free. Automatically bold all 14 statutory allergens, set expiry dates, and print A4 sheets.',
    url: "https://www.saimdev.site/tools/ppds-label-generator",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Natasha's Law PPDS Food Label Generator - Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Free PPDS Food Label Template UK | Natasha\\'s Law',
    description: 'Generate compliant Natasha\\'s Law PPDS food labels online for free. Automatically bold all 14 statutory allergens, set expiry dates, and print A4 sheets.',
    images: ["https://www.saimdev.site/og-image.png"],
  },
};"""

new_meta = """export const metadata: Metadata = {
  title: "PPDS Label Generator UK | Free Natasha's Law Labels",
  description: "Generate compliant Natasha's Law PPDS food labels online. Automatically bold all 14 UK allergens, set use-by dates, and print free A4 sticker sheets.",
  alternates: {
    canonical: "https://www.saimdev.site/tools/ppds-label-generator",
    languages: {
      "en-GB": "https://www.saimdev.site/tools/ppds-label-generator",
    },
  },
  openGraph: {
    title: "PPDS Label Generator UK | Free Natasha's Law Labels",
    description: "Generate compliant Natasha's Law PPDS food labels online. Automatically bold all 14 UK allergens, set use-by dates, and print free A4 sticker sheets.",
    url: "https://www.saimdev.site/tools/ppds-label-generator",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Natasha's Law PPDS Food Label Generator - Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPDS Label Generator UK | Free Natasha's Law Labels",
    description: "Generate compliant Natasha's Law PPDS food labels online. Automatically bold all 14 UK allergens, set use-by dates, and print free A4 sticker sheets.",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};"""

if old_meta in text:
    text = text.replace(old_meta, new_meta)
    print("1. Updated metadata successfully.")
else:
    print("1. Could not match old_meta")

# 2. Add dateModified to webAppSchema
old_schema = """"offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  },"""
new_schema = """"offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  },
  "dateModified": "2026-10-27","""
if old_schema in text:
    text = text.replace(old_schema, new_schema)
    print("2. Added dateModified to schema.")
else:
    print("2. Could not match old_schema")

# 3. Fix corrupted £ symbol in header
text = text.replace('250 Takeaway Websites', '£250 Takeaway Websites')
print("3. Fixed pound symbol in header.")

# 4. Update H1
old_h1 = """          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Free Natasha's Law PPDS Food Label Template UK
          </h1>"""
new_h1 = """          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            PPDS Label Generator: Free Natasha's Law Food Labels
          </h1>"""
if old_h1 in text:
    text = text.replace(old_h1, new_h1)
    print("4. Updated H1 tag.")
else:
    print("4. Could not match old_h1")

# 5. Update Last updated date
old_date = """<span>Last updated: October 2026</span>"""
new_date = """<span>Last Reviewed: <strong>27 October 2026</strong></span>"""
if old_date in text:
    text = text.replace(old_date, new_date)
    print("5. Updated Last Reviewed date.")
else:
    print("5. Could not match old_date")

# 6. Update CTA anchor text in Takeaway Web Development conversion bridge
old_bridge_cta = """              <Link
                href="/services/takeaway-web-design"
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-5 py-3.5 rounded-full inline-flex items-center justify-center gap-1.5 transition-all border border-white/15"
              >
                <span>View Takeaway System (£250)</span>
              </Link>"""
new_bridge_cta = """              <Link
                href="/services/takeaway-web-design"
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-5 py-3.5 rounded-full inline-flex items-center justify-center gap-1.5 transition-all border border-white/15"
              >
                <span>takeaway website with allergen filter</span>
              </Link>"""
if old_bridge_cta in text:
    text = text.replace(old_bridge_cta, new_bridge_cta)
    print("6. Updated CTA anchor text.")
else:
    print("6. Could not match old_bridge_cta")

with open('app/tools/ppds-label-generator/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated app/tools/ppds-label-generator/page.tsx successfully.")
