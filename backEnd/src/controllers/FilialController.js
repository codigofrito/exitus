const {
    filial
} = require('../models');
const color = require('colors');

module.exports = {

    async index(request, response) {
        let registros = await filial.findAll({
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso *-*`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =/`))
            return []
        });

        return response.status(200).json(registros);
    },

    async show(request, response) {
        const {
            id
        } = request.body;

        let registro = await filial.findOne({
            where: {
                id
            },
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso =D`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =O`))
            return []
        });

        return response.status(200).json(registro);
    },

    async store(request, response) {
        const {
            nome_filial,
            estado,
            cidade,
        } = request.body;

        let novoRegistro = await filial.create({
            nome_filial,
            estado,
            cidade,
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso =D`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =O`))
            return []
        });

        return response.status(200).json(novoRegistro);
    },

    async destroy(request, response) {
        const {
            id
        } = request.body;

        await filial.destroy({
            where: {
                id
            },
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso ^^`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =O`))
            return []
        });

        return response.status(200).json(request.body);
    },

    async update(request, response) {
        const {
            id,
            nome_filial,
            estado,
            cidade,
        } = request.body;

        await pessoa.update({
            nome_filial,
            estado,
            cidade,
        }, {
            where: {
                id
            }
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso *-*`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =/`))
            return []
        });

        return response.status(200).json(request.body);
    },
};