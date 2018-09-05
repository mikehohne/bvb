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
routes.get('/admin/:username', validation.verifyToken, admin.find);
routes.get('/admin/roster', admin.getRoster);
routes.post('/admin/createplayer', validation.verifyToken, admin.createPlayer);

export default routes;