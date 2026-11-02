"use client";

import React, { useState } from "react";
import { Plus, Trash2, Printer, Check, AlertCircle, Clock, Thermometer, ShieldCheck, Edit3, FileSpreadsheet, Timer, Play, Pause, RotateCcw } from "lucide-react";
import { useEffect } from "react";

interface CheckItem {
  id: string;
  category: string;
  task: string;
  status: "pass" | "fail" | "pending";
  actionNotes: string;
}

interface TempEntry {
  id: string;
  unit: string;
  target: string;
  time: string;
  temp: string;
  signedBy: string;
  status: "pass" | "fail";
}

const RECALL_INCIDENT_TASKS: CheckItem[] = [
  {
    id: "recall-1",
    category: "1. Quarantine & Batch Freeze",
    task: "Isolate all remaining stock of the implicated batch immediately in secure storage; apply red 'DO NOT USE - QUARANTINE' warning tape.",
    status: "pass",
    actionNotes: "Remaining inventory isolated in cold room"
  },
  {
    id: "recall-2",
    category: "2. Supply Chain Traceability",
    task: "Identify raw ingredient batch code, supplier delivery invoice, and map all customers or wholesale clients that received the product (Article 18 of Regulation EC 178/2002).",
    status: "pass",
    actionNotes: "One-step-back & one-step-forward accounts traced"
  },
  {
    id: "recall-3",
    category: "3. FSA & Local Council Notification",
    task: "Notify the Food Standards Agency (FSA) Incidents Team and local authority Environmental Health Officer immediately with batch details and health hazard assessment.",
    status: "pass",
    actionNotes: "FSA incident form submitted"
  },
  {
    id: "recall-4",
    category: "4. Customer Recall Notice Publication",
    task: "Display Point-of-Sale (POS) customer recall notices at front-of-house counters, on takeaway digital ordering apps, and across business social media channels.",
    status: "pass",
    actionNotes: "POS notice posted with return instructions"
  },
  {
    id: "recall-5",
    category: "5. Safe Destruction & Waste Certification",
    task: "Dispose of returned and condemned stock via licensed hazardous waste or Category 3 animal byproduct (ABP) disposal contractor; file waste transfer notes.",
    status: "pass",
    actionNotes: "Waste contractor certificate filed"
  },
  {
    id: "recall-6",
    category: "6. Root-Cause & Preventative Actions",
    task: "Conduct thorough incident review with kitchen team and ingredient suppliers; update HACCP hazard analysis to prevent recurring food safety failures.",
    status: "pass",
    actionNotes: "Supplier CAPA report requested"
  }
];

const HEALTH_INSPECTION_TASKS: CheckItem[] = [
  {
    id: "fhrs-1",
    category: "Pillar 1: Food Hygiene & Handling",
    task: "Cross-contamination controls verified: raw meats stored strictly on bottom refrigerator shelves beneath ready-to-eat foods; distinct colour-coded chopping boards (Red for raw meat, Yellow for poultry, Blue for fish, Green for salad) in use.",
    status: "pass",
    actionNotes: "Boards separated and sanitised"
  },
  {
    id: "fhrs-2",
    category: "Pillar 1: Food Hygiene & Handling",
    task: "Temperature control adherence: commercial chillers operating at or below 5°C, freezers at or below -18°C, hot holding held above 63°C, and core cooking temps verified at 75°C (82°C in Scotland) with calibrated needle probe.",
    status: "pass",
    actionNotes: "All probe temperatures logged"
  },
  {
    id: "fhrs-3",
    category: "Pillar 1: Food Hygiene & Handling",
    task: "Allergen management (Natasha's Law): all 14 statutory allergens declared for every menu dish; PPDS foods labelled with complete ingredient lists with allergens emphasised in bold; 14 allergen matrix accessible.",
    status: "pass",
    actionNotes: "14 allergen matrix verified"
  },
  {
    id: "fhrs-4",
    category: "Pillar 2: Cleanliness & Structure",
    task: "Dedicated handwash basins fully equipped: hot and cold running water, unperfumed bactericidal liquid soap (BS EN 1499), and disposable blue paper towels. Basins strictly used for hand hygiene only.",
    status: "pass",
    actionNotes: "Soap & paper roll fully stocked"
  },
  {
    id: "fhrs-5",
    category: "Pillar 2: Cleanliness & Structure",
    task: "Physical premises & pest proofing: no gaps under external doors, fly screens intact on openable windows, grease filters clean, walls and non-slip floors in good repair with no cracked tiles or standing water.",
    status: "pass",
    actionNotes: "No pest ingress points observed"
  },
  {
    id: "fhrs-6",
    category: "Pillar 3: Confidence in Management",
    task: "Documented Food Safety Management System: Safer Food, Better Business (SFBB) pack or HACCP binder fully completed, daily opening/closing checks signed off by supervisor, and last 12 months archived.",
    status: "pass",
    actionNotes: "SFBB diary up to date and signed"
  },
  {
    id: "fhrs-7",
    category: "Pillar 3: Confidence in Management",
    task: "Staff training & due diligence: valid Level 2 Food Hygiene certificates on file for all food handlers; Level 3 for supervisor; supplier delivery invoices and batch traceability records immediately accessible.",
    status: "pass",
    actionNotes: "Training certificates filed in binder"
  }
];

const CLEANING_TASKS: CheckItem[] = [
  {
    id: "clean-1",
    category: "Two-Stage Disinfection (BS EN 1276)",
    task: "Food-contact surfaces cleaned with detergent to remove soil and grease, followed by BS EN 1276 sanitiser left for statutory contact time (30–60s) before final clean wipe.",
    status: "pass",
    actionNotes: "Two-stage disinfection method completed"
  },
  {
    id: "clean-2",
    category: "Commercial Cook Line & Prep",
    task: "Fryer wells skimmed/filtered, plancha and char-grill scraped, oven door gaskets cleaned, and extraction hood grease baffle filters soaked and degreased.",
    status: "pass",
    actionNotes: "Extraction filters degreased and refitted"
  },
  {
    id: "clean-3",
    category: "Dining Room & Front-of-House",
    task: "Dining tables, dining chairs, card payment terminals, door touchpoints, and laminated takeaway menus disinfected with food-safe antibacterial wipes.",
    status: "pass",
    actionNotes: "High-touch points disinfected between service runs"
  },
  {
    id: "clean-4",
    category: "Potwash & Warewashing",
    task: "Commercial pass-through dishwasher operating with wash temp >=55°C and final rinse >=82°C. Wash arms cleared and chemical dosing lines verified.",
    status: "pass",
    actionNotes: "Rinse temperature verified at 84°C"
  },
  {
    id: "clean-5",
    category: "Customer & Staff Restrooms",
    task: "Toilets descaled, hand basins disinfected, antibacterial hand soap (BS EN 1499) replenished, warm running water verified, and paper roll dispensers filled.",
    status: "pass",
    actionNotes: "Restrooms inspected and signed off"
  },
  {
    id: "clean-6",
    category: "Refuse, Waste & COSHH Cupboard",
    task: "Internal bins emptied and relined; external commercial waste wheelie bins locked; grease trap area checked; all cleaning chemicals locked in COSHH cupboard.",
    status: "pass",
    actionNotes: "External bins locked & COSHH secured"
  }
];

const PEST_CONTROL_TASKS: CheckItem[] = [
  {
    id: "p1",
    category: "Rodent Monitoring & Bait Stations",
    task: "Inspect all numbered exterior and internal tamper-resistant rodent bait stations: verify boxes are locked, undamaged, anchored in place, and inspected by BPCA/CEPA certified contractor under Regulation (EC) No 852/2004 Annex II Chap IX.",
    status: "pass",
    actionNotes: "All bait boxes secure; no droppings or gnaw marks"
  },
  {
    id: "p2",
    category: "Flying Insect Control & EFKs",
    task: "Check Electric Fly Killers (EFKs): verify UV lamps are illuminated (tubes replaced within 12 months), catch trays clean without insect overflow, and positioned away from open food prep benches.",
    status: "pass",
    actionNotes: "EFK catch trays emptied; UV tubes active"
  },
  {
    id: "p3",
    category: "Physical Building Proofing",
    task: "Inspect exterior door bottom bristle/rubber proofing strips (gap clearance strictly under 5mm); confirm fine fly screens on openable kitchen windows are intact with no tears or mesh holes.",
    status: "pass",
    actionNotes: "Door proofing strips flush; fly screens intact"
  },
  {
    id: "p4",
    category: "Service Penetrations & Drainage",
    task: "Check pipework penetrations through external walls, floor drains, and conduit entries: ensure tight seals with wire wool, concrete, or metal plates with zero rodent ingress voids.",
    status: "pass",
    actionNotes: "Pipe entry points sealed; drain grates fastened"
  },
  {
    id: "p5",
    category: "Dry Goods & Flour Store",
    task: "Inspect bulk grain sacks, flour bins, and dry store shelving for stored product insects (weevils, beetles, webbing, larvae). Ensure all stock is raised >15cm off floor on clean dunnage racks.",
    status: "pass",
    actionNotes: "Dry store clean; FIFO rotated; no insect webbing"
  },
  {
    id: "p6",
    category: "Crawling Insect Monitoring Traps",
    task: "Examine sticky insect monitoring blunder traps placed behind cookline ranges, underneath dishwashers, and near motor compressors for cockroach (Blattella germanica) or ant activity.",
    status: "pass",
    actionNotes: "Zero crawling insects detected on monitoring pads"
  },
  {
    id: "p7",
    category: "External Waste & Refuse Enclosure",
    task: "Verify external commercial wheelie bins and oil fat drums have tight-fitting lids closed; ensure waste corral floor is free from grease spills, standing effluent, or harborage debris.",
    status: "pass",
    actionNotes: "Bin corral clean; lids sealed; no food spillage"
  },
  {
    id: "p8",
    category: "Contractor Service Reports & SFBB",
    task: "Verify latest BPCA/NPTA pest control technician service report is signed, filed in the SFBB Management folder, and any recommended structural proofing repairs completed.",
    status: "pass",
    actionNotes: "Latest contractor report on file with zero active alerts"
  }
];

const ALLERGEN_SOP_TASKS: CheckItem[] = [
  {
    id: "alg-1",
    category: "1. Goods Inwards & Specification Checks",
    task: "Verify supplier delivery notes and ingredient packaging specifications for unnotified formulation or allergen changes (Natasha's Law FIR 2021).",
    status: "pass",
    actionNotes: "Delivery allergen specifications signed off"
  },
  {
    id: "alg-2",
    category: "2. Segregated Storage & Airtight Containers",
    task: "Store 14 statutory allergens (nuts, gluten, milk, sesame, mustard) in sealed purple or clearly labelled containers beneath non-allergenic foods.",
    status: "pass",
    actionNotes: "Purple allergen containers sealed on lower shelf"
  },
  {
    id: "alg-3",
    category: "3. Dedicated Purple Utensils & Prep Zone",
    task: "Use designated purple colour-coded chopping boards, purple handled knives, and separate purple allergen cookware for allergen-free ticket orders.",
    status: "pass",
    actionNotes: "Purple allergen kit sanitised and reserved"
  },
  {
    id: "alg-4",
    category: "4. Hand Hygiene & Fresh Apron Protocol",
    task: "Food handler must wash hands with warm water and unperfumed bactericidal soap (BS EN 1499) and don a fresh clean apron before assembling allergen orders.",
    status: "pass",
    actionNotes: "Hands washed & fresh apron donned"
  },
  {
    id: "alg-5",
    category: "5. Order Communication & Service Handover",
    task: "Highlight POS kitchen ticket with allergen alert; prepare dish under head chef supervision; serve covered with dedicated cloche and allergen flag.",
    status: "pass",
    actionNotes: "Pass cloche applied with allergen marker"
  },
  {
    id: "alg-6",
    category: "6. Dedicated Spill Kit & Decontamination",
    task: "Clean allergen powder/liquid spills immediately using single-use blue disposable roll and BS EN 1276 sanitiser; never use shared reusable cloths.",
    status: "pass",
    actionNotes: "Single-use blue roll used; surface sanitised"
  },
  {
    id: "alg-7",
    category: "7. Daily Allergen Matrix Audit",
    task: "Review physical 14-allergen matrix binder and POS ingredient database against all daily specials, substituted dressings, and kitchen batches.",
    status: "pass",
    actionNotes: "Daily specials reconciled with allergen matrix"
  }
];

const HACCP_AUDIT_TASKS: CheckItem[] = [
  {
    id: "haccp-1",
    category: "1. Prerequisite Programmes (PRPs)",
    task: "Verify premises pest proofing, certified waste contracts, staff hygiene fitness-to-work records, and potable water testing under Regulation (EC) No 852/2004.",
    status: "pass",
    actionNotes: "PRP documentation verified and complete"
  },
  {
    id: "haccp-2",
    category: "2. Hazard Analysis & CCP Validation",
    task: "Review biological, chemical, physical, and allergen hazards across all operational flow steps from goods inwards to service; verify CCP thresholds.",
    status: "pass",
    actionNotes: "Hazard register updated with latest menu additions"
  },
  {
    id: "haccp-3",
    category: "3. Critical Limits & Monitoring Logs",
    task: "Audit last 90 days of chiller logs (<=5°C), cooking core logs (>=75°C / 82°C Scotland), and hot holding logs (>=63°C) for complete daily supervisor sign-offs.",
    status: "pass",
    actionNotes: "Chiller and cook line logs 100% complete"
  },
  {
    id: "haccp-4",
    category: "4. Corrective Action Verification",
    task: "Inspect records of deviations and corrective actions taken (e.g. food re-cooked, chiller repaired, condemned stock disposal transfer notes).",
    status: "pass",
    actionNotes: "Corrective actions documented with root cause"
  },
  {
    id: "haccp-5",
    category: "5. Probe Thermometer Calibration Check",
    task: "Inspect monthly probe calibration records: ice water test (-1°C to +1°C) and boiling water test (99°C to 101°C) verified for all digital needle probes.",
    status: "pass",
    actionNotes: "All 4 kitchen probes calibrated this month"
  },
  {
    id: "haccp-6",
    category: "6. Approved Supplier & Traceability Audit",
    task: "Verify approved supplier register accreditation; audit one-step-back and one-step-forward lot numbers for high-risk meat and seafood batches.",
    status: "pass",
    actionNotes: "Lot numbers matched to delivery invoices"
  },
  {
    id: "haccp-7",
    category: "7. Annual HACCP Review & EHO Readiness",
    task: "Confirm annual HACCP management system review signed by business owner; staff Level 2/3 hygiene certificates active in SFBB training record.",
    status: "pass",
    actionNotes: "Annual management review signed off"
  }
];

const BAR_OPERATIONS_TASKS: CheckItem[] = [
  {
    id: "bar-1",
    category: "1. Cellar & Beer Line Sanitation",
    task: "Verify beer line cleaning rota completed with purple-indicator chemical; cellar temperature maintained between 10°C and 12°C.",
    status: "pass",
    actionNotes: "Lines cleaned and flushed with fresh water"
  },
  {
    id: "bar-2",
    category: "2. Commercial Glasswasher Sanitisation",
    task: "Check glasswasher chemical dosing levels: wash temp >=55°C, rinse temp >=65°C, and wash tank cleared of broken glass and lime scale.",
    status: "pass",
    actionNotes: "Glasswasher chemicals full; rinse verified"
  },
  {
    id: "bar-3",
    category: "3. Ice Machine & Ice Scoop Hygiene",
    task: "Inspect commercial ice machine: zero pink slime or biofilm in chute; dedicated sanitized plastic scoop stored in wall holster (never left in ice bin).",
    status: "pass",
    actionNotes: "Ice machine sanitized; scoop holstered"
  },
  {
    id: "bar-4",
    category: "4. Garnish Station & Natasha's Law Allergens",
    task: "Cut fresh citrus and cocktail garnishes daily; label with prep date and use-by time; separate egg white cocktail shaker from standard shakers.",
    status: "pass",
    actionNotes: "Garnishes prepped and egg shakers segregated"
  },
  {
    id: "bar-5",
    category: "5. Bar Optics, Pourers & Speed Rails",
    task: "Soak optic nozzles and pour spouts in warm water; sanitize speed rails and rubber bar counter spill mats.",
    status: "pass",
    actionNotes: "Optics and pourers soaked and disinfected"
  },
  {
    id: "bar-6",
    category: "6. Handwash Basin & Staff Hygiene",
    task: "Dedicated bar handwash sink fully stocked with warm running water, unperfumed soap (BS EN 1499), and blue paper roll.",
    status: "pass",
    actionNotes: "Handwash basin clean and stocked"
  },
  {
    id: "bar-7",
    category: "7. Bottle Dumps & Glass Recycling",
    task: "Empty under-counter bottle bins into external commercial glass recycling skip; verify skip is locked and free from broken glass hazards.",
    status: "pass",
    actionNotes: "Bottle skips locked and surrounding area swept"
  }
];

