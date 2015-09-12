# get-assemble-partials

[![npm version](http://img.shields.io/npm/v/get-assemble-partials.svg?style=flat-square)](https://github.com/makotot/get-assemble-partials)
[![travis](http://img.shields.io/travis/makotot/get-assemble-partials.svg?style=flat-square)](https://github.com/makotot/get-assemble-partials)
[![dependencies](http://img.shields.io/david/makotot/get-assemble-partials.svg?style=flat-square)](https://github.com/makotot/get-assemble-partials)
[![devDependencies](http://img.shields.io/david/dev/makotot/get-assemble-partials.svg?style=flat-square)](https://github.com/makotot/get-assemble-partials)
[![License](http://img.shields.io/npm/l/get-assemble-partials.svg?style=flat-square)](https://github.com/makotot/get-assemble-partials)

> Get [assemble](http://assemble.io/) partial files


## Install

```sh
$ npm i --save get-assemble-partials
```


## Usage

In assemble plugin:
```js
var getPartials = require('get-assemble-partials');

module.exports = function (params, cb) {

  getPartials(params, function (err, data) {
    console.log(data);
    // => [ 'src/partials/footer.hbs',
            'src/partials/header.hbs',
            'src/partials/nav.hbs',
            ... ]
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
```


## License

MIT

