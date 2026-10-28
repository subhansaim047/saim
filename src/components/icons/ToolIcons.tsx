"use client";

import React from "react";
import { IconTile, IconColor } from "./IconTile";

// ============================================================================
// 1. PPDS Food Packaging Label (Natasha's Law)
// Category: Amber / Gold (#F59E0B)
// ============================================================================
export const IconPpdsLabel = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-ppds-main" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="ray-ppds-sec" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Secondary Layer: Depth folded backing */}
    <path
      d="M4.5 8.5L9.5 3H19C19.8 3 20.5 3.7 20.5 4.5V19.5C20.5 20.3 19.8 21 19 21H6C5.2 21 4.5 20.3 4.5 19.5V8.5Z"
      fill="url(#ray-ppds-sec)"
    />
    {/* Main Layer: Packaging Tag Card */}
    <path
      d="M3.5 8L8.5 2.5H17.5C18.3 2.5 19 3.2 19 4V18C19 18.8 18.3 19.5 17.5 19.5H5C4.2 19.5 3.5 18.8 3.5 18V8Z"
      fill="url(#ray-ppds-main)"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Eyelet hole */}
    <circle cx="8" cy="6.5" r="1.4" fill="#121216" stroke="#FEF3C7" strokeWidth="0.8" />
    {/* Barcode / Ingredient tracks */}
    <line x1="6.5" y1="11.5" x2="16" y2="11.5" stroke="#78350F" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="6.5" y1="14.2" x2="12.5" y2="14.2" stroke="#78350F" strokeWidth="1.3" strokeLinecap="round" />
    {/* Bold Allergen Verified Check Badge */}
    <rect x="13" y="13.5" width="6.5" height="6.5" rx="2" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
    <path d="M14.5 16.8L15.7 18L18.2 15.2" stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ============================================================================
// 2. 14 Allergen Matrix & Chart
// Category: Vermilion / Orange (#FF4A1C)
// ============================================================================
export const IconAllergenShield = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-alg-main" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFA085" />
        <stop offset="45%" stopColor="#FF4A1C" />
        <stop offset="100%" stopColor="#C22F08" />
      </linearGradient>
      <linearGradient id="ray-alg-sec" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FF4A1C" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    {/* Secondary Layer: Outer Crest Reflection */}
    <path
      d="M12 2L4 5.5V11.5C4 16.8 7.5 21.6 12 23C16.5 21.6 20 16.8 20 11.5V5.5L12 2Z"
      fill="url(#ray-alg-sec)"
    />
    {/* Main Sculpted Shield */}
    <path
      d="M12 2.8L5 5.8V11.5C5 16.2 8 20.3 12 21.5C16 20.3 19 16.2 19 11.5V5.8L12 2.8Z"
      fill="url(#ray-alg-main)"
      stroke="#FFFFFF"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    {/* Inner Facet highlight */}
    <path
      d="M12 3.5V20.8C15.2 19.8 17.5 16.2 17.5 11.5V6.5L12 3.5Z"
      fill="#FFFFFF"
      fillOpacity="0.12"
    />
    {/* Stylized Wheat Sheaf Motif */}
    <path
      d="M12 7.5V17.5M12 8C10.8 9.3 9.8 10.5 9.8 11.8C11 11.8 12 10.8 12 9.5M12 10.8C13.2 12 14.2 13.3 14.2 14.5C13 14.5 12 13.5 12 12.2M12 12.8C10.8 14 9.8 15.2 9.8 16.5C11 16.5 12 15.5 12 14.2"
      stroke="#FFFFFF"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    {/* Golden wheat grain tip */}
    <circle cx="12" cy="7.2" r="1.3" fill="#FDE68A" />
  </svg>
);