const RESTAURANT_FOH_TASKS: CheckItem[] = [
  {
    id: "foh-1",
    category: "1. Dining Tables & Touchpoint Sanitation",
    task: "Disinfect all customer dining tables, chairs, highchairs, and laminated takeaway menus using food-safe antibacterial wipes (BS EN 1276).",
    status: "pass",
    actionNotes: "Tables and highchairs sanitized"
  },
  {
    id: "foh-2",
    category: "2. POS Terminals & Card Readers",
    task: "Wipe down electronic point-of-sale touchscreens, chip-and-pin card readers, and payment terminals with electronics-safe disinfectant.",
    status: "pass",
    actionNotes: "Card readers disinfected"
  },
  {
    id: "foh-3",
    category: "3. Condiment Cruets & Cutlery Hygiene",
    task: "Inspect salt and pepper shakers, sauce bottles, and cutlery roll-ups; ensure condiment bottles are wiped and date-checked.",
    status: "pass",
    actionNotes: "Condiments cleaned and refilled"
  },
  {
    id: "foh-4",
    category: "4. Floor Cleanliness & Slip Hazard Check",
    task: "Sweep and mop dining room floors; inspect entrance walk-off matting; confirm zero wet slip hazards or tripping cables.",
    status: "pass",
    actionNotes: "Dining floors clean; mats flat and secure"
  },
  {
    id: "foh-5",
    category: "5. Ventilation & Airflow Management",
    task: "Verify front-of-house heating, ventilation, and air conditioning (HVAC) operating smoothly with fresh air intake; verify no grease odors.",
    status: "pass",
    actionNotes: "HVAC set to comfortable airflow"
  },
  {
    id: "foh-6",
    category: "6. Customer Washroom Verification Walk",
    task: "Conduct pre-service customer restroom inspection: confirm unperfumed soap, paper towels, clean sanitary bins, and signed door log.",
    status: "pass",
    actionNotes: "Restrooms inspected and signed off"
  },
  {
    id: "foh-7",
    category: "7. Daily Specials & Allergen Briefing",
    task: "Conduct pre-service staff briefing: review daily food specials, substituted ingredients, and Natasha's Law 14-allergen declarations.",
    status: "pass",
    actionNotes: "Service team briefed on daily specials and allergens"
  }
];

const WASTE_MANAGEMENT_TASKS: CheckItem[] = [
  {
    id: "w1",
    category: "1. Kitchen Food Waste Segregation",
    task: "Ensure internal foot-pedal bins are lined with heavy-duty biohazard/waste bags; food waste segregated from dry recycling and packaging.",
    status: "pass",
    actionNotes: "Internal pedal bins lined and segregated"
  },
  {
    id: "w2",
    category: "2. Used Cooking Oil (UCO) Storage",
    task: "Drain cooled spent cooking oil into sealed, bunded storage drums; verify collection by Environment Agency registered waste carrier.",
    status: "pass",
    actionNotes: "Oil drums sealed in bunded store"
  },
  {
    id: "w3",
    category: "3. Category 3 Animal By-Product (ABP) Waste",
    task: "Raw meat/bone trimmings and condemned food stored in designated, lidded Category 3 ABP bins; separate from general municipal refuse.",
    status: "pass",
    actionNotes: "Category 3 ABP bin locked"
  },
  {
    id: "w4",
    category: "4. External Commercial Waste Corral",
    task: "Check external commercial wheelie bins: verify all lids are securely shut, drain plugs fitted, and bin lock mechanisms engaged.",
    status: "pass",
    actionNotes: "External bins locked; lids closed"
  },
  {
    id: "w5",
    category: "5. Grease Trap & Interceptor Maintenance",
    task: "Inspect indoor or outdoor grease trap: skim surface grease, verify biological dosing pump is operational, and log pumping schedule.",
    status: "pass",
    actionNotes: "Grease trap skimmed and operating normally"
  },
  {
    id: "w6",
    category: "6. Refuse Enclosure Hygiene & Pest Proofing",
    task: "Wash and disinfect external bin storage yard; ensure zero food spillages, stagnant effluent, or rodent harborage near refuse corals.",
    status: "pass",
    actionNotes: "Waste yard pressure-washed and clean"
  },
  {
    id: "w7",
    category: "7. Duty of Care Waste Transfer Notes",
    task: "Verify latest Waste Transfer Notes (WTNs) and oil collection receipts from registered waste contractors are archived in the compliance binder.",
    status: "pass",
    actionNotes: "Duty of care transfer notes filed for 2 years"
  }
];

const RESTROOM_TASKS: CheckItem[] = [
  {
    id: "rest-1",
    category: "1. Hand Hygiene Dispensers & Supplies",
    task: "Verify unperfumed bactericidal hand soap (BS EN 1499) and blue disposable paper towel dispensers are fully stocked; no empty units.",
    status: "pass",
    actionNotes: "Soap and paper towels replenished"
  },
  {
    id: "rest-2",
    category: "2. Potable Water & Temperature Verification",
    task: "Check continuous hot running water (>=45°C) and cold water at handwash basins; verify push-taps provide sufficient flow duration.",
    status: "pass",
    actionNotes: "Water temperature verified at 48°C"
  },
  {
    id: "rest-3",
    category: "3. Sanitary Ware & Toilet Disinfection",
    task: "Descaling and bactericidal cleaning of WC toilet bowls, seats, urinals, and flush levers; confirm sanitary disposal bins are emptied.",
    status: "pass",
    actionNotes: "Toilets descaled and disinfected"
  },
  {
    id: "rest-4",
    category: "4. High-Touch Points & Mirror Cleaning",
    task: "Disinfect internal and external door handles, push plates, locks, cubicle partitions, and baby-changing tables with food-safe sanitiser.",
    status: "pass",
    actionNotes: "High-touch points sanitized"
  },
  {
    id: "rest-5",
    category: "5. Washroom Colour-Coded Floor Mopping",
    task: "Mop non-slip floors using designated yellow-coded mop bucket and yellow floor sign; ensure floors are dry and clear of slip hazards.",
    status: "pass",
    actionNotes: "Yellow mop used; floor dry and hazard-free"
  },
  {
    id: "rest-6",
    category: "6. Refuse & Odour Control",
    task: "Empty pedal bins, install fresh heavy-duty liner, wipe exterior bin surfaces, and verify automated air freshener / passive ventilation.",
    status: "pass",
    actionNotes: "Refuse emptied and relined"
  },
  {
    id: "rest-7",
    category: "7. Hourly Supervisor Sign-Off",
    task: "Complete hourly inspection checklist on back of washroom door with supervisor initials and maintenance action notes.",
    status: "pass",
    actionNotes: "Hourly log signed off"
  }
];

const DUE_DILIGENCE_TASKS: CheckItem[] = [
  {
    id: "dd-1",
    category: "1. Supplier Accreditation & Traceability",
    task: "Verify approved supplier lists; inspect goods-inwards delivery temperatures and lot code traceability (Article 18 Reg EC 178/2002).",
    status: "pass",
    actionNotes: "Supplier delivery logs verified"
  },
  {
    id: "dd-2",
    category: "2. Cold Chain Integrity & Storage Limits",
    task: "Confirm twice-daily commercial refrigerator logs (<=5°C, legal max 8°C) and freezer logs (<=-18°C) are signed without gaps.",
    status: "pass",
    actionNotes: "Cold chain records audited"
  },
  {
    id: "dd-3",
    category: "3. Thermal Core Lethality Verification",
    task: "Audit batch cooking logs verifying mandatory 75°C core for 30s (82°C Scotland); confirm hot-holding pass maintains >=63°C.",
    status: "pass",
    actionNotes: "Thermal probe logs signed off"
  },
  {
    id: "dd-4",
    category: "4. Natasha's Law & 14 Allergens Due Diligence",
    task: "Verify all PPDS foods bear complete ingredient lists with allergens in bold; review 14-allergen matrix accuracy against current stock.",
    status: "pass",
    actionNotes: "PPDS labels and allergen matrix confirmed"
  },
  {
    id: "dd-5",
    category: "5. Staff Competence & Hygiene Certification",
    task: "Confirm all active kitchen food handlers possess valid Level 2 Food Hygiene certificates and supervisors hold Level 3 awards.",
    status: "pass",
    actionNotes: "Training certificates filed in SFBB binder"
  },
  {
    id: "dd-6",
    category: "6. Pest Control Contract & Proofing Audit",
    task: "Verify quarterly BPCA pest inspection reports on file; confirm all recommended physical building proofing actions completed.",
    status: "pass",
    actionNotes: "BPCA pest report current with zero active alerts"
  },
  {
    id: "dd-7",
    category: "7. Thermometer Calibration & Equipment Maintenance",
    task: "Audit monthly digital probe calibration records (ice water -1°C to +1°C and boiling water 99°C to 101°C); inspect extraction TR19 certificate.",
    status: "pass",
    actionNotes: "Probe calibrations and TR19 cert validated"
  }
];

const RETAIL_STORE_TASKS: CheckItem[] = [
  {
    id: "retail-1",
    category: "1. Store Opening & Premises Security",
    task: "External perimeter and shutters inspected; alarm disarmed; CCTV cameras fully operational; cash floats verified and registered at till stations.",
    status: "pass",
    actionNotes: "Shutters, alarm and till floats verified"
  },
  {
    id: "retail-2",
    category: "2. Chilled & Frozen Display Refrigeration",
    task: "Grab-and-go open-deck display chillers verified at 1°C to 5°C (legal maximum 8°C); ice cream and frozen display cabinets at ≤-18°C; digital probe audit logged.",
    status: "pass",
    actionNotes: "All retail display decks within statutory limits"
  },
  {
    id: "retail-3",
    category: "3. Stock Rotation & Expiry Auditing (FIFO)",
    task: "Daily First-In, First-Out (FIFO) shelf pull completed; pre-packed sandwiches, salads, and dairy use-by dates audited; damaged packs or expired lines quarantined.",
    status: "pass",
    actionNotes: "Damaged and day-dated lines pulled and logged"
  },
  {
    id: "retail-4",
    category: "4. Shop Floor Sanitation & Aisle Clearways",
    task: "Aisles completely free from tripping hazards and overstocked pallets; customer baskets and shopping trolley handles sanitised with BS EN 1276 surface spray.",
    status: "pass",
    actionNotes: "Trolleys wiped down; aisles unobstructed"
  },
  {
    id: "retail-5",
    category: "5. Natasha's Law & Food Display Labelling",
    task: "All pre-packed for direct sale (PPDS) items checked for full ingredients lists with 14 statutory allergens highlighted in bold; loose bakery items clearly signposted.",
    status: "pass",
    actionNotes: "PPDS packaging compliance verified"
  },
  {
    id: "retail-6",
    category: "6. Store Closing, Cash Reconcile & Secure Lockup",
    task: "All tills cashed up and takings secured in drop safe; waste bins emptied to external locked compactor; fire exit clearways verified; alarm system armed.",
    status: "pass",
    actionNotes: "Safe locked and alarm armed"
  }
];

const KITCHEN_OPENING_CLOSING_TASKS: CheckItem[] = [
  {
    id: "koc-1",
    category: "1. Morning Shift: Cold Chain & Temperature Audit",
    task: "Inspect walk-in chillers and prep fridges: verify digital display and calibrated probe readings are between 1°C and 5°C; deep freezers at ≤-18°C. Record probe readings in daily log.",
    status: "pass",
    actionNotes: "All refrigeration units within statutory limits"
  },
  {
    id: "koc-2",
    category: "2. Morning Shift: Hygiene Stations & Chemical Verification",
    task: "Confirm dedicated handwashing sinks have unobstructed access, continuous hot running water (>45°C), bactericidal unperfumed hand soap (BS EN 1499), and blue roll.",
    status: "pass",
    actionNotes: "Handwash sinks fully restocked"
  },
  {
    id: "koc-3",
    category: "3. Morning Shift: Canopy, Gas Safety & Station Setup",
    task: "Turn on kitchen extraction canopy and verify airflow interlock; inspect gas cooker flame guards; sanitise stainless steel prep tables with BS EN 1276 disinfectant.",
    status: "pass",
    actionNotes: "Canopy and interlock operational"
  },
  {
    id: "koc-4",
    category: "4. Mid-Service: Cross-Contamination & Allergen Barrier",
    task: "Verify colour-coded chopping boards (Red, Blue, Yellow, Green, White, Purple) are separated; purple allergen station setup with clean dedicated smallwares; probe wipes available.",
    status: "pass",
    actionNotes: "Strict raw vs RTE segregation active"
  },
  {
    id: "koc-5",
    category: "5. Evening Shutdown: Hot Food Cooling & Proper Storage",
    task: "All cooked foods cooled from >63°C to <8°C within 90 minutes using blast chiller or shallow pans; decanted into food-grade containers with dated labels; raw meats stored underneath RTE items.",
    status: "pass",
    actionNotes: "All prep decanted, labelled and covered"
  },
  {
    id: "koc-6",
    category: "6. Evening Shutdown: Deep Sanitisation & Equipment Isolation",
    task: "Empty and scrub bain-maries; filter and cover deep fat fryers; dismantle and sanitise commercial meat slicers; mop non-slip kitchen floors with heavy degreaser.",
    status: "pass",
    actionNotes: "Cookline scrubbed and degreased"
  },
  {
    id: "koc-7",
    category: "7. Night Lockup: Gas Isolation & Waste Removal",
    task: "Shut off commercial gas isolation valve; verify electric fryers and ovens powered down; tie waste bags and remove to external lidded bins; verify back door pest seals intact.",
    status: "pass",
    actionNotes: "Gas isolated, waste cleared, doors secured"
  }
];

const STARTING_FOOD_BUSINESS_TASKS: CheckItem[] = [
  {
    id: "sfb-1",
    category: "Phase 1: Statutory Registration & Council Approvals",
    task: "Register food business with Local Authority environmental health department at least 28 days before trading; confirm planning permission (Class E) and trade waste agreement.",
    status: "pass",
    actionNotes: "Local Authority 28-day notice submitted"
  },
  {
    id: "sfb-2",
    category: "Phase 2: Food Safety Management System (HACCP / SFBB)",
    task: "Implement documented Food Standards Agency 'Safer Food, Better Business' (SFBB) pack or bespoke HACCP system detailing hazard analysis, CCPs, and critical limits.",
    status: "pass",
    actionNotes: "SFBB pack printed and fully completed"
  },
  {
    id: "sfb-3",
    category: "Phase 3: Kitchen Infrastructure & Cross-Contamination",
    task: "Install separate designated handwash basins with hot & cold water; commercial ventilation canopy with gas interlock; washable non-slip flooring; colour-coded prep stations.",
    status: "pass",
    actionNotes: "Hand basins and ventilation installed"
  },
  {
    id: "sfb-4",
    category: "Phase 4: Staff Training & Food Safety Certification",
    task: "All food handlers certified in Level 2 Food Safety in Catering; Head Chef/Manager holds Level 3 Food Hygiene; Natasha's Law allergen training completed by all staff.",
    status: "pass",
    actionNotes: "Level 2/3 certificates filed in compliance binder"
  },
  {
    id: "sfb-5",
    category: "Phase 5: Natasha's Law & 14 Statutory Allergen Matrix",
    task: "Formulate complete 14-allergen recipe matrix for all food and beverage offerings; design compliant PPDS labels with ingredients in descending order and allergens in bold.",
    status: "pass",
    actionNotes: "14-allergen matrix verified against ingredient specs"
  },
  {
    id: "sfb-6",
    category: "Phase 6: Pest Proofing & Commercial Waste Management",
    task: "Contract commercial pest control service with scheduled monitoring; secure commercial trade waste disposal agreement with licensed carrier (Duty of Care note on file).",
    status: "pass",
    actionNotes: "Pest contract and waste carrier agreement active"
  },
  {
    id: "sfb-7",
    category: "Phase 7: Pre-Opening FHRS 5-Star Readiness Audit",
    task: "Execute comprehensive mock inspection across all 3 FHRS pillars: Hygienic Food Handling, Structural Cleanliness, and Confidence in Management.",
    status: "pass",
    actionNotes: "Mock EHO inspection completed with 5-star score"
  }
];

