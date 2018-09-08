'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Player schema
var playerSchema = new _mongoose.Schema({
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true },
    active: Boolean,
    position: String,
    nationality: String,
    number: Number,
    dateAdded: { type: Date, default: _moment2.default.now() },
    dateOfBirth: Date,
    dateModified: { type: Date },
    bio: String
});

var Player = _mongoose2.default.model('Player', playerSchema);

exports.default = Player;