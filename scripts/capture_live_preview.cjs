const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const ARTIFACT_DIR = "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4";
const TARGET_URL = process.env.PREVIEW_URL || "http://localhost:3008";

async function run() {
  console.log(`Starting visual audit against ${TARGET_URL}...`);
  const browser = await chromium.launch({ headless: true });
  
  // 1. Desktop 1440px Viewport
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(1500);

    // Check horizontal scroll / overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`[Desktop 1440] scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth}, overflow: ${scrollWidth > clientWidth}`);

    // Capture sections
    await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_hero_desktop.png") });
    console.log("Captured rh_redesign_hero_desktop.png");

    // Scroll to Why Us
    const whyUs = page.locator("#why-us");
    if (await whyUs.count() > 0) {
      await whyUs.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_whyus_desktop.png") });
      console.log("Captured rh_redesign_whyus_desktop.png");
    }

    // Scroll to Case Studies
    const cases = page.locator("#case-studies");
    if (await cases.count() > 0) {
      await cases.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_cases_desktop.png") });
      console.log("Captured rh_redesign_cases_desktop.png");
    }

    // Scroll to Services
    const services = page.locator("#services");
    if (await services.count() > 0) {
      await services.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_services_desktop.png") });
      console.log("Captured rh_redesign_services_desktop.png");
    }

    // Scroll to Pricing
    const pricing = page.locator("#pricing");
    if (await pricing.count() > 0) {
      await pricing.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_pricing_desktop.png") });
      console.log("Captured rh_redesign_pricing_desktop.png");
    }

    // Scroll to About
    const about = page.locator("#about");
    if (await about.count() > 0) {
      await about.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_about_desktop.png") });
      console.log("Captured rh_redesign_about_desktop.png");
    }

    await page.close();
  }

  // 2. Tablet 768px Viewport
  {
    const page = await browser.newPage({ viewport: { width: 768, height: 1024 } });
    await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(1000);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`[Tablet 768] scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth}, overflow: ${scrollWidth > clientWidth}`);

    await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_hero_tablet.png") });
    console.log("Captured rh_redesign_hero_tablet.png");
    await page.close();
  }

  // 3. Mobile 375px Viewport
  {
    const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
    await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(1000);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`[Mobile 375] scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth}, overflow: ${scrollWidth > clientWidth}`);

    await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_hero_mobile.png") });
    console.log("Captured rh_redesign_hero_mobile.png");

    const cases = page.locator("#case-studies");
    if (await cases.count() > 0) {
      await cases.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_cases_mobile.png") });
      console.log("Captured rh_redesign_cases_mobile.png");
    }

    const pricing = page.locator("#pricing");
    if (await pricing.count() > 0) {
      await pricing.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "rh_redesign_pricing_mobile.png") });
      console.log("Captured rh_redesign_pricing_mobile.png");
    }

    await page.close();
  }

  await browser.close();
  console.log("Visual audit capture completed successfully!");
}

run().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
