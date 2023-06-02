const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const autoprefix = require("gulp-autoprefixer");
const htmlmin = require("gulp-htmlmin");
const cssmin = require("gulp-clean-css");
const jsmin = require("gulp-js-minify");
const concat = require("gulp-concat");
const scss = require("gulp-sass")(require("sass"));
//const del = require('del');
const clean = require("gulp-clean");

let dist_folder = "dist";

function html() {
  return gulp
    .src("./src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dist_folder))
    .pipe(browsersync.stream());
}

function compileSass() {
  return gulp
    .src("src/css/*.scss")
    .pipe(scss().on("error", scss.logError))
    .pipe(gulp.dest(dist_folder))
    .pipe(browsersync.stream());
}

function css() {
  return gulp
    .src("./src/css/*.scss")
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(
      autoprefix({
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest(dist_folder))
    .pipe(browsersync.stream());
}

function js() {
  return gulp
    .src("./src/main.js", { sourcemaps: true })
    .pipe(jsmin())
    .pipe(concat("scripts.min.js"))
    .pipe(gulp.dest(dist_folder))
    .pipe(browsersync.stream());
}

function browserServe() {
  return browsersync.init({
    server: {
      baseDir: "./dist/",
    },
    port: 3000,
    notify: false,
  });
}

function img() {
  return gulp.src("./src/img/**/*.*").pipe(gulp.dest("./dist/img"));
}

function clear() {
  return gulp
    .src("./dist", {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
}

function watch() {
  gulp.watch("./src/*.html", html);
  gulp.watch("./src/css/*.css", css);
  gulp.watch("./src/*.js", js);
  gulp.watch("./src/img/**/*.*", img);
  gulp.watch("./src/css/*.scss", compileSass);
}

exports.html = html;
exports.css = css;
exports.gulp = gulp;
exports.scss = scss;
exports.browsersync = browsersync;
exports.autoprefix = autoprefix;
exports.jsmin = jsmin;
exports.concat = concat;
exports.clear = clear;
exports.build = gulp.series(clear, html, css, js, compileSass, img);

exports.dev = gulp.parallel(
  browserServe,
  watch,
  gulp.series(html, css, js, compileSass, img)
);

//exports.dev = gulp.parallel(browsersync, watch, gulp.series(html, css, js));
//exports.watch = gulp.series(html, css, js, browserServe, watch);
