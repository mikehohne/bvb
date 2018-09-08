'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Player dal class
var Player = function () {
    function Player() {
        (0, _classCallCheck3.default)(this, Player);
    }

    // creates a new player


    (0, _createClass3.default)(Player, [{
        key: 'create',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
                var player;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                player = new _models2.default.Player(data);
                                _context.prev = 1;
                                _context.next = 4;
                                return player.save();

                            case 4:
                                return _context.abrupt('return', _context.sent);

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);
                                throw Error(_context.t0);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 7]]);
            }));

            function create(_x) {
                return _ref.apply(this, arguments);
            }

            return create;
        }()

        // finds a player by id

    }, {
        key: 'findById',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return _models2.default.Player.findById(id);

                            case 3:
                                return _context2.abrupt('return', _context2.sent);

                            case 6:
                                _context2.prev = 6;
                                _context2.t0 = _context2['catch'](0);
                                throw Error(_context2.t0);

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 6]]);
            }));

            function findById(_x2) {
                return _ref2.apply(this, arguments);
            }

            return findById;
        }()

        // finds a player by id and updates the player

    }, {
        key: 'findByIdUpdate',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id, data) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _models2.default.Player.findByIdAndUpdate(id, data, { new: true });

                            case 3:
                                return _context3.abrupt('return', _context3.sent);

                            case 6:
                                _context3.prev = 6;
                                _context3.t0 = _context3['catch'](0);
                                throw Error(_context3.t0);

                            case 9:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 6]]);
            }));

            function findByIdUpdate(_x3, _x4) {
                return _ref3.apply(this, arguments);
            }

            return findByIdUpdate;
        }()
    }]);
    return Player;
}();

exports.default = Player;