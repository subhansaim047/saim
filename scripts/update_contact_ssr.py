"""
Expand Contact page with SSR FAQ and Service Description
Also add FAQPage schema to app/contact/page.tsx
"""
import os

# 1. Update src/components/ContactPage.tsx
contact_cmp_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\ContactPage.tsx"
with open(contact_cmp_path, "r", encoding="utf-8") as f:
    cmp_content = f.read()

cmp_norm = cmp_content.replace("\r\n", "\n")

faq_markup = """        {/* WHY WORK WITH US — Sybiosme Grid */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white text-center mb-8">
            Why Work With {ownerFacts.voice === "I" ? "Me" : "Us"}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "5–10 days swift project execution without compromising quality." },
              { icon: Search, title: "SEO Ready", desc: "On-page SEO, schema markup, and Google Search Console indexing." },
              { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless layout and touch performance across all mobile devices." },
              { icon: ShieldCheck, title: "Ongoing Support", desc: "14–30 days dedicated post-launch maintenance and support." },
            ].map((card, i) => (
              <div key={i} className="rounded-[1.75rem] bg-[#121212] p-6 border border-white/10 hover:border-white/20 transition-colors">
                <card.icon className="w-6 h-6 text-[#FF4A1C] mb-3" />
                <h3 className="text-white font-medium mb-1 text-sm">{card.title}</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT FAQ — Questions Before Enquiring */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF4A1C] block mb-2">
              Quick Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white" style={{ letterSpacing: "-0.04em" }}>
              Frequently Asked Questions Before You Enquire
            </h2>
            <p className="text-white/65 text-xs sm:text-sm max-w-xl mx-auto mt-2 font-light">
              Clear answers on pricing, delivery timelines, code ownership, and remote delivery for UK and European clients.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "How much does a website cost for a UK business?",
                a: "Our transparent fixed pricing starts from £250 for a single high-converting landing page, £390 for a full multi-page business website, and £790 for a custom takeaway ordering system with allergen filters. There are zero hidden monthly fees or agency markups — you pay once and own everything.",
              },
              {
                q: "How quickly can you build and launch my website?",
                a: "Landing pages are typically delivered within 3–5 business days. Full multi-page business websites take 5–7 days, and complete takeaway systems with ordering menus take 7–10 days from brief to live production deployment.",
              },
              {
                q: "Do you work with UK businesses remotely?",
                a: "Yes. Saim Dev operates as a dedicated remote studio serving UK and European clients from Pakistan. All communication happens directly via WhatsApp or email — no account managers, no delays, just direct access to your lead developer.",
              },
              {
                q: "What areas of the UK do you cover?",
                a: "We serve businesses across the entire United Kingdom including London, Manchester, Birmingham, Leeds, Glasgow, Edinburgh, Bristol, Liverpool, and all surrounding areas. Our services are delivered 100% remotely with zero travel fees.",
              },
              {
                q: "What makes Saim Dev different from a traditional UK web agency?",
                a: "Traditional UK digital agencies charge £2,000–£10,000 for websites that take months to deliver. Saim Dev offers fixed prices from £250, direct developer communication, sub-second page speeds with 95+ PageSpeed scores, and 5–10 day turnaround — without agency bloat.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group rounded-[1.5rem] bg-[#121212] border border-white/10 px-6 py-4 cursor-pointer hover:border-white/20 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 list-none select-none focus:outline-none">
                  <span className="text-white text-sm font-medium leading-snug">
                    {item.q}
                  </span>
                  <span className="text-[#FF4A1C] text-lg font-light flex-shrink-0">+</span>
                </summary>
                <p className="pt-3 pb-1 text-white/65 text-xs sm:text-sm leading-relaxed font-light">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>"""

why_work_block = """        {/* WHY WORK WITH US — Sybiosme Grid */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white text-center mb-8">
            Why Work With {ownerFacts.voice === "I" ? "Me" : "Us"}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "5–10 days swift project execution without compromising quality." },
              { icon: Search, title: "SEO Ready", desc: "On-page SEO, schema markup, and Google Search Console indexing." },
              { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless layout and touch performance across all mobile devices." },
              { icon: ShieldCheck, title: "Ongoing Support", desc: "14–30 days dedicated post-launch maintenance and support." },
            ].map((card, i) => (
              <div key={i} className="rounded-[1.75rem] bg-[#121212] p-6 border border-white/10 hover:border-white/20 transition-colors">
                <card.icon className="w-6 h-6 text-[#FF4A1C] mb-3" />
                <h3 className="text-white font-medium mb-1 text-sm">{card.title}</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>"""

if why_work_block in cmp_norm:
    cmp_norm = cmp_norm.replace(why_work_block, faq_markup, 1)
    if "\r\n" in cmp_content:
        cmp_new = cmp_norm.replace("\n", "\r\n")
    else:
        cmp_new = cmp_norm
    with open(contact_cmp_path, "w", encoding="utf-8") as f:
        f.write(cmp_new)
    print("Updated ContactPage.tsx with FAQ section!")
else:
    print("Why work block not found in ContactPage.tsx")

# 2. Update app/contact/page.tsx to include FAQPage schema
contact_page_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\contact\page.tsx"
contact_page_code = """import type { Metadata } from 'next';
import { ContactPage } from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Saim Dev | Fast Fixed-Price Website Quotes',
  description: 'Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/contact',
    languages: {
      'en-GB': 'https://www.saimdev.site/contact',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Contact Saim Dev | Fast Fixed-Price Website Quotes',
    description: 'Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.',
    url: 'https://www.saimdev.site/contact',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    images: [
      {
        url: 'https://www.saimdev.site/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Saim Dev for Fixed-Price Website Project Quotes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Contact Saim Dev | Fast Fixed-Price Website Quotes',
    description: 'Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.',
    images: ['https://www.saimdev.site/og-contact.png'],
  },
};

const contactFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a website cost for a UK business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our transparent fixed pricing starts from £250 for a single high-converting landing page, £390 for a full multi-page business website, and £790 for a custom takeaway ordering system with allergen filters. There are zero hidden monthly fees or agency markups — you pay once and own everything."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you build and launch my website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Landing pages are typically delivered within 3–5 business days. Full multi-page business websites take 5–7 days, and complete takeaway systems with ordering menus take 7–10 days from brief to live production deployment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with UK businesses remotely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Saim Dev operates as a dedicated remote studio serving UK and European clients from Pakistan. All communication happens directly via WhatsApp or email — no account managers, no delays, just direct access to your lead developer."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of the UK do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve businesses across the entire United Kingdom including London, Manchester, Birmingham, Leeds, Glasgow, Edinburgh, Bristol, Liverpool, and all surrounding areas. Our services are delivered 100% remotely with zero travel fees."
      }
    }
  ]
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.saimdev.site/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
      />
      <ContactPage />
    </>
  );
}
"""

with open(contact_page_path, "w", encoding="utf-8") as f:
    f.write(contact_page_code)
print("Updated app/contact/page.tsx with FAQPage schema!")
