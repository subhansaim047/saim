import React from "react";
import { RhHeader } from "@/components/rh/RhHeader";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rh-page bg-black min-h-screen">
      <RhHeader theme="dark" />
      <div className="pt-24 [&>div>header.sticky]:relative [&>div>header.sticky]:top-auto [&>div>header.sticky]:z-10 [&>div>header.sticky]:bg-black">
        {children}
      </div>
    </div>
  );
}
