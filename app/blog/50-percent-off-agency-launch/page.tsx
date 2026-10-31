import type { Metadata } from 'next';
import { BlogPost3Page } from '@/components/BlogPost3Page';

export const metadata: Metadata = {
  title: 'Fixed Price Bespoke Website Design Package UK | Saim Dev',
  description: 'Explore our fixed-price bespoke Next.js website design package for UK small businesses. Learn what is included, how transparent agile pricing works, and our launch offer.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blog/50-percent-off-agency-launch',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/50-percent-off-agency-launch',
    },
  },
  openGraph: {
    title: 'Fixed Price Bespoke Website Design Package UK | Saim Dev',
    description: 'Explore our fixed-price bespoke Next.js website design package for UK small businesses. Learn what is included, how transparent agile pricing works, and our launch offer.',
    url: 'https://www.saimdev.site/blog/50-percent-off-agency-launch',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-09-20T00:00:00.000Z',
    modifiedTime: '2026-10-31T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Fixed Price Bespoke Website Design Package UK" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Fixed Price Bespoke Website Design Package UK | Saim Dev',
    description: 'Explore our fixed-price bespoke Next.js website design package for UK small businesses. Learn what is included, how transparent agile pricing works, and our launch offer.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Fixed Price Bespoke Website Design Package UK | Saim Dev",
    "description": "Explore our fixed-price bespoke Next.js website design package for UK small businesses. Learn what is included, how transparent agile pricing works, and our launch offer.",
    "url": "https://www.saimdev.site/blog/50-percent-off-agency-launch",
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
      "@id": "https://www.saimdev.site/blog/50-percent-off-agency-launch"
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
        "name": "Fixed Price Web Development Package",
        "item": "https://www.saimdev.site/blog/50-percent-off-agency-launch"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this a recurring discount or a one-time fee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is a one-time flat 50% discount on the entire project development cost. There are no hidden monthly retainer fees or mandatory ongoing contracts."
        }
      },
      {
        "@type": "Question",
        "name": "Will the website be fully custom or a template?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "100% custom. Even at half price, we do not use cheap, bloated templates. We engineer the layout, structure, and design from the ground up to fit your exact brand and business goals."
        }
      },
      {
        "@type": "Question",
        "name": "How long will the project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on the scope, most standard business websites are launched within 5 to 10 business days."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to pay for hosting and domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you are responsible for your own domain name and hosting plan. We will guide you on the best and most affordable platforms to use."
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
      <BlogPost3Page />
    </>
  );
}
