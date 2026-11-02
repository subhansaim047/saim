# scripts/append_batch13_deep_content.py
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

batch13_content = """  "recipe-card-generator": {
    directAnswer:
      "A commercial recipe card generator is an interactive culinary kitchen tool used by executive chefs, restaurant owners, and caterers to standardize dish specifications, automatically scale ingredient weights across batch sizes, calculate portion food costs, manage Natasha's Law allergens, and print station-ready recipe cards.",
    howTo: [
      "Input base recipe ingredient weights, unit costs, and initial portion yield.",
      "Enter desired batch multiplier or target servings to automatically scale quantities.",
      "Select statutory Natasha's Law allergens present in recipe sub-components.",
      "Calculate ingredient cost per portion and optimal menu selling price with VAT.",
      "Export A4 commercial recipe specification sheet for kitchen station binders."
    ],
    faqs: [
      {
        q: "What is a standardized commercial recipe card?",
        a: "A standardized recipe card is a formal operational document detailing exact ingredient quantities, preparation methods, cooking times, portion sizes, plating instructions, allergen declarations, and cost breakdowns to ensure uniform quality and cost control regardless of who is cooking."
      },
      {
        q: "How does batch scaling work in commercial kitchens?",
        a: "Batch scaling calculates a conversion factor: (Target Yield / Base Recipe Yield). Every ingredient weight is multiplied by this factor. For liquid or volumetric ingredients, converting to metric grams ensures precision and prevents seasoning or moisture imbalance."
      },
      {
        q: "Why must allergens be declared on kitchen recipe cards?",
        a: "Under UK food information regulations and Natasha's Law, food businesses must accurately declare all 14 statutory allergens. Specifying allergens directly on recipe cards prevents accidental cross-contact during kitchen assembly and protects allergic diners."
      },
      {
        q: "How does recipe card standardization reduce food waste?",
        a: "Standardized recipes enforce precise portion control and prep yields, preventing over-prep, inconsistent plate sizes, and ingredient spoilage, directly protecting your target 68% to 72% gross profit margin."
      },
      {
        q: "Can recipe cards be printed for commercial kitchen station binders?",
        a: "Yes. Our tool exports a clean, high-contrast, print-formatted A4 specification sheet suitable for laminating and mounting at hot line, pastry, and prep stations."
      }
    ],
    relatedTools: ["food-cost-calculator", "calculating-food-cost", "product-specification-template"],
    relatedBlog: {
      title: "How to Scale Recipes: Commercial Catering Batch Calculator",
      slug: "how-to-scale-recipes-commercial-catering-batch-calculator"
    }
  },
  "food-temperatures-poster": {
    directAnswer:
      "A food safety temperatures poster is an essential commercial kitchen reference chart displaying UK statutory critical limits: cooking core (≥75°C for 30s; 82°C in Scotland), hot holding (≥63°C), chilling (0°C–5°C, legal max 8°C), freezing (≤-18°C), and the 8°C–63°C bacterial danger zone under Food Safety and Hygiene Regulations 2013.",
    howTo: [
      "Mount the printed A4/A3 safe temperatures chart above cooking and prep ranges.",
      "Verify core cooking reach 75°C for 30s (70°C for 2 min; 82°C in Scotland).",
      "Maintain hot holding equipment at or above 63°C throughout continuous service.",
      "Ensure commercial food chillers operate strictly between 0°C and 5°C.",
      "Cool cooked hot batches to below 8°C within 90 minutes before refrigerated storage."
    ],
    faqs: [
      {
        q: "What are the legal food temperature limits in a UK commercial kitchen?",
        a: "UK regulations mandate: Cooking core ≥75°C (82°C in Scotland), hot holding ≥63°C, chilled storage legal maximum 8°C (industry best practice 0°C–5°C), and frozen food storage at or below -18°C."
      },
      {
        q: "What is the 2-hour and 4-hour rule in food temperature management?",
        a: "The 2-hour rule requires hot cooked foods to be cooled to below 8°C within 2 hours (FSA recommends 90 minutes). The 4-hour rule allows chilled food to be displayed above 8°C for a single period of up to 4 hours, after which it must be consumed or discarded."
      },
      {
        q: "Why do Scottish kitchens require higher cooking temperatures (82°C)?",
        a: "Food Standards Scotland (FSS) regulations specify a statutory minimum cooking core temperature of 82°C for reheated foods and high-risk meat, whereas the Food Standards Agency (FSA) standard for England, Wales, and Northern Ireland is 75°C."
      },
      {
        q: "Where should the food temperature poster be displayed?",
        a: "Display the poster in high-visibility kitchen areas: directly above hot cooking lines, adjacent to digital probe thermometer calibration stations, and beside walk-in refrigeration doors."
      },
      {
        q: "Do EHO inspectors check kitchen temperature posters?",
        a: "Yes. Environmental Health Officers look for visible, clean temperature reference signage during inspections as evidence of staff training, procedural awareness, and confidence in management."
      }
    ],
    relatedTools: ["danger-zone-for-food", "fridge-temperature-chart", "freezer-temperature-chart"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "danger-zone-for-food": {
    directAnswer:
      "The temperature danger zone for food is the critical range between 8°C and 63°C (46°F to 145°F) where pathogenic food poisoning bacteria such as Salmonella, E. coli, Clostridium perfringens, and Bacillus cereus multiply most rapidly, with optimal proliferation occurring between 20°C and 45°C.",
    howTo: [
      "Keep cold foods below 5°C (legal maximum 8°C) in calibrated commercial refrigeration units.",
      "Cook high-risk foods thoroughly to a core temperature of at least 75°C for 30s (70°C for 2 minutes).",
      "Keep hot holding foods above 63°C in bain-maries, hot cupboards, and heated display cabinets.",
      "Cool cooked food rapidly from 63°C to below 8°C within 90 minutes using blast chillers or ice baths.",
      "Discard any high-risk perishable food held in the danger zone for more than 2 hours without heating or cooling."
    ],
    faqs: [
      {
        q: "What is the exact UK temperature danger zone?",
        a: "In the UK, the temperature danger zone is defined as 8°C to 63°C. Between these temperatures, single bacterial cells can divide every 20 minutes through binary fission, producing over 2 million pathogens within 7 hours."
      },
      {
        q: "At what temperature do bacteria multiply fastest?",
        a: "Pathogenic bacteria multiply fastest around human body temperature, between 20°C and 45°C. Minimizing ambient prep times in this accelerated zone is a critical food safety priority."
      },
      {
        q: "Can cooking food kill bacterial spores formed in the danger zone?",
        a: "No. While cooking to 75°C destroys vegetative bacteria, heat-resistant spores from organisms like Bacillus cereus (commonly found in rice) survive cooking and germinate into toxin-producing bacteria if left cooling slowly in the danger zone."
      },
      {
        q: "What is the FSA 2-hour cooling rule?",
        a: "The Food Standards Agency recommends cooling hot food as quickly as possible—ideally reaching below 8°C within 90 minutes, and strictly within 2 hours—before transferring it to refrigerated cold storage."
      },
      {
        q: "How does the danger zone relate to buffet service?",
        a: "Under Schedule 4 of the UK Food Safety and Hygiene Regulations, cold buffet items may be held above 8°C for a maximum single period of 4 hours, and hot food may be held below 63°C for up to 2 hours. Any leftover food must be discarded."
      }
    ],
    relatedTools: ["food-temperatures-poster", "food-cooling-poster", "fridge-temperature-record-sheet-pdf"],
    relatedBlog: {
      title: "Commercial Kitchen Food Cooling & Temperature Limits Guide",
      slug: "commercial-kitchen-food-cooling-temperature-guide"
    }
  },
  "fridge-temperature-chart": {
    directAnswer:
      "A commercial fridge temperature chart is an operational monitoring guide and daily audit log used in UK food businesses to ensure cold storage units operate strictly between 0°C and 5°C (statutory maximum 8°C). It enforces top-to-bottom shelf stacking rules, prevents cross-contamination, and provides mandatory due diligence records for EHO inspections.",
    howTo: [
      "Mount the fridge temperature reference chart directly on commercial chiller doors.",
      "Record probe readings twice daily at morning opening and evening closing.",
      "Maintain operating chiller temperatures between 1°C and 5°C (statutory max 8°C).",
      "Enforce top-to-bottom shelf rules: raw meats on bottom shelves beneath cooked items.",
      "Execute corrective actions immediately if internal air temperatures rise above 5°C."
    ],
    faqs: [
      {
        q: "What is the legal maximum temperature for a commercial fridge in the UK?",
        a: "The legal maximum temperature for chilled high-risk food in England, Wales, and Northern Ireland is 8°C (Schedule 4 of the Food Safety and Hygiene Regulations 2013). However, the FSA and industry best practice recommend setting chillers between 1°C and 5°C."
      },
      {
        q: "How often should fridge temperatures be checked and logged?",
        a: "Kitchens should check and record fridge temperatures at least twice every operating day. Automated wireless dataloggers provide 24/7 telemetric monitoring, but manual probe audits remain best practice."
      },
      {
        q: "What are the correct shelf stacking rules for commercial fridges?",
        a: "Top shelves: Ready-to-eat foods, prepared salads, and cooked meats. Middle shelves: Raw whole fish and raw whole beef/pork. Bottom shelf: Raw poultry and ground minced meats, always stored in deep drip-proof containers."
      },
      {
        q: "What should I do if the fridge temperature rises to 9°C?",
        a: "Check if doors were left open or if a defrost cycle is active. If the temperature remains above 8°C for more than 2 hours, probe food cores. Food that has been above 8°C for over 4 hours must be safely discarded to prevent foodborne illness."
      },
      {
        q: "How long must commercial fridge temperature sheets be retained?",
        a: "Keep all signed fridge monitoring logs for at least 12 months in your HACCP/SFBB due diligence binder. These records are critical evidence for securing a 5-star Food Hygiene Rating."
      }
    ],
    relatedTools: ["freezer-temperature-chart", "walk-in-cooler-food-storage-chart", "food-temperatures-poster"],
    relatedBlog: {
      title: "SFBB Daily Kitchen Opening and Closing Checklist Guide",
      slug: "sfbb-daily-kitchen-opening-closing-checklist-guide"
    }
  },
  "burger-temp-chart": {
    directAnswer:
      "A commercial burger cooking temperature chart specifies the critical time and temperature standards required to eliminate Shiga toxin-producing E. coli (STEC / O157) in minced beef patties. In the UK, commercial burgers must reach an internal core temperature of 75°C for 30 seconds (or 70°C for 2 minutes) unless operating under strict FSA-approved rare burger protocols.",
    howTo: [
      "Calibrate digital needle thermometer in boiling water (100°C) and melting ice slurry (0°C) monthly.",
      "Insert probe horizontally into the geometric center of the patty while on the griddle or plancha.",
      "Verify standard patties reach at least 75°C for 30s (70°C for 2 min; 82°C in Scotland).",
      "Inspect meat texture and ensure juices run completely clear with zero pink meat for standard service.",
      "Follow strict FSA accredited supplier and surface sear protocols if licensed for rare gourmet burgers.",
    ],
    faqs: [
      {
        q: "Why must burgers be cooked more thoroughly than whole beef steaks?",
        a: "Harmful bacteria like E. coli O157 reside on the outside of whole muscle meat cuts, so searing the exterior of a steak kills all surface pathogens while leaving the interior pink. During mincing, surface bacteria are blended throughout the entire burger patty, requiring full thermal lethality at the core."
      },
      {
        q: "Can UK restaurants legally serve rare or pink burgers?",
        a: "Yes, but only under strict FSA regulations and prior local authority environmental health notification. Operators must source meat from accredited suppliers with carcass testing, apply validated surface searing before mincing, operate strict HACCP controls, and display mandatory consumer advisory notices on menus."
      },
      {
        q: "What is the FSA time and temperature combination for thorough burger cooking?",
        a: "The standard combinations achieving a 6-log (99.9999%) reduction in pathogens are: 70°C for 2 minutes, 75°C for 30 seconds, 80°C for 6 seconds, or 82°C in Scotland."
      },
      {
        q: "How should smash burgers vs thick-cut pub burgers be probed?",
        a: "Smash burgers (3oz–4oz) cook extremely rapidly; probe sideways into the thicker center edge before assembling. For 6oz–8oz thick pub patties, insert the probe from the side into the exact geometric center to ensure the coldest core point reaches 75°C."
      },
      {
        q: "What consumer advisory notice is required for pink burgers in the UK?",
        a: "Restaurants serving rare or pink burgers must state on their menu: 'Burgers served rare, medium rare or pink may contain harmful bacteria that may cause serious illness. Particularly at risk are children, the elderly, pregnant women, and anyone with a weakened immune system.'"
      }
    ],
    relatedTools: ["consumer-advisory", "meat-cooking-temperature-chart", "food-temperatures-poster"],
    relatedBlog: {
      title: "UK Food Hygiene Rating Scheme: 5-Star Inspection Checklist",
      slug: "uk-food-hygiene-rating-scheme-5-star-checklist"
    }
  }
"""

boundary = "  }\n};\n\nexport const FALLBACK_DEEP_CONTENT"
replacement = "  },\n\n" + batch13_content + "};\n\nexport const FALLBACK_DEEP_CONTENT"

if boundary in text:
    text = text.replace(boundary, replacement, 1)
    with open('src/data/tool_deep_content.ts', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Batch 13 deep content successfully appended with proper comma!")
else:
    print("Boundary not found")
