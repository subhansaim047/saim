const fs = require('fs');

console.log('--- test_header_hover.cjs ---');
try {
  console.log(fs.readFileSync('scripts/test_header_hover.cjs', 'utf8').slice(0, 500));
} catch(e) {
  console.log('Error:', e.message);
}
