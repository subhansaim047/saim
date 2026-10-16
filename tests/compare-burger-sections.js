import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const PORT = 3350;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/hotbite/index.html';
  if (reqPath.endsWith('/')) reqPath += 'index.html';

  const fullPath = path.join(process.cwd(), 'public', reqPath.replace(/^\//, ''));

  if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(fullPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(fullPath).pipe(res);
});

server.listen(PORT, async () => {
  console.log(`Comparison server running at http://localhost:${PORT}`);
  const artifactDir = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';

  try {
    const browser = await chromium.launch({ channel: 'msedge' });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    // ==========================================
    // 1. INSPECT ANZAAR ORIGINAL SECTION
    // ==========================================
    console.log('--- Inspecting Anzaar Demo ---');
    await page.goto(`http://localhost:${PORT}/anzaar/index.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    const anzaarSelector = '.elementor-element-f3401e1';
    await page.waitForSelector(anzaarSelector, { timeout: 10000 });

    // Scroll so section is in view
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    }, anzaarSelector);
    await page.waitForTimeout(1500);

    // Capture Anzaar screenshot
    const anzaarLoc = page.locator(anzaarSelector).first();
    await anzaarLoc.screenshot({ path: path.join(artifactDir, 'anzaar_burger_current.png') });
    console.log('Saved anzaar_burger_current.png');

    // Extract Anzaar computed styles
    const anzaarData = await page.evaluate((sel) => {
      const sec = document.querySelector(sel);
      if (!sec) return null;

      const sub = sec.querySelector('.pbmit-element-subtitle');
      const title = sec.querySelector('.pbmit-element-title');
      const desc = sec.querySelector('.pbmit-heading-desc');
      const btn = sec.querySelector('.elementor-button');
      const phoneBox = sec.querySelector('.pbmit-ihbox-style-10');
      const phoneNum = sec.querySelector('.pbmit-ihbox-style-10 .pbmit-element-title');
      const badge = sec.querySelector('.pbmit-ihbox-style-9 .pbmit-ihbox-box');
      const badgeSvg = sec.querySelector('.pbmit-ihbox-style-9 svg');
      const badgeText = sec.querySelector('.pbmit-ihbox-style-9 text');

      // Burger layers
      const layers = Array.from(sec.querySelectorAll('.pbmit-tween-effect img')).map((img, i) => {
        const wrap = img.closest('.pbmit-tween-effect');
        const parent = img.closest('.elementor-widget');
        const imgStyle = window.getComputedStyle(img);
        const parentStyle = parent ? window.getComputedStyle(parent) : {};
        const wrapStyle = wrap ? window.getComputedStyle(wrap) : {};
        return {
          layer: i + 1,
          src: img.src.split('/').pop(),
          width: img.width,
          height: img.height,
          renderedWidth: parseFloat(imgStyle.width),
          renderedHeight: parseFloat(imgStyle.height),
          parentTop: parentStyle.top,
          parentLeft: parentStyle.left,
          parentZIndex: parentStyle.zIndex,
          dataYStart: wrap ? wrap.getAttribute('data-y-start') : null,
          dataYEnd: wrap ? wrap.getAttribute('data-y-end') : null,
          wrapTransform: wrapStyle.transform
        };
      });

      // Background circles
      const circle3 = sec.querySelector('.pbmit-circle-box-3');
      const circleNew = sec.querySelector('.pbmit-circle-box-new');

      const getStyle = (el, prop) => el ? window.getComputedStyle(el).getPropertyValue(prop) : null;

      return {
        secPadding: getStyle(sec, 'padding'),
        secBgColor: getStyle(sec, 'background-color'),
        subFont: getStyle(sub, 'font-family'),
        subSize: getStyle(sub, 'font-size'),
        subColor: getStyle(sub, 'color'),
        subMargin: getStyle(sub, 'margin-bottom'),
        titleFont: getStyle(title, 'font-family'),
        titleSize: getStyle(title, 'font-size'),
        titleWeight: getStyle(title, 'font-weight'),
        titleColor: getStyle(title, 'color'),
        titleLineHeight: getStyle(title, 'line-height'),
        descFont: getStyle(desc, 'font-family'),
        descSize: getStyle(desc, 'font-size'),
        descColor: getStyle(desc, 'color'),
        descLineHeight: getStyle(desc, 'line-height'),
        btnBg: getStyle(btn, 'background-color'),
        btnColor: getStyle(btn, 'color'),
        btnRadius: getStyle(btn, 'border-radius'),
        btnPadding: getStyle(btn, 'padding'),
        phoneNumSize: getStyle(phoneNum, 'font-size'),
        phoneNumColor: getStyle(phoneNum, 'color'),
        phoneNumWeight: getStyle(phoneNum, 'font-weight'),
        badgeWidth: getStyle(badge, 'width'),
        badgeHeight: getStyle(badge, 'height'),
        badgeBg: getStyle(badge, 'background-color'),
        badgeSvgFill: getStyle(badgeSvg, 'fill'),
        badgeTextSize: getStyle(badgeText, 'font-size'),
        layers
      };
    }, anzaarSelector);

    // ==========================================
    // 2. INSPECT HOTBITE (O'RESTO) SECTION
    // ==========================================
    console.log('--- Inspecting Hotbite (O\'Resto) ---');
    await page.goto(`http://localhost:${PORT}/hotbite/index.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3500);

    const hotbiteSelector = '#oresto-burger-talking';
    await page.waitForSelector(hotbiteSelector, { timeout: 10000 });

    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    }, hotbiteSelector);
    await page.waitForTimeout(1500);

    const hotbiteLoc = page.locator(hotbiteSelector).first();
    await hotbiteLoc.screenshot({ path: path.join(artifactDir, 'hotbite_burger_current.png') });
    console.log('Saved hotbite_burger_current.png');

    const hotbiteData = await page.evaluate((sel) => {
      const sec = document.querySelector(sel);
      if (!sec) return null;

      const sub = sec.querySelector('.oresto-burger-subtitle');
      const title = sec.querySelector('.oresto-burger-title');
      const desc = sec.querySelector('.oresto-burger-desc');
      const btn = sec.querySelector('.oresto-burger-btn');
      const phoneNum = sec.querySelector('.oresto-call-number');
      const badge = sec.querySelector('.oresto-rotating-badge');
      const badgeSvg = sec.querySelector('.oresto-rotating-badge svg');
      const badgeText = sec.querySelector('.oresto-rotating-badge text');

      const layers = Array.from(sec.querySelectorAll('.pbmit-tween-effect img')).map((img, i) => {
        const wrap = img.closest('.pbmit-tween-effect');
        const imgStyle = window.getComputedStyle(img);
        const wrapStyle = wrap ? window.getComputedStyle(wrap) : {};
        return {
          layer: i + 1,
          src: img.src.split('/').pop(),
          width: img.width,
          height: img.height,
          renderedWidth: parseFloat(imgStyle.width),
          renderedHeight: parseFloat(imgStyle.height),
          wrapTop: wrapStyle.top,
          wrapLeft: wrapStyle.left,
          wrapZIndex: wrapStyle.zIndex,
          dataYStart: wrap ? wrap.getAttribute('data-y-start') : null,
          dataYEnd: wrap ? wrap.getAttribute('data-y-end') : null,
          wrapTransform: wrapStyle.transform
        };
      });

      const getStyle = (el, prop) => el ? window.getComputedStyle(el).getPropertyValue(prop) : null;

      return {
        secPadding: getStyle(sec, 'padding'),
        secBgColor: getStyle(sec, 'background-color'),
        subFont: getStyle(sub, 'font-family'),
        subSize: getStyle(sub, 'font-size'),
        subColor: getStyle(sub, 'color'),
        subMargin: getStyle(sub, 'margin-bottom'),
        titleFont: getStyle(title, 'font-family'),
        titleSize: getStyle(title, 'font-size'),
        titleWeight: getStyle(title, 'font-weight'),
        titleColor: getStyle(title, 'color'),
        titleLineHeight: getStyle(title, 'line-height'),
        descFont: getStyle(desc, 'font-family'),
        descSize: getStyle(desc, 'font-size'),
        descColor: getStyle(desc, 'color'),
        descLineHeight: getStyle(desc, 'line-height'),
        btnBg: getStyle(btn, 'background-color'),
        btnColor: getStyle(btn, 'color'),
        btnRadius: getStyle(btn, 'border-radius'),
        btnPadding: getStyle(btn, 'padding'),
        phoneNumSize: getStyle(phoneNum, 'font-size'),
        phoneNumColor: getStyle(phoneNum, 'color'),
        phoneNumWeight: getStyle(phoneNum, 'font-weight'),
        badgeWidth: getStyle(badge, 'width'),
        badgeHeight: getStyle(badge, 'height'),
        badgeBg: getStyle(badge, 'background-color'),
        badgeSvgFill: getStyle(badgeSvg, 'fill'),
        badgeTextSize: getStyle(badgeText, 'font-size'),
        layers
      };
    }, hotbiteSelector);

    // Save JSON report
    const comparisonReport = {
      anzaar: anzaarData,
      hotbite: hotbiteData
    };
    fs.writeFileSync(
      path.join(artifactDir, 'burger_comparison_report.json'),
      JSON.stringify(comparisonReport, null, 2)
    );
    console.log('Saved burger_comparison_report.json');

    await browser.close();
  } catch (err) {
    console.error('Comparison error:', err);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
