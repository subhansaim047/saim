import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function verifyScrollCanvas() {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:3014...");
  await page.goto("http://localhost:3014", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  const outDir = path.resolve("C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4");

  // 1. Capture Hero at top (Frame 0)
  console.log("Capturing Hero top view...");
  await page.screenshot({ path: path.join(outDir, "verified_hero_clear.png") });

  const canvasInfo0 = await page.evaluate(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const pixel = ctx.getImageData(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 1, 1).data;
    return {
      width: canvas.width,
      height: canvas.height,
      centerPixel: Array.from(pixel),
      scrollY: window.scrollY,
      lenisProgress: window.__lenis ? window.__lenis.progress : null,
    };
  });
  console.log("Initial Canvas State at scroll 0:", canvasInfo0);

  // 2. Scroll to 25% (About / Benefits)
  console.log("Scrolling to 25%...");
  await page.evaluate(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(document.documentElement.scrollHeight * 0.25, { immediate: false, duration: 0.5 });
    } else {
      window.scrollTo(0, document.documentElement.scrollHeight * 0.25);
    }
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, "verified_scroll_25.png") });

  const canvasInfo25 = await page.evaluate(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    const pixel = ctx ? ctx.getImageData(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 1, 1).data : [];
    return {
      centerPixel: Array.from(pixel),
      scrollY: window.scrollY,
      lenisProgress: window.__lenis ? window.__lenis.progress : null,
    };
  });
  console.log("Canvas State at 25%:", canvasInfo25);

  // 3. Scroll to 60% (Pricing / Tech)
  console.log("Scrolling to 60%...");
  await page.evaluate(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(document.documentElement.scrollHeight * 0.60, { immediate: false, duration: 0.5 });
    } else {
      window.scrollTo(0, document.documentElement.scrollHeight * 0.60);
    }
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, "verified_scroll_60.png") });

  const canvasInfo60 = await page.evaluate(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    const pixel = ctx ? ctx.getImageData(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 1, 1).data : [];
    return {
      centerPixel: Array.from(pixel),
      scrollY: window.scrollY,
      lenisProgress: window.__lenis ? window.__lenis.progress : null,
    };
  });
  console.log("Canvas State at 60%:", canvasInfo60);

  // 4. Scroll to 90% (Contact / FAQ)
  console.log("Scrolling to 90%...");
  await page.evaluate(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(document.documentElement.scrollHeight * 0.90, { immediate: false, duration: 0.5 });
    } else {
      window.scrollTo(0, document.documentElement.scrollHeight * 0.90);
    }
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, "verified_scroll_90.png") });

  const canvasInfo90 = await page.evaluate(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    const pixel = ctx ? ctx.getImageData(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 1, 1).data : [];
    return {
      centerPixel: Array.from(pixel),
      scrollY: window.scrollY,
      lenisProgress: window.__lenis ? window.__lenis.progress : null,
    };
  });
  console.log("Canvas State at 90%:", canvasInfo90);

  await browser.close();
  console.log("Verification complete! All screenshots saved.");
}

verifyScrollCanvas().catch(console.error);
