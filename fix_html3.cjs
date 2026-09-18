
const fs = require("fs");
let text = fs.readFileSync("public/fitbitepizza/index.html", "utf8");

text = text.replace(/[^\x00-\x7F]+/g, "");

fs.writeFileSync("public/fitbitepizza/index.html", text, "utf8");

