const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

const integrityMatches = html.match(/integrity="[^"]*"/g) || [];
console.log('Integrity attributes count:', integrityMatches.length);
