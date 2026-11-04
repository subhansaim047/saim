const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8089;
const PUBLIC_DIR = path.resolve('public');

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  let filePath = path.join(PUBLIC_DIR, reqPath);
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  const mime = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
  }[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': mime });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto(`http://localhost:${PORT}/thejacketmaker/index.html`, { waitUntil: 'domcontentloaded' });
  
  const heroTest = await page.evaluate(() => {
    const heroNext = document.querySelector('.slideshow .slick-next');
    const heroPrev = document.querySelector('.slideshow .slick-prev');
    const slides = Array.from(document.querySelectorAll('.slideshow .slide'));
    
    // Check initial active slide
    const initialSlide = document.querySelector('.slideshow .slick-current');
    const initialTitle = initialSlide ? initialSlide.querySelector('h2, .overlay-title, .rimage-outer-wrapper')?.innerText || initialSlide.className : 'none';
    
    heroNext.click();
    
    const afterNextSlide = document.querySelector('.slideshow .slick-current');
    const afterTitle = afterNextSlide ? afterNextSlide.querySelector('h2, .overlay-title, .rimage-outer-wrapper')?.innerText || afterNextSlide.className : 'none';
    
    return {
      slidesCount: slides.length,
      initialTitle,
      afterTitle,
      hasMoved: initialSlide !== afterNextSlide
    };
  });
  
  console.log('Hero slider test:', heroTest);
  
  await browser.close();
  server.close();
  process.exit(0);
});