const SSOP_PROCEDURES_TASKS: CheckItem[] = [
  {
    id: "ssop-1",
    category: "1. Pre-Operational Inspection & Gross Debris Removal",
    task: "Inspect food contact surfaces; ensure all equipment is dismantled, power isolated, and dry food debris and crumbs swept and discarded before chemical application.",
    status: "pass",
    actionNotes: "Gross debris cleared and power locked out"
  },
  {
    id: "ssop-2",
    category: "2. Detergent Wash & Thermal Degradation",
    task: "Apply alkaline food-grade detergent in warm water (45°C–55°C) to emulsify organic fats and grease; scrub all conveyor belts, slicers, and prep surfaces with colour-coded brushes.",
    status: "pass",
    actionNotes: "Surfaces scrubbed with alkaline detergent"
  },
  {
    id: "ssop-3",
    category: "3. Intermediate Potable Water Rinse",
    task: "Rinse surfaces thoroughly with clean running potable water to remove all chemical detergent residue and suspended soils prior to disinfectant application.",
    status: "pass",
    actionNotes: "Detergent rinsed completely"
  },
  {
    id: "ssop-4",
    category: "4. Disinfection & Contact Time (BS EN 1276)",
    task: "Apply BS EN 1276 / BS EN 13697 certified bactericidal sanitiser at calibrated dilution; observe mandatory 30-second to 5-minute contact time for complete pathogen inactivation.",
    status: "pass",
    actionNotes: "Sanitiser applied; contact time verified"
  },
  {
    id: "ssop-5",
    category: "5. Final Rinse & Environmental Drainage",
    task: "Execute final potable water rinse if using non-leave-on disinfectant; squeegee residual water toward trapped drainage channels to prevent standing microbial pools.",
    status: "pass",
    actionNotes: "Floors and tables squeegeed dry"
  },
  {
    id: "ssop-6",
    category: "6. Post-Cleaning Verification (ATP / Protein Swab)",
    task: "Perform rapid ATP bioluminescence swab or allergen protein test on critical food contact zones; record RLU reading (target <30 RLU); approve line for production.",
    status: "pass",
    actionNotes: "ATP reading 14 RLU (PASS)"
  }
];

const RECEIVING_DELIVERY_TASKS: CheckItem[] = [
  {
    id: "rec-1",
    category: "1. Delivery Vehicle Inspection & Sanitation",
    task: "Inspect supplier vehicle cargo hold: confirm clean, odourless interior, free from chemical spills, pests, or evidence of temperature abuse; check refrigeration unit running.",
    status: "pass",
    actionNotes: "Vehicle interior clean and chilling active"
  },
  {
    id: "rec-2",
    category: "2. Chilled Goods Temperature Verification",
    task: "Probe core temperature of fresh meat, poultry, fish, and dairy using sanitised UKAS probe: verify reading is between 1°C and 5°C (strictly reject deliveries >8°C).",
    status: "pass",
    actionNotes: "Chilled goods probed at 3.2°C (PASS)"
  },
  {
    id: "rec-3",
    category: "3. Frozen Goods Integrity & Temperature",
    task: "Inspect frozen goods for softness or ice crystal refreezing: probe between packs to confirm temperature is ≤-18°C (reject shipments above -15°C).",
    status: "pass",
    actionNotes: "Frozen items solid at -19.1°C (PASS)"
  },
  {
    id: "rec-4",
    category: "4. Packaging Integrity & Seal Audit",
    task: "Check vacuum packs, MAP containers, and cans for blown seals, puncturing, rust, denting, or pest gnawing; verify hermetic seals are intact.",
    status: "pass",
    actionNotes: "Packaging intact; zero blown seals"
  },
  {
    id: "rec-5",
    category: "5. Date Codes, Traceability & Invoice Matching",
    task: "Audit Use-By dates to ensure adequate shelf-life; record supplier name, invoice/PO number, lot batch codes, and country of origin in intake register.",
    status: "pass",
    actionNotes: "Traceability batch codes and dates logged"
  },
  {
    id: "rec-6",
    category: "6. Immediate Cold Chain Transfer (FIFO)",
    task: "Transfer approved chilled and frozen items immediately to walk-in cold rooms within 15 minutes of offloading; apply dated intake labels and follow FIFO rotation.",
    status: "pass",
    actionNotes: "Stock transferred to walk-in chiller"
  }
];

const GMP_AUDIT_TASKS: CheckItem[] = [
  {
    id: "gmp-1",
    category: "1. Personnel Hygiene & Staff Welfare",
    task: "All production staff wearing clean protective clothing, hairnets, and beard snoods; zero jewellery (except plain wedding band); nail polish prohibited; handwash basins used upon entry.",
    status: "pass",
    actionNotes: "Protective clothing and hand hygiene verified"
  },
  {
    id: "gmp-2",
    category: "2. Facility Infrastructure & Environmental Hygiene",
    task: "Floors, walls, and ceilings clean, smooth, non-porous, and free from condensation or flaking paint; drainage channels clear with grease traps inspected.",
    status: "pass",
    actionNotes: "Facility structure and drainage clear"
  },
  {
    id: "gmp-3",
    category: "3. Allergen Segregation & Natasha's Law Controls",
    task: "All 14 statutory allergens clearly labelled, segregated in designated colour-coded storage bins, and handled using dedicated purple tools with scheduling barriers.",
    status: "pass",
    actionNotes: "Allergen storage segregated and labelled"
  },
  {
    id: "gmp-4",
    category: "4. Equipment Calibration & Preventive Maintenance",
    task: "Thermometer probes calibrated monthly; metal detectors and foreign body filters tested with certified test wands (Fe 1.5mm, Non-Fe 2.0mm, SS 2.5mm); maintenance logs up to date.",
    status: "pass",
    actionNotes: "Calibration and metal detection verified"
  },
  {
    id: "gmp-5",
    category: "5. Pest Prevention & External Proofing",
    task: "All external pest doors fitted with tight brush seals; electronic fly killers clean and operational; insect screens intact on opening windows; pest bait stations checked.",
    status: "pass",
    actionNotes: "Pest proofing intact; EFKs serviced"
  },
  {
    id: "gmp-6",
    category: "6. Traceability, CCP Monitoring & Recall Readiness",
    task: "All raw material lot numbers documented into finished batch production records; CCP critical limits logged and signed off by quality assurance supervisor.",
    status: "pass",
    actionNotes: "CCP records validated; full batch traceability"
  }
];

const MEAT_SLICER_CLEANING_TASKS: CheckItem[] = [
  {
    id: "slicer-1",
    category: "1. Electrical Isolation & Lockout",
    task: "Turn off slicer motor, unplug power lead from mains socket, and wrap cord to prevent liquid contact.",
    status: "pass",
    actionNotes: "Power cord unplugged and isolated"
  },
  {
    id: "slicer-2",
    category: "2. Blade Gauge Zero-Locking",
    task: "Turn thickness indexing gauge knob fully clockwise past zero until blade edge is fully shielded by the gauge plate.",
    status: "pass",
    actionNotes: "Blade thickness set to zero lock"
  },
  {
    id: "slicer-3",
    category: "3. Disassembly & PPE Protection",
    task: "Put on EN 388 Level 5 cut-resistant stainless mesh safety gloves; remove product chute, slice deflector, and center blade guard plate.",
    status: "pass",
    actionNotes: "Cut-resistant gloves worn; components removed"
  },
  {
    id: "slicer-4",
    category: "4. Detergent Wash & Gross Debris",
    task: "Wipe and scrub blade surfaces from center outwards with warm detergent solution (45°C–55°C) using non-scratch blue scouring pad; wash removed components in 3-sink bay.",
    status: "pass",
    actionNotes: "Blade wiped from center outward; chute washed"
  },
  {
    id: "slicer-5",
    category: "5. Chemical Disinfection (BS EN 1276)",
    task: "Apply BS EN 1276 certified food-contact sanitiser to blade, gauge plate, and chassis; maintain minimum 30-second wet contact time; allow air drying.",
    status: "pass",
    actionNotes: "Sanitiser applied; 30s contact time observed"
  },
  {
    id: "slicer-6",
    category: "6. Reassembly & Lubrication",
    task: "Inspect blade for nicks or burrs; reassemble guard and carriage tightly; apply NSF H1 food-grade mineral oil to slide rods.",
    status: "pass",
    actionNotes: "Reassembled and lubricated with food-grade oil"
  }
];

const UTENSIL_CLEANING_TASKS: CheckItem[] = [
  {
    id: "ut-clean-1",
    category: "1. Pre-Scrape & Debris Disposal",
    task: "Scrape all residual food scraps, bones, and grease into organics waste bin; pre-rinse heavily soiled pots with warm spray.",
    status: "pass",
    actionNotes: "Plates and pots scraped and pre-rinsed"
  },
  {
    id: "ut-clean-2",
    category: "2. Sink 1: Detergent Wash (45°C–55°C)",
    task: "Submerge utensils in Sink 1 filled with clean warm water (45°C–55°C) and commercial degreasing detergent; scrub with colour-coded brushes.",
    status: "pass",
    actionNotes: "Wash water temperature verified at 48°C"
  },
  {
    id: "ut-clean-3",
    category: "3. Sink 2: Clean Potable Water Rinse",
    task: "Immerse washed utensils in Sink 2 filled with clean warm running water to remove all suspended detergent residue and organic matter.",
    status: "pass",
    actionNotes: "Utensils fully rinsed of detergent suds"
  },
  {
    id: "ut-clean-4",
    category: "4. Sink 3: Chemical or Thermal Disinfection",
    task: "Submerge in Sink 3 containing BS EN 1276 chemical sanitiser (contact time 30s) OR hot water sanitisation (minimum 82°C for 30 seconds).",
    status: "pass",
    actionNotes: "BS EN 1276 chemical sanitiser verified at 200ppm"
  },
  {
    id: "ut-clean-5",
    category: "5. Ambient Air Drying on Clean Racks",
    task: "Transfer sanitised utensils to wire shelving racks to air dry completely; NEVER use tea towels or cloth rags which recontaminate items.",
    status: "pass",
    actionNotes: "Air-drying on inverted stainless wire racks"
  },
  {
    id: "ut-clean-6",
    category: "6. Clean Storage & Cross-Contamination",
    task: "Store dried utensils in clean, enclosed cupboards or designated magnetic bars at least 15cm off the floor; purple allergen tools segregated.",
    status: "pass",
    actionNotes: "Stored in sanitised cupboard off floor"
  }
];

const HOOD_CLEANING_TASKS: CheckItem[] = [
  {
    id: "hood-1",
    category: "1. Daily Baffle Filter Degreasing",
    task: "Remove stainless steel baffle grease filters; soak in hot alkaline degreaser solution (min 60°C) for 30 minutes, pressure rinse, and allow to air dry completely.",
    status: "pass",
    actionNotes: "Filters soaked, degreased, and re-seated"
  },
  {
    id: "hood-2",
    category: "2. Daily Grease Drip Cup & Channel Emptying",
    task: "Empty and wash grease collection cups and drain channels beneath canopy edge; pour collected waste fat into sealed spent oil drums (never down drains).",
    status: "pass",
    actionNotes: "Grease channels cleared; cups disinfected"
  },
  {
    id: "hood-3",
    category: "3. Weekly Canopy Interior & Plenum Wipe Down",
    task: "Degrease exposed interior canopy surfaces, light fixtures, and plenum chamber behind filters using food-contact safe degreaser and lint-free cloths.",
    status: "pass",
    actionNotes: "Canopy interior free of carbonised grease"
  },
  {
    id: "hood-4",
    category: "4. Weekly Canopy Exterior & Stainless Polish",
    task: "Wash outer stainless steel hood shell, wipe down seams, and apply food-grade stainless steel polish; verify illumination bulbs are fully operational.",
    status: "pass",
    actionNotes: "Outer canopy polished; vapour-proof lights tested"
  },
  {
    id: "hood-5",
    category: "5. Monthly Fan Housing & Airflow Verification",
    task: "Inspect rooftop or inline exhaust fan housing for vibration, grease seepage, and belt tension; verify negative air pressure draws smoke effectively across all cooking equipment.",
    status: "pass",
    actionNotes: "Extraction fan operational with positive draft"
  },
  {
    id: "hood-6",
    category: "6. Insurance & TR19 Professional Certification",
    task: "Verify date of last certified TR19 deep clean of internal ductwork, risers, and extract motor; confirm next professional specialist service is scheduled within insurance warranty policy window.",
    status: "pass",
    actionNotes: "TR19 certificate valid; audit log signed"
  }
];

const GREASE_TRAP_TASKS: CheckItem[] = [
  {
    id: "gt-1",
    category: "1. Daily FOG Layer & Water Cooling Check",
    task: "Allow kitchen wastewater in grease trap to cool completely (below 35°C) so fats, oils, and grease (FOG) congeal firmly into a solid surface blanket.",
    status: "pass",
    actionNotes: "Trap cooled; solid grease crust formed"
  },
  {
    id: "gt-2",
    category: "2. Daily / Weekly Surface Skimming",
    task: "Carefully skim solidified grease, fats, and oils from top surface using a perforated skimmer shovel; transfer solids directly into designated sealed food waste drums.",
    status: "pass",
    actionNotes: "Surface grease cake skimmed into waste drum"
  },
  {
    id: "gt-3",
    category: "3. Baffle Plate Removal & Internal Wall Scrubbing",
    task: "Remove removable flow baffles; scrape grease accumulation from baffle slots and interior chamber walls using a non-scratch plastic scraper and warm soapy water.",
    status: "pass",
    actionNotes: "Baffles removed, scraped clean, and refitted"
  },
  {
    id: "gt-4",
    category: "4. Heavy Solids & Sludge Removal (25% Rule)",
    task: "Measure combined thickness of floating grease cap and bottom sludge layer; if depth exceeds 25% of total liquid volume, pump out bottom sediment or schedule commercial pump-out.",
    status: "pass",
    actionNotes: "FOG and sludge depth checked (under 20%)"
  },
  {
    id: "gt-5",
    category: "5. Biological Dosing Unit & Enzyme Injection",
    task: "Inspect automatic bacterial / bio-enzyme dosing pump; verify chemical bottle level is adequate, injection tube is unclogged, and timer is programmed for overnight dosing.",
    status: "pass",
    actionNotes: "Bio-dosing reservoir full; timer verified"
  },
  {
    id: "gt-6",
    category: "6. Gasket Seal & Odour Control Integrity",
    task: "Inspect rubber gasket around trap access lid for cracks, perishing, or food debris; tighten lock-down bolts evenly to prevent sewer gas and foul odour escape.",
    status: "pass",
    actionNotes: "Lid gasket airtight; no sewer odour detected"
  },
  {
    id: "gt-7",
    category: "7. Licensed Carrier Waste Transfer Notes (Duty of Care)",
    task: "Archive certified Waste Transfer Notes (WTN) from registered environmental waste contractor for all grease trap pump-outs; retain records on-site for 2 years under UK Environmental Protection Act 1990.",
    status: "pass",
    actionNotes: "Duty of Care transfer note filed and signed"
  }
];

const FIVE_WHYS_RCA_TASKS: CheckItem[] = [
  {
    id: "fw-1",
    category: "Immediate Containment",
    task: "Immediate Containment: Quarantine suspect product batch, halt affected process line, and verify facility boundary containment.",
    status: "pass",
    actionNotes: "Product isolated with quarantine tape and placed in secure hold area."
  },
  {
    id: "fw-2",
    category: "Incident Data",
    task: "Incident Documentation: Record exact time, temperature, CCP critical limit breach, and equipment serial numbers.",
    status: "pass",
    actionNotes: "Batch records and CCP digital sensor graphs secured."
  },
  {
    id: "fw-3",
    category: "HACCP Team",
    task: "Investigation Team Assembly: Convene HACCP team lead, QA manager, shift supervisor, and maintenance engineer.",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-4",
    category: "Why #1 (Symptom)",
    task: "Why #1 (Direct Symptom): Establish immediate physical failure mechanism (e.g. why did the line fail to divert suspect product?).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-5",
    category: "Why #2 (Cause)",
    task: "Why #2 (Immediate Cause): Identify operational breakdown behind the direct failure (e.g. why was the override active?).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-6",
    category: "Why #3 (Procedure)",
    task: "Why #3 (Procedural Failure): Investigate the gap in standard protocols (e.g. why was there no formal lockout sign-off?).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-7",
    category: "Why #4 (Management)",
    task: "Why #4 (Management Oversight): Examine supervision, handover, and training gaps (e.g. shift change lacked bypass check).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-8",
    category: "Why #5 (Root Cause)",
    task: "Why #5 (Root Cause Determination): Uncover foundational management system flaw (e.g. FSMS excluded non-routine maintenance).",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-9",
    category: "Classification",
    task: "Root Cause Categorisation: Formally classify into Equipment, Procedural, Human/Training, Engineering Design, or Supplier Defect.",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-10",
    category: "CAPA Formulation",
    task: "CAPA Plan Formulation: Define corrective and preventive actions with assigned owners, deliverables, and strict due dates.",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-11",
    category: "SOP Revision",
    task: "Procedural Revision & Retraining: Update relevant SOPs, amend HACCP control plans, and conduct documented staff briefings.",
    status: "pending",
    actionNotes: ""
  },
  {
    id: "fw-12",
    category: "Verification",
    task: "Effectiveness Verification Audit: Perform scheduled 30-day and 60-day audits to verify permanent elimination of root cause.",
    status: "pending",
    actionNotes: ""
  }
];

