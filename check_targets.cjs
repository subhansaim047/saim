const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

// Target 1: <style id="oresto-custom-menu-styles">
const styleStart = html.indexOf('<style id="oresto-custom-menu-styles">');
console.log('styleStart found at:', styleStart);

// Target 2: first .framer-28kurd inline style
const kurd1 = 'style="will-change:transform;opacity:0;transform:translateY(64px) scale(0.8) rotate(-5deg);box-shadow:0px 10px 20px 0px rgba(0,0,0,0.05);border-radius:20px 20px 20px 20px;height:100%"';
const kurd1Idx = html.indexOf(kurd1);
console.log('kurd1 found at:', kurd1Idx);

// Target 3: second .framer-28kurd inline style
const kurd2 = 'style="will-change:transform;opacity:0;transform:translateY(32px) scale(0.9);box-shadow:0px 10px 20px 0px rgba(0,0,0,0.05);border-radius:20px 20px 20px 20px;height:100%"';
const kurd2Idx = html.indexOf(kurd2);
console.log('kurd2 found at:', kurd2Idx);
