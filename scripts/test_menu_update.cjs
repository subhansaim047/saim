const fs = require('fs');
const cheerio = require('cheerio');

const filePath = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html';
const html = fs.readFileSync(filePath, 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

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

// Update main document
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
// Col 1 (Bespoke): remove corporate gifts link
$('a[href*="corporate-gifts"]').closest('li').remove();
// Brand: keep Our Story, remove dead links
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
    // Remove links to deleted pages/help/index.html
    $(el).find('a[href*="pages/help"]').closest('li').remove();
  }
});

console.log('--- VERIFYING TOP LEVEL NAVIGATION AFTER UPDATE ---');
$('.navigation--main ul.navigation__tier-1 > li').each((i, el) => {
  const link = $(el).find('> a');
  console.log(`Desktop ${i}: [${link.text().trim()}] -> ${link.attr('href')}`);
});

console.log('\n--- VERIFYING MOBILE DRAWER TOP LEVEL AFTER UPDATE ---');
$('.mobile-navigation-drawer ul.navigation__tier-1 > li').each((i, el) => {
  const link = $(el).find('> a');
  console.log(`Mobile ${i}: [${link.text().trim()}] -> ${link.attr('href')}`);
});

console.log('\n--- VERIFYING BRAND MENU SUBITEMS ---');
$('li.navigation__item').each((i, el) => {
  const t = $(el).find('> a').text().trim();
  if (t.startsWith('BRAND')) {
    $(el).find('.navigation__tier-2 a').each((j, a) => {
      console.log(`Brand subitem ${j}: [${$(a).text().trim()}] -> ${$(a).attr('href')}`);
    });
  }
});

console.log('\n--- VERIFYING FOOTER BESPOKE & BRAND & HELP ---');
$('.section-footer__menu-block').each((i, el) => {
  const title = $(el).find('.section-footer__title').text().trim();
  if (['bespoke', 'brand', 'help'].includes(title.toLowerCase())) {
    console.log(`Footer [${title}]:`);
    $(el).find('li a').each((j, a) => {
      console.log(`   ${j}: [${$(a).text().trim()}] -> ${$(a).attr('href')}`);
    });
  }
});
