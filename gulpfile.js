'use strict';

const gulp = require('gulp'),
	zip = require('gulp-zip'),
	forceDeploy  = require('gulp-jsforce-deploy');

let config = require('./config');

gulp.task('deploy', function() {
  gulp.src('./src/**', { base: "." })
    .pipe(zip('src.zip'))
    .pipe(forceDeploy({
      		username: config.deploy.username,
			password: config.deploy.password,
			loginUrl: config.deploy.login_url,
			version: config.deploy.api_version,
			checkOnly: process.env.CHECK_ONLY,
			pollTimeout: config.deploy.timeout,
			pollInterval: config.deploy.poll_interval
    }));
});

// Default entry point
gulp.task('default', [ 'deploy' ]);