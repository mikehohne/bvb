'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminSchema = new _mongoose.Schema({
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    dateCreated: { type: Date, default: _moment2.default.now() }
});

var User = _mongoose2.default.model('Admin', adminSchema);

exports.default = User;