// ============================================================================
// 3. Commercial Food Cost Calculator
// Category: Emerald Green (#10B981)
// ============================================================================
export const IconFoodCost = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-cost-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6EE7B7" />
        <stop offset="50%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="ray-cost-sec" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Secondary Layer: Ledger Receipt Sheet */}
    <path d="M7 3C6.4 3 6 3.4 6 4V12H15V4C15 3.4 14.6 3 14 3H7Z" fill="url(#ray-cost-sec)" />
    <line x1="8.5" y1="5.5" x2="12.5" y2="5.5" stroke="#047857" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="8.5" y1="8" x2="11.5" y2="8" stroke="#047857" strokeWidth="1.2" strokeLinecap="round" />
    {/* Dining Cloche Platter Base */}
    <path
      d="M2.5 17.5C2.5 17 3 16.5 5 16.5H19C21 16.5 21.5 17 21.5 17.5C21.5 18.5 18 19.5 12 19.5C6 19.5 2.5 18.5 2.5 17.5Z"
      fill="url(#ray-cost-main)"
      stroke="#FFFFFF"
      strokeWidth="1.1"
    />
    {/* Cloche Dome Arc */}
    <path
      d="M4.5 16C5 11.5 8 8.8 12 8.8C16 8.8 19 11.5 19.5 16"
      stroke="url(#ray-cost-main)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="12" cy="7.8" r="1.3" fill="#FFFFFF" />
    {/* Gross Margin % Coin Badge */}
    <circle cx="16.5" cy="14" r="4" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.2" />
    <text
      x="16.5"
      y="15.6"
      textAnchor="middle"
      fontSize="4.4"
      fontWeight="900"
      fill="#FFFFFF"
      fontFamily="-apple-system, sans-serif"
    >
      %
    </text>
  </svg>
);

// ============================================================================
// 4. Recipe Batch Scaling Calculator
// Category: Sapphire Blue (#3B82F6)
// ============================================================================
export const IconRecipeScaler = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-rec-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="50%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="ray-rec-sec" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Chef Hat Puffs Backing */}
    <path
      d="M5.5 17C4.67 17 4 16.33 4 15.5C4 14.88 4.38 14.34 4.93 14.12C4.36 13.51 4 12.69 4 11.78C4 10.02 5.34 8.58 7.04 8.44C7.45 6.47 9.19 5 11.28 5C13.37 5 15.11 6.47 15.52 8.44C17.22 8.58 18.56 10.02 18.56 11.78C18.56 12.69 18.2 13.51 17.63 14.12C18.18 14.34 18.56 14.88 18.56 15.5C18.56 16.33 17.89 17 17.06 17H5.5Z"
      fill="url(#ray-rec-sec)"
    />
    {/* Hat Band Foundation */}
    <path
      d="M5 16H18V19.5C18 20.3 17.3 21 16.5 21H6.5C5.7 21 5 20.3 5 19.5V16Z"
      fill="url(#ray-rec-main)"
      stroke="#FFFFFF"
      strokeWidth="1.2"
    />
    {/* Hat Pleats */}
    <path d="M8 12V8M11.5 12V7M15 12V8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    {/* 10x Scaler Dial Chip */}
    <rect x="13.5" y="2.5" width="8" height="6" rx="2" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1" />
    <text
      x="17.5"
      y="6.8"
      textAnchor="middle"
      fontSize="4"
      fontWeight="900"
      fill="#FFFFFF"
      fontFamily="monospace"
    >
      10×
    </text>
  </svg>
);

