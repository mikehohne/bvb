import db from '../models';
import Logger from '../classes/logger';

const logger = new Logger('Match query');

class Match {

	constructor() {
	}

	async find(query) {
		const q = query || {};
		try {
			return await db.Match.find(q);
		} catch (error) {
			logger.log(error);
		}
	}

	async create(data) {
		const match = new db.Match(data);
		try {
			return await match.save();
		} catch (error) {
			logger.log(error);
		}
	}

	async findById(id) {
		try {
			return await db.Match.findById(id)
				.populate('roster');
		} catch (error) {
			logger.log(error);
		}
	}

	async findByIdAndUpdate(id, data) {
		try {
			return await db.Match.findByIdAndUpdate(id, data, { new: true });
		} catch (error) {
			logger.log(error);
		}
	}

}

export default Match;