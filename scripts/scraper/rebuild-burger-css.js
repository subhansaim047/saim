const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const indexPath = path.join(__dirname, '../../public/demos/dilicious-pizza/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Read the original burger-final.css
const burgerCSS = fs.readFileSync('burger-final.css', 'utf8');

// All missing CSS - complete correct version
const missingCSS = `

/* ===== ICON HEADING STYLE 9 - Yellow rotating badge ===== */
.pbmit-ihbox-style-9 .pbmit-ihbox-box{position:relative;width:150px;height:150px;padding:8px;margin-bottom:20px;background-color:var(--pbmit-dilicious-secondary-color);}
.pbmit-ihbox-style-9 .pbmit-ihbox-box,.pbmit-ihbox-style-9 .pbmit-ihbox-icon,.pbmit-ihbox-style-9 .pbmit-ihbox-svg{border-radius:50%;border:2px solid var(--pbmit-dilicious-global-color);}
.pbmit-elementor-bg-color-gradient .pbmit-ihbox-style-9 .pbmit-ihbox-box,.pbmit-elementor-bg-color-globalcolor .pbmit-ihbox-style-9 .pbmit-ihbox-box{border-color:var(--pbmit-dilicious-light-bg-color);}
.pbmit-ihbox-style-9 .pbmit-ihbox-icon,.pbmit-ihbox-style-9 .pbmit-ihbox-svg{position:absolute;top:50%;left:50%;width:90px;height:90px;line-height:90px;text-align:center;margin-right:-50%;transform:translate(-50%,-50%);background-color:var(--pbmit-dilicious-light-bg-color);}
.pbmit-ihbox-style-9 .pbmit-icon-type-icon i.pbmit-dilicious-icon{margin-top:5px;display:inline-block;}
.pbmit-ihbox-style-9 .pbmit-ihbox-box .pbmit-circle-box svg{fill:var(--pbmit-dilicious-global-color);transform-origin:50% 50% 0px;font-size:23px;text-transform:uppercase;letter-spacing:9.6px;font-weight:600;animation-name:pbmit_rotate;animation-duration:15s;animation-iteration-count:infinite;animation-timing-function:linear;}
@-webkit-keyframes pbmit_rotate{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}
@keyframes pbmit_rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
body.rtl .pbmit-ihbox-style-9 .pbmit-ihbox-box text{direction:ltr;}
.pbmit-ihbox-style-9 .pbmit-ihbox-icon-type-text,.pbmit-ihbox-style-9 .pbmit-icon-type-icon{font-size:50px;color:var(--pbmit-dilicious-global-color);}
.pbmit-ihbox-style-9 .pbmit-ihbox-icon .pbmit-ihbox-icon-type-image img{width:50px;height:50px;}
.pbmit-ihbox-style-9 .pbmit-ihbox-svg-wrapper svg{width:50px;fill:var(--pbmit-dilicious-global-color);}
.pbmit-ihbox-style-9 .pbmit-element-subtitle,.pbmit-ihbox-style-9 .pbmit-element-heading{font-size:16px;line-height:28px;margin-bottom:0px;color:var(--pbmit-dilicious-secondary-color);}
.pbmit-elementor-bg-color-secondary .pbmit-ihbox-style-9 .pbmit-element-subtitle,.pbmit-elementor-bg-color-secondary .pbmit-ihbox-style-9 .pbmit-element-heading{color:var(--pbmit-dilicious-global-color);}
.pbmit-ihbox-style-9 .pbmit-ihbox-btn a{margin-top:15px;display:inline-block;}
@media (max-width:767px){.pbmit-ihbox-style-9{margin:0px;}}

/* ===== ICON HEADING STYLE 10 - Phone number row ===== */
.pbmit-ihbox.pbmit-ihbox-style-10{display:flex;align-items:center;}
.pbmit-ihbox-style-10 .pbmit-ihbox-svg,.pbmit-ihbox-style-10 .pbmit-ihbox-icon{margin-right:20px;}
.pbmit-ihbox-style-10 .pbmit-ihbox-icon-type-text,.pbmit-ihbox-style-10 .pbmit-icon-type-icon{font-size:50px;line-height:50px;color:var(--pbmit-dilicious-global-color);}
.pbmit-ihbox-style-10 .pbmit-ihbox-icon-type-image img{width:60px;height:60px;}
.pbmit-ihbox-style-10 .pbmit-element-subtitle,.pbmit-ihbox-style-10 .pbmit-element-heading{font-size:15px;line-height:26px;margin-bottom:0px;color:var(--pbmit-dilicious-blackish-color);font-weight:600 !important;}
.pbmit-ihbox-style-10 .pbmit-element-title{font-size:18px;line-height:28px;margin-bottom:0px;letter-spacing:-0.4px;color:var(--pbmit-dilicious-global-color) !important;}
.pbmit-ihbox-style-10 .pbmit-ihbox-btn a{margin-top:15px;display:inline-block;}

/* ===== ELEMENTOR ICON LIST - flex display fix ===== */
.elementor-widget .elementor-icon-list-items{list-style-type:none;margin:0;padding:0;}
.elementor-widget .elementor-icon-list-item{margin:0;padding:0;position:relative;}
.elementor-widget .elementor-icon-list-item,.elementor-widget .elementor-icon-list-item a{align-items:var(--icon-vertical-align,center);display:flex;font-size:inherit;}
.elementor-widget .elementor-icon-list-icon+.elementor-icon-list-text{align-self:center;padding-inline-start:5px;}
.elementor-widget .elementor-icon-list-icon{display:flex;position:relative;}
.elementor-widget .elementor-icon-list-icon i{font-size:var(--e-icon-list-icon-size);width:1.25em;}
`;

// Replace the entire burger-custom-css block with fresh content
const fullCSS = burgerCSS + missingCSS;

// Use regex to find and replace the entire style block
const styleBlockRegex = /<style id="burger-custom-css">[\s\S]*?<\/style>/;
const newStyleBlock = `<style id="burger-custom-css">\n${fullCSS}\n</style>`;

if (styleBlockRegex.test(html)) {
    html = html.replace(styleBlockRegex, newStyleBlock);
    console.log('Replaced burger-custom-css block with clean version.');
} else {
    // Inject before </head>
    html = html.replace('</head>', `${newStyleBlock}\n</head>`);
    console.log('Inserted new burger-custom-css block.');
}

fs.writeFileSync(indexPath, html);
console.log('Done! CSS length:', fullCSS.length);
