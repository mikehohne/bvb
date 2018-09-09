import Stats from '../classes/stats';

const stats = {};

stats.createStats = async (req, res) => {
	const data = req.body;
	const s = new Stats();
	try {
		const updatedMatch = await s.create(data);
		res.status(200).json({ data: updatedMatch });
	} catch (error) {
		throw Error(error);
	}
};

stats.findStats = async (req, res) => {
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

stats.findStatsById = async (req, res) => {
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

stats.findStatsByIdAndUpdate = async (req, res) => {
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

export default stats;