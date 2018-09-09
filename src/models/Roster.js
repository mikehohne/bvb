import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

mongoose.set('useCreateIndex', true);

// Roster schema
const rosterSchema = new Schema({
	startingEleven: [{ type: Schema.Types.ObjectId, ref: 'Player'}],
	substitutes: [{ type: Schema.Types.ObjectId, ref: 'Player'}],
	createdBy: { type: String, required: true },
	manager: { type: String, required: true },
	formation: { type: String },
	matchTime: { type: Date, required: true },
	matchType: { type: String, required: true },
	dateCreated: { type: Date, default: moment.now() },
	dateModified: { type: Date }
});

const Roster = mongoose.model('Roster', rosterSchema);

export default Roster;