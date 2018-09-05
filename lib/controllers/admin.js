'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

var _roster = require('../classes/roster');

var _roster2 = _interopRequireDefault(_roster);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _player = require('../classes/player');

var _player2 = _interopRequireDefault(_player);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Admin = {};

Admin.register = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var _req$body, username, password, hashedPassword, admin, newAdmin, token;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _req$body = req.body, username = _req$body.username, password = _req$body.password;
                        hashedPassword = _bcryptjs2.default.hashSync(password);
                        admin = new _models2.default.Admin({
                            username: username,
                            hashedPassword: hashedPassword
                        });
                        _context.prev = 3;
                        _context.next = 6;
                        return admin.save();

                    case 6:
                        newAdmin = _context.sent;
                        token = _jsonwebtoken2.default.sign({ id: newAdmin._id }, _config2.default.jwt.secret, {
                            expiresIn: 86400
                        });


                        res.status(200).json({
                            data: newAdmin,
                            auth: true,
                            token: token
                        });

                        _context.next = 14;
                        break;

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context['catch'](3);

                        res.status(500).json({
                            message: _context.t0.errmsg
                        });

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[3, 11]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

Admin.find = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var username, password, token, admin, passwordsMatch, decodedToken;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        username = req.params.username;
                        password = req.query.password;
                        token = req.token;

                        if (!token) {
                            res.status(401).json({
                                auth: false,
                                message: 'No token provided'
                            });
                        }

                        _context2.prev = 4;
                        _context2.next = 7;
                        return _models2.default.Admin.findOne({ username: username });

                    case 7:
                        admin = _context2.sent;
                        passwordsMatch = _bcryptjs2.default.compareSync(password, admin.hashedPassword);

                        console.log(passwordsMatch);
                        if (passwordsMatch) {
                            decodedToken = void 0;

                            _jsonwebtoken2.default.verify(token, _config2.default.jwt.secret, function (err, decoded) {
                                if (err) {
                                    res.status(500).json({
                                        auth: false,
                                        message: 'Failed to authenticate token'
                                    });
                                }
                                decodedToken = decoded;
                            });
                            res.status(200).json({
                                data: admin,
                                token: decodedToken
                            });
                        }

                        res.status(401).json({
                            message: 'User not found'
                        });

                        _context2.next = 17;
                        break;

                    case 14:
                        _context2.prev = 14;
                        _context2.t0 = _context2['catch'](4);

                        res.status(200).json({
                            message: _context2.t0.errmsg
                        });

                    case 17:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[4, 14]]);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

Admin.createPlayer = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var _req$body2, firstname, lastname, player, newPlayer;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _req$body2 = req.body, firstname = _req$body2.firstname, lastname = _req$body2.lastname;
                        player = new _player2.default();
                        _context3.prev = 2;
                        _context3.next = 5;
                        return player.create(firstname, lastname);

                    case 5:
                        newPlayer = _context3.sent;

                        res.status(200).json({
                            data: newPlayer
                        });
                        _context3.next = 12;
                        break;

                    case 9:
                        _context3.prev = 9;
                        _context3.t0 = _context3['catch'](2);
                        throw _context3.t0;

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[2, 9]]);
    }));

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

Admin.getRoster = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var roster, r;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        roster = new _roster2.default();
                        _context4.prev = 1;
                        _context4.next = 4;
                        return roster.get();

                    case 4:
                        r = _context4.sent;

                        console.log(r);
                        res.status(200).json({ data: r });
                        _context4.next = 12;
                        break;

                    case 9:
                        _context4.prev = 9;
                        _context4.t0 = _context4['catch'](1);

                        console.log(_context4.t0);

                    case 12:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[1, 9]]);
    }));

    return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

exports.default = Admin;