import app from './app';

const port = process.env.PORT || 8080;

app.listen(port, err => {
	if(err) throw Error(err);
});