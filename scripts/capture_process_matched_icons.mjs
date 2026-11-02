import { chromium } from "playwright";
import fs from "fs";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log("Navigating to http://localhost:3009/#kitchen-tools...");
  try {
    await page.goto("http://localhost:3009/#kitchen-tools", { waitUntil: "networkidle", timeout: 30000 });
  } catch (e) {
    console.log("Timeout waiting for networkidle, proceeding...");
  }

  await page.waitForTimeout(2000);

  // Capture Featured Tools Section
  const toolsSection = page.locator("#kitchen-tools");
  if (await toolsSection.count() > 0) {
    await toolsSection.screenshot({
      path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/featured_tools_process_matched.png"
    });
    console.log("Captured featured_tools_process_matched.png");
  }

  // Capture Process Section to verify the 100% match!
  const processSection = page.locator("#process");
  if (await processSection.count() > 0) {
    await processSection.screenshot({
      path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/process_section_live.png"
    });
    console.log("Captured process_section_live.png");
  }

  // Navigate to /tools
  console.log("Navigating to http://localhost:3009/tools...");
  try {
    await page.goto("http://localhost:3009/tools", { waitUntil: "networkidle", timeout: 30000 });
  } catch (e) {
    console.log("Proceeding...");
  }
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/tools_hub_process_matched.png",
    clip: { x: 0, y: 0, width: 1440, height: 800 }
  });
  console.log("Captured tools_hub_process_matched.png");

  await browser.close();
  console.log("All screenshots captured successfully.");
}

main().catch(err => {
  console.error("Error in capture:", err);
  process.exit(1);
});
