const fs = require('fs');

const filePath = 'public/hotbite/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// 1. Replace first inline opacity on .framer-28kurd
const target1 = 'class="framer-28kurd" data-framer-name="Menu Block" style="will-change:transform;opacity:0;transform:translateY(64px) scale(0.8) rotate(-5deg)">';
const replacement1 = 'class="framer-28kurd" data-framer-name="Menu Block" style="will-change:transform;opacity:1;transform:none">';

if (!html.includes(target1)) {
  console.error('ERROR: target1 not found in HTML!');
  process.exit(1);
}
html = html.replace(target1, replacement1);
console.log('Successfully replaced target1');

// 2. Replace second inline opacity on .framer-28kurd
const target2 = 'class="framer-28kurd" data-framer-name="Menu Block" style="will-change:transform;opacity:0;transform:translateY(32px) scale(0.9) rotate(-5deg)">';
const replacement2 = 'class="framer-28kurd" data-framer-name="Menu Block" style="will-change:transform;opacity:1;transform:none">';

if (!html.includes(target2)) {
  console.error('ERROR: target2 not found in HTML!');
  process.exit(1);
}
html = html.replace(target2, replacement2);
console.log('Successfully replaced target2');

// 3. Inject CSS into <style id="oresto-custom-menu-styles">
const styleTag = '<style id="oresto-custom-menu-styles">';
if (!html.includes(styleTag)) {
  console.error('ERROR: styleTag not found in HTML!');
  process.exit(1);
}

const additionalCSS = `
  /* Scroll margins for sticky header offset */
  #Menu, #About, #Featured, #Testimonials, #Contact, #Gallery, #Order, #oresto-pizza-why-best, #oresto-burger-talking {
    scroll-margin-top: 100px !important;
  }

  /* Mobile Navigation Drawer Fix: prevent overlap and provide clean touch pills */
  .framer-C1Gca.framer-v-ugzjxs .framer-bu10d4 {
    height: auto !important;
    min-height: 340px !important;
    padding: 96px 24px 32px 24px !important;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5) !important;
    border-bottom-left-radius: 32px !important;
    border-bottom-right-radius: 32px !important;
    background-color: #401500 !important;
    overflow: visible !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .framer-C1Gca.framer-v-ugzjxs .framer-o18imf {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 12px !important;
    padding: 0 !important;
    width: 100% !important;
  }

  .framer-C1Gca.framer-v-ugzjxs .framer-ye4oxr {
    position: static !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 6px !important;
    width: 100% !important;
    padding: 0 !important;
    background: transparent !important;
    transform: none !important;
    order: 1 !important;
  }

  .framer-C1Gca.framer-v-ugzjxs .framer-ye4oxr .framer-bgaj06-container,
  .framer-C1Gca.framer-v-ugzjxs .framer-ye4oxr .framer-j8kmu6-container,
  .framer-C1Gca.framer-v-ugzjxs .framer-ye4oxr .framer-1qiz1rj-container,
  .framer-C1Gca.framer-v-ugzjxs .framer-ye4oxr .framer-15x1yzc-container {
    width: 100% !important;
  }

  .framer-C1Gca.framer-v-ugzjxs .framer-ye4oxr a {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 11px 20px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    font-family: 'Poppins', sans-serif !important;
    font-size: 17px !important;
    font-weight: 600 !important;
    color: #ffefd9 !important;
    text-decoration: none !important;
    border-radius: 50px !important;
    background-color: rgba(255, 239, 217, 0.07) !important;
    transition: background-color 0.2s ease, color 0.2s ease !important;
  }

  .framer-C1Gca.framer-v-ugzjxs .framer-ye4oxr a:hover {
    background-color: rgba(255, 149, 0, 0.25) !important;
    color: #ff9500 !important;
  }

  .framer-C1Gca.framer-v-ugzjxs .framer-bk51yv-container {
    order: 2 !important;
    width: 100% !important;
    margin-top: 6px !important;
  }

  .framer-C1Gca.framer-v-ugzjxs .framer-bk51yv-container a {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    box-sizing: border-box !important;
    padding: 13px 24px !important;
    border-radius: 50px !important;
    background-color: #ff9500 !important;
    border: none !important;
    text-decoration: none !important;
  }

  .framer-C1Gca.framer-v-ugzjxs .framer-bk51yv-container a p {
    color: #401500 !important;
    font-weight: 700 !important;
    font-size: 16px !important;
  }
`;

html = html.replace(styleTag, styleTag + additionalCSS);
console.log('Successfully injected additionalCSS into styleTag');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully written updated public/hotbite/index.html');
