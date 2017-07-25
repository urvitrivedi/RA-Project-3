// JavaScript Document


// convert SASS to CSS

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

/*----a watch task that is watching folder-./comp/scss/*.scss for changes
and when we have a change calling task sass-2-css and converting to css
--------------*/
//gulp.task("css-watch", function() {
//  gulp.watch(["./comp/scss/*.scss"],["sass-2-css"]);
//});

/*----a watch task that is watching folder-./comp/js/*.js.scss for changes
and when we have a change calling task unify-js and converting to css
--------------*/
//gulp.task("js-watch", function() {
//  gulp.watch(["./comp/js/*.js"],["unify-js"]);
//});

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