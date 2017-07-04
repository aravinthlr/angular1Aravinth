var gulp=require('gulp');
gulp.task('copy',function() {
	gulp.src('index.html').pipe(gulp.dest("assets"))
});
var uglify = require('gulp-uglify'),concat=require('gulp-concat');

gulp.task('js', function() {
  gulp.src(['node_modules/underscore/underscore.js','app/js/app.js'])
  .pipe(concat('script.js'))
  //.pipe(uglify())
  .pipe(gulp.dest('assets'))
});