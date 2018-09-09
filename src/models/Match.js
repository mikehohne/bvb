import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

mongoose.set('useCreateIndex', true);

// Player schema
const matchSchema = new Schema({
	home: Boolean,
	score: String,
	versus: String,
	roster: [{ type: Schema.Types.ObjectId, ref: 'Roster'}],
	referees: [{ type: String }],
	matchNumber: Number,
	matchTime: Date,
	dateAdded: { type: Date, default: moment.now() },
	dateModified: { type: Date },
	notes: String
});

const Match = mongoose.model('Match', matchSchema);

export default Match;