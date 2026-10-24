import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const REVIEW_DIR = path.join(process.cwd(), 'review');

if (!fs.existsSync(REVIEW_DIR)) {
  fs.mkdirSync(REVIEW_DIR, { recursive: true });
}

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.ico']);

function getAllImageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllImageFiles(fullPath, fileList);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (IMAGE_EXTENSIONS.has(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

function computeSha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

async function computePhash(filePath, ext, buffer) {
  if (ext === '.svg') {
    // For SVG, create a deterministic hash from the normalized text
    return 'svg-' + crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 12);
  }
  try {
    const { data } = await sharp(buffer)
      .resize(8, 8, { fit: 'fill' })
      .grayscale()
      .raw()
      .toBuffer({ resolveWithObject: true });
      
    let sum = 0;
    for (let i = 0; i < 64; i++) sum += data[i];
    const avg = sum / 64;
    
    let hash = '';
    for (let i = 0; i < 64; i += 4) {
      let nibble = 0;
      for (let j = 0; j < 4; j++) {
        if (data[i + j] >= avg) {
          nibble |= (1 << (3 - j));
        }
      }
      hash += nibble.toString(16);
    }
    return hash;
  } catch (err) {
    return 'n/a';
  }
}

function parseSvgDimensions(svgContent) {
  let width = '';
  let height = '';
  
  const widthMatch = svgContent.match(/<svg[^>]*\bwidth=["']([0-9.]+)(?:px)?["']/i);
  const heightMatch = svgContent.match(/<svg[^>]*\bheight=["']([0-9.]+)(?:px)?["']/i);
  if (widthMatch) width = Math.round(parseFloat(widthMatch[1]));
  if (heightMatch) height = Math.round(parseFloat(heightMatch[1]));
  
  if (!width || !height) {
    const vbMatch = svgContent.match(/<svg[^>]*\bviewBox=["']\s*([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s*["']/i);
    if (vbMatch) {
      width = Math.round(parseFloat(vbMatch[3]));
      height = Math.round(parseFloat(vbMatch[4]));
    }
  }
  return { width: width || '', height: height || '' };
}

function escapeCsv(val) {
  if (val === undefined || val === null) return '""';
  const str = String(val);
  return `"${str.replace(/"/g, '""')}"`;
}

async function run() {
  console.log('Scanning public/ for images and vector assets...');
  const files = getAllImageFiles(PUBLIC_DIR);
  console.log(`Found ${files.length} image/SVG files in public/`);
  
  const rows = [];
  
  for (let i = 0; i < files.length; i++) {
    const filePath = files[i];
    const relPath = '/' + path.relative(PUBLIC_DIR, filePath).replace(/\\/g, '/');
    const ext = path.extname(filePath).toLowerCase();
    const format = ext.replace('.', '');
    
    try {
      const buffer = fs.readFileSync(filePath);
      const bytes = buffer.length;
      const sha256 = computeSha256(buffer);
      const phash = await computePhash(filePath, ext, buffer);
      
      let width = '';
      let height = '';
      let embeddedCreator = '';
      let embeddedCopyright = '';
      
      if (ext === '.svg') {
        const svgText = buffer.toString('utf8');
        const dims = parseSvgDimensions(svgText);
        width = dims.width;
        height = dims.height;
        
        // Check for comments or metadata tags in SVG
        const crMatch = svgText.match(/(?:copyright|©)[:\s]+([^<>\r\n]+)/i);
        if (crMatch && crMatch[1]) embeddedCopyright = crMatch[1].trim();
        const authorMatch = svgText.match(/(?:author|creator)[:\s]+([^<>\r\n]+)/i);
        if (authorMatch && authorMatch[1]) embeddedCreator = authorMatch[1].trim();
      } else {
        try {
          const meta = await sharp(buffer).metadata();
          width = meta.width || '';
          height = meta.height || '';
          
          if (meta.exif) {
            const exifStr = meta.exif.toString('latin1');
            const artistMatch = exifStr.match(/Artist\0+([^\0]{2,50})/i);
            if (artistMatch) embeddedCreator = artistMatch[1].trim();
            const copyMatch = exifStr.match(/Copyright\0+([^\0]{2,50})/i);
            if (copyMatch) embeddedCopyright = copyMatch[1].trim();
          }
        } catch (e) {
          // Sharp could not parse metadata
        }
      }
      
      const lensUrl = `https://lens.google.com/uploadbyurl?url=https://www.saimdev.site${relPath}`;
      const tineyeUrl = `https://tineye.com/search/?url=https://www.saimdev.site${relPath}`;
      const reverseSearch = `Google Lens: ${lensUrl} | TinEye: ${tineyeUrl}`;
      
      rows.push({
        path: relPath,
        format,
        width,
        height,
        bytes,
        sha256,
        phash,
        embeddedCreator,
        embeddedCopyright,
        reverseSearch
      });
    } catch (err) {
      console.error(`Error processing ${relPath}: ${err.message}`);
    }
    
    if ((i + 1) % 500 === 0 || i === files.length - 1) {
      console.log(`Processed ${i + 1} / ${files.length} images...`);
    }
  }
  
  const csvHeader = 'path,format,width,height,bytes,sha256,phash,embedded_creator,embedded_copyright,reverse_search_query_url\n';
  const csvContent = rows.map(r => {
    return [
      escapeCsv(r.path),
      escapeCsv(r.format),
      r.width !== '' ? r.width : '',
      r.height !== '' ? r.height : '',
      r.bytes,
      escapeCsv(r.sha256),
      escapeCsv(r.phash),
      escapeCsv(r.embeddedCreator),
      escapeCsv(r.embeddedCopyright),
      escapeCsv(r.reverseSearch)
    ].join(',');
  }).join('\n');
  
  const outputPath = path.join(REVIEW_DIR, 'originality-images.csv');
  fs.writeFileSync(outputPath, csvHeader + csvContent + '\n', 'utf8');
  console.log(`Successfully wrote ${rows.length} image records to ${outputPath}`);
}

run();
