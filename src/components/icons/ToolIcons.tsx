"use client";

import React from "react";
import {
  Tag,
  ShieldAlert,
  Calculator,
  ChefHat,
  ClipboardCheck,
  Snowflake,
  Droplets,
  Award,
  Truck,
  Flame,
  FileText,
  Thermometer,
} from "lucide-react";
import { IconTile, IconColor } from "./IconTile";

export interface ToolIconInfo {
  icon: React.ReactNode;
  color: IconColor;
  label: string;
}

export function getToolIconInfo(slugOrType: string): ToolIconInfo {
  const s = slugOrType.toLowerCase();

  if (s.includes("ppds") || s.includes("label") || s.includes("natasha")) {
    return {
      icon: <Tag className="w-5 h-5" />,
      color: "amber",
      label: "PPDS Food Labelling",
    };
  }
  if (s.includes("allergen") || s.includes("allergy") || s.includes("matrix")) {
    return {
      icon: <ShieldAlert className="w-5 h-5" />,
      color: "vermilion",
      label: "Allergen Management",
    };
  }
  if (s.includes("cost") || s.includes("profit") || s.includes("margin") || s.includes("price")) {
    return {
      icon: <Calculator className="w-5 h-5" />,
      color: "emerald",
      label: "Kitchen Economics",
    };
  }
  if (s.includes("recipe") || s.includes("batch") || s.includes("scale") || s.includes("portion")) {
    return {
      icon: <ChefHat className="w-5 h-5" />,
      color: "sky",
      label: "Commercial Catering",
    };
  }
  if (s.includes("haccp") || s.includes("ccp")) {
    return {
      icon: <ClipboardCheck className="w-5 h-5" />,
      color: "purple",
      label: "Food Safety Law",
    };
  }
  if (s.includes("temp") || s.includes("fridge") || s.includes("freezer") || s.includes("cold") || s.includes("chill")) {
    return {
      icon: <Snowflake className="w-5 h-5" />,
      color: "cyan",
      label: "SFBB Temperature Control",
    };
  }
  if (s.includes("clean") || s.includes("hygiene-schedule") || s.includes("sanit")) {
    return {
      icon: <Droplets className="w-5 h-5" />,
      color: "teal",
      label: "Sanitation SOP",
    };
  }
  if (s.includes("eho") || s.includes("inspection") || s.includes("fhrs") || s.includes("star")) {
    return {
      icon: <Award className="w-5 h-5" />,
      color: "rose",
      label: "Statutory Inspection",
    };
  }
  if (s.includes("deliver") || s.includes("intake") || s.includes("goods") || s.includes("supplier")) {
    return {
      icon: <Truck className="w-5 h-5" />,
      color: "indigo",
      label: "Supply Chain Log",
    };
  }
  if (s.includes("hot-hold") || s.includes("warming") || s.includes("cook")) {
    return {
      icon: <Flame className="w-5 h-5" />,
      color: "vermilion",
      label: "Thermal Safety",
    };
  }
  if (s.includes("quiz") || s.includes("training") || s.includes("cert")) {
    return {
      icon: <Award className="w-5 h-5" />,
      color: "purple",
      label: "Staff Compliance",
    };
  }

  // Fallback to General Checklist Audit
  return {
    icon: <FileText className="w-5 h-5" />,
    color: "sky",
    label: "Kitchen Audit Log",
  };
}

export function ToolIconRenderer({
  slug,
  size = "md",
  className = "",
}: {
  slug: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { icon, color } = getToolIconInfo(slug);
  return (
    <IconTile color={color} size={size} className={className}>
      {icon}
    </IconTile>
  );
}
