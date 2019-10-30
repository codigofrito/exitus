const express = require('express');
const routes = express.Router();
const PessoaController = require('./controllers/PessoaController');


routes.post('/pessoa', PessoaController.store)
routes.put('/pessoaFind', PessoaController.update)


/*
function verifyAttributesRequestJson(arrayNotNullAttributes, requestJson){

    let isValidJson = true;

    arrayNotNullAttributes.forEach((attributeArray) => {
        
        if (!requestJson.hasOwnProperty(attributeArray)){
            isValidJson = false
        }   
    })

    return isValidJson;

}


//======================================================================================================


routes.post('/cadastrarPessoa', (request, response) => {

    let arrayNotNullAttributes = ['nome_Pessoa', 'cidade'];

    if (verifyAttributesRequestJson(arrayNotNullAttributes, request.body)){
        FilialController.store(request, response);
    } else {
        response.status(400).json({
            "return" :  false,
            "returnMessage" : "Campos inválidos para o cadastro desejado!"
        });
    }

});
*/

module.exports = routes;