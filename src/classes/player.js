import db from '../models';
import Logger from '../classes/logger';

const logger = new Logger('Player query');

// Player dal class
class Player {

	constructor() { }

	// creates a new player
	async create(data) {
		const player = new db.Player(data);
		try {
			return await player.save();
		} catch (error) {
			logger.log(error);
		}
	}

	async find(query) {
		const q = query || {};
		try {
			return await db.Player.find(q);
		} catch (error) {
			logger.log(error);
		}
	}

	// finds a player by id
	async findById(id) {
		try {
			return await db.Player.findById(id);
		} catch (error) {
			logger.log(error);
		}
	}

	// finds a player by id and updates the player
	async findByIdUpdate(id, data) {
		try {
			return await db.Player.findByIdAndUpdate(id, data, { new: true });
		} catch (error) {
			logger.log(error);
		}
	}
}

export default Player;