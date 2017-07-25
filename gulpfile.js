// JavaScript Document


var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
//var watchSass = require("gulp-watch-sass");


// SCSS - concat,uglify
gulp.task('scss', function() {
	return gulp.src('./comp/scss/*.scss')
     .pipe(sass())
  	.pipe(concat('style.css'))
  	.pipe(uglifycss())
  	.pipe(gulp.dest('./dist/css/'));
});


//JS - concat, ugilify
gulp.task('unify-js', function() {
    gulp.src('./comp/js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});


/*Watch for SCSS*/
gulp.task("css-watch", function() {
  gulp.watch(["./comp/scss/style.scss"],["scss"]);
});


/*Watch for JS*/
gulp.task("js-watch", function() {
  gulp.watch(["./comp/js/instanews.js"],["unify-js"]);
});


// Browser Sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
   // gulp.watch(["*.html","dist/css/style.css","dist/js/script.js"]).on("change", reload);
	gulp.watch("./*").on("change", reload);
});