const fs = require("fs");
// Update paths to be relative to the script's location
const path = require("path");
const scriptDir = path.dirname(__filename);

const gtk3Path = path.join(scriptDir, "../gtk-3.0/gtk.css");
const gtk4Path = path.join(scriptDir, "../gtk-4.0/gtk.css");

const removeBackdrops = (cssText) => {
  return cssText.replace();
};

const gtk3 = fs.readFileSync(gtk3Path, "utf8");
const gtk4 = fs.readFileSync(gtk4Path, "utf8");

const gtk3Updated = removeBackdrops(gtk3);
const gtk4Updated = removeBackdrops(gtk4);

fs.writeFileSync(gtk3Path, gtk3Updated);
fs.writeFileSync(gtk4Path, gtk4Updated);
