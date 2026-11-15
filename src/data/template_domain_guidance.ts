import type { FoodSafetyTemplate } from "./saim_templates";

export type TemplateDomain =
  | "temperature"
  | "allergen"
  | "cleaning"
  | "haccp"
  | "costing-recipe"
  | "operations-sop";

export interface DomainQuickCard {
  label: string;
  value: string;
  note: string;
  tone: "blue" | "cyan" | "amber" | "red";
}

export interface DomainSourceLink {
  label: string;
  href: string;
}

export interface DomainGuidanceConfig {
  badgeLabel: string;
  definitionTerm: string;
  definitionBody: string;
  quickHeading: string;
  quickCards: DomainQuickCard[];
  sopSubtitle: string;
  leftCardTitle: string;
  leftCardParagraphs: (title: string) => string[];
  rightCardTitle: string;
  rightCardIntro: string;
  rightCardBullets: string[];
  rightCardLink?: { label: string; href: string };
  referenceText: string;
  referenceLink: { label: string; href: string };
  sourcesSummary: string;
  sourcesReviewedLabel: string;
  sourcesLinks: DomainSourceLink[];
  fallbackFaqs: (title: string) => { q: string; a: string }[];
  bannerEyebrow: string;
  bannerTag: string;
  bannerHeadline: string;
  bannerCopy: string;
  bannerPrimaryHref: string;
  bannerPrimaryLabel: string;
}

export function getTemplateDomain(template: FoodSafetyTemplate): TemplateDomain {
  const s = `${template.slug} ${template.title}`.toLowerCase();
  const cat = template.catSlug || "";

  if (
    cat === "allergen-management" ||
    /allergen|allergy|natasha|consumer-advisory|gluten|coeliac/.test(s)
  ) {
    return "allergen";
  }
  if (
    cat === "temperature-logs" ||
    /temp|freezer|fridge|cooler|pasteur|cooking-chart|doneness|defrost|thermometer|cooling|hot-holding|cold-holding|reheating|danger-zone|freeze-drying|storage-chart|expiration|leftover|butter|sell-by/.test(s)
  ) {
    return "temperature";
  }
  if (
    cat === "cleaning-sanitation" ||
    /clean|sanit|hygiene-schedule|washroom|restroom|hood|grease-trap|slicer|sink|dirty-utensils|three-sink|waste/.test(s)
  ) {
    return "cleaning";
  }
  if (
    cat === "haccp-compliance" ||
    /haccp|hazard|critical-control|ccp|food-flow|food-safety-plan|root-cause|5-whys/.test(s)
  ) {
    return "haccp";
  }
  if (/recipe|cost|margin|batch|inventory/.test(s)) {
    return "costing-recipe";
  }
  return "operations-sop";
}

export function getBlogCalloutMeta(blogSlug: string): { eyebrow: string; summary: string } {
  if (blogSlug.includes("allergen") || blogSlug.includes("natasha")) {
    return {
      eyebrow: "UK Allergen & PPDS Legal Guide",
      summary: "Step-by-step guidance on mapping the 14 reportable allergens across dishes, preventing cross-contact, and labelling PPDS items correctly.",
    };
  }
  if (blogSlug.includes("haccp")) {
    return {
      eyebrow: "Commercial HACCP Implementation Guide",
      summary: "How to structure process flow diagrams, verify Critical Control Points, and maintain corrective action records for UK caterers.",
    };
  }
  if (blogSlug.includes("cooling") || blogSlug.includes("temperature")) {
    return {
      eyebrow: "Thermal Control & Chilling Limits Guide",
      summary: "Practical thresholds for core cooking lethality, rapid two-hour chilling, hot-holding above 63°C, and calibrated probe checks.",
    };
  }
  if (blogSlug.includes("cost") || blogSlug.includes("recipe") || blogSlug.includes("batch")) {
    return {
      eyebrow: "Kitchen Margin & Yield Control Guide",
      summary: "Formulas and portion-costing workflows for commercial caterers managing supplier inflation, GP% targets, and batch scaling.",
    };
  }
  if (blogSlug.includes("quiz") || blogSlug.includes("level-2")) {
    return {
      eyebrow: "Hospitality Staff Training Resource",
      summary: "Prepare line cooks and front-of-house staff with Level 2 hygiene scenarios, cross-contamination controls, and temperature checks.",
    };
  }
  return {
    eyebrow: "Recommended UK Catering Inspection Guide",
    summary: "Practical preparation notes for Safer Food, Better Business (SFBB) diaries, daily shift sign-offs, and management review.",
  };
}

