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

var Roster = function () {
    function Roster() {
        (0, _classCallCheck3.default)(this, Roster);
    }

    (0, _createClass3.default)(Roster, [{
        key: 'get',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var roster;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                roster = new _models2.default.Player();
                                _context.prev = 1;
                                _context.next = 4;
                                return roster.find({});

                            case 4:
                                return _context.abrupt('return', _context.sent);

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);
                                throw _context.t0;

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 7]]);
            }));

            function get() {
                return _ref.apply(this, arguments);
            }

            return get;
        }()
    }]);
    return Roster;
}();

exports.default = Roster;