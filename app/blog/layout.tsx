import React from "react";
import { RhHeader } from "@/components/rh/RhHeader";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rh-page bg-[#0D0D0D] min-h-screen">
      <RhHeader theme="dark" />
      <div className="[&>div>header.sticky]:relative [&>div>header.sticky]:top-auto [&>div>header.sticky]:z-10 [&>div>header.sticky]:bg-[#0D0D0D]">
        {children}
      </div>
    </div>
  );
}
