const fs = require("fs");
let buf = fs.readFileSync("scripts/sample_test_pdf.pdf");
let str = buf.toString("binary");

const sanitize = (s) => {
  return s
    .replace(/fooddocs\.com/gi, "saimdev.site")
    .replace(/fooddocs/gi, (m) => m[0] === m[0].toUpperCase() ? "Saim Dev" : "saim dev")
    .replace(/food-docs/gi, "saim-dev ");
};

let cleaned = sanitize(str);
fs.writeFileSync("scripts/cleaned_test.pdf", Buffer.from(cleaned, "binary"));
console.log("Original matches:", (str.match(/fooddocs/gi) || []).length);
console.log("Cleaned matches:", (cleaned.match(/fooddocs/gi) || []).length);
console.log("Original len:", str.length, "Cleaned len:", cleaned.length);
