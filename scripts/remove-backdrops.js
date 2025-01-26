const fs = require("fs");
const path = require("path");
const scriptDir = path.dirname(__filename);

const gtk3Path = path.join(scriptDir, "../src/gnome/gtk-4.0/gtk.scss");

const removeBackdrops = (cssText) => {
  let updatedCss = cssText;

  // Remove selectors where all lines end with :backdrop
  const allLines = cssText.split("\n");

  const allLinesEndingWithBackdrop = allLines.filter((line) => {
    return line.includes(":backdrop") && line.endsWith(",") ? false : true;
  });

  return allLinesEndingWithBackdrop.join("\n");
};

const gtk3 = fs.readFileSync(gtk3Path, "utf8");

const gtk3Updated = removeBackdrops(gtk3);

fs.writeFileSync(gtk3Path, gtk3Updated);
