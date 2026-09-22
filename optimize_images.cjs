const fs = require('fs');
const path = require('path');

// wait for sharp to be available
function tryRequire() {
    try {
        const sharp = require('sharp');
        run(sharp);
    } catch(e) {
        setTimeout(tryRequire, 2000);
    }
}
tryRequire();

async function run(sharp) {
    const dir = 'public/fitbitepizza/images';
    const files = fs.readdirSync(dir);

    for (const file of files) {
        if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        // compress if > 250KB
        if (stat.size > 250000) {
            console.log(`Compressing ${file} (${(stat.size/1024).toFixed(1)} KB)`);
            const tempPath = filePath + '.tmp';
            try {
                if (file.toLowerCase().endsWith('png')) {
                    await sharp(filePath).png({ quality: 60, compressionLevel: 9 }).toFile(tempPath);
                } else {
                    await sharp(filePath).jpeg({ quality: 60 }).toFile(tempPath);
                }
                
                const newStat = fs.statSync(tempPath);
                console.log(` -> Reduced to ${(newStat.size/1024).toFixed(1)} KB`);
                fs.renameSync(tempPath, filePath);
            } catch (e) {
                console.error(`Error compressing ${file}: ${e.message}`);
                if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
            }
        }
    }
    console.log("Image compression complete!");
}
