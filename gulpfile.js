// BUILD TASKS FOR LYNDONCORE.COM

var gulp = require('gulp');

var cleanCSS = require('gulp-clean-css');
var closureCompiler = require('gulp-closure-compiler');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');
var gzip = require('gulp-gzip');
var sass = require('gulp-sass');
 

// =================================================== HTML tasks

gulp.task('gzip-html', function() {
    gulp.src('*.html')
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('build'));
});

// =================================================== Styles (CSS) tasks

gulp.task('css', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('css/main.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(cleanCSS())
        .pipe(gzip())
        .pipe(gulp.dest('build/css'));
});

// INLINE CSS TASK
// ISSUE - not adding -moz prefix to "text-fill-color". (maybe dont specify webkit in source)
// ISSUE - wont work with autoprefixer being changed
gulp.task('inline-css', function() {
    gulp.src('css/inline-ignore.css')
    .pipe(autoprefixer({
        browsers: ['>1%']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('ignore')); 
});

// =================================================== SASS tasks

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {
    gulp.watch('sass/*.scss', ['sass']);
});

// =================================================== Scripts (JS) tasks

gulp.task('gzip-scripts', function() {
    gulp.src('js/scripts.js')
    .pipe(gzip())
    .pipe(gulp.dest('build/js'));
});

// =================================================== Images tasks

gulp.task('images', function() {
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
});

// =================================================== Local Server tasks

gulp.task('connect', function() {
    connect.server()
});

// ===================================== Gulp build -- run all

