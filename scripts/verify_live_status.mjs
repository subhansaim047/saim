import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  console.log('--- 1. Testing Live Homepage ---');
  try {
    await page.goto('https://www.saimdev.site', { waitUntil: 'domcontentloaded', timeout: 25000 });
    await page.waitForTimeout(2000);
    
    const eyebrow = await page.locator('text=CORE ADVANTAGES').count();
    console.log('Live Eyebrow CORE ADVANTAGES count:', eyebrow);
    
    const benefitsEl = await page.locator('#benefits');
    if (await benefitsEl.count() > 0) {
      await benefitsEl.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/live_benefits_after_deploy.png' });
      console.log('Saved live_benefits_after_deploy.png screenshot!');
    }
  } catch (e) {
    console.warn('Live homepage check error:', e.message);
  }

  console.log('\n--- 2. Testing New Live Routes ---');
  const testRoutes = [
    '/pricing',
    '/process',
    '/services/custom-web-apps',
    '/services/ecommerce-shopify',
    '/services/business-websites',
    '/services/wordpress-headless-cms',
    '/services/landing-pages-cro',
    '/services/website-speed-optimization'
  ];

  for (const r of testRoutes) {
    try {
      const res = await page.goto('https://www.saimdev.site' + r, { waitUntil: 'domcontentloaded', timeout: 15000 });
      const status = res ? res.status() : 'null';
      const title = await page.title();
      console.log(`Route ${r}: Status=${status}, Title="${title.slice(0, 45)}..."`);
    } catch (e) {
      console.warn(`Route ${r} error:`, e.message);
    }
  }

  console.log('\n--- 3. Testing Sitemap ---');
  try {
    const sitemapRes = await page.goto('https://www.saimdev.site/sitemap.xml', { waitUntil: 'domcontentloaded', timeout: 15000 });
    console.log(`Sitemap.xml: Status=${sitemapRes ? sitemapRes.status() : 'null'}`);
  } catch (e) {
    console.warn('Sitemap check error:', e.message);
  }

  await browser.close();
  console.log('\nAll live checks complete!');
}

main().catch(console.error);
