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

routes.get('/roster/', controller.roster.findRoster);
routes.post('/roster/create', controller.roster.createRoster);
routes.get('/roster/:id', controller.roster.findRosterById);
routes.post('/roster/:id/update', controller.roster.findRosterByIdAndUpdate);

routes.get('/player/:id', controller.player.findPlayerById);
routes.get('/player/', controller.player.findPlayers);
routes.post('/player/create', controller.player.createPlayer);
routes.post('/player/:id/update', controller.player.findPlayerAndUpdateById);

routes.get('/match/', controller.match.findMatch);
routes.get('/match/:id', controller.match.findMatchById);
routes.post('/match/', controller.match.createMatch);
routes.post('/match/:id/update', controller.match.findMatchByIdAndUpdate);

routes.get('/stats/', controller.stats.findStats);
routes.get('/stats/:id', controller.stats.findStatsById);
routes.post('/stats/', controller.stats.createStats);
routes.post('/stats/:id/update', controller.stats.findStatsByIdAndUpdate);

export default routes;