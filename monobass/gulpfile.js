
var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var s3 = require('gulp-s3');
var fs = require('fs');
var marked = require('marked');
var markedExample = require('marked-example');
var _ = require('lodash');
var cheerio = require('cheerio');
var cssstats = require('cssstats');
var blkfooter = require('blk-footer');


var renderer = new marked.Renderer();
renderer.code = markedExample({
  classes: {
    container: 'bg-darken-1 rounded',
    rendered: 'p2',
    code: 'p2 bg-darken-1'
  }
});

var blkdocs = require('../../blk-docs');

gulp.task('html', function() {
  var data = require('./package.json');
  var options = {};
  data.links = [{
    href: '//d2v52k3cl9vedd.cloudfront.net/monobass/' + data.version + '/monobass.min.css',
    name: 'CDN'
  }];
  data.footer = blkfooter(data);
  options.readme = fs.readFileSync('./README.md', 'utf8');
  options.content = fs.readFileSync('./docs/index.html', 'utf8');
  options.css = fs.readFileSync('./css/monobass.min.css', 'utf8');
  var html = blkdocs(data, options).html;
  fs.writeFileSync('./index.html', html);
});

gulp.task('s3', function() {
  var version = require('./package.json').version;
  var config = require('./aws.json');
  gulp.src('./css/*.css')
    .pipe(s3(config, {
      uploadPath: 'monobass/' + version + '/'
    }));
});

gulp.task('css', function() {
  gulp.src('./src/monobass.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('default', ['css', 'html', 'serve'], function() {
  gulp.watch(['./src/**/*', './README.md', './docs/**/*'], ['css', 'html']);
});

