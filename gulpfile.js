var path = require('path');
var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
// var Proxy = require('gulp-api-proxy');
var $ = require('gulp-load-plugins')();
var server = require('./server.js');

// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

var port = $.util.env.port || 1337;
var app = 'app/';
var dist = 'dist/';

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task("vendorCss", function() {
  return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.css',
      'node_modules/font-awesome/css/font-awesome.css',
      'node_modules/animate.css/animate.css',
      'node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css',
      'node_modules/datatables/media/css/jquery.dataTables.css',
      'node_modules/select2/dist/css/select2.css'
    ])
    .pipe($.concat('vendor.css'))
    .pipe(gulp.dest(dist + 'vendor/css/'))
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(dist + 'vendor/css/'))
    .pipe($.size({ title : 'css' }))
    .pipe($.connect.reload());
});

gulp.task("vendorFonts", function() {
  return gulp.src([
      'node_modules/font-awesome/fonts/*.{woff2,woff,ttf,svg,eot,otf}'
    ])
    .pipe(gulp.dest(dist + 'vendor/fonts/'))
    .pipe($.size({ title : 'fonts' }))
    .pipe($.connect.reload());
});

gulp.task("vendorJs", function() {
  return gulp.src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/bootstrap-switch/dist/js/bootstrap-switch.js',
      'node_modules/jquery-match-height/dist/jquery.matchHeight.js',
      'node_modules/datatables/media/js/jquery.dataTables.min.js',
      'node_modules/select2/dist/js/select2.full.js',
      app + 'vendor/scripts/init.js'
    ])
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest(dist + 'vendor/js/'))
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(dist + 'vendor/js/'))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload());
});

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }))
    .pipe($.connect.reload());
});

// gulp.task('styles',function(cb) {

//   // convert stylus to css
//   return gulp.src(app + 'stylus/main.styl')
//     .pipe($.stylus({
//       // only compress if we are in production
//       compress: isProduction,
//       // include 'normal' css into main.css
//       'include css' : true
//     }))
//     .pipe($.autoprefixer({browsers: autoprefixerBrowsers}))
//     .pipe(gulp.dest(dist + 'css/'))
//     .pipe($.size({ title : 'css' }))
//     .pipe($.connect.reload());

// });

gulp.task('styles', function() {
  return gulp.src(app +'scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dist + 'css/'))
        .pipe($.size({ title : 'css' }))
        .pipe($.connect.reload());
});

// add livereload on the given port
gulp.task('serve', function() {
  // $.connect.server({
  //   root: dist,
  //   port: port,
  //   livereload: {
  //     port: 35729
  //   },
  //   middleware: function (connect, opt) {
  //     // `localhost/server/api/getuser/1` will be proxied to `192.168.1.186/server/api/getuser/1`
  //     opt.route = '/api';
  //     opt.context = 'http://192.168.2.3:8150';
  //     var proxy = new Proxy(opt);
  //     return [proxy];
  //   }
  // });
  server.start({
    serveDirectory: dist,
    port: port,
    liveReloadPort: 35729
  });
});

// copy images
gulp.task('images', function(cb) {
  return gulp.src(app + 'images/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe($.size({ title : 'images' }))
    .pipe(gulp.dest(dist + 'images/'));
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(app + 'stylus/*.styl', ['styles']);
  gulp.watch(app + 'scss/*.scss', ['styles']);
  gulp.watch(app + 'index.html', ['html']);
  gulp.watch(app + 'scripts/**/*.js', ['scripts']);
  gulp.watch(app + 'scripts/**/*.jsx', ['scripts']);
});

// remove bundels
gulp.task('clean', function(cb) {
  return del([dist], cb);
});


// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['images', 'html', 'vendorCss', 'vendorJs', 'vendorFonts', 'scripts', 'styles', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['images', 'html','scripts','styles']);
});