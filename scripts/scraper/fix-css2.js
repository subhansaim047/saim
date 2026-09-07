const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const perfectCss = `<style>
        /* Force black background on theme color sections */
        .pbmit-title-bar-wrapper.pbmit-bg-color-globalcolor,
        section.pbmit-bg-color-globalcolor, 
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
        }
        
        /* Remove gradients ONLY from overlays, keeping background textures on wrappers */
        section.pbmit-bg-color-globalcolor > .elementor-background-overlay,
        section.pbmit-elementor-bg-color-globalcolor > .elementor-background-overlay,
        .elementor-section.pbmit-bg-color-globalcolor > .elementor-background-overlay,
        .elementor-section.pbmit-elementor-bg-color-globalcolor > .elementor-background-overlay,
        section.pbmit-bg-color-globalcolor::before,
        section.pbmit-elementor-bg-color-globalcolor::before,
        .elementor-section.pbmit-bg-color-globalcolor::before,
        .elementor-section.pbmit-elementor-bg-color-globalcolor::before {
            background-image: none !important;
        }
</style>
`;

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    
    // Remove all old versions of the style
    html = html.replace(/<style>\s*\/\*\s*Force black background on theme color sections[\s\S]*?<\/style>\s*/g, '');
    html = html.replace(/<style>\.pbmit-bg-color-globalcolor.*?!important; }<\/style>/g, '');
    
    // Inject the perfect CSS before </head>
    html = html.replace('</head>', perfectCss + '</head>');
    
    fs.writeFileSync(p, html);
    console.log('Applied perfect CSS to', f);
});
