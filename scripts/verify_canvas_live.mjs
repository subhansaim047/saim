import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:3011...");
  try {
    await page.goto("http://localhost:3011", { waitUntil: "networkidle", timeout: 35000 });
  } catch (e) {
    console.log("Timeout waiting for networkidle, proceeding...");
  }

  await page.waitForTimeout(3000);

  // Check canvas element in DOM
  const canvasInfo = await page.evaluate(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return { found: false };
    const rect = canvas.getBoundingClientRect();
    const style = window.getComputedStyle(canvas);
    return {
      found: true,
      width: canvas.width,
      height: canvas.height,
      rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
      opacity: style.opacity,
      display: style.display,
      visibility: style.visibility,
      zIndex: style.zIndex
    };
  });
  console.log("Canvas DOM Info:", JSON.stringify(canvasInfo, null, 2));

  // Screenshot 1: Hero View
  await page.screenshot({
    path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/live_hero_with_canvas.png"
  });
  console.log("Saved live_hero_with_canvas.png");

  // Screenshot 2: Scroll down to Benefits & Story
  await page.evaluate(() => {
    window.scrollTo({ top: 1200, behavior: "instant" });
  });
  await page.waitForTimeout(1000);

  await page.screenshot({
    path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/live_mid_with_canvas.png"
  });
  console.log("Saved live_mid_with_canvas.png");

  // Screenshot 3: Scroll to Pricing
  await page.evaluate(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: max * 0.75, behavior: "instant" });
  });
  await page.waitForTimeout(1000);

  await page.screenshot({
    path: "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/live_pricing_with_canvas.png"
  });
  console.log("Saved live_pricing_with_canvas.png");

  await browser.close();
  console.log("Verification finished successfully.");
}

main().catch(err => {
  console.error("Error in verify:", err);
  process.exit(1);
});
