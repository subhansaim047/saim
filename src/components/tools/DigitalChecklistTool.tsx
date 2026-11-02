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

  const isBar =
    templateTitle.toLowerCase().includes("bar") ||
    templateTitle.toLowerCase().includes("cellar") ||
    templateTitle.toLowerCase().includes("beverage");
  const isRestaurantFoh =
    templateTitle.toLowerCase().includes("front of house") ||
    templateTitle.toLowerCase().includes("foh") ||
    (templateTitle.toLowerCase().includes("restaurant") && !templateTitle.toLowerCase().includes("cleaning"));
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
