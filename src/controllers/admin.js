import db from './../models';
import Roster from '../classes/roster';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Player from '../classes/player';
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

        const token = jwt.sign({id: newAdmin._id}, config.jwt.secret, {
            expiresIn: 86400
        });

        res.status(200).json({
            data: newAdmin,
            auth: true,
            token: token
        })
    
    } catch (error) {
        res.status(500).json({
            message: error.errmsg
        })
    }
}

Admin.find = async (req, res) => {
    const { username } = req.params;
    const { password } = req.query;

    const token = req.token;
    if (!token) {
        res.status(401).json({
            auth: false,
            message: 'No token provided'
        })
    }

    try {
        const admin = await db.Admin.findOne({ username });
        const passwordsMatch = bcrypt.compareSync(password, admin.hashedPassword);

        if (passwordsMatch) {
            let decodedToken;
            jwt.verify(token, config.jwt.secret, (err, decoded) => {
                if(err) {
                    res.status(500).json({
                        auth: false,
                        message: 'Failed to authenticate token'
                    })
                }
                decodedToken = decoded;
            })
            res.status(200).json({
                data: admin,
                token: decodedToken
            })
        }

        res.status(401).json({
            message: 'User not found'
        })
        
    } catch (error) {
        res.status(200).json({
            message: error.errmsg
        })
    }

}

Admin.createPlayer = async (req, res) => {
    const { firstname, lastname } = req.body;
    const player = new Player();
    try {
        const newPlayer = await player.create(firstname, lastname);
        res.status(200).json({
            data: newPlayer
        })
    } catch (error) {
        throw error;
    }
    
}

Admin.getRoster = async (req, res) => {
    const roster = new Roster();
    try {
        const r = await roster.get();
        console.log(r);
        res.status(200).json({ data: r })
    } catch (error) {
        console.log(error);
    }
}

export default Admin;