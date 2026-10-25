import fs from "fs";

const matches = JSON.parse(fs.readFileSync("scripts/chart_matches.json", "utf8"));
const match99 = matches.find(m => m.id === "template-99" || m.title?.includes("Safe Food Preparation") || m.slug?.includes("vacuum"));
console.log("Match 99:", match99);

const status = JSON.parse(fs.readFileSync("scripts/chart_url_status.json", "utf8"));
const stat99 = status.find(s => s.id === "template-99" || s.slug?.includes("vacuum"));
console.log("Stat 99:", stat99);
