import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

mongoose.set('useCreateIndex', true);

// Player schema
const loggerSchema = new Schema({
    event: String,
    message: String,
    error: String,
    stackTrace: String,
    dateLogged: { type: Date, default: moment.now() }
});

const Logger = mongoose.model('Logger', loggerSchema);

export default Logger;