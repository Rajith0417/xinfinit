const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));

// Rest of your Gulp tasks

// Example sass task
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Example watch task
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

// Example default task
gulp.task('default', gulp.series('sass', 'watch'));
