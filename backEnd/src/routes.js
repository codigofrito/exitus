const express = require('express');
const routes = express.Router();

const PessoaController = require('./controllers/PessoaController');
const EgressoController = require('./controllers/EgressoController')

//===PessoaController.js Routes===//
routes.post('/newPerson', PessoaController.store);
routes.get('/showAllPerson', PessoaController.index);
routes.get('/searchPerson', PessoaController.show);
routes.delete('/deletePerson', PessoaController.destroy);
routes.put('/updatePerson', PessoaController.update);
//=== -------------------------===//

//===EgressoController.js Routes===//
routes.post('/newEgresso', EgressoController.store);
routes.get('/showAllEgresso', EgressoController.index);
routes.get('/searchEgresso', EgressoController.show);
routes.delete('/deleteEgresso', EgressoController.destroy);
routes.put('/updateEgresso', EgressoController.update);
//=== -------------------------===//

module.exports = routes;


















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

