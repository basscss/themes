
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        //exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.json/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'css-loader!cssnext-loader' },
      { test: /\.png$/, loader: 'file-loader?name=/images/[hash].[ext]' }
    ]
  },

  cssnext: {
    compress: true
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', ['/'], data)
  ]
}

