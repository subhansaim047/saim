import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICES_CATALOG } from "@/content/servicesData";
import { generateServiceSchemas } from "@/lib/serviceSchema";

const data = SERVICES_CATALOG["website-development"];
const { schemaGraph } = generateServiceSchemas(data);

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  alternates: {
    canonical: data.canonicalUrl,
    languages: {
      "en": data.canonicalUrl,
      "en-GB": data.canonicalUrl,
      "en-US": data.canonicalUrl,
      "x-default": data.canonicalUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: data.seoTitle,
    description: data.seoDescription,
    url: data.canonicalUrl,
    siteName: "Saim Dev",
    locale: "en_GB",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next.js Website Development UK & US Services - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: data.seoTitle,
    description: data.seoDescription,
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
