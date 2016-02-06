// Build documentation site

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var cssstats = require('cssstats');
var colors = require('colors.css');
var data = require('../package.json');
var colorable = require('colorable');

data.filesize = require('filesize');

var css = fs.readFileSync(path.join(__dirname, '../css/bassdock.min.css'), 'utf8');
data.stats = cssstats(css);
data.colors = Object.keys(colors).filter(function(color) {
  return color !== 'white';
});
data.title = _.capitalize(data.name);
data.cdn= '//d2v52k3cl9vedd.cloudfront.net/bassdock/' + data.version + '/bassdock.min.css';

data.tableExample = {
  thead: [ 'Name', 'Handle', 'Github', 'Website' ],
  tbody: [
    [ 'Brent Jackson', '@jxnblk', 'http://github.com/jxnblk', 'http://jxnblk.com' ],
    [ 'Adam Morse', '@mrmrs_', 'http://github.com/mrmrs', 'http://mrmrs.cc' ],
    [ 'John Otander', '@4lpine', 'http://github.com/johnotander', 'http://johnotander.com' ],
  ]
};

data.related = [
  { name: 'Basscss', href: 'http://basscss.com' },
  { name: 'Autogrid', href: 'http://github.com/jxnblk/autogrid' },
  { name: 'Autoform', href: 'http://github.com/jxnblk/autoform' },
  { name: 'Autotable', href: 'http://github.com/jxnblk/autotable' },
];

//data.download = 'https://github.com/jxnblk/skull/archive/' + data.version + '.zip';

data.combinations = [];
var combos = colorable(colors, { threshold: 3 });
Object.keys(combos).forEach(function(key) {
  var color = combos[key];
  color.combinations.map(function(combo) {
    combo.pair = color;
    data.combinations.push(combo);
  });
});

//data.combinations.sort(function(a, b) {
//  return b.contrast - a.contrast;
//});



var tpl = _.template(fs.readFileSync(path.join(__dirname, './layout.html'), 'utf8'));
data.content = _.template(fs.readFileSync(path.join(__dirname, './docs.html'), 'utf8'))(data);

var html = tpl(data);

fs.writeFileSync(path.join(__dirname, '../index.html'), html);

