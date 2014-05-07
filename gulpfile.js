var gulp = require('gulp');

var liveReload = require('gulp-livereload');

var lr = liveReload( 9200 );
var file2watch = './you_should_like_it.html';

gulp.task('watch', function(){
    gulp.watch( file2watch, function( file ){
        // console.log( file );
        lr.changed( file.path );
    } )
});


gulp.task('default', ['watch'] );
gulp.task('wd', ['watch'] );