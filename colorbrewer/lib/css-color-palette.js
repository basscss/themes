
var _ = require('lodash');

var createColorObject = require('./create-color-obj');
var keyword = require('./get-color-keyword');

module.exports = function(options) {

  var options = options || {};
  options = _.defaults(options, {
    name: 'colors',
    colors: [],
    customProperties: false,
    prefix: false,
  });

  //var colors = options.colors.map(createColorObject);
  var colors = createColorObject(options.colors);
  var prefix = options.prefix || '';


  function colorRules(color) {
    return [
      '.',
      prefix,
      color.name,
      ' { color: ',
      options.customProperties ? 'var(--' + color.name + ')' : color.hex,
      '; }'
    ].join('');
  }

  function backgroundColorRules(color) {
    return [
      '.',
      prefix,
      'bg-',
      color.name,
      ' { background-color: ',
      options.customProperties ? 'var(--' + color.name + ')' : color.hex,
      '; }'
    ].join('');
  }

  function borderColorRules(color) {
    return [
      '.',
      prefix,
      'border-',
      color.name,
      ' { border-color: ',
      options.customProperties ? 'var(--' + color.name + ')' : color.hex,
      '; }'
    ].join('');
  }

  function customProperties(color) {
    return [
      '  --',
      prefix,
      color.name,
      ': ',
      color.hex,
      ';'
    ].join('');
  }



  var colorRules = colors.map(colorRules).join('\n');
  var backgroundColorRules = colors.map(backgroundColorRules).join('\n');
  var borderColorRules = colors.map(borderColorRules).join('\n');

  if (options.customProperties) {
    customProperties = [
      ':root {',
      colors.map(customProperties).join('\n'),
      '}'
    ].join('\n') + '\n';
  } else {
    customProperties = '';
  }

  var header = [
    '/*',
    '',
    '  ' + options.name,
    '',
    '*/'
  ].join('\n');

  var css = [header, colorRules, backgroundColorRules, borderColorRules, customProperties].join('\n\n');

  return css;

};

