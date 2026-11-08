import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICES_CATALOG } from "@/content/servicesData";
import { generateServiceSchemas } from "@/lib/serviceSchema";

const data = SERVICES_CATALOG["website-clone"];
const { serviceSchema, breadcrumbSchema, faqSchema } = generateServiceSchemas(data);

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  alternates: {
    canonical: "https://www.saimdev.site/services/website-clone",
  },
  openGraph: {
    title: data.seoTitle,
    description: data.seoDescription,
    url: "https://www.saimdev.site/services/website-clone",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/hero-shots/shot-4.webp",
        width: 1200,
        height: 630,
        alt: "Pixel-Perfect Website & App Cloning Services - Saim Dev",
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

export default function CustomWebAppsRedirectPage() {
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
