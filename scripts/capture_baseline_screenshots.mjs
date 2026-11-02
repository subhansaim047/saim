import { chromium } from "playwright";
import fs from "fs";

async function capture() {
  console.log("Launching browser for baseline snapshot...");
  const browser = await chromium.launch({ headless: true });
  
  // 1. Desktop Snapshot
  console.log("Capturing Desktop 1920x1080...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  });
  const desktopPage = await desktopContext.newPage();
  
  const startTime = Date.now();
  await desktopPage.goto("https://www.saimdev.site", { waitUntil: "networkidle", timeout: 45000 });
  const loadTime = Date.now() - startTime;
  
  // Wait 2s for animations to settle
  await desktopPage.waitForTimeout(2000);
  await desktopPage.screenshot({ path: "audit/homepage/baseline/screenshot_desktop_baseline.png", fullPage: true });
  console.log("Saved audit/homepage/baseline/screenshot_desktop_baseline.png");

  // Performance metrics
  const timing = JSON.parse(await desktopPage.evaluate(() => JSON.stringify(window.performance.timing)));
  const paint = await desktopPage.evaluate(() => {
    return performance.getEntriesByType("paint").map(p => ({ name: p.name, startTime: Math.round(p.startTime) }));
  });
  
  // 2. Mobile Snapshot
  console.log("Capturing Mobile 390x844 (iPhone 14)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1"
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("https://www.saimdev.site", { waitUntil: "networkidle", timeout: 45000 });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: "audit/homepage/baseline/screenshot_mobile_baseline.png", fullPage: true });
  console.log("Saved audit/homepage/baseline/screenshot_mobile_baseline.png");

  const perfReport = {
    url: "https://www.saimdev.site",
    timestamp: new Date().toISOString(),
    networkLoadTimeMs: loadTime,
    paintMetrics: paint,
    timing: {
      dnsMs: timing.domainLookupEnd - timing.domainLookupStart,
      connectMs: timing.connectEnd - timing.connectStart,
      responseMs: timing.responseEnd - timing.responseStart,
      domInteractiveMs: timing.domInteractive - timing.navigationStart,
      domContentLoadedMs: timing.domContentLoadedEventEnd - timing.navigationStart,
      loadEventEndMs: timing.loadEventEnd - timing.navigationStart
    }
  };

  fs.writeFileSync("audit/homepage/baseline/performance_baseline.json", JSON.stringify(perfReport, null, 2));
  console.log("Saved audit/homepage/baseline/performance_baseline.json");

  await browser.close();
  console.log("Baseline screenshots & metrics capture complete!");
}

capture().catch(err => {
  console.error("Capture error:", err);
  process.exit(1);
});
