'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

var _roster = require('../classes/roster');

var _roster2 = _interopRequireDefault(_roster);

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
                        return _models2.default.Admin.findOne({ username: username }, { username: 1, _id: 1, hashedPassword: 1 });

                    case 7:
                        admin = _context2.sent;
                        passwordsMatch = _bcryptjs2.default.compareSync(password, admin.hashedPassword);


                        if (passwordsMatch) {
                            admin.hashedPassword = "0";
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
                            message: 'User or password were not found'
                        });

                        _context2.next = 16;
                        break;

                    case 13:
                        _context2.prev = 13;
                        _context2.t0 = _context2['catch'](4);

                        res.status(200).json({
                            message: _context2.t0.errmsg
                        });

                    case 16:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[4, 13]]);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

/*************************** */
/* PLAYER CONTROLLER (Admin) */
/*************************** */
Admin.createPlayer = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var data, player, newPlayer;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = req.body;
                        player = new _player2.default();
                        _context3.prev = 2;
                        _context3.next = 5;
                        return player.create(data);

                    case 5:
                        newPlayer = _context3.sent;

                        res.status(200).json({ data: newPlayer });
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
Admin.findPlayerById = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var id, p, player;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        id = req.params.id;
                        p = new _player2.default();
                        _context4.prev = 2;
                        _context4.next = 5;
                        return p.findById(id);

                    case 5:
                        player = _context4.sent;

                        res.status(200).json({ data: player });
                        _context4.next = 12;
                        break;

                    case 9:
                        _context4.prev = 9;
                        _context4.t0 = _context4['catch'](2);
                        throw Error(_context4.t0);

                    case 12:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[2, 9]]);
    }));

    return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

Admin.findPlayerAndUpdateById = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var data, id, p, updatedPlayer;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        data = req.body;
                        id = req.params.id;
                        p = new _player2.default();
                        _context5.prev = 3;
                        _context5.next = 6;
                        return p.findByIdUpdate(id, data);

                    case 6:
                        updatedPlayer = _context5.sent;

                        res.status(200).json({ data: updatedPlayer });
                        _context5.next = 13;
                        break;

                    case 10:
                        _context5.prev = 10;
                        _context5.t0 = _context5['catch'](3);
                        throw Error(_context5.t0);

                    case 13:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined, [[3, 10]]);
    }));

    return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

/*************************** */
/* ROSTER CONTROLLER (Admin) */
/*************************** */
Admin.createRoster = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
        var data, r, newRoster;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        data = req.body;
                        r = new _roster2.default();
                        _context6.prev = 2;
                        _context6.next = 5;
                        return r.create(data);

                    case 5:
                        newRoster = _context6.sent;

                        res.status(200).json({ data: newRoster });
                        _context6.next = 12;
                        break;

                    case 9:
                        _context6.prev = 9;
                        _context6.t0 = _context6['catch'](2);
                        throw Error(_context6.t0);

                    case 12:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, undefined, [[2, 9]]);
    }));

    return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
    };
}();

Admin.findRoster = function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
        var r, roster;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        r = new _roster2.default();
                        _context7.prev = 1;
                        _context7.next = 4;
                        return r.find();

                    case 4:
                        roster = _context7.sent;

                        res.status(200).json({ data: roster });
                        _context7.next = 11;
                        break;

                    case 8:
                        _context7.prev = 8;
                        _context7.t0 = _context7['catch'](1);
                        throw Error(_context7.t0);

                    case 11:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, undefined, [[1, 8]]);
    }));

    return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
    };
}();

Admin.findRosterById = function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
        var id, r, roster;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        id = req.params.id;
                        r = new _roster2.default();
                        _context8.prev = 2;
                        _context8.next = 5;
                        return r.findById(id);

                    case 5:
                        roster = _context8.sent;

                        res.status(200).json({ data: roster });
                        _context8.next = 12;
                        break;

                    case 9:
                        _context8.prev = 9;
                        _context8.t0 = _context8['catch'](2);
                        throw Error(_context8.t0);

                    case 12:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, undefined, [[2, 9]]);
    }));

    return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
    };
}();

Admin.findRosterByIdAndUpdate = function () {
    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res) {
        var id, data, r, updatedRoster;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        id = req.params.id;
                        data = req.body;
                        r = new _roster2.default();
                        _context9.prev = 3;
                        _context9.next = 6;
                        return r.findByIdAndUpdate(id, data);

                    case 6:
                        updatedRoster = _context9.sent;

                        res.status(200).json({ data: updatedRoster });
                        _context9.next = 13;
                        break;

                    case 10:
                        _context9.prev = 10;
                        _context9.t0 = _context9['catch'](3);
                        throw Error(_context9.t0);

                    case 13:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, _callee9, undefined, [[3, 10]]);
    }));

    return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
    };
}();

exports.default = Admin;