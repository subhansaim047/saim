const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT = path.resolve(__dirname, '..');
const renderedPath = path.join(ROOT, 'audit/raw_tjm/products/custom-leather-jacket-builder.rendered.html');
const targetPath = path.join(ROOT, 'public/hq-leathercon/products/custom-leather-jacket-builder/index.html');
const apoCssPath = path.join(ROOT, 'public/hq-leathercon/css/apo-builder.css');

const renderedHtml = fs.readFileSync(renderedPath, 'utf8');
const targetHtml = fs.readFileSync(targetPath, 'utf8');

const $r = cheerio.load(renderedHtml, { decodeEntities: false });
const $l = cheerio.load(targetHtml, { decodeEntities: false });

// 1. Collect inline <style> blocks from renderedHtml (AvisPlus, Yotpo, Consultation Form, Eviternity)
let extraStyles = [];
$r('style').each((i, el) => {
  const css = $r(el).html() || '';
  if (
    css.includes('avp') ||
    css.includes('apo') ||
    css.includes('yotpo') ||
    css.includes('new_consultation_form') ||
    css.includes('eviternity')
  ) {
    extraStyles.push(css);
  }
});

let baseApoCss = fs.readFileSync(apoCssPath, 'utf8');
const marker = '/* === INLINE APO & BUILDER OVERRIDES === */';
if (baseApoCss.includes(marker)) {
  baseApoCss = baseApoCss.split(marker)[0];
}

const customBuilderOverrides = `
${marker}
${extraStyles.join('\n')}

/* HQ Leathercon Custom Builder Swatch & Layout Polish */
#avpoptions-container__v2 {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  margin-top: 14px !important;
}
#avpoptions-container__v2 .avp-option {
  margin-bottom: 18px !important;
}
#avpoptions-container__v2 .ap-options__swatch {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 10px !important;
  align-items: flex-start !important;
}
#avpoptions-container__v2 .avp-productoptionswatchwrapper {
  display: inline-flex !important;
  flex-direction: column !important;
  align-items: center !important;
  cursor: pointer !important;
  position: relative !important;
  margin: 0 !important;
  width: 78px !important;
  text-align: center !important;
}
#avpoptions-container__v2 .avp-productoptionswatchwrapper input[type="radio"],
#avpoptions-container__v2 .avp-productoptionswatchwrapper input[type="checkbox"] {
  position: absolute !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
#avpoptions-container__v2 .avp-productoptionswatch {
  display: block !important;
  width: 68px !important;
  height: 68px !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  border-radius: 6px !important;
  border: 2px solid #d9d9d9 !important;
  transition: all 0.2s ease !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06) !important;
}
#avpoptions-container__v2 .avp-productoptionswatchwrapper:hover .avp-productoptionswatch {
  border-color: #666 !important;
}
#avpoptions-container__v2 .avp-productoptionswatchwrapper.apo-swatch-selected .avp-productoptionswatch,
#avpoptions-container__v2 .avp-productoptionswatchwrapper input:checked + .avp-productoptionswatch,
#avpoptions-container__v2 .avp-productoptionswatchwrapper input:checked ~ .avp-productoptionswatch {
  border: 2.5px solid #2D313F !important;
  box-shadow: 0 0 0 2px rgba(45,49,63,0.22) !important;
}
#avpoptions-container__v2 .swatch-variant-name {
  display: block !important;
  font-size: 11.5px !important;
  line-height: 1.25 !important;
  color: #222 !important;
  margin-top: 5px !important;
  font-weight: 500 !important;
  word-break: break-word !important;
}
#avpoptions-container__v2 .swatch-variant-name .apo-money {
  display: block !important;
  font-size: 10.5px !important;
  color: #666 !important;
  font-weight: 400 !important;
}
#avpoptions-container__v2 .option-avis-dropdown-inner {
  position: relative !important;
  max-width: 360px !important;
}
#avpoptions-container__v2 .option-avis-swatch-drop-down {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 8px 12px !important;
  border: 1px solid #ccc !important;
  border-radius: 5px !important;
  background: #fff !important;
  cursor: pointer !important;
  min-height: 44px !important;
}
#avpoptions-container__v2 .option-avis-dropdown-view-value {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
}
#avpoptions-container__v2 .option-avis-swatch-value-box {
  width: 28px !important;
  height: 28px !important;
  border-radius: 4px !important;
  border: 1px solid #ddd !important;
  background-size: cover !important;
  background-position: center !important;
  flex-shrink: 0 !important;
}
#avpoptions-container__v2 .option-avis-dropdown-values {
  position: absolute !important;
  top: 100% !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 50 !important;
  background: #fff !important;
  border: 1px solid #ccc !important;
  border-radius: 5px !important;
  margin: 4px 0 0 !important;
  padding: 6px 0 !important;
  list-style: none !important;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12) !important;
  max-height: 260px !important;
  overflow-y: auto !important;
}
#avpoptions-container__v2 .option-avis-value label.option-avis-swatch-value-label {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  padding: 7px 12px !important;
  cursor: pointer !important;
  margin: 0 !important;
}
#avpoptions-container__v2 .option-avis-value label.option-avis-swatch-value-label:hover {
  background: #f5f5f5 !important;
}
.product-detail .price-container .price-area {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  margin: 8px 0 12px !important;
}
.product-detail .price-container .price-area .current-price {
  font-size: 22px !important;
  font-weight: 700 !important;
  color: #1a1a1a !important;
}
.price-area.apo-variant-price,
button.avis-org-addcart-button {
  display: none !important;
}
`;

