let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');

gulp.task('sass', function (done) {
	gulp.src("scss/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("css"))
		.pipe(browserSync.stream());


	done();
});

gulp.task('serve', function (done) {

	browserSync.init({
		server: ""
	});

	gulp.watch("scss/*.scss", gulp.series('sass'));
	gulp.watch("*.html").on('change', () => {
		browserSync.reload();
		done();
	});


	done();
});

gulp.task('default', gulp.series('sass', 'serve'));