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
			res.status(422).json({
				message: newUser.message
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
	
	const data = {};
	data.username = username;
	data.password = password;

	res.json({
		"message": "hello world"
	})
};

user.logout = async (req, res) => {
	res.json({
		"message": "user is logged out"
	})
}

export default user;