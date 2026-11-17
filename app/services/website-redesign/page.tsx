import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICES_CATALOG } from "@/content/servicesData";
import { buildServicePageMetadata, generateServiceSchemas } from "@/lib/serviceSchema";

const data = SERVICES_CATALOG["website-redesign"];
const { schemaGraph } = generateServiceSchemas(data);

export const metadata: Metadata = buildServicePageMetadata(data);

export default function WebsiteRedesignPage() {
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
