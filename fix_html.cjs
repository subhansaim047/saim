
const fs = require("fs");
let text = fs.readFileSync("public/fitbitepizza/index.html", "utf8");

// Replace known corrupted sequences
text = text.replace(/\?"/g, "-");
text = text.replace(/A/g, "");
text = text.replace(/\?o/g, "\"");
text = text.replace(/\?\?/g, "\"");
text = text.replace(/Ac 2026/g, "© 2026");

fs.writeFileSync("public/fitbitepizza/index.html", text, "utf8");

