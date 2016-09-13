'use strict';

const through = require('through2');

module.exports = (options) => {
  options = options || {};

  options.stemp = options.stemp || ((filename) => Date.now());
  options.key = options.key || ((filename) => 'window.__STEMP__');

  return through.obj((file, encoding, callback) => {
    if (!file.isBuffer()) {
      callback(null, file);
      return;
    }

    let content = file.contents.toString('utf8');

    const varName = options.key(file.path);
    const varValue = JSON.stringify(options.stemp(file.path));

    content = `${content};\n${varName}=${varValue};`;

    file.contents = Buffer.from(content, 'utf8');

    callback(null, file);
  });
};
