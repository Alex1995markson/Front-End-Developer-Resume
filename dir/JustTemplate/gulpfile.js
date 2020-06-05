const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const cssFile = [
    // './node_modules/normalize.css/normalize.css',
    './src/css/main.less',
    './src/css/nav.less',
    './src/css/button.less',
    './src/css/header.less',
    './src/css/features.less',
    './src/css/advantage.less',
    './src/css/solutions.less',
    './src/css/estimate.less',
    './src/css/steps.less',
    './src/css/footer.less'
    // './src/css/other.css'
];
const jsFile = [
    './src/js/lib.js',
    './src/js/some.js'
];
function styles() {
    // gulp.src(cssFile)
    //gulp.src('./src/css/**/*.css')
    return gulp.src(cssFile)
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level:2
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}
function scripts() {
    return gulp.src(jsFile)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/css/**/*.less', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./*html', browserSync.reload);
}
function clean() {
   return del(['build/*'])
}
gulp.task('styles',styles);
gulp.task('scripts', scripts)
gulp.task('watch', watch);
// gulp.task('clean', clean);
gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts)));
gulp.task('dev', gulp.series('build', 'watch'));
