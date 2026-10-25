import fs from "fs";

if (fs.existsSync("scripts/cleaned_charts_result.json")) {
  const charts = JSON.parse(fs.readFileSync("scripts/cleaned_charts_result.json", "utf8"));
  const t99 = charts.find(c => c.id === "template-99");
  console.log("cleaned_charts_result template-99:", t99);
}

if (fs.existsSync("scripts/all_fooddocs_templates.json")) {
  const docs = JSON.parse(fs.readFileSync("scripts/all_fooddocs_templates.json", "utf8"));
  const t99 = docs.find(c => c.id === "template-99");
  console.log("all_fooddocs_templates template-99:", t99);
}
