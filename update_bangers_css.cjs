const fs = require('fs');

let css = fs.readFileSync('public/pizzabox/css/combined_index.css', 'utf8');
const cssStart = css.indexOf('/* ELEGANCIA CUSTOM HERO STYLES */');
if (cssStart !== -1) css = css.substring(0, cssStart);

const newCss = `
/* ELEGANCIA CUSTOM HERO STYLES */

/* ===== BIG CHUNKY PIZZA BOX TITLE ANIMATION ===== */

/* Keyframes */
@keyframes pb-drop-bounce {
    0%   { opacity: 0; transform: translateY(-120px) rotate(-8deg) scale(1.3); }
    60%  { opacity: 1; transform: translateY(12px)   rotate(1deg)  scale(0.95); }
    80%  { transform: translateY(-6px)  rotate(-1deg) scale(1.02); }
    100% { opacity: 1; transform: translateY(0)      rotate(0deg)  scale(1); }
}

@keyframes pb-title-glow {
    0%, 100% { text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000, 0 0 30px rgba(255, 210, 141, 0.3); }
    50%       { text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000, 0 0 60px rgba(255, 210, 141, 0.9), 0 0 100px rgba(255, 210, 141, 0.4); }
}

/* HERO LAYOUT */
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
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
}
.hero-text-section {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    display: flex;
    align-items: center;
    z-index: 2;
}
.slider-info {
    margin-left: 100px;
    max-width: 800px;
    text-align: left;
}
.hero-title { display: block; }

/* BIG CHUNKY TITLE */
.pizzabox-big-title {
    font-family: 'Bangers', cursive !important;
    font-size: 130px !important;
    font-weight: 400 !important;
    font-style: italic !important;
    line-height: 1 !important;
    margin: 0 !important;
    padding: 0 !important;
    color: #ffffff !important;
    text-transform: uppercase !important;
    letter-spacing: 4px !important;
    display: block !important;
    /* Thick black stroke like the image */
    -webkit-text-stroke: 5px #000;
    paint-order: stroke fill;
    text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000;
    /* Glow pulse animation */
    animation: pb-title-glow 3s ease-in-out infinite;
}

/* Per-letter drop-bounce animation */
.pb-letter {
    display: inline-block;
    opacity: 0;
    animation: pb-drop-bounce 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: calc(var(--i) * 0.08s + 0.2s);
}
.pb-space {
    display: inline-block;
    width: 20px;
}

/* Spacers */
.ak-height-30 { height: 30px; }
.ak-height-70 { height: 70px; }

/* Sub-text */
.hero-sub-text {
    font-family: 'Prompt', sans-serif !important;
    font-size: 16px !important;
    line-height: 27px !important;
    letter-spacing: 0.36px !important;
    color: rgb(200, 200, 200) !important;
    margin: 0 !important;
    max-width: 462px;
    display: block;
    opacity: 0;
    animation: pb-drop-bounce 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: 0.9s;
}

/* Button */
.hero-btn { display: inline-block; text-decoration: none; }
.ak-btn.style-5.color-yellow-bg,
.color-yellow-bg.ak-btn {
    display: inline-block !important;
    background-color: #FFD28D !important;
    color: #000000 !important;
    font-family: 'Prompt', sans-serif !important;
    font-size: 18px !important;
    font-weight: 400 !important;
    padding: 18px 36px !important;
    text-transform: uppercase !important;
    border: none !important;
    border-radius: 0 !important;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
    opacity: 0;
    animation: pb-drop-bounce 0.8s ease forwards;
    animation-delay: 1.1s;
}
.ak-btn.style-5.color-yellow-bg:hover { background-color: #fff !important; }

/* Responsive */
@media (max-width: 1199px) {
    .slider-info { margin-left: 50px; }
    .pizzabox-big-title { font-size: 90px !important; }
}
@media (max-width: 767px) {
    .slider-info { margin-left: 20px; }
    .pizzabox-big-title { font-size: 60px !important; -webkit-text-stroke: 3px #000; }
    .hero-sub-text { max-width: 90% !important; }
    .ak-height-70 { height: 35px; }
}

/* ===== RESTORE SECTION BACKGROUNDS ===== */
#custom-elegancia-hero { background-color: #000 !important; }
section.pbmit-bg-color-yes.pbmit-elementor-bg-color-globalcolor:not(#custom-elegancia-hero) {
    background-color: #ffffff !important;
}
.elementor-element-4512b57 { background-color: #ffffff !important; }

/* RESTORE: Additional sections background fix */
#custom-elegancia-hero ~ section,
#custom-elegancia-hero ~ .elementor-section {
    background-color: initial;
}
`;

fs.writeFileSync('public/pizzabox/css/combined_index.css', css + newCss);
console.log('CSS updated with Bangers chunky title + bounce animation');
