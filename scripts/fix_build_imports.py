import os

# 1. Fix ppds-label-generator/page.tsx
ppds_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\ppds-label-generator\page.tsx"
with open(ppds_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_header = """import { Metadata } from "next";
import Link from "next/link";
import { IconTile } from "@/components/icons/IconTile";
import { Tag, ArrowLeft, ArrowRight, ShieldCheck, HelpCircle, FileText, CheckCircle2, ChevronDown } from "lucide-react";
import { PpdsLabelGeneratorTool } from "@/components/tools/PpdsLabelGeneratorTool";
import { FoodSafetyDisclaimer } from "@/components/FoodSafetyDisclaimer";
import { SiteFooter } from "@/components/SiteFooter";
"""

# find where export const metadata starts
start_idx = 0
for idx, line in enumerate(lines):
    if "export const metadata" in line:
        start_idx = idx
        break

rest_content = "".join(lines[start_idx:])
with open(ppds_path, "w", encoding="utf-8") as f:
    f.write(new_header + "\n" + rest_content)
print("Fixed ppds-label-generator/page.tsx")


# 2. Fix allergen-matrix-generator/page.tsx
allergen_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\app\tools\allergen-matrix-generator\page.tsx"
with open(allergen_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_header_allergen = """import { Metadata } from "next";
import Link from "next/link";
import { IconTile } from "@/components/icons/IconTile";
import { ShieldAlert, ArrowLeft, ArrowRight, ShieldCheck, HelpCircle, FileText, CheckCircle2, AlertTriangle, BookOpen, Layers } from "lucide-react";
import { AllergenMatrixTool } from "@/components/tools/AllergenMatrixTool";
import { FoodSafetyDisclaimer } from "@/components/FoodSafetyDisclaimer";
import { SiteFooter } from "@/components/SiteFooter";
"""

start_idx = 0
for idx, line in enumerate(lines):
    if "export const metadata" in line:
        start_idx = idx
        break

rest_content = "".join(lines[start_idx:])
with open(allergen_path, "w", encoding="utf-8") as f:
    f.write(new_header_allergen + "\n" + rest_content)
print("Fixed allergen-matrix-generator/page.tsx")


# 3. Fix FoodSafetyTemplatesPage.tsx
fstp_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\FoodSafetyTemplatesPage.tsx"
with open(fstp_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_fstp_header = """"use client";
import { SiteFooter } from "./SiteFooter";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { IconTile } from "./icons/IconTile";
import {
  Tag,
  ShieldAlert,
  Calculator,
  ChefHat,
  ClipboardCheck,
  Snowflake,
  Droplets,
  Award,
  Search,
  Filter,
  Printer,
  UtensilsCrossed,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileText,
  SlidersHorizontal,
  ChevronDown,
  X,
  Plus,
  RefreshCw,
  Copy,
  Building,
  User,
  Calendar,
  Thermometer,
  DollarSign,
  AlertCircle,
  Sliders,
  Check,
  HelpCircle,
} from "lucide-react";
"""

start_idx = 0
for idx, line in enumerate(lines):
    if "import { FOOD_SAFETY_TEMPLATES" in line:
        start_idx = idx
        break

rest_content = "".join(lines[start_idx:])
with open(fstp_path, "w", encoding="utf-8") as f:
    f.write(new_fstp_header + rest_content)
print("Fixed FoodSafetyTemplatesPage.tsx")


# 4. Fix ToolsPage.tsx (add Calculator to imports)
tools_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\ToolsPage.tsx"
with open(tools_path, "r", encoding="utf-8") as f:
    tools_content = f.read()

if "Calculator," not in tools_content.split("from \"lucide-react\"")[0]:
    tools_content = tools_content.replace(
        "import {\n  ShieldAlert,",
        "import {\n  Calculator,\n  ShieldAlert,"
    )
    with open(tools_path, "w", encoding="utf-8") as f:
        f.write(tools_content)
    print("Added Calculator to ToolsPage.tsx")
else:
    print("Calculator already in ToolsPage.tsx")

