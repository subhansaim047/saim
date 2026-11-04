const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// 1. Extract Header Links
const headerStart = html.indexOf('id="main-nav"');
const headerEnd = html.indexOf('id="shopify-section-store-messages"');
const headerHtml = html.slice(headerStart, headerEnd);

const headerLinks = [];
const hrefRegex = /<a[^>]+href="([^"#][^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
let match;
while ((match = hrefRegex.exec(headerHtml)) !== null) {
  const url = match[1];
  const text = match[2].replace(/<[^>]+>/g, '').trim();
  if (text && !text.includes('Toggle menu')) {
    headerLinks.push({ url, text, section: 'header' });
  }
}

// 2. Extract Footer Links
const footerStart = html.indexOf('id="shopify-section-footer"');
const footerHtml = html.slice(footerStart, footerStart + 20000);

const footerLinks = [];
while ((match = hrefRegex.exec(footerHtml)) !== null) {
  const url = match[1];
  const text = match[2].replace(/<[^>]+>/g, '').trim();
  if (text) {
    footerLinks.push({ url, text, section: 'footer' });
  }
}

console.log(`Total header links found: ${headerLinks.length}`);
console.log(`Total footer links found: ${footerLinks.length}`);

const allLinks = [...headerLinks, ...footerLinks];
const statusReport = [];

for (const item of allLinks) {
  let cleanUrl = item.url.split('?')[0];
  if (cleanUrl.startsWith('http')) continue; // external links like twitter/facebook
  
  let localPath = cleanUrl;
  if (localPath.startsWith('/thejacketmaker/')) {
    localPath = 'public' + localPath;
  } else if (localPath.startsWith('/')) {
    localPath = 'public/thejacketmaker' + localPath;
  }

  let exists = fs.existsSync(localPath);
  let isDir = false;
  let fileExists = exists;

  if (exists && fs.statSync(localPath).isDirectory()) {
    isDir = true;
    fileExists = fs.existsSync(path.join(localPath, 'index.html'));
  }

  statusReport.push({
    text: item.text,
    url: item.url,
    localPath,
    exists: fileExists,
    section: item.section
  });
}

const missing = statusReport.filter(r => !r.exists);
console.log(`\n--- AUDIT RESULTS ---`);
console.log(`Total internal links audited: ${statusReport.length}`);
console.log(`Existing links: ${statusReport.length - missing.length}`);
console.log(`Missing links: ${missing.length}`);

if (missing.length > 0) {
  console.log('\n--- MISSING LINKS DETAIL ---');
  missing.forEach(m => console.log(`[${m.section.toUpperCase()}] "${m.text}" -> ${m.url}`));
}

// Check which collections have products
console.log('\n--- CHECKING COLLECTIONS LINKED IN HEADER ---');
const uniqueCollUrls = [...new Set(headerLinks.map(l => l.url).filter(u => u.includes('/collections/')))];
console.log(`Unique collection URLs in header: ${uniqueCollUrls.length}`);
for (const u of uniqueCollUrls) {
  const cPath = 'public' + u.split('?')[0];
  const filePath = fs.existsSync(cPath) && fs.statSync(cPath).isDirectory() ? path.join(cPath, 'index.html') : cPath;
  if (fs.existsSync(filePath)) {
    const cHtml = fs.readFileSync(filePath, 'utf8');
    const h1 = cHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const prodCount = (cHtml.match(/href="\/thejacketmaker\/products\/[a-z0-9\-]+\/index\.html"/g) || []).length;
    console.log(`Collection: ${u}`);
    console.log(`  H1: "${h1 ? h1[1].trim() : 'NONE'}" | Product Links: ${prodCount}`);
  } else {
    console.log(`Collection: ${u} [FILE NOT FOUND]`);
  }
}
