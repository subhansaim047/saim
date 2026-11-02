import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  page.on("console", msg => console.log("BROWSER CONSOLE:", msg.type(), msg.text()));
  page.on("pageerror", err => console.error("BROWSER PAGEERROR:", err.message));

  let loadedImages = 0;
  let failedImages = 0;
  page.on("response", res => {
    if (res.url().includes("scroll-frames")) {
      if (res.status() === 200) {
        loadedImages++;
      } else {
        failedImages++;
        console.error("FAILED FRAME REQUEST:", res.url(), res.status());
      }
    }
  });

  console.log("Navigating to http://localhost:3012...");
  await page.goto("http://localhost:3012", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);

  console.log(`Initial frame stats: ${loadedImages} loaded, ${failedImages} failed`);

  // Check what document scrollHeight and window.scrollY are
  const scrollInfo = await page.evaluate(() => {
    return {
      scrollY: window.scrollY,
      scrollTop: document.documentElement.scrollTop,
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight: document.documentElement.clientHeight,
      innerHeight: window.innerHeight,
      lenis: !!window.__lenis
    };
  });
  console.log("Scroll Info Initial:", scrollInfo);

  // Scroll down with mouse wheel simulation (since Lenis listens to wheel!)
  console.log("Simulating wheel scroll down 2000px...");
  await page.mouse.wheel(0, 1500);
  await page.waitForTimeout(1000);
  await page.mouse.wheel(0, 2000);
  await page.waitForTimeout(1500);

  const scrollInfoAfter = await page.evaluate(() => {
    return {
      scrollY: window.scrollY,
      scrollTop: document.documentElement.scrollTop,
      lenisScroll: window.__lenis?.scroll,
      lenisProgress: window.__lenis?.progress
    };
  });
  console.log("Scroll Info After Wheel:", scrollInfoAfter);
  console.log(`Total frame images loaded so far: ${loadedImages}, failed: ${failedImages}`);

  await browser.close();
}

main().catch(console.error);
