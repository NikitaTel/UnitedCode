'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('css/source/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css')); });


gulp.task('sass:watch', function() {
    gulp.watch('css/source/*.scss', gulp.series('sass'));
});

gulp.task('watch', function() {
    gulp.watch('css/source/*.scss', gulp.series('sass'));
});