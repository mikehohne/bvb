import db from '../models';

// Player dal class
class Player {

	constructor() { }

	// creates a new player
	async create(data) {
		const player = new db.Player(data);
		try {
			return await player.save();
		} catch (error) {
			throw Error(error);
		}
	}

	async find(query) {
		const q = query || {};
		try {
			return await db.Player.find(q);
		} catch (error) {
			throw Error(error);
		}
	}

	// finds a player by id
	async findById(id) {
		try {
			return await db.Player.findById(id);
		} catch (error) {
			throw Error(error);
		}
	}

	// finds a player by id and updates the player
	async findByIdUpdate(id, data) {
		try {
			return await db.Player.findByIdAndUpdate(id, data, { new: true });
		} catch (error) {
			throw Error(error);
		}
	}
}

export default Player;