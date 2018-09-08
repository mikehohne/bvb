'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Roster schema
var rosterSchema = new _mongoose.Schema({
    startingEleven: [{ type: _mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    substitutes: [{ type: _mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    createdBy: { type: String, required: true },
    manager: { type: String, required: true },
    formation: String,
    gameTime: { type: Date, required: true },
    gameType: { type: String, required: true },
    dateCreated: { type: Date, default: _moment2.default.now() },
    dateModified: { type: Date }
});

var Roster = _mongoose2.default.model('Roster', rosterSchema);

exports.default = Roster;