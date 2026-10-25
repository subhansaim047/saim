const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

function cleanHtml(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      cleanHtml(full);
    } else if (f.endsWith('.html')) {
      let content = fs.readFileSync(full, 'utf8');
      if (content.includes('Â©')) {
        content = content.replace(/Â©/g, '&copy;');
        fs.writeFileSync(full, content, 'utf8');
        console.log(`Cleaned Â© in ${path.relative(publicDir, full)}`);
      }
    }
  }
}

cleanHtml(publicDir);
console.log('Finished cleaning public HTML files.');
