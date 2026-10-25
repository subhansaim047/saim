const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.resolve('public/hero-shots');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const urls = [
  { url: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp', file: 'shot-1.webp' },
  { url: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp', file: 'shot-2.webp' },
  { url: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp', file: 'shot-3.webp' },
  { url: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp', file: 'shot-4.webp' }
];

function downloadFile(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(dir, item.file);
    const file = fs.createWriteStream(dest);
    https.get(item.url, res => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${item.url}: status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Saved: ${dest} (${fs.statSync(dest).size} bytes)`);
          resolve();
        });
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  for (const item of urls) {
    await downloadFile(item);
  }
  console.log('All hero shots downloaded successfully!');
})();
