import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../classes/user';
import bcrypt from 'bcryptjs';

const user = {};

user.register = async (req, res) => {
	const { username, password } = req.body;
	const data = {};
	data.username = username;	
	data.hashedPassword = bcrypt.hashSync(password.toString());
	try {
		const u = new User();
		const newUser = await u.create(data);
		const token = jwt.sign({ id: newUser._id}, config.jwt.secret, { expiresIn: 86400 });
		if(newUser.fail) {
			res.status(404).json({
				data: newUser.message
			});
		} else {
			res.status(200).json({
				data: newUser,
				auth: true,
				token: token
			});
		}
	} catch (error) {
		throw Error(error);
	}
};

user.findOneUser = async (req, res) => {
	const { username } = req.params;
	const { password } = req.query;
	const token = req.token;
	
	if (!token) {
		res.status(401).json({
			auth: false,
			message: 'No token provided'
		});
	}
	
	const data = {};
	data.username = username;
	data.password = password;
	data.token = token;

	try {
		const u = new User();
		const user = await u.findOne(data);
		if (user.error || !user) {
			res.status(401).json({
				message: 'User or password were not found',
				development: user.error
			});
		} else {
			res.status(200).json({
				data: user.data,
				token: user.token,
				auth: true
			});
		}
	} catch (error) {
		throw Error(error);
	}

};

export default user;