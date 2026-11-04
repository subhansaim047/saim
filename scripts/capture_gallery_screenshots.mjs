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

  return new Promise((resolve) => {
    server.listen(0, () => resolve(server));
  });
}

async function capture() {
  const server = await createServer();
  const port = server.address().port;
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  
  // 1. Ionic Desktop
  await page.goto(`http://localhost:${port}/thejacketmaker/products/ionic-black-leather-jacket/index.html`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  const gallery = await page.$('.gallery');
  if (gallery) {
    await gallery.screenshot({ path: 'audit/gallery_ionic_initial.png' });
    console.log('Saved audit/gallery_ionic_initial.png');
  }

  // Click Watch Video
  const videoThumb = page.locator('.thumbnails a:has(.watchvideo), .thumbnails a.thumbnail--media-video').first();
  await videoThumb.click();
  await page.waitForTimeout(2500);

  if (gallery) {
    await gallery.screenshot({ path: 'audit/gallery_ionic_video_playing.png' });
    console.log('Saved audit/gallery_ionic_video_playing.png');
  }

  const vStatus = await page.evaluate(() => {
    const v = document.querySelector('.product-slideshow video');
    return v ? {
      paused: v.paused,
      currentTime: v.currentTime,
      duration: v.duration,
      src: v.currentSrc || v.src || v.querySelector('source')?.src
    } : null;
  });
  console.log('Ionic Video Status:', vStatus);

  // 2. Bliss Bomber Jacket
  await page.goto(`http://localhost:${port}/thejacketmaker/products/bliss-black-leather-bomber-jacket/index.html`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  const galleryBliss = await page.$('.gallery');
  if (galleryBliss) {
    await galleryBliss.screenshot({ path: 'audit/gallery_bliss_initial.png' });
    console.log('Saved audit/gallery_bliss_initial.png');
  }

  const videoThumbBliss = page.locator('.thumbnails a:has(.watchvideo), .thumbnails a.thumbnail--media-video').first();
  await videoThumbBliss.click();
  await page.waitForTimeout(2500);

  if (galleryBliss) {
    await galleryBliss.screenshot({ path: 'audit/gallery_bliss_video_playing.png' });
    console.log('Saved audit/gallery_bliss_video_playing.png');
  }

  const vStatusBliss = await page.evaluate(() => {
    const v = document.querySelector('.product-slideshow video');
    return v ? {
      paused: v.paused,
      currentTime: v.currentTime,
      duration: v.duration,
      src: v.currentSrc || v.src || v.querySelector('source')?.src
    } : null;
  });
  console.log('Bliss Video Status:', vStatusBliss);

  await browser.close();
  server.close();
}

capture().catch(console.error);
