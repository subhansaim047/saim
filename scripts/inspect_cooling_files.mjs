import fs from "fs";

["template-2.webp", "template-3.webp", "template-93.webp"].forEach(f => {
  const p = "public/templates/posters/" + f;
  if (fs.existsSync(p)) {
    console.log(f, fs.statSync(p).size);
  } else {
    console.log(f, "not found");
  }
});
