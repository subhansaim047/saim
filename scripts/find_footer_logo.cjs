const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const footerPos = html.lastIndexOf('site-footer') || html.lastIndexOf('footer');
console.log('footerPos:', footerPos);
if (footerPos !== -1) {
  const footerHtml = html.slice(footerPos, footerPos + 4000);
  const imgs = footerHtml.match(/<img[^>]+>/g);
  console.log('Images in footer:', imgs);
  const logoInFooter = footerHtml.match(/<a[^>]+href="[^"]*"[^>]*>[\s\S]*?(?:logo|HQ Leathercon)[\s\S]*?<\/a>/i);
  console.log('Logo in footer:', logoInFooter ? logoInFooter[0] : 'NONE');
}
