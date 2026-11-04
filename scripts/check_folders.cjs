const fs = require('fs');

const prods = fs.readdirSync('public/thejacketmaker/products');
console.log('Total product folders:', prods.length);

const wallets = prods.filter(p => p.includes('wallet'));
console.log('Sample wallet folders:', wallets.slice(0, 5));

const bags = prods.filter(p => p.includes('bag') || p.includes('duffle'));
console.log('Sample bag folders:', bags.slice(0, 5));

if (wallets.length > 0) {
  const wHtml = fs.readFileSync(`public/thejacketmaker/products/${wallets[0]}/index.html`, 'utf8');
  console.log(`${wallets[0]} hasIonic:`, wHtml.includes('Ionic_Black_Leather_Jacket'));
}
