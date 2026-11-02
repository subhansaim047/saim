import { chromium } from "playwright";

async function measure() {
  console.log("Launching headless browser to test https://www.saimdev.site real load performance...\n");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const startTime = Date.now();
  const response = await page.goto("https://www.saimdev.site", { waitUntil: "networkidle" });
  const totalDuration = Date.now() - startTime;

  const performanceTiming = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0];
    const paint = performance.getEntriesByType("paint");
    const fcp = paint.find(p => p.name === "first-contentful-paint");
    return {
      dnsTime: nav ? nav.domainLookupEnd - nav.domainLookupStart : null,
      tcpTime: nav ? nav.connectEnd - nav.connectStart : null,
      ttfb: nav ? nav.responseStart - nav.requestStart : null,
      downloadTime: nav ? nav.responseEnd - nav.responseStart : null,
      domInteractive: nav ? nav.domInteractive : null,
      domContentLoaded: nav ? nav.domContentLoadedEventEnd - nav.startTime : null,
      loadEvent: nav ? nav.loadEventEnd - nav.startTime : null,
      fcp: fcp ? fcp.startTime : null,
    };
  });

  console.log("=== BROWSER REAL PERFORMANCE METRICS ===");
  console.log(`HTTP Status:           ${response.status()}`);
  console.log(`DNS Lookup:            ${performanceTiming.dnsTime?.toFixed(1)} ms`);
  console.log(`TCP Connect:           ${performanceTiming.tcpTime?.toFixed(1)} ms`);
  console.log(`Time to First Byte:    ${performanceTiming.ttfb?.toFixed(1)} ms`);
  console.log(`HTML Download:         ${performanceTiming.downloadTime?.toFixed(1)} ms`);
  console.log(`First Contentful Paint:${performanceTiming.fcp?.toFixed(1)} ms (${(performanceTiming.fcp / 1000).toFixed(2)}s)`);
  console.log(`DOM Content Loaded:    ${performanceTiming.domContentLoaded?.toFixed(1)} ms (${(performanceTiming.domContentLoaded / 1000).toFixed(2)}s)`);
  console.log(`Total Network Idle:    ${totalDuration} ms (${(totalDuration / 1000).toFixed(2)}s)`);

  if (performanceTiming.fcp < 1000) {
    console.log("\n✅ OK: Website visually renders (FCP) under 1 second!");
  } else {
    console.log("\n⚠️ Over 1 second");
  }

  await browser.close();
}

measure().catch(console.error);
