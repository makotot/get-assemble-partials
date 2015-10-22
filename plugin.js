var getPartials = require('./index.js');

var excludes = [
  './src/partials/excludes/*.hbs'
];

module.exports = function (params, cb) {

  getPartials(params, excludes, function (err, data) {
    console.log(data);
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
