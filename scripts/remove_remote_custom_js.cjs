const fs = require('fs');

let html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// Replace remote custom.js with local or comment out
const remoteCustomJs = '<script src="//www.thejacketmaker.pk/cdn/shop/t/101/assets/custom.js?v=25268110243007141951793168712" type="text/javascript"></script>';
if (html.includes(remoteCustomJs)) {
  html = html.replace(remoteCustomJs, '<!-- remote custom.js removed to prevent slick conflict -->');
  console.log('Removed remote custom.js from index.html');
} else {
  console.log('Remote custom.js string not found directly');
}

// Ensure the local scripts are loaded in proper order at the bottom
fs.writeFileSync('public/thejacketmaker/index.html', html);
console.log('Saved public/thejacketmaker/index.html');
