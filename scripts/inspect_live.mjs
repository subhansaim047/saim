import { chromium } from "playwright";

async function inspectLive() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const failedRequests = [];
  page.on("requestfailed", req => failedRequests.push({ url: req.url(), failure: req.failure() }));
  page.on("console", msg => console.log("LIVE LOG:", msg.text()));

  console.log("Navigating to https://www.saimdev.site ...");
  await page.goto("https://www.saimdev.site", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  console.log("Failed requests count:", failedRequests.length);
  if (failedRequests.length > 0) {
    console.log("First 5 failed requests:", failedRequests.slice(0, 5));
  }

  // Check if frames loaded on live site:
  const frame0Status = await page.evaluate(async () => {
    try {
      const res = await fetch("/scroll-frames/frame_000.webp");
      const res50 = await fetch("/scroll-frames/frame_050.webp");
      return {
        frame0_status: res.status,
        frame0_type: res.headers.get("content-type"),
        frame50_status: res50.status,
        frame50_type: res50.headers.get("content-type"),
      };
    } catch (e) {
      return { error: e.message };
    }
  });
  console.log("Frame fetch status from live site:", frame0Status);

  // Check canvas state
  const canvasDetails = await page.evaluate(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return { error: "No canvas found!" };
    const ctx = canvas.getContext("2d");
    const d0 = ctx ? Array.from(ctx.getImageData(100, 100, 1, 1).data) : null;
    return {
      canvasExists: true,
      width: canvas.width,
      height: canvas.height,
      pixelAt100: d0,
      lenisExists: !!window.__lenis,
      lenisProgress: window.__lenis?.progress,
    };
  });
  console.log("Canvas details on live site:", canvasDetails);

  await browser.close();
}

inspectLive().catch(console.error);
