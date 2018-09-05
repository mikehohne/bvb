import db from '../models';

class Player {

    constructor() { }

    async create (firstname, lastname) {
        
        const player = new db.Player({
            firstname, lastname
        })

        try {
            return await player.save();
        } catch (error) {
            throw error;
        }
    }
}

export default Player;