var gulp = require('gulp');

var sass = require('gulp-sass');

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

gulp.task('build', ['sass']);
