var gulp = require('gulp');

var sass          = require('gulp-sass');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');  // postcss plugin
var cssnano       = require('cssnano');       // postcss plugin
var sourcemaps    = require('gulp-sourcemaps');

// Build SASS files.
gulp.task('build', function () {
  // Specify the processors postcss uses.
  var processors = [
    //autoprefixer({ browsers: '[> 5%]', cascade: false }),
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
    .pipe(gulp.dest('./static/css/'));
});

// Watch task for SASS files.
gulp.task('build:watch', function () {
  gulp.watch('./sass/**/*.scss', ['build']);
});
