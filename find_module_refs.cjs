const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

const target = 'kughQ7YTF0zsTeNScj26j9fJ3qXn--8I4LnwPMOziJA.D2RvmaSI.mjs';
const idxs = [];
let pos = 0;
while ((pos = html.indexOf(target, pos)) !== -1) {
  idxs.push(pos);
  pos += target.length;
}

console.log('Occurrences of page module:', idxs.length);
idxs.forEach((idx, i) => {
  console.log(`Match ${i}:`, html.slice(Math.max(0, idx - 100), idx + 200));
});
