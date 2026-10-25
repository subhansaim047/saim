import fs from "fs";
import path from "path";

// Ensure review dir exists
if (!fs.existsSync("review")) {
  fs.mkdirSync("review", { recursive: true });
}

console.log("Starting regulatory values & claims audit...");
