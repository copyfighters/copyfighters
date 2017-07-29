var gulp = require('gulp');

var jshint        = require('gulp-jshint');
var sass          = require('gulp-sass');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');  // postcss plugin
var cssnano       = require('cssnano');       // postcss plugin
var sassLint      = require('gulp-sass-lint');
var sourcemaps    = require('gulp-sourcemaps');

// Build SASS files.
gulp.task('css', function () {
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
gulp.task('css:watch', function () {
  gulp.watch('./sass/**/*.scss', ['css']);
});

// Copy fonts to static folders.
gulp.task('copy-fonts', function() {
  var fonts = [
    './node_modules/typeface-fira-sans/files/**/*.{eot,svg,woff,woff2}',
    './node_modules/typeface-zilla-slab/files/**/*.{eot,svg,woff,woff2}'
  ];
  gulp.src(fonts)
    .pipe(gulp.dest('./static/fonts/'));
});

gulp.task('build', ['css', 'copy-fonts']);

// SASS lint
gulp.task('sass-lint', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// JavaScript lint
gulp.task('js-lint', function() {
  return gulp.src('./static/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
