import db from '../models';
import Logger from '../classes/logger';

const logger = new Logger("Stats query");


// DAL roster class
class Stats {

	constructor() {}

	// Find roster by query
	async find(query) {
		const q = query || {};
		try {
			return await db.Stats.find(q);
		} catch (error) {
			logger.log(error);
		}
	}

	// Creates roster by admin
	async create(data) {
		const roster = new db.Stats(data);
		try {
			return await roster.save();
		} catch (error) {
			logger.log(error);
		}
	}

	// Find roster by id
	async findById(id) {
		try {
			return await db.Stats.findById(id)
				.populate('player')
				.populate('match');
		} catch (error) {
			logger.log(error);
		}
	}

	// Find roster by id and update
	async findByIdAndUpdate(id, data) {
		try {
			return await db.Stats.findByIdAndUpdate(id, data, { new: true });
		} catch (error) {
			logger.log(error);
		}
	}
}

export default Stats;