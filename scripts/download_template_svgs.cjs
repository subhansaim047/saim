const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'templates', 'svg');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const templates = JSON.parse(fs.readFileSync(path.join(__dirname, 'unique_templates.json'), 'utf8'));

// Get all unique image URLs
const uniqueImages = [...new Set(templates.map(t => t.img).filter(Boolean))];
console.log(`Found ${uniqueImages.length} unique images to download.`);

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, res => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(true));
      });
    }).on('error', err => {
      file.close();
      fs.unlink(dest, () => {});
      resolve(false);
    });
  });
}

async function run() {
  let successCount = 0;
  for (let i = 0; i < uniqueImages.length; i++) {
    const imgUrl = uniqueImages[i];
    // get clean filename
    const urlObj = new URL(imgUrl);
    let base = path.basename(urlObj.pathname);
    if (!base.endsWith('.svg') && !base.endsWith('.webp') && !base.endsWith('.png') && !base.endsWith('.jpg')) {
      base += '.svg';
    }
    const localPath = path.join(targetDir, base);

    const ok = await downloadFile(imgUrl, localPath);
    if (ok) {
      successCount++;
    } else {
      console.warn(`Failed to download: ${imgUrl}`);
    }

    if ((i + 1) % 20 === 0 || i === uniqueImages.length - 1) {
      console.log(`Downloaded ${i + 1}/${uniqueImages.length} images...`);
    }
  }

  console.log(`\nDownload completed! ${successCount}/${uniqueImages.length} images saved to public/templates/svg/`);
}

run();