// ============================================================================
// 5. UK Takeaway HACCP Plan Builder
// Category: Royal Indigo (#6366F1)
// ============================================================================
export const IconHaccpFolio = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-hac-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A5B4FC" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#4338CA" />
      </linearGradient>
      <linearGradient id="ray-hac-sec" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Folio Backplate */}
    <rect x="4" y="4.5" width="16" height="17.5" rx="3" fill="url(#ray-hac-sec)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    {/* Heavy Top Clamp */}
    <path
      d="M8 2.5H16C16.5 2.5 17 3 17 3.5V5.5H7V3.5C7 3 7.5 2.5 8 2.5Z"
      fill="url(#ray-hac-main)"
      stroke="#FFFFFF"
      strokeWidth="1.1"
    />
    {/* Checklist Rows */}
    <rect x="6.5" y="8" width="3" height="3" rx="0.8" fill="#4F46E5" stroke="#FFFFFF" strokeWidth="0.8" />
    <line x1="11.5" y1="9.5" x2="16.5" y2="9.5" stroke="#C7D2FE" strokeWidth="1.2" strokeLinecap="round" />
    <rect x="6.5" y="12.5" width="3" height="3" rx="0.8" fill="#4F46E5" stroke="#FFFFFF" strokeWidth="0.8" />
    <line x1="11.5" y1="14" x2="16.5" y2="14" stroke="#C7D2FE" strokeWidth="1.2" strokeLinecap="round" />
    {/* Statutory EHO Pass Stamp */}
    <circle cx="15.5" cy="17.5" r="4.2" fill="url(#ray-hac-main)" stroke="#FFFFFF" strokeWidth="1.1" />
    <path d="M14 17.5L15.2 18.7L17.5 16.2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ============================================================================
// 6. Cold Storage Temperature Log (Fridge/Freezer)
// Category: Electric Cyan (#06B6D4)
// ============================================================================
export const IconTempLog = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-tmp-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A5F3FC" />
        <stop offset="50%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0891B2" />
      </linearGradient>
      <linearGradient id="ray-tmp-sec" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#CFFAFE" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#0891B2" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Geometric Snowflake Crystal Background */}
    <path d="M12 2V22M2 12H22M5 5L19 19M5 19L19 5" stroke="url(#ray-tmp-sec)" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M10 4L12 2L14 4M10 20L12 22L14 20M4 10L2 12L4 14M20 10L22 12L20 14" stroke="url(#ray-tmp-sec)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    {/* Central Thermometer Stem */}
    <rect x="10" y="5" width="4" height="11" rx="2" fill="#111114" stroke="#FFFFFF" strokeWidth="1.2" />
    {/* Mercury Bulb */}
    <circle cx="12" cy="17" r="3.2" fill="url(#ray-tmp-main)" stroke="#FFFFFF" strokeWidth="1.2" />
    {/* Sub-zero Mercury Line */}
    <line x1="12" y1="9" x2="12" y2="16" stroke="url(#ray-tmp-main)" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1.5" fill="#FFFFFF" />
  </svg>
);

// ============================================================================
// 7. Kitchen Cleaning Schedule & Hygiene Log
// Category: Sky / Teal (#0EA5E9)
// ============================================================================
export const IconCleaningSchedule = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-cln-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7DD3FC" />
        <stop offset="50%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    {/* Spray Bottle Body */}
    <path
      d="M7 10C7 8.9 7.9 8 9 8H13C14.1 8 15 8.9 15 10L16 21H6L7 10Z"
      fill="url(#ray-cln-main)"
      stroke="#FFFFFF"
      strokeWidth="1.2"
    />
    {/* Spray Trigger Head */}
    <path d="M11 4H14V8H11V4Z" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1" />
    <path d="M14 5L17 5L15 7" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Spray Mist Droplets */}
    <circle cx="18.5" cy="5.5" r="1" fill="#7DD3FC" />
    <circle cx="21" cy="4.5" r="0.8" fill="#BAE6FD" />
    <circle cx="20.5" cy="7.5" r="0.8" fill="#BAE6FD" />
    {/* Cleanliness Sparkle Star */}
    <path
      d="M11 13L11.8 14.8L13.5 15.5L11.8 16.2L11 18L10.2 16.2L8.5 15.5L10.2 14.8L11 13Z"
      fill="#FFFFFF"
    />
  </svg>
);

