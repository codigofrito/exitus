const {
    view_resposta_egresso
} = require('../models');
const color = require('colors');

module.exports = {

    async index(request, response) {

        let registros = await view_resposta_egresso.findAll({
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
            cpf_egresso,
            id_entrevista,
        } = request.body;

        let registro = await view_resposta_egresso.findOne({
            where: {
                cpf_egresso,
                id_entrevista,
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
};