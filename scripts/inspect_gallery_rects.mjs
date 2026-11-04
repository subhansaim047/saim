import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

function createServer() {
  const root = path.resolve('.');
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    let filePath = path.join(root, 'public', reqPath);
    if (!fs.existsSync(filePath)) filePath = path.join(root, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream', 'Access-Control-Allow-Origin': '*' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => server.listen(0, () => resolve(server)));
}

async function main() {
  const server = await createServer();
  const port = server.address().port;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(`http://localhost:${port}/thejacketmaker/products/ionic-black-leather-jacket/index.html`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const rects = await page.evaluate(() => {
    const g = document.querySelector('.gallery');
    const mi = document.querySelector('.main-image');
    const th = document.querySelector('.thumbnails');
    const firstThumb = document.querySelector('.thumbnails a');
    return {
      gallery: g ? g.getBoundingClientRect() : null,
      mainImage: mi ? mi.getBoundingClientRect() : null,
      thumbnails: th ? {
        rect: th.getBoundingClientRect(),
        display: window.getComputedStyle(th).display,
        visibility: window.getComputedStyle(th).visibility,
        childCount: th.children.length
      } : null,
      firstThumb: firstThumb ? {
        rect: firstThumb.getBoundingClientRect(),
        display: window.getComputedStyle(firstThumb).display,
        imgSrc: firstThumb.querySelector('img')?.src,
        imgWidth: firstThumb.querySelector('img')?.clientWidth,
        imgHeight: firstThumb.querySelector('img')?.clientHeight
      } : null
    };
  });

  console.log('DOM Rects & Styles:', JSON.stringify(rects, null, 2));

  // Screenshot the entire .product-detail section
  const pd = await page.$('.product-detail');
  if (pd) {
    await pd.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/product_detail_view.png' });
    console.log('Saved product_detail_view.png to brain directory');
  }

  await browser.close();
  server.close();
}

main().catch(console.error);
