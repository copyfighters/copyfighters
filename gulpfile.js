var gulp = require('gulp');

var sass = require('gulp-sass');

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

// Convert SASS to CSS files.
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
});

// Watch task for SASS files.
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('build', ['copy-bootstrap', 'sass']);
