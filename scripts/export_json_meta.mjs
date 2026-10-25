import fs from "fs";
import { CORE_PAGES_METADATA } from "./craft_and_validate_metadata.mjs";

fs.writeFileSync("src/data/core_metadata.json", JSON.stringify(CORE_PAGES_METADATA, null, 2), "utf8");
console.log("Written src/data/core_metadata.json");
