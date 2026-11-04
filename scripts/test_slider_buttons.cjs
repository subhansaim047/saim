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
  
  // Test slider initialization logic in page context
  const testResult = await page.evaluate(() => {
    const $ = window.jQuery;
    
    // 1. Initialize or wire up Quotes & Logos Carousel
    const $quotes = $('.quotes-carousel');
    const $logos = $('.logos-carousel');
    
    // Check if slick needs re-init or custom sliding
    let quoteIndex = 5; // started at 5
    const totalQuotes = 14;
    
    // Let's test a robust slider controller
    function goToSlide(idx) {
      if (idx < 0) idx = totalQuotes - 1;
      if (idx >= totalQuotes) idx = 0;
      quoteIndex = idx;
      
      // Update quote slides visibility / classes
      const quoteSlides = document.querySelectorAll('.quotes-carousel .logo-list-content');
      quoteSlides.forEach(slide => {
        const sIdx = parseInt(slide.getAttribute('data-slick-index'), 10);
        if (sIdx === quoteIndex) {
          slide.classList.add('slick-current', 'slick-active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('slick-current', 'slick-active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });
      
      // Smoothly translate the track
      const qTrack = document.querySelector('.quotes-carousel .slick-track');
      const containerWidth = document.querySelector('.quotes-carousel .slick-list').clientWidth || 1360;
      if (qTrack) {
        // slick track has a clone at -1, so index 0 is at offset -containerWidth, index 1 is at -2*containerWidth, etc.
        const offset = -(quoteIndex + 1) * containerWidth;
        qTrack.style.transition = 'transform 400ms ease';
        qTrack.style.transform = `translate3d(${offset}px, 0px, 0px)`;
      }
      
      // Update logos carousel
      const logoSlides = document.querySelectorAll('.logos-carousel .logo-list-image-wrap');
      logoSlides.forEach(logo => {
        const lIdx = parseInt(logo.getAttribute('data-slick-index'), 10);
        if (lIdx === quoteIndex) {
          logo.classList.add('slick-current', 'slick-center', 'slick-active');
          logo.setAttribute('aria-hidden', 'false');
        } else {
          logo.classList.remove('slick-current', 'slick-center');
          if (Math.abs(lIdx - quoteIndex) <= 2) {
            logo.classList.add('slick-active');
            logo.setAttribute('aria-hidden', 'false');
          } else {
            logo.classList.remove('slick-active');
            logo.setAttribute('aria-hidden', 'true');
          }
        }
      });
      
      const lTrack = document.querySelector('.logos-carousel .slick-track');
      const logoItemWidth = 272; // width of each logo
      if (lTrack) {
        // 5 logos shown, center logo is at index quoteIndex
        const logoOffset = -(quoteIndex) * logoItemWidth;
        lTrack.style.transition = 'transform 400ms ease';
        lTrack.style.transform = `translate3d(${logoOffset}px, 0px, 0px)`;
      }
      
      return quoteIndex;
    }
    
    // Wire up buttons
    const prevBtn = document.querySelector('.slick-prev-custom');
    const nextBtn = document.querySelector('.slick-next-custom');
    
    prevBtn.addEventListener('click', () => goToSlide(quoteIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(quoteIndex + 1));
    
    // Wire up clicking on logos
    document.querySelectorAll('.logos-carousel .logo-list-image-wrap').forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-slick-index'), 10);
        if (!isNaN(idx) && idx >= 0 && idx < totalQuotes) {
          goToSlide(idx);
        }
      });
    });
    
    // Test clicking nextBtn
    const initialText = document.querySelector('.quotes-carousel .slick-current .logo-list-content-wrap').textContent;
    nextBtn.click();
    const nextText = document.querySelector('.quotes-carousel .slick-current .logo-list-content-wrap').textContent;
    
    prevBtn.click();
    const prevText = document.querySelector('.quotes-carousel .slick-current .logo-list-content-wrap').textContent;
    
    return {
      initialText: initialText.substring(0, 30),
      nextText: nextText.substring(0, 30),
      prevText: prevText.substring(0, 30),
      changed: initialText !== nextText
    };
  });
  
  console.log('Slider test result:', testResult);
  
  await browser.close();
  server.close();
  process.exit(0);
});
