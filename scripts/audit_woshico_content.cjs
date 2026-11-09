const fs = require("fs");
const path = require("path");

const WOSHICO_DIR = path.join(__dirname, "../public/demos/woshico");

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith(".html")) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(WOSHICO_DIR);
console.log(`Found ${htmlFiles.length} HTML files in woshico:`);

const report = {
  deadLinks: [],
  externalDeadLinks: [],
  dummyTextMatches: [],
  formsWithoutAction: [],
  missingImages: [],
  integrityAttributes: []
};

htmlFiles.forEach(file => {
  const relPath = path.relative(WOSHICO_DIR, file).replace(/\\/g, "/");
  const content = fs.readFileSync(file, "utf8");

  // 1. Check integrity attributes
  if (content.includes("integrity=")) {
    report.integrityAttributes.push(relPath);
  }

  // 2. Check dead links
  const hrefMatches = content.matchAll(/href=["']([^"']*)["']/g);
  for (const m of hrefMatches) {
    const href = m[1];
    if (href === "#" || href === "") {
      report.deadLinks.push({ file: relPath, href });
    }
  }

  // 3. Check dummy text
  const dummyKeywords = ["well-being in 2 weeks", "lorem ipsum", "dolor sit amet", "consectetur adipiscing", "dummy text"];
  dummyKeywords.forEach(kw => {
    if (content.toLowerCase().includes(kw.toLowerCase())) {
      report.dummyTextMatches.push({ file: relPath, keyword: kw });
    }
  });

  // 4. Check forms
  const formMatches = content.matchAll(/<form[^>]*>/g);
  for (const fm of formMatches) {
    const formTag = fm[0];
    report.formsWithoutAction.push({ file: relPath, formTag });
  }

  // 5. Check images
  const srcMatches = content.matchAll(/src=["']([^"']*)["']/g);
  for (const sm of srcMatches) {
    const src = sm[1];
    if (src.startsWith("/demos/woshico/")) {
      const diskPath = path.join(__dirname, "../public", src);
      if (!fs.existsSync(diskPath)) {
        report.missingImages.push({ file: relPath, src });
      }
    }
  }
});

console.log("\n=== AUDIT RESULTS ===");
console.log("Files with integrity attributes:", report.integrityAttributes.length);
console.log("Dead/empty links found:", report.deadLinks.length);
report.deadLinks.forEach(d => console.log(`  - [${d.file}] href="${d.href}"`));

console.log("Dummy text matches found:", report.dummyTextMatches.length);
report.dummyTextMatches.forEach(d => console.log(`  - [${d.file}] found "${d.keyword}"`));

console.log("Forms found:", report.formsWithoutAction.length);
report.formsWithoutAction.forEach(f => console.log(`  - [${f.file}] ${f.formTag}`));

console.log("Missing local images:", report.missingImages.length);
report.missingImages.forEach(m => console.log(`  - [${m.file}] MISSING: ${m.src}`));
