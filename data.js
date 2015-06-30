
var pkg = require('./package.json')
var basscss = require('basscss/package.json')

module.exports = {
  title: 'Themes',
  path: '/themes',
  version: basscss.version,
  author: basscss.author.name,
  description: basscss.description,
  keywords: basscss.keywords,
  cdn: 'http://d2v52k3cl9vedd.cloudfront.net/basscss/assets/',
  themes: [
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
  ],
}



