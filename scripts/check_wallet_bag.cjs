const fs = require('fs');

// Check sample wallet
const wPath = 'public/thejacketmaker/products/marvin-brown-leather-wallet/index.html';
if (fs.existsSync(wPath)) {
  const html = fs.readFileSync(wPath, 'utf8');
  console.log('Marvin wallet hasIonic:', html.includes('Ionic_Black_Leather_Jacket'));
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log('Marvin wallet H1:', h1 ? h1[1].trim() : 'NONE');
}

// Check sample bag
const bPath = 'public/thejacketmaker/products/dylan-brown-leather-duffle-bag/index.html';
if (fs.existsSync(bPath)) {
  const html = fs.readFileSync(bPath, 'utf8');
  console.log('Dylan duffle bag hasIonic:', html.includes('Ionic_Black_Leather_Jacket'));
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log('Dylan duffle bag H1:', h1 ? h1[1].trim() : 'NONE');
}
