const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldCss = `        .pbmit-bg-color-globalcolor, 
        .pbmit-elementor-bg-color-globalcolor,
        .pbmit-bg-color-globalcolor > .elementor-background-overlay,
        .pbmit-elementor-bg-color-globalcolor > .elementor-background-overlay,
        .pbmit-bg-color-globalcolor::before,
        .pbmit-elementor-bg-color-globalcolor::before {
            background-color: #000000 !important;
            background-image: none !important;
        }`;

const newCss = `        section.pbmit-bg-color-globalcolor, 
        section.pbmit-elementor-bg-color-globalcolor,
        .elementor-section.pbmit-bg-color-globalcolor, 
        .elementor-section.pbmit-elementor-bg-color-globalcolor,
        section.pbmit-bg-color-globalcolor > .elementor-background-overlay,
        section.pbmit-elementor-bg-color-globalcolor > .elementor-background-overlay,
        .elementor-section.pbmit-bg-color-globalcolor > .elementor-background-overlay,
        .elementor-section.pbmit-elementor-bg-color-globalcolor > .elementor-background-overlay,
        section.pbmit-bg-color-globalcolor::before,
        section.pbmit-elementor-bg-color-globalcolor::before,
        .elementor-section.pbmit-bg-color-globalcolor::before,
        .elementor-section.pbmit-elementor-bg-color-globalcolor::before {
            background-color: #000000 !important;
            background-image: none !important;
        }`;

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    if (html.includes(oldCss)) {
        html = html.replace(oldCss, newCss);
        fs.writeFileSync(p, html);
        console.log('Fixed CSS in', f);
    }
});
