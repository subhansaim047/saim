const fs = require('fs');

let css = fs.readFileSync('public/pizzabox/css/combined_index.css', 'utf8');
const cssStart = css.indexOf('/* ELEGANCIA CUSTOM HERO STYLES */');
if (cssStart !== -1) {
    css = css.substring(0, cssStart);
}

// EXACT values scraped from Elegencia computed styles:
// - hero height: 735px, header is transparent fixed 
// - container: marginLeft 160px, paddingLeft 13.5px, position absolute, alignItems center
// - title1: Baskervville 48px, uppercase, white
// - title2: Baskervville 48px, italic uppercase, #FFD28D, borderBottom 1px solid rgb(79,72,54)
// - sub-text: Prompt 16px, color rgb(200,200,200), letterSpacing 0.36px, margin-top 20px
// - btn: Prompt 18px, uppercase, background #FFD28D, padding 18px 36px, color black

const newCss = `
/* ELEGANCIA CUSTOM HERO STYLES */
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
/* hero-text-section is absolute, marginLeft 160px, alignItems center (vertically centered) */
.hero-text-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0;
    padding-left: 0;
    z-index: 2;
}
.slider-info {
    margin-left: 160px;
    padding-left: 13.5px;
    max-width: 700px;
    text-align: left;
}
.hero-title {
    display: block;
}
/* title1: Baskervville 48px, uppercase, white */
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
}
/* title2: Baskervville 48px, italic, uppercase, gold, border-bottom thin separator */
.hero-main-title-1 {
    font-family: 'Baskervville', serif !important;
    font-style: italic !important;
    font-size: 48px !important;
    font-weight: 400 !important;
    color: #FFD28D !important;
    margin: 0 !important;
    padding: 0 !important;
    text-transform: uppercase !important;
    display: inline-flex !important;
    border-bottom: 1px solid rgb(79, 72, 54) !important;
}
/* Heights spacers */
.ak-height-30 {
    height: 30px;
}
.ak-height-70 {
    height: 70px;
}
/* sub-text: Prompt 16px, color #c8c8c8, spacing 0.36px, margin-top 20px, max-width 462px */
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
/* btn wrapper */
.hero-btn {
    display: inline-block;
    text-decoration: none;
}
/* btn: Prompt 18px, uppercase, solid #FFD28D bg, black text, padding 18px 36px */
.ak-btn.style-5.color-yellow-bg {
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
    transition: background 0.3s ease;
}
.ak-btn.style-5.color-yellow-bg:hover {
    background-color: #fff !important;
    color: #000 !important;
}

/* Responsive */
@media (max-width: 991px) {
    .slider-info { margin-left: 80px; }
    .hero-main-title { font-size: 38px !important; }
    .hero-main-title-1 { font-size: 36px !important; }
    .ak-height-70 { height: 40px; }
}
@media (max-width: 767px) {
    .slider-info { margin-left: 20px; }
    .hero-main-title { font-size: 30px !important; }
    .hero-main-title-1 { font-size: 28px !important; }
    .hero-sub-text { font-size: 14px !important; max-width: 90% !important; }
    .ak-height-70 { height: 30px; }
}
`;

fs.writeFileSync('public/pizzabox/css/combined_index.css', css + newCss);
console.log('CSS updated with exact scraped values');