export const DOMAIN_GUIDANCE: Record<TemplateDomain, DomainGuidanceConfig> = {
  temperature: {
    badgeLabel: "Chilling, Cooking & Thermal Control",
    definitionTerm: "UK Thermal Control & Danger Zone Limits",
    definitionBody:
      "Bacterial pathogens multiply most rapidly between 8°C and 63°C. Commercial UK kitchens protect high-risk food by holding chilled stock at 1°C to 4°C (legal max 8°C in England/Wales, lower chilled tolerances for specialist items), keeping freezers at -18°C or colder, hot-holding above 63°C, and cooking poultry/mince cores to at least 75°C (30s) or 82°C in Scotland.",
    quickHeading: "UK & EU Food Safety Temperature Reference Limits",
    quickCards: [
      { label: "Commercial Freezing", value: "<= -18°C", note: "Suspends bacterial growth", tone: "blue" },
      { label: "Chilled Cold Holding", value: "1°C to 4°C", note: "Statutory max 8°C (England)", tone: "cyan" },
      { label: "Hot Holding Display", value: ">= 63°C", note: "Max 2h window if below", tone: "amber" },
      { label: "Safe Cooking Core", value: ">= 75°C (30s)", note: "82°C benchmark in Scotland", tone: "red" },
    ],
    sopSubtitle:
      "Calibrated probe checks, chill-chain verification, and thermal corrective actions for commercial catering lines.",
    leftCardTitle: "Calibrated Probe Checks & Chill-Chain Defence",
    leftCardParagraphs: (title) => [
      `Consistent temperature monitoring on forms like the ${title} demonstrates active control over microbiological hazards required by retained Regulation (EC) No 852/2004 and the Food Safety and Hygiene (England) Regulations 2013.`,
      "Clean and sanitise stem probes with single-use anti-bacterial wipes between every batch. Verify calibration monthly using an ice-slush slurry (0°C) and rolling boil test (100°C), logging any offset variance immediately.",
    ],
    rightCardTitle: "Thermal Excursion Response Protocol",
    rightCardIntro:
      "Never smooth out missed readings on temperature sheets. Environmental Health Inspectors look specifically for realistic variation and logged corrective actions:",
    rightCardBullets: [
      "Record exact probe measurements at goods intake, midday prep, and closing checks rather than copying a prior shift's figure.",
      "Document immediate escalation when a unit creeps above 8°C (chiller) or -15°C (freezer): inspect door seals, verify auto-defrost cycles, or decant stock.",
      "Retain signed temperature logs and calibration checks together for 6 to 12 months as continuous Section 21 due diligence evidence.",
    ],
    rightCardLink: { label: "FSA Chilling & Cooking Guidance", href: "https://www.food.gov.uk/business-guidance/cooking-your-food" },
    referenceText:
      "Thermal reference targets align with UK Food Standards Agency (FSA) cooking lethality curves, chilling safe methods, and Food Standards Scotland Schedule 4 requirements.",
    referenceLink: { label: "food.gov.uk Cooking Guidance", href: "https://www.food.gov.uk/business-guidance/cooking-your-food" },
    sourcesSummary:
      "Thermal limits and time-temperature lethality benchmarks referenced here align with published UK Food Standards Agency (FSA) catering guidance, Food Standards Scotland Schedule 4, and retained EC No 852/2004 Annex II cold-chain rules.",
    sourcesReviewedLabel: "Last reviewed: November 2026",
    sourcesLinks: [
      { label: "FSA Cooking & Chilling Guide", href: "https://www.food.gov.uk/business-guidance/cooking-your-food" },
      { label: "FSS Schedule 4 (Scotland)", href: "https://www.legislation.gov.uk/ssi/2006/3/schedule/4/made" },
      { label: "Retained EC 852/2004", href: "https://www.legislation.gov.uk/eur/2004/852/contents" },
    ],
    fallbackFaqs: (title) => [
      {
        q: `How frequently should teams record readings on the ${title}?`,
        a: "High-risk chilled and frozen units should be checked at minimum during opening setup and closing shutdown, with additional midday core-temperature probes during busy lunch and dinner service.",
      },
      {
        q: "What is the allowed chill-chain limit in UK hospitality kitchens?",
        a: "While best practice targets 1°C to 4°C inside commercial fridges, the statutory upper temperature for chill-holding in England, Wales, and Northern Ireland is 8°C. In Scotland, chill rooms should maintain high-risk foods safely chilled without fixed 8°C statutory exemptions unless under short display windows.",
      },
      {
        q: "How should digital or stem probes be verified for accuracy?",
        a: "Check probes monthly using crushed ice in cold water (should read between -1°C and +1°C) and boiling water (99°C to 101°C). Discard or recalibrate probes reading outside ±1°C tolerance.",
      },
    ],
    bannerEyebrow: "Built for UK Takeaways & Restaurants · Fixed £250",
    bannerTag: "Direct Web Ordering",
    bannerHeadline: "Pair Tight Kitchen Standards With Commission-Free Direct Ordering",
    bannerCopy:
      "High hygiene standards earn repeat local diners—do not hand 30%+ of every repeat order to aggregators. We build fast Next.js takeaway websites with live category menus, WhatsApp & kitchen tablet order routing, and transparent 14-allergen displays from a one-time £250 build fee.",
    bannerPrimaryHref: "/services/takeaway-web-design",
    bannerPrimaryLabel: "Takeaway Web Design (£250)",
  },

  allergen: {
    badgeLabel: "14 Statutory Allergens & PPDS",
    definitionTerm: "Natasha's Law & the 14 Statutory Allergens",
    definitionBody:
      "Under retained Regulation (EU) No 1169/2011, the Food Information Regulations 2014, and UK SI 2019/706 (Natasha's Law), caterers must accurately declare celery, cereals containing gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, tree nuts, peanuts, sesame seeds, soya, and sulphur dioxide—both verbally backed by written sheets for loose dishes and via bold-highlighted full ingredient labels for prepacked-for-direct-sale (PPDS) items.",
    quickHeading: "Key UK Allergen Control Checkpoints",
    quickCards: [
      { label: "Declaration Scope", value: "14 Allergens", note: "Covers ingredients & carry-over", tone: "red" },
      { label: "PPDS Packaging", value: "Bold Emphasised", note: "Name + full ingredient list", tone: "amber" },
      { label: "Purple Utensils", value: "Dedicated Prep", note: "Zero shared fryers or tongs", tone: "blue" },
      { label: "Recipe Audit", value: "On Every Swap", note: "Check brand substitutions daily", tone: "cyan" },
    ],
    sopSubtitle:
      "Ingredient verification, purple-zone cross-contact controls, and front-of-house allergy communication protocols.",
    leftCardTitle: "Allergen Traceability & Substitution Control",
    leftCardParagraphs: (title) => [
      `Maintaining current records with the ${title} helps catering teams honour statutory duties under Regulation (EU) No 1169/2011 and Natasha's Law (UK SI 2019/706) before food ever reaches the pass.`,
      "Ingredient substitutions by wholesale suppliers are a frequent source of accidental allergen exposure. Inspect delivery case labels weekly—even familiar sauces, stocks, or breading coatings may reformulate without prior verbal warning.",
    ],
    rightCardTitle: "Preventing Cross-Contact in Shared Kitchens",
    rightCardIntro:
      "Written allergen documentation fails if preparation practices mix trace proteins on line equipment. Enforce these operational habits:",
    rightCardBullets: [
      "Dedicate clean purple-coded chopping boards, knives, pans, and squeezing bottles solely to allergen-safe preparation runs.",
      "Never fry breaded gluten or shellfish items in the same oil batch used to cook chips or vegetarian side orders marketed as free-from.",
      "Ensure front-of-house staff never guess dish contents from memory; train teams to confirm directly with the chef and check the live matrix.",
    ],
    rightCardLink: { label: "FSA Allergen Catering Guidance", href: "https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses" },
    referenceText:
      "Procedures reference the Food Information Regulations 2014 and UK Food Information (Amendment) Regulations 2019 (Natasha's Law) guidance published by the Food Standards Agency.",
    referenceLink: { label: "UK Natasha's Law SI 2019/706", href: "https://www.legislation.gov.uk/uksi/2019/706/made" },
    sourcesSummary:
      "Allergen checklists and ingredient matrix protocols reflect current UK Food Information Regulations 2014, UK SI 2019/706 (Natasha's Law), and FSA guidance on loose and prepacked catering dishes.",
    sourcesReviewedLabel: "Last reviewed: November 2026",
    sourcesLinks: [
      { label: "FSA Allergen Guidance", href: "https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses" },
      { label: "Natasha's Law (SI 2019/706)", href: "https://www.legislation.gov.uk/uksi/2019/706/made" },
      { label: "PPDS Labelling Checker", href: "/tools/ppds-label-generator" },
    ],
    fallbackFaqs: (title) => [
      {
        q: `Does the ${title} cover both loose dishes and PPDS items?`,
        a: "Yes. Use it to track ingredients for freshly plated counter or takeaway dishes alongside items prepacked on site before customer ordering, pairing with our free PPDS label generator for full wrapped-item compliance.",
      },
      {
        q: "Can a verbal-only allergy notice satisfy UK catering law?",
        a: "Staff may explain ingredients verbally, provided clear written signage invites customers to ask AND easily accessible written/digital ingredient records back up every verbal confirmation accurately.",
      },
      {
        q: "When must kitchen allergen sheets be reprinted?",
        a: "Update matrices and printed notices immediately whenever a recipe changes, a new brand of sauce or spice is delivered, or seasonal menu specials are introduced.",
      },
    ],
    bannerEyebrow: "Interactive Menu Filtering · Natasha's Law Ready",
    bannerTag: "Allergen UX Built-In",
    bannerHeadline: "Give Regular Diners Live 14-Allergen Dish Filtering Online",
    bannerCopy:
      "Avoid telephone errors and third-party marketplace confusion. Our Next.js takeaway websites include interactive customer allergen filters, clear dish ingredient notes, and direct kitchen routing—built cleanly for a £250 fixed fee with 0% order commission.",
    bannerPrimaryHref: "/tools/allergen-matrix-generator",
    bannerPrimaryLabel: "Open 14-Allergen Matrix App",
  },

  cleaning: {
    badgeLabel: "Sanitation, COSHH & Deep Cleaning",
    definitionTerm: "Two-Stage Kitchen Cleaning & Chemical Dwell Times",
    definitionBody:
      "Effective commercial sanitation follows a mandatory two-stage process: Stage 1 removes grease and food soil using hot water and detergent, allowing chemicals in Stage 2 (BS EN 1276 or BS EN 13697 food-safe sanitiser) to kill bacteria across surfaces after the full contact dwell time stated by the manufacturer.",
    quickHeading: "Sanitation & Chemical Hygiene Benchmarks",
    quickCards: [
      { label: "Sanitiser Spec", value: "BS EN 1276", note: "Bactericidal food-surface standard", tone: "cyan" },
      { label: "Wash Workflow", value: "2-Stage Clean", note: "Detergent degrease before sanitise", tone: "blue" },
      { label: "Dwell Contact", value: "30s to 5m", note: "Follow COSHH sheet strictly", tone: "amber" },
      { label: "Grease Ducts", value: "TR19 Schedule", note: "Heavy use: 3–6 month cleans", tone: "red" },
    ],
    sopSubtitle:
      "Structured opening/closing washdown rotas, COSHH dilution safety, and deep-clean verification for high-volume kitchens.",
    leftCardTitle: "Detergent vs Sanitiser: Eliminating Surface Biofilm",
    leftCardParagraphs: (title) => [
      `Using a structured cleaning rota like the ${title} proves continuous premises maintenance under retained Regulation (EC) No 852/2004 Annex II.`,
      "Spraying food-safe sanitiser directly onto greasy stainless tables reduces bactericidal efficacy sharply. Train pot-wash and line staff to clear debris, degrease with hot soapy water, rinse clean, and allow sufficient chemical contact time before wiping dry with single-use blue paper towels.",
    ],
    rightCardTitle: "COSHH Safety & Deep-Clean Audit Routine",
    rightCardIntro:
      "Deep-cleaning heavy cookline units prevents pest harbourage and grease fire hazards alongside bacterial cross-contamination:",
    rightCardBullets: [
      "Store concentrated degreasers, descalers, and chlorine tablets in a locked cupboard physically separate from dry stores and open prep.",
      "Schedule mobile fryer, combi-oven, and chargrill pull-outs outside active prep windows so chemical overspray cannot reach exposed ingredients.",
      "Keep external extraction duct and grease-trap service certificates alongside shift cleaning logs to confirm fire and hygiene readiness.",
    ],
    rightCardLink: { label: "FSA SFBB Cleaning Guidance", href: "https://www.food.gov.uk/business-guidance/safer-food-better-business" },
    referenceText:
      "Cleaning schedules incorporate HSE catering COSHH dilution safeguards, BS EN 1276 surface disinfection contact principles, and FSA Safer Food, Better Business methods.",
    referenceLink: { label: "HSE Catering Cleaning Safety", href: "https://www.hse.gov.uk/catering/" },
    sourcesSummary:
      "Chemical dwell guidelines, extraction frequencies, and waste disposal segregations follow FSA SFBB Cleaning Safe Methods, HSE COSHH catering bulletins, and BESA TR19 kitchen ventilation maintenance standards.",
    sourcesReviewedLabel: "Last reviewed: November 2026",
    sourcesLinks: [
      { label: "FSA SFBB Cleaning Methods", href: "https://www.food.gov.uk/business-guidance/safer-food-better-business" },
      { label: "HSE Catering Safety", href: "https://www.hse.gov.uk/catering/" },
      { label: "Waste Duty of Care (GOV.UK)", href: "https://www.gov.uk/dispose-business-commercial-waste" },
    ],
    fallbackFaqs: (title) => [
      {
        q: `What is the difference between routine shift cleaning and the ${title}?`,
        a: "Daily shift cleaning focuses on contact food-prep surfaces, slicer blades, and sinks between tasks. Deep cleaning targets structural buildup behind mobile equipment, ventilation canopies, refrigeration condenser coils, and floor gullies.",
      },
      {
        q: "Do commercial kitchens need to rinse after applying BS EN 1276 sanitiser?",
        a: "Check the specific product label and COSHH safety sheet: non-tainting quaternary ammonium sanitisers often allow air-drying on worktops, whereas high-strength chlorine or heavy degreasers require clean potable water rinsing.",
      },
      {
        q: "How should dirty reusable cloths vs disposable blue roll be managed?",
        a: "Best practice recommends disposable blue paper roll for final worktop sanitising so bacteria are not smeared between stations. Any reusable kitchen cloths should be boil-washed above 82°C nightly and colour-zoned.",
      },
    ],
    bannerEyebrow: "Operations & Direct Orders · UK Hospitality Web Builds",
    bannerTag: "Fixed £250 Launch",
    bannerHeadline: "Run a Spotless Kitchen & Keep 100% of Your Online Takings",
    bannerCopy:
      "If local customers love ordering from your clean, well-run premises, don't lose 30% of every ticket to portal fees. Launch a dedicated Next.js ordering site with instant menu updates and direct kitchen routing from a flat £250 build fee.",
    bannerPrimaryHref: "/services/takeaway-web-design",
    bannerPrimaryLabel: "Explore Takeaway Systems",
  },

  haccp: {
    badgeLabel: "7-Principle HACCP & CCP Management",
    definitionTerm: "Hazard Analysis & Critical Control Points (HACCP)",
    definitionBody:
      "Under Article 5 of retained Regulation (EC) No 852/2004, every UK food business must operate a permanent food safety management procedure based on the seven Codex HACCP principles: hazard analysis, CCP identification, critical limit validation, monitoring schedules, corrective action plans, periodic verification, and structured record-keeping.",
    quickHeading: "Core Codex CCP Architecture Benchmarks",
    quickCards: [
      { label: "Retained Law", value: "EC 852/2004 Art 5", note: "Mandatory documented system", tone: "blue" },
      { label: "Hazard Classes", value: "4 Categories", note: "Bio, Chem, Phys, Allergenic", tone: "amber" },
      { label: "Decision Tree", value: "4 Questions", note: "Separates PRPs from CCPs", tone: "cyan" },
      { label: "Audit Frequency", value: "Annual + Change", note: "Re-verify on new equipment", tone: "red" },
    ],
    sopSubtitle:
      "Process mapping, Codex decision tree validation, Critical Control Point monitoring, and root-cause corrective logging.",
    leftCardTitle: "Integrating Prerequisites & Critical Control Points",
    leftCardParagraphs: (title) => [
      `Implementing structured workflows with the ${title} helps catering managers distinguish everyday prerequisite hygiene programs (pest control, supplier vetting, staff handwashing) from genuine Critical Control Points where no subsequent kill step exists.`,
      "When an audit identifies recurring deviations—such as slow batch cooling or delivery intake rejections—use formal root-cause investigation alongside HACCP updates rather than treating isolated symptoms.",
    ],
    rightCardTitle: "Periodic Verification & System Review Triggers",
    rightCardIntro:
      "A HACCP binder is a living safety specification, not a static folder pulled down only on inspection day:",
    rightCardBullets: [
      "Re-run your process flow and hazard scoring immediately whenever you add sous-vide cooking, rice acidification, or new chilled display equipment.",
      "Review past 30 days of exception logs monthly with head chefs to catch equipment drift before compressors or elements fail.",
      "Maintain version dates and manager signatures on revised SOPs to establish documented management oversight under Section 21 of the Food Safety Act 1990.",
    ],
    rightCardLink: { label: "FSA MyHACCP Catering Pack", href: "https://www.food.gov.uk/business-guidance/hazard-analysis-and-critical-control-point-haccp" },
    referenceText:
      "Methodology follows Codex Alimentarius General Principles of Food Hygiene (CXC 1-1969) alongside UK Food Standards Agency HACCP Article 5 guidance.",
    referenceLink: { label: "FSA HACCP Guidance", href: "https://www.food.gov.uk/business-guidance/hazard-analysis-and-critical-control-point-haccp" },
    sourcesSummary:
      "Hazard matrices, decision trees, and process flow controls follow retained Regulation (EC) No 852/2004 Article 5, the Codex Alimentarius framework, and UK FSA MyHACCP principles for caterers and small manufacturers.",
    sourcesReviewedLabel: "Last reviewed: November 2026",
    sourcesLinks: [
      { label: "FSA HACCP Overview", href: "https://www.food.gov.uk/business-guidance/hazard-analysis-and-critical-control-point-haccp" },
      { label: "EC 852/2004 Article 5", href: "https://www.legislation.gov.uk/eur/2004/852/contents" },
      { label: "Food Safety Act 1990 s.21", href: "https://www.legislation.gov.uk/ukpga/1990/16/section/21" },
    ],
    fallbackFaqs: (title) => [
      {
        q: `Does every small UK takeaway need a formal document like the ${title}?`,
        a: "Yes. Every UK food business must implement and maintain documented HACCP-based procedures proportionate to its size. Small caterers commonly satisfy this using the FSA Safer Food, Better Business (SFBB) pack plus tailored process controls for specialist steps.",
      },
      {
        q: "How many Critical Control Points should a typical restaurant HACCP plan contain?",
        a: "Most standard catering kitchens identify between two and four true CCPs—typically chilled storage, thermal cooking lethality, rapid cooling, and hot-holding—while handling sanitation and pest control as prerequisite programs.",
      },
      {
        q: "When should a food business re-audit its HACCP flow diagram?",
        a: "Re-verify your flow diagram at least annually and immediately upon menu expansions, supplier format changes, kitchen refits, or food safety complaints.",
      },
    ],
    bannerEyebrow: "Hospitality Digital Architecture · UK & Europe",
    bannerTag: "Performance Audited",
    bannerHeadline: "Upgrade Your Kitchen Stack & Direct Ordering Infrastructure",
    bannerCopy:
      "We engineer high-speed Next.js web platforms for multi-site food brands, central production units, and independent takeaways—connecting allergen-filtered menus, direct checkout, and WhatsApp order dispatch without marketplace commission cuts.",
    bannerPrimaryHref: "/services/custom-web-apps",
    bannerPrimaryLabel: "Explore Custom Web Apps",
  },

  "costing-recipe": {
    badgeLabel: "Margin, GP% & Portion Scaling",
    definitionTerm: "Commercial Food Cost % & Gross Profit Architecture",
    definitionBody:
      "Commercial catering profitability depends on measuring net edible ingredient cost after peeling/trimming shrinkage against ex-VAT menu pricing. Maintaining a disciplined 25% to 35% food cost percentage (65%–75% Gross Profit margin) protects takeaway operators against wholesale price spikes and energy overheads.",
    quickHeading: "Commercial Catering Margin & Scaling Targets",
    quickCards: [
      { label: "Target Food Cost", value: "25% to 32%", note: "Ex-VAT ingredient share", tone: "cyan" },
      { label: "UK Takeaway GP%", value: "68% to 75%", note: "Before labour & portal fees", tone: "blue" },
      { label: "Yield Precision", value: "Metric (g/ml)", note: "Standardised across prep shifts", tone: "amber" },
      { label: "App Commission", value: "Save 25–35%", note: "Own-site orders protect GP%", tone: "red" },
    ],
    sopSubtitle:
      "Standardised portion specs, invoice cost tracking, batch yield scaling, and protecting gross margin against delivery platform commissions.",
    leftCardTitle: "Controlling Shrinkage, Prep Yield & VAT Distortion",
    leftCardParagraphs: (title) => [
      `Using digital spec workflows like the ${title} stops unmeasured free-pouring from silently eroding menu contribution margins.`,
      "Always calculate Food Cost % against net menu price excluding 20% UK standard-rate VAT (multiply gross menu price by 0.8333 before dividing ingredient cost). Factor trim and cooking evaporation yields accurately on proteins and reductions.",
    ],
    rightCardTitle: "Batch Consistency & Margin Leaks to Audit Weekly",
    rightCardIntro:
      "Standardised metric recipe cards simultaneously boost kitchen quality and isolate cost variance quickly:",
    rightCardBullets: [
      "Audit top-10 selling takeaway dishes monthly against updated wholesaler invoice pricing for cooking oil, chicken, dairy, and packaging.",
      "Account for single-use tubs, carrier bags, and napkins directly inside dish unit cost before evaluating profit margins.",
      "Separate delivery-aggregator pricing or shift repeat locals onto a zero-commission direct ordering storefront to reclaim lost net margin.",
    ],
    rightCardLink: { label: "Batch Recipe Scaler Tool", href: "/tools/recipe-batch-calculator" },
    referenceText:
      "Financial calculations follow standard UK commercial hospitality GP% (ex-VAT) costing accounting alongside metric batch scaling principles.",
    referenceLink: { label: "Open Food Cost Calculator", href: "/tools/food-cost-calculator" },
    sourcesSummary:
      "Portion costing formulas, ex-VAT gross profit ratios, and stock inventory practices follow standard UK hospitality management accounting alongside FSA QUID / allergen recipe documentation principles.",
    sourcesReviewedLabel: "Last reviewed: November 2026",
    sourcesLinks: [
      { label: "Recipe Batch Calculator", href: "/tools/recipe-batch-calculator" },
      { label: "Commercial Cost Calculator", href: "/tools/food-cost-calculator" },
      { label: "UK Hospitality Margin Guide", href: "/blog/mastering-food-cost-percentage-commercial-kitchen-calculator" },
    ],
    fallbackFaqs: (title) => [
      {
        q: `Why should VAT be excluded when using the ${title}?`,
        a: "VAT collected on hot takeaway food goes to HMRC, not gross revenue. Dividing invoice costs (usually zero-rated on raw foods) by ex-VAT net menu price gives your true kitchen Gross Profit margin.",
      },
      {
        q: "Should takeaway boxes and sauces be included inside recipe cost?",
        a: "Yes. Counting foil trays, tamper seals, dip pots, and napkins per order often changes an apparent 72% GP dish down to 64%—crucial when absorbing aggregator commissions.",
      },
      {
        q: "How often should master catering recipes and cost sheets be refreshed?",
        a: "Audit key commodity prices monthly (oils, cheeses, poultry) and re-cost the full menu every quarter or whenever seasonal ingredients rotate.",
      },
    ],
    bannerEyebrow: "Protect Kitchen GP% · Zero Per-Order Commissions",
    bannerTag: "Stop Paying 30% Cuts",
    bannerHeadline: "Direct Ordering Pays Back Faster Than Any Menu Cost Cut",
    bannerCopy:
      "Cutting 2% off food cost helps—moving 40% of your repeat delivery customers onto your own commission-free website transforms net profit. Launch a fast Next.js takeaway ordering site for a flat £250 build fee.",
    bannerPrimaryHref: "/tools/food-cost-calculator",
    bannerPrimaryLabel: "Run Food Cost Calculator",
  },

  "operations-sop": {
    badgeLabel: "SFBB Checklists, Audits & Staff Training",
    definitionTerm: "Safer Food, Better Business (SFBB) & Management Checks",
    definitionBody:
      "In the UK Food Hygiene Rating Scheme (FHRS), inspectors award up to three core scores covering Hygienic Food Handling, Structural Cleanliness, and Confidence in Management. Documented opening/closing sheets, induction logs, and manager spot-checks verify management control continuously under Section 21 of the Food Safety Act 1990.",
    quickHeading: "FHRS Management & Shift Verification Rhythm",
    quickCards: [
      { label: "Opening Check", value: "Before Prep", note: "Chillers, handwash, hot water", tone: "blue" },
      { label: "Active Shift", value: "Probe & Trace", note: "Intake batches & core cooks", tone: "cyan" },
      { label: "Closing Check", value: "End of Trade", note: "Date labels, waste & shutoff", tone: "amber" },
      { label: "Retention", value: "6–12 Months", note: "Accessible supervisor file", tone: "red" },
    ],
    sopSubtitle:
      "Daily shift accountability, induction verification, and structured pre-audit self-inspections across front and back of house.",
    leftCardTitle: "Building Inspector Confidence in Management",
    leftCardParagraphs: (title) => [
      `Completing operational frameworks like the ${title} at the start and end of trade demonstrates structured supervision required for high FHRS Confidence in Management scores.`,
      "Record honest exception notes whenever a scheduled task was delayed or an appliance malfunctioned—uniformly neat, pre-filled tick boxes filled with identical pen pressure undermine record credibility during local authority reviews.",
    ],
    rightCardTitle: "Hospitality Team Training & Shift Handover Culture",
    rightCardIntro:
      "Consistent SOP execution ensures junior kitchen porters and weekend relief chefs follow identical safety standards:",
    rightCardBullets: [
      "Pair opening/closing sheets with brief 3-minute pre-service briefings highlighting 86'd items, allergen changes, and cleaning priorities.",
      "Log staff food-hygiene training dates, agency inductions, and return-to-work wellness declarations following sickness absence.",
      "Review the prior week's exception log every Monday morning to verify recurring bottlenecks are resolved permanently.",
    ],
    rightCardLink: { label: "FSA SFBB Pack Guidance", href: "https://www.food.gov.uk/business-guidance/safer-food-better-business" },
    referenceText:
      "Operational routines align with Food Standards Agency Safer Food, Better Business (SFBB) management checks and statutory Food Safety Act 1990 due diligence duties.",
    referenceLink: { label: "FSA SFBB Official Pack", href: "https://www.food.gov.uk/business-guidance/safer-food-better-business" },
    sourcesSummary:
      "Checklist items and supervisor verification steps align with UK Food Standards Agency Safer Food, Better Business (SFBB), the Food Safety Act 1990 Section 21 due diligence framework, and UK FHRS rating assessment criteria.",
    sourcesReviewedLabel: "Last reviewed: November 2026",
    sourcesLinks: [
      { label: "FSA SFBB Guidance", href: "https://www.food.gov.uk/business-guidance/safer-food-better-business" },
      { label: "FHRS Assessment Overview", href: "https://www.food.gov.uk/safety-hygiene/food-hygiene-rating-scheme" },
      { label: "Daily SFBB Routine Guide", href: "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide" },
    ],
    fallbackFaqs: (title) => [
      {
        q: `Should kitchen supervisors sign the ${title} every day?`,
        a: "Yes. Having the opening or closing shift lead sign and date completed records confirms active supervision and shows where any corrective actions were verified.",
      },
      {
        q: "Can digital records replace paper SFBB diaries during an inspection?",
        a: "Yes—provided staff know how to access active digital logs on demand, timestamps are genuine, backups exist, and inspectors can inspect historical exception records easily.",
      },
      {
        q: "How long must daily hospitality safety records be stored?",
        a: "Standard UK catering practice retains completed daily and weekly safety logs for 6 to 12 months so inspectors can trace sustained compliance over multiple trading quarters.",
      },
    ],
    bannerEyebrow: "Hospitality Web Engineering · Fixed £250 Launch",
    bannerTag: "Sub-Second Speed",
    bannerHeadline: "Turn Strong Kitchen Discipline Into Direct Online Revenue",
    bannerCopy:
      "We help UK takeaways and hospitality brands convert walk-in and aggregator buyers into loyal direct customers with fast Next.js websites, clear opening hours, live dietary filters, and direct WhatsApp order routing from a flat £250 fee.",
    bannerPrimaryHref: "/services/takeaway-web-design",
    bannerPrimaryLabel: "View Takeaway Packages",
  },
};