const BRC_AUDIT_TASKS: CheckItem[] = [
  {
    id: "brc-1",
    category: "Senior Management",
    task: "Documented Food Safety Culture plan active, measurable quality targets defined, and bi-monthly executive review minutes recorded.",
    status: "pass",
    actionNotes: "Q4 review signed by plant director"
  },
  {
    id: "brc-2",
    category: "HACCP System",
    task: "Multidisciplinary HACCP plan verified on-site; critical control limits validated against scientific literature (e.g. 75°C core/30s).",
    status: "pass",
    actionNotes: "Annual flow chart review complete"
  },
  {
    id: "brc-3",
    category: "Site Standards",
    task: "Factory perimeter secure, exterior doors sealed with brush sweeps, and internal walls, floors and coving crack-free and washable.",
    status: "pass",
    actionNotes: "Loading dock sweep adjusted"
  },
  {
    id: "brc-4",
    category: "Foreign Body Control",
    task: "Metal detector / X-ray test wands (1.5mm Fe, 2.0mm Non-Fe, 2.5mm SS) challenged hourly; reject arm fail-safe verified.",
    status: "pass",
    actionNotes: "Hourly test log initialled"
  },
  {
    id: "brc-5",
    category: "Allergen Management",
    task: "Dedicated color-coded allergen utensils segregated; full wet clean flush-out and lateral flow swab test verified between runs.",
    status: "pass",
    actionNotes: "Peanut/nut line swab negative"
  },
  {
    id: "brc-6",
    category: "Traceability Recall",
    task: "Annual mock recall completed within 4 hours achieving 99.5% to 100.5% mass-balance reconciliation across raw ingredients and packaging.",
    status: "pass",
    actionNotes: "Mock recall file BRC-2026-02 closed"
  },
  {
    id: "brc-7",
    category: "Personnel & PPE",
    task: "Clean production clothing without external pockets or buttons; blue detectable metal-strip plasters logged and verified.",
    status: "pass",
    actionNotes: "First aid box replenished"
  },
  {
    id: "brc-8",
    category: "Pest Management",
    task: "Licensed PCO contract active, electronic trap maps up to date, zero interior toxic baits, and quarterly trend analysis reviewed.",
    status: "pass",
    actionNotes: "Fly killer tubes replaced"
  }
];

const KOSHER_CERTIFICATION_TASKS: CheckItem[] = [
  {
    id: "kosh-1",
    category: "Dietary Segregation",
    task: "Strict physical segregation of Meat (Fleishig), Dairy (Milchig), and Neutral (Pareve) utensils, cutting boards, and cookware.",
    status: "pass",
    actionNotes: "Color-coded red (meat) and blue (dairy) tags verified"
  },
  {
    id: "kosh-2",
    category: "Ingredient Verification",
    task: "Every incoming ingredient, processing aid, and sanitising chemical verified on accepted Kosher agency database (OU, Star-K, KLBD).",
    status: "pass",
    actionNotes: "Supplier certs on file"
  },
  {
    id: "kosh-3",
    category: "Mashgiach Supervision",
    task: "Mashgiach on-duty sign-in logged, Bishul Yisroel pilot lights verified, and kitchen locks inspected prior to production.",
    status: "pass",
    actionNotes: "Rabbinic sign-off recorded"
  },
  {
    id: "kosh-4",
    category: "Produce Inspection",
    task: "Leafy greens, berries, and broccoli inspected under backlight and cloth filtration (Bedikat Tola'im) to ensure zero insect infestation.",
    status: "pass",
    actionNotes: "Batch inspection sheet signed"
  },
  {
    id: "kosh-5",
    category: "Kashering & Purging",
    task: "Equipment crossover protocols enforced; 24-hour resting period and boiling water immersion (Hagala) completed under supervision if required.",
    status: "pending",
    actionNotes: "Scheduled for bi-weekly deep clean"
  },
  {
    id: "kosh-6",
    category: "Dishwashing Control",
    task: "Dedicated dishwashers or strict separation of meat and dairy washing cycles with separate rinse racks and clean drainage traps.",
    status: "pass",
    actionNotes: "Meat rack sanitized"
  }
];


const GFSI_AUDIT_TASKS: CheckItem[] = [
  {
    id: "gfsi-1",
    category: "Senior Management Commitment",
    task: "Documented Food Safety Culture policy active, measurable safety objectives published, quarterly executive review minutes recorded, and confidential employee reporting channels operational.",
    status: "pass",
    actionNotes: "Q4 executive food safety review minutes signed"
  },
  {
    id: "gfsi-2",
    category: "HACCP & Hazard Control",
    task: "Multidisciplinary HACCP plan validated on-site; critical control limits confirmed against scientific literature (e.g. 75°C core for 30s or 70°C for 2 min); daily monitoring records signed off.",
    status: "pass",
    actionNotes: "All CCP thermal logs verified compliant"
  },
  {
    id: "gfsi-3",
    category: "Environmental Monitoring & Hygiene",
    task: "Documented environmental pathogen swabbing plan active in high-care zones targeting Listeria monocytogenes and Salmonella; results trended with clear quarantine trigger limits.",
    status: "pass",
    actionNotes: "Zone 1 food-contact surfaces negative on latest swab"
  },
  {
    id: "gfsi-4",
    category: "Allergen Management & Natasha's Law",
    task: "All 14 statutory allergens segregated in designated colour-coded bins; dedicated purple utensils used; verified wet cleaning washdown and lateral flow swab tests recorded between runs.",
    status: "pass",
    actionNotes: "Post-sanitisation ELISA test negative"
  },
  {
    id: "gfsi-5",
    category: "Traceability & Mass-Balance Recall",
    task: "Annual mock recall completed within a strict 4-hour window, achieving 100% mass-balance reconciliation across raw ingredients, packaging, work-in-progress, and distributed finished stock.",
    status: "pass",
    actionNotes: "Mass-balance reconciled 99.8% within 3 hours 15 mins"
  },
  {
    id: "gfsi-6",
    category: "Supplier Assurance & Food Defense",
    task: "Approved supplier programme verified against GFSI certification databases; Food Defense (TACCP) threat assessment and Food Fraud (VACCP) vulnerability assessments documented and active.",
    status: "pass",
    actionNotes: "Raw material supplier certificates up-to-date"
  }
];

const ISO_22000_CERTIFICATION_TASKS: CheckItem[] = [
  {
    id: "iso-cert-1",
    category: "Stage 1: Context & Scope",
    task: "Document internal and external food safety issues, define interested party expectations, and establish formal scope of the Food Safety Management System (FSMS) (Clause 4).",
    status: "pass",
    actionNotes: "FSMS scope document approved by steering committee"
  },
  {
    id: "iso-cert-2",
    category: "Stage 2: Leadership & Commitment",
    task: "Top management publishes Food Safety Policy, assigns organisational roles and authorities, and appoints certified Food Safety Team Leader (Clause 5).",
    status: "pass",
    actionNotes: "Food Safety Team Leader appointment charter signed"
  },
  {
    id: "iso-cert-3",
    category: "Stage 3: Prerequisite Programmes (PRPs)",
    task: "Implement and document sector-specific PRPs (ISO/TS 22002-1) covering facility layout, utilities, waste disposal, equipment suitability, pest management, and personnel hygiene.",
    status: "pass",
    actionNotes: "ISO/TS 22002-1 gap audit completed"
  },
  {
    id: "iso-cert-4",
    category: "Stage 4: Hazard Analysis & CCPs/OPRPs",
    task: "Conduct comprehensive hazard identification; determine acceptable levels; categorise control measures into Operational PRPs (OPRPs) or Critical Control Points (CCPs) via logical decision matrix.",
    status: "pass",
    actionNotes: "Hazard assessment matrix signed off by HACCP team"
  },
  {
    id: "iso-cert-5",
    category: "Stage 5: Validation of Control Measures",
    task: "Validate CCP critical limits and OPRP action criteria prior to implementation using experimental trials, thermal validation data, and statutory standards (Clause 8.5.3).",
    status: "pass",
    actionNotes: "Core temperature lethality curves validated"
  },
  {
    id: "iso-cert-6",
    category: "Stage 6: Monitoring & Corrective Action",
    task: "Establish continuous monitoring systems, calibrated digital probes, and predetermined corrective action protocols for CCP breaches and OPRP non-conformities.",
    status: "pass",
    actionNotes: "Digital data-logger alert thresholds configured"
  },
  {
    id: "iso-cert-7",
    category: "Stage 7: Full Internal Audit Cycle",
    task: "Execute formal internal audit programme covering all ISO 22000:2018 clauses (4 to 10) using independent trained auditors; log findings in corrective action tracker.",
    status: "pass",
    actionNotes: "Internal audit completed with 2 minor findings closed"
  },
  {
    id: "iso-cert-8",
    category: "Stage 8: Executive Management Review",
    task: "Convene executive management review meeting evaluating FSMS performance, customer feedback, audit results, resource adequacy, and continual improvement initiatives.",
    status: "pass",
    actionNotes: "Executive review minutes and resource budget recorded"
  },
  {
    id: "iso-cert-9",
    category: "Stage 9: Stage 1 Certification Audit",
    task: "Host accredited certification body auditor for Stage 1 document review; evaluate FSMS preparedness, regulatory permits, and PRP readiness.",
    status: "pass",
    actionNotes: "Stage 1 audit passed; approved for Stage 2 on-site"
  },
  {
    id: "iso-cert-10",
    category: "Stage 10: Stage 2 On-Site Certification",
    task: "Undergo on-site Stage 2 certification assessment: demonstrate operational adherence, staff competency, CCP controls, and traceability under live operating conditions.",
    status: "pending",
    actionNotes: "Stage 2 on-site audit scheduled for next month"
  }
];

const SQF_AUDIT_TASKS: CheckItem[] = [
  {
    id: "sqf-1",
    category: "Module 2.1: Management Commitment",
    task: "Food safety policy statement signed and displayed; designated SQF Practitioner appointed with full HACCP training; monthly executive food safety meetings minuted.",
    status: "pass",
    actionNotes: "SQF Practitioner certificate on file"
  },
  {
    id: "sqf-2",
    category: "Module 2.2: Document Control & Records",
    task: "Food safety manual maintained with revision controls; all critical monitoring logs, inspection records, and calibration certificates securely archived.",
    status: "pass",
    actionNotes: "Electronic register updated with version control"
  },
  {
    id: "sqf-3",
    category: "Module 2.4: Food Safety Plan (HACCP)",
    task: "Comprehensive HACCP plan formulated according to CODEX principles, validated with scientific data, and reviewed annually or upon recipe change.",
    status: "pass",
    actionNotes: "Annual HACCP reassessment documented"
  },
  {
    id: "sqf-4",
    category: "Module 2.6: Traceability & Recall",
    task: "Mock recall test conducted bi-annually demonstrating 100% mass-balance reconciliation of finished product, ingredients, and rework within 4 hours.",
    status: "pass",
    actionNotes: "Traceability exercise achieved 100% in 2h 45m"
  },
  {
    id: "sqf-5",
    category: "Module 2.8: Allergen Management",
    task: "Allergen management plan active; incoming allergens identified and quarantined; dedicated colour-coded handling tools used; cleaning verified with ATP and allergen swabs.",
    status: "pass",
    actionNotes: "Protein swab tests verified clean prior to start-up"
  },
  {
    id: "sqf-6",
    category: "Module 11.2: Construction of Premises",
    task: "Floors, walls, doors, and ceilings constructed of impervious, non-toxic materials; drainage sloped toward grease traps; overhead lighting protected with shatterproof diffusers.",
    status: "pass",
    actionNotes: "Facility fabric audit completed"
  },
  {
    id: "sqf-7",
    category: "Module 11.3: Personnel Hygiene & Welfare",
    task: "Staff follow protective clothing policy; handwash basins equipped with warm water (35°C to 40°C), antibacterial soap, and disposable paper towels; sickness reporting enforced.",
    status: "pass",
    actionNotes: "Hand hygiene training audited on floor"
  },
  {
    id: "sqf-8",
    category: "Module 11.7: Foreign Matter Detection",
    task: "Inline metal detectors and optical sorters tested and challenged at start of shift, end of shift, and hourly with certified test pieces; reject mechanisms functional.",
    status: "pass",
    actionNotes: "Hourly metal detector test logs verified"
  }
];

const ISO_22000_INTERNAL_AUDIT_TASKS: CheckItem[] = [
  {
    id: "iso-audit-1",
    category: "Clause 4: Context of the Organisation",
    task: "Determine external and internal issues affecting food safety outcomes; map stakeholder needs; define and document the boundaries and applicability of the FSMS.",
    status: "pass",
    actionNotes: "Context analysis matrix reviewed and updated"
  },
  {
    id: "iso-audit-2",
    category: "Clause 5: Leadership & Commitment",
    task: "Top management demonstrates active leadership; ensures food safety policy is communicated and understood; establishes organizational roles, responsibilities, and authorities.",
    status: "pass",
    actionNotes: "Leadership interviews confirmed policy awareness"
  },
  {
    id: "iso-audit-3",
    category: "Clause 6: Planning for the FSMS",
    task: "Risk and opportunity assessment completed; measurable food safety objectives established across relevant functions and verified against continuous improvement plans.",
    status: "pass",
    actionNotes: "FSMS quality objectives reviewed against KPIs"
  },
  {
    id: "iso-audit-4",
    category: "Clause 7: Support & Resources",
    task: "Adequate infrastructure, hygiene facilities, and monitoring equipment provided; staff competency verified through training records; documented information controlled.",
    status: "pass",
    actionNotes: "Staff food hygiene training records verified"
  },
  {
    id: "iso-audit-5",
    category: "Clause 8: Operation & Hazard Control",
    task: "PRPs operational; hazard analysis conducted; CCPs and OPRPs monitored continuously within validated critical limits; emergency preparedness protocols documented.",
    status: "pass",
    actionNotes: "CCP thermal kill logs confirmed fully compliant"
  },
  {
    id: "iso-audit-6",
    category: "Clause 8.9: Non-Conforming Products",
    task: "Clear procedures for quarantining non-conforming product lots; corrective action root cause investigations logged; disposition authorised by Food Safety Team Leader.",
    status: "pass",
    actionNotes: "Quarantine cage locked and disposal log verified"
  },
  {
    id: "iso-audit-7",
    category: "Clause 9: Performance Evaluation",
    task: "Internal audit schedule executed by competent, impartial auditors; monitoring and measurement data analysed; executive management review conducted at planned intervals.",
    status: "pass",
    actionNotes: "Clause 9.2 internal audit plan executed on schedule"
  },
  {
    id: "iso-audit-8",
    category: "Clause 10: Continual Improvement",
    task: "Non-conformities and audit findings addressed with preventive and corrective actions; FSMS systematically updated to reflect new operational changes and scientific standards.",
    status: "pass",
    actionNotes: "Corrective action log verified with 100% closure"
  }
];


const FSSC_AUDIT_TASKS: CheckItem[] = [
  {
    id: "fssc-1",
    category: "ISO 22000 FSMS Core",
    task: "Food Safety Policy signed by senior leadership, Food Safety Team Leader appointed, and HACCP plan validated against statutory lethality standards (e.g. 75°C core for 30s or 70°C for 2 min).",
    status: "pass",
    actionNotes: "FSMS governance documents approved"
  },
  {
    id: "fssc-2",
    category: "Sector PRPs (ISO/TS 22002-1)",
    task: "Hygienic zoning maintained with physical barrier separation between raw materials and ready-to-eat packaging areas; positive air pressure verified in high-care zones.",
    status: "pass",
    actionNotes: "Zoning and air filtration logs verified"
  },
  {
    id: "fssc-3",
    category: "FSSC Req 2.5.1: Food Safety Culture",
    task: "Documented executive food safety culture plan active with measurable behavioural KPIs, employee food safety suggestions logged, and confidential whistleblowing hotline displayed.",
    status: "pass",
    actionNotes: "Annual staff culture survey completed"
  },
  {
    id: "fssc-4",
    category: "FSSC Req 2.5.3: Food Fraud Mitigation",
    task: "Documented food fraud vulnerability assessment (VACCP) covering all raw material supply chains, economic adulteration threats identified, and mitigation controls operational.",
    status: "pass",
    actionNotes: "High-risk raw ingredients audited against fraud index"
  },
  {
    id: "fssc-5",
    category: "FSSC Req 2.5.4: Food Defense (TACCP)",
    task: "Threat assessment (TACCP) conducted; facility perimeter security doors locked with key-card access; bulk raw material delivery and storage silos sealed and logged.",
    status: "pass",
    actionNotes: "Silo intake locks and CCTV feeds verified"
  },
  {
    id: "fssc-6",
    category: "FSSC Req 2.5.15: Equipment Management",
    task: "Hygienic design specifications verified for all newly commissioned machinery; sanitary welds inspected; cleanability and chemical compatibility documented.",
    status: "pass",
    actionNotes: "Equipment design sign-offs on file"
  }
];

