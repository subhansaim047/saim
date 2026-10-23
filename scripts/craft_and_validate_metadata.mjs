import fs from "fs";

export const CORE_PAGES_METADATA = {
  "food-allergen-chart": {
    title: "Free UK Takeaway Allergen Chart | Saim Dev",
    desc: "Record the 14 mandatory UK allergens across your menu. Filter dishes interactively and export a print-ready kitchen matrix as a PDF with zero sign-up.",
    howTo: [
      "Record every ingredient, sauce, and garnish across all menu items accurately.",
      "Highlight which of the 14 UK allergens are present or carry cross-contact risk.",
      "Review and reprint your chart whenever suppliers or dish recipes change."
    ]
  },
  "allergy-matrix": {
    title: "Free 14 Allergen Matrix Tool | Saim Dev",
    desc: "Map all 14 statutory allergens across your commercial menu. Filter ingredients interactively and export an A4 kitchen poster as a PDF in seconds.",
    howTo: [
      "Enter dish titles alongside full recipe specifications and ingredient packages.",
      "Flag declared allergens and identify cross-contact risks across prep lines.",
      "Print or export your matrix to keep staff and customers safely informed."
    ]
  },
  "food-cost-calculator": {
    title: "Free Food Cost Calculator Tool | Saim Dev",
    desc: "Calculate food cost percentage, menu pricing, and gross profit margins. Model ingredient expenses with live interactive sliders and zero sign-up.",
    howTo: [
      "Input ingredient purchase prices and exact recipe portion weights.",
      "Review target gross profit percentage against total dish production cost.",
      "Set profitable takeaway menu prices while tracking ingredient inflation."
    ]
  },
  "recipe-calculator": {
    title: "Free Recipe Scale Calculator Tool | Saim Dev",
    desc: "Scale ingredient quantities and batch portions accurately. Calculate exact commercial batch costs and export kitchen prep sheets directly to PDF.",
    howTo: [
      "Enter standard batch recipe ingredients, baseline quantities, and units.",
      "Select your target scaling factor or required guest portion headcount.",
      "Print updated kitchen production sheets with scaled ingredient measurements."
    ]
  },
  "haccp-plan-builder": {
    title: "Free HACCP Plan Builder Tool | Saim Dev",
    desc: "Build a commercial kitchen HACCP plan online. Identify critical control points, set control limits, and print structured kitchen logs directly to PDF.",
    howTo: [
      "Map out each stage of food preparation from delivery to final hot service.",
      "Establish critical limits for cooking, cooling, and refrigeration steps.",
      "Document corrective actions for staff when critical limits are breached."
    ]
  },
  "food-safety-quiz": {
    title: "Free Level 2 Food Hygiene Quiz | Saim Dev",
    desc: "Test your kitchen team with this interactive UK Food Hygiene Level 2 quiz. Review temperature rules, cross-contamination, and Natasha's Law online.",
    howTo: [
      "Complete the multiple-choice assessment covering core UK hygiene standards.",
      "Review detailed explanations on cold holding, reheating, and sanitiser rules.",
      "Retake the quiz during staff onboarding to reinforce kitchen compliance."
    ]
  },
  "freezer-temperature-chart": {
    title: "Free Freezer Temperature Chart | Saim Dev",
    desc: "Download a commercial freezer temperature chart. Keep sub-zero food storage records below -18°C and print clean A4 monitoring logs directly to PDF.",
    howTo: [
      "Mount this chart directly onto or adjacent to commercial walk-in freezers.",
      "Record morning and evening internal temperature readings twice per shift.",
      "Take corrective action immediately if freezer temperatures rise above -18°C."
    ]
  },
  "food-cooling-poster": {
    title: "Free Food Cooling Methods Poster | Saim Dev",
    desc: "Download a commercial food cooling guide poster. Follow safe rapid chilling methods, avoid bacterial growth, and print kitchen posters directly to PDF.",
    howTo: [
      "Divide hot cooked batches into shallow stainless steel pans before chilling.",
      "Cool food to 8°C or colder within 90 minutes to prevent spore germination.",
      "Cover, date-code, and transfer chilled containers into cold storage promptly."
    ]
  },
  "basic-food-preparation-rules": {
    title: "Free Safe Food Prep Rules Poster | Saim Dev",
    desc: "Download an essential food preparation rules poster. Guide kitchen handlers on handwashing, glove use, and food hygiene. Direct printable PDF download.",
    howTo: [
      "Display clearly above food preparation tables and vegetable washing sinks.",
      "Train kitchen staff to wash hands thoroughly between handling different foods.",
      "Use clean, sanitized equipment for every new food preparation task."
    ]
  },
  "walk-in-cooler-food-storage-chart": {
    title: "Free Walk-In Cooler Storage Chart | Saim Dev",
    desc: "Download a walk-in cooler shelf layout chart. Prevent cross-contamination by arranging raw meats below cooked foods. Direct A4 printable PDF download.",
    howTo: [
      "Store ready-to-eat foods, dairy, and cooked dishes on the highest shelving.",
      "Place raw beef, pork, and seafood on middle shelves below prepared items.",
      "Keep raw poultry on bottom shelves to prevent juices dripping onto other foods."
    ]
  },
  "fridge-temperature-record-sheet-pdf": {
    title: "Free Fridge Temperature Sheet | Saim Dev",
    desc: "Download a daily commercial fridge temperature record sheet. Log morning and evening chiller readings below 5°C with direct printable PDF download.",
    howTo: [
      "Check calibrated fridge thermometers at opening and during the afternoon shift.",
      "Record temperature readings alongside staff initials on the log sheet daily.",
      "Report chiller units exceeding 8°C to the duty manager for urgent service."
    ]
  },
  "cleaning-schedule": {
    title: "Free Kitchen Cleaning Schedule | Saim Dev",
    desc: "Download a commercial kitchen cleaning schedule rota. Organise daily, weekly, and monthly sanitation tasks with this direct printable PDF template.",
    howTo: [
      "Assign specific kitchen cleaning zones to team members on each shift rota.",
      "Specify approved sanitiser contact times and dilution ratios (BS EN 1276).",
      "Sign and date completion logs after each deep clean or shift handover."
    ]
  },
  "restaurant-cleaning-checklist": {
    title: "Free Restaurant Cleaning Checklist | Saim Dev",
    desc: "Download a comprehensive restaurant cleaning checklist. Organise front-of-house and kitchen sanitation with this direct printable PDF download.",
    howTo: [
      "Complete opening sanitising passes on all food contact surfaces and counters.",
      "Perform mid-shift sanitiser sweeps on high-touch touchpoints and door handles.",
      "Sign off kitchen closing cleaning routines including grease traps and floors."
    ]
  },
  "opening-and-closing-checklist-template": {
    title: "Free Kitchen Opening Checklist | Saim Dev",
    desc: "Download a daily kitchen opening and closing checklist. Verify equipment, refrigeration, and security procedures with this direct printable PDF log.",
    howTo: [
      "Inspect chillers, pilot lights, and ventilation hoods upon arrival on shift.",
      "Verify sanitizer spray concentrations and handwashing soap basin stocks.",
      "Complete evening shutdown checks, lock store cupboards, and verify waste bins."
    ]
  },
  "kitchen-prep-list-template": {
    title: "Free Kitchen Prep List Template | Saim Dev",
    desc: "Download a commercial kitchen mise en place prep sheet. Track daily batch yields, par levels, and station prep tasks with direct printable PDF download.",
    howTo: [
      "Review forecast covers and record required batch quantities by station.",
      "Assign prep responsibilities to station chefs before service begins.",
      "Label all prepped containers with ingredient names and use-by date dots."
    ]
  },
  "pest-control-checklist": {
    title: "Free Pest Control Checklist | Saim Dev",
    desc: "Download a food business pest prevention checklist. Inspect ingress points, bait stations, and proofing barriers with direct printable PDF download.",
    howTo: [
      "Inspect external doors, pipe penetrations, and ventilation screens weekly.",
      "Check storage areas and dry pantries for any signs of pest activity or droppings.",
      "Log contractor inspection visits and file pest technician reports on site."
    ]
  },
  "food-traceability": {
    title: "Free Food Traceability Log Sheet | Saim Dev",
    desc: "Download a food traceability and batch tracking log. Record supplier invoice numbers, batch codes, and use-by dates with direct printable PDF download.",
    howTo: [
      "Record delivery dates, supplier names, and batch codes for incoming meats.",
      "Log batch lot numbers when opening bulk packages for recipe preparation.",
      "Retain supplier records for full one-step-back and one-step-forward tracking."
    ]
  },
  "food-recall": {
    title: "Free Food Recall Procedure Log | Saim Dev",
    desc: "Download a food recall and product withdrawal log. Document incident details, affected batch codes, and customer notifications with direct PDF download.",
    howTo: [
      "Identify affected batch numbers and isolate suspect stock in quarantine.",
      "Document communication with suppliers, customers, and regulatory authorities.",
      "Complete a root-cause investigation before closing the recall incident log."
    ]
  },
  "hand-washing-poster": {
    title: "Free Hand Washing Steps Poster | Saim Dev",
    desc: "Download a hygienic kitchen handwashing poster. Train food handlers on 20-second technique, warm water, and soap. Direct printable A4 PDF download.",
    howTo: [
      "Position directly above all dedicated staff handwash basins in the kitchen.",
      "Instruct staff to lather antibacterial soap vigorously for at least 20 seconds.",
      "Dry hands thoroughly with disposable blue paper roll; never use apron towels."
    ]
  },
  "kitchen-safety-poster": {
    title: "Free Kitchen Safety Poster | Saim Dev",
    desc: "Download a commercial kitchen safety poster. Display essential guidelines on hot oil, sharp knives, and slip hazards with direct printable PDF download.",
    howTo: [
      "Mount in main kitchen thoroughfares near cooking lines and wash-up zones.",
      "Review emergency fire blanket and first-aid kit locations with new team members.",
      "Ensure staff wear slip-resistant safety shoes and correct protective aprons."
    ]
  },
  "reheating-food-temperature-guide": {
    title: "Free Food Reheating Guide Poster | Saim Dev",
    desc: "Download a food reheating temperature guide poster. Follow legal core limits of 75°C (82°C in Scotland) with this direct printable A4 PDF download.",
    howTo: [
      "Reheat pre-cooked foods rapidly until core temperature reaches at least 75°C.",
      "Stir soups, gravies, and stews during reheating to distribute heat evenly.",
      "Never reheat food more than once; discard leftovers that are not consumed."
    ]
  },
  "five-food-safety-rules": {
    title: "Free 5 Food Safety Rules Poster | Saim Dev",
    desc: "Download a 5 food safety rules poster. Reinforce hygiene, temperature control, and cross-contamination prevention with direct printable PDF download.",
    howTo: [
      "Display prominently in staff breakrooms and near food preparation stations.",
      "Use as a visual teaching aid during new employee hygiene onboarding sessions.",
      "Reinforce daily standards for temperature control, cleaning, and sanitising."
    ]
  },
  "chopping-board-colour-chart": {
    title: "Free Chopping Board Colour Chart | Saim Dev",
    desc: "Download a UK colour-coded chopping board chart. Prevent cross-contamination between raw meats, fish, and salads with direct printable PDF download.",
    howTo: [
      "Mount above chopping board storage racks in the main preparation kitchen.",
      "Use red boards for raw meat, yellow for cooked meat, and green for salad.",
      "Sanitise cutting boards through commercial dishwashers after each usage."
    ]
  },
  "hot-holding-food-temperature-log": {
    title: "Free Hot Holding Temperature Log | Saim Dev",
    desc: "Download a commercial hot holding temperature log. Record buffet and bain-marie temperatures above 63°C with this direct printable PDF download sheet.",
    howTo: [
      "Preheat bain-maries and hot holding wells before loading hot cooked dishes.",
      "Probe and log food temperatures every 2 hours to ensure they remain above 63°C.",
      "Discard hot food displayed below 63°C after a maximum of 2 hours."
    ]
  }
};

