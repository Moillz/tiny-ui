// 'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function compile() {
  return src('../src/styles/index.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    // .pipe(cssmin())
    .pipe(rename('tiny-ui.css'))
    .pipe(dest('../dist/styles'));
}

function copyfont() {
  return src('../src/styles/common/iconfont/fonts/*.*')
    // .pipe(cssmin())
    .pipe(gulp.dest('../dist/styles/fonts'));
}

exports.build = series(compile, copyfont);