const NATASHAS_LAW_TASKS: CheckItem[] = [
  {
    id: "nat-1",
    category: "PPDS Food Classification",
    task: "Identify and register all Prepacked for Direct Sale (PPDS) foods packed on-site prior to customer order (e.g. packaged sandwiches, baguettes, boxed salads, takeaway pies).",
    status: "pass",
    actionNotes: "PPDS menu inventory catalogued"
  },
  {
    id: "nat-2",
    category: "Exact Legal Name",
    task: "The precise descriptive name of the food clearly displayed on the front of packaging (e.g. 'Roast Chicken Salad with Mustard Mayonnaise Sandwich').",
    status: "pass",
    actionNotes: "Product title matches recipe specification"
  },
  {
    id: "nat-3",
    category: "Complete Ingredients List",
    task: "Full ingredients listed in descending order by incoming weight at mixing bowl stage, including sub-ingredients of compound foods (e.g. bread flour components, sauces).",
    status: "pass",
    actionNotes: "Ingredient weight breakdowns verified"
  },
  {
    id: "nat-4",
    category: "14 Allergen Emphasising",
    task: "All 14 statutory allergens emphasised in BOLD, CAPITAL LETTERS, or high-contrast styling each time they appear within the ingredient list (e.g. Wheat flour, Mustard, Egg).",
    status: "pass",
    actionNotes: "Allergen typographical emphasis audited"
  },
  {
    id: "nat-5",
    category: "Typography & Font Size",
    task: "Label typography meets UK Food Information Regulations 2014 minimum x-height of 1.2 mm (or 0.9 mm if packaging printable surface is under 80 cm²).",
    status: "pass",
    actionNotes: "Print x-height verified with scale gauge"
  },
  {
    id: "nat-6",
    category: "Supplier Recipe Change Controls",
    task: "Formal sign-off procedure requiring kitchen management review whenever ingredient suppliers or recipes alter allergen profiles before printing new labels.",
    status: "pass",
    actionNotes: "Supplier change notification protocol active"
  }
];

const NON_GMO_TASKS: CheckItem[] = [
  {
    id: "gmo-1",
    category: "High-Risk Crop Register",
    task: "Maintain comprehensive register of all high-risk agricultural inputs (soy, maize, canola, sugar beet, cotton derivatives) with valid non-GMO Identity Preserved (IP) certificates.",
    status: "pass",
    actionNotes: "Supplier non-GMO declarations verified"
  },
  {
    id: "gmo-2",
    category: "PCR Testing Verification",
    task: "Certificates of Analysis (COA) reviewed for every bulk lot verifying GMO genetic material remains below statutory thresholds (0.9% for food under UK/EU retained regulations).",
    status: "pass",
    actionNotes: "Lab PCR test reports confirmed negative"
  },
  {
    id: "gmo-3",
    category: "Physical Segregation",
    task: "Storage bins, transport hoppers, and production lines physically segregated and labelled 'Non-GMO / GMO-Free Only' to prevent crossover with conventional commodities.",
    status: "pass",
    actionNotes: "Dedicated non-GMO bulk bins inspected"
  },
  {
    id: "gmo-4",
    category: "Flush-Out & Cleanout Protocols",
    task: "Documented wet-cleaning purge and vacuum cleanout protocols executed and inspected between conventional and non-GMO production runs.",
    status: "pass",
    actionNotes: "Line clearance flush documented"
  },
  {
    id: "gmo-5",
    category: "Packaging Claims Substantiation",
    task: "Finished product labelling audited against Non-GMO Project standard and UK Trading Standards regulations with verifiable audit trail from farm gate to packed unit.",
    status: "pass",
    actionNotes: "Claim substantiation file complete"
  }
];

const AMAZON_FOOD_SELLER_TASKS: CheckItem[] = [
  {
    id: "amz-1",
    category: "Account & Ungating Approvals",
    task: "Commercial invoices from verified manufacturer/distributor on file, UK local authority food business registration active, and minimum 4-star food hygiene rating documented.",
    status: "pass",
    actionNotes: "Amazon Grocery category approval granted"
  },
  {
    id: "amz-2",
    category: "Shelf-Life & Expiration Window",
    task: "Perishable food inventory delivered to Amazon FBA fulfilment centres has at least 50+ days shelf-life remaining (90+ days recommended for rapid inventory turnover).",
    status: "pass",
    actionNotes: "Inbound inventory shelf-life exceeds 120 days"
  },
  {
    id: "amz-3",
    category: "Expiry Date Print Standards",
    task: "Expiration dates printed in DD-MM-YYYY or MM-YYYY format in minimum 36-point bold font on master shipping cartons and individual retail units.",
    status: "pass",
    actionNotes: "Outer carton expiry date labels verified"
  },
  {
    id: "amz-4",
    category: "Meltable & Heat-Sensitive Goods",
    task: "Heat-sensitive products and chocolate confectionery restricted to October 16 - April 30 shipping window unless temperature-controlled FBA logistics utilized.",
    status: "pass",
    actionNotes: "Seasonal meltable inventory calendar flagged"
  },
  {
    id: "amz-5",
    category: "Packaging Integrity & Polybagging",
    task: "Liquid containers double-sealed or shrink-wrapped; powders hermetically sealed; poly bags with opening 5 inches or wider carry printed suffocation warning.",
    status: "pass",
    actionNotes: "Polybag suffocation warnings verified"
  },
  {
    id: "amz-6",
    category: "UK Food Labelling Compliance",
    task: "Packaging displays full English ingredients list, 14 statutory allergens highlighted in bold, net quantity, and UK manufacturer or importer business address.",
    status: "pass",
    actionNotes: "FIR 2014 compliant retail packaging approved"
  }
];

const RESTAURANT_FIRE_TASKS: CheckItem[] = [
  {
    id: "fire-1",
    category: "Automatic Suppression (Ansul)",
    task: "Commercial kitchen hood fire suppression system (Ansul / R-102 wet chemical) inspected, serviced, and tagged by certified technician within the last 6 months.",
    status: "pass",
    actionNotes: "Semi-annual Ansul service certificate valid"
  },
  {
    id: "fire-2",
    category: "Extraction Hood & Duct TR19 Degreasing",
    task: "Commercial extraction hoods, grease baffle filters, and kitchen ducts professionally degreased and certified to BESA TR19 fire safety standards.",
    status: "pass",
    actionNotes: "TR19 duct cleaning certificate displayed"
  },
  {
    id: "fire-3",
    category: "Class F & CO2 Extinguishers",
    task: "Class F wet chemical extinguisher stationed within 5 metres of deep fat fryers; CO2 extinguisher mounted near electrical cookline switchgear; annual service tags intact.",
    status: "pass",
    actionNotes: "All extinguishers inspected and pressure verified"
  },
  {
    id: "fire-4",
    category: "Fire Blanket Positioning",
    task: "Fire blanket conforming to BS EN 1869 mounted on kitchen wall away from cookline in an unobstructed, clearly signposted location.",
    status: "pass",
    actionNotes: "Kitchen fire blanket quick-release verified"
  },
  {
    id: "fire-5",
    category: "Emergency Exits & Lighting",
    task: "All emergency exit doors unlocked, push-bars functional, escape routes free from storage clutter, and illuminated exit signage operational on backup battery.",
    status: "pass",
    actionNotes: "Emergency exit walkthrough clear"
  },
  {
    id: "fire-6",
    category: "Gas Interlock & Emergency Shut-Off",
    task: "Gas interlock system cuts gas supply when ventilation fails; emergency manual gas shut-off valve clearly labelled, accessible, and tested weekly.",
    status: "pass",
    actionNotes: "Gas interlock fail-safe test passed"
  }
];


const RESTAURANT_MAINTENANCE_TASKS: CheckItem[] = [
  {
    id: "maint-1",
    category: "Daily HVAC & Refrigeration",
    task: "Walk-in chiller and freezer coils inspected, evaporator fans spinning freely, and door magnetic gaskets clean and airtight with zero frost build-up.",
    status: "pass",
    actionNotes: "Refrigeration seals and airflow verified"
  },
  {
    id: "maint-2",
    category: "Weekly Cookline Deep Clean",
    task: "Deep fat fryers boiled out, thermostatic controls calibrated, flat-top griddles scraped and seasoned, and range burner ports degreased.",
    status: "pass",
    actionNotes: "Fryer boil-out and griddle calibration complete"
  },
  {
    id: "maint-3",
    category: "Monthly Water Filtration",
    task: "Water softening and filtration cartridges replaced or inspected on ice machines, combi steamers, and espresso machines to prevent limescale scale.",
    status: "pass",
    actionNotes: "Combi oven water filter cartridge swapped"
  },
  {
    id: "maint-4",
    category: "Quarterly Extraction Degreasing",
    task: "Kitchen extraction canopies, grease baffle filters, and vertical duct risers degreased and certified to BESA TR19 fire safety standards.",
    status: "pass",
    actionNotes: "TR19 duct degreasing certificate on file"
  },
  {
    id: "maint-5",
    category: "Semi-Annual Suppression Inspection",
    task: "Ansul / R-102 wet chemical fire suppression discharge nozzles inspected, pull-stations tested, and emergency gas shut-off valve verified.",
    status: "pass",
    actionNotes: "6-month Ansul service tag signed"
  },
  {
    id: "maint-6",
    category: "Annual Statutory Certification",
    task: "Commercial Gas Safe safety inspection, Portable Appliance Testing (PAT), and fixed electrical wiring inspection (EICR) completed.",
    status: "pass",
    actionNotes: "Gas Safe and PAT certificates updated"
  }
];

const RESTAURANT_INVENTORY_TASKS: CheckItem[] = [
  {
    id: "inv-1",
    category: "Walk-In Chiller Protein Pars",
    task: "Count high-value chilled proteins (prime steaks, poultry, fish fillets) against minimum par levels; confirm storage below 5.0°C.",
    status: "pass",
    actionNotes: "Chilled proteins audited against par counts"
  },
  {
    id: "inv-2",
    category: "Deep Freezer Stock Audit",
    task: "Audit frozen seafood, frozen bakery, and batch-prepped sauces; confirm FIFO stock rotation and continuous storage below -18.0°C.",
    status: "pass",
    actionNotes: "Freezer inventory rotated with FIFO facing"
  },
  {
    id: "inv-3",
    category: "Dry Storage Par Levels",
    task: "Reconcile dry pantry goods (flour, oils, grains, spices, canned goods) and flag items approaching minimum replenishment thresholds.",
    status: "pass",
    actionNotes: "Dry store replenishment re-order logged"
  },
  {
    id: "inv-4",
    category: "Bar & Cellar Inventory",
    task: "Audit draught beer kegs, premium spirits, liqueurs, and wine cellar cases against POS sales depletion reports to detect inventory shrinkage.",
    status: "pass",
    actionNotes: "Keg weights and spirit dip-levels reconciled"
  },
  {
    id: "inv-5",
    category: "Chemicals & Hygiene Supplies",
    task: "Count warewashing chemicals, food-grade surface sanitisers (BS EN 1276), blue roll, and disposable food handler gloves.",
    status: "pass",
    actionNotes: "Sanitiser stock verified adequate for 2 weeks"
  },
  {
    id: "inv-6",
    category: "Waste & Spoilage Reconciliation",
    task: "Record kitchen prep trim loss, expired items, and customer return waste on the daily waste sheet before finalizing stock valuation.",
    status: "pass",
    actionNotes: "Daily kitchen waste log reconciled with chef"
  }
];

const RESTAURANT_SCHEDULE_TASKS: CheckItem[] = [
  {
    id: "sched-1",
    category: "Sales & Covers Forecasting",
    task: "Forecast weekly covers and revenue per service shift to set targeted labour cost percentages (target 28% to 32% of projected turnover).",
    status: "pass",
    actionNotes: "Labour budget model aligned with sales forecast"
  },
  {
    id: "sched-2",
    category: "BOH Kitchen Rota Coverage",
    task: "Schedule Head Chef, sous chefs, line cooks, kitchen porters, and prep leads ensuring full line coverage across lunch and dinner services.",
    status: "pass",
    actionNotes: "Cookline station coverage verified"
  },
  {
    id: "sched-3",
    category: "FOH Hospitality Rota Coverage",
    task: "Assign hosts, servers, runners, bartenders, and floor managers matched to expected table turnover and reservation density.",
    status: "pass",
    actionNotes: "Peak Saturday shift fully staffed with backup runner"
  },
  {
    id: "sched-4",
    category: "Working Time Regulations 1998",
    task: "Audit scheduled shifts ensuring compliance with UK Working Time Regulations: maximum 48-hour week and mandatory 11-hour rest between shifts.",
    status: "pass",
    actionNotes: "11-hour rest intervals between closing and opening verified"
  },
  {
    id: "sched-5",
    category: "Shift Trades & Leave Requests",
    task: "Review and approve employee holiday requests, sick cover replacements, and shift trade authorizations before final schedule lock.",
    status: "pass",
    actionNotes: "All leave requests reconciled on rota"
  },
  {
    id: "sched-6",
    category: "Rota Publication & Dispatch",
    task: "Publish finalized weekly schedule at least 7 to 14 days in advance to employee mobile app and display printed copy on kitchen staff noticeboard.",
    status: "pass",
    actionNotes: "Weekly rota published to team portal"
  }
];

const KITCHEN_PREP_LIST_TASKS: CheckItem[] = [
  {
    id: "prep-1",
    category: "Morning Cover Par Planning",
    task: "Review daily reservations, VIP covers, and catering orders to calculate required batch prep pars across all kitchen stations.",
    status: "pass",
    actionNotes: "Prep pars calculated for 160 covers"
  },
  {
    id: "prep-2",
    category: "Hot Cookline Prep Pars",
    task: "Simmer stocks, portion prime steaks, truss poultry, batch reduction sauces, and blanch cookline vegetables needed for saute and grill lines.",
    status: "pass",
    actionNotes: "Sauces and stock reductions completed"
  },
  {
    id: "prep-3",
    category: "Cold Larder & Garde Manger",
    task: "Wash, dry, and spin salad greens, slice charcuterie, dress terrines, and portion chilled starters into stainless GN containers.",
    status: "pass",
    actionNotes: "Larder station mise-en-place fully stocked"
  },
  {
    id: "prep-4",
    category: "Pastry & Dessert Station",
    task: "Bake fresh service breads, portion cheesecakes and tarts, whip pastry creams, and refresh dessert garnish wells.",
    status: "pass",
    actionNotes: "Service bread rolls and desserts prepped"
  },
  {
    id: "prep-5",
    category: "90-Minute Cooling Window",
    task: "Ensure all hot cooked prep batches are cooled from 60°C to below 8°C (ideally below 5°C) within 90 minutes before walk-in chiller storage.",
    status: "pass",
    actionNotes: "Blast chiller cooling logs verified within 70 minutes"
  },
  {
    id: "prep-6",
    category: "Day-Dot & Natasha's Law Labelling",
    task: "Affix day-dot label with prep date, use-by date, preparer initials, and 14 bold statutory allergen declarations on every container.",
    status: "pass",
    actionNotes: "All containers labelled with batch dates and allergens"
  }
];

const COOKING_LOG_TASKS: CheckItem[] = [
  {
    id: "cook-1",
    category: "Probe Thermometer Calibration",
    task: "Calibrate digital probe thermometer using boiling water (99°C to 101°C) or crushed melting ice (-1°C to +1°C) prior to start of cooking service.",
    status: "pass",
    actionNotes: "Ice point checked at 0.2°C; probe sanitised"
  },
  {
    id: "cook-2",
    category: "Poultry Core Temperature Check",
    task: "Insert probe into the thickest part of chicken, turkey, or duck; confirm core temperature reaches minimum 75°C for 30 seconds (or 70°C for 2 min).",
    status: "pass",
    actionNotes: "Roast chicken breast reached 77.4°C for 45s"
  },
  {
    id: "cook-3",
    category: "Minced Meat & Burger Lethality",
    task: "Verify core temperature of beef patties, sausages, and minced meat dishes reaches 75°C for 30 seconds to ensure destruction of pathogenic E. coli.",
    status: "pass",
    actionNotes: "Burger patty core confirmed 76.1°C"
  },
  {
    id: "cook-4",
    category: "Pork, Game & Stew Casseroles",
    task: "Confirm core temperature of pork joints, braised game meats, and casseroles exceeds 75°C for 30 seconds before serving or hot-holding.",
    status: "pass",
    actionNotes: "Braised pork shoulder core reached 78.5°C"
  },
  {
    id: "cook-5",
    category: "Scottish Reheating Critical Limit",
    task: "For reheated dishes (soups, stews, curries), ensure core temperature reaches a minimum of 82°C (Food Hygiene Scotland Regulations 2006).",
    status: "pass",
    actionNotes: "Reheated soup core reached 84.0°C"
  },
  {
    id: "cook-6",
    category: "Corrective Action & Probe Hygiene",
    task: "If core temperature is under critical limit, return dish to heat immediately and re-test; sanitise probe with food-safe wipe between food items.",
    status: "pass",
    actionNotes: "Probe sanitising wipes verified BS EN 1276"
  }
];


