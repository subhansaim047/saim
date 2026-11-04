const fs = require('fs');
const path = require('path');

console.log('=== 1. UPDATE gallery-controller.js WITH DYNAMIC TOKEN CLEANER & UNIVERSAL QUOTE ENGINE ===');
let js = fs.readFileSync('public/thejacketmaker/js/gallery-controller.js', 'utf8');

// Ensure cleanLiquidTokens is inside init()
if (!js.includes('cleanLiquidTokens')) {
  const tokenCleanerCode = `
  function cleanLiquidTokens() {
    try {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeValue && node.nodeValue.includes('[points_amount]')) {
          node.nodeValue = node.nodeValue.replace(/\[points_amount\]/g, 'reward points');
        }
      }
    } catch(e) {}
  }
`;
  js = js.replace('function init() {', tokenCleanerCode + '\n  function init() {\n    cleanLiquidTokens();');
  fs.writeFileSync('public/thejacketmaker/js/gallery-controller.js', js);
  console.log('Added cleanLiquidTokens to gallery-controller.js');
}

console.log('=== 2. CLEAN KEY PRODUCTS ON DISK ===');
const keyProducts = [
  'evan-hart-fur-brown-leather-jacket',
  'exton-black-hooded-down-puffer-jacket',
  'furcliff-black-leather-coat',
  'sven-black-leather-bomber-jacket',
  'the-poet-midnight-blue-leather-tote-bag',
  'the-darrio-black-leather-duffle-bag',
  'dean-brown-leather-biker-jacket',
  'ionic-black-leather-jacket',
  'adkins-black-leather-keychain'
];

keyProducts.forEach(prod => {
  const p = path.resolve('public/thejacketmaker/products', prod, 'index.html');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/%20\[points_amount\]%20/g, '%20reward points%20');
    content = content.replace(/\[points_amount\]/g, 'reward points');
    fs.writeFileSync(p, content);
    console.log('Cleaned static points token in:', prod);
  }
});

console.log('Polish complete!');
