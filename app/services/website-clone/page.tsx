import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICES_CATALOG } from "@/content/servicesData";
import { buildServicePageMetadata, generateServiceSchemas } from "@/lib/serviceSchema";

const data = SERVICES_CATALOG["website-clone"];
const { schemaGraph } = generateServiceSchemas(data);

export const metadata: Metadata = buildServicePageMetadata(data);

export default function WebsiteClonePage() {
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