const CALIBRATION_LOG_TASKS: CheckItem[] = [
  {
    id: "cal-1",
    category: "Probe Visual & Battery Inspection",
    task: "Inspect probe needle for bends, fractures, or loose cable connections; verify battery voltage and clean digital readout with zero error codes.",
    status: "pass",
    actionNotes: "Probe casing intact and display clear"
  },
  {
    id: "cal-2",
    category: "Ice-Point Calibration (0.0°C)",
    task: "Immerse probe 5 cm into crushed melting ice and water slurry; stir gently and verify reading stabilizes between -1.0°C and +1.0°C (target 0.0°C).",
    status: "pass",
    actionNotes: "Ice slurry reading stabilized at 0.1°C"
  },
  {
    id: "cal-3",
    category: "Boiling-Point Calibration (100.0°C)",
    task: "Immerse probe tip into rolling boiling water without touching pan bottom; verify reading stabilizes between 99.0°C and 101.0°C (target 100.0°C).",
    status: "pass",
    actionNotes: "Boiling point reading stabilized at 99.8°C"
  },
  {
    id: "cal-4",
    category: "Infrared Gun Accuracy Check",
    task: "Compare non-contact infrared surface thermometer against calibrated probe on matte surface; verify difference remains within ±1.0°C.",
    status: "pass",
    actionNotes: "Infrared gun verified within 0.5°C of probe"
  },
  {
    id: "cal-5",
    category: "Corrective Action & Tolerance",
    task: "If probe variance exceeds ±1.0°C (or ±0.5°C under high-care HACCP), recalibrate using manufacturer screw or remove from service and replace.",
    status: "pass",
    actionNotes: "All active kitchen probes within ±0.3°C tolerance"
  },
  {
    id: "cal-6",
    category: "Probe Sanitisation & Sign-Off",
    task: "Disinfect probe needle with food-safe wipe conforming to BS EN 1276 and record results on monthly master calibration certificate.",
    status: "pass",
    actionNotes: "Probe sanitised and monthly calibration signed"
  }
];

const PIZZA_HOT_HOLDING_TASKS: CheckItem[] = [
  {
    id: "pizza-1",
    category: "Hot Holding Cabinet Preheating",
    task: "Power on heated display cabinet or pass-through heat lamps at least 30 minutes before loading pizza; verify display air cavity reads above 65°C.",
    status: "pass",
    actionNotes: "Cabinet cavity preheated to 68.5°C"
  },
  {
    id: "pizza-2",
    category: "Core Temperature Check (≥63.0°C)",
    task: "Insert sanitised probe into thickest part of pizza slice; verify core temperature is maintained at or above 63.0°C continuously.",
    status: "pass",
    actionNotes: "Pepperoni pizza slice core verified at 65.2°C"
  },
  {
    id: "pizza-3",
    category: "2-Hour Exemption Time Control",
    task: "If pizza is displayed at ambient counter temperature below 63°C, record start time; sell, rapidly chill below 8°C, or discard within 2 hours.",
    status: "pass",
    actionNotes: "Ambient display timer logged (max 2 hours)"
  },
  {
    id: "pizza-4",
    category: "Crust Texture & Moisture Control",
    task: "Adjust cabinet humidity louvres to preserve bottom crust crispness while preventing cheese and toppings from drying out during holding.",
    status: "pass",
    actionNotes: "Cabinet humidity adjusted for optimal crispness"
  },
  {
    id: "pizza-5",
    category: "Allergen Segregation in Display",
    task: "Physically segregate gluten-free or vegan pizza slices on dedicated upper tier with designated colour-coded serving tongs.",
    status: "pass",
    actionNotes: "Gluten-free slices protected with acrylic divider"
  },
  {
    id: "pizza-6",
    category: "End-of-Holding Disposition",
    task: "Discard any leftover pizza slices held beyond maximum permitted holding window; never return hot-held slices to chillers for next-day resale.",
    status: "pass",
    actionNotes: "Unsold held slices discarded and logged"
  }
];

const APPROVED_SUPPLIER_TASKS: CheckItem[] = [
  {
    id: "supp-1",
    category: "Food Business Registration",
    task: "Confirm supplier holds active Local Authority food business registration and required approval codes (e.g. EC plant numbers for meat/fish/dairy).",
    status: "pass",
    actionNotes: "Council registration and EC approval codes verified"
  },
  {
    id: "supp-2",
    category: "Hygiene Rating & Certifications",
    task: "Collect and verify third-party certification certificates (BRCGS, SALSA, Red Tractor) or confirm minimum 4/5-star Food Hygiene Rating.",
    status: "pass",
    actionNotes: "SALSA certification and 5-star FHRS on file"
  },
  {
    id: "supp-3",
    category: "Allergen Disclosures (Natasha's Law)",
    task: "Ensure supplier submits signed product specifications disclosing all 14 statutory allergens and cross-contact preventative procedures.",
    status: "pass",
    actionNotes: "Annual allergen matrices signed by vendor"
  },
  {
    id: "supp-4",
    category: "Contracted Cold-Chain Specs",
    task: "Enforce contract delivery temperatures: chilled food <= 5.0°C (legal max 8.0°C), fresh raw meat <= 3.0°C, and frozen food <= -18.0°C.",
    status: "pass",
    actionNotes: "Temperature SLA signed by delivery contractor"
  },
  {
    id: "supp-5",
    category: "Recall & Emergency Notification",
    task: "Establish 24-hour emergency recall contact details and written notification protocols in the event of upstream contamination or product recall.",
    status: "pass",
    actionNotes: "Emergency 24/7 contacts tested and updated"
  },
  {
    id: "supp-6",
    category: "Annual Vendor Review",
    task: "Evaluate vendor performance: delivery punctuality, temperature rejections, packaging integrity, and invoice price variance.",
    status: "pass",
    actionNotes: "Annual vendor evaluation scorecard completed"
  }
];

const INGREDIENT_TRACEABILITY_TASKS: CheckItem[] = [
  {
    id: "trace-1",
    category: "Goods Intake Batch Logging",
    task: "Record manufacturer batch numbers, delivery date, supplier name, and internal receiving tag for all incoming food commodities.",
    status: "pass",
    actionNotes: "Goods intake lot codes logged in inventory system"
  },
  {
    id: "trace-2",
    category: "Dry Storage Bin Lot Labeling",
    task: "Transfer bulk ingredients (flour, rice, grains, pulses) into clear containers labelled with original batch lot number and intake date.",
    status: "pass",
    actionNotes: "All decanted bulk containers labelled with batch IDs"
  },
  {
    id: "trace-3",
    category: "Prep Batch Sheet Reconciliation",
    task: "Record raw ingredient lot numbers on daily kitchen prep sheets for batch-cooked stocks, sauces, marinades, and braises.",
    status: "pass",
    actionNotes: "Sauce prep batch cross-referenced to meat lot #492"
  },
  {
    id: "trace-4",
    category: "Finished Service Batch Mapping",
    task: "Map cooked batch codes to date of service and customer table or takeaway dispatch orders under EC 178/2002 Article 18.",
    status: "pass",
    actionNotes: "Daily sales orders mapped to batch kitchen ledger"
  },
  {
    id: "trace-5",
    category: "Mock Recall Mass-Balance Test",
    task: "Execute annual 4-hour mock recall exercise reconciling 100% of selected raw material input through prep to customer distribution.",
    status: "pass",
    actionNotes: "Mock recall achieved 99.7% reconciliation in 3h 10m"
  },
  {
    id: "trace-6",
    category: "Traceability Record Retention",
    task: "Archive all supplier delivery notes, batch cooking logs, and customer distribution records for at least 12 months for EHO audit inspection.",
    status: "pass",
    actionNotes: "Past 12 months of batch records archived"
  }
];


const FOOD_PRODUCTION_TASKS: CheckItem[] = [
  {
    id: "prod-1",
    category: "Recipe Scaling & Yield Target",
    task: "Review daily service covers, calculate recipe ingredient multipliers, and establish target portion yields across all production batches.",
    status: "pass",
    actionNotes: "Batch recipe scaling verified for 200 portions"
  },
  {
    id: "prod-2",
    category: "Raw Material Lot Verification",
    task: "Verify manufacturer lot codes, use-by dates, and 14 statutory allergen profiles before assembling raw ingredients into mixing bowls.",
    status: "pass",
    actionNotes: "All raw material lot codes logged"
  },
  {
    id: "prod-3",
    category: "Cooking Lethality Verification",
    task: "Insert calibrated probe into core of cooking batches; verify core temperature reaches minimum 75°C for 30s or 70°C for 2 min.",
    status: "pass",
    actionNotes: "Core lethality confirmed at 76.5°C"
  },
  {
    id: "prod-4",
    category: "Rapid 90-Minute Cooling",
    task: "Transfer hot cooked batches to blast chillers or ice water baths; cool from 60°C to below 8°C (ideally <5°C) within 90 minutes.",
    status: "pass",
    actionNotes: "Cooling cycle verified at 68 minutes"
  },
  {
    id: "prod-5",
    category: "Day-Dot & Allergen Labelling",
    task: "Affix food rotation day-dot label with production date, use-by date, batch number, chef initials, and bold allergen declarations.",
    status: "pass",
    actionNotes: "Storage containers labelled and sealed"
  },
  {
    id: "prod-6",
    category: "Yield & Waste Reconciliation",
    task: "Weigh finished batch yield against expected portion counts; record kitchen prep trimmings and waste deductions on daily ledger.",
    status: "pass",
    actionNotes: "Yield efficiency 98.4%; trim waste logged"
  }
];

const DISPATCH_LOG_TASKS: CheckItem[] = [
  {
    id: "disp-1",
    category: "Vehicle Hygiene & Pre-Trip Check",
    task: "Inspect delivery vehicle cargo bay; ensure interior surfaces are clean, sanitised, odour-free, and sealed against pest ingress.",
    status: "pass",
    actionNotes: "Refrigerated van cargo bay clean and sanitised"
  },
  {
    id: "disp-2",
    category: "Chilled Food Dispatch (<=5.0°C)",
    task: "Probe core or between-pack temperatures of chilled catering dishes; confirm reading is at or below 5.0°C (legal max 8.0°C) before loading.",
    status: "pass",
    actionNotes: "Chilled trays loaded at 3.4°C"
  },
  {
    id: "disp-3",
    category: "Hot Food Dispatch (>=63.0°C)",
    task: "Verify insulated transport Cambros and thermal boxes maintain cooked hot meals at or above 63.0°C at point of vehicle dispatch.",
    status: "pass",
    actionNotes: "Hot holding boxes loaded at 67.8°C"
  },
  {
    id: "disp-4",
    category: "Frozen Goods State (<=-18.0°C)",
    task: "Confirm frozen inventory remains frozen rock-solid with zero signs of surface thawing, ice crystals, or softening edges.",
    status: "pass",
    actionNotes: "Frozen stock verified at -19.2°C"
  },
  {
    id: "disp-5",
    category: "Tamper Seals & Security Slips",
    task: "Affix numbered tamper-evident security tags to transport containers; verify delivery manifest matches customer order paperwork.",
    status: "pass",
    actionNotes: "Tamper seals #8841-8846 recorded on manifest"
  },
  {
    id: "disp-6",
    category: "Transit Times & Consignee Sign-Off",
    task: "Record departure time, route transit duration, driver signature, and client temperature acceptance signature upon drop-off.",
    status: "pass",
    actionNotes: "Client receipt signed with delivery temp 64.5°C"
  }
];

const CORRECTIVE_ACTION_TASKS: CheckItem[] = [
  {
    id: "capa-1",
    category: "Incident & Defect Logging",
    task: "Document specific food safety non-conformance (e.g. refrigeration failure >8°C, undercooked poultry <75°C, packaging breach, pest sighting).",
    status: "pass",
    actionNotes: "Walk-in chiller #2 temperature excursion logged"
  },
  {
    id: "capa-2",
    category: "Immediate Containment Action",
    task: "Quarantine affected food lots immediately; lock quarantine area and affix red 'DO NOT USE / UNDER INVESTIGATION' hazard tags.",
    status: "pass",
    actionNotes: "4 cases of chicken thighs locked in quarantine"
  },
  {
    id: "capa-3",
    category: "Root Cause Analysis (5 Whys)",
    task: "Convene HACCP team to execute 5 Whys analysis: determine whether breach was mechanical failure, human error, or procedural defect.",
    status: "pass",
    actionNotes: "Root cause: evaporator fan motor relay burnt out"
  },
  {
    id: "capa-4",
    category: "Corrective & Preventive Action",
    task: "Execute repair, service equipment, revise SOPs, and deliver refresher hygiene training to prevent incident recurrence.",
    status: "pass",
    actionNotes: "Fan motor replaced by engineer; backup alarm fitted"
  },
  {
    id: "capa-5",
    category: "Product Disposition Decision",
    task: "Authorise safe product disposition: re-cook to verified 75°C lethality, safely condemn and destroy, or return defective goods to vendor.",
    status: "pass",
    actionNotes: "Product exceeded 8°C for >4h; safely condemned and denatured"
  },
  {
    id: "capa-6",
    category: "Effectiveness Verification & Closure",
    task: "Food Safety Team Leader reviews operational temperature logs after 14 days to verify permanent resolution before signing CAPA closure.",
    status: "pass",
    actionNotes: "14-day post-repair audit normal; CAPA closed"
  }
];


const FOOD_SANITATION_TASKS: CheckItem[] = [
  {
    id: "san-1",
    category: "Two-Stage Cleaning Protocol",
    task: "Stage 1: Clean food-contact surfaces with warm water and detergent to lift grease and food debris; Stage 2: Spray BS EN 1276 chemical disinfectant.",
    status: "pass",
    actionNotes: "Prep benches cleaned and disinfected via two-stage process"
  },
  {
    id: "san-2",
    category: "Chemical Contact Time (30-60s)",
    task: "Allow surface sanitiser to remain visibly wet on surfaces for the full statutory manufacturer contact time before wiping with disposable blue roll.",
    status: "pass",
    actionNotes: "60-second contact time timed and verified"
  },
  {
    id: "san-3",
    category: "BS EN 1276 / 13697 Standards",
    task: "Confirm all commercial kitchen sanitisers and bactericidal disinfectants are certified to BS EN 1276 or BS EN 13697 standards.",
    status: "pass",
    actionNotes: "Chemical technical data sheets verified compliant"
  },
  {
    id: "san-4",
    category: "Colour-Coded Cleaning Equipment",
    task: "Enforce four-colour equipment segregation: Red (washrooms), Blue (bar/dining), Yellow (kitchen prep surfaces), Green (produce prep).",
    status: "pass",
    actionNotes: "Colour-coded cloths and mop buckets audited"
  },
  {
    id: "san-5",
    category: "Master Cleaning Schedule Sign-Off",
    task: "Complete and initial daily, weekly, and monthly deep clean items on the master cleaning schedule (hood baffles, floor drains, ice machines).",
    status: "pass",
    actionNotes: "Daily kitchen sanitation log signed by head chef"
  },
  {
    id: "san-6",
    category: "Sanitiser Chemical Dilution Testing",
    task: "Test chemical dispenser dilution with quat or chlorine test strips to ensure sanitiser concentration is within effective bactericidal range.",
    status: "pass",
    actionNotes: "Chemical test strip confirmed 200 ppm quat active"
  }
];

const DEFROSTING_SOP_TASKS: CheckItem[] = [
  {
    id: "defrost-1",
    category: "Chilled Thawing Control",
    task: "Transfer frozen products into dedicated refrigeration units maintained strictly at or below 5.0°C; never defrost at ambient room temperature.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "defrost-2",
    category: "Drip Containment & Raw Separation",
    task: "Place thawing raw meats in deep-lipped containers or perforated drip pans on the lowest refrigerator shelf to prevent liquid cross-contamination.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "defrost-3",
    category: "Thaw Date Labelling",
    task: "Apply day-dot or defrost labels recording the date and time thawing began, expected completion time, and designated use-by deadline (within 24 hours of complete thaw).",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "defrost-4",
    category: "Core Temperature & Softness Check",
    task: "Probe internal meat core with a sanitised thermometer to verify complete thawing (no lingering ice crystals) prior to cooking.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "defrost-5",
    category: "Immediate Cooking Protocol",
    task: "Cook defrosted foods thoroughly to FSA core temperature (>=75.0°C for 30s) within 24 hours; never refreeze thawed raw food items.",
    status: "pass",
    actionNotes: ""
  }
];

