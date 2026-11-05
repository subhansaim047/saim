import type { Metadata } from 'next';
import { BlogPost2Page } from '@/components/BlogPost2Page';

export const metadata: Metadata = {
  title: 'Free Website for Small Business: Pros & Hidden Costs | Saim Dev',
  description: 'Compare free website builders with bespoke starter websites for UK small businesses. Learn the real pros, cons, hidden fees, and SEO trade-offs.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/free-website-for-local-business',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/free-website-for-local-business',
    },
  },
  openGraph: {
    title: 'Free Website for Small Business: Pros, Cons & Hidden Costs | Saim Dev',
    description: 'Compare free website builders with bespoke starter websites for UK small businesses. Learn the real pros, cons, hidden fees, and SEO trade-offs.',
    url: 'https://www.saimdev.site/blog/free-website-for-local-business',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-09-20T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Free Website for Small Business: Pros, Cons & Hidden Costs" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Free Website for Small Business: Pros, Cons & Hidden Costs | Saim Dev',
    description: 'Compare free website builders with bespoke starter websites for UK small businesses. Learn the real pros, cons, hidden fees, and SEO trade-offs.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Free Website for Small Business: Pros, Cons & Hidden Costs | Saim Dev",
    "description": "Compare free website builders with bespoke starter websites for UK small businesses. Learn the real pros, cons, hidden fees, and SEO trade-offs.",
    "url": "https://www.saimdev.site/blog/free-website-for-local-business",
    "datePublished": "2026-09-20",
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
      "@id": "https://www.saimdev.site/blog/free-website-for-local-business"
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
        "name": "Free Website for Small Business",
        "item": "https://www.saimdev.site/blog/free-website-for-local-business"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is there really no cost at all for a starter website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The custom website design and development are 100% free with no labour charge. You only cover standard direct infrastructure (your own domain name and hosting account, which remain under your complete ownership)."
        }
      },
      {
        "@type": "Question",
        "name": "What are the biggest downsides of free website builders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generic free website builders enforce intrusive third-party advertisements, lock you into subdomains (like yourname.wixsite.com), restrict local SEO meta controls, and charge steep monthly upgrade fees for basic features like custom forms."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom small business website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A complete bespoke Next.js website typically takes 5 to 10 business days from specification agreement to deployment, complete with mobile testing and schema validation."
        }
      },
      {
        "@type": "Question",
        "name": "What assets does a business owner need to provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your business name, logo, brief service descriptions, contact details, and photos. If you do not have photos, we advise on compliant, high-resolution photography alternatives."
        }
      },
      {
        "@type": "Question",
        "name": "What if our existing business website is simply outdated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An outdated or sluggish website qualifies for a complete performance rebuild. Replacing an old WordPress or builder site with modern Next.js instantly elevates local search rankings and mobile conversions."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after the free website is delivered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You retain 100% ownership of the website codebase and domain. There are zero ongoing obligations, lock-in contracts, or mandatory service fees."
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
      <BlogPost2Page />
    </>
  );
}
