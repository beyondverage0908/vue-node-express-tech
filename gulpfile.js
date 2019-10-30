const gulp = require('gulp')
const uglify = require('gulp-uglify')

// define task
gulp.task('script', done => {
	gulp.src('src/util/util.js')
		.pipe(uglify())
		.pipe(gulp.dest('gulp-dist/js'))
	done()
})

gulp.task('auto', function() {
	gulp.watch('src/util/*.js', gulp.series('script'))
})

gulp.task('default', gulp.parallel('script', 'auto'))