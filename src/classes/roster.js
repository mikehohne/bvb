import db from '../models';

class Roster {
    constructor() {}

    async get() {
        const roster = new db.Player();
        try {
            return await roster.find({});
        } catch (error) {
            throw error;
        }
    }
}

export default Roster;