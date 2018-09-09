import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

mongoose.set('useCreateIndex', true)

// Player schema
const playerSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	active: { type: Boolean },
	position: { type: String },
	nationality: { type: String },
	number: { type: Number },
	dateAdded: { type: Date, default: moment.now() },
	dateOfBirth: { type: Date },
	dateModified: { type: Date },
	bio: { type: String },
	image: { type: String },
	transactions: [{ type: String }]
});

const Player = mongoose.model('Player', playerSchema);

export default Player;