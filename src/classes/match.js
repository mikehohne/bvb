import db from '../models';

class Match {

	constructor() {}

	async find(query) {
		const q = query || {};
		try {
			return await db.Match.find(q);
		} catch (error) {
			throw Error(error);
		}
	}

	async create(data) {
		const match = new db.Match(data);
		try {
			return await match.save();
		} catch (error) {
			throw Error(error);
		}
	}

	async findById(id) {
		try {
			return await db.Match.findById(id)
				.populate('roster');
		} catch (error) {
			throw Error(error);
		}
	}

	async findByIdAndUpdate(id, data) {
		try {
			return await db.Match.findByIdAndUpdate(id, data, { new: true });
		} catch (error) {
			throw Error(error);
		}
	}

}

export default Match;