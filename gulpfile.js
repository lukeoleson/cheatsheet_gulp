// All these modules we want to include we use npm to install as local
// dev dependencies

// Notice that all the gulp plugins are prefixed with 'gulp-'

// This is the actual gulp module where we get access to the gulp 
// function we are going to be using to automate these tasks. 
//      > npm install --save-dev gulp-imagemin
const gulp = require('gulp');
// This is a module we installed from github for optimizing images
//      > npm install --save-dev gulp-imagemin
const imagemin = require('gulp-imagemin');
// this is a v we installed for minifying js
//      > npm install --save-dev gulp-uglify
const uglify = require('gulp-uglify');
// this module compiles our sass files
//      > npm install --save-dev gulp-sass
const sass = require('gulp-sass');
// this module will combine multiple files into one
//      > npm install --save-dev gulp-concat
const concat = require('gulp-concat');


// Logs Message
gulp.task('message', function(){
    return console.log('Gulp is running...');
});

// This is the function that runs by default
// gulp.task('default', function(){
//     return console.log('Gulp is running...');
// });

// Copy all html files to our dist folder
// this will create our folder for us if it does not already exist
gulp.task('copyHtml', function(){
    gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

// here we are using the image optimizing package we installed as a dev
// dependency to optimize some images
// this function grabs all the images from the src/images dir., feeds them
// through the imagemin function the puts them into the dist/images dir.
gulp.task('imageMin', () => {
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Minify JS
// This uglify function minifies all our src js files and moves them to 
// the dist/js dir.
gulp.task('minify', function() {
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Compile our Sass files and move them to our css folder
// Note that this sass function has an option for handling errors in the
// sass where it logs the error (this can be seen in the docs for this
// plugin)
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// scripts
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
    // the arg here is the name of the new file
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// this function uses the gulp.watch() function to basically monitor files
// for changes and then call scripts when changes are noted
gulp.task('watch', function() {
    // gulp.watch(fileToBeWatched, [scriptToBeRunOnChange])
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/js/*.js', ['minify']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['scripts']);
});

// Running all our functions by default
// We can accomplish this by putting in an array of our function names
// rather than a callback function
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']);


