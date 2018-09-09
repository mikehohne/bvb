import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config';

// User dal class
class User {

	constructor() { }

	// creates a new User
	async create(data) {
		const user = new db.User(data);
		try {
			return await user.save();
		} catch (error) {
			throw Error(error);
		}
	}
    
	async findOne(data) {
		const resultObj = {};
		const { username, password, token}  = data;
		try {
			const user = await db.User.findOne({ username: username }, { username: 1, _id: 1, hashedPassword: 1 });
			if(!user) {
				return null;
			}
			const passwordsMatch = bcrypt.compareSync(password, user.hashedPassword);
			if (passwordsMatch) {
				user.hashedPassword = '0';
				let decodedToken;
				jwt.verify(token, config.jwt.secret, (err, decoded) => {
                    
					if(err) {
						resultObj.error = 'The user token is not valid';
						return resultObj;
					}
					decodedToken = decoded;
				});
				resultObj.data = user;
				resultObj.token = decodedToken;
                
				return resultObj;
			}

		} catch (error) {
			throw Error(error);
		}
	}

	// finds a User by id
	async findById(id) {
		try {
			return await db.User.findById(id);
		} catch (error) {
			throw Error(error);
		}
	}

	// finds a User by id and updates the User
	async findByIdUpdate(id, data) {
		try {
			return await db.User(id, data, { new: true });
		} catch (error) {
			throw Error(error);
		}
	}
}

export default User;