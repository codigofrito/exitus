const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const color = require('colors');


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(routes);

try{
	app.listen(3001, () => {
		console.log(color.yellow('SERVER ON-LINE'));
	});
}catch(err){
	console.log(err);
	console.log(color.red('SERVER OFF-LINE'));
}