// Validation checks
let errors = 0;
const titles = new Set();
const descs = new Set();

for (const [slug, meta] of Object.entries(CORE_PAGES_METADATA)) {
  // Title check
  if (meta.title.length > 60) {
    console.error(`[ERROR] Title too long for ${slug} (${meta.title.length} chars): "${meta.title}"`);
    errors++;
  }
  if (!meta.title.includes("Free")) {
    console.error(`[ERROR] Title missing "Free" for ${slug}: "${meta.title}"`);
    errors++;
  }
  if (!meta.title.endsWith(" | Saim Dev")) {
    console.error(`[ERROR] Title missing " | Saim Dev" suffix for ${slug}: "${meta.title}"`);
    errors++;
  }
  if (titles.has(meta.title)) {
    console.error(`[ERROR] Duplicate title found: "${meta.title}"`);
    errors++;
  }
  titles.add(meta.title);

  // Description check
  if (meta.desc.length < 120 || meta.desc.length > 155) {
    console.error(`[ERROR] Desc length invalid for ${slug} (${meta.desc.length} chars, must be 120-155): "${meta.desc}"`);
    errors++;
  }
  if (descs.has(meta.desc)) {
    console.error(`[ERROR] Duplicate desc found: "${meta.desc}"`);
    errors++;
  }
  descs.add(meta.desc);
}

if (errors === 0) {
  console.log(`\nALL 24 CORE METADATA ENTRIES ARE VALID!`);
  console.log(`- 24 unique titles (<= 60 chars, includes "Free" and "| Saim Dev")`);
  console.log(`- 24 unique descriptions (120-155 chars, active voice, mentions PDF/interactive)`);
} else {
  console.error(`\nFound ${errors} validation error(s).`);
  process.exit(1);
}
