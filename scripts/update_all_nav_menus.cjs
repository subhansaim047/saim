const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function updateNavigation($) {
  // 1. Remove CORPORATE GIFTS, GIFTING, HELP from top-level menus
  $('li.navigation__item').each((i, el) => {
    const directA = $(el).children('a.navigation__link, a');
    const text = directA.first().text().trim().toUpperCase();
    const href = directA.first().attr('href') || '';

    // Remove top-level items
    if (text === 'CORPORATE GIFTS' || text.startsWith('CORPORATE GIFTS') || href.includes('corporate-gifts')) {
      if ($(el).parent().hasClass('navigation__tier-1') || $(el).hasClass('navigation__item--with-small-menu') || $(el).hasClass('navigation__item--with-children')) {
        $(el).remove();
        return;
      }
    }
    if (text === 'GIFTING' || text.startsWith('GIFTING')) {
      if ($(el).parent().hasClass('navigation__tier-1') || $(el).hasClass('navigation__item--with-small-menu') || $(el).hasClass('navigation__item--with-children')) {
        $(el).remove();
        return;
      }
    }
    if (text === 'HELP' || text.startsWith('HELP')) {
      if ($(el).parent().hasClass('navigation__tier-1') || $(el).hasClass('navigation__item--with-small-menu') || $(el).hasClass('navigation__item--with-children')) {
        $(el).remove();
        return;
      }
    }

    // 2. In BRAND menu: keep ONLY "Our Story"
    if (text === 'BRAND' || text.startsWith('BRAND')) {
      const tier2 = $(el).find('.navigation__tier-2, .navigation__sub-menu');
      tier2.find('li').each((j, subLi) => {
        const subA = $(subLi).find('a');
        const subText = subA.text().trim();
        const subHref = subA.attr('href') || '';
        if (subText === 'Our Story' && subHref.includes('our-story')) {
          // keep
        } else {
          $(subLi).remove();
        }
      });
    }

    // 3. In MEN & WOMEN & CUSTOMIZE: remove gift & corporate links
    $(el).find('a').each((j, subA) => {
      const subHref = $(subA).attr('href') || '';
      if (
        subHref.includes('corporate-gifts') ||
        subHref.includes('employee-gift') ||
        subHref.includes('gifts-for-clients') ||
        subHref.includes('gifts-for-conferences-events') ||
        subHref.includes('luxury-corporate-gifts') ||
        subHref.includes('gift-set') ||
        subHref.includes('gifts-for-her') ||
        subHref.includes('gifts-for-him') ||
        subHref.includes('leather-gifts') ||
        subHref.includes('pages/help')
      ) {
        const parentLi = $(subA).closest('li');
        if (parentLi.length) {
          parentLi.remove();
        } else {
          $(subA).remove();
        }
      }
    });
  });

  // Remove empty columns or leftover empty headers
  $('.navigation__column').each((i, el) => {
    if ($(el).find('li').length === 0 && $(el).find('a').length === 0) {
      $(el).remove();
    }
  });
}

function processHtmlFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  if (
    !html.includes('CORPORATE GIFTS') &&
    !html.includes('GIFTING') &&
    !html.includes('pages/help') &&
    !html.includes('corporate-gifts')
  ) {
    return false;
  }

  const $ = cheerio.load(html, { decodeEntities: false });

  updateNavigation($);

  // Update template drawer
  const templateEl = $('script.mobile-navigation-drawer-template');
  if (templateEl.length > 0) {
    const templateHtml = templateEl.html();
    const $tpl = cheerio.load(templateHtml, { decodeEntities: false });
    updateNavigation($tpl);
    templateEl.text($tpl.html());
  }

  // Update Footer:
  $('a[href*="corporate-gifts"]').closest('li').remove();
  $('.section-footer__menu-block').each((i, el) => {
    const title = $(el).find('.section-footer__title').text().trim();
    if (title.toLowerCase() === 'brand') {
      $(el).find('li').each((j, li) => {
        const a = $(li).find('a');
        const text = a.text().trim();
        if (text !== 'Our Story') {
          $(li).remove();
        }
      });
    }
    if (title.toLowerCase() === 'help') {
      $(el).find('a[href*="pages/help"]').closest('li').remove();
    }
  });

  fs.writeFileSync(filePath, $.html(), 'utf8');
  return true;
}

function getHtmlFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(getHtmlFiles(full));
    } else if (item.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const targetDirs = [
  'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/collections',
  'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/pages',
  'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/policies'
];

let allFiles = ['C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html'];
targetDirs.forEach(d => {
  allFiles = allFiles.concat(getHtmlFiles(d));
});

console.log(`Processing ${allFiles.length} files...`);
let updatedCount = 0;
for (const f of allFiles) {
  try {
    if (processHtmlFile(f)) {
      updatedCount++;
    }
  } catch (err) {
    console.error('Error on file:', f, err.message);
  }
}

console.log(`Finished! Updated ${updatedCount} files.`);
