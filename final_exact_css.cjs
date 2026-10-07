const fs = require('fs');

let css = fs.readFileSync('public/pizzabox/css/combined_index.css', 'utf8');
const cssStart = css.indexOf('/* ELEGANCIA CUSTOM HERO STYLES */');
if (cssStart !== -1) {
    css = css.substring(0, cssStart);
}

const newCss = `
/* ELEGANCIA CUSTOM HERO STYLES */

/* Fix body background - Elegencia has pure black body bg not beige */
body {
    background-color: #000 !important;
}

/* Header: Make it transparent but always readable on dark hero bg */
.site-header.pbmit-header-style-2 {
    background-color: transparent !important;
}
/* When scrolling - give header a dark bg */
.site-header.pbmit-header-style-2.pbmit-fixed-header-active,
.pbmit-sticky-header {
    background-color: rgba(0, 0, 0, 0.95) !important;
}

/* ===== HERO SECTION ===== */
#custom-elegancia-hero {
    position: relative;
    width: 100%;
    background-color: #000;
    overflow: hidden;
    z-index: 1;
}
.ak-hero.ak-style1 {
    width: 100%;
    height: 100vh;
    min-height: 735px;
    position: relative;
    display: flex;
    align-items: normal;
}
.ak-hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
}
/* hero-text-section: absolute, full height, align center vertically, left offset 160px */
.hero-text-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 2;
}
.slider-info {
    margin-left: 173px;
    padding-left: 0;
    max-width: 700px;
    text-align: left;
}
.hero-title {
    display: block;
}
/* Title 1: Baskervville 48px uppercase white */
.hero-main-title {
    font-family: 'Baskervville', serif !important;
    font-size: 48px !important;
    font-weight: 400 !important;
    line-height: normal !important;
    margin: 0 !important;
    padding: 0 !important;
    color: #ffffff !important;
    text-transform: uppercase !important;
    font-style: normal !important;
    display: block !important;
    letter-spacing: normal !important;
}
/* Title 2: Baskervville 48px italic uppercase gold with thin border-bottom separator */
.hero-main-title-1 {
    font-family: 'Baskervville', serif !important;
    font-style: italic !important;
    font-size: 48px !important;
    font-weight: 400 !important;
    color: #FFD28D !important;
    margin: 0 !important;
    padding-bottom: 0 !important;
    text-transform: uppercase !important;
    display: inline-flex !important;
    border-bottom: 1px solid rgb(79, 72, 54) !important;
    letter-spacing: normal !important;
}
/* Spacers */
.ak-height-30 { height: 30px; }
.ak-height-70 { height: 70px; }

/* Sub-text: Prompt 16px, color C8C8C8, tracking 0.36px */
.hero-sub-text {
    font-family: 'Prompt', sans-serif !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 27px !important;
    letter-spacing: 0.36px !important;
    color: rgb(200, 200, 200) !important;
    margin: 0 !important;
    max-width: 462px;
    display: block;
}
/* Button wrapper */
.hero-btn {
    display: inline-block;
    text-decoration: none;
}
/* Button: solid #FFD28D bg, black text, Prompt 18px, padding 18px 36px */
.ak-btn.style-5.color-yellow-bg,
.color-yellow-bg.ak-btn {
    display: inline-block !important;
    background-color: #FFD28D !important;
    color: #000000 !important;
    font-family: 'Prompt', sans-serif !important;
    font-size: 18px !important;
    font-weight: 400 !important;
    line-height: normal !important;
    padding: 18px 36px !important;
    text-transform: uppercase !important;
    letter-spacing: normal !important;
    text-decoration: none !important;
    border: none !important;
    border-radius: 0 !important;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
}
.ak-btn.style-5.color-yellow-bg:hover {
    background-color: #ffffff !important;
    color: #000 !important;
}

/* Responsive */
@media (max-width: 1199px) {
    .slider-info { margin-left: 80px; }
}
@media (max-width: 767px) {
    .slider-info { margin-left: 20px; padding-left: 10px; }
    .hero-main-title { font-size: 34px !important; }
    .hero-main-title-1 { font-size: 32px !important; }
    .hero-sub-text { font-size: 14px !important; max-width: 90% !important; }
    .ak-height-70 { height: 35px; }
    .ak-height-30 { height: 20px; }
}
`;

fs.writeFileSync('public/pizzabox/css/combined_index.css', css + newCss);
console.log('Done - exact match CSS applied');
