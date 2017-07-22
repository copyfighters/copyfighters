var gulp = require('gulp');

var sass          = require('gulp-sass');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');  // postcss plugin
var cssnano       = require('cssnano');       // postcss plugin
var sourcemaps    = require('gulp-sourcemaps');

// Copy Bootstrap files to static folders.
gulp.task('copy-bootstrap', function() {
  // CSS
  css = [
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/bootstrap/dist/css/bootstrap.min.css.map',
  ];
  gulp.src(css)
    .pipe(gulp.dest('./static/css'));

  // JavaScript
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./static/js/vendor'));
});

// Build SASS files.
gulp.task('build', function () {
  // Specify the processors postcss uses.
  var processors = [
    autoprefixer({browsers: ['> 5%']}),
    cssnano()
  ];
  /*
  While creating source maps:
  1. Convert SASS to CSS.
  2. Apply the postcss processors.
  */
  gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/css'));
});

// Watch task for SASS files.
gulp.task('build:watch', function () {
  gulp.watch('./sass/**/*.scss', ['build']);
});

// Copy fonts static folders.
gulp.task('copy-fonts', function() {
  // CSS
  css = [
    './node_modules/typeface-zilla-slab/files/',
  ];
  gulp.src(css)
    .pipe(gulp.dest('./static/css'));

  // JavaScript
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./static/js/vendor'));
});

gulp.task('build', ['sass']);
