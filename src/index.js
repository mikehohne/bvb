import app from './app';
import { log } from 'util';

const port = process.env.PORT || 3000;


app.listen(port, err => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Listening on Port: ${port}`);
    }
})