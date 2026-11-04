import https from 'https';

const candidates = [
  'https://cdn.shopify.com/videos/c/o/v/3333a09ae5c74e6898ada36456f7c731.jpg',
  'https://cdn.shopify.com/videos/c/o/v/3333a09ae5c74e6898ada36456f7c731.png',
  'https://cdn.shopify.com/videos/c/o/v/3333a09ae5c74e6898ada36456f7c731.thumbnail.jpg',
  'https://www.thejacketmaker.pk/cdn/shop/files/preview_images/3333a09ae5c74e6898ada36456f7c731.thumbnail.0000000000_1024x.jpg'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 500 })).end();
  });
}

async function main() {
  for (const c of candidates) {
    console.log(await checkUrl(c));
  }
}

main();
