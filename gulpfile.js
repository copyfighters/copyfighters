var gulp          = require('gulp');

var concat        = require('gulp-concat');
var pump          = require('pump');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var uglify        = require('gulp-uglify');

var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');    // postcss plugin
var cssnano       = require('cssnano');         // postcss plugin


// Build CSS file.
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
  gulp.src('./static-dev/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/css/'));
});

// Watch task for SASS files.
gulp.task('css:watch', function () {
  gulp.watch('./static-dev/sass/**/*.scss', ['css']);
});

// Combine all JS files in one.
gulp.task('js-all', function (cb) {
  var files = [
    './node_modules/jquery/dist/jquery.js',
     // jquery-countdown depends on jquery
    './node_modules/jquery-countdown/dist/jquery.countdown.js',
    './node_modules/typed.js/lib/typed.js',
    './node_modules/tether/dist/js/tether.js',
     // bootstrap depends on jquery & tether
    './node_modules/bootstrap/dist/js/bootstrap.js',
    // jquery.scrollto depends on jquery
    './node_modules/jquery.scrollto/jquery.scrollTo.js',
    './static-dev/js/main.js'
  ];
  pump([
      gulp.src(files),
      sourcemaps.init(),
      concat('bundle.js'),
      uglify(),
      sourcemaps.write('.'),
      gulp.dest('./static/js/')
    ],
    cb
  );
});

// Combine all polyfill libs for Internet Explorer in one file.
gulp.task('js-ie', function (cb) {
  var files = [
    './node_modules/html5shiv/dist/html5shiv-printshiv.js',
    './node_modules/respond.js/dest/respond.src.js'
  ];
  pump([
      gulp.src(files),
      concat('ie.js'),
      uglify(),
      gulp.dest('./static/js/')
    ],
    cb
  );
});

// Combine JavaScript tasks for all browsers and Internet Explorer.
gulp.task('js', ['js-all', 'js-ie']);

// Watch task for JavaScript files.
gulp.task('js:watch', function () {
  gulp.watch('./static-dev/js/**/*.js', ['js-all']);
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

gulp.task('build', ['css', 'copy-fonts', 'js']);
