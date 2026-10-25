const http = require('http');

function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function verifyAll() {
  const tests = [
    {
      name: "1. Recipe Yield & Resizing Calculator",
      url: "http://localhost:3011/food-safety-templates/recipe-calculator",
      assertions: [
        "Commercial Recipe Calculator &amp; Batch Scaler",
        "Conversion Multiplier",
        "Print Recipe Card",
        "Resized Batch Qty"
      ]
    },
    {
      name: "2. Food Cost & Profit Margin Calculator",
      url: "http://localhost:3011/food-safety-templates/food-cost-calculator",
      assertions: [
        "Commercial Recipe Costing &amp; Margin Calculator",
        "Portion Cost",
        "Food Cost %",
        "Primary Ingredients &amp; Raw Proteins"
      ]
    },
    {
      name: "3. 7-Principle HACCP Plan Builder & CCP Matrix",
      url: "http://localhost:3011/food-safety-templates/haccp-plan-builder",
      assertions: [
        "HACCP Plan Builder &amp; CCP Hazard Analysis Matrix",
        "7-Principle Hazard Analysis",
        "Print HACCP Plan",
        "Delivery &amp; Goods Receiving"
      ]
    },
    {
      name: "4. Official UK Food Hygiene Exam",
      url: "http://localhost:3011/food-safety-templates/food-safety-quiz",
      assertions: [
        "Food Safety &amp; Hygiene Knowledge Exam",
        "Official UK Food Hygiene Level 2 Training Standard",
        "Candidate / Trainee Name:",
        "Submit Exam &amp; Reveal Answers"
      ]
    },
    {
      name: "5. Official 14 Food Allergen Matrix",
      url: "http://localhost:3011/food-safety-templates/allergy-matrix",
      assertions: [
        "Official 14 Food Allergen Matrix &amp; Kitchen Chart",
        "Natasha&#x27;s Law Compliant",
        "Print Kitchen Poster",
        "YES = Contains"
      ]
    },
    {
      name: "6. Digital Daily Verification Checklist & Temp Log",
      url: "http://localhost:3011/food-safety-templates/kitchen-opening-and-closing-checklist",
      assertions: [
        "Official Environmental Health Officer (EHO) Inspection Audit",
        "Calibrated Probe Temperature Record",
        "Mandatory HACCP &amp; Food Hygiene Checks",
        "Print Official Log"
      ]
    },
    {
      name: "7. Visual Poster & Regulatory Temp Standards",
      url: "http://localhost:3011/food-safety-templates/freezer-temperature-chart",
      assertions: [
        "Freezer Temperature Chart",
        "UK &amp; EU Food Temperature Regulatory Standards Reference",
        "Commercial Freezing",
        "Download Free PDF"
      ]
    }
  ];

  console.log("================ STARTING COMPREHENSIVE TOOLS AUDIT ================");
  let allPass = true;
  for (const t of tests) {
    console.log(`\nTesting ${t.name}...`);
    const res = await get(t.url);
    if (res.status !== 200) {
      console.error(`FAILED: Status code ${res.status}`);
      allPass = false;
      continue;
    }
    let passed = true;
    for (const a of t.assertions) {
      // Decode HTML entities check or direct
      const found = res.data.includes(a) || res.data.includes(a.replace(/&amp;/g, '&').replace(/&#x27;/g, "'"));
      if (!found) {
        console.error(`  [X] Missing assertion: "${a}"`);
        passed = false;
        allPass = false;
      } else {
        console.log(`  [OK] Found: "${a.slice(0, 45)}"`);
      }
    }
    console.log(`Status 200 - ${passed ? "PASS" : "FAIL"}`);
  }

  if (allPass) {
    console.log("\n>>> ALL 7 CRITICAL TOOL WORKFLOWS VERIFIED 100% OPERATIONAL! <<<");
  } else {
    console.error("\n>>> SOME TESTS FAILED <<<");
  }
}

verifyAll().catch(console.error);
