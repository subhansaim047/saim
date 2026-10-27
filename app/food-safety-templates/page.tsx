import { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Food Safety Templates UK (Redirecting) | Saim Dev",
  robots: {
    index: false,
    follow: true,
  },
};

export default function FoodSafetyTemplatesRedirect() {
  permanentRedirect("/tools");
}
