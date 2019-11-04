const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const color = require('colors');

const app = express();


app.options('*', cors);
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(routes);

try{
	app.listen(process.env.PORT || 8080, () => {
		console.log(color.yellow('SERVER ON-LINE'));
	});
}catch(err){
	console.log(err);
	console.log(color.red('SERVER OFF-LINE'));
}