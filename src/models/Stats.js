import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

mongoose.set('useCreateIndex', true)

// Roster schema
const statsSchema = new Schema({
	player: { type: Schema.Types.ObjectId, ref: 'Player'},
    match: { type: Schema.Types.ObjectId, ref: 'Match'},
    yellowCard: [{ type: Number }],
    redCard: Number,
    goals: [{ type: Number }],
    fouls: [{ type: Number }],
    minutesPlayed: Number,
	dateCreated: { type: Date, default: moment.now() },
	dateModified: { type: Date }
});

const Stats = mongoose.model('Stats', statsSchema);

export default Stats;