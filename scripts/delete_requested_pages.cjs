const fs = require('fs');
const path = require('path');

const base = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker';

const foldersToDelete = [
  // Corporate gifts pages
  'pages/corporate-gifts',
  'pages/employee-gift',
  'pages/gifts-for-clients',
  'pages/gifts-for-conferences-events',
  'pages/luxury-corporate-gifts',
  // Gifting collections
  'collections/gift-set',
  'collections/gifts-for-her',
  'collections/gifts-for-him',
  'collections/leather-gifts',
  // Help pages
  'pages/help'
];

foldersToDelete.forEach(rel => {
  const full = path.join(base, rel);
  if (fs.existsSync(full)) {
    fs.rmSync(full, { recursive: true, force: true });
    console.log(`DELETED: ${rel}`);
  } else {
    console.log(`ALREADY GONE: ${rel}`);
  }
});
