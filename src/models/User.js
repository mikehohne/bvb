import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

mongoose.set('useCreateIndex', true);


const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	hashedPassword: { type: String, required: true },
	dateCreated: { type: Date, default: moment.now() }
});

const User = mongoose.model('User', userSchema);

export default User;