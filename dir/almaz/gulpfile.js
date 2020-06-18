const gulp = require('gulp');
// const sass = require('gulp-sass');
//image
const imagemin = require('gulp-imagemin');
//css
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uncss = require('gulp-uncss');
const cssnano = require('gulp-cssnano');
const gcmq = require('gulp-group-css-media-queries');




const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('src/css/**/*.css')
    .pipe(sourcemaps.init())
        .pipe(gcmq())
        .pipe(autoprefixer({
            cascade: false
        }))

        .pipe(cleanCSS({
            level: 2}))
    
        // 
        
    .pipe(sourcemaps.write())
    // .pipe(cssnano())  
    // .pipe(uncss({
    //     html: ['index.html', 'posts/**/*.html', 'http://example.com']
    // }))      
    .pipe(gulp.dest('build/css'))
    
    .pipe(browserSync.stream());
}
function img() {
    return gulp.src('src/img/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
}
function js() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/popper.js/dist/popper.min.js', 'node_modules/jquery/dist/jquery.min.js' ])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
           baseDir: "./",
           index: "index.html"
        }
    });
    // gulp.watch('src/sass/**/*.scss', style)
    gulp.watch('src/img/*.png', img);
    gulp.watch('*.html').on('change',browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.js = js;
exports.img = img;
exports.watch = watch;