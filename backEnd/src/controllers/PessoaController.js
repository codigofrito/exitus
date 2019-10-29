const {
    pessoa
} = require('../models/');
const color = require('colors')
module.exports = {

    async index(requisition, response) {
        return pessoa.findAll({
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso *-*`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =/`))
            return []
        })
    },

    async show(requisition, response) {
        const {
            cpf
        } = requisition
        return pessoa.findOne({
            where: cpf,
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso =D`))
            return response.JSON(resultado)
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =O`))
            return response.JSON([])
        })
    },

    async store(requisition, response) {
        const {
            cpf,
            nome,
            sobrenome,
            data_nascimento,
            email,
            celular
        } = requisition
        pessoa.create({
            cpf,
            nome,
            sobrenome,
            data_nascimento,
            email,
            celular
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso =D`))
            return response.JSON(resultado)
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =O`))
            return response.JSON([])
        })
    },

    async destroy(requisition, response) {
        const {
            cpf
        } = requisition
        return pessoa.destroy({
            where: cpf,
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso ^^`))
            return response.JSON(resultado)
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =O`))
            return response.JSON([])
        })

    },

    async update(requisition, response) {
        const campos = {
            cpf,
            nome,
            sobrenome,
            data_nascimento,
            email,
            celular
        } = requisition
        const camposValidados = []
        
        for([chave, valor] of Object.entries(campos)){
            if(valor && chave != cpf){
                camposValidados.push(chave)
            }
        }

        const camposAAtualizar = (campos) => {
            let resultado = ''
            campos.forEach((valor, indice, array) => {
                resultado = '"' + valor + '" : "' + valor + '",'
            })
            return JSON.parse(('{' + resultado.substr(0, resultado.length -1) + '}'))
        }
        
        pessoa.update(
            camposAAtualizar(camposValidados), {
            where: cpf
        }).then((resultado) => {
            console.log('ok')
            console.log(resultado)
        }).catch((err) => {
            console.log(err)
        })
    }
}