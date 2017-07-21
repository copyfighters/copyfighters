var gulp = require('gulp');

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

gulp.task('build', ['copy-bootstrap']);
