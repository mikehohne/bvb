import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import db from './../models';
import Roster from '../classes/roster';
import Player from '../classes/player';
import Match from '../classes/match';
import config from '../config';

const Admin = {};

Admin.register = async (req, res) => {
	const { username, password } = req.body;
	const hashedPassword = bcrypt.hashSync(password);

	const admin = new db.Admin({
		username,
		hashedPassword
	});

	try {
		const newAdmin = await admin.save();

		const token = jwt.sign({ id: newAdmin._id}, config.jwt.secret, {expiresIn: 86400 });

		res.status(200).json({
			data: newAdmin,
			auth: true,
			token: token
		});
    
	} catch (error) {
		res.status(500).json({
			message: error.errmsg
		});
	}
};

Admin.find = async (req, res) => {
	const { username } = req.params;
	const { password } = req.query;

	const token = req.token;
	if (!token) {
		res.status(401).json({
			auth: false,
			message: 'No token provided'
		});
	}

	try {
		const admin = await db.Admin.findOne({ username: username }, { username: 1, _id: 1, hashedPassword: 1 });
		const passwordsMatch = bcrypt.compareSync(password, admin.hashedPassword);
        
		if (passwordsMatch) {
			admin.hashedPassword = '0';
			let decodedToken;
			jwt.verify(token, config.jwt.secret, (err, decoded) => {
				if(err) {
					res.status(500).json({
						auth: false,
						message: 'Failed to authenticate token'
					});
				}
				decodedToken = decoded;
			});
			res.status(200).json({
				data: admin,
				token: decodedToken
			});
		}

		res.status(401).json({
			message: 'User or password were not found'
		});
        
	} catch (error) {
		res.status(200).json({
			message: error.errmsg
		});
	}

};

/*************************** */
/* PLAYER CONTROLLER (Admin) */
/*************************** */
Admin.createPlayer = async (req, res) => {
	const data = req.body;
	const player = new Player();
	try {
		const newPlayer = await player.create(data);
		res.status(200).json({ data: newPlayer });
	} catch (error) {
		throw error;
	}
    
};
Admin.findPlayerById = async (req, res) => {
	const { id } = req.params;
	const p = new Player();
	try {
		const player = await p.findById(id);
		res.status(200).json({ data: player });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findPlayerAndUpdateById = async (req,res) => {
	const data = req.body;
	const id = req.params.id;
	const p = new Player();
	try {
		const updatedPlayer = await p.findByIdUpdate(id, data);
		res.status(200).json({ data: updatedPlayer });
	} catch (error) {
		throw Error(error);
	}
};

/*************************** */
/* ROSTER CONTROLLER (Admin) */
/*************************** */
Admin.createRoster = async (req, res) => {
	const data = req.body;
	const r = new Roster();
	try {
		const newRoster = await r.create(data);
		res.status(200).json({ data: newRoster });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findRoster = async (req, res) => {
	const r = new Roster();
	try {
		const roster = await r.find();
		res.status(200).json({ data: roster });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findRosterById = async (req, res) => {
	const { id } = req.params;
	const r = new Roster();
	try {
		const roster = await r.findById(id);
		res.status(200).json({ data: roster });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findRosterByIdAndUpdate = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const r = new Roster();
	try {
		const updatedRoster = await r.findByIdAndUpdate(id, data);
		res.status(200).json({ data: updatedRoster });
	} catch (error) {
		throw Error(error);
	}
};

/*************************** */
/* MATCH CONTROLLER (Admin) */
/*************************** */
Admin.createMatch = async (req, res) => {
	const data = req.body;
	const m = new Match();
	try {
		const newMatch = await m.create(data);
		res.status(200).json({ data: newMatch });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findMatch = async (req, res) => {
	const m = new Match();
	try {
		const match = await m.find();
		res.status(200).json({ data: match });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findMatchById = async (req, res) => {
	const { id } = req.params;
	const m = new Match();
	try {
		const match = await m.findById(id);
		res.status(200).json({ data: match });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findMatchByIdAndUpdate = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const m = new Match();
	try {
		const updatedMatch = await m.findByIdAndUpdate(id, data);
		res.status(200).json({ data: updatedMatch });
	} catch (error) {
		throw Error(error);
	}
};


export default Admin;