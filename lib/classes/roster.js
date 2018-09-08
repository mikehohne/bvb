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

// DAL roster class
var Roster = function () {
    function Roster() {
        (0, _classCallCheck3.default)(this, Roster);
    }

    // Find roster by query


    (0, _createClass3.default)(Roster, [{
        key: 'find',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(query) {
                var q;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                q = query || {};
                                _context.prev = 1;
                                _context.next = 4;
                                return _models2.default.Roster.find(q);

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

            function find(_x) {
                return _ref.apply(this, arguments);
            }

            return find;
        }()

        // Creates roster by admin

    }, {
        key: 'create',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data) {
                var roster;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log(data);
                                roster = new _models2.default.Roster(data);
                                _context2.prev = 2;
                                _context2.next = 5;
                                return roster.save();

                            case 5:
                                return _context2.abrupt('return', _context2.sent);

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](2);
                                throw Error(_context2.t0);

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[2, 8]]);
            }));

            function create(_x2) {
                return _ref2.apply(this, arguments);
            }

            return create;
        }()

        // Find roster by id

    }, {
        key: 'findById',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _models2.default.Roster.findById(id);

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

            function findById(_x3) {
                return _ref3.apply(this, arguments);
            }

            return findById;
        }()

        // Find roster by id and update

    }, {
        key: 'findByIdAndUpdate',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id, data) {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return _models2.default.Roster.findByIdAndUpdate(id, data, { new: true });

                            case 3:
                                return _context4.abrupt('return', _context4.sent);

                            case 6:
                                _context4.prev = 6;
                                _context4.t0 = _context4['catch'](0);
                                throw Error(_context4.t0);

                            case 9:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 6]]);
            }));

            function findByIdAndUpdate(_x4, _x5) {
                return _ref4.apply(this, arguments);
            }

            return findByIdAndUpdate;
        }()
    }]);
    return Roster;
}();

exports.default = Roster;