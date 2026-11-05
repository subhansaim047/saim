const { chromium } = require('playwright');
const path = require('path');

const brainDir = 'C:\\Users\\subhan\\.gemini\\antigravity\\brain\\4f746af2-8096-428b-a0e5-b7e16c0031b4';

async function captureBurger() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
    hasTouch: true
  });
  const page = await context.newPage();

  const url = 'http://127.0.0.1:8080/hotbite/index.html';
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(3000);

  const el = await page.$('#oresto-burger-talking');
  if (el) {
    await el.screenshot({ path: path.join(brainDir, 'section_mobile_burger.png') });
    console.log('Saved section_mobile_burger.png');
  } else {
    console.log('Burger section not found');
  }

  await browser.close();
}

captureBurger();
