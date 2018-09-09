import Player from '../classes/player';

const player = {};

player.createPlayer = async (req, res) => {
	const data = req.body;
	const player = new Player();
	try {
		const newPlayer = await player.create(data);
		res.status(200).json({ data: newPlayer });
	} catch (error) {
		throw error;
	}
};

player.findPlayers = async (req, res) => {
	const p = new Player();
	try {
		const players = await p.find();
		res.status(200).json({ data: players });
	} catch (error) {
		throw Error(error);
	}
};

player.findPlayerById = async (req, res) => {
	const { id } = req.params;
	const p = new Player();
	try {
		const player = await p.findById(id);
		res.status(200).json({ data: player });
	} catch (error) {
		throw Error(error);
	}
};

player.findPlayerAndUpdateById = async (req,res) => {
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

export default player;