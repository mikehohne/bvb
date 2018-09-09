import Roster from '../classes/roster';

const roster = {};

roster.createRoster = async (req, res) => {
	const data = req.body;
	const r = new Roster();
	try {
		const newRoster = await r.create(data);
		res.status(200).json({ data: newRoster });
	} catch (error) {
		throw Error(error);
	}
};

roster.findRoster = async (req, res) => {
	const r = new Roster();
	try {
		const roster = await r.find();
		res.status(200).json({ data: roster });
	} catch (error) {
		throw Error(error);
	}
};

roster.findRosterById = async (req, res) => {
	const { id } = req.params;
	const r = new Roster();
	try {
		const roster = await r.findById(id);
		res.status(200).json({ data: roster });
	} catch (error) {
		throw Error(error);
	}
};

roster.findRosterByIdAndUpdate = async (req, res) => {
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

export default roster;