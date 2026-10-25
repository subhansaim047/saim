import re

with open('app/layout.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Social profiles array
sameAsList = [
    "https://x.com/saimwebdev",
    "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER",
    "https://github.com/subhansaim047",
    "https://www.instagram.com/saim_agency/",
    "https://saimswebagency.quora.com/",
    "https://www.tiktok.com/@saimdev.site",
    "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog"
]

sameAsJson = '    ' + ',\n    '.join(f'"{url}"' for url in sameAsList)

new_metadata = '''export const metadata: Metadata = {
  title: 'Next.js Websites for UK & EU Small Businesses | Saim Dev',
  description: 'Custom, high-performance Next.js websites for UK and European small businesses. Transparent fixed pricing from £250 with sub-second speeds and SEO built-in.',
  metadataBase: new URL('https://www.saimdev.site'),
  alternates: {
    canonical: 'https://www.saimdev.site',
  },
  verification: {
    google: 'google0191625097e7b0a7',
  },
  openGraph: {
    title: 'Next.js Websites for UK & EU Small Businesses | Saim Dev',
    description: 'Custom, high-performance Next.js websites for UK and European small businesses. Transparent fixed pricing from £250 with sub-second speeds and SEO built-in.',
    url: 'https://www.saimdev.site',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://www.saimdev.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saim Dev - Next.js Websites for UK & EU Small Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Websites for UK & EU Small Businesses | Saim Dev',
    description: 'Custom, high-performance Next.js websites for UK and European small businesses. Transparent fixed pricing from £250 with sub-second speeds and SEO built-in.',
    creator: '@saimwebdev',
    images: ['https://www.saimdev.site/og-image.png'],
  },
  other: {
    'build-sha': process.env.VERCEL_GIT_COMMIT_SHA ? process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7) : 'local',
  },
};'''

new_schemas = f'''const organizationSchema = {{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.saimdev.site/#organization",
  "name": "Saim Dev",
  "url": "https://www.saimdev.site",
  "logo": {{
    "@type": "ImageObject",
    "url": "https://www.saimdev.site/saim-dev-logo.png",
    "width": 512,
    "height": 512
  }},
  "image": "https://www.saimdev.site/og-image.png",
  "description": "Custom, high-performance Next.js websites for UK and European small businesses. Transparent fixed pricing from £250.",
  "contactPoint": {{
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@saimdev.site",
    "url": "https://wa.me/923196526604",
    "availableLanguage": ["English"]
  }},
  "sameAs": [
{sameAsJson}
  ]
}};

const personSchema = {{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.saimdev.site/#person",
  "name": "Saim Dev",
  "jobTitle": "Founder & Lead Next.js Architect",
  "worksFor": {{
    "@id": "https://www.saimdev.site/#organization"
  }},
  "url": "https://www.saimdev.site/about",
  "image": "https://www.saimdev.site/saim-dev-logo.jpg",
  "sameAs": [
{sameAsJson}
  ]
}};

const professionalServiceSchema = {{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.saimdev.site/#professionalservice",
  "name": "Saim Dev - Next.js Web Architecture & Takeaway Systems",
  "url": "https://www.saimdev.site",
  "image": "https://www.saimdev.site/og-image.png",
  "priceRange": "£250 - £790",
  "areaServed": ["GB", "EU"],
  "parentOrganization": {{
    "@id": "https://www.saimdev.site/#organization"
  }},
  "founder": {{
    "@id": "https://www.saimdev.site/#person"
  }},
  "sameAs": [
{sameAsJson}
  ]
}};

const webSiteSchema = {{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.saimdev.site/#website",
  "name": "Saim Dev",
  "url": "https://www.saimdev.site",
  "publisher": {{
    "@id": "https://www.saimdev.site/#organization"
  }},
  "inLanguage": "en-GB"
}};'''

# Replace metadata
content = re.sub(r'export const metadata: Metadata = \{[\s\S]*?\n\};', new_metadata, content)

# Replace schemas block
content = re.sub(r'const organizationSchema = \{[\s\S]*?const webSiteSchema = \{[\s\S]*?\n\};', new_schemas, content)

# In RootLayout head, inject professionalServiceSchema
if 'professionalServiceSchema' not in content:
    content = content.replace(
        '<script\n          type="application/ld+json"\n          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}\n        />',
        '<script\n          type="application/ld+json"\n          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}\n        />\n        <script\n          type="application/ld+json"\n          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}\n        />'
    )

with open('app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated app/layout.tsx with metadata and JSON-LD schemas")
