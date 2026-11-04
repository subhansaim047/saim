import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  
  // 1. Live site
  await page.goto('https://www.thejacketmaker.pk/products/ionic-black-leather-jacket', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const liveThumbsEl = await page.$('.thumbnails');
  if (liveThumbsEl) {
    await liveThumbsEl.screenshot({ path: 'audit/live_thumbs_close.png' });
    console.log('Saved audit/live_thumbs_close.png');
  }

  // 2. Local site
  await page.goto('http://localhost:3000/thejacketmaker/products/ionic-black-leather-jacket/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const localThumbsEl = await page.$('.thumbnails');
  if (localThumbsEl) {
    await localThumbsEl.screenshot({ path: 'audit/local_thumbs_close.png' });
    console.log('Saved audit/local_thumbs_close.png');
  }

  await browser.close();
}

main().catch(console.error);
