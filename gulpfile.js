var gulp = require('gulp');
var less = require('gulp-less');
var liveReload = require('gulp-livereload');

var lr = liveReload( 9200 );
var file2watch = './you-should-like-it/you_should_like_it.html';

var Conf = {
    less: {
        src: './you-should-like-it/*.less',
        dest: './you-should-like-it'
    }
}

gulp.task('less', function(){
    gulp.src( Conf.less.src )
        .pipe( less() )
        .pipe( gulp.dest(Conf.less.dest) );
});

gulp.task('watch', function(){
    gulp.watch( file2watch, function( file ){
        // console.log( file );
        lr.changed( file.path );
    } )

    gulp.watch( Conf.less.src, ['less']);
    gulp.watch( './you-should-like-it/*.css', function(file){
        lr.changed( file.path );
    });
});


gulp.task('default', ['less'], function(){} );
gulp.task('wd', ['less', 'watch'] );