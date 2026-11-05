const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PUBLIC_DIR = path.join(__dirname, '../public');
const ARTIFACT_DIR = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';

async function run() {
  const port = 4570;
  const server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (!path.extname(reqPath)) reqPath = reqPath.replace(/\/$/, '') + '/index.html';
    const fullPath = path.join(PUBLIC_DIR, reqPath);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      const m = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
      res.writeHead(200, { 'Content-Type': m[ext] || 'application/octet-stream' });
      fs.createReadStream(fullPath).pipe(res);
    } else {
      res.writeHead(404); res.end();
    }
  });
  await new Promise(r => server.listen(port, r));
  const browser = await chromium.launch({ headless: true });
  try {
    const mPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mPage.route('**/*', (route) => {
      const url = route.request().url();
      const type = route.request().resourceType();
      if (!url.startsWith(`http://localhost:${port}`) && (type === 'script' || type === 'xhr' || type === 'fetch')) {
        return route.abort();
      }
      return route.continue();
    });
    await mPage.goto(`http://localhost:${port}/hq-leathercon/products/aaron-brown-leather-bomber-jacket/index.html`, { waitUntil: 'domcontentloaded' });
    await mPage.waitForTimeout(800);
    await mPage.screenshot({ path: path.join(ARTIFACT_DIR, 'audit_proof_mobile_product_aaron_brown.png') });
    console.log('Captured mobile product screenshot in <2s!');
  } finally {
    await browser.close();
    server.close();
  }
}
run();
