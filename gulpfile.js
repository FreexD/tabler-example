const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// browsersync
const reload = (done) => {
  browserSync.reload();
  done();
};

// STATIC
const serveStatic = (done) => {
  console.log();
  browserSync.init({
    proxy: `localhost:${process.env.npm_package_config_staticPort}`,
  });
  done();
};

const watchStatic = () => {
  return gulp.watch("static/**/*.*", gulp.series(reload));
};

gulp.task("watchStatic", gulp.series(serveStatic, watchStatic));

// SSR
const serveSsr = (done) => {
  console.log();
  browserSync.init({
    proxy: `localhost:${process.env.npm_package_config_ssrPort}`,
  });
  done();
};

const watchSsr = () => {
  return gulp.watch("ssr/**/*.*", gulp.series(reload));
};

gulp.task("watchSsr", gulp.series(serveSsr, watchSsr));