const fs = require('fs');
const path = require('path');

function scanForQuestionBoxes(dir) {
  const results = [];
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      results.push(...scanForQuestionBoxes(full));
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      const code = fs.readFileSync(full, 'utf8');
      if (code.includes('\uFFFD') || code.includes('')) {
        results.push(full);
      }
    }
  });
  return results;
}

const found = scanForQuestionBoxes('src');
console.log('Files containing unicode replacement character ():', found);