export function selectRelatedTemplates(
  current: FoodSafetyTemplate,
  all: FoodSafetyTemplate[],
  curatedSlugs: string[] | undefined,
  isIndexableSlug: (slug: string) => boolean
): FoodSafetyTemplate[] {
  const bySlug = new Map(all.map((t) => [t.slug, t]));
  const picked: FoodSafetyTemplate[] = [];
  const used = new Set<string>([current.slug]);

  // 1. Honour explicit curated relatedTools from tool_deep_content.ts first
  if (curatedSlugs) {
    for (const slug of curatedSlugs) {
      const item = bySlug.get(slug);
      if (item && !used.has(item.slug) && isIndexableSlug(item.slug)) {
        picked.push(item);
        used.add(item.slug);
      }
    }
  }

  // 2. Fill remaining slots up to 4 deterministically using slug hash + same domain priority
  const currentDomain = getTemplateDomain(current);
  const hashStr = (str: string) => {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  };

  const candidates = all.filter((t) => !used.has(t.slug) && isIndexableSlug(t.slug));
  const sameDomain = candidates
    .filter((t) => getTemplateDomain(t) === currentDomain)
    .sort((a, b) => hashStr(`${current.slug}:${a.slug}`) - hashStr(`${current.slug}:${b.slug}`));
  const crossDomain = candidates
    .filter((t) => getTemplateDomain(t) !== currentDomain)
    .sort((a, b) => hashStr(`${current.slug}:${a.slug}`) - hashStr(`${current.slug}:${b.slug}`));

  for (const t of [...sameDomain, ...crossDomain]) {
    if (picked.length >= 4) break;
    picked.push(t);
    used.add(t.slug);
  }

  return picked;
}
