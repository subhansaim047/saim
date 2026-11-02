import os

# 1. Update app/blog/why-small-business-needs-website/page.tsx
page_content = '''import type { Metadata } from 'next';
import { BlogPost1Page } from '@/components/BlogPost1Page';

export const metadata: Metadata = {
  title: 'Why UK Small Businesses Need a Professional Website | Saim Dev',
  description: 'Discover why small businesses need a website in the UK to turn local searches into paying customers, build trust, and avoid monthly platform subscription fees.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/why-small-business-needs-website',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/why-small-business-needs-website',
    },
  },
  openGraph: {
    title: 'Why UK Small Businesses Need a Professional Website | Saim Dev',
    description: 'Discover why small businesses need a website in the UK to turn local searches into paying customers, build trust, and avoid monthly platform subscription fees.',
    url: 'https://www.saimdev.site/blog/why-small-business-needs-website',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-08-11T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Why UK Small Businesses Need a Professional Website" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Why UK Small Businesses Need a Professional Website | Saim Dev',
    description: 'Discover why small businesses need a website in the UK to turn local searches into paying customers, build trust, and avoid monthly platform subscription fees.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why UK Small Businesses Need a Professional Website | Saim Dev",
    "description": "Discover why small businesses need a website in the UK to turn local searches into paying customers, build trust, and avoid monthly platform subscription fees.",
    "url": "https://www.saimdev.site/blog/why-small-business-needs-website",
    "datePublished": "2026-08-11",
    "dateModified": "2026-10-31",
    "author": {
      "@type": "Person",
      "name": "Saim Dev",
      "jobTitle": "Lead Next.js Architect & Full-Stack Specialist",
      "url": "https://www.saimdev.site/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.saimdev.site/saim-dev-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.saimdev.site/blog/why-small-business-needs-website"
    },
    "image": "https://www.saimdev.site/og-image.png"
  };

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
        "name": "Blog",
        "item": "https://www.saimdev.site/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Why UK Small Businesses Need a Professional Website",
        "item": "https://www.saimdev.site/blog/why-small-business-needs-website"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do small businesses still need a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — more than ever. According to BrightLocal's Local Consumer Review Survey, 98% of consumers used the internet to find information about local businesses in the past year. A website is the minimum standard customers expect before they trust a business."
        }
      },
      {
        "@type": "Question",
        "name": "Is a Facebook or Instagram page enough for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Social media is useful for engagement, but it does not replace a website. Social platforms control your reach through algorithms, restrict your branding, and do not rank effectively in Google organic search results. A website gives you full ownership, search visibility, and direct customer enquiries."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a professional small business website cost in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professionally built, custom website typically starts from £500 to £1,000 for UK small businesses as a one-time fixed investment without recurring platform fees. Most businesses recover this investment within weeks through a single customer conversion."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a small business website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A well-structured custom small business website takes 5 to 10 business days when built by an experienced developer using modern frameworks like Next.js, delivering instant sub-second page speed and built-in technical SEO from day one."
        }
      },
      {
        "@type": "Question",
        "name": "Can I build my own website using Wix or Squarespace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can, but there are real trade-offs. Generic template builders limit performance, code control, and technical SEO. They also charge recurring monthly subscriptions that accumulate significantly over time. A custom Next.js website offers higher Google rankings, complete design ownership, and no ongoing platform subscriptions."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most important element a small business website needs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A prominent, single call-to-action on every key page. Your website must immediately answer: what do you offer, who is it for, and how does the customer contact or book you with minimal friction."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogPost1Page />
    </>
  );
}
'''

with open('app/blog/why-small-business-needs-website/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

print("Updated app/blog/why-small-business-needs-website/page.tsx")
