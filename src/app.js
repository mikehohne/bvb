import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/routes';
import cors from 'cors';
import config from './config';
// const staticContentPath = 'public/dist/public';

// initialize env vars
dotenv.config();

mongoose.connect(config.db.connString, err => {
	if(err) throw Error(err);	
});
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Base Api
app.use('/api', routes);
app.use('/public', (req,res) => {
	res.json({
		message: 'Welcome User'
	});
});

export default app;
