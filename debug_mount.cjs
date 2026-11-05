const { chromium } = require('playwright');
const path = require('path');

async function debugMount() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err.message));

  const fileUrl = 'file:///' + path.resolve('public/hotbite/index.html').replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'load' });
  await page.waitForTimeout(2000);

  const res = await page.evaluate(() => {
    const menu = document.getElementById('Menu');
    const pizzaTpl = document.getElementById('oresto-pizza-template');
    const burgerTpl = document.getElementById('oresto-burger-template');
    const pizzaSec = document.getElementById('oresto-pizza-why-best');
    const burgerSec = document.getElementById('oresto-burger-section');
    return {
      hasMenu: !!menu,
      hasPizzaTpl: !!pizzaTpl,
      hasBurgerTpl: !!burgerTpl,
      hasPizzaSec: !!pizzaSec,
      hasBurgerSec: !!burgerSec,
      menuParent: menu ? menu.parentNode.tagName : null,
      scripts: Array.from(document.querySelectorAll('script')).map(s => s.src || s.id)
    };
  });

  console.log('DOM Evaluation:', res);
  await browser.close();
}

debugMount();
