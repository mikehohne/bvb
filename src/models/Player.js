import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

const playerSchema = new Schema({
    firstname: { type: String, required: true, unique: true },
    lastname: { type: String, required: true },
    dateAdded: { type: Date, default: moment.now() }
})

const Player = mongoose.model('Player', playerSchema);

export default Player;