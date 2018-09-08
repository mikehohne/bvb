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
routes.get('/admin/user/:username/', admin.find);

routes.get('/admin/roster/', admin.findRoster);
routes.post('/admin/roster/create', admin.createRoster);
routes.get('/admin/roster/:id', admin.findRosterById);
routes.post('/admin/roster/:id/update', admin.findRosterByIdAndUpdate);

routes.get('/admin/player/:id', admin.findPlayerById);
routes.post('/admin/player/create', admin.createPlayer);
routes.post('/admin/player/:id/update', admin.findPlayerAndUpdateById);

export default routes;