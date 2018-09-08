import mongoose, { Schema, SchemaTypes } from 'mongoose';
import moment from 'moment';

// Roster schema
const rosterSchema = new Schema({
    startingEleven: [{ type: Schema.Types.ObjectId, ref: 'Player'}],
    substitutes: [{ type: Schema.Types.ObjectId, ref: 'Player'}],
    createdBy: { type: String, required: true },
    manager: { type: String, required: true },
    formation: String,
    gameTime: { type: Date, required: true },
    gameType: { type: String, required: true },
    dateCreated: { type: Date, default: moment.now() },
    dateModified: { type: Date }
})

const Roster = mongoose.model('Roster', rosterSchema);

export default Roster;