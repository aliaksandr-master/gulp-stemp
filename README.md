[![npm](http://img.shields.io/npm/v/gulp-stemp.svg?style=flat-square)](https://www.npmjs.com/package/gulp-stemp)
[![npm](http://img.shields.io/npm/l/gulp-stemp.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-master/gulp-stemp.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/gulp-stemp)
[![devDependency Status](https://david-dm.org/aliaksandr-master/gulp-stemp/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/gulp-stemp#info=devDependencies)

gulp-stemp
================

## install

```
npm install gulp-stemp -S
```

configurable gulp task for adding stemp variable into files

## USAGE
```js
'use strict';

const gulp = require('gulp');
const moment = require('moment');
const gulpStemp = require('gulp-stemp');
const pkg = require('package.json');

const dateStemp = moment().format('DD-MM-YYYY HH:mm');

gulp.task(() =>
  gulp
    .src([
      './dist/**/*.js'
    ])
    .pipe(gulpStemp({
      stemp: (filename) => `v${pkg.version}  [${dateStemp}]`,
      key: (filename) => `__${String(path.basename(filename, path.extname(filename))).toUpperCase().replace(/\W/g, '_')}_VERSION__` })
    )
    .pipe(gulp.dest('./dist'))
);
```

## options

### options.stemp
- function for get stemp by filename
Default: `(filename) => Date.now()`,

### options.key
- global varname 
Default: `(filename) => 'window.__STEMP__'`
