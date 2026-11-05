const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      searchDir(full);
    } else if (f.endsWith('.mjs') || f.endsWith('.js') || f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('Pepperoni') || content.includes('PEPPERONI') || content.includes('pepperoni')) {
        console.log('Found in:', full, 'size:', content.length);
      }
    }
  }
}

searchDir('public/hotbite');
