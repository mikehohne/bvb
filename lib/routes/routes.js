'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _validation = require('../helpers/validation');

var _validation2 = _interopRequireDefault(_validation);

var _admin = require('../controllers/admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express2.default)();

routes.get('/', function (req, res) {
	res.json({
		success: true,
		message: 'Welcome to the BVB (unofficial) Api!'
	});
});

routes.post('/admin/register/', _admin2.default.register);
routes.get('/admin/user/:username/', _admin2.default.find);

routes.get('/admin/roster/', _admin2.default.findRoster);
routes.post('/admin/roster/create', _admin2.default.createRoster);
routes.get('/admin/roster/:id', _admin2.default.findRosterById);
routes.post('/admin/roster/:id/update', _admin2.default.findRosterByIdAndUpdate);

routes.get('/admin/player/:id', _admin2.default.findPlayerById);
routes.post('/admin/player/create', _admin2.default.createPlayer);
routes.post('/admin/player/update/:id', _admin2.default.findPlayerAndUpdateById);

exports.default = routes;