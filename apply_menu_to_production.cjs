const fs = require('fs');
const { menuStyles, menuScript } = require('./build_custom_menu.cjs');

let html = fs.readFileSync('public/hotbite/index.html', 'utf8');

// Check if already injected
if (!html.includes('id="hotbite-custom-menu-styles"')) {
  html = html.replace('</head>', `${menuStyles}\n</head>`);
  console.log('Injected menuStyles into <head>');
} else {
  console.log('menuStyles already in <head>');
}

if (!html.includes('id="hotbite-custom-menu-script"')) {
  html = html.replace('</body>', `${menuScript}\n</body>`);
  console.log('Injected menuScript into </body>');
} else {
  console.log('menuScript already in </body>');
}

fs.writeFileSync('public/hotbite/index.html', html, 'utf8');
console.log('Successfully updated public/hotbite/index.html!');
