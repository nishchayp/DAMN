const gulp = require('gulp');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const wbBuild = require('workbox-build');

gulp.task('copyTemplates', function() {
  gulp.src('../dist/admin-static/admin.html')
    .pipe(clean({ force: true }))
    .pipe(gulp.dest('../templates'));
  gulp.src('../dist/user-static/index.html')
    .pipe(gulp.dest('../templates'));
  gulp.src('../dist/user-static/index.html')
    .pipe(gulp.dest('../dist/admin-static/'));
});

gulp.task('cleanTemplates', function() {
  gulp.src('../templates/*')
    .pipe(clean({ force: true }));
});

gulp.task('bundle-sw', () => {
  return wbBuild.injectManifest({
    swSrc: './src/service-worker.js',
    swDest: '../dist/service-worker.js',
    globDirectory: '../dist',
    staticFileGlobs: ['**/*'],
    globIgnores: [
    'images/*',
    'admin-static/admin.html',
    'service-worker.js',
    'workbox-sw.prod.v2.1.2.js'
    ]
  })
  .catch((err) => {
    console.log('[ERROR] This happened: ' + err);
  });
});

gulp.task('default', done => {
  runSequence(
    'cleanTemplates',
    'copyTemplates',
    'bundle-sw',
    done
  );
});