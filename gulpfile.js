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
    .pipe(banner('/* PrefaceCSS <https://github.com/cluzier/PrefaceCSS> , Copyright 2019, Conner Luzier */\n', {}))
    .pipe(rename('preface.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scss:min', function () {
  return gulp.src('./src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(banner('/* PrefaceCSS <https://github.com/cluzier/PrefaceCSS> , Copyright 2019, Conner Luzier */\n', {}))
    .pipe(rename('preface.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['scss', 'scss:min']);
});