// ============================================================================
// 8. EHO Food Hygiene Inspection Checklist
// Category: Rose / Crimson (#F43F5E)
// ============================================================================
export const IconEhoChecklist = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-eho-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FDA4AF" />
        <stop offset="50%" stopColor="#F43F5E" />
        <stop offset="100%" stopColor="#BE123C" />
      </linearGradient>
    </defs>
    <path
      d="M12 2.5L4.5 5.8V11.5C4.5 16.5 7.7 21 12 22.2C16.3 21 19.5 16.5 19.5 11.5V5.8L12 2.5Z"
      fill="url(#ray-eho-main)"
      stroke="#FFFFFF"
      strokeWidth="1.2"
    />
    {/* 5-Star Arch Nodes */}
    <path
      d="M12 7.5L12.8 9.2L14.6 9.4L13.2 10.7L13.6 12.5L12 11.6L10.4 12.5L10.8 10.7L9.4 9.4L11.2 9.2L12 7.5Z"
      fill="#FFFFFF"
    />
    <path d="M8.5 16L11 18.5L16 13.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ============================================================================
// 9. Goods In Delivery Intake Log
// Category: Violet / Purple (#8B5CF6)
// ============================================================================
export const IconDeliveryLog = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-del-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#C4B5FD" />
        <stop offset="50%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    {/* Delivery Crate Isometric Box */}
    <path d="M12 3L4 7.5L12 12L20 7.5L12 3Z" fill="#A78BFA" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M4 7.5V16.5L12 21V12L4 7.5Z" fill="url(#ray-del-main)" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M20 7.5V16.5L12 21V12L20 7.5Z" fill="#6D28D9" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round" />
    {/* Thermal Intake Check Gauge */}
    <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
    <path d="M11 12L11.8 12.8L13.2 11.4" stroke="#6D28D9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ============================================================================
// 10. Hot Holding Temperature Log Sheet
// Category: Flame Orange (#F97316)
// ============================================================================
export const IconHotHoldingLog = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-hot-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FDBA74" />
        <stop offset="50%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#C2410C" />
      </linearGradient>
    </defs>
    {/* Bain-marie warming tray */}
    <path d="M4 14H20V19C20 19.8 19.3 20.5 18.5 20.5H5.5C4.7 20.5 4 19.8 4 19V14Z" fill="url(#ray-hot-main)" stroke="#FFFFFF" strokeWidth="1.2" />
    <path d="M2.5 13.5H21.5" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
    {/* Rising Heatwaves (>63°C) */}
    <path d="M8 10C8 8.5 9 7.5 9 6C9 4.5 8 3.5 8 2" stroke="#FDBA74" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M12 10C12 8.5 13 7.5 13 6C13 4.5 12 3.5 12 2" stroke="#FED7AA" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M16 10C16 8.5 17 7.5 17 6C17 4.5 16 3.5 16 2" stroke="#FDBA74" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// ============================================================================
// 11. Cooking Temperature Record Sheet
// Category: Vermilion Flame (#EF4444)
// ============================================================================
export const IconCookingLog = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-cook-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FCA5A5" />
        <stop offset="50%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
    </defs>
    {/* Core Probe Thermometer Handle */}
    <rect x="5" y="3" width="14" height="6" rx="2" fill="url(#ray-cook-main)" stroke="#FFFFFF" strokeWidth="1.2" />
    <line x1="8" y1="6" x2="16" y2="6" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
    {/* Needle probe */}
    <line x1="12" y1="9" x2="12" y2="20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="20.5" r="1.5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="0.8" />
    {/* Digital 75°C statutory core readout */}
    <circle cx="16.5" cy="14" r="3.5" fill="#B91C1C" stroke="#FFFFFF" strokeWidth="1" />
    <text x="16.5" y="15.5" textAnchor="middle" fontSize="3.6" fontWeight="bold" fill="#FFFFFF" fontFamily="monospace">75°</text>
  </svg>
);

