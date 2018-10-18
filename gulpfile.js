const gulp = require('gulp');
const ejs = require('gulp-ejs');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const inlineCss = require('gulp-inline-css');
const rename = require('gulp-rename');
const data = require('gulp-data');
const browserSync = require('browser-sync').create();

const detectJSON = require('./detect-json');

// browserSync base directory
// this will be the base directory of files for web preview
// since we are building `*.ejs` templates (located in src/emails) to `dist` folder.
const baseDir = "./dist";

// compile sass to css
gulp.task('compileSass', function () {
	return gulp
		// import all email .scss files from src/scss folder
		// ** means any sub or deep-sub files or foders
		.src('./src/sass/**/*.scss')

		// on error, do not break the process
		.pipe(sass().on('error', sass.logError))

		// output to `src/css` folder
		.pipe(gulp.dest('./src/css'));
});

function ejsErrorHandler(error) {
	// Due to issue https://github.com/rogeriopvl/gulp-ejs/issues/86 was added custom error handler
	console.error(error.message);
	this.emit('end');
}

// build complete HTML email template
// compile sass (compileSass task) before running build
gulp.task('build', ['compileSass'], function () {
	return gulp
		// import all email template (name ending with .template.ejs) files from src/emails folder
		.src('src/emails/**/*.template.ejs')

		// detect the json data sources
		.pipe(data(detectJSON))

		// replace `.scss` file paths from template with compiled file paths
		.pipe(replace(new RegExp('\/sass\/(.+)\.scss', 'ig'), '/css/$1.css'))

		// compile using ejs
		.pipe(ejs({}, {}, {ext: '.html'}).on('error', ejsErrorHandler))

		// inline CSS
		.pipe(inlineCss())

		// do not generate sub-folders inside dist folder
		.pipe(rename({
			dirname: ''
		}))

		// put compiled HTML email templates inside dist folder
		.pipe(gulp.dest(baseDir))
});

// browserSync task to launch preview server
gulp.task('browserSync', function () {
	return browserSync.init({
		reloadDelay: 2000, // reload after 2s, compilation is finished (hopefully)
		server: {
			baseDir,
			directory: true
		}
	});
});

// task to reload browserSync
gulp.task('reloadBrowserSync', function () {
	return browserSync.reload();
});

// watch source files for changes
// run `build` task when anything inside `src` folder changes (except .css)
// and reload browserSync
gulp.task('watch', ['build', 'browserSync'], function () {
	return gulp.watch([
		'src/**/*',
		'!src/**/*.css',
	], ['build', 'reloadBrowserSync']);
});
