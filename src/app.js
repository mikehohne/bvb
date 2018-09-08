import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/routes';
import cors from 'cors';
import session from 'express-session';
// const staticContentPath = 'public/dist/public';
const uri = 'mongodb://localhost/bvb';

mongoose.connect(uri, err => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Connected to the DB!`);
    }	
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
        message: "Welcome User"
    })
})

export default app;
