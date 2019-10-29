const express = require('express');

const FilialController = require('./controllers/FilialController');

const routes = express.Router();

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


routes.post('/cadastrarFilial', (request, response) => {

    let arrayNotNullAttributes = ['nome_filial', 'cidade'];

    if (verifyAttributesRequestJson(arrayNotNullAttributes, request.body)){
        FilialController.store(request, response);
    } else {
        response.status(400).json({
            "return" :  false,
            "returnMessage" : "Campos inválidos para o cadastro desejado!"
        });
    }

});




module.exports = routes;