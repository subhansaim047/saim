import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import fs from 'fs';

function median(values) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

async function runSingleAudit(url, formFactor = 'mobile') {
  console.log(`Launching Chrome for ${formFactor} audit on ${url}...`);
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu']
  });

  const options = {
    port: chrome.port,
    output: 'json',
    logLevel: 'error',
  };

  const config = formFactor === 'desktop'
    ? {
        extends: 'lighthouse:default',
        settings: {
          formFactor: 'desktop',
          screenEmulation: {
            mobile: false,
            width: 1350,
            height: 940,
            deviceScaleFactor: 1,
            disabled: false,
          },
          throttling: {
            rttMs: 40,
            throughputKbps: 10240,
            cpuSlowdownMultiplier: 1,
            requestLatencyMs: 0,
            downloadThroughputKbps: 0,
            uploadThroughputKbps: 0
          }
        }
      }
    : {
        extends: 'lighthouse:default',
        settings: {
          formFactor: 'mobile',
        }
      };

  try {
    const runnerResult = await lighthouse(url, options, config);
    const lhr = runnerResult.lhr;

    return {
      perfScore: Math.round(lhr.categories.performance.score * 100),
      a11yScore: Math.round(lhr.categories.accessibility.score * 100),
      bestPracticesScore: Math.round(lhr.categories['best-practices'].score * 100),
      seoScore: Math.round(lhr.categories.seo.score * 100),
      fcpMs: Math.round(lhr.audits['first-contentful-paint'].numericValue),
      lcpMs: Math.round(lhr.audits['largest-contentful-paint'].numericValue),
      tbtMs: Math.round(lhr.audits['total-blocking-time'].numericValue),
      cls: parseFloat(lhr.audits['cumulative-layout-shift'].numericValue.toFixed(3)),
    };
  } finally {
    await chrome.kill();
  }
}

async function runSuite(url, targetLabel) {
  console.log(`\n======================================================`);
  console.log(`RUNNING 3-RUN LIGHTHOUSE AUDIT FOR: ${targetLabel}`);
  console.log(`======================================================\n`);

  const results = {
    mobile: [],
    desktop: []
  };

  for (let i = 1; i <= 3; i++) {
    console.log(`\n--- Mobile Audit [Run ${i} / 3] ---`);
    const res = await runSingleAudit(url, 'mobile');
    console.log(`Run ${i} Mobile: Perf=${res.perfScore}, A11y=${res.a11yScore}, LCP=${res.lcpMs}ms, TBT=${res.tbtMs}ms, CLS=${res.cls}`);
    results.mobile.push(res);
  }

  for (let i = 1; i <= 3; i++) {
    console.log(`\n--- Desktop Audit [Run ${i} / 3] ---`);
    const res = await runSingleAudit(url, 'desktop');
    console.log(`Run ${i} Desktop: Perf=${res.perfScore}, A11y=${res.a11yScore}, LCP=${res.lcpMs}ms, TBT=${res.tbtMs}ms, CLS=${res.cls}`);
    results.desktop.push(res);
  }

  const computeMedianMetrics = (runs) => ({
    perfScore: median(runs.map(r => r.perfScore)),
    a11yScore: median(runs.map(r => r.a11yScore)),
    bestPracticesScore: median(runs.map(r => r.bestPracticesScore)),
    seoScore: median(runs.map(r => r.seoScore)),
    fcpMs: median(runs.map(r => r.fcpMs)),
    lcpMs: median(runs.map(r => r.lcpMs)),
    tbtMs: median(runs.map(r => r.tbtMs)),
    cls: parseFloat(median(runs.map(r => r.cls)).toFixed(3))
  });

  const medianMobile = computeMedianMetrics(results.mobile);
  const medianDesktop = computeMedianMetrics(results.desktop);

  return {
    runs: results,
    medianMobile,
    medianDesktop
  };
}

async function main() {
  const localUrl = "http://localhost:3009";
  const metrics = await runSuite(localUrl, "Transformed Optimized Homepage (Port 3009)");

  let csvContent = "";
  if (fs.existsSync("audit/homepage/performance.csv")) {
    csvContent = fs.readFileSync("audit/homepage/performance.csv", "utf-8");
  } else {
    csvContent = "Target,Device,Run,Performance,Accessibility,BestPractices,SEO,FCP_ms,LCP_ms,TBT_INP_ms,CLS\n";
  }

  // Append Transformed Mobile Runs
  metrics.runs.mobile.forEach((r, idx) => {
    csvContent += `TransformedHomepage,Mobile,Run${idx + 1},${r.perfScore},${r.a11yScore},${r.bestPracticesScore},${r.seoScore},${r.fcpMs},${r.lcpMs},${r.tbtMs},${r.cls}\n`;
  });
  csvContent += `TransformedHomepage,Mobile,MEDIAN,${metrics.medianMobile.perfScore},${metrics.medianMobile.a11yScore},${metrics.medianMobile.bestPracticesScore},${metrics.medianMobile.seoScore},${metrics.medianMobile.fcpMs},${metrics.medianMobile.lcpMs},${metrics.medianMobile.tbtMs},${metrics.medianMobile.cls}\n`;

  // Append Transformed Desktop Runs
  metrics.runs.desktop.forEach((r, idx) => {
    csvContent += `TransformedHomepage,Desktop,Run${idx + 1},${r.perfScore},${r.a11yScore},${r.bestPracticesScore},${r.seoScore},${r.fcpMs},${r.lcpMs},${r.tbtMs},${r.cls}\n`;
  });
  csvContent += `TransformedHomepage,Desktop,MEDIAN,${metrics.medianDesktop.perfScore},${metrics.medianDesktop.a11yScore},${metrics.medianDesktop.bestPracticesScore},${metrics.medianDesktop.seoScore},${metrics.medianDesktop.fcpMs},${metrics.medianDesktop.lcpMs},${metrics.medianDesktop.tbtMs},${metrics.medianDesktop.cls}\n`;

  fs.writeFileSync("audit/homepage/performance.csv", csvContent, "utf-8");
  console.log("\nSuccessfully updated audit/homepage/performance.csv with post-transformation medians!");

  console.log("\n=== POST-TRANSFORMATION MEDIAN SUMMARY ===");
  console.log("MOBILE MEDIAN:", JSON.stringify(metrics.medianMobile, null, 2));
  console.log("DESKTOP MEDIAN:", JSON.stringify(metrics.medianDesktop, null, 2));
}

main().catch(err => {
  console.error("Lighthouse Execution Error:", err);
  process.exit(1);
});
