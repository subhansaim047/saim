import { ServicePageData } from "@/components/services/ServicePageTemplate";
import { CORE_BUILD_SERVICES } from "@/content/services/coreBuildServices";
import { COMMERCE_TAKEAWAY_SERVICES } from "@/content/services/commerceTakeawayServices";
import { GROWTH_OPTIMIZATION_SERVICES } from "@/content/services/growthOptimizationServices";

export const SERVICES_CATALOG: Record<string, ServicePageData> = {
  ...CORE_BUILD_SERVICES,
  ...COMMERCE_TAKEAWAY_SERVICES,
  ...GROWTH_OPTIMIZATION_SERVICES,
};
