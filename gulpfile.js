'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('css/source/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public_html/css')); });


gulp.task('sass:watch', function() {
    gulp.watch('css/source/*.scss', gulp.series('sass'));
});

gulp.task('watch', function() {
    gulp.watch('css/source/*.scss', gulp.series('sass'));
});