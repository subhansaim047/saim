const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const ARTIFACTS_DIR = "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4";

async function run() {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const pagesToTest = [
    { url: "http://localhost:3000/food-safety-templates", name: "catalog_hub" },
    { url: "http://localhost:3000/food-safety-templates/haccp-plan-builder", name: "haccp_plan" },
    { url: "http://localhost:3000/food-safety-templates/recipe-calculator", name: "recipe_calc" },
    { url: "http://localhost:3000/food-safety-templates/food-cost-calculator", name: "food_cost" },
    { url: "http://localhost:3000/food-safety-templates/allergy-matrix", name: "allergen_matrix" },
    { url: "http://localhost:3000/food-safety-templates/food-safety-quiz", name: "safety_quiz" },
    { url: "http://localhost:3000/food-safety-templates/restaurant-cleaning-checklist", name: "digital_checklist" }
  ];

  console.log("=== STARTING PLAYWRIGHT VERIFICATION ===");

  for (const item of pagesToTest) {
    console.log(`\nNavigating to ${item.url}...`);
    await page.goto(item.url, { waitUntil: "networkidle" });

    // Check 1: Ensure no "Download Free PDF" buttons exist
    const downloadButtons = await page.$$eval("button, a", (els) =>
      els
        .map((e) => e.textContent ? e.textContent.trim() : "")
        .filter((t) => /download.*pdf/i.test(t))
    );

    if (downloadButtons.length > 0) {
      console.error(`FAIL: Found download PDF button on ${item.name}:`, downloadButtons);
    } else {
      console.log(`PASS: No Download PDF button on ${item.name}`);
    }

    // Check 2: Verify Print button exists (except catalog hub which has cards)
    if (item.name !== "catalog_hub") {
      const printBtns = await page.$$eval("button", els =>
        els.map(e => e.innerText ? e.innerText.trim() : "").filter(t => /print/i.test(t))
      );
      if (printBtns.length > 0) {
        console.log(`PASS: Print button present on ${item.name} -> "${printBtns.join('", "')}"`);
      } else {
        console.error(`FAIL: Print button not found on ${item.name}`);
      }
    }

    // Check 3: Capture Screen View Screenshot
    const screenShotPath = path.join(ARTIFACTS_DIR, `screen_${item.name}.png`);
    await page.screenshot({ path: screenShotPath, fullPage: false });
    console.log(`Saved screen screenshot: ${screenShotPath}`);

    // Check 4: Emulate Print Media and capture print preview
    await page.emulateMedia({ media: "print" });
    const printShotPath = path.join(ARTIFACTS_DIR, `print_${item.name}.png`);
    await page.screenshot({ path: printShotPath, fullPage: true });
    console.log(`Saved PRINT screenshot: ${printShotPath}`);

    // Revert media
    await page.emulateMedia({ media: null });
  }

  await browser.close();
  console.log("\n=== PLAYWRIGHT VERIFICATION COMPLETE ===");
}

run().catch((err) => {
  console.error("Verification failed with error:", err);
  process.exit(1);
});
