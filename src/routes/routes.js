import express from 'express';
import validation from '../helpers/validation';
import controller from '../controllers';

const routes = express();

routes.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Welcome to the BVB (unofficial) Api!'
	});
});

routes.post('/user/register/', controller.user.register);
routes.get('/user/:username', controller.user.findOneUser);
routes.get('/logout', controller.user.logout);

routes.get('/roster/', validation.verifyToken, controller.roster.findRoster);
routes.post('/roster/create', validation.verifyToken, controller.roster.createRoster);
routes.get('/roster/:id', validation.verifyToken, controller.roster.findRosterById);
routes.post('/roster/:id/update', validation.verifyToken, controller.roster.findRosterByIdAndUpdate);

routes.get('/player/:id', validation.verifyToken, controller.player.findPlayerById);
routes.get('/player/', validation.verifyToken, controller.player.findPlayers);
routes.post('/player/create', validation.verifyToken, controller.player.createPlayer);
routes.post('/player/:id/update', validation.verifyToken, controller.player.findPlayerAndUpdateById);

routes.get('/match/', controller.match.findMatch);
routes.get('/match/:id', validation.verifyToken, controller.match.findMatchById);
routes.post('/match/', validation.verifyToken, controller.match.createMatch);
routes.post('/match/:id/update', validation.verifyToken, controller.match.findMatchByIdAndUpdate);

routes.get('/stats/', validation.verifyToken, controller.stats.findStats);
routes.get('/stats/:id', validation.verifyToken, controller.stats.findStatsById);
routes.post('/stats/', validation.verifyToken, controller.stats.createStats);
routes.post('/stats/:id/update', validation.verifyToken, controller.stats.findStatsByIdAndUpdate);

export default routes;