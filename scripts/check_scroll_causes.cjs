const fs = require('fs');
const path = require('path');

const base = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker';
const idx = fs.readFileSync(path.join(base, 'index.html'), 'utf8');

// Check for any autofocus
console.log('Autofocus matches:', idx.match(/autofocus/gi));

// Check for any hash links or location.hash
console.log('Location hash matches:', idx.match(/location\.hash/gi));

// Check for any scroll in inline scripts
const scripts = idx.match(/<script[\s\S]*?<\/script>/gi) || [];
scripts.forEach((s, i) => {
  if (/scroll|animate|focus/i.test(s) && !s.includes('src=')) {
    console.log(`\nInline script ${i}:`);
    console.log(s);
  }
});
