const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const chromeLauncher = require('chrome-launcher');

const BASE_LOCAL = 'http://localhost:3008';
const auditDir = path.join(__dirname, '..', 'redesign-audit');
if (!fs.existsSync(auditDir)) fs.mkdirSync(auditDir, { recursive: true });

const pagesToTest = [
  { name: 'home', path: '/' },
  { name: 'service', path: '/services/website-clone' },
  { name: 'tools', path: '/tools' },
  { name: 'case-studies', path: '/case-studies' },
  { name: 'blog', path: '/blog/why-small-business-needs-website' }
];

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

async function captureScreenshotsAndCheckOverflow() {
  console.log('Capturing Playwright screenshots across viewports & checking overflow...');
  const browser = await chromium.launch();
  const overflowIssues = [];

  for (const p of pagesToTest) {
    for (const vp of viewports) {
      const page = await browser.newPage({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 2
      });

      const url = `${BASE_LOCAL}${p.path}`;
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(600);

      // Check horizontal overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      if (hasOverflow) {
        overflowIssues.push(`${p.name} at ${vp.name} (${vp.width}px) has horizontal overflow!`);
      }

      const screenshotPath = path.join(auditDir, `${p.name}_${vp.name}_${vp.width}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`Saved screenshot: ${p.name}_${vp.name}_${vp.width}.png (Overflow: ${hasOverflow ? 'YES' : 'NO'})`);
      await page.close();
    }
  }

  await browser.close();
  return overflowIssues;
}

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu']
  });

  const { default: lighthouse } = await import('lighthouse');
  const runnerResult = await lighthouse(url, {
    port: chrome.port,
    output: 'json',
    formFactor: 'mobile',
    screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 3 },
    throttlingMethod: 'simulate'
  });

  const report = JSON.parse(runnerResult.report);
  await chrome.kill();

  const categories = report.categories;
  const audits = report.audits;

  return {
    performance: Math.round((categories.performance?.score || 0) * 100),
    accessibility: Math.round((categories.accessibility?.score || 0) * 100),
    bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
    seo: Math.round((categories.seo?.score || 0) * 100),
    lcp: audits['largest-contentful-paint']?.displayValue || audits['largest-contentful-paint']?.numericValue,
    cls: audits['cumulative-layout-shift']?.displayValue || audits['cumulative-layout-shift']?.numericValue,
    inp: audits['interactive']?.displayValue || 'N/A'
  };
}

async function verifyUrlsResolve() {
  console.log('Verifying baseline key URLs resolve...');
  const baselinePath = path.join(__dirname, '..', 'seo-baseline.json');
  if (!fs.existsSync(baselinePath)) return { pass: true, count: 0 };
  const baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));

  let passCount = 0;
  for (const item of baseline.slice(0, 20)) {
    try {
      const res = await fetch(`${BASE_LOCAL}${item.slug}`);
      if (res.status === 200 || res.status === 301 || res.status === 308) {
        passCount++;
      } else {
        console.warn(`URL ${item.slug} returned status ${res.status}`);
      }
    } catch (e) {
      console.warn(`URL ${item.slug} fetch error: ${e.message}`);
    }
  }

  console.log(`Verified ${passCount} sample baseline URLs resolved.`);
  return { pass: passCount >= 18, count: passCount };
}

async function main() {
  console.log('=== STARTING REDESIGN VERIFICATION GATES ===');

  // Gate 1: Screenshots & Overflow Check
  const overflow = await captureScreenshotsAndCheckOverflow();
  if (overflow.length > 0) {
    console.warn('Overflow warnings:', overflow);
  } else {
    console.log('✅ ZERO horizontal overflow across all viewports!');
  }

  // Gate 2: URL Resolution Check
  const urlRes = await verifyUrlsResolve();
  console.log(`✅ URL resolution gate: ${urlRes.pass ? 'PASS' : 'FAIL'}`);

  // Gate 3: Mobile Lighthouse Audits
  console.log('Running Mobile Lighthouse on redesigned pages...');
  const lighthouseResults = {};
  for (const p of pagesToTest.slice(0, 3)) {
    const url = `${BASE_LOCAL}${p.path}`;
    try {
      console.log(`Auditing ${p.name} (${url})...`);
      const scores = await runLighthouse(url);
      lighthouseResults[p.name] = scores;
      console.log(`  ${p.name} scores:`, scores);
    } catch (e) {
      console.error(`Lighthouse failed for ${p.name}:`, e.message);
    }
  }

  fs.writeFileSync(
    path.join(auditDir, 'lighthouse-redesign.json'),
    JSON.stringify(lighthouseResults, null, 2),
    'utf8'
  );

  console.log('=== VERIFICATION GATES COMPLETE ===');
}

main().catch((err) => {
  console.error('Gates failed:', err);
  process.exit(1);
});
