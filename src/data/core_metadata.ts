import coreMetadata from "./core_metadata.json";

export interface CorePageMeta {
  title: string;
  desc: string;
  howTo: string[];
}

export const CORE_PAGES_METADATA: Record<string, CorePageMeta> = coreMetadata as Record<string, CorePageMeta>;
