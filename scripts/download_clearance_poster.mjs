import https from 'https';
import fs from 'fs';

const url = 'https://www.thejacketmaker.pk/cdn/shop/files/preview_images/3333a09ae5c74e6898ada36456f7c731.thumbnail.0000000000_1024x.jpg';
const dest = 'public/thejacketmaker/images/clearance-sale-poster.jpg';

https.get(url, (res) => {
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved clearance poster, size:', fs.statSync(dest).size);
  });
}).on('error', console.error);
