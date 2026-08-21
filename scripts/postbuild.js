import fs from 'fs';
import path from 'path';

const distHtml = path.resolve('dist/index.html');
const distDemosDir = path.resolve('dist/demos');
const demosHtml = path.resolve('dist/demos/index.html');

if (fs.existsSync(distHtml)) {
  if (!fs.existsSync(distDemosDir)) {
    fs.mkdirSync(distDemosDir, { recursive: true });
  }
  fs.copyFileSync(distHtml, demosHtml);
  console.log('Successfully copied dist/index.html -> dist/demos/index.html');
}