const THERMOMETER_SOP_TASKS: CheckItem[] = [
  {
    id: "therm-1",
    category: "Pre-Use Inspection",
    task: "Inspect digital thermometer casing, display, and battery level; verify casing integrity and clean probe tip.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-2",
    category: "BS EN 1276 Sanitisation",
    task: "Disinfect metal probe sensor stem using an approved BS EN 1276 single-use food-grade alcohol probe wipe before every temperature check.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-3",
    category: "Insertion Depth & Placement",
    task: "Insert probe needle into geometric centre/thickest portion of food item, avoiding direct contact with bones, gristle, skewers, or metal pans.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-4",
    category: "Reading Stabilisation",
    task: "Hold probe stationary for 5 to 10 seconds until the digital temperature reading holds steady without fluctuating.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-5",
    category: "Statutory Cooking Verification",
    task: "Verify food item meets UK FSA core lethality standard (>=75.0°C for 30 seconds or Scottish standard >=82.0°C).",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-6",
    category: "Post-Use Decontamination",
    task: "Immediately clean and disinfect probe stem with a fresh BS EN 1276 sanitising wipe before stowing probe in protective sheath.",
    status: "pass",
    actionNotes: ""
  },
  {
    id: "therm-7",
    category: "Monthly Dual Calibration",
    task: "Perform dual ice bath (0.0°C ±1°C) and boiling water (100.0°C ±1°C) accuracy verification; log in calibration register.",
    status: "pass",
    actionNotes: ""
  }
];

const BIG_6_PATHOGENS_TASKS: CheckItem[] = [
  {
    id: "path-1",
    category: "Norovirus Controls & Spill Kit",
    task: "Strictly exclude staff with vomiting or diarrhoea for 48 hours after symptoms cease; maintain dedicated emergency bodily fluid spill kit.",
    status: "pass",
    actionNotes: "48-hour exclusion rule enforced on staff register"
  },
  {
    id: "path-2",
    category: "Non-Typhoidal Salmonella Lethality",
    task: "Cook raw poultry, liquid eggs, and poultry dishes to a minimum core temperature of 75°C for 30s (or 70°C for 2m); store on lowest fridge shelf.",
    status: "pass",
    actionNotes: "Core temperature logs confirm 75°C lethality achieved"
  },
  {
    id: "path-3",
    category: "Salmonella Typhi & Paratyphi",
    task: "Require medical questionnaires for staff returning from typhoid-endemic travel; enforce absolute exclusion of confirmed carriers.",
    status: "pass",
    actionNotes: "Pre-employment health declarations verified"
  },
  {
    id: "path-4",
    category: "Shiga Toxin-Producing E. coli (STEC)",
    task: "Cook minced beef burgers and rolled meat joints thoroughly to 75°C core; enforce dedicated red boards and dual-pack vacuum packers.",
    status: "pass",
    actionNotes: "Raw red meat separation protocols verified"
  },
  {
    id: "path-5",
    category: "Shigella spp. Hygiene Barriers",
    task: "Sanitise customer and staff restroom flush levers, cubicle locks, and washbasins every 2 hours; provide non-touch sensor taps.",
    status: "pass",
    actionNotes: "Restroom sanitisation schedule initialled"
  },
  {
    id: "path-6",
    category: "Hepatitis A Jaundice Screening",
    task: "Immediately exclude any food handler displaying jaundice, fever, dark urine, or abdominal pain; notify local Environmental Health Officer.",
    status: "pass",
    actionNotes: "Daily staff wellness checks recorded on opening sheet"
  }
];

const DEFAULT_GENERAL_TASKS: CheckItem[] = [
  {
    id: "1",
    category: "Refrigeration & Cold Chain",
    task: "All commercial chillers operating under 5°C; probes sanitised before & after use.",
    status: "pass",
    actionNotes: "Calibrated probe reading verified"
  },
  {
    id: "2",
    category: "Cross-Contamination",
    task: "Raw meats stored strictly beneath ready-to-eat foods; distinct colour-coded chopping boards in place.",
    status: "pass",
    actionNotes: "Yellow poultry and Red meat boards separated"
  },
  {
    id: "3",
    category: "Personal Hygiene",
    task: "Handwashing basins stocked with warm water, antibacterial soap (BS EN 1499) and blue paper roll.",
    status: "pass",
    actionNotes: "Basin 2 refilled with soap"
  },
  {
    id: "4",
    category: "Natasha's Law & Labelling",
    task: "All pre-prepped items and PPDS foods labelled with preparation date, use-by date & 14 allergens.",
    status: "pass",
    actionNotes: "Day dots updated"
  },
  {
    id: "5",
    category: "Chemicals & Sanitation",
    task: "Surface sanitiser mixed to correct manufacturer dilution (BS EN 1276 compliance verified).",
    status: "pending",
    actionNotes: "New spray bottle required"
  },
  {
    id: "6",
    category: "Waste & Refuse",
    task: "External bins locked, waste bags intact, grease trap lid sealed and clean.",
    status: "pass",
    actionNotes: "Refuse area swept"
  }
];

