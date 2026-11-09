const { chromium } = require("playwright");
const path = require("path");

const ARTIFACT_DIR = "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4";

(async () => {
  console.log("=== VERIFYING ELITE MOBILE DETAILING SITE ===");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Home Hero
  await page.goto("http://localhost:3008/demos/woshico/index.html", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "elite_hero_desktop.png") });
  console.log("Captured elite_hero_desktop.png");

  // 2. Services Section
  const servicesSec = await page.$(".static-style-one-section");
  if (servicesSec) {
    await servicesSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, "elite_services_section.png") });
    console.log("Captured elite_services_section.png");
  }

  // 3. Pricing Section
  const pricingSec = await page.$(".elite-pricing-section");
  if (pricingSec) {
    await pricingSec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, "elite_pricing_section.png") });
    console.log("Captured elite_pricing_section.png");
  }

  // 4. Pricing Subpage
  await page.goto("http://localhost:3008/demos/woshico/pricing-plan.html", { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollBy(0, 450));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "elite_pricing_subpage.png") });
  console.log("Captured elite_pricing_subpage.png");

  // 5. Contact Subpage
  await page.goto("http://localhost:3008/demos/woshico/contact.html", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "elite_contact_subpage.png") });
  console.log("Captured elite_contact_subpage.png");

  // 6. Mobile 375px Check
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3008/demos/woshico/index.html", { waitUntil: "networkidle" });
  const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientW = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`Mobile Check: scrollWidth = ${scrollW}, clientWidth = ${clientW}, Overflow = ${scrollW > clientW ? "YES" : "NO"}`);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "elite_mobile_375.png") });
  console.log("Captured elite_mobile_375.png");

  await browser.close();
  console.log("=== ALL VERIFICATION CHECKS COMPLETED! ===");
})();
