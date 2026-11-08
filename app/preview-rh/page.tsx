import type { Metadata } from "next";
import { RhDesignHomepage } from "@/components/rh-design/RhDesignHomepage";

export const metadata: Metadata = {
  title: "rh.design Aesthetic Preview | Saim Dev Studio",
  description: "Exclusive preview of the rh.design aesthetic clone with Saim Dev data, interactive live demos, Next.js architecture, and $0 upfront guarantee.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewRhPage() {
  return <RhDesignHomepage />;
}
