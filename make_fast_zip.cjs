const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync } = require("child_process");

const desktopPath = path.join(os.homedir(), "Desktop");
const zipPath = path.join(desktopPath, "Saim_Dev_Portfolio_Deployment.zip");

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

// Compress source code, dist, public, etc. excluding node_modules
const psCmd = `powershell -Command "Get-ChildItem -Path 'd:\\dev\\prisma-landing' -Exclude 'node_modules','.git' | Compress-Archive -DestinationPath '${zipPath}' -Force"`;
console.log("Creating fast Deployment ZIP...");
execSync(psCmd, { stdio: "inherit" });
console.log("SUCCESS: Created Saim_Dev_Portfolio_Deployment.zip on Desktop!");
