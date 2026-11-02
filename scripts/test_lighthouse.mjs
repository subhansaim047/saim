import lighthouse from 'lighthouse';
import { chromium } from 'playwright';

async function test() {
  console.log("Launching Chromium via Playwright...");
  const browser = await chromium.launch({
    headless: true,
    args: ['--remote-debugging-port=9222']
  });

  try {
    console.log("Running desktop lighthouse test on https://www.saimdev.site...");
    const runnerResult = await lighthouse('https://www.saimdev.site', {
      port: 9222,
      output: 'json',
      logLevel: 'error',
    }, {
      extends: 'lighthouse:default',
      settings: {
        formFactor: 'desktop',
        screenEmulation: { disabled: true }
      }
    });

    const report = runnerResult.lhr;
    console.log("Performance:", report.categories.performance.score * 100);
    console.log("Accessibility:", report.categories.accessibility.score * 100);
    console.log("Best Practices:", report.categories['best-practices'].score * 100);
    console.log("SEO:", report.categories.seo.score * 100);
    console.log("FCP:", report.audits['first-contentful-paint'].numericValue, "ms");
    console.log("LCP:", report.audits['largest-contentful-paint'].numericValue, "ms");
    console.log("TBT:", report.audits['total-blocking-time'].numericValue, "ms");
    console.log("CLS:", report.audits['cumulative-layout-shift'].numericValue);
  } finally {
    await browser.close();
  }
}

test().catch(err => {
  console.error("Lighthouse test error:", err);
  process.exit(1);
});
