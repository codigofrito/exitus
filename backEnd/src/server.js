const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const color = require('colors');

const app = express();

app.options('*', cors);
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(routes);

app.listen(8080) ?
	console.log(color.yellow('SERVER ON-LINE')) 
	: console.log(color.red('SERVER OFF-LINE'));