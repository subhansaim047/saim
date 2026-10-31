import { chromium } from "playwright";

const testUrls = [
  "https://www.saimdev.site/",
  "https://www.saimdev.site/services",
  "https://www.saimdev.site/services/takeaway-web-design",
  "https://www.saimdev.site/nextjs-developer-uk",
  "https://www.saimdev.site/demos",
  "https://www.saimdev.site/burger-garage",
  "https://www.saimdev.site/tools",
  "https://www.saimdev.site/tools/ppds-label-generator",
  "https://www.saimdev.site/tools/food-cost-calculator",
  "https://www.saimdev.site/food-safety-templates/freezer-temperature-chart",
  "https://www.saimdev.site/blogs",
  "https://www.saimdev.site/blog/why-small-business-needs-website",
  "https://www.saimdev.site/terms"
];

async function measurePage(browser, url, isMobile) {
  const context = await browser.newContext({
    viewport: isMobile ? { width: 375, height: 812 } : { width: 1920, height: 1080 },
    userAgent: isMobile
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1"
      : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    isMobile: isMobile,
    hasTouch: isMobile
  });

  const page = await context.newPage();

  // Inject CWV observers
  await page.addInitScript(() => {
    window.__cwv = { lcp: 0, cls: 0, fcp: 0 };
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      for (const entry of entries) {
        if (!entry.hadRecentInput) {
          window.__cwv.cls += entry.value;
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });

    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        window.__cwv.lcp = lastEntry.startTime;
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstPaint = entries.find(e => e.name === 'first-contentful-paint');
      if (firstPaint) {
        window.__cwv.fcp = firstPaint.startTime;
      }
    }).observe({ type: 'paint', buffered: true });
  });

  const startTime = Date.now();
  let status = 0;
  try {
    const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    status = res ? res.status() : 0;
    await page.waitForTimeout(1000); // Allow LCP / CLS to settle
  } catch (err) {
    status = 500;
  }
  const totalDuration = Date.now() - startTime;

  const metrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0];
    return {
      ttfb: nav ? nav.responseStart - nav.requestStart : 0,
      fcp: window.__cwv.fcp || (nav ? nav.domContentLoadedEventEnd - nav.startTime : 0),
      lcp: window.__cwv.lcp || window.__cwv.fcp || 0,
      cls: window.__cwv.cls || 0,
      domInteractive: nav ? nav.domInteractive : 0
    };
  });

  await context.close();
  return { status, ...metrics, totalDuration };
}

async function run() {
  console.log("==================================================");
  console.log("   CORE WEB VITALS & SPEED AUDIT (SAIMDEV.SITE)   ");
  console.log("==================================================\n");

  const browser = await chromium.launch({ headless: true });

  console.log("Testing on Mobile (375x812) and Desktop (1920x1080)...\n");
  console.log(
    "URL".padEnd(45) +
    "Device".padEnd(10) +
    "Status".padEnd(8) +
    "TTFB".padEnd(10) +
    "FCP".padEnd(10) +
    "LCP".padEnd(10) +
    "CLS".padEnd(8) +
    "Total"
  );
  console.log("-".repeat(105));

  for (const url of testUrls) {
    const shortUrl = url.replace("https://www.saimdev.site", "") || "/";

    // Desktop run
    const dMetrics = await measurePage(browser, url, false);
    console.log(
      shortUrl.padEnd(45) +
      "Desktop".padEnd(10) +
      String(dMetrics.status).padEnd(8) +
      `${dMetrics.ttfb.toFixed(0)}ms`.padEnd(10) +
      `${(dMetrics.fcp / 1000).toFixed(2)}s`.padEnd(10) +
      `${(dMetrics.lcp / 1000).toFixed(2)}s`.padEnd(10) +
      dMetrics.cls.toFixed(3).padEnd(8) +
      `${dMetrics.totalDuration}ms`
    );

    // Mobile run
    const mMetrics = await measurePage(browser, url, true);
    console.log(
      shortUrl.padEnd(45) +
      "Mobile".padEnd(10) +
      String(mMetrics.status).padEnd(8) +
      `${mMetrics.ttfb.toFixed(0)}ms`.padEnd(10) +
      `${(mMetrics.fcp / 1000).toFixed(2)}s`.padEnd(10) +
      `${(mMetrics.lcp / 1000).toFixed(2)}s`.padEnd(10) +
      mMetrics.cls.toFixed(3).padEnd(8) +
      `${mMetrics.totalDuration}ms`
    );
  }

  await browser.close();
  console.log("\nAudit complete!");
}

run().catch(console.error);
