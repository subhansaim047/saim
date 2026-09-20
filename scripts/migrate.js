import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  let modified = false;

  // 1. Add "use client" if not present
  if (!content.startsWith('"use client";') && !content.startsWith("'use client';")) {
    content = `"use client";\n` + content;
    modified = true;
  }

  // 2. Handle react-router-dom imports
  if (content.includes('react-router-dom')) {
    // Specifically handle the 3 patterns seen
    content = content.replace(/import\s*\{\s*useNavigate\s*,\s*Link\s*\}\s*from\s*["']react-router-dom["'];?/, 'import { useRouter } from "next/navigation";\nimport Link from "next/link";');
    content = content.replace(/import\s*\{\s*useNavigate\s*\}\s*from\s*["']react-router-dom["'];?/, 'import { useRouter } from "next/navigation";');
    content = content.replace(/import\s*\{\s*Link\s*\}\s*from\s*["']react-router-dom["'];?/, 'import Link from "next/link";');
    modified = true;
  }

  // 3. Replace navigate references
  if (content.includes('useNavigate')) {
    content = content.replace(/const navigate = useNavigate\(\);/g, 'const router = useRouter();');
    content = content.replace(/navigate\(/g, 'router.push(');
    modified = true;
  }

  // 4. Remove react-helmet-async and <Helmet> blocks completely
  if (content.includes('react-helmet-async') || content.includes('<Helmet>')) {
    content = content.replace(/import\s*\{\s*Helmet\s*\}\s*from\s*["']react-helmet-async["'];?\n?/g, '');
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
console.log("Migration script complete.");
