const fs = require('fs');
const file = 'public/cottage/index.html';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<!-- EXCLUSIVE DEALS SECTION -->[\s\S]*?<!-- END EXCLUSIVE DEALS SECTION -->/g, '');
content = content.replace(/<!-- CHICKEN BROAST SECTION -->[\s\S]*?<!-- END CHICKEN BROAST SECTION -->/g, '');
content = content.replace(/<!-- DESI MENU SECTION -->[\s\S]*?<!-- END DESI MENU SECTION -->/g, '');

fs.writeFileSync(file, content);
console.log('Sections removed!');
