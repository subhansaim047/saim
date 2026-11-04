const fs = require('fs');

const kcHandles = [
  'adkins-black-leather-keychain',
  'adkins-blue-leather-keychain',
  'adkins-brown-keychain-add-on',
  'adkins-brown-leather-keychain',
  'adkins-grey-leather-keychain',
  'adkins-black-keychain-add-on',
  'custom-maria-dubon-leather-keychain',
  'elroy-black-leather-keychain',
  'elroy-blue-leather-keychain',
  'elroy-brown-leather-keychain',
  'elroy-grey-leather-keychain',
  'custom-adkins-keychain-add-on',
  'custom-elroy-keychain-add-on'
];

kcHandles.forEach(h => {
  const p = `public/thejacketmaker/products/${h}/index.html`;
  const exists = fs.existsSync(p);
  console.log(h, exists ? 'EXISTS' : 'MISSING');
});
