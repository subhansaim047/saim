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
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const isIonic = html.includes('Ionic_Black_Leather_Jacket');
    const hasKeychainImg = html.includes('Keychain') || html.includes('keychain');
    console.log(`${h}: hasIonic=${isIonic}, hasKeychainImg=${hasKeychainImg}`);
  }
});
