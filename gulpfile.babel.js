import gulp from 'gulp';

const day = '20160113', 
        mainjs = 'appcreat', 
        maincss = 'app',
        chromeEx = '/Users/julaud/www/panli/chrome-ext/appRemove/js/',
        zSrcPath = '/Users/julaud/www/panli/sf-panli-com/Ued/H5/elementRemove/js/';

import sass         from 'gulp-sass';
import connect      from 'gulp-connect';
import minifycss    from 'gulp-minify-css';
import concat       from 'gulp-concat';
import uglify       from 'gulp-uglify';
import rename       from 'gulp-rename';
import notify       from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import zip          from 'gulp-zip';

import header       from 'gulp-header';
import pkg          from './package.json';


const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;



const banner = [
  '/*! ',
    '<%= pkg.name %> ',
    'v<%= pkg.version %> | ',
    `(c) ${new Date()} <%= pkg.author %> |`,
    ' <%= pkg.homepage %>',
  ' */',
  '\n'
].join('');


gulp.task('scripts',() => gulp.src('./src/*.js')
    .pipe(concat(`${mainjs}.js`))
    .pipe(gulp.dest(`./.tmp/js`))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(header(banner, { pkg }))
    .pipe(gulp.dest(`./appRemove/js/`))
    .pipe(gulp.dest(zSrcPath))
    .pipe(notify({ message: 'Scripts task complete' })));





// 静态服务器 + 监听 scss/html 文件
gulp.task('dev', () => {


    gulp.watch(`./src/*.js`, ['scripts']);


});




gulp.task('default', ['dev','scripts']);
