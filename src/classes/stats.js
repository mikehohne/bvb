import db from '../models';

// DAL roster class
class Stats {

	constructor() {}

	// Find roster by query
	async find(query) {
		const q = query || {};
		try {
			return await db.Stats.find(q);
		} catch (error) {
			throw Error(error);
		}
	}

	// Creates roster by admin
	async create(data) {
		const roster = new db.Stats(data);
		try {
			return await roster.save();
		} catch (error) {
			throw Error(error);
		}
	}

	// Find roster by id
	async findById(id) {
		try {
			return await db.Stats.findById(id)
			.populate('player')
			.populate('match');
		} catch (error) {
			throw Error(error);
		}
	}

	// Find roster by id and update
	async findByIdAndUpdate(id, data) {
		try {
			return await db.Stats.findByIdAndUpdate(id, data, { new: true });
		} catch (error) {
			throw Error(error);
		}
	}
}

export default Stats;