import fs from "fs";

const content = fs.readFileSync("src/data/saim_templates.ts", "utf8");
const equalsIdx = content.indexOf("=", content.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = content.indexOf("[", equalsIdx);
const arrayEnd = content.indexOf("];\n\nexport const ALL_CATEGORIES");
const templates = JSON.parse(content.slice(arrayStart, arrayEnd + 1));

const rows = [];

function addRow(page, metric, value, unit, context, needsHumanCheck) {
  rows.push({
    page,
    metric: metric.replace(/"/g, '""'),
    value: value.replace(/"/g, '""'),
    unit: unit.replace(/"/g, '""'),
    context: context.replace(/"/g, '""'),
    needsHumanCheck: needsHumanCheck ? "yes" : "no"
  });
}

// 1. Sitewide reference values present on all template detail pages
addRow(
  "/food-safety-templates/[slug]",
  "Commercial Freezing Temperature",
  "<= -18",
  "°C",
  "Frozen food storage standard to halt microbial growth",
  false
);

addRow(
  "/food-safety-templates/[slug]",
  "Chilled Cold Holding Range",
  "1 to 4 (legal max 8)",
  "°C",
  "Refrigerated storage standard in UK (Food Hygiene Regulations 2006)",
  false
);

addRow(
  "/food-safety-templates/[slug]",
  "Hot Holding Minimum Temperature",
  ">= 63",
  "°C",
  "Hot holding safe threshold (maximum 2 hours below 63°C under UK exemption)",
  false
);

addRow(
  "/food-safety-templates/[slug]",
  "Safe Cooking Core Temperature",
  ">= 75 for 30s (or 70 for 2 min)",
  "°C",
  "FSA standard core cooking temperature to destroy pathogens",
  false
);

// 2. Interactive tools
addRow(
  "/food-safety-templates/food-allergen-chart",
  "Allergen Count",
  "14",
  "allergens",
  "UK Food Information Regulations 2014 & retained EU Regulation 1169/2011 mandatory declared allergens",
  false
);

addRow(
  "/food-safety-templates/allergy-matrix",
  "Allergen Count",
  "14",
  "allergens",
  "UK Food Information Regulations 2014 & retained EU Regulation 1169/2011 mandatory declared allergens",
  false
);

addRow(
  "/food-safety-templates/digital-checklist",
  "Chiller Operating Temperature",
  "<= 4",
  "°C",
  "Walk-in chiller standard verification limit",
  false
);

addRow(
  "/food-safety-templates/digital-checklist",
  "Cook Line Prep Fridge Limit",
  "<= 5",
  "°C",
  "Service line refrigeration target (legal ceiling 8°C)",
  false
);

addRow(
  "/food-safety-templates/digital-checklist",
  "Commercial Deep Freezer",
  "<= -18",
  "°C",
  "Deep freeze verification target",
  false
);

addRow(
  "/food-safety-templates/digital-checklist",
  "Hot Holding Well",
  ">= 63",
  "°C",
  "Cook line hot holding display verification target",
  false
);

addRow(
  "/food-safety-templates/digital-checklist",
  "Poultry Core Cooking Temp",
  ">= 75",
  "°C",
  "Immediate probe reading threshold for cooked chicken",
  false
);

addRow(
  "/food-safety-templates/digital-checklist",
  "Sanitiser Disinfection Standard",
  "BS EN 1276",
  "standard",
  "UK chemical bactericidal efficacy standard for food contact surfaces",
  false
);

addRow(
  "/food-safety-templates/digital-checklist",
  "Handwashing Soap Standard",
  "BS EN 1499",
  "standard",
  "UK chemical hygienic handwash efficacy standard",
  false
);

addRow(
  "/food-safety-templates/haccp-plan-builder",
  "Refrigerated Receiving Limit",
  "<= 5",
  "°C",
  "Critical Control Point limit for receiving chilled high-risk goods",
  false
);

addRow(
  "/food-safety-templates/haccp-plan-builder",
  "Frozen Goods Receiving Limit",
  "<= -15",
  "°C",
  "Critical Control Point threshold for receiving frozen stock without thawing",
  false
);

addRow(
  "/food-safety-templates/haccp-plan-builder",
  "Cooking Core Pathogen Destruction",
  "75",
  "°C",
  "CCP 2 Cooking minimum core temp for 30 seconds",
  false
);

addRow(
  "/food-safety-templates/haccp-plan-builder",
  "Hot Holding Display",
  ">= 63",
  "°C",
  "CCP 3 Hot Holding service line minimum temperature",
  false
);

addRow(
  "/food-safety-templates/haccp-plan-builder",
  "Two-Stage Cooling Window",
  "60 to 20 in 2 hrs, 20 to 5 in 4 hrs (or <8 in 90 min)",
  "hours",
  "Two-stage cooling vs FSA 90-minute rapid chilling recommendation",
  false
);

addRow(
  "/food-safety-templates/food-safety-quiz",
  "UK Legal Max Fridge Temperature",
  "8",
  "°C",
  "Food Hygiene (England) Regulations 2006 Schedule 4 chill holding requirement",
  false
);

addRow(
  "/food-safety-templates/food-safety-quiz",
  "Recommended Fridge Temperature",
  "<= 5",
  "°C",
  "FSA recommendation for commercial kitchen refrigeration",
  false
);

addRow(
  "/food-safety-templates/food-safety-quiz",
  "Hot Holding Minimum",
  "63",
  "°C",
  "Food Hygiene Regulations 2006 legal hot holding temperature",
  false
);

addRow(
  "/food-safety-templates/food-safety-quiz",
  "Reheating Temperature (England/Wales)",
  "75",
  "°C",
  "FSA recommended core reheat temperature",
  false
);

addRow(
  "/food-safety-templates/food-safety-quiz",
  "Reheating Temperature (Scotland)",
  "82",
  "°C",
  "Food Hygiene (Scotland) Regulations statutory reheating temperature",
  false
);

addRow(
  "/food-safety-templates/food-safety-quiz",
  "Staff Sickness Exclusion Period",
  "48",
  "hours",
  "FSA fitness-to-work 48-hour symptom-free exclusion rule for gastrointestinal symptoms",
  false
);

// 3. Scan templates for non-UK and specific regulatory values
templates.forEach(t => {
  const url = `/food-safety-templates/${t.slug}`;
  const lower = (t.title + " " + t.desc + " " + t.slug).toLowerCase();

  // Check FSMA
  if (lower.includes("fsma")) {
    addRow(
      url,
      "US Regulation",
      "FSMA (Food Safety Modernization Act)",
      "statute",
      "Template is designed for US federal FDA FSMA compliance, not UK FSA",
      true
    );
  }

  // Check Fahrenheit
  if (lower.includes("fahrenheit") || lower.includes("°f")) {
    addRow(
      url,
      "Temperature Unit",
      "Fahrenheit (°F)",
      "°F",
      "US customary unit used instead of Celsius for UK kitchens",
      true
    );
  }

  // Check FDA
  if (lower.includes("fda")) {
    addRow(
      url,
      "US Regulatory Agency",
      "FDA (Food and Drug Administration)",
      "agency",
      "US federal agency reference, off-audience for UK takeaways",
      true
    );
  }

  // Check Big 6
  if (lower.includes("big 6") || lower.includes("big-6") || lower.includes("big six")) {
    addRow(
      url,
      "US Foodborne Pathogen List",
      "FDA Big 6 Illnesses",
      "guideline",
      "FDA Food Code specific pathogen classification (Norovirus, Hep A, Salmonella Typhi, etc.)",
      true
    );
  }

  // Check FAT TOM
  if (lower.includes("fat tom") || lower.includes("fat-tom") || lower.includes("fattom")) {
    addRow(
      url,
      "US Food Science Mnemonic",
      "FAT TOM",
      "framework",
      "US ServSafe / FDA training mnemonic (Food, Acidity, Time, Temperature, Oxygen, Moisture)",
      true
    );
  }

  // Check EcoSure
  if (lower.includes("ecosure")) {
    addRow(
      url,
      "Commercial Audit Vendor",
      "EcoSure",
      "commercial",
      "US third-party commercial restaurant audit provider",
      true
    );
  }

  // Check Kosher
  if (lower.includes("kosher")) {
    addRow(
      url,
      "Dietary Certification",
      "Kosher Certification Standards",
      "standard",
      "Religious dietary standard, specialized non-standard food hygiene",
      true
    );
  }

  // Check Non-GMO
  if (lower.includes("gmo") || lower.includes("non-gmo")) {
    addRow(
      url,
      "Product Standard",
      "Non-GMO Verification",
      "standard",
      "Agricultural marketing standard, not UK commercial kitchen hygiene",
      true
    );
  }

  // Check Amazon seller requirements
  if (lower.includes("amazon-seller") || lower.includes("amazon")) {
    addRow(
      url,
      "Marketplace Policy",
      "Amazon Seller Food Safety Requirements",
      "policy",
      "E-commerce platform requirements rather than UK local catering hygiene",
      true
    );
  }

  // Check BRC / SQF / GFSI / ISO 22000 / FSSC
  if (lower.includes("brc") || lower.includes("sqf") || lower.includes("gfsi") || lower.includes("iso 22000") || lower.includes("fssc")) {
    addRow(
      url,
      "Industrial Standard",
      t.title,
      "audit standard",
      "Large-scale food manufacturing / industrial standard, off-audience for small UK takeaways",
      true
    );
  }

  // Check Cutting board color chart (US vs UK color conventions)
  if (lower.includes("cutting-board") || lower.includes("chopping-board")) {
    addRow(
      url,
      "Color Coding Convention",
      "Chopping Board Color Codes",
      "kitchen standard",
      "Verify UK catering standard (Yellow=Cooked Meat, Red=Raw Meat, Blue=Raw Fish, White=Bakery/Dairy, Green=Salad/Fruit, Brown=Vegetables)",
      true
    );
  }

  // Check Two-Stage Cooling
  if (lower.includes("two-stage") || lower.includes("cooling")) {
    addRow(
      url,
      "Cooling Window",
      "Two-Stage Cooling vs UK 90-min rule",
      "procedure",
      "US FDA uses 2-stage (135°F to 70°F in 2 hrs, 70°F to 41°F in 4 hrs); UK FSA recommends cooling to <=8°C within 90 minutes",
      true
    );
  }
});

// Write to review/regulatory-values.csv
const csvContent = [
  "page,metric,value,unit,context,NEEDS HUMAN CHECK",
  ...rows.map(r => `"${r.page}","${r.metric}","${r.value}","${r.unit}","${r.context}","${r.needsHumanCheck}"`)
].join("\n");

fs.writeFileSync("review/regulatory-values.csv", csvContent, "utf8");
console.log(`Generated review/regulatory-values.csv with ${rows.length} rows.`);
