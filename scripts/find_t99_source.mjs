import fs from "fs";

for (const f of ["scripts/chart_matches.json", "scripts/chart_url_status.json", "scripts/extracted_cards.json"]) {
  if (fs.existsSync(f)) {
    const raw = fs.readFileSync(f, "utf8");
    if (raw.includes("template-99") || raw.includes("vacuum-sealed")) {
      console.log(`Found in ${f}`);
    }
  }
}
