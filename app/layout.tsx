import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import '../src/index.css'; // Global CSS
import { CookieBanner } from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const instrument = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ['latin'], variable: '--font-instrument' });

export const metadata: Metadata = {
  title: 'Saim Dev - Next.js & Full Stack Web Developer | UK & Europe',
  description: 'Custom high-performance websites for UK, European, and global businesses. Built with Next.js 16, React, and Node.js. Optimised Core Web Vitals, privacy-conscious architecture, fast turnaround. Starting from £390.',
  metadataBase: new URL('https://www.saimdev.site'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google0191625097e7b0a7',
  },
  openGraph: {
    title: 'Saim Dev - High-Performance Web Development | Next.js Architecture',
    description: 'Custom high-performance websites for UK & European businesses. Fast delivery, 95+ Core Web Vitals, transparent fixed pricing.',
    url: '/',
    siteName: 'Saim Dev',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saim Dev - Next.js Developer for UK & Europe',
    description: 'Bespoke high-performance websites for businesses. Fast loading & privacy-conscious architecture.',
    creator: '@saimwebdev',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.saimdev.site/#organization",
  "name": "Saim Dev",
  "alternateName": "Saim Web Architecture Agency",
  "url": "https://www.saimdev.site",
  "logo": "https://www.saimdev.site/saim-dev-logo.png",
  "image": "https://www.saimdev.site/og-image.png",
  "description": "Bespoke high-performance web development and Next.js architecture for UK, European, and global businesses. Fast turnaround, sub-second loading, and SEO-engineered design.",
  "priceRange": "£390 - £1500",
  "currenciesAccepted": "GBP, EUR, USD",
  "paymentAccepted": "Bank Transfer, Stripe, Wise, Credit Card",
  "areaServed": [
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Ireland" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "Netherlands" },
    { "@type": "AdministrativeArea", "name": "European Union" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+923196526604",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${instrument.variable} bg-black text-[#E1E0CC] antialiased selection:bg-primary selection:text-black`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
