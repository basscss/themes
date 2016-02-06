// Create array of color palettes from colorbrewer

var colorbrewer = require('colorbrewer');

module.exports = function() {

  var palettes = [];

  var keys = Object.keys(colorbrewer);

  keys.forEach(function(key) {
    var paletteObj  = colorbrewer[key];
    var palette;
    var length = 0;
    Object.keys(paletteObj).forEach(function(pkey) {
      var p = paletteObj[pkey];
      if (p.length > length) {
        length = p.length;
        palette = p;
      }
    });
    palettes.push({ name: key, colors: palette });
  });

  return palettes;

};
