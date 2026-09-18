
const fs = require("fs");
let text = fs.readFileSync("public/fitbitepizza/index.html", "utf8");

// Specific corrupted patterns:
text = text.replace(/[^\x00-\x7F]+\?"/g, "-");
text = text.replace(/[^\x00-\x7F]+\?o/g, "\"");
text = text.replace(/[^\x00-\x7F]+\?\?/g, "\"");
text = text.replace(/[^\x00-\x7F]+ /g, " "); // e.g., A Feed -> Feed
text = text.replace(/[^\x00-\x7F]+c 2026/g, "© 2026");

fs.writeFileSync("public/fitbitepizza/index.html", text, "utf8");

