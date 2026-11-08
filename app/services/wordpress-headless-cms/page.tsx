import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICES_CATALOG } from "@/content/servicesData";
import { generateServiceSchemas } from "@/lib/serviceSchema";

const data = SERVICES_CATALOG["website-development"];
const { serviceSchema, breadcrumbSchema, faqSchema } = generateServiceSchemas(data);

export const metadata: Metadata = {
  title: "Why We Replace WordPress With Next.js | Saim Dev",
  description: "Looking for WordPress development? We build modern Next.js alternatives that load in under 500ms, eliminate all plugin security vulnerabilities, and require $0 monthly retainers.",
  alternates: {
    canonical: "https://www.saimdev.site/services/website-development",
  },
  openGraph: {
    title: "Why We Replace WordPress With Next.js | Saim Dev",
    description: "Looking for WordPress development? We build modern Next.js alternatives that load in under 500ms, eliminate all plugin security vulnerabilities, and require $0 monthly retainers.",
    url: "https://www.saimdev.site/services/website-development",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/hero-shots/shot-4.webp",
        width: 1200,
        height: 630,
        alt: "Next.js WordPress Replacement Services - Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why We Replace WordPress With Next.js | Saim Dev",
    description: "Looking for WordPress development? We build modern Next.js alternatives that load in under 500ms, eliminate all plugin security vulnerabilities, and require $0 monthly retainers.",
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/hero-shots/shot-4.webp"],
  },
};

export default function WordPressReplacementPage() {
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