export const DigitalChecklistTool: React.FC<{ templateTitle: string; templateId?: string }> = ({ templateTitle, templateId }) => {
  const [shift, setShift] = useState<"Opening" | "Midday" | "Closing">("Opening");
  const [inspectorName, setInspectorName] = useState("Shift Manager / Supervisor");
  const [logDate, setLogDate] = useState(() => new Date().toISOString().split("T")[0]);

  // Temperature Probe Records
  const [tempRecords, setTempRecords] = useState<TempEntry[]>([
    { id: "1", unit: "Walk-in Chiller 1", target: "<= 4°C", time: "08:15", temp: "2.8°C", signedBy: "JS", status: "pass" },
    { id: "2", unit: "Cook Line Prep Fridge", target: "<= 5°C", time: "08:20", temp: "3.9°C", signedBy: "JS", status: "pass" },
    { id: "3", unit: "Commercial Deep Freezer", target: "<= -18°C", time: "08:30", temp: "-19.4°C", signedBy: "JS", status: "pass" },
    { id: "4", unit: "Hot Holding Well (Display)", target: ">= 63°C", time: "11:45", temp: "68.2°C", signedBy: "MB", status: "pass" },
    { id: "5", unit: "Raw Poultry Cooking Core", target: ">= 75°C", time: "12:10", temp: "78.5°C", signedBy: "MB", status: "pass" }
  ]);

  const isGfsi =
    templateTitle.toLowerCase().includes("gfsi") ||
    (templateId && templateId.includes("gfsi"));
  const isIsoCert =
    templateTitle.toLowerCase().includes("get-iso-22000") ||
    templateTitle.toLowerCase().includes("get iso 22000") ||
    (templateId && templateId.includes("get-iso-22000"));
  const isSqfAudit =
    templateTitle.toLowerCase().includes("sqf") ||
    (templateId && templateId.includes("sqf"));
  const isIsoInternalAudit =
    (templateTitle.toLowerCase().includes("iso 22000") && templateTitle.toLowerCase().includes("internal")) ||
    (templateId && templateId.includes("iso-22000-internal"));
  const isFssc =
    templateTitle.toLowerCase().includes("fssc") ||
    (templateId && templateId.includes("fssc"));
  const isNatashas =
    templateTitle.toLowerCase().includes("natasha") ||
    (templateId && templateId.includes("natasha"));
  const isNonGmo =
    templateTitle.toLowerCase().includes("non-gmo") ||
    templateTitle.toLowerCase().includes("non gmo") ||
    (templateId && templateId.includes("non-gmo"));
  const isAmazonSeller =
    templateTitle.toLowerCase().includes("amazon") ||
    (templateId && templateId.includes("amazon"));
  const isFireInspection =
    templateTitle.toLowerCase().includes("fire") ||
    (templateId && templateId.includes("fire"));
  const isMaintenance =
    templateTitle.toLowerCase().includes("maintenance") ||
    (templateId && templateId.includes("maintenance"));
  const isInventory =
    templateTitle.toLowerCase().includes("inventory") ||
    (templateId && templateId.includes("inventory"));
  const isSchedule =
    templateTitle.toLowerCase().includes("schedule") ||
    templateTitle.toLowerCase().includes("rota") ||
    (templateId && templateId.includes("schedule"));
  const isPrepList =
    templateTitle.toLowerCase().includes("prep list") ||
    templateTitle.toLowerCase().includes("prep-list") ||
    (templateId && templateId.includes("prep-list"));
  const isCookingLog =
    templateTitle.toLowerCase().includes("cooking log") ||
    templateTitle.toLowerCase().includes("cooking-log") ||
    (templateId && templateId.includes("cooking-log"));
  const isCalibrationLog =
    templateTitle.toLowerCase().includes("calibration") ||
    (templateId && templateId.includes("calibration"));
  const isPizzaHotHolding =
    (templateTitle.toLowerCase().includes("hot holding") || templateTitle.toLowerCase().includes("hot-holding")) &&
    templateTitle.toLowerCase().includes("pizza") ||
    (templateId && templateId.includes("hot-holding-temperature-requirement-for-pizza"));
  const isApprovedSupplier =
    templateTitle.toLowerCase().includes("supplier") ||
    (templateId && templateId.includes("approved-supplier"));
  const isIngredientTraceability =
    templateTitle.toLowerCase().includes("ingredient-traceability") ||
    (templateTitle.toLowerCase().includes("traceability") && templateTitle.toLowerCase().includes("ingredient")) ||
    (templateId && templateId.includes("ingredient-traceability"));
  const isFoodProduction =
    templateTitle.toLowerCase().includes("production") ||
    (templateId && templateId.includes("food-production-sheet"));
  const isDispatch =
    templateTitle.toLowerCase().includes("dispatch") ||
    (templateId && templateId.includes("dispatch-log"));
  const isCorrectiveActionPlan =
    templateTitle.toLowerCase().includes("corrective action") ||
    (templateId && templateId.includes("corrective-action"));
  const isThermometerSop =
    templateTitle.toLowerCase().includes("how to use") && templateTitle.toLowerCase().includes("thermometer") ||
    (templateId && templateId.includes("how-to-use") && templateId.includes("thermometer"));
  const isDefrosting =
    templateTitle.toLowerCase().includes("defrost") ||
    (templateId && templateId.includes("defrost"));
  const isFoodSanitation =
    templateTitle.toLowerCase().includes("sanitation") ||
    (templateId && templateId.includes("food-safety-and-sanitation"));
  const isBig6Pathogens =
    templateTitle.toLowerCase().includes("big 6") ||
    templateTitle.toLowerCase().includes("big-6") ||
    (templateId && templateId.includes("big-6-foodborne"));
  const isBrcAudit =
    templateTitle.toLowerCase().includes("brc") ||
    (templateId && templateId.includes("brc"));
  const isKosher =
    templateTitle.toLowerCase().includes("kosher") ||
    (templateId && templateId.includes("kosher"));
  const isFiveWhys =
    templateTitle.toLowerCase().includes("5 whys") ||
    templateTitle.toLowerCase().includes("root cause") ||
    (templateId && (templateId.includes("5-whys") || templateId.includes("root-cause")));
  const isHoodCleaning =
    templateTitle.toLowerCase().includes("hood") ||
    templateTitle.toLowerCase().includes("canopy") ||
    templateTitle.toLowerCase().includes("exhaust");
  const isGreaseTrap =
    templateTitle.toLowerCase().includes("grease trap") ||
    templateTitle.toLowerCase().includes("grease-trap");
  const isMeatSlicer =
    templateTitle.toLowerCase().includes("meat slicer") ||
    templateTitle.toLowerCase().includes("slicer");
  const isUtensilCleaning =
    templateTitle.toLowerCase().includes("sink") ||
    (templateId && templateId.includes("three-sink")) ||
    templateTitle.toLowerCase().includes("dirty utensils") ||
    templateTitle.toLowerCase().includes("cleaning and sanitizing") ||
    (templateTitle.toLowerCase().includes("utensil") && templateTitle.toLowerCase().includes("cleaning"));
  const isSsop =
    templateTitle.toLowerCase().includes("ssop") ||
    templateTitle.toLowerCase().includes("sanitation standard") ||
    templateTitle.toLowerCase().includes("sanitation sop") ||
    templateTitle.toLowerCase().includes("standard operating procedure in food") ||
    (templateId && templateId.includes("standard-operating-procedure"));
  const isReceiving =
    templateTitle.toLowerCase().includes("receiving") ||
    templateTitle.toLowerCase().includes("delivery") ||
    templateTitle.toLowerCase().includes("intake");
  const isGmpAudit =
    templateTitle.toLowerCase().includes("gmp") ||
    templateTitle.toLowerCase().includes("good manufacturing");
  const isRetailStore =
    !isSsop &&
    !isReceiving &&
    !isGmpAudit &&
    (templateTitle.toLowerCase().includes("retail") ||
     templateTitle.toLowerCase().includes("store") ||
     templateTitle.toLowerCase().includes("shop"));
  const isKitchenOpeningClosing =
    (templateTitle.toLowerCase().includes("opening") && templateTitle.toLowerCase().includes("closing")) ||
    templateTitle.toLowerCase().includes("kitchen opening") ||
    templateTitle.toLowerCase().includes("kitchen closing");
  const isStartingFoodBusiness =
    templateTitle.toLowerCase().includes("starting") ||
    templateTitle.toLowerCase().includes("new business") ||
    templateTitle.toLowerCase().includes("start a food") ||
    templateTitle.toLowerCase().includes("start-up") ||
    templateTitle.toLowerCase().includes("opening a restaurant") ||
    (templateId && templateId.includes("opening-a-restaurant"));
  const isBar =
    templateTitle.toLowerCase().includes("bar") ||
    templateTitle.toLowerCase().includes("cellar") ||
    templateTitle.toLowerCase().includes("beverage");
  const isRestaurantFoh =
    !isRetailStore &&
    !isKitchenOpeningClosing &&
    !isStartingFoodBusiness &&
    (templateTitle.toLowerCase().includes("restaurant opening") || (templateId && templateId.includes("restaurant-opening")) ||
    (templateTitle.toLowerCase().includes("front of house") ||
     templateTitle.toLowerCase().includes("foh") ||
     (templateTitle.toLowerCase().includes("restaurant") &&
      !templateTitle.toLowerCase().includes("cleaning") &&
      !templateTitle.toLowerCase().includes("inspection") &&
      !templateTitle.toLowerCase().includes("health"))));
  const isWasteManagement =
    templateTitle.toLowerCase().includes("waste") ||
    templateTitle.toLowerCase().includes("refuse") ||
    templateTitle.toLowerCase().includes("garbage");
  const isRestroom =
    templateTitle.toLowerCase().includes("restroom") ||
    templateTitle.toLowerCase().includes("washroom") ||
    templateTitle.toLowerCase().includes("toilet");
  const isDueDiligence =
    templateTitle.toLowerCase().includes("due diligence") ||
    templateTitle.toLowerCase().includes("compliance") ||
    templateTitle.toLowerCase().includes("ecosure");
  const isAllergenSop =
    templateTitle.toLowerCase().includes("allergen") ||
    templateTitle.toLowerCase().includes("allergy");
  const isHaccpAudit =
    templateTitle.toLowerCase().includes("haccp") ||
    templateTitle.toLowerCase().includes("hazard analysis");
  const isCleaning = templateTitle.toLowerCase().includes("cleaning");
  const isRecall = templateTitle.toLowerCase().includes("recall") || templateTitle.toLowerCase().includes("withdrawal");
  const isHealthInspection =
    templateTitle.toLowerCase().includes("inspection") ||
    templateTitle.toLowerCase().includes("eho") ||
    templateTitle.toLowerCase().includes("hygiene audit");
  const isPestControl =
    templateTitle.toLowerCase().includes("pest") ||
    templateTitle.toLowerCase().includes("rodent") ||
    templateTitle.toLowerCase().includes("insect");

  // Checklist Tasks
  const [tasks, setTasks] = useState<CheckItem[]>(() => {
        if (isGfsi) return GFSI_AUDIT_TASKS;
    if (isIsoCert) return ISO_22000_CERTIFICATION_TASKS;
    if (isSqfAudit) return SQF_AUDIT_TASKS;
    if (isIsoInternalAudit) return ISO_22000_INTERNAL_AUDIT_TASKS;
    if (isFssc) return FSSC_AUDIT_TASKS;
    if (isNatashas) return NATASHAS_LAW_TASKS;
    if (isNonGmo) return NON_GMO_TASKS;
    if (isAmazonSeller) return AMAZON_FOOD_SELLER_TASKS;
    if (isFireInspection) return RESTAURANT_FIRE_TASKS;
    if (isMaintenance) return RESTAURANT_MAINTENANCE_TASKS;
    if (isInventory) return RESTAURANT_INVENTORY_TASKS;
    if (isSchedule) return RESTAURANT_SCHEDULE_TASKS;
    if (isPrepList) return KITCHEN_PREP_LIST_TASKS;
    if (isCookingLog) return COOKING_LOG_TASKS;
    if (isCalibrationLog) return CALIBRATION_LOG_TASKS;
    if (isPizzaHotHolding) return PIZZA_HOT_HOLDING_TASKS;
    if (isApprovedSupplier) return APPROVED_SUPPLIER_TASKS;
    if (isIngredientTraceability) return INGREDIENT_TRACEABILITY_TASKS;
    if (isFoodProduction) return FOOD_PRODUCTION_TASKS;
    if (isDispatch) return DISPATCH_LOG_TASKS;
    if (isCorrectiveActionPlan) return CORRECTIVE_ACTION_TASKS;
    if (isThermometerSop) return THERMOMETER_SOP_TASKS;
    if (isDefrosting) return DEFROSTING_SOP_TASKS;
    if (isFoodSanitation) return FOOD_SANITATION_TASKS;
    if (isBig6Pathogens) return BIG_6_PATHOGENS_TASKS;
    if (isBrcAudit) return BRC_AUDIT_TASKS;
    if (isKosher) return KOSHER_CERTIFICATION_TASKS;
    if (isFiveWhys) return FIVE_WHYS_RCA_TASKS;
    if (isHoodCleaning) return HOOD_CLEANING_TASKS;
    if (isGreaseTrap) return GREASE_TRAP_TASKS;
    if (isMeatSlicer) return MEAT_SLICER_CLEANING_TASKS;
    if (isUtensilCleaning) return UTENSIL_CLEANING_TASKS;
    if (isSsop) return SSOP_PROCEDURES_TASKS;
    if (isReceiving) return RECEIVING_DELIVERY_TASKS;
    if (isGmpAudit) return GMP_AUDIT_TASKS;
    if (isRetailStore) return RETAIL_STORE_TASKS;
    if (isKitchenOpeningClosing) return KITCHEN_OPENING_CLOSING_TASKS;
    if (isStartingFoodBusiness) return STARTING_FOOD_BUSINESS_TASKS;
    if (isBar) return BAR_OPERATIONS_TASKS;
    if (isRestaurantFoh) return RESTAURANT_FOH_TASKS;
    if (isWasteManagement) return WASTE_MANAGEMENT_TASKS;
    if (isRestroom) return RESTROOM_TASKS;
    if (isDueDiligence) return DUE_DILIGENCE_TASKS;
    if (isAllergenSop) return ALLERGEN_SOP_TASKS;
    if (isHaccpAudit) return HACCP_AUDIT_TASKS;
    if (isPestControl) return PEST_CONTROL_TASKS;
    if (isRecall) return RECALL_INCIDENT_TASKS;
    if (isHealthInspection) return HEALTH_INSPECTION_TASKS;
    if (isCleaning) return CLEANING_TASKS;
    return DEFAULT_GENERAL_TASKS;
  });

  // BS EN 1276 Chemical Sanitiser Contact Time Stopwatch
  const [timerTarget, setTimerTarget] = useState(30);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft(s => s - 1);
      }, 1000);
    } else if (timerSecondsLeft === 0) {
      setTimerActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timerSecondsLeft]);

  const resetTimer = (sec: number) => {
    setTimerTarget(sec);
    setTimerSecondsLeft(sec);
    setTimerActive(false);
  };

  const exportChecklistCSV = () => {
    let csv = "Shift,Date,Inspector,Category,Task Description,Status,Action Notes\n";
    tasks.forEach(t => {
      csv += `"${shift}","${logDate}","${inspectorName}","${t.category}","${t.task.replace(/"/g, '""')}","${t.status.toUpperCase()}","${(t.actionNotes || "").replace(/"/g, '""')}"\n`;
    });
    csv += "\nTEMPERATURE PROBE RECORDS\n";
    csv += "Unit,Target,Time,Recorded Temp,Signed By,Status\n";
    tempRecords.forEach(r => {
      csv += `"${r.unit}","${r.target}","${r.time}","${r.temp}","${r.signedBy}","${r.status.toUpperCase()}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Kitchen_Checklist_${logDate}_${shift}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Hygiene");

  const toggleTaskStatus = (id: string) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id !== id) return t;
        const next = t.status === "pass" ? "fail" : t.status === "fail" ? "pending" : "pass";
        return { ...t, status: next };
      })
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newId = `task-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setTasks(prev => [
      ...prev,
      {
        id: newId,
        category: newTaskCategory,
        task: newTaskText.trim(),
        status: "pending",
        actionNotes: ""
      }
    ]);
    setNewTaskText("");
  };

  const handleAddTempRow = () => {
    const newId = `temp-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setTempRecords(prev => [
      ...prev,
      {
        id: newId,
        unit: "Custom Chiller / Hot Hold",
        target: "<= 5°C",
        time: "12:00",
        temp: "",
        signedBy: "",
        status: "pass"
      }
    ]);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Print Page Setup (Portrait for Kitchen Checklists) */}
      <style jsx global>{`
        @media print {
          @page {
            size: portrait;
            margin: 8mm;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .printable-doc {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .printable-doc table {
            width: 100% !important;
            table-layout: fixed !important;
            border-collapse: collapse !important;
          }
          .printable-doc th,
          .printable-doc td {
            border: 1px solid #d1d5db !important;
            padding: 5px 6px !important;
            word-break: break-word !important;
          }
        }
      `}</style>

      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-600" />
            Official Environmental Health Officer (EHO) Inspection Audit
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
            {templateTitle || "Commercial Kitchen Verification Checklist & Temp Log"}
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Real-time digital inspection log. Sign off checks and export directly for local authority inspections.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 no-print">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl">
            <Edit3 className="w-3.5 h-3.5 text-amber-600" />
            <span>All Checks &amp; Temps Editable</span>
          </div>

          <div className="flex bg-gray-100 rounded-xl p-1 border border-gray-200 text-xs font-bold">
            {(["Opening", "Midday", "Closing"] as const).map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setShift(s)}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  shift === s ? "bg-white text-black shadow-xs" : "text-gray-500 hover:text-black"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={exportChecklistCSV}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all border border-slate-300 cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Export CSV</span>
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.02]"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>Print Official Log</span>
          </button>
        </div>
      </div>

      {/* FHRS 5-Star Readiness Estimator Banner */}
      {isHealthInspection && (
        <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-2xl p-5 border border-emerald-700/50 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                UK Food Hygiene Rating Scheme (FHRS) Readiness
              </span>
            </div>
            <p className="text-xs text-emerald-100 max-w-xl">
              Based on the 3 official EHO scoring pillars: Food Hygiene (Cross-contamination &amp; Temps), Structural Condition (Cleanliness &amp; Pest proofing), and Confidence in Management (SFBB Diary).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-center shrink-0">
            {tasks.filter(t => t.status === "fail").length === 0 ? (
              <div>
                <span className="text-amber-300 text-lg font-black tracking-widest block">★★★★★</span>
                <span className="text-xs font-bold text-white uppercase">5-Star Ready (Very Good)</span>
              </div>
            ) : tasks.filter(t => t.status === "fail").length === 1 ? (
              <div>
                <span className="text-amber-300 text-lg font-black tracking-widest block">★★★★☆</span>
                <span className="text-xs font-bold text-amber-200 uppercase">4-Star Potential (1 Issue to Fix)</span>
              </div>
            ) : (
              <div>
                <span className="text-rose-400 text-lg font-black tracking-widest block">★★☆☆☆</span>
                <span className="text-xs font-bold text-rose-200 uppercase">Risk of EHO Action (Fix Breaches)</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* BS EN 1276 Sanitiser Contact Time Verification Widget */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 no-print shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-amber-700" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-950 font-mono">
              BS EN 1276 Disinfectant Contact Time Guide
            </span>
          </div>
          <p className="text-xs text-gray-700 max-w-xl">
            UK Food Standards Agency (FSA) regulations require kitchen surface sanitisers to remain visibly wet on food-contact counters for the certified dwell time (typically 30 to 60 seconds) to destroy 99.999% of bacteria.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white border border-amber-300 rounded-xl px-2.5 py-1">
            {[30, 60, 120].map(s => (
              <button
                key={s}
                type="button"
                onClick={() => resetTimer(s)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition ${
                  timerTarget === s ? "bg-amber-800 text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                {s}s
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-white border border-amber-300 rounded-xl px-3 py-1.5">
            <span className={`font-mono text-base font-black ${timerSecondsLeft === 0 ? "text-emerald-600 animate-pulse" : "text-gray-900"}`}>
              {timerSecondsLeft}s
            </span>
            <button
              type="button"
              onClick={() => setTimerActive(!timerActive)}
              className="text-xs font-bold px-2 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center gap-1 cursor-pointer"
            >
              {timerActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{timerActive ? "Pause" : "Start"}</span>
            </button>
            <button
              type="button"
              onClick={() => resetTimer(timerTarget)}
              className="text-gray-400 hover:text-gray-700 cursor-pointer p-1"
              title="Reset timer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Meta Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs">
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Inspector / Supervisor</label>
          <input
            type="text"
            value={inspectorName}
            onChange={e => setInspectorName(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-bold text-xs text-gray-950">{inspectorName}</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Shift Type</label>
          <div className="py-1.5 font-bold text-gray-900 font-mono text-sm">{shift} Shift Routine</div>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-700 mb-1">Inspection Date</label>
          <input
            type="date"
            value={logDate}
            onChange={e => setLogDate(e.target.value)}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none print:hidden shadow-2xs"
          />
          <div className="hidden print:block font-bold text-xs text-gray-950">{logDate}</div>
        </div>
      </div>

      {/* 1. Daily Critical Temperature Log */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-red-500" />
            <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
              1. Calibrated Probe Temperature Record
            </h3>
          </div>
          <button
            type="button"
            onClick={handleAddTempRow}
            className="no-print bg-gray-900 hover:bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Equipment</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl print:border-none print:overflow-visible">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-100 text-gray-700 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th className="p-3 border-b" style={{ width: "32%" }}>Equipment / Product</th>
                <th className="p-3 border-b" style={{ width: "18%" }}>Target Limit</th>
                <th className="p-3 border-b text-center" style={{ width: "12%" }}>Log Time</th>
                <th className="p-3 border-b font-bold text-center" style={{ width: "18%" }}>Probe Reading</th>
                <th className="p-3 border-b text-center" style={{ width: "10%" }}>Status</th>
                <th className="p-3 border-b text-center" style={{ width: "10%" }}>Initial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tempRecords.map(t => (
                <tr key={t.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-2.5 font-semibold text-gray-900">
                    <input
                      type="text"
                      value={t.unit}
                      onChange={e => {
                        const val = e.target.value;
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, unit: val } : r));
                      }}
                      className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-2.5 py-1 text-xs font-semibold text-gray-900 focus:outline-none print:hidden shadow-2xs"
                    />
                    <div className="hidden print:block font-bold text-[8.5pt] text-gray-950">{t.unit}</div>
                  </td>
                  <td className="p-2.5 font-mono text-gray-500 text-[11px]">{t.target}</td>
                  <td className="p-2.5 font-mono text-center">
                    <input
                      type="text"
                      value={t.time}
                      onChange={e => {
                        const val = e.target.value;
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, time: val } : r));
                      }}
                      className="w-16 bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded px-1.5 py-1 font-mono text-xs text-center focus:outline-none print:hidden shadow-2xs"
                    />
                    <div className="hidden print:block font-mono text-[8.5pt] text-gray-900 text-center">{t.time}</div>
                  </td>
                  <td className="p-2.5 font-mono font-bold text-gray-900 text-center">
                    <input
                      type="text"
                      value={t.temp}
                      placeholder="e.g. 3.4°C"
                      onChange={e => {
                        const val = e.target.value;
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, temp: val } : r));
                      }}
                      className="w-24 bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded px-2 py-1 font-bold text-xs text-center focus:outline-none print:hidden shadow-2xs"
                    />
                    <div className="hidden print:block font-mono font-bold text-[8.5pt] text-gray-950 text-center">{t.temp || "—"}</div>
                  </td>
                  <td className="p-2.5 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, status: r.status === "pass" ? "fail" : "pass" } : r));
                      }}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold cursor-pointer print:hidden ${
                        t.status === "pass" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {t.status.toUpperCase()}
                    </button>
                    <div className="hidden print:block text-center font-mono font-black text-[7.5pt]">
                      {t.status === "pass" ? (
                        <span className="text-emerald-700 font-black">[PASS]</span>
                      ) : (
                        <span className="text-red-700 font-black">[FAIL]</span>
                      )}
                    </div>
                  </td>
                  <td className="p-2.5 font-mono text-gray-700 text-center">
                    <input
                      type="text"
                      value={t.signedBy}
                      placeholder="Sign"
                      onChange={e => {
                        const val = e.target.value;
                        setTempRecords(prev => prev.map(r => r.id === t.id ? { ...r, signedBy: val } : r));
                      }}
                      className="w-14 bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded px-1.5 py-1 text-center uppercase text-xs focus:outline-none print:hidden shadow-2xs"
                    />
                    <div className="hidden print:block font-mono uppercase text-[8.5pt] text-gray-900 text-center">{t.signedBy || "—"}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between no-print pt-1">
          <button
            type="button"
            onClick={handleAddTempRow}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow cursor-pointer hover:scale-[1.01]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Equipment / Temp Row</span>
          </button>
          <span className="text-xs font-mono text-gray-500">
            {tempRecords.length} probe point{tempRecords.length !== 1 ? "s" : ""} logged
          </span>
        </div>
      </div>

      {/* 2. Inspection Verification Items */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider">
          2. Mandatory HACCP &amp; Food Hygiene Checks
        </h3>

        <div className="space-y-2.5">
          {tasks.map(task => (
            <div
              key={task.id}
              className={`p-3.5 rounded-2xl border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                task.status === "pass"
                  ? "bg-emerald-50/50 border-emerald-200"
                  : task.status === "fail"
                  ? "bg-red-50/50 border-red-200"
                  : "bg-gray-50/80 border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3 flex-1">
                <button
                  type="button"
                  onClick={() => toggleTaskStatus(task.id)}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all cursor-pointer mt-0.5 shrink-0 print:hidden ${
                    task.status === "pass"
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : task.status === "fail"
                      ? "bg-red-600 border-red-600 text-white"
                      : "bg-white border-gray-300 text-transparent"
                  }`}
                  title="Click to cycle status: Pass / Fail / Pending"
                >
                  {task.status === "pass" ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : task.status === "fail" ? (
                    <span className="text-xs font-black">!</span>
                  ) : null}
                </button>

                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                    {task.category}
                  </span>
                  <textarea
                    rows={3}
                    value={task.task}
                    onChange={e => {
                      const val = e.target.value;
                      setTasks(prev => prev.map(t => t.id === task.id ? { ...t, task: val } : t));
                    }}
                    className="w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg p-2.5 text-xs font-bold text-gray-900 leading-relaxed focus:outline-none print:hidden shadow-2xs resize-y min-h-[68px]"
                  />
                  <div className="hidden print:block text-[9pt] font-bold text-gray-950 leading-relaxed whitespace-pre-wrap">
                    {task.task}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <input
                  type="text"
                  placeholder="Action taken / notes..."
                  value={task.actionNotes}
                  onChange={e => {
                    const val = e.target.value;
                    setTasks(prev => prev.map(t => t.id === task.id ? { ...t, actionNotes: val } : t));
                  }}
                  className="bg-white border border-gray-300 hover:border-gray-400 focus:border-amber-600 rounded-lg px-3 py-2 text-xs text-gray-800 w-full sm:w-64 focus:outline-none print:hidden shadow-2xs"
                />
                <div className="hidden print:block text-[8.5pt] text-gray-800 italic max-w-xs leading-relaxed whitespace-pre-wrap">
                  {task.actionNotes || "—"}
                </div>

                <span
                  onClick={() => toggleTaskStatus(task.id)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-black uppercase cursor-pointer print:hidden ${
                    task.status === "pass"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : task.status === "fail"
                      ? "bg-red-600 text-white shadow-xs"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {task.status}
                </span>
                <span className="hidden print:inline-block font-mono font-black text-[7.5pt] uppercase">
                  {task.status === "pass" ? (
                    <span className="text-emerald-700">[PASS]</span>
                  ) : task.status === "fail" ? (
                    <span className="text-red-700">[FAIL]</span>
                  ) : (
                    <span className="text-gray-500">[PENDING]</span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Check Form */}
        <form onSubmit={handleAddTask} className="flex gap-2 items-center no-print pt-1">
          <input
            type="text"
            placeholder="Add custom verification check..."
            value={newTaskText}
            onChange={e => setNewTaskText(e.target.value)}
            className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900"
          />
          <input
            type="text"
            placeholder="Category..."
            value={newTaskCategory}
            onChange={e => setNewTaskCategory(e.target.value)}
            className="w-32 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900"
          />
          <button
            type="submit"
            className="bg-[#1D1D1F] hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 cursor-pointer shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Check</span>
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
        <div>• Saim Dev Inspection Records • Retain On Premises For Minimum 12 Months</div>
        <div>Audited By: {inspectorName}</div>
      </div>
    </div>
  );
};
