import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../src/index.css'; // Global CSS
import { CookieBanner } from '@/components/CookieBanner';
import { SmoothScroll } from '@/components/SmoothScroll';

const inter = localFont({
  src: '../src/fonts/inter-latin.woff2',
  weight: '400 700',
  variable: '--font-inter-orig',
  display: 'swap',
  preload: false,
});
const jakarta = localFont({
  src: '../src/fonts/plus-jakarta-sans-latin.woff2',
  weight: '400 700',
  variable: '--font-inter',
  display: 'swap',
});
const bricolage = localFont({
  src: '../src/fonts/bricolage-grotesque-latin.woff2',
  weight: '600 800',
  variable: '--font-heading',
  display: 'swap',
});
const jetbrainsMono = localFont({
  src: '../src/fonts/jetbrains-mono-latin.woff2',
  weight: '400 600',
  adjustFontFallback: false,
  variable: '--font-mono',
  display: 'swap',
});
const outfit = localFont({
  src: '../src/fonts/outfit-latin.woff2',
  weight: '700 900',
  variable: '--font-display',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Next.js Websites for UK Small Businesses | Saim Dev',
  description: 'From £250 / $300 fixed: custom Next.js websites for UK, US & EU brands. Sub-second load speeds, 100% code ownership & built-in SEO.',
  metadataBase: new URL('https://www.saimdev.site'),
  alternates: {
    canonical: 'https://www.saimdev.site',
  },
  verification: {
    google: 'google0191625097e7b0a7',
  },
  openGraph: {
    title: 'Next.js Websites for UK & US Businesses | Saim Dev',
    description: 'From £250 / $300 fixed: custom Next.js websites for UK, US & EU brands. Sub-second load speeds, 100% code ownership & built-in SEO.',
    url: 'https://www.saimdev.site',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: 'https://www.saimdev.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saim Dev - Custom Next.js Websites for UK, US & EU Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Websites for UK & US Businesses | Saim Dev',
    description: 'From £250 / $300 fixed: custom Next.js websites for UK, US & EU brands. Sub-second load speeds, 100% code ownership & built-in SEO.',
    creator: '@saimwebdev',
    site: '@saimwebdev',
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
    'thumbnail': 'https://www.saimdev.site/og-image.png',
    'build-sha': process.env.VERCEL_GIT_COMMIT_SHA ? process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7) : 'local',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.saimdev.site/#organization",
  "name": "Saim Dev",
  "url": "https://www.saimdev.site",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", "p"]
  },
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.saimdev.site/saim-dev-logo.png",
    "width": 512,
    "height": 512
  },
  "image": "https://www.saimdev.site/og-image.png",
  "description": "Custom Next.js websites, e-commerce stores, custom web applications, and takeaway ordering systems for UK, US, and European businesses. Transparent fixed pricing from £250 / $300.",
  "knowsAbout": [
    "Next.js 16 & React 19 Web Engineering",
    "Custom Web Applications & SaaS MVPs",
    "Headless Shopify & Custom eCommerce Storefronts",
    "Commission-Free UK Takeaway & Restaurant Ordering Systems",
    "Technical SEO, Canonicalization & Schema.org @graph",
    "Core Web Vitals & Website Speed Optimization"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "agency@saimdev.site",
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
  "name": "Saim Dev - Custom Web Development & Digital Engineering Studio",
  "url": "https://www.saimdev.site",
  "image": "https://www.saimdev.site/og-image.png",
  "priceRange": "£250 - £2,500 / $300 - $3,000",
  "telephone": "+923196526604",
  "email": "agency@saimdev.site",
  "areaServed": [
    { "@type": "Country", "name": "United Kingdom", "identifier": "GB" },
    { "@type": "Country", "name": "United States", "identifier": "US" },
    { "@type": "AdministrativeArea", "name": "European Union" }
  ],
  "hasMap": "https://maps.google.com/maps?q=United+Kingdom",
  "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
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
  "inLanguage": ["en-GB", "en-US"]
};

const stripContext = <T extends Record<string, unknown>>({ "@context": _ctx, ...rest }: T) => rest;

const rootSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    stripContext(organizationSchema),
    stripContext(personSchema),
    stripContext(webSiteSchema),
    stripContext(professionalServiceSchema),
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark" style={{ colorScheme: "dark" }}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Summary Context" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM Full Knowledge Corpus" />
        {/* Google Consent Mode v2 Default Signals (Default Denied) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied'});`,
          }}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="author" content="Saim Dev" />
        <meta name="image" content="https://www.saimdev.site/og-image.png" />
        <link rel="image_src" href="https://www.saimdev.site/og-image.png" />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{anonymize_ip:true});`,
              }}
            />
          </>
        ) : null}
        {/* Microsoft Clarity Analytics (Deferred to idle to preserve 100 mobile PageSpeed) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('load',function(){var loadClarity=function(){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","z7342zyo0u");};if(window.requestIdleCallback){requestIdleCallback(loadClarity,{timeout:3000})}else{setTimeout(loadClarity,1500)}});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchemaGraph) }}
        />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} ${bricolage.variable} ${jetbrainsMono.variable} ${outfit.variable} bg-[#050505] text-[#E8E4D9] antialiased selection:bg-[#2F6CE1] selection:text-white`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-semibold focus:rounded-md focus:shadow-lg">
          Skip to main content
        </a>
        <SmoothScroll />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
