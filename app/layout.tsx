import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import '../src/index.css'; // Global CSS
import { CookieBanner } from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const instrument = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ['latin'], variable: '--font-instrument' });

export const metadata: Metadata = {
  title: 'Saim Dev - Next.js & Full Stack Web Developer | UK & Europe',
  description: 'Custom, fast Next.js websites for UK and European businesses. Fixed pricing: £250 Landing Page, £390 Starter, £790 Business.',
  metadataBase: new URL('https://www.saimdev.site'),
  alternates: {
    canonical: 'https://www.saimdev.site',
  },
  verification: {
    google: 'google0191625097e7b0a7',
  },
  openGraph: {
    title: 'Saim Dev - Next.js & Full Stack Web Developer | UK & Europe',
    description: 'Custom, fast Next.js websites for UK and European businesses. Fixed pricing: £250 Landing Page, £390 Starter, £790 Business.',
    url: 'https://www.saimdev.site',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://www.saimdev.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saim Dev - Next.js Web Development for UK & Europe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saim Dev - Next.js & Full Stack Web Developer | UK & Europe',
    description: 'Custom, fast Next.js websites for UK and European businesses. Fixed pricing: £250 Landing Page, £390 Starter, £790 Business.',
    creator: '@saimwebdev',
    images: ['https://www.saimdev.site/og-image.png'],
  },
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
  "description": "Custom, fast Next.js websites for UK and European businesses. Fixed pricing: £250 Landing Page, £390 Starter, £790 Business.",
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
    "https://saimswebagency.quora.com/"
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.saimdev.site/#person",
  "name": "Saim",
  "jobTitle": "Lead Full Stack Developer & Next.js Architect",
  "worksFor": {
    "@id": "https://www.saimdev.site/#organization"
  },
  "url": "https://www.saimdev.site",
  "image": "https://www.saimdev.site/saim-dev-logo.jpg",
  "sameAs": [
    "https://x.com/saimwebdev",
    "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER",
    "https://github.com/subhansaim047"
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
      </head>
      <body className={`${inter.variable} ${instrument.variable} bg-black text-[#E1E0CC] antialiased selection:bg-primary selection:text-black`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
