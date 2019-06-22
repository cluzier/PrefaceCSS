const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const banner = require('gulp-banner');
const rename = require('gulp-rename');

gulp.task('scss', function () {
  return gulp.src('./src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    .pipe(banner('/* css-boilerplate <https://github.com/cluzier/css-boilerplate> , Copyright 2019, Conner Luzier */\n', {}))
    .pipe(rename('css-boilerplate.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['scss', 'scss:min']);
});
