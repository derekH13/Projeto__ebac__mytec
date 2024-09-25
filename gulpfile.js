const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const watch = require('gulp-watch');



function compilaSass(){
    return gulp.src('./src/app/shared/componentes/**/*.scss')
    .pipe(sass().on('error', sass.logError)) // Compila SCSS e loga erros
    .pipe(concat('styles.css')) // Nome do arquivo CSS de saída
    .pipe(cleanCSS({ compatibility: 'ie8' })) // Minifica o CSS
    .pipe(gulp.dest('src/styles/')); // Salva na pasta de saída
}






exports.watch = function(){
    gulp.watch('./src/app/shared/componentes/**/*.scss', gulp.parallel(compilaSass))
}
