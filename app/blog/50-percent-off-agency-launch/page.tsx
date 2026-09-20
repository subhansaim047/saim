import type { Metadata } from 'next';
import { BlogPost3Page } from '@/components/BlogPost3Page';

export const metadata: Metadata = {
  title: "I Just Launched My Web Agency — And I'm Offering 50% Off to My First Clients | Saim Dev",
  description: "Premium web development at half the price. Find out why I am offering this massive discount and how it can help your business grow.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/50-percent-off-agency-launch'
  },
  openGraph: {
    title: "I Just Launched My Web Agency — And I'm Offering 50% Off",
    description: "Premium web development at half the price. Limited time launch special.",
    url: "https://www.saimdev.site/blog/50-percent-off-agency-launch",
    type: "article",
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "I Just Launched My Web Agency — And I'm Offering 50% Off to My First Clients",
            description: "Premium web development at half the price. Find out why I am offering this massive discount and how it can help your business grow.",
            url: "https://www.saimdev.site/blog/50-percent-off-agency-launch",
            datePublished: "2026-09-20",
            author: {
              "@type": "Person",
              "name": "Saim Dev",
              "url": "https://www.saimdev.site"
            },
            publisher: {
              "@type": "Organization",
              "name": "Saim Dev",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.saimdev.site/saim-dev-logo.jpg"
              }
            }
          })
        }}
      />
      <BlogPost3Page />
    </>
  );
}
