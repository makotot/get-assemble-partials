var fsUtils = require('fs-utils');

function flatten (list) {
  return Array.prototype.concat.apply([], list);
}

module.exports = function (params, excludesPatterns, cb) {
  var assembleOptions = params.assemble.options,
    partialPatterns = assembleOptions.partials;

  // if excludesPatterns not defined. replace with cb.
  if (typeof excludesPatterns === 'function' && cb === void 0) {
    cb = excludesPatterns;
  }

  if (!excludesPatterns || typeof excludesPatterns === 'function') {
    excludesPatterns = [];
  }

  var excludesList = excludesPatterns.map(function (exclude) {
    var excludesPaths = fsUtils.glob.sync(exclude);

    return excludesPaths.map(function (excludePath) {
      return fsUtils.normalizePath(excludePath);
    });
  });
  var excludes = flatten(excludesList);

  var partialList = partialPatterns.map(function (partialPattern) {
    var partialPaths = fsUtils.glob.sync(partialPattern);

    return partialPaths.filter(function (partialPath) {
      var partial = fsUtils.normalizePath(partialPath);

      var isExcluded = excludes.some(function (exclude) {
        return exclude === partial;
      });

      return !isExcluded;
    });
  });


  var partials = flatten(partialList);

  cb(null, partials);
};
