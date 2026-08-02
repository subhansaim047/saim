const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync } = require("child_process");

const desktopPath = path.join(os.homedir(), "Desktop");
const zipPath = path.join(desktopPath, "Saim_Dev_Portfolio_Deployment.zip");

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

const psCmd = `powershell -Command "Compress-Archive -Path 'd:\\dev\\prisma-landing\\*' -DestinationPath '${zipPath}' -Force"`;
console.log("Running ZIP command...");
execSync(psCmd, { stdio: "inherit" });
console.log("SUCCESS: Created Saim_Dev_Portfolio_Deployment.zip on Desktop!");
