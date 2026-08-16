import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetBase = path.join(__dirname, '..', 'assets');

const expectedFiles = [
  // Branding
  { relPath: 'images/branding/logo.png', minSize: 5000, type: 'png' },
  { relPath: 'images/branding/favicon-32x32.png', minSize: 100, type: 'png' },
  { relPath: 'images/branding/favicon-192x192.png', minSize: 1000, type: 'png' },
  { relPath: 'images/branding/apple-touch-icon.png', minSize: 1000, type: 'png' },
  { relPath: 'images/branding/og-image.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/branding/dharma-white.png', minSize: 10000, type: 'png' },
  { relPath: 'images/branding/dharma.svg', minSize: 500, type: 'svg' },
  { relPath: 'images/logo.png', minSize: 5000, type: 'png' },
  { relPath: 'images/dharma-logo.png', minSize: 10000, type: 'png' },

  // Hero & Backgrounds
  { relPath: 'images/hero/hero-banner.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/hero-bg.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/salon-wide.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/texture-bg.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/card-bg-1.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/card-bg-2.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/card-bg-3.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/slide-1.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/slide-2.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/slide-3.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/slide-4.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/hero/slide-5.jpg', minSize: 50000, type: 'jpeg' },

  // Services & Showcase
  { relPath: 'images/showcase/welcome-salon.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/showcase/salon-stations.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/showcase/salon-chairs.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/services/hair-styling.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/services/hair-color.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/services/body-waxing.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/services/nails.jpg', minSize: 50000, type: 'jpeg' },
  { relPath: 'images/services/brows-lashes.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/services/more-services.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/services/facials.jpg', minSize: 20000, type: 'jpeg' },
  { relPath: 'images/services/massages.jpg', minSize: 20000, type: 'jpeg' },

  // Products & Specials
  { relPath: 'images/products/kerastase-premiere.webp', minSize: 10000, type: 'webp' },
  { relPath: 'images/specials/hours-schedule.png', minSize: 20000, type: 'png' },
  { relPath: 'images/specials/promo-banner.png', minSize: 20000, type: 'png' },

  // Instagram Gallery
  { relPath: 'images/instagram/insta-1.jpg', minSize: 10000, type: 'jpeg' },
  { relPath: 'images/instagram/insta-2.jpg', minSize: 10000, type: 'jpeg' },
  { relPath: 'images/instagram/insta-3.jpg', minSize: 10000, type: 'jpeg' },
  { relPath: 'images/instagram/insta-4.jpg', minSize: 10000, type: 'jpeg' },
  { relPath: 'images/instagram/insta-5.jpg', minSize: 10000, type: 'jpeg' },
  { relPath: 'images/instagram/insta-6.jpg', minSize: 10000, type: 'jpeg' },

  // Testimonials
  { relPath: 'images/testimonials/avatar-1.jpg', minSize: 2000, type: 'jpeg' },
  { relPath: 'images/testimonials/avatar-2.jpg', minSize: 2000, type: 'jpeg' },
  { relPath: 'images/testimonials/avatar-3.jpg', minSize: 2000, type: 'jpeg' },
  { relPath: 'images/testimonials/google-review-badge.svg', minSize: 100, type: 'svg' },

  // Fonts & CSS
  { relPath: 'fonts/font2-1.ttf', minSize: 20000, type: 'ttf' },
  { relPath: 'fonts/roboto.woff2', minSize: 20000, type: 'woff2' },
  { relPath: 'fonts/robotoslab.woff2', minSize: 20000, type: 'woff2' },
  { relPath: 'css/fonts.css', minSize: 100, type: 'css' },

  // Icons
  { relPath: 'icons/phone.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/arrow-right.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/arrow-left.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/caret-down.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/menu.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/close.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/instagram.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/facebook.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/whatsapp.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/star.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/map-pin.svg', minSize: 50, type: 'svg' },
  { relPath: 'icons/clock.svg', minSize: 50, type: 'svg' }
];

function checkMagicBytes(buffer, type) {
  if (!buffer || buffer.length < 4) return false;

  switch (type) {
    case 'png':
      return buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47;
    case 'jpeg':
      return buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF;
    case 'webp':
      return buffer.toString('utf8', 0, 4) === 'RIFF' && buffer.toString('utf8', 8, 12) === 'WEBP';
    case 'ttf':
      return (buffer[0] === 0x00 && buffer[1] === 0x01 && buffer[2] === 0x00 && buffer[3] === 0x00) ||
             (buffer.toString('utf8', 0, 4) === 'true') ||
             (buffer.toString('utf8', 0, 4) === 'OTTO');
    case 'woff2':
      return buffer.toString('utf8', 0, 4) === 'wOF2';
    case 'svg':
      const text = buffer.toString('utf8', 0, Math.min(buffer.length, 500));
      return text.includes('<svg') || text.includes('<?xml');
    case 'css':
      const cssText = buffer.toString('utf8');
      return cssText.includes('@font-face') && cssText.includes('font-family');
    default:
      return true;
  }
}

export function runVerification() {
  console.log(`\n=== Studio-D Brickell Asset Verification Suite ===`);
  console.log(`Target: ${targetBase}\n`);

  let passed = 0;
  let failed = 0;

  for (const item of expectedFiles) {
    const fullPath = path.join(targetBase, item.relPath);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ MISSING: ${item.relPath}`);
      failed++;
      continue;
    }

    const stat = fs.statSync(fullPath);
    if (stat.size < item.minSize) {
      console.error(`❌ TOO SMALL: ${item.relPath} (${stat.size} bytes < min ${item.minSize})`);
      failed++;
      continue;
    }

    const buf = fs.readFileSync(fullPath);
    const validHeader = checkMagicBytes(buf, item.type);
    if (!validHeader) {
      console.error(`❌ INVALID FORMAT / MAGIC BYTES: ${item.relPath} (expected ${item.type})`);
      failed++;
      continue;
    }

    passed++;
    console.log(`✅ [${stat.size.toString().padStart(7, ' ')} B] [${item.type.toUpperCase().padEnd(5, ' ')}] ${item.relPath}`);
  }

  console.log(`\n=================================================`);
  console.log(`Verification Summary: ${passed} PASSED, ${failed} FAILED (Total: ${expectedFiles.length})`);
  console.log(`=================================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runVerification();
