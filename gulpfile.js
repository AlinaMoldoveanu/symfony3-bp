var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var util = require('gulp-util');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var del = require('del');

var config = {
    assetsPath: 'app/Resources/assets',
    compiledPath: 'web',
    bowerDir: 'vendor/bower_components',
    sassPattern: 'sass/**/*.scss',
    production: !!util.env.production,
    revManifestPath: 'app/Resources/assets/rev-manifest.json'
};


// Watch should be run by default task only in development
if (config.production) {
    gulp.task('default', ['clean', 'styles', 'scripts', 'fonts']);
} else {
    gulp.task('default', ['clean', 'styles', 'scripts', 'fonts', 'watch']);
}

gulp.task('styles', function () {
    app.addStyle([
        config.assetsPath +'/sass/main.scss'
    ], 'styles.css');
});

gulp.task('scripts', function () {
    app.addScript([
        config.assetsPath + '/js/main.js'
    ], 'scripts.js');
});

gulp.task('fonts', function () {
    app.copy([
        // Write here the path to your fonts
    ], config.compiledPath +'/fonts');
});

gulp.task('clean', function () {
    del.sync(config.revManifestPath);
    del.sync('web/css/*');
    del.sync('web/js/*');
    del.sync('web/fonts/*');
});

gulp.task('watch', function () {
    gulp.watch(config.assetsPath +'/'+ config.sassPattern, ['styles']);
    gulp.watch(config.assetsPath +'/js/**/*.js', ['scripts']);
});


var app = {};

app.addStyle = function (paths, filename) {
    gulp.src(paths)
        .pipe(plumber())
        .pipe((!config.production) ? sourcemaps.init() : util.noop())
        .pipe(sass())
        .pipe(concat('css/'+ filename))
        .pipe(minifyCSS())
        .pipe(rev())
        .pipe((!config.production) ? sourcemaps.write('.') : util.noop())
        .pipe(gulp.dest(config.compiledPath))
        .pipe(rev.manifest(config.revManifestPath, {
            merge: true
        }))
        .pipe(gulp.dest('.'));
};

app.addScript = function (paths, filename) {
    gulp.src(paths)
        .pipe(plumber())
        .pipe((!config.production) ? sourcemaps.init() : util.noop())
        .pipe(concat('js/'+ filename))
        .pipe(uglify())
        .pipe(rev())
        .pipe((!config.production) ? sourcemaps.write('.') : util.noop())
        .pipe(gulp.dest(config.compiledPath))
        .pipe(rev.manifest(config.revManifestPath, {
            merge: true
        }))
        .pipe(gulp.dest('.'));
};

app.copy = function (files, outputDir) {
    gulp.src(files)
        .pipe(gulp.dest(outputDir));
};
