// BUILD TASKS FOR LYNDONCORE.COM

var gulp           = require('gulp');

var autoprefixer   = require('autoprefixer');
var cleanCSS       = require('gulp-clean-css');
var connect        = require('gulp-connect');
var imagemin       = require('gulp-imagemin');
var gzip           = require('gulp-gzip');
var postcss        = require('gulp-postcss');
var sass           = require('gulp-sass');


// =================================================== HTML tasks

gulp.task('gzip-html', function() {
    gulp.src('*.html')
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('build'));
});

// =================================================== Styles (CSS) tasks

gulp.task('css', function () {
    return gulp.src('css/main.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(cleanCSS())
        .pipe(gzip())
        .pipe(gulp.dest('build/css'));
});

gulp.task('embedded-css', function() {
    gulp.src('css/embedded.css')
    .pipe(postcss([ autoprefixer() ]))
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
