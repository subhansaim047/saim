const fs = require('fs');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');

function findOccurrences(phrase) {
  let indices = [];
  let idx = html.indexOf(phrase);
  while (idx !== -1) {
    indices.push(idx);
    idx = html.indexOf(phrase, idx + phrase.length);
  }
  console.log(`Phrase "${phrase}": found ${indices.length} occurrences at:`, indices);
  indices.forEach((pos, i) => {
    let liStart = html.lastIndexOf('<li', pos);
    console.log(`   ${i}: inside <li ... at ${liStart}: ${html.slice(liStart, liStart + 120).replace(/\n/g, ' ')}`);
  });
}

findOccurrences('CORPORATE GIFTS');
findOccurrences('GIFTING');
findOccurrences('HELP');
findOccurrences('our-story');
