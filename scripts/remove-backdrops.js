const fs = require("fs");
const path = require("path");
const scriptDir = path.dirname(__filename);

const gtk3Path = path.join(scriptDir, "../gtk-3.0/gtk.css");

const removeBackdrops = (cssText) => {
  let updatedCss = cssText;

  // Remove selectors where all lines end with :backdrop
  updatedCss = cssText.replace(/[^{]*:backdrop[^}]*}/g, "");

  /*   // For mixed selectors, only remove the :backdrop parts
  updatedCss = updatedCss.replace(/([^,\n]*:backdrop,?\s*\n?)/g, "");

  // Clean up any empty rules that might be left
  updatedCss = updatedCss.replace(/[^{]+{\s*}/g, "");

  // Remove extra blank lines
  updatedCss = updatedCss.replace(/\n\s*\n\s*\n/g, "\n\n");
 */
  return updatedCss;
};

const gtk3 = fs.readFileSync(gtk3Path, "utf8");

const gtk3Updated = removeBackdrops(gtk3);

fs.writeFileSync(gtk3Path, gtk3Updated);
