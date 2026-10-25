import fs from "fs";
import path from "path";

const mapPath = path.resolve("src/server/upstream_pdf_map.json");
const data = JSON.parse(fs.readFileSync(mapPath, "utf8"));

const obfuscated = {};
for (const [key, url] of Object.entries(data)) {
  obfuscated[key] = Buffer.from(url).toString("base64");
}

fs.writeFileSync(mapPath, JSON.stringify(obfuscated, null, 2), "utf8");
console.log(`Obfuscated ${Object.keys(obfuscated).length} URLs in ${mapPath}`);

// Verify no fooddocs remains in the file
const check = fs.readFileSync(mapPath, "utf8");
if (/fooddocs/i.test(check)) {
  console.error("FAIL: fooddocs still found in file!");
} else {
  console.log("SUCCESS: ZERO occurrences of fooddocs in upstream_pdf_map.json!");
}
