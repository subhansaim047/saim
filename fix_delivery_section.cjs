const fs = require('fs');

let css = fs.readFileSync('public/pizzabox/css/combined_index.css', 'utf8');

// Add targeted override to restore the Fastest Delivery section and similar back to white
const fix = `
/* RESTORE: "Fastest Delivery" and any other pbmit-bg-color-globalcolor sections back to white
   (they inherit global black color from site settings - we need to override for non-hero sections) */
section.pbmit-bg-color-yes.pbmit-elementor-bg-color-globalcolor:not(#custom-elegancia-hero *) {
    background-color: #ffffff !important;
}
.elementor-element-4512b57 {
    background-color: #ffffff !important;
}
/* Also make text black again since white bg */
.elementor-element-4512b57 * {
    color: inherit;
}
`;

fs.writeFileSync('public/pizzabox/css/combined_index.css', css + fix);
console.log('Applied fix for Fastest Delivery black section');
