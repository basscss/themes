
var _ = require('lodash');
var fs = require('fs');
var Color = require('color');
var palatable = require('palatable');
var mapColors = require('palatable/lib/map-colors');
var palettes = require('./lib/palettes')();

var pkg = require('./package.json');
var template = fs.readFileSync('demo/template.html', 'utf8');
var tpl = _.template(template);
// Need to rename this

// CSS
var demoCss = '';
function generateCss(name, colors) {
  var css = palatable({
    name: name,
    colors: colors,
    customProperties: true,
  });
  fs.writeFileSync('dist/' + name + '.css', css);
  demoCss += palatable({
    name: name,
    colors: colors,
    prefix: name + '-',
  });
}

palettes.forEach(function(palette) {
  generateCss(palette.name, palette.colors);
});

fs.writeFileSync('demo/demo.css', demoCss);

// HTML Demo

pkg.palettes = palettes.map(function(palette) {
  palette.colors = mapColors(palette.colors);
  return palette;
});

//pkg.dark = function(hex) {
//  return Color(hex).dark();
//};

var html = tpl(pkg);
//console.log(html);
fs.writeFileSync('index.html', html);


