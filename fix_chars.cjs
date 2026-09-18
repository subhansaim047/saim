
const fs = require("fs");
let text = fs.readFileSync("src/components/DemosPage.tsx", "utf8");

// Replace all non-ascii characters with a hyphen
text = text.replace(/[^\x00-\x7F]+/g, "-");

// Clean up weird dash artifacts
text = text.replace(/DetailX -\?" Car Detailing/g, "DetailX - Car Detailing");
text = text.replace(/DetailX -\?\"/g, "DetailX -");
text = text.replace(/KA-crastase/g, "Kerastase");
text = text.replace(/VALA-RIA/g, "VALERIA");
text = text.replace(/A-,\?+/g, "-");
text = text.replace(/A-,/g, "-");
text = text.replace(/A-\?\?/g, "-");
text = text.replace(/A-\?+/g, "-");
text = text.replace(/A-\\"-\?+/g, "-");

// Fix close button
text = text.replace(/<button[^>]*onClick=\{\(\) => setSelectedDemo\(null\)\}[^>]*>[\s\S]*?<\/button>/, "<button onClick={() => setSelectedDemo(null)} className=\"bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl transition-colors cursor-pointer\"><X className=\"w-5 h-5\" /></button>");

fs.writeFileSync("src/components/DemosPage.tsx", text, "utf8");