fs.writeFileSync(apoCssPath, baseApoCss + customBuilderOverrides, 'utf8');
console.log('Updated apo-builder.css:', fs.statSync(apoCssPath).size, 'bytes');

// 2. Preserve clean gallery from $l
const cleanGalleryHtml = $l('.product-detail > .gallery').first().html();
if (cleanGalleryHtml) {
  $r('.product-detail > .gallery').first().attr('class', 'gallery gallery--layout-carousel-beside gallery-size-large product-column-left has-thumbnails');
  $r('.product-detail > .gallery').first().html(cleanGalleryHtml);
}

// 3. Clean up <main id="content"> in $r
const $main = $r('main#content');

let mainHtml = $main.html();
// Localize AvisPlus swatch images
mainHtml = mainHtml.replace(
  /https:\/\/product-options-img\.avisplus\.io\/6af182dd-0f36-4b07-b1d0-56d659b55bdb\//g,
  '/hq-leathercon/images/builder/'
);

// Convert protocol-relative //www.thejacketmaker.pk/ and //cdn.shopify.com/ to https://
mainHtml = mainHtml.replace(/(["'(\s,])\/\/www\.thejacketmaker\.pk\//g, '$1https://www.thejacketmaker.pk/');
mainHtml = mainHtml.replace(/(["'(\s,])\/\/cdn\.shopify\.com\//g, '$1https://cdn.shopify.com/');

// Fix AvisPlus double-multiplied PKR prices (both +Rs.X and Rs.-X)
mainHtml = mainHtml.replace(/([+-]?)\s*Rs\.([+-]?[\d,]+(?:\.\d+)?)\s*PKR/g, (match, sign1, numStr) => {
  let sign = sign1 || '';
  let cleanNum = numStr;
  if (cleanNum.startsWith('-') || cleanNum.startsWith('+')) {
    sign = cleanNum[0];
    cleanNum = cleanNum.slice(1);
  }
  const rawVal = parseFloat(cleanNum.replace(/,/g, ''));
  if (isNaN(rawVal)) return match;
  if (Math.abs(rawVal) >= 300000) {
    const fixed = Math.round(rawVal / 280);
    const formatted = fixed.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${sign}Rs.${formatted} PKR`;
  }
  return match;
});

$main.html(mainHtml);

$main.find('.price-area.apo-variant-price').remove();
$main.find('button.avis-org-addcart-button').remove();
$main.find('.price-container .current-price').attr('data-base-price', '56000').text('Rs.56,000.00 PKR');

// Normalize data-variant-price into data-addon-pkr
$main.find('#avpoptions-container__v2 [data-variant-price]').each((i, el) => {
  const raw = parseFloat($r(el).attr('data-variant-price') || '0');
  let pkr = 0;
  if (!isNaN(raw) && raw !== 0) {
    if (Math.abs(raw) >= 100000) {
      pkr = Math.round(raw / 100);
    } else if (raw === 56000) {
      pkr = 7000;
    } else {
      pkr = Math.round(raw);
    }
  }
  $r(el).attr('data-addon-pkr', String(pkr));
});

const firstBaseRadio = $main.find('#avpoptions-container__v2 .avp-option').eq(0).find('input[type="radio"]').first();
if (firstBaseRadio.length) {
  firstBaseRadio.attr('checked', 'checked');
  firstBaseRadio.closest('.apo-swatch-wrapper').addClass('apo-swatch-selected');
}

$main.find('#avpoptions-container__v2 input[checked]').each((i, el) => {
  $r(el).closest('.apo-swatch-wrapper').addClass('apo-swatch-selected');
});

// Section 1: Strip <video> and replace with static craftsmanship image
const $sec1 = $main.find('#shopify-section-template--26828821070111__video_with_text_qWh4GW');
if ($sec1.length) {
  $sec1.find('video').remove();
  $sec1.find('.video-container').replaceWith(`
    <div class="rimage-outer-wrapper" style="border-radius: 8px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
      <img src="https://cdn.shopify.com/s/files/1/0774/2062/6207/files/ChooseYourStyle.jpg?v=1775228593" alt="How It Works - Custom Leather Jacket Craftsmanship" style="width: 100%; height: auto; max-height: 520px; object-fit: cover; display: block;" />
    </div>
  `);
}

// Section 4 ("In The Press"): Ensure image src is populated
const $sec4 = $main.find('#shopify-section-template--26828821070111__image_with_text_Jfq8Ki');
if ($sec4.length) {
  const $img = $sec4.find('img.rimage__image').first();
  if ($img.length && !$img.attr('src')) {
    $img.attr('src', 'https://www.thejacketmaker.pk/cdn/shop/files/Trusted_By_Industry_720x_f095f8cf-6858-4345-9318-d9f09c627103_1024x1024.jpg?v=1775146448');
  }
}

function rebrandTextNodes(node) {
  if (node.type === 'text' && node.data) {
    node.data = node.data
      .replace(/#TheJacketMaker/gi, '#HQLeathercon')
      .replace(/The Jacket Maker/gi, 'HQ Leathercon')
      .replace(/GallerY/g, 'Gallery');
  } else if (node.children && node.name !== 'script' && node.name !== 'style') {
    node.children.forEach(rebrandTextNodes);
  }
}
$main.contents().each((i, node) => rebrandTextNodes(node));

$l('main#content').html($main.html());

if ($l('link[href="/hq-leathercon/css/apo-builder.css"]').length === 0) {
  $l('head').append('\n<link rel="stylesheet" href="/hq-leathercon/css/apo-builder.css" />\n');
}

fs.writeFileSync(targetPath, $l.html(), 'utf8');
console.log('Successfully updated:', targetPath);
