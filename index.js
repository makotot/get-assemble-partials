var fsUtils = require('fs-utils');

module.exports = function (params, cb) {
  var assembleOptions = params.assemble.options,
    partialPatterns = assembleOptions.partials;

  var partialList = partialPatterns.map(function (partial) {
    var partialPaths = fsUtils.glob.sync(partial);

    return partialPaths.map(function (partialPath) {
      return fsUtils.normalizePath(partialPath);
    });
  });

  var partials = Array.prototype.concat.apply([], partialList);

  cb(null, partials);
};
