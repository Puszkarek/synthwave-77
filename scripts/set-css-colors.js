const fs = require("fs");
// Update paths to be relative to the script's location
const path = require('path');
const scriptDir = path.dirname(__filename);

const gtk3Path = path.join(scriptDir, "../gtk-3.0/gtk.css");
const gtk4Path = path.join(scriptDir, "../gtk-4.0/gtk.css");


const bgColor = "#12141f";
const backdropBgColor = "#2d2f54";

const primaryColor = "#e100ff";
const primaryHoverColor = "#00fff7";
const primaryActiveColor = "#ffd700";

const updateBackgroundColors = (cssText) => {
  let updatedCss = cssText;

  // Regular background color replacements, handling multi-line values
  updatedCss = updatedCss.replace(
    /background(-color)?:\s*(?!backdrop|none|transparent)([^;}]+(?:\n[^;}]+)*)(;|\})/g,
    `background-color: ${bgColor};`
  );

  // Background image replacements, handling multi-line values
  updatedCss = updatedCss.replace(
    /background-image:\s*(?!none|transparent)([^;}]+(?:\n[^;}]+)*)(;|\})/g,
    `background: ${bgColor};`
  );

  // Backdrop background color replacements with multi-line support
  updatedCss = updatedCss.replace(
    /([^{]+):backdrop\s*{([^}]+)}/g,
    (match, selector, properties) => {
      const updatedProperties = properties.replace(
        /background(-color)?:\s*(?!none|transparent)([^;}]+(?:\n[^;}]+)*)(;|\})/g,
        `background-color: ${backdropBgColor};`
      );
      return `${selector}:backdrop {${updatedProperties}}`;
    }
  );

  return updatedCss;
};

const updateFontColors = (cssText) => {
  let updatedCss = cssText;

  // Regular colors (color, border-color, border, outline, outline-color)
  const colorProperties = [
    /(?:^|;|\s)(?:-[a-z]+-)?color:\s*(?!none|transparent)([^;}]+(?:\n[^;}]+)*)(;|\})/g,
    /(?:^|;|\s)(?:-[a-z]+-)?(?:border|outline)(?:-[a-z]+)*-color:\s*(?!none|transparent)([^;}]+(?:\n[^;}]+)*)(;|\})/g,
    /(?:^|;|\s)(?:border|outline):\s*(?!none|transparent)([^;}]+(?:\n[^;}]+)*)(;|\})/g,
  ];

  colorProperties.forEach((pattern) => {
    updatedCss = updatedCss.replace(pattern, (match, content, ending) => {
      if (match.includes('border:') || match.includes('outline:')) {
        // Handle both alpha() function and direct color values
        return match.replace(/alpha\([^)]+\)|(?:#|rgb|rgba|hsl|hsla)[^;}]+/, primaryColor +';');
      }
      return match.replace(/[^:]+$/, primaryColor + ending);
    });
  });

  // Hover states
  updatedCss = updatedCss.replace(
    /([^{]+(?:hover)[^{]*)\s*{([^}]+)}/g,
    (match, selector, properties) => {
      let updatedProperties = properties;

      // First update existing color properties
      colorProperties.forEach((pattern) => {
        updatedProperties = updatedProperties.replace(
          pattern,
          (match, content, ending) => {
            if (match.includes('border:') || match.includes('outline:')) {
              // Handle both alpha() function and direct color values
              return match.replace(/alpha\([^)]+\)|(?:#|rgb|rgba|hsl|hsla)[^;}]+/, primaryHoverColor +';');
            }
            return match.replace(/[^:]+$/, primaryHoverColor + ending);
          }
        );
      });

      // Add missing properties
      if (!updatedProperties.includes("color:")) {
        updatedProperties = `color: ${primaryHoverColor};${updatedProperties}`;
      }
      if (!updatedProperties.includes("border-color:") && !!updatedProperties.includes("border:")) {
        updatedProperties = `border-color: ${primaryHoverColor};${updatedProperties}`;
      }

      return `${selector} {${updatedProperties}}`;
    }
  );

  // Active, selected and checked states
  updatedCss = updatedCss.replace(
    /([^{]+(?:active|selected|checked)[^{]*)\s*{([^}]+)}/g,
    (match, selector, properties) => {
      let updatedProperties = properties;

      // Update existing color properties
      colorProperties.forEach((pattern) => {
        updatedProperties = updatedProperties.replace(
          pattern,
          (match, content, ending) => {
            if (match.includes('border:') || match.includes('outline:')) {
              // Handle both alpha() function and direct color values
              return match.replace(/alpha\([^)]+\)|(?:#|rgb|rgba|hsl|hsla)[^;}]+/, primaryActiveColor+';');
            }
            return match.replace(/[^:]+$/, primaryActiveColor + ending);
          }
        );
      });

      // Add missing properties
      if (!updatedProperties.includes("color:")) {
        updatedProperties = `color: ${primaryActiveColor};${updatedProperties}`;
      }
      if (!updatedProperties.includes("border-color:") && !!updatedProperties.includes("border:")) {
        updatedProperties = `border-color: ${primaryActiveColor};${updatedProperties}`;
      }

      return `${selector} {${updatedProperties}}`;
    }
  );

  return updatedCss;
};

const sharpRadius = (cssText) => {
  let updatedCss = cssText;

  // Replace all border-radius with 0 value;

  updatedCss = updatedCss.replace(
    /border-radius:\s*[^;}]+(?:\n[^;}]+)*(;|\})/g,
    "border-radius: 0;"
  );

  return updatedCss;
};

const updateCSS = (originalCSS) => {
  const colorsUpdated = updateFontColors(originalCSS);
  const sharpRadiusUpdated = sharpRadius(colorsUpdated);
  const finalCSS = updateBackgroundColors(sharpRadiusUpdated);

  return finalCSS;
};

const gtk3 = fs.readFileSync(gtk3Path, "utf8");
const gtk4 = fs.readFileSync(gtk4Path, "utf8");

const gtk3Updated = updateCSS(gtk3);
const gtk4Updated = updateCSS(gtk4);

fs.writeFileSync(gtk3Path, gtk3Updated);
fs.writeFileSync(gtk4Path, gtk4Updated);
