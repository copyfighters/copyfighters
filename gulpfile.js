var gulp = require('gulp');

var sass          = require('gulp-sass');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');  // postcss plugin
var cssnano       = require('cssnano');       // postcss plugin
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
  gulp.watch('./sass/**/*.scss', ['build']);
});

// Copy fonts static folders.
gulp.task('copy-fonts', function() {
  gulp.src(['./node_modules/typeface-zilla-slab/files/**/*.{eot,svg,woff,woff2}',
            './node_modules/font-awesome/fonts/**/*.{eot,svg,woff,woff2,ttf,otf}'])
    .pipe(gulp.dest('./static/fonts/'));
});

gulp.task('build', ['css', 'copy-fonts']);
