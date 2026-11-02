import { chromium } from "playwright";
import fs from "fs";
import { spawn } from "child_process";

async function main() {
  console.log("Starting local production server on port 3009...");
  const server = spawn("npx", ["next", "start", "-p", "3009"], {
    cwd: process.cwd(),
    shell: true,
    stdio: "inherit"
  });

  // Give server 4s to bind
  await new Promise(r => setTimeout(r, 4000));

  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });

  try {
    fs.mkdirSync("audit/homepage/post_transformation", { recursive: true });

    // 1. Desktop Snapshot (1920x1080)
    console.log("Capturing Desktop 1920x1080...");
    const desktopContext = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    });
    const desktopPage = await desktopContext.newPage();
    
    const startTime = Date.now();
    await desktopPage.goto("http://localhost:3009", { waitUntil: "networkidle", timeout: 45000 });
    const loadTime = Date.now() - startTime;
    
    await desktopPage.waitForTimeout(1500);
    await desktopPage.screenshot({ path: "audit/homepage/post_transformation/screenshot_desktop_transformed.png", fullPage: true });
    console.log("Saved audit/homepage/post_transformation/screenshot_desktop_transformed.png");

    const html = await desktopPage.content();
    fs.writeFileSync("audit/homepage/post_transformation/transformed_homepage.html", html, "utf-8");
    console.log("Saved audit/homepage/post_transformation/transformed_homepage.html");

    // Performance metrics
    const timing = JSON.parse(await desktopPage.evaluate(() => JSON.stringify(window.performance.timing)));
    const paint = await desktopPage.evaluate(() => {
      return performance.getEntriesByType("paint").map(p => ({ name: p.name, startTime: Math.round(p.startTime) }));
    });

    // 2. Mobile Snapshot (390x844 iPhone 14)
    console.log("Capturing Mobile 390x844...");
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1"
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto("http://localhost:3009", { waitUntil: "networkidle", timeout: 45000 });
    await mobilePage.waitForTimeout(1500);
    await mobilePage.screenshot({ path: "audit/homepage/post_transformation/screenshot_mobile_transformed.png", fullPage: true });
    console.log("Saved audit/homepage/post_transformation/screenshot_mobile_transformed.png");

    const perfReport = {
      url: "http://localhost:3009",
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

    fs.writeFileSync("audit/homepage/post_transformation/performance_transformed.json", JSON.stringify(perfReport, null, 2));
    console.log("Saved audit/homepage/post_transformation/performance_transformed.json");
    console.log("SUCCESS!");
  } finally {
    await browser.close();
    server.kill();
    process.exit(0);
  }
}

main().catch(err => {
  console.error("Error capturing transformed homepage:", err);
  process.exit(1);
});
