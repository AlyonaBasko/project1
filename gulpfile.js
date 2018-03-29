var gulp = require('gulp');
var scss = require('gulp-scss');

gulp.task('scss', function () {
    gulp.src('./app/**/*.scss')
        .pipe(scss())
    .pipe(gulp.dest('./app/'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./add/**/*.scss', ['scss']);
});