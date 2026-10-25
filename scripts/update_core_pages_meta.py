import re

# 1. app/contact/page.tsx
with open('app/contact/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace(
    'Contact Saim Dev about a fast, mobile-friendly website for your UK or European business. Message on WhatsApp or send a project brief.',
    'Contact Saim Dev about a fast, mobile-friendly website for your UK or European business. Message us on WhatsApp or submit your brief for a fast free quote.'
)
with open('app/contact/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated app/contact/page.tsx")

# 2. app/cookie-policy/page.tsx
with open('app/cookie-policy/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace(
    'Comprehensive cookie and browser storage inventory for Saim Dev. Learn how our essential technical storage and interactive tools operate.',
    'Comprehensive cookie and browser storage inventory for Saim Dev. Learn how our essential technical storage and interactive kitchen tools store data locally.'
)
with open('app/cookie-policy/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated app/cookie-policy/page.tsx")

# 3. app/privacy/page.tsx
with open('app/privacy/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace(
    'How Saim Dev collects, uses, and protects personal data from enquiries and free tools under UK GDPR and the Data Protection Act 2018.',
    'Read how Saim Dev collects, uses, and protects personal data from enquiries and free tools in compliance with UK GDPR and the Data Protection Act 2018.'
)
with open('app/privacy/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated app/privacy/page.tsx")

# 4. app/case-studies/page.tsx
case_studies_meta = '''export const metadata: Metadata = {
  title: "Next.js Case Studies & Web Performance Results | Saim Dev",
  description: "Explore verified Next.js website case studies for UK and European businesses. Discover real sub-second speed metrics, SEO growth, and client revenue gains.",
  alternates: {
    canonical: 'https://www.saimdev.site/case-studies'
  },
  openGraph: {
    title: "Next.js Case Studies & Web Performance Results | Saim Dev",
    description: "Explore verified Next.js website case studies for UK and European businesses. Discover real sub-second speed metrics, SEO growth, and client revenue gains.",
    url: 'https://www.saimdev.site/case-studies',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: 'Saim Dev Case Studies' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Next.js Case Studies & Web Performance Results | Saim Dev",
    description: "Explore verified Next.js website case studies for UK and European businesses. Discover real sub-second speed metrics, SEO growth, and client revenue gains.",
    images: ['https://www.saimdev.site/og-image.png']
  }
};'''
with open('app/case-studies/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'export const metadata: Metadata = \{[\s\S]*?\n\};', case_studies_meta, c)
with open('app/case-studies/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated app/case-studies/page.tsx")

# 5. app/technologies/page.tsx
technologies_meta = '''export const metadata: Metadata = {
  title: "Modern Tech Stack: Next.js, React & Tailwind CSS | Saim Dev",
  description: "Explore the modern technology stack behind our high-performance websites: Next.js App Router, React, Tailwind CSS, TypeScript, and edge cloud infrastructure.",
  alternates: {
    canonical: 'https://www.saimdev.site/technologies'
  },
  openGraph: {
    title: "Modern Tech Stack: Next.js, React & Tailwind CSS | Saim Dev",
    description: "Explore the modern technology stack behind our high-performance websites: Next.js App Router, React, Tailwind CSS, TypeScript, and edge cloud infrastructure.",
    url: 'https://www.saimdev.site/technologies',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: 'Saim Dev Tech Stack' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Modern Tech Stack: Next.js, React & Tailwind CSS | Saim Dev",
    description: "Explore the modern technology stack behind our high-performance websites: Next.js App Router, React, Tailwind CSS, TypeScript, and edge cloud infrastructure.",
    images: ['https://www.saimdev.site/og-image.png']
  }
};'''
with open('app/technologies/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'export const metadata: Metadata = \{[\s\S]*?\n\};', technologies_meta, c)
with open('app/technologies/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated app/technologies/page.tsx")

# 6. app/nextjs-developer-uk/page.tsx
with open('app/nextjs-developer-uk/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
uk_meta = '''export const metadata: Metadata = {
  title: "Next.js Developer UK | High-Performance Web Development for British & European Businesses",
  description: "Hire an expert freelance Next.js developer for UK businesses. Sub-second loading, clean React code, built-in SEO, and transparent fixed pricing from £390.",
  alternates: {
    canonical: "https://www.saimdev.site/nextjs-developer-uk",
  },
  openGraph: {
    title: "Next.js Developer UK | High-Performance Web Development | Saim Dev",
    description: "Hire an expert freelance Next.js developer for UK businesses. Sub-second loading, clean React code, built-in SEO, and transparent fixed pricing from £390.",
    url: "https://www.saimdev.site/nextjs-developer-uk",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [{ url: "https://www.saimdev.site/og-image.png", width: 1200, height: 630, alt: "Next.js Developer UK" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Developer UK | High-Performance Web Development | Saim Dev",
    description: "Hire an expert freelance Next.js developer for UK businesses. Sub-second loading, clean React code, built-in SEO, and transparent fixed pricing from £390.",
    images: ["https://www.saimdev.site/og-image.png"]
  }
};'''
c = re.sub(r'export const metadata: Metadata = \{[\s\S]*?\n\};', uk_meta, c)
with open('app/nextjs-developer-uk/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated app/nextjs-developer-uk/page.tsx")
