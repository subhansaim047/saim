import fs from 'fs';
import path from 'path';
import assert from 'assert';

const requiredFiles = [
  'burger-part-01.png',
  'burger-part-02.png',
  'burger-part-03.png',
  'burger-part-04.png',
  'burger-part-05.png',
  'burger-part-06.png',
  'burger-part-07.png',
  'burger-part-08.png',
  'circle-ellipse-3.png',
  'circle-ellipse-4.png',
  'dot-img-04.png',
  'dot-img-03.png',
  'pattern-shap-04.png',
  'burger.png'
];

requiredFiles.forEach(file => {
  const fullPath = path.join('public/hotbite/assets/images', file);
  assert(fs.existsSync(fullPath), `Missing required asset: ${fullPath}`);
  const stat = fs.statSync(fullPath);
  assert(stat.size > 0, `Asset is empty: ${fullPath}`);
});
console.log('All burger assets verified successfully.');
