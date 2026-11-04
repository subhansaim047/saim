import { chromium } from 'playwright';
import fs from 'fs';

async function diff() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.thejacketmaker.pk/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  const liveMenu = await page.evaluate(() => {
    const el = document.querySelector('.navigation__item--with-mega-menu .navigation__tier-2-container');
    return el ? el.innerHTML : '';
  });

  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  const localMenu = await page.evaluate(() => {
    const el = document.querySelector('.navigation__item--with-mega-menu .navigation__tier-2-container');
    return el ? el.innerHTML : '';
  });

  fs.writeFileSync('audit/live_megamenu.html', liveMenu);
  fs.writeFileSync('audit/local_megamenu.html', localMenu);

  console.log("Saved live and local mega menu HTML to audit/");
  await browser.close();
}

diff().catch(console.error);
