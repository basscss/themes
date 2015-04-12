
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var data = require('./data.js');

var tpl = _.template(fs.readFileSync('template.html', 'utf8'));
var html = tpl(data);


fs.writeFileSync('index.html', html);

