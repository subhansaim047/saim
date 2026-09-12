const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const igLink = 'https://www.instagram.com/direct/t/18104872117958561/?hl=en';

// Read all TSX files
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Replace dynamic wa.me links with template literals
  content = content.replace(/`https:\/\/wa\.me\/34711244392\?text=\$\{.*?}`/g, `'${igLink}'`);
  content = content.replace(/`https:\/\/wa\.me\/34711244392\?text=\$\{.*?}`/g, `'${igLink}'`);
  
  // 2. Replace static wa.me links
  content = content.replace(/https:\/\/wa\.me\/34711244392/g, igLink);

  // 3. Replace the specific phone number in texts
  content = content.replace(/\+34 711 244 392/g, 'Instagram DM');

  // 4. Replace specific WhatsApp mentions
  content = content.replace(/WhatsApp Direct/gi, 'Instagram Direct');
  content = content.replace(/WhatsApp/g, 'Instagram');
  content = content.replace(/whatsappUrl/g, 'igUrl');
  content = content.replace(/setWaLink/g, 'setIgLink');
  content = content.replace(/waLink/g, 'igLink');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
}

console.log('Mass replacement complete.');
