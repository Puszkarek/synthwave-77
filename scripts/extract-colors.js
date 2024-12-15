import fs from 'fs';

const getColor = (color) => {
  return `color: ${color};\n`;
}

const extractAllCssColors = async() => {
  const cssText = fs.readFileSync('./gnome-shell.css', 'utf8');

    const colors = [];
    // Hex colors
    const hexRegex = /#[a-fA-F0-9]{6}([a-fA-F0-9]{2})?/g;
    // RGB colors
    const rgbRegex = /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/g;
    // RGBA colors
    const rgbaRegex = /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(?:0?\.)?\d+\s*\)/g;

    let match;
    
    // Extract hex colors
    while ((match = hexRegex.exec(cssText)) !== null) {
      colors.push(getColor(match[0]));
  }
  // Extract rgb colors
  while ((match = rgbRegex.exec(cssText)) !== null) {
      colors.push(getColor(match[0]));
  }
  
  // Extract rgba colors
  while ((match = rgbaRegex.exec(cssText)) !== null) {
      colors.push(getColor(match[0]));
  }

    const uniqueColors = Array.from(new Set(colors));

    return uniqueColors.join('');
}




extractAllCssColors().then(colors => {
  console.log(colors);
});