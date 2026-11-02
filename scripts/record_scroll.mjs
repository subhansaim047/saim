import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function recordLiveScroll() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log("Navigating to http://localhost:3016...");
  await page.goto("http://localhost:3016", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  const outDir = path.resolve("C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/scroll_user_verified");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const scrollDepths = [0, 2000, 5000, 8500, 11500, 14000];

  for (let i = 0; i < scrollDepths.length; i++) {
    const y = scrollDepths[i];
    console.log(`Scrolling to y = ${y}...`);

    await page.evaluate((targetY) => {
      if (window.__lenis) {
        window.__lenis.scrollTo(targetY, { immediate: true });
      } else {
        window.scrollTo(0, targetY);
      }
    }, y);

    await page.waitForTimeout(400);

    const canvasData = await page.evaluate(() => {
      const canvas = document.querySelector("canvas");
      if (!canvas) return null;
      return canvas.toDataURL("image/jpeg", 0.85);
    });

    if (canvasData) {
      const base64Data = canvasData.replace(/^data:image\/jpeg;base64,/, "");
      const filePath = path.join(outDir, `canvas_scroll_${y}px.jpg`);
      fs.writeFileSync(filePath, base64Data, "base64");
      console.log(`Saved canvas at ${y}px`);
    }

    await page.screenshot({ path: path.join(outDir, `page_scroll_${y}px.jpg`), quality: 80, type: "jpeg" });
  }

  await browser.close();
  console.log("Recorded all scroll steps with user frames!");
}

recordLiveScroll().catch(console.error);
