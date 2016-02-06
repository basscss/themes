// Creates a name-value object for an array of colors
// and prevents naming conflicts

var _ = require('lodash');
var keyword = require('./get-color-keyword');

module.exports = function(colors, options) {
 
  var colornames = [];

  // Dedupe color names
  function checkDupes(name) {
    var index = _.indexOf(colornames, name);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  function addSuffix(name, idx) {
    var idx = idx || 2;
    name += '-' + idx;
    if (checkDupes(name)) {
      idx++;
      addSuffix(name, idx);
    } else {
      return name;
    }
  }

  function createColorObject(hex) {
    var name = keyword(hex);
    if (checkDupes(name)) {
      name = addSuffix(name);
      colornames.push(name);
    } else {
      colornames.push(name);
    }
    return {
      name: name,
      hex: hex,
    }
  };

  colors = colors.map(createColorObject);

  return colors;

};
