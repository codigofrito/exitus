const {
    pergunta
} = require('../models');
const color = require('colors');

module.exports = {

    async index(request, response) {
        let registros = await pergunta.findAll({
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso *-*`));
            return resultado;
        }).catch((err) => {
            console.log(err);
            console.log(color.red(`Falha ao executar operação =/`));
            return [];
        });

        return response.status(200).json(registros);
    },

    async show(request, response) {
        const {
            id
        } = request.body;

        let registro = await pergunta.findOne({
            where: {
                id
            },
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso =D`));
            return resultado;
        }).catch((err) => {
            console.log(err);
            console.log(color.red(`Falha ao executar operação =O`));
            return [];
        });

        return response.status(200).json(registro);
    },

    async store(request, response) {
        const {
            id_entrevista,
            pergunta,
        } = request.body;

        let novoRegistro = await pergunta.create({
            id_entrevista,
            pergunta,
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso =D`));
            return resultado;
        }).catch((err) => {
            console.log(err);
            console.log(color.red(`Falha ao executar operação =O`));
            return [];
        });

        return response.status(200).json(novoRegistro);
    },

    async destroy(request, response) {
        const {
            id
        } = request.body;

        await pergunta.destroy({
            where: {
                id
            },
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso ^^`));
            return resultado;
        }).catch((err) => {
            console.log(err);
            console.log(color.red(`Falha ao executar operação =O`));
            return []
        });

        return response.status(200).json(request.body);
    },

    async update(request, response) {
        const {
            id,
            id_entrevista,
            pergunta,
        } = request.body;

        await pessoa.update({
            id_entrevista,
            pergunta,
        }, {
            where: {
                id
            }
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso *-*`));
            return resultado;
        }).catch((err) => {
            console.log(err);
            console.log(color.red(`Falha ao executar operação =/`));
            return [];
        });

        return response.status(200).json(request.body);
    },
};