// ============================================================================
// 12. Food Safety Quiz & Staff Training
// Category: Purple (#A855F7)
// ============================================================================
export const IconFoodSafetyQuiz = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-quiz-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#D8B4FE" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#7E22CE" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="9" fill="url(#ray-quiz-main)" stroke="#FFFFFF" strokeWidth="1.2" />
    <text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">?</text>
    <circle cx="17" cy="7" r="2.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="0.8" />
    <path d="M16 7L16.8 7.8L18.2 6.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ============================================================================
// 13. General Audit & SFBB Opening Checklist
// Category: Sky / Indigo
// ============================================================================
export const IconChecklistAudit = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ray-chk-main" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="50%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="16" height="17" rx="3" fill="url(#ray-chk-main)" stroke="#FFFFFF" strokeWidth="1.2" />
    <path d="M7 3H17V5.5H7V3Z" fill="#1E40AF" stroke="#FFFFFF" strokeWidth="1" />
    <path d="M7.5 9L9.5 11L14 7M7.5 14L9.5 16L14 12" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ============================================================================
// Master Tool Icon Resolver
// ============================================================================
export interface ToolIconInfo {
  icon: React.ReactNode;
  color: IconColor;
  label: string;
}

export function getToolIconInfo(slugOrType: string): ToolIconInfo {
  const s = slugOrType.toLowerCase();

  if (s.includes("ppds") || s.includes("label") || s.includes("natasha")) {
    return {
      icon: <IconPpdsLabel />,
      color: "amber",
      label: "PPDS Food Labelling",
    };
  }
  if (s.includes("allergen") || s.includes("allergy") || s.includes("matrix")) {
    return {
      icon: <IconAllergenShield />,
      color: "vermilion",
      label: "Allergen Management",
    };
  }
  if (s.includes("cost") || s.includes("price") || s.includes("margin") || s.includes("profit")) {
    return {
      icon: <IconFoodCost />,
      color: "emerald",
      label: "Kitchen Economics",
    };
  }
  if (s.includes("recipe") || s.includes("batch") || s.includes("scale") || s.includes("scaler")) {
    return {
      icon: <IconRecipeScaler />,
      color: "blue",
      label: "Commercial Catering",
    };
  }
  if (s.includes("haccp")) {
    return {
      icon: <IconHaccpFolio />,
      color: "indigo",
      label: "Food Safety Law",
    };
  }
  if (s.includes("temp") || s.includes("fridge") || s.includes("freezer") || s.includes("cold") || s.includes("chill")) {
    return {
      icon: <IconTempLog />,
      color: "cyan",
      label: "SFBB Temperature Control",
    };
  }
  if (s.includes("clean") || s.includes("hygiene-schedule") || s.includes("sanit")) {
    return {
      icon: <IconCleaningSchedule />,
      color: "teal",
      label: "Sanitation SOP",
    };
  }
  if (s.includes("eho") || s.includes("inspection")) {
    return {
      icon: <IconEhoChecklist />,
      color: "rose",
      label: "Statutory Inspection",
    };
  }
  if (s.includes("deliver") || s.includes("intake") || s.includes("goods")) {
    return {
      icon: <IconDeliveryLog />,
      color: "purple",
      label: "Supply Chain Log",
    };
  }
  if (s.includes("hot-hold") || s.includes("warming")) {
    return {
      icon: <IconHotHoldingLog />,
      color: "vermilion",
      label: "Thermal Safety",
    };
  }
  if (s.includes("cook")) {
    return {
      icon: <IconCookingLog />,
      color: "vermilion",
      label: "Core Cooking Log",
    };
  }
  if (s.includes("quiz")) {
    return {
      icon: <IconFoodSafetyQuiz />,
      color: "purple",
      label: "Staff Compliance",
    };
  }

  // Fallback to General Checklist Audit
  return {
    icon: <IconChecklistAudit />,
    color: "blue",
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
