'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const staticContentPath = 'public/dist/public';
var uri = 'mongodb://localhost/bvb';

_mongoose2.default.connect(uri, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the DB!');
    }
});
var app = (0, _express2.default)();

// Middleware
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// Base Api
app.use('/api', _routes2.default);
app.use('/public', function (req, res) {
    res.json({
        message: "Welcome User"
    });
});

exports.default = app;