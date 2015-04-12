
var data = require('./package.json');
var header = require('page-header');
var footer = require('page-footer');

data.title = 'Themes';
data.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.3.6/bassdock.min.css';

data.include = function(name) {
  return data[name];
};
data.header = header(data);
data.footer = footer(data);

data.asset_path = 'http://d2v52k3cl9vedd.cloudfront.net/basscss/assets/';

data.themes = [
  {
    title: 'Skull',
    url: 'http://basscss.com/skull',
    description: 'Bare bones boilerplate and Basscss theme',
    image: 'basscss.com-skull-2015-04-12-06:53-640.png'
  },
  {
    title: 'Basscraft',
    url: 'http://basscss.com/basscraft',
    description: 'Bold typography, monochromatic tendencies, and chunky borders',
    image: 'basscss.com-basscraft-2015-04-12-06:54-640.png'
  },
];

module.exports = data;

