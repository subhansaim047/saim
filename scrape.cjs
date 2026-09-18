const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  console.log('Going to URL...');
  // Go to the iframe URL directly
  await page.goto('https://3002-i16kamstun5qrrtme84mz.sandbox.webild.io', { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  console.log('Waiting 10 seconds for React to render...');
  await new Promise(r => setTimeout(r, 10000));
  
  console.log('Extracting HTML...');
  const html = await page.evaluate(() => document.documentElement.outerHTML);
  
  const dir = path.join(__dirname, 'public', 'webild-demo');
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(dir, 'index.html'), '<!DOCTYPE html>\n' + html);
  
  console.log('Scraped successfully to public/webild-demo/index.html');
  await browser.close();
  process.exit(0);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
