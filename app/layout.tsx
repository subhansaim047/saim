import type { Metadata } from 'next';
import { Inter, Instrument_Serif, Fraunces } from 'next/font/google';
import '../src/index.css'; // Global CSS
import { CookieBanner } from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const instrument = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ['latin'], variable: '--font-instrument' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });

export const metadata: Metadata = {
  title: 'Next.js Websites for UK Small Businesses | Saim Dev',
  description: 'Custom Next.js websites for UK small businesses from £250. Sub-second load speeds, clean code ownership, built-in SEO, and zero monthly agency lock-in.',
  metadataBase: new URL('https://www.saimdev.site'),
  alternates: {
    canonical: 'https://www.saimdev.site',
  },
  verification: {
    google: 'google0191625097e7b0a7',
  },
  openGraph: {
    title: 'Next.js Websites for UK Small Businesses | Saim Dev',
    description: 'Custom Next.js websites for UK small businesses from £250. Sub-second load speeds, clean code ownership, built-in SEO, and zero monthly agency lock-in.',
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
    title: 'Next.js Websites for UK Small Businesses | Saim Dev',
    description: 'Custom Next.js websites for UK small businesses from £250. Sub-second load speeds, clean code ownership, built-in SEO, and zero monthly agency lock-in.',
    creator: '@saimwebdev',
    images: ['https://www.saimdev.site/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  other: {
    'build-sha': process.env.VERCEL_GIT_COMMIT_SHA ? process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7) : 'local',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.saimdev.site/#organization",
  "name": "Saim Dev",
  "url": "https://www.saimdev.site",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.saimdev.site/saim-dev-logo.png",
    "width": 512,
    "height": 512
  },
  "image": "https://www.saimdev.site/og-image.png",
  "description": "Custom, high-performance Next.js websites for UK and European small businesses. Transparent fixed pricing from £250.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@saimdev.site",
    "url": "https://wa.me/923196526604",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://x.com/saimwebdev",
    "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER",
    "https://github.com/subhansaim047",
    "https://www.instagram.com/saim_agency/",
    "https://saimswebagency.quora.com/",
    "https://www.tiktok.com/@saimdev.site",
    "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog"
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.saimdev.site/#person",
  "name": "Saim Dev",
  "jobTitle": "Founder & Lead Next.js Architect",
  "worksFor": {
    "@id": "https://www.saimdev.site/#organization"
  },
  "url": "https://www.saimdev.site/about",
  "image": "https://www.saimdev.site/saim-dev-logo.jpg",
  "sameAs": [
    "https://x.com/saimwebdev",
    "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER",
    "https://github.com/subhansaim047",
    "https://www.instagram.com/saim_agency/",
    "https://saimswebagency.quora.com/",
    "https://www.tiktok.com/@saimdev.site",
    "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog"
  ]
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.saimdev.site/#professionalservice",
  "name": "Saim Dev - Next.js Web Architecture & Takeaway Systems",
  "url": "https://www.saimdev.site",
  "image": "https://www.saimdev.site/og-image.png",
  "priceRange": "£250 - £790",
  "areaServed": ["GB", "EU"],
  "parentOrganization": {
    "@id": "https://www.saimdev.site/#organization"
  },
  "founder": {
    "@id": "https://www.saimdev.site/#person"
  },
  "sameAs": [
    "https://x.com/saimwebdev",
    "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER",
    "https://github.com/subhansaim047",
    "https://www.instagram.com/saim_agency/",
    "https://saimswebagency.quora.com/",
    "https://www.tiktok.com/@saimdev.site",
    "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog"
  ]
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.saimdev.site/#website",
  "name": "Saim Dev",
  "url": "https://www.saimdev.site",
  "publisher": {
    "@id": "https://www.saimdev.site/#organization"
  },
  "inLanguage": "en-GB"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Google Consent Mode v2 Default Signals (Default Denied) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied'});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${instrument.variable} ${fraunces.variable} bg-black text-[#E1E0CC] antialiased selection:bg-primary selection:text-black`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
