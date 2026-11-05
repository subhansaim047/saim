const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

// Check footer
const footerIdx = html.indexOf('<footer');
if (footerIdx !== -1) {
  console.log('--- FOOTER SNIPPET ---');
  console.log(html.slice(footerIdx, footerIdx + 1500));
} else {
  // Check id="Contact" or similar
  console.log('No <footer> tag, looking for Contact or footer classes');
}

// Check phone numbers in whole file
const phones = html.match(/(0325\s*6737861|0331\s*4333355|3125550148|555-0148)/g) || [];
console.log('Phone occurrences:', phones);

// Check addresses in whole file
const addresses = html.match(/(18 Urban Lane|Chicago|Ghosiabad|Gujranwala|Green Valley)/gi) || [];
console.log('Address occurrences:', Array.from(new Set(addresses)));
