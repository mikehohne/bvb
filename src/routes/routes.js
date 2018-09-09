import express from 'express';
import validation from '../helpers/validation';
import admin from '../controllers/admin';

const routes = express();

routes.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Welcome to the BVB (unofficial) Api!'
	});
});

routes.post('/admin/register/', admin.register);
routes.get('/admin/user/:username', validation.verifyToken, admin.findOneUser);

routes.get('/admin/roster/', validation.verifyToken, admin.findRoster);
routes.post('/admin/roster/create', validation.verifyToken, admin.createRoster);
routes.get('/admin/roster/:id', validation.verifyToken, admin.findRosterById);
routes.post('/admin/roster/:id/update', validation.verifyToken, admin.findRosterByIdAndUpdate);

routes.get('/admin/player/:id', validation.verifyToken, admin.findPlayerById);
routes.post('/admin/player/create', validation.verifyToken, admin.createPlayer);
routes.post('/admin/player/:id/update', validation.verifyToken, admin.findPlayerAndUpdateById);

routes.get('/admin/match/', validation.verifyToken, admin.findMatch);
routes.get('/admin/match/:id', validation.verifyToken, admin.findMatchById);
routes.post('/admin/match/', validation.verifyToken, admin.createMatch);
routes.post('/admin/match/:id/update', validation.verifyToken, admin.findMatchByIdAndUpdate);

routes.get('/admin/stats/', validation.verifyToken, admin.findStats);
routes.get('/admin/stats/:id', validation.verifyToken, admin.findStatsById);
routes.post('/admin/stats/', validation.verifyToken, admin.createStats);
routes.post('/admin/stats/:id/update', validation.verifyToken, admin.findStatsByIdAndUpdate);

export default routes;