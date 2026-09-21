import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Replace <Link to="..." with <Link href="..."
  if (content.includes('<Link')) {
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    modified = true;
  }

  // Add missing 'X' import in DemosPage
  if (file === 'DemosPage.tsx' && !content.includes(' X,') && !content.includes(', X }')) {
    content = content.replace('ArrowLeft } from "lucide-react";', 'ArrowLeft, X } from "lucide-react";');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
console.log("Link href migration complete.");
