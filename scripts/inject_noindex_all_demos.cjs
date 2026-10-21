const fs = require('fs');
const path = require('path');

const targetDirs = [
  'public/anzaar',
  'public/burger-garage',
  'public/demos',
  'public/frenchyse',
  'public/hotbite'
];

const singleFiles = [
  'public/test-images.html'
];

function getAllHtmlFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllHtmlFiles(fullPath, arrayOfFiles);
    } else if (file.toLowerCase().endsWith('.html')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

let allFiles = [...singleFiles.filter(f => fs.existsSync(f))];
targetDirs.forEach(dir => {
  allFiles = getAllHtmlFiles(dir, allFiles);
});

console.log(`Found ${allFiles.length} HTML files across demo directories.`);

let updatedCount = 0;
let alreadyNoindexCount = 0;

allFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if robots meta tag exists
  if (/<meta\s+name=["']robots["']/i.test(content)) {
    // Replace content with noindex, nofollow
    const updated = content.replace(
      /<meta\s+name=["']robots["'][^>]*>/i,
      '<meta name="robots" content="noindex, nofollow">'
    );
    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      updatedCount++;
    } else {
      alreadyNoindexCount++;
    }
  } else if (/<head[^>]*>/i.test(content)) {
    // Inject right after <head>
    const updated = content.replace(/(<head[^>]*>)/i, '$1\n    <meta name="robots" content="noindex, nofollow">');
    fs.writeFileSync(filePath, updated, 'utf8');
    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} files with noindex, nofollow.`);
console.log(`Already had matching noindex: ${alreadyNoindexCount}.`);
