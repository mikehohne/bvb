import Match from '../classes/match';

const match = {};

match.createMatch = async (req, res) => {
	const data = req.body;
	const m = new Match();
	try {
		const newMatch = await m.create(data);
		res.status(200).json({ data: newMatch });
	} catch (error) {
		throw Error(error);
	}
};

match.findMatch = async (req, res) => {
	const m = new Match();
	try {
		const match = await m.find();
		res.status(200).json({ data: match });
	} catch (error) {
		console.log(error);
	}
};

match.findMatchById = async (req, res) => {
	const { id } = req.params;
	const m = new Match();
	try {
		const match = await m.findById(id);
		res.status(200).json({ data: match });
	} catch (error) {
		throw Error(error);
	}
};

match.findMatchByIdAndUpdate = async (req, res) => {
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

export default match;