var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('copyTemplates', ['cleanTemplates'], function() {
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

gulp.task('default', ['copyTemplates']);