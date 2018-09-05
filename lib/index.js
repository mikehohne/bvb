'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _util = require('util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

_app2.default.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on Port: ' + port);
    }
});