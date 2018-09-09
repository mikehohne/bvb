import db from '../models';

// DAL roster class
class Roster {

	constructor() {}

	// Find roster by query
	async find(query) {
		const q = query || {};
		try {
			return await db.Roster.find(q);
		} catch (error) {
			throw Error(error);
		}
	}

	// Creates roster by admin
	async create(data) {
		try {
			const roster = new db.Roster(data);
			return await roster.save();
		} catch (error) {
			throw Error(error);
		}
	}

	// Find roster by id
	async findById(id) {
		try {
			return await db.Roster.findById(id)
				.populate('startingEleven')
				.populate('substitutes');
		} catch (error) {
			throw Error(error);
		}
	}

	// Find roster by id and update
	async findByIdAndUpdate(id, data) {
		try {
			return await db.Roster.findByIdAndUpdate(id, data, { new: true });
		} catch (error) {
			throw Error(error);
		}
	}
}

export default Roster;