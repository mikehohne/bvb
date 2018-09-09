import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Roster from '../classes/roster';
import Player from '../classes/player';
import Match from '../classes/match';
import Stats from '../classes/stats';
import User from '../classes/user';
import config from '../config';

const Admin = {};

Admin.register = async (req, res) => {
	const data = {};
	const { username, password } = req.body;
	data.username = username;
	data.hashedPassword = bcrypt.hashSync(password);
	try {
		const u = new User();
		const newAdmin = await u.create(data)

		const token = jwt.sign({ id: newAdmin._id}, config.jwt.secret, {expiresIn: 86400 });

		res.status(200).json({
			data: newAdmin,
			auth: true,
			token: token
		});
	} catch (error) {
		throw Error(error);
	}
};

Admin.findOneUser = async (req, res) => {
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
		if (user.error) {
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

/*************************** */
/* STATS CONTROLLER (Admin) */
/*************************** */
Admin.createStats = async (req, res) => {
	const data = req.body;
	const s = new Stats();
	try {
		const updatedMatch = await s.create(data);
		res.status(200).json({ data: updatedMatch });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findStats = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const s = new Stats();
	try {
		const updatedMatch = await s.find(id, data);
		res.status(200).json({ data: updatedMatch });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findStatsById = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const s = new Stats();
	try {
		const updatedMatch = await s.findById(id, data);
		res.status(200).json({ data: updatedMatch });
	} catch (error) {
		throw Error(error);
	}
};

Admin.findStatsByIdAndUpdate = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const s = new Stats();
	try {
		const updatedMatch = await s.findByIdAndUpdate(id, data);
		res.status(200).json({ data: updatedMatch });
	} catch (error) {
		throw Error(error);
	}
};

export default Admin;