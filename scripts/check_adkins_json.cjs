const fs = require('fs');

const allProds = JSON.parse(fs.readFileSync('audit/all_store_products_complete.json', 'utf8'));
const adkins = allProds.find(p => p.handle === 'adkins-black-leather-keychain');

console.log('Adkins product in audit JSON:');
console.log('Title:', adkins.title);
console.log('Images count:', adkins.images ? adkins.images.length : 0);
console.log('Images:', adkins.images);
