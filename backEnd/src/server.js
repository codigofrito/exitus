const express = require('express');
//const routes = require('./routes')
const p = require('./controllers/PessoaController')
//require('./database');

//const app = express();

//app.use(express.json());
//app.use(routes);

//app.listen(3333);
const data = {
    cpf: '123456789',
    email: '123@mail.com'
}
p.update(data)