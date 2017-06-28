var browserSync = require('browser-sync')
var config      = require('../config')
var gulp        = require('gulp')
var minimist    = require('minimist')

var browserSyncTask = function() {

  var options = minimist(process.argv.slice(2));
  config.tasks.browserSync.proxy = options.proxy || 'localhost:8080';

  browserSync.init(config.tasks.browserSync)
}
gulp.task('browserSync', browserSyncTask)
module.exports = browserSyncTask
