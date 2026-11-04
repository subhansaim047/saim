const fs = require('fs');

const p = 'public/thejacketmaker/products/adkins-black-leather-keychain/index.html';
const html = fs.readFileSync(p, 'utf8');

const title = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('Title:', title ? title[1].trim() : 'NONE');

const imgs = html.match(/src="([^"]+)"/g);
console.log('Images in adkins-black-leather-keychain:', imgs ? imgs.slice(0, 10) : 'NONE');
