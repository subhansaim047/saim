import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const ARTIFACTS_DIR = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/scrollytelling_output';

if (!fs.existsSync(ARTIFACTS_DIR)) {
  fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });
}

async function verify() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:3017...');
  await page.goto('http://localhost:3017', { waitUntil: 'networkidle' });

  // Wait until preloader is dismissed
  console.log('Waiting for preloader to complete loading all 52 frames...');
  await page.waitForFunction(() => {
    const preloader = document.querySelector('[data-preloader="true"]');
    return !preloader;
  }, { timeout: 20000 });

  console.log('Preloader dismissed and 52 frames loaded!');
  await page.waitForTimeout(600);

  // Helper to scroll immediately
  async function scrollToProgress(progress) {
    await page.evaluate((p) => {
      const container = document.querySelector('div.h-\\[400vh\\]');
      const maxScroll = container ? container.offsetHeight - window.innerHeight : 3 * window.innerHeight;
      const targetY = p * maxScroll;
      if (window.__lenis) {
        window.__lenis.scrollTo(targetY, { immediate: true });
      } else {
        window.scrollTo(0, targetY);
      }
    }, progress);
    // Allow RAF lerp loop to interpolate frames smoothly
    await page.waitForTimeout(800);
  }

  // 0% Scroll: Hero Headline (Centered)
  await scrollToProgress(0);
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, '01_hero_0pct.png') });
  console.log('Saved 01_hero_0pct.png');

  // 30% Scroll: Feature 1 (Left aligned)
  await scrollToProgress(0.30);
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, '02_feature_30pct.png') });
  console.log('Saved 02_feature_30pct.png');

  // 60% Scroll: Feature 2 (Right aligned)
  await scrollToProgress(0.60);
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, '03_feature_60pct.png') });
  console.log('Saved 03_feature_60pct.png');

  // 90% Scroll: CTA (Centered)
  await scrollToProgress(0.90);
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, '04_cta_90pct.png') });
  console.log('Saved 04_cta_90pct.png');

  // Mobile viewport: 390x844 (iPhone 14/15)
  await page.setViewportSize({ width: 390, height: 844 });
  await scrollToProgress(0);
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, '05_mobile_0pct.png') });
  console.log('Saved 05_mobile_0pct.png');

  await scrollToProgress(0.60);
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, '06_mobile_60pct.png') });
  console.log('Saved 06_mobile_60pct.png');

  await browser.close();
  console.log('All verification snapshots captured successfully!');
}

verify().catch(console.error);
