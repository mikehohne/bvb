import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

// Player schema
const playerSchema = new Schema({
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true },
    active: Boolean,
    position: String,
    nationality: String,
    number: Number,
    dateAdded: { type: Date, default: moment.now() },
    dateOfBirth: Date,
    dateModified: { type: Date },
    bio: String
})

const Player = mongoose.model('Player', playerSchema);

export default Player;