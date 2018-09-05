'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playerSchema = new _mongoose.Schema({
    firstname: { type: String, required: true, unique: true },
    lastname: { type: String, required: true },
    dateAdded: { type: Date, default: _moment2.default.now() }
});

var Player = _mongoose2.default.model('Player', playerSchema);

exports.default = Player;