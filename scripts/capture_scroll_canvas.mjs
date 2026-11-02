import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:3010...");
  try {
    await page.goto("http://localhost:3010", { waitUntil: "networkidle", timeout: 35000 });
  } catch (e) {
    console.log("Networkidle timeout, continuing...");
  }

  await page.waitForTimeout(2500);

  // 1. Capture Top (Hero - Frame 0)
  await page.screenshot({
    path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/scroll_step_0_hero.png"
  });
  console.log("Captured scroll_step_0_hero.png");

  // 2. Scroll to 25% (About & Benefits)
  await page.evaluate(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: max * 0.25, behavior: "instant" });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/scroll_step_1_benefits.png"
  });
  console.log("Captured scroll_step_1_benefits.png");

  // 3. Scroll to 50% (Tools & Process)
  await page.evaluate(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: max * 0.50, behavior: "instant" });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/scroll_step_2_tools.png"
  });
  console.log("Captured scroll_step_2_tools.png");

  // 4. Scroll to 80% (Pricing & Calculator)
  await page.evaluate(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: max * 0.80, behavior: "instant" });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/scroll_step_3_pricing.png"
  });
  console.log("Captured scroll_step_3_pricing.png");

  await browser.close();
  console.log("All scroll steps captured successfully!");
}

main().catch(err => {
  console.error("Error capturing scroll steps:", err);
  process.exit(1);
});
