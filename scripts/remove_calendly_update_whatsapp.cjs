const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, transforms) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const transform of transforms) {
    if (typeof transform === 'function') {
      content = transform(content);
    } else if (transform.find && transform.replace !== undefined) {
      if (typeof transform.find === 'string') {
        content = content.split(transform.find).join(transform.replace);
      } else {
        content = content.replace(transform.find, transform.replace);
      }
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

// 1. Walk directory recursively to replace phone numbers
function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
        walkDir(fullPath, callback);
      }
    } else if (/\.(tsx|ts|jsx|js|html|json)$/.test(entry.name)) {
      callback(fullPath);
    }
  }
}

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const appDir = path.join(rootDir, 'app');

console.log('--- Step 1: Updating WhatsApp numbers ---');
[srcDir, appDir].forEach(dir => {
  walkDir(dir, (file) => {
    replaceInFile(file, [
      { find: '447473962953', replace: '923196526604' },
      { find: '+44 7473 962953', replace: '+92 319 6526604' },
      { find: '+447473962953', replace: '+923196526604' }
    ]);
  });
});

console.log('--- Step 2: Removing Calendly from HeroSection.tsx ---');
replaceInFile(path.join(srcDir, 'components', 'HeroSection.tsx'), [
  (content) => {
    // Remove the motion.a block for calendly
    const calendlyRegex = /\r?\n\s*<motion\.a\s+href="https:\/\/calendly\.com\/saimdev\/15min"[\s\S]*?<\/motion\.a>/g;
    return content.replace(calendlyRegex, '');
  }
]);

console.log('--- Step 3: Removing Calendly from ContactSection.tsx ---');
replaceInFile(path.join(srcDir, 'components', 'ContactSection.tsx'), [
  { find: ', Calendar', replace: '' },
  { find: ', or book a 15-minute discovery call to discuss your goals.', replace: ' to discuss your project goals.' },
  (content) => {
    const calendlyRegex = /\r?\n\s*<a\s+href="https:\/\/calendly\.com\/saimdev\/15min"[\s\S]*?<\/a>/g;
    return content.replace(calendlyRegex, '');
  }
]);

console.log('--- Step 4: Removing Calendly from FoodSafetyTemplatesPage.tsx ---');
replaceInFile(path.join(srcDir, 'components', 'FoodSafetyTemplatesPage.tsx'), [
  (content) => {
    const calendlyRegex = /\r?\n\s*<a\s+href="https:\/\/calendly\.com\/saimdev\/15min"[\s\S]*?<\/a>/g;
    return content.replace(calendlyRegex, '');
  }
]);

console.log('--- Step 5: Removing Calendly from ToolsPage.tsx ---');
replaceInFile(path.join(srcDir, 'components', 'ToolsPage.tsx'), [
  (content) => {
    const calendlyRegex = /\r?\n\s*<a\s+href="https:\/\/calendly\.com\/saimdev\/15min"[\s\S]*?<\/a>/g;
    return content.replace(calendlyRegex, '');
  }
]);

console.log('--- Step 6: Removing Calendly from app/nextjs-developer-uk/page.tsx ---');
replaceInFile(path.join(appDir, 'nextjs-developer-uk', 'page.tsx'), [
  { find: 'PhoneCall, ', replace: '' },
  { find: ', PhoneCall', replace: '' },
  { find: '<span>WhatsApp UK</span>', replace: '<span>WhatsApp</span>' },
  { find: ' or book a 15-minute video call today', replace: '' },
  (content) => {
    const calendlyRegex = /\r?\n\s*<a\s+href="https:\/\/calendly\.com\/saimdev\/15min"[\s\S]*?<\/a>/g;
    return content.replace(calendlyRegex, '');
  }
]);

console.log('Done!');
