import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICES_CATALOG } from "@/content/servicesData";
import { generateServiceSchemas } from "@/lib/serviceSchema";

const data = SERVICES_CATALOG["landing-pages-cro"];
const { serviceSchema, breadcrumbSchema, faqSchema } = generateServiceSchemas(data);

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  alternates: {
    canonical: data.canonicalUrl,
  },
  openGraph: {
    title: data.seoTitle,
    description: data.seoDescription,
    url: data.canonicalUrl,
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/hero-shots/shot-4.webp",
        width: 1200,
        height: 630,
        alt: "High-Converting Next.js Landing Page Design Services - Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: data.seoTitle,
    description: data.seoDescription,
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/hero-shots/shot-4.webp"],
  },
};

export default function LandingPagesCroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
