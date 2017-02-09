var gulp        = require('gulp');
var watch       = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('default', ['watch:css', 'watch:html', 'browser-sync']);

gulp.task('watch:html', function() {
	return gulp.watch('styleguide.html', ['sync:html']);
});

gulp.task('sync:html', function() {
	gulp.src('styleguide.html').pipe(browserSync.stream());
})

gulp.task('watch:css', function() {
	return gulp.watch('styles.css', ['sync:css']);
});

gulp.task('sync:css', function() {
	gulp.src('styles.css').pipe(browserSync.stream());
})

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
