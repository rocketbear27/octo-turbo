"use strict";

var chalk = require('chalk');
var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

var config = {

}

gulp.task('test', function () {
    console.log(chalk.green('Gulp'));
});

gulp.task('default', ['test']);