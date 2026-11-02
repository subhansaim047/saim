import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function capture() {
  const outputDir = 'audit/homepage/screenshots';
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch();

  // Desktop Page
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  // Mobile Page
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });

  const routes = [
    { name: 'homepage', url: 'http://localhost:3009/' },
    { name: 'pricing', url: 'http://localhost:3009/pricing' },
    { name: 'process', url: 'http://localhost:3009/process' },
    { name: 'custom_web_apps', url: 'http://localhost:3009/services/custom-web-apps' },
    { name: 'ecommerce_shopify', url: 'http://localhost:3009/services/ecommerce-shopify' },
  ];

  for (const r of routes) {
    console.log(`Capturing ${r.name}...`);
    try {
      await desktopPage.goto(r.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await desktopPage.waitForTimeout(1500);
      await desktopPage.screenshot({
        path: path.join(outputDir, `${r.name}_desktop.png`),
        fullPage: false
      });

      await mobilePage.goto(r.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await mobilePage.waitForTimeout(1500);
      await mobilePage.screenshot({
        path: path.join(outputDir, `${r.name}_mobile.png`),
        fullPage: false
      });
      console.log(`Saved ${r.name} desktop & mobile screenshots.`);
    } catch (err) {
      console.warn(`Failed capturing ${r.name}:`, err.message);
    }
  }

  // Also capture the benefits section specifically
  try {
    await desktopPage.goto('http://localhost:3009/', { waitUntil: 'domcontentloaded' });
    await desktopPage.waitForTimeout(1500);
    const benefitsEl = await desktopPage.locator('#benefits');
    if (benefitsEl) {
      await benefitsEl.screenshot({
        path: path.join(outputDir, 'benefits_section_desktop.png')
      });
    }

    await mobilePage.goto('http://localhost:3009/', { waitUntil: 'domcontentloaded' });
    await mobilePage.waitForTimeout(1500);
    const benefitsMob = await mobilePage.locator('#benefits');
    if (benefitsMob) {
      await benefitsMob.screenshot({
        path: path.join(outputDir, 'benefits_section_mobile.png')
      });
    }
    console.log('Saved specific benefits section screenshots.');
  } catch (e) {
    console.warn('Benefits capture error:', e.message);
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Fatal capture error:', err);
});
