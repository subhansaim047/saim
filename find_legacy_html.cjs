const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

function findOccurrences(term) {
  let idx = 0;
  const results = [];
  while ((idx = html.indexOf(term, idx)) !== -1) {
    results.push({
      term,
      index: idx,
      snippet: html.slice(Math.max(0, idx - 100), Math.min(html.length, idx + term.length + 100))
    });
    idx += term.length;
  }
  return results;
}

const terms = ['18 Urban Lane', 'Chicago', '3125550148', '555-0148', '03314333355', 'Hotbite'];
terms.forEach(t => {
  const occ = findOccurrences(t);
  console.log(`\n=== Occurrences of "${t}" (${occ.length}) ===`);
  occ.forEach(o => {
    // Only show if not inside our custom script
    if (o.index < 1160000 || o.index > 1195000) {
      console.log(`[Pos ${o.index}]: ${o.snippet.replace(/\n/g, ' ')}`);
    } else {
      console.log(`[Pos ${o.index}]: (inside custom script)`);
    }
  });
});
